/*function setup(){
    createCanvas(800,500);
}

function draw(){
    background(200);

     /*  // 1. point 
       point(200,200);
       //2. line
      line (200,200,300,300);
      //3. triangle
       triangle(100,200,300,400,150,300);
       // rectangle
       rect (500,200,100,100);
       // circle
       ellipse(600,300,100,100);*/

       // stroke and color -> stroke decides which color to give 
        // fill can be used to fill the circle here
   /*     fill (125,200,35);
       stroke(255,0,0,255 ); // last one is opacity
       strokeWeight(5);
       
       ellipse(400,200,100,100);*/
    // two mains function are there in p5 js that is setup and draw


  /*  function setup(){
        createCanvas(800,500);
        console.log('Setup function');
    }
   function getRandomArbitrary(min,max){
return Math.random()*(max-min)+min;
   }
      function draw(){
        // without color
        //fill(255);
        //ellipse(mouseX,mouseY,50,50);
        // with color
        r= getRandomArbitrary(0,255);
        g= getRandomArbitrary(0,255);
        b= getRandomArbitrary(0,255);
        fill(r,g,b);
        ellipse(mouseX,mouseY,50,50);
      }*/
      // 
      /*
      let shahrukh_img;
      function setup() {
        createCanvas(800, 500);
    
        shahrukh_img = loadImage('images/shahrukh.png');
    
    }
      function draw(){
        // images and videos(webcam)
        image(shahrukh_img, mouseX,mouseY, 100, 100);

      }
    */
      /* let capture;
       let posenet;
       let noseX,noseY;
       let reyeX,reyeY;
       let singlePose; // storing x and y coordinates of nose
       function setup(){
        createCanvas(800,500);
        capture=createCapture(VIDEO)
        capture.hide();
        posenet=ml5.poseNet(capture,modelLoaded);
        // make eventListener // detect 17 points
        posenet.on('pose',receivedPoses)
      }
      function receivedPoses(poses){
        console.log(poses); 
        if(poses.length > 0){
          singlePose=poses[0].pose;
         noseX= singlePose.nose.x;
         noseY=singlePose.nose.y;

         reyeX= singlePose.rightEye.x;
         reyeY=singlePose.rightEye.y;

         leyeX= singlePose.leftEye.x;
         leyeY=singlePose.leftEye.y;

        }
        console.log(noseX+" "+noseY);
      }
       function modelLoaded(){
        console.log('Model has loaded');
       }
        function draw(){
            // images and  video (webcam)
            image(capture,0,0,800,600);
            fill (0,255,0);
            ellipse(reyeX,reyeY,30);
            ellipse(leyeX,leyeY,30);


        }
        */


 let capture;
let posenet;
let noseX,noseY;
let reyeX,reyeY;
let leyeX,leyeY;
let singlePose,skeleton;
let actor_img;
let specs,smoke;

function setup() {
    createCanvas(800, 500);
    capture = createCapture(VIDEO)
    capture.hide();

    posenet = ml5.poseNet(capture, modelLoaded);
    posenet.on('pose',receivedPoses);

    actor_img = loadImage('images/shahrukh.png');
    specs = loadImage('images/spects.png');
    smoke = loadImage('images/cigar.png');

}

function receivedPoses(poses){
    console.log(poses);

    if(poses.length > 0){
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }
}

function modelLoaded() {
    console.log('Model has loaded');
}

function draw() {

    // images and videos(webcam)
    image(capture, 0, 0);
    fill(0,255,0);

    if(singlePose){
        for(let i=0; i<singlePose.keypoints.length; i++){
            ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y,20);
        }
        // skeleton is a 2D array where every element is a array
        stroke(255,255,255);
        strokeWeight(5); // for line 
        for(let j=0; j<skeleton.length; j++){
          // for drawing a line 
            line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y)
        }


        // image(actor_img,singlePose.nose.x-45,singlePose.nose.y-60,100,100);
        // image(specs,singlePose.nose.x-35,singlePose.nose.y-50,80,80);
        //image(smoke,singlePose.nose.x-35,singlePose.nose.y+10,40,40);

        
    }

    

}