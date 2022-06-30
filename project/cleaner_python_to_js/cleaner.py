from p5 import *


import random

def cos(direction):
    """naive implementation of cos"""
    return int(abs(2 - direction) - 1)

def sin(direction):
    """naive implementation of cos"""
    return int(1 - abs(direction - 1))

def print_observed_map(sweeper):
    min_y = min(sweeper.observed_map)
    min_dict_x = min(sweeper.observed_map, key=lambda x: min(sweeper.observed_map[x]))
    min_x = min(sweeper.observed_map[min_dict_x])
    max_y = max(sweeper.observed_map)
    max_dict_x = max(sweeper.observed_map, key=lambda x: max(sweeper.observed_map[x]))
    max_x = max(sweeper.observed_map[max_dict_x])

    for i in range(min_y, max_y + 1):
        text = ""
        for j in range(min_x, max_x + 1):
            item = sweeper.observed_map[i].get(j, None)
            if sweeper.current_position['x'] == j \
                    and sweeper.current_position['y'] == i:
                text += 'o'
            elif not item:
                text += ' '
            elif item == 1:
                text += '*'
            else:
                text += '|'
        print(text)
    print('')





def bfs(start_position, start_direction, finish_check_fn, adjacent_check_fn, spiral):
    # this is just simple BFS implementation
    checked = {}
    queue = []
    queue.append({'x': start_position['x'], 'y': start_position['y'], 'direction': None, 'parent': None})

    while queue:
        current = queue.pop(0)
        try:
            if current['direction'] is not None:
                start_direction = current['direction']
            finished = finish_check_fn(current)
            if finished:
                path = []
                while current['parent']:
                    path.append(current['direction'])
                    current = current['parent']
                return path
            for node in adjacent(current, start_direction, spiral):
                key = str(node['x']) + '_' + str(node['y'])
                if not checked.get(key, None) \
                        and adjacent_check_fn(node):
                    checked[key] = 1
                    queue.append(node)
        except:
            break

def adjacent(current, start_direction, spiral):
    if spiral:
        if start_direction == 0:
            return [
                {'x': current['x'], 'y': current['y'] - 1, 'direction': 1, 'parent': current},
                {'x': current['x'] + 1, 'y': current['y'], 'direction': 0, 'parent': current},
                {'x': current['x'], 'y': current['y'] + 1, 'direction': 3, 'parent': current},
                {'x': current['x'] - 1, 'y': current['y'], 'direction': 2, 'parent': current}
            ]
        if start_direction == 1:
            return [
                {'x': current['x'] - 1, 'y': current['y'], 'direction': 2, 'parent': current},
                {'x': current['x'], 'y': current['y'] - 1, 'direction': 1, 'parent': current},
                {'x': current['x'] + 1, 'y': current['y'], 'direction': 0, 'parent': current},
                {'x': current['x'], 'y': current['y'] + 1, 'direction': 3, 'parent': current}
            ]
        if start_direction == 2:
            return [
                {'x': current['x'], 'y': current['y'] + 1, 'direction': 3, 'parent': current},
                {'x': current['x'] - 1, 'y': current['y'], 'direction': 2, 'parent': current},
                {'x': current['x'], 'y': current['y'] - 1, 'direction': 1, 'parent': current},
                {'x': current['x'] + 1, 'y': current['y'], 'direction': 0, 'parent': current}
            ]
    return [
        {'x': current['x'] + 1, 'y': current['y'], 'direction': 0, 'parent': current},
        {'x': current['x'], 'y': current['y'] + 1, 'direction': 3, 'parent': current},
        {'x': current['x'] - 1, 'y': current['y'], 'direction': 2, 'parent': current},
        {'x': current['x'], 'y': current['y'] - 1, 'direction': 1, 'parent': current}
    ]


class Robot(object):
    
    def __init__(self, matrix, start_position, start_direction):
        self.matrix = matrix
        self.current_position = {'x': start_position['x'], 'y': start_position['y']}
        self.current_direction = start_direction
        self.__visited_position = {str(start_position['x']) + '_' + str(start_position['y']): 1}
        self.move_count = 0
        self.turn_count = 0
        self.loggable = False

    def turn_left(self):
        """turn 90 degree counter-clockwise"""
        self.current_direction = (self.current_direction + 1) % 4
        self.turn_count += 1
        return self

    def turn_right(self):
        """turn 90 degree clockwise"""
        self.current_direction = (self.current_direction + 3) % 4
        self.turn_count += 1
        return self

    def move(self):
        """move ahead"""
        next_pos_x = self.current_position['x'] + cos(self.current_direction)
        next_pos_y = self.current_position['y'] - sin(self.current_direction)
        if not self.__can_move(next_pos_x, next_pos_y):
            self.__visited_position[str(next_pos_x) + "_" + str(next_pos_y)] = -1
            return False
        self.move_count += 1
        self.current_position['x'] = next_pos_x
        self.current_position['y'] = next_pos_y
        self.__visited_position[str(next_pos_x) + "_" + str(next_pos_y)] = 1
        if self.loggable:
            self.log()
        return True

    def __can_move(self, next_pos_x, next_pos_y):
        if next_pos_x < 0 or next_pos_y < 0:
            return False
        if next_pos_y >= len(self.matrix):
            return False
        if next_pos_x >= len(self.matrix[0]):
            return False
        return self.matrix[next_pos_y][next_pos_x] == 0

    def log(self):
        for i in range(len(self.matrix)):
            text = ""
            for j in range(len(self.matrix[i])):
                if i == self.current_position['y'] and j == self.current_position['x']:
                    if self.current_direction == 0:
                        text += '>'
                    elif self.current_direction == 1:
                        text += '^'
                    elif self.current_direction == 2:
                        text += '<'
                    else:
                        text += 'v'
                elif self.__visited_position.get(str(j) + "_" + str(i), None) == 1:
                    text += '*'
                elif self.matrix[i][j] == 0:
                    text += '.'
                else:
                    text += '|'
            print(text)
        print('')



