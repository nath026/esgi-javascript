function type_check_v1(value, typeToCheck) {
  if (typeToCheck === typeof value) {
    return true;
  }  
  	if(typeToCheck === "array" || typeToCheck === "null"){
    	if (typeToCheck ==="array"){
        	return Array.isArray(value);
        }
        if (typeToCheck === "null"){
        	return value === null;
        }
        return false
    };
}

function type_check_v2(){

}


