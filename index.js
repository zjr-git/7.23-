var logo = document.querySelector(".start");
var border = document.querySelector(".board");
var bloods = document.querySelector(".blood");
var over = document.querySelector(".over")

document.onkeydown = function (ev) {

    if (ev.keyCode == 32) {
        logo.style.display = "none";
        document.onkeydown = null;
        var num = 0;
        var divs = [];
        var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];

        function create(num) {
            var current = [];
            for (var i = 0; i < num; i++) {
                current.push(letters[Math.floor(letters.length *
                    Math.random())]);
            }
            for (var i = 0; i < current.length; i++) {
                var a = document.createElement("div");
                a.innerHTML = current[i];
                a.style.cssText = "position:absolute;left:" + document.documentElement.clientWidth * Math.random() + "px;top:" + (100 * Math.random() - 20) + "px;font-size:" + 5 + 10 * Math.random() + "px;"
                document.body.appendChild(a);
                divs.push(a);
            }
        }
        create(7);
        var blood = 100;
        var speed = 3;
        var luoxia=setInterval(function () {
            for (var i = 0; i < divs.length; i++) {
                divs[i].style.top = divs[i].offsetTop + speed + "px";
                if (divs[i].offsetTop > document.documentElement.clientHeight - divs[i].clientHeight) {
                    document.body.removeChild(divs[i]);
                    blood = blood - 1;
                    bloods.innerHTML = "生命值" + blood + "";
                    if (blood <= 95) {
                        over.style.display = "block";
                        document.onkeydown = "null";
                    }
                }

            }
        }, 30)

        var victory = document.querySelector(".victory")
        document.onkeydown = function (ev) {
            var letter = String.fromCharCode(ev.keyCode);
            for (var i = 0; i < divs.length; i++) {
                if (divs[i].innerHTML == letter) {
                    document.body.removeChild(divs[i]);
                    num++;
                    divs.splice(i, 1);
                    create(3);
                    border.innerHTML = "得分:" + num + "";

                    if (num >= 3) {
                        victory.style.display = "block"
                    }
                   over=null;
                   bloods.style.display="none";
                   



                }

            }
        }
    }

}