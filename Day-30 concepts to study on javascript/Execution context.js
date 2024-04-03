const globalVariable = 'I am global';

function outerFunction() {
  const outerVariable = 'I am outer';
  
  function innerFunction() {
    const innerVariable = 'I am inner';
    console.log(innerVariable); 
    console.log(outerVariable); 
    console.log(globalVariable); 
    console.log(this);
  }
  
  innerFunction(); 
}

outerFunction(); 

console.log(globalVariable);
