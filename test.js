function sum(){
    var total=0;
    var num;
    while(num!=-1){
        num= Number(prompt("Enter a number"));
        total+=num;
    }
    return total;
}
console.log("Tổng các số là: "+sum());