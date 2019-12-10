function shuffleArray(array) {
  array.sort(() => Math.random() - 0.5);
}

function random_matrix(no_rows, no_cols, no_obs) {

	var arr = new Array(no_rows * no_cols);
	for (var i = 0; i < no_rows * no_cols; i++)
    {
		if (i < no_obs) {
			arr[i]= 1;
		}
		else {
			arr[i]= 0;
		}
	}
	shuffleArray (arr);
	var start_position = {'x': 0, 'y': 0};
	var rand_pos = Math.random(0, (no_rows * no_cols - no_obs) - 1);
	var matrix = new Array(no_rows);
	var count = 0;

	for (var i = 0; i < no_rows; i++)
    {
		matrix[i] = new Array(no_cols);
		for (var j = 0; j < no_cols; j++)
        {
			matrix[i][j] = arr [i * no_cols + j];
			if (arr [j] == 0) {
				if (count == rand_pos) {
					start_position = {'x': j, 'y': i};
				}
				count++;
			}
		}
	}
	return [matrix, start_position];
}



/*
matrix = random_matrix(10,10,10);
for (var i = 0; i < matrix.length; i++) {
  for (var j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j]);
  }
}
*/
