// Rect 클래스 구현
let Rect = function (x1, y1, x2, y2, color) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.color = color;
}

Rect.prototype.show = function () {
    console.log("[width: "+ (this.x2-this.x1) +", height:" + (this.y2-this.y1) + ", color:" + this.color + "] 인 사각형을 그렸습니다.");
}

let r1 = new Rect(10,10,100,100, "#f00");
r1.show();

let r2 = new Rect(50, 50, 200, 200, "#fff");
r2.show();