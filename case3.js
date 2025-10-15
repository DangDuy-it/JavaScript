var arr1=[3,5,1,8,-3,7,8];
var arr2=[7, 12, 6, 9, 20, 56, 89];
var arr3=[];
var arr4=[0, 0, 0, 0, 0, 0];

function minArray(arr){
    if (arr.length==0){
        return "Mảng rỗng";
    }
    min=arr[0];
    for(var i=0;i<arr.length;i++){
        if(min>arr[i]){
            min=arr[i];
        }
    }
    return min;
}
var min=minArray(arr4);
console.log("Số nhỏ nhất trong mảng là: "+min);
