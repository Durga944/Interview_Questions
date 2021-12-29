var readlineSync= require('readline-sync');
var num = readlineSync.questionInt("Enter Any Num");
// var num = 100;

var index = 2;
while(index<num){
    var index1 = 2;
    var count = 0;
    while(index1<index){
        if(index%index1==0){
            count++
        }
        index1++
    }
    if(count==0){
        console.log(index,'Prime Number');
    }
    index+=3
}
