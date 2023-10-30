function longestTime(h,m,s) {
  let a = h*3600; 
  let b = m*60;
  
   if (b>a && b>s){
    return m;
  }
  else if (s>a){
    return s;
  }
  else if (a==b && b==s) {
    return s;
  }
  else{ return h;}
  
  // Your code
}

export default longestTime;
