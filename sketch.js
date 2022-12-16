var wave;
var button;
var playing = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    wave = new p5.Oscillator();
    wave.setType('sine');


    button = createButton('도');
    button.mousePressed(toggle1);
  
    button = createButton('레');
    button.touchStarted(toggle2);
  
    button = createButton('미');
    button.touchStarted(toggle3);
  
    /*button = createButton('파');
    button.touchStarted(toggle4);
  
    button = createButton('솔');
    button.touchStarted(toggle5);
  
    button = createButton('라');
    button.touchStarted(toggle6);
  
    button = createButton('시');
    button.touchStarted(toggle7);
  
    button = createButton('도');
    button.touchStarted(toggle8);*/
}

function draw() {

}

function touchStarted() {
    background(255, 255, 255);
    text(touches.length, 200, 200);

    text(touches[0].x, 200, 220);
    text(touches[0].x, 200, 240);

    text(touches[1].x, 200, 260);
    text(touches[1].x, 200, 280);

    text(touches[2].x, 200, 300);
    text(touches[2].x, 200, 320);

    text(touches[3].x, 200, 340);
    text(touches[3].x, 200, 360);
    
    text(touches[4].x, 200, 380);
    text(touches[4].x, 200, 400);

    text(touches[5].x, 200, 420);
    text(touches[5].x, 200, 440);

    text(touches[6].x, 200, 460);
    text(touches[6].x, 200, 480);

    text(touches[7].x, 200, 500);
    text(touches[7].x, 200, 520);

    text(touches[8].x, 200, 540);
    text(touches[8].x, 200, 560);

    text(touches[9].x, 200, 580);
    text(touches[9].x, 200, 600);
}

function toggle1() {
  
    wave.freq(261.6256);
    wave.amp(0);

    if (!playing)
    {
        wave.start();
        wave.amp(0.5, 0.1); // 0.5:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>0.5로 커지고 그 이후로 지속.
        playing = true;

        if (playing){
            wave.amp(0, 1); // 1초동안 0.5에서 0으로 줄어듦.
            playing = false;
        }
    }
}

function toggle2() {
  
    wave.freq(293.6648);
    wave.amp(0);

    if (!playing)
    {
        wave.start();
        wave.amp(0.5, 0.1); // 0.5:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>0.5로 커지고 그 이후로 지속.
        playing = true;

        if (playing){
            wave.amp(0, 1); // 1초동안 0.5에서 0으로 줄어듦.
            playing = false;
        }
    }
}

function toggle3() {
  
    wave.freq(329.6276);
    wave.amp(0);

    if (!playing)
    {
        wave.start();
        wave.amp(0.5, 0.1); // 0.5:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>0.5로 커지고 그 이후로 지속.
        playing = true;

        if (playing){
            wave.amp(0, 1); // 1초동안 0.5에서 0으로 줄어듦.
            playing = false;
        }
    }
}