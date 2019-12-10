
function Cleaner(robot) {
    	this.current_direction = 0;
  		this.current_position = {'x': 0, 'y': 0};
  		this.observed_map = {0: {0: 1}};
  		this.robot = robot;
  		this.loggable = true;
  		this.spiral = true;
  		this.targPath = [];
  		this.targPathCount = 0;


    this.move= function() {
      this.log ('looking for nearest unvisited position');
      var target_path = this.find_nearest_unvisited_pos ();
      if (!(target_path)) {
        this.log ('cannot find nearest unvisited position, cleaned');
        return false;
      }
      this.log ('found nearest unvisited position, moving there');
      this.move_with_path (target_path);
      return true;
    }

    this.find_nearest_unvisited_pos = function() {
  		return this.bfs(this.current_position, this.current_direction, this.spiral);
  	}

	this.get_node_from_map = function(node)
	{
		if ((!(node ['y'] in this.observed_map)) || !((node ['x'] in this.observed_map [node ['y']]))) 
		{
			return null;
		}
		return this.observed_map [node ['y']] [node ['x']];

	}


  	this.node_unvisited = function(node)
  	{	
  		var map_node = this.get_node_from_map(node);

  		return map_node == null;
  	}
  	this.adjacent_movable = function(node) {
  		var map_node = this.get_node_from_map(node);
  		return map_node != -(1);
  	}



  	this.move_with_path= function (target_path) {
      reverseTargetPath = target_path.reverse();
  		for (var path of reverseTargetPath) {
  			var left_turns = path - this.current_direction;
  			if (left_turns < 0) {
  				left_turns += 4;
  			}
  			if (left_turns == 3) {
  				this.turn_robot_right ();
  			}
  			else {
  				for (var i = 0; i < left_turns; i++) {
  					this.turn_robot_left ();
  				}
  			}
  			this.move_robot();
  		}
  	}

    this.move_robot= function()
    {
  		var next_pos = this.calculate_next_pos ();

  		if (!(next_pos ['y'] in this.observed_map)) {
  			this.observed_map [next_pos ['y']] = {};
  		}
  		if (this.robot.move()) {
  			this.observed_map [next_pos ['y']] [next_pos ['x']] = 1;
  			this.current_position = next_pos;
  			this.fill_observed_map ();
  			if (this.loggable) {
  				this.print_map();
  			}
  			return true;
  		}
  		this.observed_map [next_pos ['y']] [next_pos ['x']] = -1;
  		this.fill_observed_map ();
  		if (this.loggable) {
  			this.print_map ();
  		}
  		return false;
  	}
	this.cosnew = function (direction) {

		return int (Math.abs (2 - direction) - 1);
	}
	this.sinnew = function (direction) {

		return int (1 - Math.abs (direction - 1));
	}



  	this.calculate_next_pos=function () {
  		var next_pos_x = this.current_position ['x'] + this.cosnew (this.current_direction);
  		var next_pos_y = this.current_position ['y'] - this.sinnew(this.current_direction);
  		return {'x': next_pos_x, 'y': next_pos_y};
  	}
  	this.turn_robot_left= function () {
  		this.current_direction = (this.current_direction + 1)% 4;
  		this.robot.turn_left ();
  	}

  	this.turn_robot_right=function () {

  		this.current_direction = (this.current_direction + 3)% 4;
  		this.robot.turn_right ();
  	}

  	this.print_map=function () {
  		//print_observed_map (self);
  	}

  	this.log =function(text) {

  		if (this.loggable) {
  			console.log(text);
  		}
  	}

    this.fill_observed_map=function() {

		var keys = Object.keys(this.observed_map);
		if(keys ==0)
		{
			return;
		}
      // set initial value as first elemnt in array
    	var min_y = min(keys);
    	var min_dict_x =this.observed_map[keys[0]];
    	var tmpmin=100000;
    	for(var i=0;i<keys.length; i++)
    	{
    		var v=keys[i];
    		var keysIn = Object.keys(this.observed_map[v]);
    		var inMin = min(keysIn);
    		if (inMin < tmpmin)
    		{
    			min_dict_x = v;
    			tmpmin = inMin;
    		}
    	}
    	var min_x = min(Object.keys(this.observed_map[min_dict_x]))
    	var max_y = max(keys);
    	var keysmax = Object.keys(this.observed_map);
    	var max_dict_x =this.observed_map[keysmax[0]];
    	var tmpmax=-100000;
    	for(var i=0;i<keysmax.length; i++)
    	{
    		var v1=keysmax[i];
    		var keysIn = Object.keys(this.observed_map[v1]);
    		var inMax = max(keysIn);
    		if (inMax > tmpmax)
    		{
    			max_dict_x = v1;
    			tmpmax = inMax;
    		}
		}

    	var max_x = max(Object.keys(this.observed_map [max_dict_x]));
    	var w = 20;
    	for (var i = min_y; i < max_y + 1; i++) {
    		for (var j = min_x; j < max_x + 1; j++) {
				var item = null;
				if(i in this.observed_map && j in this.observed_map[i])
				{
				item = this.observed_map[i][j];
			    }
    			if (this.current_position ['x'] == j && this.current_position ['y'] == i) {
    				fill (255, 0, 0);
    			}
    			else if (!(item)) {
    				fill (255);
    			}
    			else if (item == 1) {
    				fill (0, 255, 0);
    			}
    			else {
    				fill (0);
    			}
    			stroke (0);
    			rect ((i - min_y) * w, (j - min_x) * w, w - 1, w - 1);
    		}
    	}
    }


	this.bfs= function(start_position, start_direction,spiral) {

		var checked = {};
		var queue = [];
		queue.push({'x': start_position ['x'], 'y': start_position ['y'], 'direction': null, 'parent': null});
		while (queue) {
			if(queue.length==0)
			{
				break;
			}
			var current = queue.shift();
				if (current['direction']!=null) {
					var start_direction = current ['direction'];
				}
				var finished = this.node_unvisited(current);
				if (finished) {
					var path = [];
					while (current ['parent']) {
						path.push(current ['direction']);
						var current = current['parent'];
					}
					return path;
				}
				for (var node of this.adjacent(current, start_direction, spiral)) {
					var key = (str (node ['x']) + '_') + str (node ['y']);
					if (!( key in checked) && this.adjacent_movable(node)) {
						checked[key] = 1;
						queue.push(node);
					}
				}
	
		}
	}
	
	this.adjacent = function(current, start_direction, spiral) {
		if (spiral) {
			if (start_direction == 0) {
				return [{'x': current ['x'], 'y': current ['y'] - 1, 'direction': 1, 'parent': current}, {'x': current ['x'] + 1, 'y': current ['y'], 'direction': 0, 'parent': current}, {'x': current ['x'], 'y': current ['y'] + 1, 'direction': 3, 'parent': current}, {'x': current ['x'] - 1, 'y': current ['y'], 'direction': 2, 'parent': current}];
			}
			if (start_direction == 1) {
				return [{'x': current ['x'] - 1, 'y': current ['y'], 'direction': 2, 'parent': current}, {'x': current ['x'], 'y': current ['y'] - 1, 'direction': 1, 'parent': current}, {'x': current ['x'] + 1, 'y': current ['y'], 'direction': 0, 'parent': current}, {'x': current ['x'], 'y': current ['y'] + 1, 'direction': 3, 'parent': current}];
			}
			if (start_direction == 2) {
				return [{'x': current ['x'], 'y': current ['y'] + 1, 'direction': 3, 'parent': current}, {'x': current ['x'] - 1, 'y': current ['y'], 'direction': 2, 'parent': current}, {'x': current ['x'], 'y': current ['y'] - 1, 'direction': 1, 'parent': current}, {'x': current ['x'] + 1, 'y': current ['y'], 'direction': 0, 'parent': current}];
			}
		}
		return [{'x': current ['x'] + 1, 'y': current ['y'], 'direction': 0, 'parent': current}, {'x': current ['x'], 'y': current ['y'] + 1, 'direction': 3, 'parent': current}, {'x': current ['x'] - 1, 'y': current ['y'], 'direction': 2, 'parent': current}, {'x': current ['x'], 'y': current ['y'] - 1, 'direction': 1, 'parent': current}];
	}

}
