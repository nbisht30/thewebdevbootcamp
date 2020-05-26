var num = 5;

while(num <= 50){
    if(num % 5 === 0 && num % 3 === 0){
        console.log(num + " is divisible by both 5 and 3");
    }
    num++;
}