function isPrimitive(value) {
  if(value === Object(value)){
    return false;
  }else{
    return true;
  }
}

export default isPrimitive;
