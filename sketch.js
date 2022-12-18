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
var wave9;
var wave10;
var wave11;
var wave12;
var wave13;

var playing1 = false;
var playing2 = false;
var playing3 = false;
var playing4 = false;
var playing5 = false;
var playing6 = false;
var playing7 = false;
var playing8 = false;
var playing9 = false;
var playing10 = false;
var playing11 = false;
var playing12 = false;
var playing13 = false;

function setup() {
    if (typeof DeviceMotionEvent.requestPermission === "function") {
        button = createButton("Click to IOS sensor");
        button.mousePressed(iosAccess);
    } else {
        background(0, 255, 0);
        text("Is not an IOS16 Device", 100, 100);
    }

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
  
    wave9 = new p5.Oscillator();
    wave9.setType('sine');

    wave10 = new p5.Oscillator();
    wave10.setType('sine');

    wave11 = new p5.Oscillator();
    wave11.setType('sine');

    wave12 = new p5.Oscillator();
    wave12.setType('sine');
  
    wave13 = new p5.Oscillator();
    wave13.setType('sine');


    button = createButton('도');
    button.touchStarted(toggle1);
  
    button = createButton('도#');
    button.touchStarted(toggle2);
  
    button = createButton('레');
    button.touchStarted(toggle3);
  
    button = createButton('레#');
    button.touchStarted(toggle4);
  
    button = createButton('미');
    button.touchStarted(toggle5);
  
    button = createButton('파');
    button.touchStarted(toggle6);
  
    button = createButton('파#');
    button.touchStarted(toggle7);
  
    button = createButton('솔');
    button.touchStarted(toggle8);
  
    button = createButton('솔#');
    button.touchStarted(toggle9);
  
    button = createButton('라');
    button.touchStarted(toggle10);
  
    button = createButton('라#');
    button.touchStarted(toggle11);
  
    button = createButton('시');
    button.touchStarted(toggle12);
  
    button = createButton('높은도');
    button.touchStarted(toggle13);
}

function iosAccess() {
    DeviceOrientationEvent.requestPermission().then((response) => {
        if (response === "granted") {
            permission = true;
        }
    }).catch(console.error);
}

function draw() {
    if (!permission) return;
}

function touchStarted() {

}

function touchMoved() {
    if (accelerationX > 1) { // 뒤로 기울이면 주파수 낮아지게
        wave1.freq(246.9417);
        wave2.freq(261.6256);
        wave3.freq(277.1826);
        wave4.freq(293.6648);
        wave5.freq(311.1270);
        wave6.freq(329.6276);
        wave7.freq(349.2282);
        wave8.freq(369.9944);
        wave9.freq(391.9954);
        wave10.freq(415.3047);
        wave11.freq(440.0000);
        wave12.freq(466.1638);
        wave13.freq(493.8833);
    }
    if (accelerationX < 1){ // 앞으로 기울이면 주파수 높아지게
        wave1.freq(277.1826);
        wave2.freq(293.6648);
        wave3.freq(311.1270);
        wave4.freq(329.6276);
        wave5.freq(349.2282);
        wave6.freq(369.9944);
        wave7.freq(391.9954);
        wave8.freq(415.3047);
        wave9.freq(440.0000);
        wave10.freq(466.1638);
        wave11.freq(493.8833);
        wave12.freq(523.2511);
        wave13.freq(554.3653);
    }
}

function touchEnded() {

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
            wave1.amp(0, 3); // 1초동안 0.5에서 0으로 줄어듦.
            playing1 = false;
        }
    }
}

function toggle2() {
  
    wave2.freq(277.1826);
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
  
    wave3.freq(293.6648);
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
  
    wave4.freq(311.1270);
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
  
    wave5.freq(329.6276);
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
  
    wave6.freq(349.2282);
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
  
    wave7.freq(369.9944);
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
  
    wave8.freq(391.9954);
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
}

function toggle9() {
  
    wave9.freq(415.3047);
    //wave.amp(0);

    if (!playing9)
    {
        wave9.start();
        wave9.amp(0.5, 0.1); // 0.5:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>0.5로 커지고 그 이후로 지속.
        playing9 = true;

        if (playing9){
            wave9.amp(0, 3); // 1초동안 0.5에서 0으로 줄어듦.
            playing9 = false;
        }
    }
}

function toggle10() {
  
    wave10.freq(440.0000);
    //wave.amp(0);

    if (!playing10)
    {
        wave10.start();
        wave10.amp(0.5, 0.1); // 0.5:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>0.5로 커지고 그 이후로 지속.
        playing10 = true;

        if (playing10){
            wave10.amp(0, 3); // 1초동안 0.5에서 0으로 줄어듦.
            playing10 = false;
        }
    }
}

function toggle11() {
  
    wave11.freq(466.1638);
    //wave.amp(0);

    if (!playing11)
    {
        wave11.start();
        wave11.amp(0.5, 0.1); // 0.5:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>0.5로 커지고 그 이후로 지속.
        playing11 = true;

        if (playing11){
            wave11.amp(0, 3); // 1초동안 0.5에서 0으로 줄어듦.
            playing11 = false;
        }
    }
}

function toggle12() {
  
    wave12.freq(493.8833);
    //wave.amp(0);

    if (!playing12)
    {
        wave12.start();
        wave12.amp(0.5, 0.1); // 0.5:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>0.5로 커지고 그 이후로 지속.
        playing12 = true;

        if (playing12){
            wave12.amp(0, 3); // 1초동안 0.5에서 0으로 줄어듦.
            playing12 = false;
        }
    }
}

function toggle13() {
  
    wave13.freq(523.2511);
    //wave.amp(0);

    if (!playing13)
    {
        wave13.start();
        wave13.amp(0.5, 0.1); // 0.5:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>0.5로 커지고 그 이후로 지속.
        playing13 = true;

        if (playing13){
            wave13.amp(0, 3); // 1초동안 0.5에서 0으로 줄어듦.
            playing13 = false;
        }
    }
}