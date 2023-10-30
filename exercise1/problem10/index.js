function move(letter) {
   
  let result = '';
   for(let i=0; i<letter.length; i++){
         let str = String.fromCharCode(letter.charCodeAt(i) + 1);
         result = result + str;
     }
      return result;
   }
export default move;
