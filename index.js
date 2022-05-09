//Tema
//Ex 2
let num = [-1,-2,-3,1,2,3,4,5,6,7,8,9,10,15,32,16,67,44,66,78,99,100,192];
let result = [];
function isPrime(num) {
  if(num < 2) return false;

  for (let k = 2; k < num; k++){
    if(num % k == 0){
      return false;
    }
  }
  return true;
}
num.forEach(function (element) {
  const item = isPrime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result)


//Ex 3
const arr = [1 , 2, false, "A", "C", "5", "234", "A4"];
    const stringArr = [];

arr.forEach(element =>{
    if(typeof(element) == "string"){
        stringArr.push(element);


    }
});
 console.log(stringArr);

//Ex 4




//Ex 5
const date_holyday = '24-Decembrie';

switch (date_holyday) {
    case '24-Decembrie':
        console.log('Craciunul');
        break;
    case '1-Decembrie':
        console.log('Ziua Nationala a Romaniei');
        break;
    case '1-Martie':
    case '8-Martie':
        console.log('Ziua femeii');
        break;
    case '1 Februarie':
        console.log('Ziua mea');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Weekend-Mare sarbatoare!');
        break;
    default:
        console.log('La munca, nu la intins mana');
}
