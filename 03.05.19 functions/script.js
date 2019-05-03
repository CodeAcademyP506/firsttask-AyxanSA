// 1. Center Point
// function coordinate(x1, y1, x2, y2) {
//     var diog1 = Math.sqrt(x1 * x1 + y1 * y1);

//     var diog2 = Math.sqrt(x2 * x2 + y2 * y2);

//     if (diog1 <= diog2) {
//         console.log("(" + x1 + " , " + y1 + ")");
//     }
//     else {
//         console.log("(" + x2 + " , " + y2 + ")");
//     }
// }


// coordinate(2, 4, -1, 2);


// 2. Longer Line
// function lines(x1, y1, x2, y2, x3, y3, x4, y4) {
//     var line1 = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

//     var line2 = Math.sqrt((x4 - x3) * (x4 - x3) + (y4 - y3) * (y4 - y3));

//     if (line1 >= line2) {
//         console.log("(" + x1 + " , " + y1 + " , " + x2 + " , " + y2 + ")");
//     }
//     else {
//         console.log("(" + x3+ " ," + y3 +" , " + x4 + " , " + y4 +")");
//     }
// }


// lines(2,4,-1,2,-5,-5,4,-3);


// 3. Cube Properties
// function cube(s, type) {
//     if (type == "face") {
//         var face = Math.sqrt(2 * (s * s))
//         console.log(s, face);
//     } else if (type == "space") {
//         var space = Math.sqrt(3 * (s * s * s))
//         console.log(s, space);
//     } else if (type == "volume") {
//         var volume = s * s * s
//         console.log(s, volume);
//     } else if (type == "area") {
//         var area = 6 * (s * s)
//         console.log(s, area);
//     }else{
//         console.log("type is not correct");
//     }
// }

// cube(5, "face");


function Geometry(figure, x, y) {
    if (figure == "triangle") {
        var triangle = x + y;
        console.log(triangle);
    } else if (figure == "squere") {
        var squere = x*x;
        console.log(squere);
    } else if (figure == "rectangle") {
        var rectangle = x * y;
        console.log(rectangle);
    } else if (figure == "circle") {
        var circle = x * 3.14;
        console.log(circle);
    }
}

Geometry("squere", 3, 6)