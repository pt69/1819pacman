var frame = 0;
var richtung = 'rechts';
var pacman_x = -100;
var pacman_y = 50;
var pacman_mund = 0;
var punkt_1 = 'red'
var punkt_2 = 'white'
var punkt_3 = 'white'
var punkt_4 = 'white'
var punkt_5 = 'white'
var punkt_6 = 'white'
var punkt_7 = 'white'
var punkt_8 = 'white'
var punkt_9 = 'white'
var punkt_10 = 'white'
var punkt_11 = 'white'
var punkt_12 = 'white'
var punkt_13 = 'white'
var punkt_14 = 'white'
var punkt_15 = 'white'
var punkt_16 = 'white'
var punkt_17 = 'white'
var punkt_18 = 'white'
var punkt_19 = 'white'
var punkt_20 = 'white'
var punkt_21 = 'white'
var punkt_22 = 'white'
var punkt_23 = 'white'
var punkt_24 = 'white'


function setup() {
  createCanvas(400, 400);
        frameRate(50)
}

function pacman() {
  background('black');
  strokeWeight(10)
	stroke('#FF00FF')
	fill ('black')
	rect (85,85,230, 230)
	fill('yellow')
	arc(200, 200, 150, 150, 0.5, TWO_PI - 0.5, PIE);
	
	
	
  strokeWeight(0);
  
	//Punkte
	
  fill(punkt_1);                                 
  ellipse(50, 50, 15, 15);
  
	fill(punkt_2);                                 
  ellipse(100, 50, 15, 15);
	
	fill(punkt_3);                                 
  ellipse(150, 50, 15, 15);
	
	fill(punkt_4);                                 
  ellipse(200, 50, 15, 15);
	
	fill(punkt_5);                                 
  ellipse(250, 50, 15, 15);
	
	fill(punkt_6);                                 
  ellipse(300, 50, 15, 15);
	
	fill(punkt_7);                                 
  ellipse(350, 50, 15, 15);
	
	fill(punkt_8);                                 
  ellipse(350, 100, 15, 15);
	
	fill(punkt_9);                                 
  ellipse(350, 150, 15, 15);
	
	fill(punkt_10);                                 
  ellipse(350, 200, 15, 15);
	
	fill(punkt_11);                                 
  ellipse(350, 250, 15, 15);
	
	fill(punkt_12);                                 
  ellipse(350, 300, 15, 15);
	
	fill(punkt_13);                                 
  ellipse(350, 350, 15, 15);
	
	fill(punkt_14);                                 
  ellipse(300, 350, 15, 15);
	
	fill(punkt_15);                                 
  ellipse(250, 350, 15, 15);
	
	fill(punkt_16);                                 
  ellipse(200, 350, 15, 15);
	
	fill(punkt_17);                                 
  ellipse(150, 350, 15, 15);
	
	fill(punkt_18);                                 
  ellipse(100, 350, 15, 15);
	
	fill(punkt_19);                                 
  ellipse(50, 350, 15, 15);
  
	fill(punkt_20);                                 
  ellipse(50, 300, 15, 15);
	
	fill(punkt_21);                                 
  ellipse(50, 250, 15, 15);
	
	fill(punkt_22);                                 
  ellipse(50, 200, 15, 15);
	
	fill(punkt_23);                                 
  ellipse(50, 150, 15, 15);
	
	fill(punkt_24);                                 
  ellipse(50, 100, 15, 15);
	
	// Verschwinden der Punkte
	
	if(richtung == 'rechts' && pacman_x == 100) {
    punkt_2 = 'black'
  }
	
	if(richtung == 'rechts' && pacman_x == 150) {
    punkt_3 = 'black'
  }
	
	if(richtung == 'rechts' && pacman_x == 200) {
    punkt_4 = 'black'
  }
	
	if(richtung == 'rechts' && pacman_x == 250) {
    punkt_5 = 'black'
  }
	
	if(richtung == 'rechts' && pacman_x == 300) {
    punkt_6 = 'black'
  }
	
	if(richtung == 'rechts' && pacman_x == 350) {
    punkt_7 = 'black'
  }
	
	if(richtung == 'unten' && pacman_y == 100) {
    punkt_8 = 'black'
  }
	
	if(richtung == 'unten' && pacman_y == 150) {
    punkt_9 = 'black'
  }
	
	if(richtung == 'unten' && pacman_y == 200) {
    punkt_10 = 'black'
  }
	
	if(richtung == 'unten' && pacman_y == 250) {
    punkt_11 = 'black'
  }
	
	if(richtung == 'unten' && pacman_y == 300) {
    punkt_12 = 'black'
  }
	
  if(richtung == 'unten' && pacman_y == 350) {
    punkt_13 = 'black'
  }
	
	if(richtung == 'links' && pacman_x == 300) {
    punkt_14 = 'black'
  }
	
	if(richtung == 'links' && pacman_x == 250) {
    punkt_15 = 'black'
  }
	
	if(richtung == 'links' && pacman_x == 200) {
    punkt_16 = 'black'
  }
	
	if(richtung == 'links' && pacman_x == 150) {
    punkt_17 = 'black'
  }
	
	if(richtung == 'links' && pacman_x == 100) {
    punkt_18 = 'black'
  }
	
	if(richtung == 'links' && pacman_x == 50) {
    punkt_19 = 'black'
  }
	
		if(richtung == 'oben' && pacman_y == 300) {
    punkt_20 = 'black'
  }
	
		if(richtung == 'oben' && pacman_y == 250) {
    punkt_21 = 'black'
  }
	
		if(richtung == 'oben' && pacman_y == 200) {
    punkt_22 = 'black'
  }
	
		if(richtung == 'oben' && pacman_y == 150) {
    punkt_23 = 'black'
  }
	
		if(richtung == 'oben' && pacman_y == 100) {
    punkt_24 = 'black'
  }
    // Drehung des Pacmans
	
		if (richtung=='rechts') {
			if (frame < 25) {
				fill('yellow');
        arc(pacman_x, pacman_y, 40, 40, 0.5, TWO_PI - 0.5, PIE);
			} else if (frame < 50) {
				fill('yellow');
				arc(pacman_x, pacman_y, 40, 40, 0, 360, PIE);
			} else {
				frame = 0;
			}
        //arc(pacman_x, pacman_y, 40, 40, TWO_PI - 0.6, pacman_mund - 0.6, PIE);
		} else if (richtung=='unten') {
			if (frame < 25) {
				fill('yellow');
        arc(pacman_x, pacman_y, 40, 40, 2, TWO_PI + 1, PIE);
			} else if (frame < 50) {
				fill('yellow');
				arc(pacman_x, pacman_y, 40, 40, 0, 360, PIE);
			} else {
				frame = 0;
			}
		} else if (richtung=='links') {
			if (frame < 25) {
				fill('yellow');
        arc(pacman_x, pacman_y, 40, 40, 3.5, TWO_PI + 2.5, PIE);
			} else if (frame < 50) {
				fill('yellow');
				arc(pacman_x, pacman_y, 40, 40, 0, 360, PIE);
			} else {
				frame = 0;
			}
		} else if (richtung=='oben') {
						if (frame < 25) {
				fill('yellow');
        arc(pacman_x, pacman_y, 40, 40, 5, TWO_PI + 4, PIE);
			} else if (frame < 50) {
				fill('yellow');
				arc(pacman_x, pacman_y, 40, 40, 0, 360, PIE);
			} else {
				frame = 0;
			}
		}

}

