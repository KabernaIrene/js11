const sumNumb = (a, b) => +a * +b;

//Вам необхідно написати функцію-декоратор logArguments(fn), яка приймає на вхід функцію 
//і додає можливість логувати всі аргументи, передані у функцію-аргумент.

function logArguments(fn) {
  
  return function  (a, b){
    console.log(a);
    console.log(b);

    return fn.call(this, a, b)
  }
   
}

const sumNumbLog = logArguments(sumNumb);

console.log(sumNumbLog(7, 3))
console.log(sumNumbLog(10, 3))
console.log(sumNumbLog(4, 3))
console.log(sumNumbLog(9, 3))

//Вам необхідно написати функцію-декоратор validate(fn, validator), 
//яка приймає на вхід функцію і додає можливість перевіряти аргументи, 
//передані у функцію fn, на відповідність заданому validator. 
//Якщо аргументи не проходять перевірку, то декоратор має викидати виняток.

function validate(fn, validator){
  return function  (a, b){

    try {
    if (a == validator || b == validator) {
      throw new Error(`Parameteres is suitable arguments!`);
    }

    if (a == validator) {
      throw new Error(`Parameter ${a} is suitable argument!`);
    }

    if (b == validator) {
      throw new Error(`Parameter ${b} is suitable argument!`);
    }
      
    } catch (e) {
      console.error(e)
    }

    return fn.call(this, a, b)
  }

}

const sumNumbVal = validate(sumNumb, 0);

console.log(sumNumbVal(10, 10))
console.log(sumNumbVal(10, 2))
console.log(sumNumbVal(0, 10))
console.log(sumNumbVal(1, 10))

//Вам необхідно написати функцію-декоратор retry(fn, maxAttempts), 
//яка приймає на вхід функцію і додає 
//можливість викликати функцію з максимальною кількістю спроб
// у разі помилки та повертає результат останнього виклику.

function retry(fn, maxAttempts) {
  return function  (a, b){
  
  try {
      
    for(let count = 1; count <= maxAttempts; count++){
      console.log(fn(a, b));
      
      } if (count > maxAttempts){
        throw new Error();
      }
      return fn.call(this, a, b)
    
  } catch (e){
    console.log("Error")
  }
  
  }
}

const sumNumbRetry = retry(sumNumb, 5)
sumNumbRetry(3, 10)
sumNumbRetry(3, 4)
