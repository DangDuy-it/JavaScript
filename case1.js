var x=[-3, 5, 1,3, 2, 10];

var i=x.length-1;
var y=[];
while( i>=0){
    y[x.length-1-i]=x[i];
    i--;
}
console.log("Dao nguoc: ", y);
