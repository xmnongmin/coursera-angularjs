//**  Prototypal inheritance
// var parent = {
//   value: "parentValue",
//   obj: {
//     objValue: "parentObjValue"
//   },
//   walk: function () {
//     console.log("walking!");
//   }
// };
//
// var child = Object.create(parent);
// console.log("CHILD - child.value: ", child.value);
// console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
// console.log("PARENT - parent.value: ", parent.value);
// console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
// console.log("parent: ", parent);
// console.log("child: ", child);
//
// child.value = "childValue";
// child.obj.objValue = "childObjValue";
// console.log("*** CHANGED: child.value = 'childValue'");
// console.log("*** CHANGED: child.obj.objValue = 'childObjValue'");
// console.log("CHILD - child.value: ", child.value);
// console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
// console.log("PARENT - parent.value: ", parent.value);
// console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
// console.log("parent: ", parent);
// console.log("child: ", child);
//
// console.log("child.obj === parent.obj ? ", child.obj === parent.obj);
//
// var grandChild = Object.create(child);
// console.log("Grandchild: ", grandChild);
// grandChild.walk();

//** Function constructors
// See my other course: HTML, CSS, and Javascript for Web Developers
// Lecture #48
// function Dog(name) {
//   this.name = name;
//   console.log("'this' is: ", this);
// }
//
// var myDog = new Dog("Max");
// console.log("myDog: ", myDog);
//
// // Not being used as a function constructor
// Dog("Max2");


//callback functions
// first(2, function(firstResult, err){ 
// 	if(!err){
// 		second(firstResult,function(secondResult, err){
// 			if(!err){
// 				third(secondResult, function(thirdResult, err){
// 					console.log(thirdResult);
// 				});
// 			}
// 		});
// 	}
// });
// function first(value, fname){
// 	fname(value+2, false);
// }

// function second(value, fname){
// 	fname(value+2, false);
// }

// function third(value, fname){
// 	fname(value+2, false);
// }

//promise
var promise = new Promise(function(resolve, reject){
	alert('abc');
	resolve(2);
	alert('def');
});

promise.then(first).then(second).then(third).then(function(response){
	console.log(response);
});

function first(value){
	alert('a');
	return value+2;
}

function second(value){
	alert('b');
	return value+2;
}

function third(value){
	alert('c');
	return value+2;
}



