/*var button;*/

let button;
let permission = false;

var wave1;
var wave2;
var wave3;
var wave4;
var wave5;
var wave6;
var wave7;
var wave8;

var playing1 = false;
var playing2 = false;
var playing3 = false;
var playing4 = false;
var playing5 = false;
var playing6 = false;
var playing7 = false;
var playing8 = false;

var currentRotationX1;
var currentRotationX2;

function setup() {
    createCanvas(300, 300);
    if (typeof DeviceMotionEvent.requestPermission === "function") {
        background(255, 255, 0);
        button = createButton("Click to IOS sensor");
        button.mousePressed(iosAccess);
    } else {
        background(0, 255, 0);
        text("Is not an IOS16 Device", 100, 100);
    }

    /*createCanvas(250, 350);*/
    wave1 = new p5.Oscillator();
    wave1.setType('sine');

    wave2 = new p5.Oscillator();
    wave2.setType('sine');

    wave3 = new p5.Oscillator();
    wave3.setType('sine');

    wave4 = new p5.Oscillator();
    wave4.setType('sine');

    wave5 = new p5.Oscillator();
    wave5.setType('sine');

    wave6 = new p5.Oscillator();
    wave6.setType('sine');

    wave7 = new p5.Oscillator();
    wave7.setType('sine');

    wave8 = new p5.Oscillator();
    wave8.setType('sine');


    button = createButton('도');
    button.touchStarted(toggle1);
  
    button = createButton('레');
    button.touchStarted(toggle2);
  
    /*button = createButton('미');
    button.touchStarted(toggle3);
  
    button = createButton('파');
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

function iosAccess() {
    DeviceOrientationEvent.requestPermission().then((response) => {
        if (response === "granted") {
            permission = true;
        }
    }).catch(console.error);
}

function draw() {
    background(255, 255, 0);
    if (!permission) return;
    text(rotationX, 100, 100);
}

function touchStarted() {

}

function touchMoved() {
    if (currentRotationX1 >= rotationX) {
        text("뒤로 누웠습니다", 100, 160);
        wave1.freq(246.9417, 0.7);
    } else {
        text("앞으로 기울어졌습니다", 100, 180);
        wave1.freq(277.1826, 0.7);
    }
}

function touchEnded() {

}

function toggle1() {
  
    wave1.freq(261.6256);
    //wave.amp(0);

    if (!playing1)
    {
        currentRotationX1 = rotationX;
        text(currentRotationX1, 100, 120);
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
        currentRotationX2 = rotationX;
        text(currentRotationX2, 100, 140);
        wave2.start();
        wave2.amp(0.5, 0.1); // 0.5:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>0.5로 커지고 그 이후로 지속.
        playing2 = true;

        if (playing2){
            wave2.amp(0, 1); // 1초동안 0.5에서 0으로 줄어듦.
            playing2 = false;
        }
    }
}

/*function toggle3() {
  
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

function toggle4() {
  
    wave4.freq(349.2282);
    //wave.amp(0);

    if (!playing4)
    {
        wave4.start();
        wave4.amp(0.5, 0.1); // 0.5:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>0.5로 커지고 그 이후로 지속.
        playing4 = true;

        if (playing4){
            wave4.amp(0, 1); // 1초동안 0.5에서 0으로 줄어듦.
            playing4 = false;
        }
    }
}

function toggle5() {
  
    wave5.freq(391.9954);
    //wave.amp(0);

    if (!playing5)
    {
        wave5.start();
        wave5.amp(0.5, 0.1); // 0.5:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>0.5로 커지고 그 이후로 지속.
        playing5 = true;

        if (playing5){
            wave5.amp(0, 1); // 1초동안 0.5에서 0으로 줄어듦.
            playing5 = false;
        }
    }
}

function toggle6() {
  
    wave6.freq(440.0000);
    //wave.amp(0);

    if (!playing6)
    {
        wave6.start();
        wave6.amp(0.5, 0.1); // 0.5:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>0.5로 커지고 그 이후로 지속.
        playing6 = true;

        if (playing6){
            wave6.amp(0, 1); // 1초동안 0.5에서 0으로 줄어듦.
            playing6 = false;
        }
    }
}

function toggle7() {
  
    wave7.freq(493.8833);
    //wave.amp(0);

    if (!playing7)
    {
        wave7.start();
        wave7.amp(0.5, 0.1); // 0.5:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>0.5로 커지고 그 이후로 지속.
        playing7 = true;

        if (playing7){
            wave7.amp(0, 1); // 1초동안 0.5에서 0으로 줄어듦.
            playing7 = false;
        }
    }
}

function toggle8() {
  
    wave8.freq(523.2511);
    //wave.amp(0);

    if (!playing8)
    {
        wave8.start();
        wave8.amp(0.5, 0.1); // 0.5:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>0.5로 커지고 그 이후로 지속.
        playing8 = true;

        if (playing8){
            wave8.amp(0, 1); // 1초동안 0.5에서 0으로 줄어듦.
            playing8 = false;
        }
    }
}*/