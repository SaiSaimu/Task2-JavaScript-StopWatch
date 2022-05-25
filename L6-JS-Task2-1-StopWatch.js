var time = 0;
var min  = 0;
var sec  = 0;
var mSec = 0;



//スタートボタン
function start() {
time = setInterval(function() {
mSec ++;
if (mSec = 10) {
  sec++;
  mSec = 0;
}
if (sec = 60) {
  min++;
  sec = 0;
}

document.getElementById('time').innerHTML = min + ":" + sec + ":" + mSec;
},100);
};

//ストップボタン
function stop(){
  clearInterval(time);
  }

  //リセットボタン
  function reset(){
  document.getElementById('time').innerHTML = '0:0:0';
  sec = 0.00;
  }
