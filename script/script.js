// task 1/1

   function count(expression){
      function getValues(expression){
      let values = [...expression]
      return values;
   }
   let values = getValues(expression);
   switch (values[1]) {
      case '+': 
      return  showResult(sum(values));
      case '-':
      return  showResult(subtract(values));
      case '*':
      return  showResult(multiply(values));
      case '/':
      return showResult(divide(values))
   }
   function showResult(value){
      return value
   }
}
function sum(values) {
   return +values[0] + +values[2];
}
function subtract(values) {
   return +values[0] - +values[2];
}
function multiply(values) {
   return +values[0] * +values[2];
}
function divide(values) {
   try{
   if(values[2] === '0'){
      throw new Error('You can`t divide by 0');
   } else{
      return +values[0] / +values[2]; 
   }
} catch(error){
   console.log(error.name + '-' + error.message)
   return 0;
}
}
count('5/0');

// task 3

function count (expression){
   function getValues(expression){
      let values = [...expression]
      return values;
   }
   let values;
   try{
      let data = Values(expression); //*Error in function name
      data = values;
   }catch(error){
      if(error.message===`ReferenceError: Can't find variable: Values`){
         alert('Values is undefined');
      }
      if(expression !== String){
         alert('Put a string here');
      }
      console.log(error.name + ': ' + error.message) //**Trows wrong error
      values = [0, '+', 0];
      }
   switch (values[1]) {
      case '+': 
      return  showResult(sum(values));
      case '-':
      return  showResult(subtract(values));
      case '*':
      return  showResult(multiply(values));
      case '/':
      return showResult(divide(values))
   }
   function showResult(value){
      return value
   }
}
function sum(values) {
   return +values[0] + +values[2];
}
function subtract(values) {
   return +values[0] - +values[2];
}
function multiply(values) {
   return +values[0] * +values[2];
}
function divide(values) {
   return +values[0] / +values[2]; 
   }

// task 4

function MakeUsers(name, age){
   this.name = name;
   this.age = age;
}
const user = new MakeUsers('Mike');//Forgot to pass the second parameter

function showMovie(user){
   try{
      if(age===undefined){
         throw new Error();
      }
      }catch(error){
         age = prompt('You forgot to write your age');
      }
      if(age >= 18){
         console.log('You can watch this movie');
      } else if (age<18){
         console.log('Sorry, you are too young');
      }
   }
showMovie(user);