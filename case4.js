function Circle(radius, color){
    this.radius = radius;
    this.color = color;
    this.getRadius = function(){
        return this.radius;
    }
    this.getArea= function(){
        return Math.PI * this.radius * this.radius;
    }
    this.getColor = function(){
        return this.color.toUpperCase();
    }
}
var circle1= new Circle(10, "red");
console.log( `Hinh tron co mau ${circle1.getColor()}, ban kinh  ${circle1.getRadius()} va dien tich la ${circle1.getArea()}`);