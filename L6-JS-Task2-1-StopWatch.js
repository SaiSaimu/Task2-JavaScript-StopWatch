var time = 0;
var hour  = 0;
var min  = 0;
var sec  = 0;
var mSec = 0;

//スタートボタン
function start() {
time = setInterval(function() {
mSec ++;
if (mSec == 10) {
  sec++;
  mSec = 0;
}
if (sec == 60) {
  min++;
  sec = 0;
}
if (min == 60) {
  hour++;
  min = 0;
}

document.getElementById('time').innerHTML = hour + ":" + min + ":" + sec + ":" + mSec;
},100);

startBtn();

};

//ストップボタン
function stop(){
clearInterval(time);

stopBtn();

}

//リセットボタン
function reset(){
document.getElementById('time').innerHTML = '0:0:0:0';
sec = 0;

resetBtn();

}

// スタートボタンを押した時
function startBtn() {

  btn_start.disabled = true;
  btn_stop.disabled = false;
  btn_reset.disabled = false;

}

// ストップボタンを押した時
function stopBtn() {

  btn_start.disabled = false;
  btn_stop.disabled = true;
  btn_reset.disabled = false;

}

// リセットボタンを押した時
function resetBtn() {

  btn_start.disabled = false;
  btn_stop.disabled = true;
  btn_reset.disabled = true;

}