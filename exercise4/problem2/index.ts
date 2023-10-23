class Name {
    firstName:string;
    lastName:string;
    
    constructor(firstName:string,lastName:string){
       this.firstName= firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
       this.lastName=lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
    }
    
    get fullName():string{
    return `${this.firstName} ${this.lastName}`
    }
    
    get initials():string{
    return `${this.firstName[0]}.${this.lastName[0]}`
    }
}

export default Name;
