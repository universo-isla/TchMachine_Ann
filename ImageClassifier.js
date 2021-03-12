
  // Classifier Variable
  let classifier;
  // Model URL
  let imageModelURL = 'https://teachablemachine.withgoogle.com/models/V2z_tjCdo/';

  // Video
  let video;
  let flippedVideo;
  // To store the classification
  let label = "";

  // Load the model first
  function preload() {
    classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  }

  function setup() {
    createCanvas(640, 480);
    // Create the video
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();

    flippedVideo = ml5.flipImage(video);
    // Start classifying
    classifyVideo();
  }

  function draw() {
    background(0);
    // Draw the video
    image(flippedVideo, 0, 0);
   

    // Draw the label
    fill(255);
    textSize(16);
    textAlign(CENTER);
    text(label, width / 2, height - 4);
    print(label);
      
    if (label == 'Mi persona') {
        image(flippedVideo, 0, 0);
        //filter(THRESHOLD);
            // Draw the label
        fill(255);
        textSize(16);
        textAlign(CENTER);
        text(label, width / 2, height - 4);
        print(label);
        print('pasaste por etiqueta1');
    } else if(label == 'Guerrero jaguar'){
        image(flippedVideo, 0, 0);
        fill(255,0,0,100);
        rect(0,0,640,480);
        //filter(THRESHOLD);
            // Draw the label
        fill(255);
        textSize(16);
        textAlign(CENTER);
        text(label, width / 2, height - 4);
        print(label);
        print('pasaste por etiqueta2');
    }else if(label == 'Perrito de tela'){
        image(flippedVideo, 0, 0);
        fill(0,255,0,100);
        rect(0,0,640,480);
        //filter(INVERT);
            // Draw the label
        fill(255);
        textSize(16);
        textAlign(CENTER);
        text(label, width / 2, height - 4);
        print(label);
        print('pasaste por etiqueta3');

    }else if(label == 'Cubrebocas'){
        image(flippedVideo, 0, 0);
        fill(0,0,255,100);
        rect(0,0,640,480);
        //filter(INVERT);
            // Draw the label
        fill(255);
        textSize(16);
        textAlign(CENTER);
        text(label, width / 2, height - 4);
        print(label);
        print('pasaste por etiqueta4');  
        
    }

  }


  // Get a prediction for the current video frame
  function classifyVideo() {
    flippedVideo = ml5.flipImage(video)
    classifier.classify(flippedVideo, gotResult);
    flippedVideo.remove();

  }

  // When we get a result
  function gotResult(error, results) {
    // If there is an error
    if (error) {
      console.error(error);
      return;
    }
    // The results are in an array ordered by confidence.
    // console.log(results[0]);
    label = results[0].label;
    // Classifiy again!
    classifyVideo();
  }

