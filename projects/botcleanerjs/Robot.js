
class Robot {
    constructor(matrix, start_position, start_direction) {
      this.matrix = matrix;
  		this.current_position = {'x': start_position ['x'], 'y': start_position ['y']};
  		this.current_direction = start_direction;
  		this.__visited_position = [[(str (start_position ['x']) + '_') + str (start_position ['y']), 1]];
  		this.move_count = 0;
  		this.turn_count = 0;
  		this.loggable = true;
    }

    printLog(toPrint)
    {
      if(this.loggable)
      {
        console.log(toPrint);
      }
    }

    turn_left()
    {
  		this.current_direction = (this.current_direction + 1)% 4;
  		this.turn_count++;
      this.printLog("Left Turn");

  	}
    turn_right()
    {
      this.current_direction = (this.current_direction + 3)% 4;
      this.turn_count++;
      this.printLog("Right Turn");
    }

	cosnew(direction) {

		return int (Math.abs (2 - direction) - 1);
	}
	sinnew(direction) {

		return int (1 - Math.abs (direction - 1));
	}

    move()
    {
    		var next_pos_x = this.current_position ['x'] + this.cosnew (this.current_direction);
    		var next_pos_y = this.current_position ['y'] - this.sinnew (this.current_direction);
    		if (!(this.can_move(next_pos_x, next_pos_y))) {
    			this.__visited_position [(str (next_pos_x) + '_') + str (next_pos_y)] = -(1);
    			return false;
    		}
    		this.move_count++;
    		this.current_position ['x'] = next_pos_x;
    		this.current_position ['y'] = next_pos_y;
    		this.__visited_position [(str (next_pos_x) + '_') + str (next_pos_y)] = 1;
    		if (this.loggable)
        {
    			this.log ();
    		}
    		return true;
    	}

      //can think of adding a callback later
      can_move(next_pos_x, next_pos_y)
      {
        if (next_pos_x < 0 || next_pos_y < 0) {
          return false;
        }
        if (next_pos_y >= (this.matrix.length)) {
          return false;
        }
        if (next_pos_x >=  (this.matrix[0].length)) {
          return false;
        }
        return this.matrix[next_pos_y][next_pos_x] == 0;
      }

      log(){

    		for (var i = 0; i <  (this.matrix.length); i++) {
    			var text = '';
    			for (var j = 0; j <  (this.matrix [i].length); j++) {
    				if (i == this.current_position ['y'] && j == this.current_position ['x']) {
    					if (this.current_direction == 0) {
    						text += '>';
    					}
    					else if (this.current_direction == 1) {
    						text += '^';
    					}
    					else if (this.current_direction == 2) {
    						text += '<';
    					}
    					else {
    						text += 'v';
    					}
    				}
    				else if (this.__visited_position[((str (j) + '_') + str (i))] == 1) {
    					text += '*';
    				}
    				else if (this.matrix [i] [j] == 0) {
    					text += '.';
    				}
    				else {
    					text += '|';
    				}
    			}
    			console.log(text);
    		}
    		console.log('');
    	}
}
