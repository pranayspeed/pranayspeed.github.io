// Transcrypt'ed from Python, 2019-12-07 20:31:49
//var random = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, all, any, assert, bool, bytearray, bytes, callable, chr, deepcopy, delattr, dict, dir, divmod, enumerate, getattr, hasattr, isinstance, issubclass, len, list, object, ord, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, setattr, sorted, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_random__ from './random.js';
__nest__ (random, '', __module_random__);
import {ADD, ALT, ARROW, AUDIO, AUTO, AXES, BACKSPACE, BASELINE, BEVEL, BEZIER, BLEND, BLUR, BOLD, BOLDITALIC, BOTTOM, BURN, CENTER, CHORD, CLAMP, CLOSE, CONTROL, CORNER, CORNERS, CROSS, CURVE, DARKEST, DEGREES, DEG_TO_RAD, DELETE, DIFFERENCE, DILATE, DODGE, DOWN_ARROW, ENTER, ERODE, ESCAPE, EXCLUSION, FILL, GRAY, GRID, HALF_PI, HAND, HARD_LIGHT, HSB, HSL, IMAGE, IMMEDIATE, INVERT, ITALIC, LANDSCAPE, LEFT, LEFT_ARROW, LIGHTEST, LINEAR, LINES, LINE_LOOP, LINE_STRIP, MIRROR, MITER, MOVE, MULTIPLY, NEAREST, NORMAL, OPAQUE, OPEN, OPTION, OVERLAY, P2D, PI, PIE, POINTS, PORTRAIT, POSTERIZE, PROJECT, QUADRATIC, QUADS, QUAD_STRIP, QUARTER_PI, RADIANS, RADIUS, RAD_TO_DEG, REPEAT, REPLACE, RETURN, RGB, RIGHT, RIGHT_ARROW, ROUND, SCREEN, SHIFT, SOFT_LIGHT, SQUARE, STROKE, SUBTRACT, TAB, TAU, TEXT, TEXTURE, THRESHOLD, TOP, TRIANGLES, TRIANGLE_FAN, TRIANGLE_STRIP, TWO_PI, UP_ARROW, VIDEO, WAIT, WEBGL, _CTX_MIDDLE, _DEFAULT_FILL, _DEFAULT_LEADMULT, _DEFAULT_STROKE, _DEFAULT_TEXT_FILL, _P5_INSTANCE, abs, accelerationX, accelerationY, accelerationZ, acos, add_library, alpha, ambientLight, ambientMaterial, angleMode, append, applyMatrix, arc, arrayCopy, asin, atan, atan2, background, beginContour, beginShape, bezier, bezierDetail, bezierPoint, bezierTangent, bezierVertex, blend, blendMode, blue, boolean, box, brightness, byte, camera, ceil, changed, char, circle, color, colorMode, concat, cone, constrain, copy, createA, createAudio, createButton, createCamera, createCanvas, createCapture, createCheckbox, createColorPicker, createDiv, createElement, createFileInput, createGraphics, createImage, createImg, createInput, createNumberDict, createP, createRadio, createSelect, createShader, createSlider, createSpan, createStringDict, createVector, createVideo, createWriter, cursor, curve, curveDetail, curvePoint, curveTangent, curveTightness, curveVertex, cylinder, day, debugMode, degrees, deviceOrientation, directionalLight, disableFriendlyErrors, displayDensity, displayHeight, displayWidth, dist, ellipse, ellipseMode, ellipsoid, endContour, endShape, exp, fill, filter, float, floor, focused, frameCount, frameRate, fullscreen, getURL, getURLParams, getURLPath, global_p5_injection, green, height, hex, hour, httpDo, httpGet, httpPost, hue, image, imageMode, input, int, join, key, keyCode, keyIsDown, keyIsPressed, lerp, lerpColor, lightness, lights, line, loadBytes, loadFont, loadImage, loadJSON, loadModel, loadPixels, loadShader, loadStrings, loadTable, loadXML, log, logOnloaded, loop, mag, map, match, matchAll, max, millis, min, minute, model, month, mouseButton, mouseIsPressed, mouseX, mouseY, nf, nfc, nfp, nfs, noCanvas, noCursor, noDebugMode, noFill, noLoop, noSmooth, noStroke, noTint, noise, noiseDetail, noiseSeed, norm, normalMaterial, orbitControl, ortho, pAccelerationX, pAccelerationY, pAccelerationZ, pRotationX, pRotationY, pRotationZ, perspective, pixelDensity, pixels, plane, pmouseX, pmouseY, point, pointLight, popMatrix, popStyle, pow, pre_draw, preload, push, pushMatrix, pushStyle, pwinMouseX, pwinMouseY, py_clear, py_get, py_pop, py_sort, py_split, quad, quadraticVertex, radians, random, randomGaussian, randomSeed, rect, rectMode, red, redraw, remove, removeElements, resetMatrix, resetShader, resizeCanvas, reverse, rotate, rotateX, rotateY, rotateZ, rotationX, rotationY, rotationZ, round, saturation, save, saveCanvas, saveFrames, saveJSON, saveStrings, saveTable, scale, second, select, selectAll, set, setAttributes, setCamera, setMoveThreshold, setShakeThreshold, shader, shearX, shearY, shininess, shorten, shuffle, size, smooth, specularMaterial, sphere, splice, splitTokens, sq, sqrt, square, start_p5, str, stroke, strokeCap, strokeJoin, strokeWeight, subset, tan, text, textAlign, textAscent, textDescent, textFont, textLeading, textSize, textStyle, textWidth, texture, textureMode, textureWrap, tint, torus, touches, translate, triangle, trim, turnAxis, unchar, unhex, updatePixels, vertex, width, winMouseX, winMouseY, windowHeight, windowWidth, year} from './pyp5js.js';
var __name__ = 'cleaner';
export var cos = function (direction) {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'direction': var direction = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	return int (abs (2 - direction) - 1);
};
export var sin = function (direction) {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'direction': var direction = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	return int (1 - abs (direction - 1));
};
export var print_observed_map = function (sweeper) {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'sweeper': var sweeper = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	var min_y = min (sweeper.observed_map);
	var min_dict_x = min (sweeper.observed_map, __kwargtrans__ ({key: (function __lambda__ (x) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return min (sweeper.observed_map [x]);
	})}));
	var min_x = min (sweeper.observed_map [min_dict_x]);
	var max_y = max (sweeper.observed_map);
	var max_dict_x = max (sweeper.observed_map, __kwargtrans__ ({key: (function __lambda__ (x) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return max (sweeper.observed_map [x]);
	})}));
	var max_x = max (sweeper.observed_map [max_dict_x]);
	for (var i = min_y; i < max_y + 1; i++) {
		var text = '';
		for (var j = min_x; j < max_x + 1; j++) {
			var item = sweeper.observed_map [i].py_get (j, null);
			if (sweeper.current_position ['x'] == j && sweeper.current_position ['y'] == i) {
				text += 'o';
			}
			else if (!(item)) {
				text += ' ';
			}
			else if (item == 1) {
				text += '*';
			}
			else {
				text += '|';
			}
		}
		print (text);
	}
	print ('');
};
export var bfs = function (start_position, start_direction, finish_check_fn, adjacent_check_fn, spiral) {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'start_position': var start_position = __allkwargs0__ [__attrib0__]; break;
					case 'start_direction': var start_direction = __allkwargs0__ [__attrib0__]; break;
					case 'finish_check_fn': var finish_check_fn = __allkwargs0__ [__attrib0__]; break;
					case 'adjacent_check_fn': var adjacent_check_fn = __allkwargs0__ [__attrib0__]; break;
					case 'spiral': var spiral = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	var checked = dict ({});
	var queue = list ([]);
	queue.append (dict ({'x': start_position ['x'], 'y': start_position ['y'], 'direction': null, 'parent': null}));
	while (queue) {
		var current = queue.py_pop (0);
		try {
			if (current ['direction'] !== null) {
				var start_direction = current ['direction'];
			}
			var finished = finish_check_fn (current);
			if (finished) {
				var path = list ([]);
				while (current ['parent']) {
					path.append (current ['direction']);
					var current = current ['parent'];
				}
				return path;
			}
			for (var node of adjacent (current, start_direction, spiral)) {
				var key = (str (node ['x']) + '_') + str (node ['y']);
				if (!(checked.py_get (key, null)) && adjacent_check_fn (node)) {
					checked [key] = 1;
					queue.append (node);
				}
			}
		}
		catch (__except0__) {
			break;
		}
	}
};
export var adjacent = function (current, start_direction, spiral) {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'current': var current = __allkwargs0__ [__attrib0__]; break;
					case 'start_direction': var start_direction = __allkwargs0__ [__attrib0__]; break;
					case 'spiral': var spiral = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	if (spiral) {
		if (start_direction == 0) {
			return list ([dict ({'x': current ['x'], 'y': current ['y'] - 1, 'direction': 1, 'parent': current}), dict ({'x': current ['x'] + 1, 'y': current ['y'], 'direction': 0, 'parent': current}), dict ({'x': current ['x'], 'y': current ['y'] + 1, 'direction': 3, 'parent': current}), dict ({'x': current ['x'] - 1, 'y': current ['y'], 'direction': 2, 'parent': current})]);
		}
		if (start_direction == 1) {
			return list ([dict ({'x': current ['x'] - 1, 'y': current ['y'], 'direction': 2, 'parent': current}), dict ({'x': current ['x'], 'y': current ['y'] - 1, 'direction': 1, 'parent': current}), dict ({'x': current ['x'] + 1, 'y': current ['y'], 'direction': 0, 'parent': current}), dict ({'x': current ['x'], 'y': current ['y'] + 1, 'direction': 3, 'parent': current})]);
		}
		if (start_direction == 2) {
			return list ([dict ({'x': current ['x'], 'y': current ['y'] + 1, 'direction': 3, 'parent': current}), dict ({'x': current ['x'] - 1, 'y': current ['y'], 'direction': 2, 'parent': current}), dict ({'x': current ['x'], 'y': current ['y'] - 1, 'direction': 1, 'parent': current}), dict ({'x': current ['x'] + 1, 'y': current ['y'], 'direction': 0, 'parent': current})]);
		}
	}
	return list ([dict ({'x': current ['x'] + 1, 'y': current ['y'], 'direction': 0, 'parent': current}), dict ({'x': current ['x'], 'y': current ['y'] + 1, 'direction': 3, 'parent': current}), dict ({'x': current ['x'] - 1, 'y': current ['y'], 'direction': 2, 'parent': current}), dict ({'x': current ['x'], 'y': current ['y'] - 1, 'direction': 1, 'parent': current})]);
};
export var Robot =  __class__ ('Robot', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, matrix, start_position, start_direction) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'matrix': var matrix = __allkwargs0__ [__attrib0__]; break;
						case 'start_position': var start_position = __allkwargs0__ [__attrib0__]; break;
						case 'start_direction': var start_direction = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.matrix = matrix;
		self.current_position = dict ({'x': start_position ['x'], 'y': start_position ['y']});
		self.current_direction = start_direction;
		self.__visited_position = dict ([[(str (start_position ['x']) + '_') + str (start_position ['y']), 1]]);
		self.move_count = 0;
		self.turn_count = 0;
		self.loggable = false;
	});},
	get turn_left () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.current_direction = __mod__ (self.current_direction + 1, 4);
		self.turn_count++;
		return self;
	});},
	get turn_right () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.current_direction = __mod__ (self.current_direction + 3, 4);
		self.turn_count++;
		return self;
	});},
	get move () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var next_pos_x = self.current_position ['x'] + cos (self.current_direction);
		var next_pos_y = self.current_position ['y'] - sin (self.current_direction);
		if (!(self.__can_move (next_pos_x, next_pos_y))) {
			self.__visited_position [(str (next_pos_x) + '_') + str (next_pos_y)] = -(1);
			return false;
		}
		self.move_count++;
		self.current_position ['x'] = next_pos_x;
		self.current_position ['y'] = next_pos_y;
		self.__visited_position [(str (next_pos_x) + '_') + str (next_pos_y)] = 1;
		if (self.loggable) {
			self.log ();
		}
		return true;
	});},
	get __can_move () {return __get__ (this, function (self, next_pos_x, next_pos_y) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'next_pos_x': var next_pos_x = __allkwargs0__ [__attrib0__]; break;
						case 'next_pos_y': var next_pos_y = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (next_pos_x < 0 || next_pos_y < 0) {
			return false;
		}
		if (next_pos_y >= len (self.matrix)) {
			return false;
		}
		if (next_pos_x >= len (self.matrix [0])) {
			return false;
		}
		return self.matrix [next_pos_y] [next_pos_x] == 0;
	});},
	get log () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		for (var i = 0; i < len (self.matrix); i++) {
			var text = '';
			for (var j = 0; j < len (self.matrix [i]); j++) {
				if (i == self.current_position ['y'] && j == self.current_position ['x']) {
					if (self.current_direction == 0) {
						text += '>';
					}
					else if (self.current_direction == 1) {
						text += '^';
					}
					else if (self.current_direction == 2) {
						text += '<';
					}
					else {
						text += 'v';
					}
				}
				else if (self.__visited_position.py_get ((str (j) + '_') + str (i), null) == 1) {
					text += '*';
				}
				else if (self.matrix [i] [j] == 0) {
					text += '.';
				}
				else {
					text += '|';
				}
			}
			print (text);
		}
		print ('');
	});}
});
export var Sweeper =  __class__ ('Sweeper', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, robot) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'robot': var robot = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.current_direction = 0;
		self.current_position = dict ({'x': 0, 'y': 0});
		self.observed_map = dict ({0: dict ({0: 1})});
		self.robot = robot;
		self.loggable = true;
		self.spiral = true;
		self.targPath = list ([]);
		self.targPathCount = 0;
	});},
	get move () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.log ('looking for nearest unvisited position');
		var target_path = self.find_nearest_unvisited_pos ();
		if (!(target_path)) {
			self.log ('cannot find nearest unvisited position, cleaned');
			return false;
		}
		self.log ('found nearest unvisited position, moving there');
		self.move_with_path (target_path);
		return true;
	});},
	get find_nearest_unvisited_pos () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return bfs (self.current_position, self.current_direction, self.node_unvisited, self.adjacent_movable, self.spiral);
	});},
	get node_unvisited () {return __get__ (this, function (self, node) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var map_node = self.get_node_from_map (node);
		return map_node === null;
	});},
	get adjacent_movable () {return __get__ (this, function (self, node) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var map_node = self.get_node_from_map (node);
		return map_node != -(1);
	});},
	get get_node_from_map () {return __get__ (this, function (self, node) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (!(__in__ (node ['y'], self.observed_map)) || !(__in__ (node ['x'], self.observed_map [node ['y']]))) {
			return null;
		}
		return self.observed_map [node ['y']] [node ['x']];
	});},
	get move_with_path () {return __get__ (this, function (self, target_path) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'target_path': var target_path = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		for (var path of py_reversed (target_path)) {
			var left_turns = path - self.current_direction;
			if (left_turns < 0) {
				left_turns += 4;
			}
			if (left_turns == 3) {
				self.turn_robot_right ();
			}
			else {
				for (var _ = 0; _ < left_turns; _++) {
					self.turn_robot_left ();
				}
			}
			self.move_robot ();
		}
	});},
	get move_robot () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var next_pos = self.calculate_next_pos ();
		if (!(self.observed_map.py_get (next_pos ['y'], null))) {
			self.observed_map [next_pos ['y']] = dict ({});
		}
		if (self.robot.move ()) {
			self.observed_map [next_pos ['y']] [next_pos ['x']] = 1;
			self.current_position = next_pos;
			fill_observed_map (self);
			if (self.loggable) {
				self.print_map ();
			}
			return true;
		}
		self.observed_map [next_pos ['y']] [next_pos ['x']] = -(1);
		fill_observed_map (self);
		if (self.loggable) {
			self.print_map ();
		}
		return false;
	});},
	get calculate_next_pos () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var next_pos_x = self.current_position ['x'] + cos (self.current_direction);
		var next_pos_y = self.current_position ['y'] - sin (self.current_direction);
		return dict ({'x': next_pos_x, 'y': next_pos_y});
	});},
	get turn_robot_left () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.current_direction = __mod__ (self.current_direction + 1, 4);
		self.robot.turn_left ();
	});},
	get turn_robot_right () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.current_direction = __mod__ (self.current_direction + 3, 4);
		self.robot.turn_right ();
	});},
	get print_map () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		print_observed_map (self);
	});},
	get log () {return __get__ (this, function (self, text) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'text': var text = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self.loggable) {
			print (text);
		}
	});}
});
export var random_matrix = function (no_rows, no_cols, no_obs) {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'no_rows': var no_rows = __allkwargs0__ [__attrib0__]; break;
					case 'no_cols': var no_cols = __allkwargs0__ [__attrib0__]; break;
					case 'no_obs': var no_obs = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	var arr = list ([]);
	for (var i = 0; i < no_rows * no_cols; i++) {
		if (i < no_obs) {
			arr.append (1);
		}
		else {
			arr.append (0);
		}
	}
	random.shuffle (arr);
	var start_position = dict ({'x': 0, 'y': 0});
	var rand_pos = random.randint (0, (no_rows * no_cols - no_obs) - 1);
	var matrix = list ([]);
	var count = 0;
	for (var i = 0; i < no_rows; i++) {
		var row = list ([]);
		for (var j = 0; j < no_cols; j++) {
			row.append (arr [i * no_cols + j]);
			if (arr [j] == 0) {
				if (count == rand_pos) {
					var start_position = dict ({'x': j, 'y': i});
				}
				count++;
			}
		}
		matrix.append (row);
	}
	return tuple ([matrix, start_position]);
};


