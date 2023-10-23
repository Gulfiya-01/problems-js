class Is{
    bool(value:unknown){  
     return Boolean(typeof value == "boolean" )
    }
    num(value:unknown){
        return Boolean(typeof value == "number")}
    str(value:unknown){
       return Boolean(typeof value == "string")}
     fun(value:unknown){
      return Boolean(typeof value == "function") }
}
const is = new Is();
export default is;
