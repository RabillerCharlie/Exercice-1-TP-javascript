//Fonction adder modifié pour nombre de parametres variables
function adder(){
var args = Array.prototype.slice.call(arguments);

  return function(v){
	var somme=0;
	args.forEach(function(val){
	somme+=val(v);
	});
  return somme;
  }
}

function mult(v){
  return function(e){
    return v*e;
  }
}
//Methode de soustraction
function sub(x){
  return function(y){
    return x - y;
  }
}

console.log(adder()(0)); // 0
console.log(adder()(1)); // 0
console.log(adder(mult(2))(1)); // 2
console.log(adder(mult(2), mult(2))(1)); // 4
console.log(adder(mult(2), mult(2), mult(2))(1)); // 6
console.log(adder(mult(2), sub(2), mult(2))(1)); // 5
console.log(sub(0)(0)); // 0
console.log(sub(2)(1)); // 1
console.log(sub(2)(2)); // 0
console.log(sub(2)(4)); // -2
