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