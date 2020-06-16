var obj = {
    name: "Chuck",
    age: 45,
    isCool: false,
    add: function(x,y){
        return x+y;
    }
};

console.log(obj.add(10,20));

// this keyword

var comments = {
};

comments.data = ["Good Job", "Bye", "Lame...."];


comments.print = function(){
    this.data.forEach(function(item){
        console.log(item);
    })
} 

comments.print();