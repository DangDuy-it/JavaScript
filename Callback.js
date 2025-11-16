var courses=[
    {
        name: "Javascript",
        coin: 600,
        isFinish: true,
    },
    {
        name: "HTML",
        coin: 500,
        isFinish: true,
    },
    {
        name: "CSS",
        coin: 400,
        isFinish: true,
    }

]
// Callback Map
Array.prototype.map2= function(callback){
    var output=[], arrayLength= this.length;
    for (var i=0; i< arrayLength; i++){
        var result= callback(this[i], i);
        output.push(result);
    }
    return output; 
}

var htmlMap= courses.map2(function(course, index){
    return `${course.name} ${index}`
})
// Callback Filter
Array.prototype.filter2= function(callback){
    var output=[];
    for (var i in this){
        if( this.hasOwnProperty(i)){
            var result=callback(this[i], i, this)
            if (result){
                output.push(this[i])
            }
        }
    }
    return output;
}
var htmlFilter= courses.filter2(function(course){
    return course.coin>500;
})
// Callback ForEach 
Array.prototype.forEach2= function(callback){
    for (var index in this){
        if (this.hasOwnProperty(index)){
            callback(this[index], index, this)
        }
    }
}
var htmlForEach= courses.forEach2(function(course, index, array){
    console.log(course, index, array)
})

// Callback Some
Array.prototype.some2=function(callback){
    for (var i in this){
        if( this.hasOwnProperty(i)){
            if(callback(this[i], i, this)){
                return true;
            }
        }
    }
    return false;
}

var Some= courses.some2(function(course, index, array){
    return course.isFinish;
})

// Callback every 
Array.prototype.every2= function(callback){
    for (var i in this){
        if( this.hasOwnProperty(i)){
            if (!callback(this[i], i, this)){
                return false;
                break;
            }
        }
    }
    return true;
}
var Every= courses.every2(function(course, index, array){
    return course.isFinish;
})


console.log(Every);