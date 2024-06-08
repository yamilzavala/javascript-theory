function flatten(value) {

    //validation isPrimitive value
    if(typeof value !== 'object' || value === null){
      return value;
    }
    
    //validation isArray value
    if(Array.isArray(value)) {
      return flattenArray(value)
    }
    
    //validation isObject value
    return flattenObject(value)
  }
  
  
  function flattenArray(array) {
   return array.reduce((acc, curr) => acc.concat(flatten(curr)), [])
  }
  
  
  function flattenObject(object) {
    const flattenedObj = {}
  
    if(!Object.keys(object).length) {
      return flattenedObj;
    }
    
    for(const [key, value] of Object.entries(object)) {
      const valueIsObject = typeof value === 'object' && value !== null && !Array.isArray(value);
      const flattendedValue = flatten(value)
  
      if(valueIsObject){
        Object.assign(flattenedObj, flattendedValue)
      } else {
        flattenedObj[key] = flattendedValue;
      }
      return flattenedObj;
    }
  }
  
  // Do not edit the line below.
  exports.flatten = flatten;