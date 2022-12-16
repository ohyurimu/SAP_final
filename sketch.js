var wave1;
var wave2;
var wave3;
var button;
var playing1 = false;
var playing2 = false;
var playing3 = false;
var playing4 = false;
var playing5 = false;
var playing6 = false;
var playing7 = false;
var playing8 = false;

function setup() {
    /*createCanvas(250, 350);*/
    wave = new p5.Oscillator();
    wave.setType('sine');


    button = createButton('도');
    button.touchStarted(toggle1);
  
    button = createButton('레');
    button.touchStarted(toggle2);
  
    /*button = createButton('미');
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
    /*background(255, 255, 0);
    text(touches.length, 200, 200);

    text(touches[0].x, 200, 220);
    text(touches[0].y, 200, 240);

    text(touches[1].x, 200, 260);
    text(touches[1].y, 200, 280);

    text(touches[2].x, 200, 300);
    text(touches[2].y, 200, 320);

    text(touches[3].x, 200, 340);
    text(touches[3].y, 200, 360);
    
    text(touches[4].x, 200, 380);
    text(touches[4].y, 200, 400);

    text(touches[5].x, 200, 420);
    text(touches[5].y, 200, 440);

    text(touches[6].x, 200, 460);
    text(touches[6].y, 200, 480);

    text(touches[7].x, 200, 500);
    text(touches[7].y, 200, 520);

    text(touches[8].x, 200, 540);
    text(touches[8].y, 200, 560);

    text(touches[9].x, 200, 580);
    text(touches[9].y, 200, 600);*/
}

function touchEnded() {
    background(255, 255, 255);
}

function toggle1() {
  
    wave1.freq(261.6256);
    //wave.amp(0);

    if (!playing1)
    {
        wave1.start();
        wave1.amp(0.5, 0.1); // 0.5:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>0.5로 커지고 그 이후로 지속.
        playing1 = true;

        if (playing1){
            wave1.amp(0, 1); // 1초동안 0.5에서 0으로 줄어듦.
            playing1 = false;
        }
    }
}

function toggle2() {
  
    wave2.freq(293.6648);
    //wave.amp(0);

    if (!playing2)
    {
        wave2.start();
        wave2.amp(0.5, 0.1); // 0.5:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>0.5로 커지고 그 이후로 지속.
        playing2 = true;

        if (playing2){
            wave2.amp(0, 1); // 1초동안 0.5에서 0으로 줄어듦.
            playing2 = false;
        }
    }
}

function toggle3() {
  
    wave3.freq(329.6276);
    //wave.amp(0);

    if (!playing3)
    {
        wave3.start();
        wave3.amp(0.5, 0.1); // 0.5:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>0.5로 커지고 그 이후로 지속.
        playing3 = true;

        if (playing3){
            wave3.amp(0, 1); // 1초동안 0.5에서 0으로 줄어듦.
            playing3 = false;
        }
    }
}