function type_check_v1(value, typeToCheck) {
  if (typeof value !== "object") 
  {
    return typeToCheck === typeof value;
  }  
  else
  {
    if(typeToCheck === "array")
      {
       	return Array.isArray(value);
      }
    if (typeToCheck === "null")
      {
       	return value === null;
      }
  }
    return value !== null && !Array.isArray(value);
}
/*console.log("1"+type_check_v1("null", "null"));
console.log("2"+type_check_v1("null", "object"));
console.log("3"+type_check_v1(null, "object")); //false
console.log("4"+type_check_v1(null, "null"));
console.log("5"+type_check_v1([], "array"));
console.log("6"+type_check_v1([], "object")); //false
console.log("7"+type_check_v1(function f(){},"function"));
console.log("7bis"+type_check_v1(function f(){},"object"));//false
var undeclaredVar;
console.log("8"+type_check_v1(undeclaredVar,"undefined"));
console.log("9"+type_check_v1(undeclaredVar,"object")); //false
*/
function type_check_v2(){

}


