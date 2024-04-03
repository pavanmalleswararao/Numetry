var nonStrictVar = 10;
console.log(nonStrictVar);

'use strict';

function strictFunction(a) {
  'use strict';
  console.log(arguments[0]); 
}
strictFunction(1, 2); 


function strictThis() {
  'use strict';
  console.log(this);
}
strictThis();

function outerFunction() {
  'use strict';
  var strictVar = 20;
  console.log(strictVar); 
}
outerFunction();
