function outerFunction() {
    const outerVariable = 'I am outer';
    
    function innerFunction() {
      console.log(outerVariable);
    }
    
    return innerFunction;
  }
  
  const closure = outerFunction();
  closure(); 
  