function draw(){
	//Zaehlen der Frames fuer die Bewegung des Mundes
	frame = frame + 1;
	
    // Funktion des Pacman und des Punktes     
    pacman(pacman_x,pacman_y)     

		//Bewegung des Pacmans

		if (richtung=='oben' && pacman_y > 50) {
		pacman_y = pacman_y -1;
	} else if (richtung=='oben') {
		richtung = 'rechts';
	}
	
	if (richtung=='links' && pacman_x > 50) {
		pacman_x = pacman_x - 1;
	} else if (richtung=='links') {
		richtung = 'oben';
	}
	
	if (richtung=='unten' && pacman_y < 350) {
		pacman_y = pacman_y +1;
	} else if (richtung=='unten') {
		richtung = 'links';
	}
	
	if (richtung=='rechts' && pacman_x < 350) {
		pacman_x = pacman_x + 1;	
	} else if (richtung=='rechts') {
		richtung = 'unten';
	} 
	
	if( pacman_x == 50 && pacman_y == 50 ) {
	  punkt_1 = 'red'
    punkt_2 = 'white'
    punkt_3 = 'white'
    punkt_4 = 'white'
    punkt_5 = 'white'
    punkt_6 = 'white'
    punkt_7 = 'white'
    punkt_8 = 'white'
    punkt_9 = 'white'
    punkt_10 = 'white'
    punkt_11 = 'white'
    punkt_12 = 'white'
    punkt_13 = 'white'
    punkt_14 = 'white'
    punkt_15 = 'white'
    punkt_16 = 'white'
    punkt_17 = 'white'
    punkt_18 = 'white'
    punkt_19 = 'white'
    punkt_20 = 'white'
    punkt_21 = 'white'
    punkt_22 = 'white'
    punkt_23 = 'white'
    punkt_24 = 'white'
}
}