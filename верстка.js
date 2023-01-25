/*
1. Hover
2. Select, if else button onclick offclick
3. Hover after select
4. Unselect
*/

// Фуа-Гра
// hover
function hoverBorderOn(a) {
    a.style.border = "1px #1698D9 solid";
    document.getElementById("article_grid").style.transform = "translate(-1px,-1px)";
}
function hoverBorderOff(a) {
    a.style.border = "";
    document.getElementById("article_grid").style.transform = "";
}
//select, hover upon select, unselect

function cellClick() {

    let cellBackground = document.getElementById("fois_gras");
    let para1TextOrColor = document.getElementById("para1");
    let heading1Color = document.getElementById("heading1");
    let heading2Color = document.getElementById("heading2");
    let para2Color = document.getElementById("para2");
    let catCellBackground = document.getElementById("cat");
    let quantity1Background = document.getElementById("quantity1");
    let footer1Text = document.getElementById("footer1");
    let text = footer1Text.innerText;
    const array = ["чего сидишь? Порадуй котэ,", "Печень утки разварная с артишоками.", "Печалька, с фуа-гра закончился."];
    let next = array[0];

    switch (next) {
    case array[0]:
        //select
        quantity1Background.style.background = "#D91667";
        footer1Text.innerText = array[1];
        cellBackground.style.background = "#D91667";
        // hover after select
        document.getElementById("hoverBorder").onmouseenter = function() {
            hoverBorderTextChange1();
        };
        document.getElementById("hoverBorder").onmouseleave = function() {
            hoverBorderTextChange2();
        };
        function hoverBorderTextChange1() {
            para1TextOrColor.innerText = "Котэ не одобряет";
            para1TextOrColor.style.color = "#E62E7A";
        }
        function hoverBorderTextChange2() {
            para1TextOrColor.innerText = "Сказочное заморское яство";
            para1TextOrColor.style.color = "#666666";
        }

        break;

    }
    switch (text) {
    case array[1]:
        //unselect
        cellBackground.style.background = "#B3B3B3";
        cellBackground.style.filter = "brightness(100%)";
        para1TextOrColor.innerText = "Сказочное заморское яство";
        para1TextOrColor.style.color = "#B3B3B3";
        heading1Color.style.color = "#B3B3B3";
        heading2Color.style.color = "#B3B3B3";
        para2Color.style.color = "#B3B3B3";
        catCellBackground.style.filter = "opacity(65%)";
        quantity1Background.style.background = "#B3B3B3";
        quantity1Background.style.filter = "brightness(90%)";
        footer1Text.innerText = array[2];
        //disables hover after select
        document.getElementById("hoverBorder").onmouseenter = function() {
            hoverBorderTextChange1();
        };
        document.getElementById("hoverBorder").onmouseleave = function() {
            hoverBorderTextChange2();
        };
        function hoverBorderTextChange1() {
            para1TextOrColor.innerText = "Сказочное заморское яство";
        }
        function hoverBorderTextChange2() {
            para1TextOrColor.innerText = "Сказочное заморское яство";
        }
        break;
    }
    switch (text) {
    case array[2]:
        //switches between select and unselect
        cellBackground.style.background = "#D91667";
        cellBackground.style.filter = "";
        para1TextOrColor.style.color = "";
        heading1Color.style.color = "";
        heading2Color.style.color = "";
        para2Color.style.color = "";
        catCellBackground.style.filter = "";
        quantity1Background.style.background = "#D91667";
        quantity1Background.style.filter = "";
        footer1Text.innerText = "Печень утки разварная с артишоками.";
        //hover after select 
        document.getElementById("hoverBorder").onmouseenter = function() {
            hoverBorderTextChange1();
        };
        document.getElementById("hoverBorder").onmouseleave = function() {
            hoverBorderTextChange2();
        };
        function hoverBorderTextChange1() {
            para1TextOrColor.innerText = "Котэ не одобряет";
            para1TextOrColor.style.color = "#E62E7A";
        }
        function hoverBorderTextChange2() {
            para1TextOrColor.innerText = "Сказочное заморское яство";
            para1TextOrColor.style.color = "#666666";
        }
        break;
    }
}
// Рыба
// hover
function hoverBorderOn1(a) {
    a.style.border = "1px #1698D9 solid";
    document.getElementById("article_grid1").style.transform = "translate(-1px,-1px)";
}
function hoverBorderOff1(a) {
    a.style.border = "";
    document.getElementById("article_grid1").style.transform = "";
}
//select, hover upon select, unselect
function cellClick1() {
    const cellBackground_fish = document.getElementById("fish");
    const para1TextOrColor_fish = document.getElementById("para11");
    const heading1Color_fish = document.getElementById("heading11");
    const heading2Color_fish = document.getElementById("heading21");
    const para2Color_fish = document.getElementById("para21");
    const catCellBackground_fish = document.getElementById("cat1");
    const quantity1Background_fish = document.getElementById("quantity11");
    const footer1Text_fish = document.getElementById("footer11");
    const textFish = footer1Text_fish.innerText;
    const arrayFish = ["чего сидишь? Порадуй котэ,", "Головы щучьи с чесноком да свежайшая сёмгушка.", "Печалька, с рыбой закончился."];
    const nextFish = arrayFish[0];

    switch (nextFish) {
    case arrayFish[0]:
        //select
        quantity1Background_fish.style.background = "#D91667";
        footer1Text_fish.innerText = arrayFish[1];
        cellBackground_fish.style.background = "#D91667";

        // hover after select
        document.getElementById("hoverBorder1").onmouseenter = function() {
            hoverBorderTextChange_fish1();
        };
        document.getElementById("hoverBorder1").onmouseleave = function() {
            hoverBorderTextChange_fish2();
        };
        function hoverBorderTextChange_fish1() {
            para1TextOrColor_fish.innerText = "Котэ не одобряет";
            para1TextOrColor_fish.style.color = "#E62E7A";
        }
        function hoverBorderTextChange_fish2() {
            para1TextOrColor_fish.innerText = "Сказочное заморское яство";
            para1TextOrColor_fish.style.color = "#666666";
        }
        break;
    }
    switch (textFish) {
    case arrayFish[1]:
        //unselect
        cellBackground_fish.style.background = "#B3B3B3";
        cellBackground_fish.style.filter = "brightness(110%)";
        para1TextOrColor_fish.innerText = "Сказочное заморское яство";
        para1TextOrColor_fish.style.color = "#B3B3B3";
        heading1Color_fish.style.color = "#B3B3B3";
        heading2Color_fish.style.color = "#B3B3B3";
        para2Color_fish.style.color = "#B3B3B3";
        catCellBackground_fish.style.filter = "opacity(65%)";
        quantity1Background_fish.style.background = "#B3B3B3";
        quantity1Background_fish.style.filter = "brightness(90%)";
        footer1Text_fish.innerText = arrayFish[2];
        //disables hover after select
        document.getElementById("hoverBorder1").onmouseenter = function() {
            hoverBorderTextChange_fish1()
        };
        document.getElementById("hoverBorder1").onmouseleave = function() {
            hoverBorderTextChange_fish2()
        };
        function hoverBorderTextChange_fish1() {
            para1TextOrColor_fish.innerText = "Сказочное заморское яство";
        }
        function hoverBorderTextChange_fish2() {
            para1TextOrColor_fish.innerText = "Сказочное заморское яство";
        }
        break;
    }
    switch (textFish) {
    case arrayFish[2]:
        //switches between select and unselect
        cellBackground_fish.style.background = "#D91667";
        cellBackground_fish.style.filter = "";
        para1TextOrColor_fish.style.color = "";
        heading1Color_fish.style.color = "";
        heading2Color_fish.style.color = "";
        para2Color_fish.style.color = "";
        catCellBackground_fish.style.filter = "";
        quantity1Background_fish.style.background = "#D91667";
        quantity1Background_fish.style.filter = "";
        footer1Text_fish.innerText = arrayFish[1];
        //hover after select 
        document.getElementById("hoverBorder1").onmouseenter = function() {
            hoverBorderTextChange_fish1()
        };
        document.getElementById("hoverBorder1").onmouseleave = function() {
            hoverBorderTextChange_fish2()
        };
        function hoverBorderTextChange_fish1() {
            para1TextOrColor_fish.innerText = "Котэ не одобряет";
            para1TextOrColor_fish.style.color = "#E62E7A";
        }
        function hoverBorderTextChange_fish2() {
            para1TextOrColor_fish.innerText = "Сказочное заморское яство";
            para1TextOrColor_fish.style.color = "#666666";
        }
        break;
    }
}

