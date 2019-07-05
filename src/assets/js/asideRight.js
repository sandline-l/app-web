 //文字无缝滚动
  function scrollText() {
      console.log('111')
    var wrapper3 = document.getElementById("record_content");
    var _box5 = document.getElementById("record_content1");
    var _box6 = document.getElementById("record_content2");
    
    var x3 = 0;
    console.log(_box5)
    // _box6.innerHTML = _box5.innerHTML
   
    var fun3 = function () {
        _box5.style.top = x3 + 'px';
        _box6.style.top = (x3 + 410) + 'px';
        x3--;
        if ((x3 + 410) == 0) {
            x3 = 0;
        }
    }
    var timer3 = setInterval(fun3, 60);
    wrapper3.onmouseover = function () { clearInterval(timer3) }
    wrapper3.onmouseout = function () { timer3 = setInterval(fun3, 60) }

}

let obj = {
    "scrollText":scrollText
}
export default obj;