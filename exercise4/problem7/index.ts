class Is{
    bool(value:unknown){  
     return typeof value == "boolean" 
    }
    num(value:unknown){
        return typeof value == "number"}
    str(value:unknown){
       return typeof value == "string"}
     fun(value:unknown){
      return typeof value == "function" }
}
const is = new Is();
export default is;