class Sweeper(object):
    def __init__(self, robot):
        self.current_direction = 0 # can be from 0 to 3, mapped to 0-270 degrees
        self.current_position = {'x': 0, 'y': 0}
        self.observed_map = {0: {0: 1}}
        self.robot = robot
        self.loggable = True
        self.spiral = True
        self.targPath=[]
        self.targPathCount=0
    
    def move(self):
        self.log('looking for nearest unvisited position')
        target_path = self.find_nearest_unvisited_pos()
        if not target_path:
            self.log('cannot find nearest unvisited position, cleaned')
            return False
        self.log('found nearest unvisited position, moving there')
        self.move_with_path(target_path)
        return True

    def find_nearest_unvisited_pos(self):
        return bfs(self.current_position, self.current_direction, self.node_unvisited, self.adjacent_movable, self.spiral)

    def node_unvisited(self, node):
        map_node = self.get_node_from_map(node)
        return map_node is None

    def adjacent_movable(self, node):
        map_node = self.get_node_from_map(node)
        return map_node != -1

    def get_node_from_map(self, node):
        if not node['y'] in self.observed_map \
                or not node['x'] in self.observed_map[node['y']]:
            return None
        return self.observed_map[node['y']][node['x']]

    def move_with_path(self, target_path):
        for path in reversed(target_path):
            left_turns = path - self.current_direction
            if left_turns < 0:
                left_turns += 4
            # we don't need this, but in reality turning is costly
            # so instead of turning left 3 times, we'll turn right 1 time
            if left_turns == 3:
                self.turn_robot_right()
            else:
                for _ in range(left_turns):
                    self.turn_robot_left()
            self.move_robot()

    def move_robot(self):
        next_pos = self.calculate_next_pos()

        if not self.observed_map.get(next_pos['y'], None):
            self.observed_map[next_pos['y']] = {}

        if self.robot.move():            
            # mark the point as visited
            self.observed_map[next_pos['y']][next_pos['x']] = 1
            self.current_position = next_pos
            fill_observed_map(self)
            if self.loggable:
                self.print_map()
            return True
        # mark the point as inaccessible
        self.observed_map[next_pos['y']][next_pos['x']] = -1
        fill_observed_map(self)
        if self.loggable:
            self.print_map()
        return False

    def calculate_next_pos(self):
        next_pos_x = self.current_position['x'] + cos(self.current_direction)
        next_pos_y = self.current_position['y'] - sin(self.current_direction)
        return {'x': next_pos_x, 'y': next_pos_y}

    def turn_robot_left(self):
        self.current_direction = (self.current_direction + 1) % 4
        self.robot.turn_left()

    def turn_robot_right(self):
        self.current_direction = (self.current_direction + 3) % 4
        self.robot.turn_right()

    def print_map(self):
        print_observed_map(self)

    def log(self, text):
        if self.loggable:
            print(text)



def random_matrix(no_rows, no_cols, no_obs):
    arr = []
    for i in range(no_rows * no_cols):
        if i < no_obs:
            arr.append(1)
        else:
            arr.append(0)

    random.shuffle(arr)

    start_position = {'x': 0, 'y': 0}
    rand_pos = random.randint(0, no_rows * no_cols - no_obs - 1)

    matrix = []
    count = 0
    for i in range(no_rows):
        row = []
        for j in range(no_cols):
            row.append(arr[i * no_cols + j])
            if arr[j] == 0:
                if count == rand_pos:
                    start_position = {'x': j, 'y': i}
                count += 1
        matrix.append(row)
    return matrix, start_position

 
       
    



def fill_observed_map(sweeper):
    global step_size
    min_y = min(sweeper.observed_map)
    min_dict_x = min(sweeper.observed_map, key=lambda x: min(sweeper.observed_map[x]))
    min_x = min(sweeper.observed_map[min_dict_x])
    max_y = max(sweeper.observed_map)
    max_dict_x = max(sweeper.observed_map, key=lambda x: max(sweeper.observed_map[x]))
    max_x = max(sweeper.observed_map[max_dict_x])
    
    w=step_size


    for i in range(min_y, max_y + 1):
        for j in range(min_x, max_x + 1):
            item = sweeper.observed_map[i].get(j, None)
            if sweeper.current_position['x'] == j \
                    and sweeper.current_position['y'] == i:
                fill(255,0,0)
            elif not item:
                fill(255)
            elif item == 1:
                fill(0,255,0)
            else:
                fill(0)
            stroke(0)
            rect(((i-min_y) * w, (j-min_x) * w), w-1, w-1)



def setup():
    size(640, 360)
    no_stroke()
    background(204)



isStarted=False


no_rows = 10
no_cols = 10
no_obs = 10
step_size=20
isFinished=False
sweeper=None
def draw():
    global isStarted, no_rows,no_cols, no_obs, isFinished, step_size, sweeper
    if isFinished:
        return
    if not isStarted:
        matrix, start_position = random_matrix(no_rows, no_cols, no_obs)
        start_direction = random.randint(0, 3)
        
        # run with bfs
        robot = Robot(matrix, start_position, start_direction)
        sweeper = Sweeper(robot)
        
        sweeper.loggable = False

        print("Initializing to start")
        
        isStarted=True

        matrix[start_position["x"]][start_position["y"]]=1

    else:
        #print("Running")
        a = sweeper.move()
        
    
run()
