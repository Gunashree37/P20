




function setup() {
  createCanvas(1600, 400);


	


	
}


function draw() {
  background(0);

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  	car.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>180)
	{
		
	}

	if(deformation<180 && deformation>100)
	{
		
	}

	if(deformation<100)
	{
		
	}
  }  
  
  drawSprites();
 
}


