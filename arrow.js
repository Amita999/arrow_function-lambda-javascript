//function declaration
function funcDeclaration(strvalue,strpass){
    let newValue ="Amita";
    let pass="12345";

    return strvalue ===newValue && strpass===pass 
    ?true
    :false;
};

let flag = funcDeclaration("Amita","12345")?true:false;
console.log(flag===true?"Login Successful":"Login Unsuccessful");


//fuction Expression
let variableExpression = function funcDeclaration1(strname,strpasswrd){
    let newValue ="Amita";
    let pass="12345";

    return strname ===newValue && strpass===pass 
    ?true
    :false;
}  ;
flag = variableExpression ("Amita","12345")?true:false;
console.log(flag);
//Arrow function
let varStore = (name,pass)=>{
    let value ="Amita";
    let passwrd="12345";
    return name ===value && pass===passwrd 
    ?true
    :false;
};
flag = varStore ("Amita","12345")?true:false;
console.log(flag);