export var fill_observed_map = function (sweeper) {
	
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'sweeper': var sweeper = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	var keys = Object.keys(sweeper.observed_map);
  // set initial value as first elemnt in array
	var min_y = min(keys);
	var min_dict_x =sweeper.observed_map[keys[0]];

	var tmpmin=100000;
	for(var i=0;i<len(keys); i++)
	{
		var v=keys[i];
		var keysIn = Object.keys(sweeper.observed_map[v]);
		var inMin = min(keysIn);
		if (inMin < tmpmin)
		{
			min_dict_x = v;
			tmpmin = inMin;
		}
	}

	var min_x = min(Object.keys(sweeper.observed_map [min_dict_x]))
	var max_y = max(keys);

	var keysmax = Object.keys(sweeper.observed_map);

	var max_dict_x =sweeper.observed_map[keysmax[0]];

	var tmpmax=-100000;
	for(var i=0;i<len(keysmax); i++)
	{
		var v1=keysmax[i];
		var keysIn = Object.keys(sweeper.observed_map[v1]);
		var inMax = max(keysIn);
		if (inMax > tmpmax)
		{
			max_dict_x = v1;
			tmpmax = inMax;			
		}
	}

	var max_x = max (Object.keys(sweeper.observed_map [max_dict_x]));
	
	var w = step_size;
	for (var i = min_y; i < max_y + 1; i++) {
		for (var j = min_x; j < max_x + 1; j++) {
			var item = sweeper.observed_map [i].py_get (j, null);
			
			if (sweeper.current_position ['x'] == j && sweeper.current_position ['y'] == i) {
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
};



export var setup = function () {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
			}
		}
	}
	else {
	}
	size (640, 360);
	noStroke ();
	background (204);
		

};
 export var isStarted = false;
export var no_rows = 10;
export var no_cols = 10;
export var no_obs = 10;
export var step_size = 20;
 export var isFinished = false;
export var sweeper = null;
export var draw = function () {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
			}
		}
	}
	else {
	}
	if (isFinished) {
		return ;
	}
	if (!(isStarted)) {
		var __left0__ = random_matrix (no_rows, no_cols, no_obs);
		var matrix = __left0__ [0];
		var start_position = __left0__ [1];
		var start_direction = random.randint (0, 3);
		var robot = Robot (matrix, start_position, start_direction);
		sweeper = Sweeper (robot);
		sweeper.loggable = false;
		//print ('Initializing to start');
		isStarted = true;
		matrix [start_position ['x']] [start_position ['y']] = 1;
	}
	else {
		var a = sweeper.move ();
	}
};




//# sourceMappingURL=cleaner.map