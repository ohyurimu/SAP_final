let button;
let slider;
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

var frequency1;
var frequency2;
var frequency3;
var frequency4;
var frequency5;
var frequency6;
var frequency7;
var frequency8;
var frequency9;
var frequency10;
var frequency11;
var frequency12;
var frequency13;

function setup() {
    if (typeof DeviceMotionEvent.requestPermission === "function") {
        button = createButton("Click to IOS sensor");
        button.mousePressed(iosAccess);
        button.style('margin: 50px 5% 0 5%; top: 0px; width: 90%; height: 50px;');
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
    
    // 볼륨을 조절하는 슬라이더 생성
    slider = createSlider(0, 100, 50); // 부드러운 슬라이더 조작을 위해 범위를 0~100으로 줌
    slider.style('margin: 0 5% 5% 5%; top: 110px; width: 90%; position: fixed;');

    button = createButton("");
    button.touchStarted(key1); // 버튼을 터치하기 시작하면 key1()를 실행해라
    button.style('margin-left: 5%; top: 140px; width: 11.25%; height: 400px; background-color: white; border-width: 1px; border-color: black; border-radius: 0 0 15px 15px;');
  
    button = createButton("");
    button.touchStarted(key3); // 버튼을 터치하기 시작하면 key3()를 실행해라
    button.style('width: 11.25%; top: 140px; height: 400px; left: 16.25%; background-color: white; border-width: 1px; border-color: black; border-radius: 0 0 15px 15px;');
  
    button = createButton("");
    button.touchStarted(key5); // 버튼을 터치하기 시작하면 key5()를 실행해라
    button.style('width: 11.25%; top: 140px; height: 400px; left: 27.5%; background-color: white; border-width: 1px; border-color: black; border-radius: 0 0 15px 15px;');
  
    button = createButton("");
    button.touchStarted(key6); // 버튼을 터치하기 시작하면 key6()를 실행해라
    button.style('width: 11.25%; top: 140px; height: 400px; left: 38.75%; background-color: white; border-width: 1px; border-color: black; border-radius: 0 0 15px 15px;');
  
    button = createButton("");
    button.touchStarted(key8); // 버튼을 터치하기 시작하면 key8()를 실행해라
    button.style('width: 11.25%; top: 140px; height: 400px; left: 50%; background-color: white; border-width: 1px; border-color: black; border-radius: 0 0 15px 15px;');
  
    button = createButton("");
    button.touchStarted(key10); // 버튼을 터치하기 시작하면 key10()를 실행해라
    button.style('width: 11.25%; top: 140px; height: 400px; left: 61.25%; background-color: white; border-width: 1px; border-color: black; border-radius: 0 0 15px 15px;');
  
    button = createButton("");
    button.touchStarted(key12); // 버튼을 터치하기 시작하면 key12()를 실행해라
    button.style('width: 11.25%; top: 140px; height: 400px; left: 72.5%; background-color: white; border-width: 1px; border-color: black; border-radius: 0 0 15px 15px;');
  
    button = createButton("");
    button.touchStarted(key13); // 버튼을 터치하기 시작하면 key13()를 실행해라
    button.style('margin-right: 5%; top: 140px; width: 11.25%; height: 400px; left: 83.75%; background-color: white; border-width: 1px; border-color: black; border-radius: 0 0 15px 15px;');
  
    button = createButton("");
    button.touchStarted(key2); // 버튼을 터치하기 시작하면 key2()를 실행해라
    button.style('width: 5.625%; top: 140px; height: 200px; left: 13.4375%; background-color: black; border-width: 1px; border-color: black; border-radius: 0 0 15px 15px;');
  
    button = createButton("");
    button.touchStarted(key4); // 버튼을 터치하기 시작하면 key4()를 실행해라
    button.style('width: 5.625%; top: 140px; height: 200px; left: 24.6875%; background-color: black; border-width: 1px; border-color: black; border-radius: 0 0 15px 15px;');
  
    button = createButton("");
    button.touchStarted(key7); // 버튼을 터치하기 시작하면 key7()를 실행해라
    button.style('width: 5.625%; top: 140px; height: 200px; left: 47.1875%; background-color: black; border-width: 1px; border-color: black; border-radius: 0 0 15px 15px;');
  
    button = createButton("");
    button.touchStarted(key9); // 버튼을 터치하기 시작하면 key9()를 실행해라
    button.style('width: 5.625%; top: 140px; height: 200px; left: 58.4375%; background-color: black; border-width: 1px; border-color: black; border-radius: 0 0 15px 15px;');
  
    button = createButton("");
    button.touchStarted(key11); // 버튼을 터치하기 시작하면 key11()를 실행해라
    button.style('width: 5.625%; top: 140px; height: 200px; left: 69.6875%; background-color: black; border-width: 1px; border-color: black; border-radius: 0 0 15px 15px;');
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

// 터치 시작
// setup()에서 버튼을 생성할 때 '터치 시에 해당 버튼을 실행시키라는 명령'을 이미 했기 때문에 코드에 적어줄 내용이 특별히 없더라도 touchStarted() 함수를 정의하지 않으면 mousePressed()로 대체되어 실행되는 것을 확인함. 그러나 의도한 바대로 touchStarted()를 실행시켜야하기 때문에 정의해주었음
function touchStarted() {

}

// 터치 중
function touchMoved() {
  
    // rotation값을 이용한 방법
    // 빠르게 앞뒤로 흔들어야 하는 가속도 센서를 이용하는 것보다 단순히 기울어진 정도인 rotation값을 이용하는 것이 연주시 훨씬 편할 것 같아서 이 방법을 사용함.
    wave1.freq(frequency1);
    wave2.freq(frequency2);
    wave3.freq(frequency3);
    wave4.freq(frequency4);
    wave5.freq(frequency5);
    wave6.freq(frequency6);
    wave7.freq(frequency7);
    wave8.freq(frequency8);
    wave9.freq(frequency9);
    wave10.freq(frequency10);
    wave11.freq(frequency11);
    wave12.freq(frequency12);
    wave13.freq(frequency13);
  
    let val = map(slider.value(), 0, 100, 0, 1); // 볼륨 슬라이더의 0~1000까지의 값을 val의 0~1로 맵핑함
  
    if(playing1) {
        wave1.amp(val); // 키를 누르고 있을 때에는 볼륨 조절에 따라 소리가 들리지만-
    } else {
        wave1.amp(0); // -키를 누르고 있지 않을 때에는 소리가 들리지 않음. val값은 슬라이더에 의해 조절되기 때문에 본 진폭과 관계 없이 볼륨 조절은 되어있는 상태이지만 실제로 키를 누르고 있지 않다면 그 소리가 출력되지 않게 하기 위함.
    }
  
    if(playing2) {
        wave2.amp(val); // 위와 동일(이하 생략)
    } else {
        wave2.amp(0); // 위와 동일(이하 생략)
    }
  
    if(playing3) {
        wave3.amp(val);
    } else {
        wave3.amp(0);
    }
  
    if(playing4) {
        wave4.amp(val);
    } else {
        wave4.amp(0);
    }
  
    if(playing5) {
        wave5.amp(val);
    } else {
        wave5.amp(0);
    }
  
    if(playing6) {
        wave6.amp(val);
    } else {
        wave6.amp(0);
    }
  
    if(playing7) {
        wave7.amp(val);
    } else {
        wave7.amp(0);
    }
  
    if(playing8) {
        wave8.amp(val);
    } else {
        wave8.amp(0);
    }
  
    if(playing9) {
        wave9.amp(val);
    } else {
        wave9.amp(0);
    }
  
    if(playing10) {
        wave10.amp(val);
    } else {
        wave10.amp(0);
    }
  
    if(playing11) {
        wave11.amp(val);
    } else {
        wave11.amp(0);
    }
  
    if(playing12) {
        wave12.amp(val);
    } else {
        wave12.amp(0);
    }
  
    if(playing13) {
        wave13.amp(val);
    } else {
        wave13.amp(0);
    }
}

// 터치 종료
// 손을 떼야 소리가 줄어들게끔
function touchEnded() {
    wave1.amp(0, 1); // 1초동안 val에서 0으로 줄어들고 연주하고 있지 않은 상태로 바뀜.
    playing1 = false;
  
    wave2.amp(0, 1); // 1초동안 val에서 0으로 줄어들고 연주하고 있지 않은 상태로 바뀜.
    playing2 = false;
  
    wave3.amp(0, 1); // 1초동안 val에서 0으로 줄어들고 연주하고 있지 않은 상태로 바뀜.
    playing3 = false;
  
    wave4.amp(0, 1); // 1초동안 val에서 0으로 줄어들고 연주하고 있지 않은 상태로 바뀜.
    playing4 = false;
  
    wave5.amp(0, 1); // 1초동안 val에서 0으로 줄어들고 연주하고 있지 않은 상태로 바뀜.
    playing5 = false;
  
    wave6.amp(0, 1); // 1초동안 val에서 0으로 줄어들고 연주하고 있지 않은 상태로 바뀜.
    playing6 = false;
  
    wave7.amp(0, 1); // 1초동안 val에서 0으로 줄어들고 연주하고 있지 않은 상태로 바뀜.
    playing7 = false;
  
    wave8.amp(0, 1); // 1초동안 val에서 0으로 줄어들고 연주하고 있지 않은 상태로 바뀜.
    playing8 = false;
  
    wave9.amp(0, 1); // 1초동안 val에서 0으로 줄어들고 연주하고 있지 않은 상태로 바뀜.
    playing9 = false;
  
    wave10.amp(0, 1); // 1초동안 val에서 0으로 줄어들고 연주하고 있지 않은 상태로 바뀜.
    playing10 = false;
  
    wave11.amp(0, 1); // 1초동안 val에서 0으로 줄어들고 연주하고 있지 않은 상태로 바뀜.
    playing11 = false;
  
    wave12.amp(0, 1); // 1초동안 val에서 0으로 줄어들고 연주하고 있지 않은 상태로 바뀜.
    playing12 = false;
  
    wave13.amp(0, 1); // 1초동안 val에서 0으로 줄어들고 연주하고 있지 않은 상태로 바뀜.
    playing13 = false;
}

function deviceMoved() {
    // 기울기값을 주파수에 매핑
    frequency1 = map(rotationY, -90, 90, 246.9417, 277.1826);
    frequency2 = map(rotationY, -90, 90, 261.6256, 293.6648);
    frequency3 = map(rotationY, -90, 90, 277.1826, 311.1270);
    frequency4 = map(rotationY, -90, 90, 293.6648, 329.6276);
    frequency5 = map(rotationY, -90, 90, 311.1270, 349.2282);
    frequency6 = map(rotationY, -90, 90, 329.6276, 369.9944);
    frequency7 = map(rotationY, -90, 90, 349.2282, 391.9954);
    frequency8 = map(rotationY, -90, 90, 369.9944, 415.3047);
    frequency9 = map(rotationY, -90, 90, 391.9954, 440.0000);
    frequency10 = map(rotationY, -90, 90, 415.3047, 466.1638);
    frequency11 = map(rotationY, -90, 90, 440.0000, 493.8833);
    frequency12 = map(rotationY, -90, 90, 466.1638, 523.2511);
    frequency13 = map(rotationY, -90, 90, 493.8833, 554.3653);
}

function key1() {
  
    wave1.freq(frequency1);

    if (!playing1)
    {
        wave1.start();
        let val = map(slider.value(), 0, 100, 0, 1); // val을 정의해준 곳이 touchMoved()라서 key1()가 호출되는 touchStarted()에서는 val 값이 없기 때문에 여기서 다시 정의해줘야 키를 눌렀을 때 소리가 남.
        wave1.amp(val, 0.1); // val:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>val로 커지고 그 이후로 지속.
        playing1 = true; // 키를 누르면(touchStarted(), key1() 활성화) 연주중인 상태로 바뀜.
    }
}

function key2() {
  
    wave2.freq(frequency2);

    if (!playing2)
    {
        wave2.start();
        let val = map(slider.value(), 0, 100, 0, 1); // val을 정의해준 곳이 touchMoved()라서 key2()가 호출되는 touchStarted()에서는 val 값이 없기 때문에 여기서 다시 정의해줘야 키를 눌렀을 때 소리가 남.
        wave2.amp(val, 0.1); // val:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>val로 커지고 그 이후로 지속.
        playing2 = true; // 키를 누르면(touchStarted(), key2() 활성화) 연주중인 상태로 바뀜.
    }
}

function key3() {
  
    wave3.freq(frequency3);

    if (!playing3)
    {
        wave3.start();
        let val = map(slider.value(), 0, 100, 0, 1); // val을 정의해준 곳이 touchMoved()라서 key3()가 호출되는 touchStarted()에서는 val 값이 없기 때문에 여기서 다시 정의해줘야 키를 눌렀을 때 소리가 남.
        wave3.amp(val, 0.1); // val:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>val로 커지고 그 이후로 지속.
        playing3 = true; // 키를 누르면(touchStarted(), key3() 활성화) 연주중인 상태로 바뀜.
    }
}

function key4() {
  
    wave4.freq(frequency4);

    if (!playing4)
    {
        wave4.start();
        let val = map(slider.value(), 0, 100, 0, 1); // val을 정의해준 곳이 touchMoved()라서 key4()가 호출되는 touchStarted()에서는 val 값이 없기 때문에 여기서 다시 정의해줘야 키를 눌렀을 때 소리가 남.
        wave4.amp(val, 0.1); // val:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>val로 커지고 그 이후로 지속.
        playing4 = true; // 키를 누르면(touchStarted(), key4() 활성화) 연주중인 상태로 바뀜.
    }
}

function key5() {
  
    wave5.freq(frequency5);

    if (!playing5)
    {
        wave5.start();
        let val = map(slider.value(), 0, 100, 0, 1); // val을 정의해준 곳이 touchMoved()라서 key5()가 호출되는 touchStarted()에서는 val 값이 없기 때문에 여기서 다시 정의해줘야 키를 눌렀을 때 소리가 남.
        wave5.amp(val, 0.1); // val:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>val로 커지고 그 이후로 지속.
        playing5 = true; // 키를 누르면(touchStarted(), key5() 활성화) 연주중인 상태로 바뀜.
    }
}

function key6() {
  
    wave6.freq(frequency6);

    if (!playing6)
    {
        wave6.start();
        let val = map(slider.value(), 0, 100, 0, 1); // val을 정의해준 곳이 touchMoved()라서 key6()가 호출되는 touchStarted()에서는 val 값이 없기 때문에 여기서 다시 정의해줘야 키를 눌렀을 때 소리가 남.
        wave6.amp(val, 0.1); // val:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>val로 커지고 그 이후로 지속.
        playing6 = true; // 키를 누르면(touchStarted(), key6() 활성화) 연주중인 상태로 바뀜.
    }
}

function key7() {
  
    wave7.freq(frequency7);

    if (!playing7)
    {
        wave7.start();
        let val = map(slider.value(), 0, 100, 0, 1); // val을 정의해준 곳이 touchMoved()라서 key7()가 호출되는 touchStarted()에서는 val 값이 없기 때문에 여기서 다시 정의해줘야 키를 눌렀을 때 소리가 남.
        wave7.amp(val, 0.1); // val:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>val로 커지고 그 이후로 지속.
        playing7 = true; // 키를 누르면(touchStarted(), key7() 활성화) 연주중인 상태로 바뀜.
    }
}

function key8() {
  
    wave8.freq(frequency8);

    if (!playing8)
    {
        wave8.start();
        let val = map(slider.value(), 0, 100, 0, 1); // val을 정의해준 곳이 touchMoved()라서 key8()가 호출되는 touchStarted()에서는 val 값이 없기 때문에 여기서 다시 정의해줘야 키를 눌렀을 때 소리가 남.
        wave8.amp(val, 0.1); // val:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>val로 커지고 그 이후로 지속.
        playing8 = true; // 키를 누르면(touchStarted(), key8() 활성화) 연주중인 상태로 바뀜.
    }
}

function key9() {
  
    wave9.freq(frequency9);

    if (!playing9)
    {
        wave9.start();
        let val = map(slider.value(), 0, 100, 0, 1); // val을 정의해준 곳이 touchMoved()라서 key9()가 호출되는 touchStarted()에서는 val 값이 없기 때문에 여기서 다시 정의해줘야 키를 눌렀을 때 소리가 남.
        wave9.amp(val, 0.1); // val:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>val로 커지고 그 이후로 지속.
        playing9 = true; // 키를 누르면(touchStarted(), key9() 활성화) 연주중인 상태로 바뀜.
    }
}

function key10() {
  
    wave10.freq(frequency10);

    if (!playing10)
    {
        wave10.start();
        let val = map(slider.value(), 0, 100, 0, 1); // val을 정의해준 곳이 touchMoved()라서 key10()가 호출되는 touchStarted()에서는 val 값이 없기 때문에 여기서 다시 정의해줘야 키를 눌렀을 때 소리가 남.
        wave10.amp(val, 0.1); // val:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>val로 커지고 그 이후로 지속.
        playing10 = true; // 키를 누르면(touchStarted(), key10() 활성화) 연주중인 상태로 바뀜.
    }
}

function key11() {
  
    wave11.freq(frequency11);

    if (!playing11)
    {
        wave11.start();
        let val = map(slider.value(), 0, 100, 0, 1); // val을 정의해준 곳이 touchMoved()라서 key11()가 호출되는 touchStarted()에서는 val 값이 없기 때문에 여기서 다시 정의해줘야 키를 눌렀을 때 소리가 남.
        wave11.amp(val, 0.1); // val:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>val로 커지고 그 이후로 지속.
        playing11 = true; // 키를 누르면(touchStarted(), key11() 활성화) 연주중인 상태로 바뀜.
    }
}

function key12() {
  
    wave12.freq(frequency12);

    if (!playing12)
    {
        wave12.start();
        let val = map(slider.value(), 0, 100, 0, 1); // val을 정의해준 곳이 touchMoved()라서 key12()가 호출되는 touchStarted()에서는 val 값이 없기 때문에 여기서 다시 정의해줘야 키를 눌렀을 때 소리가 남.
        wave12.amp(val, 0.1); // val:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>val로 커지고 그 이후로 지속.
        playing12 = true; // 키를 누르면(touchStarted(), key12() 활성화) 연주중인 상태로 바뀜.
    }
}

function key13() {
  
    wave13.freq(frequency13);

    if (!playing13)
    {
        wave13.start();
        let val = map(slider.value(), 0, 100, 0, 1); // val을 정의해준 곳이 touchMoved()라서 key13()가 호출되는 touchStarted()에서는 val 값이 없기 때문에 여기서 다시 정의해줘야 키를 눌렀을 때 소리가 남.
        wave13.amp(val, 0.1); // val:볼륨, 0.1:시간 >>> 볼륨이 0.1초동안 0>val로 커지고 그 이후로 지속.
        playing13 = true; // 키를 누르면(touchStarted(), key13() 활성화) 연주중인 상태로 바뀜.
    }
}