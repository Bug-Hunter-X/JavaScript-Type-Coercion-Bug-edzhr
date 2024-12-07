function foo(a,b){    if(typeof a === 'number' && typeof b === 'number'){        return a + b;    }else{        return "Error: Both inputs must be numbers";    }
}
console.log(foo(1, "1")); // Output: Error: Both inputs must be numbers
console.log(foo(1, 1)); //Output:2