//Курица
// hover
function hoverBorderOn2(a) {
    a.style.border = "1px #1698D9 solid";
    document.getElementById("article_grid2").style.transform = "translate(-1px,-1px)";
}
function hoverBorderOff2(a) {
    a.style.border = "";
    document.getElementById("article_grid2").style.transform = "";
}
//select, hover upon select, unselect
function cellClick2() {
    const cellBackground_chicken = document.getElementById("chicken");
    const para1TextOrColor_chicken = document.getElementById("para12");
    const heading1Color_chicken = document.getElementById("heading12");
    const heading2Color_chicken = document.getElementById("heading22");
    const para2Color_chicken = document.getElementById("para22");
    const catCellBackground_chicken = document.getElementById("cat2");
    const quantity1Background_chicken = document.getElementById("quantity12");
    const footer1Text_chicken = document.getElementById("footer12");
    const textChicken = footer1Text_chicken.innerText;
    const arrayChicken = ["чего сидишь? Порадуй котэ,", "Филе из цыплят с трюфелями в бульоне.", "Печалька, с курой закончился."];
    const nextChicken = arrayChicken[0];

    switch (nextChicken) {
    case arrayChicken[0]:
        //select
        quantity1Background_chicken.style.background = "#D91667";
        footer1Text_chicken.innerText = arrayChicken[1];
        cellBackground_chicken.style.background = "#D91667";
        // hover after select
        document.getElementById("hoverBorder2").onmouseenter = function() {
            hoverBorderTextChange_chicken1()
        };
        document.getElementById("hoverBorder2").onmouseleave = function() {
            hoverBorderTextChange_chicken2()
        };
        function hoverBorderTextChange_chicken1() {
            para1TextOrColor_chicken.innerText = "Котэ не одобряет";
            para1TextOrColor_chicken.style.color = "#E62E7A";
        }
        function hoverBorderTextChange_chicken2() {
            para1TextOrColor_chicken.innerText = "Сказочное заморское яство";
            para1TextOrColor_chicken.style.color = "#666666";
        }
        break;
    }
    switch (textChicken) {
    case arrayChicken[1]:
        //unselect
        cellBackground_chicken.style.background = "#B3B3B3";
        cellBackground_chicken.style.filter = "brightness(110%)";
        para1TextOrColor_chicken.innerText = "Сказочное заморское яство";
        para1TextOrColor_chicken.style.color = "#B3B3B3";
        heading1Color_chicken.style.color = "#B3B3B3";
        heading2Color_chicken.style.color = "#B3B3B3";
        para2Color_chicken.style.color = "#B3B3B3";
        catCellBackground_chicken.style.filter = "opacity(65%)";
        quantity1Background_chicken.style.background = "#B3B3B3";
        quantity1Background_chicken.style.filter = "brightness(90%)";
        footer1Text_chicken.innerText = arrayChicken[2];
        //disables hover after select
        document.getElementById("hoverBorder2").onmouseenter = function() {
            hoverBorderTextChange_chicken1()
        };
        document.getElementById("hoverBorder2").onmouseleave = function() {
            hoverBorderTextChange_chicken2()
        };
        function hoverBorderTextChange_chicken1() {
            para1TextOrColor_chicken.innerText = "Сказочное заморское яство";
        }
        function hoverBorderTextChange_chicken2() {
            para1TextOrColor_chicken.innerText = "Сказочное заморское яство";
        }
        break;
    }
    switch (textChicken) {
    case arrayChicken[2]:
        //switches between select and unselect
        cellBackground_chicken.style.background = "#D91667";
        cellBackground_chicken.style.filter = "";
        para1TextOrColor_chicken.style.color = "";
        heading1Color_chicken.style.color = "";
        heading2Color_chicken.style.color = "";
        para2Color_chicken.style.color = "";
        catCellBackground_chicken.style.filter = "";
        quantity1Background_chicken.style.background = "#D91667";
        quantity1Background_chicken.style.filter = "";
        footer1Text_chicken.innerText = "Филе из цыплят с трюфелями в бульоне.";
        //hover after select 
        document.getElementById("hoverBorder2").onmouseenter = function() {
            hoverBorderTextChange_chicken1()
        };
        document.getElementById("hoverBorder2").onmouseleave = function() {
            hoverBorderTextChange_chicken2()
        };
        function hoverBorderTextChange_chicken1() {
            para1TextOrColor_chicken.innerText = "Котэ не одобряет";
            para1TextOrColor_chicken.style.color = "#E62E7A";
        }
        function hoverBorderTextChange_chicken2() {
            para1TextOrColor_chicken.innerText = "Сказочное заморское яство";
            para1TextOrColor_chicken.style.color = "#666666";
        }
        break;
    }
}
