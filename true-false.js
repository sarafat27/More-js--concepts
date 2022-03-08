// falsy:boolean false,0,empty string,undefined variable,null,NaN
//truthy:boolean true,any number(positive or negative),any string including whitespace,empty array,empty object
let x = [];
if (x) {
    console.log('variable is truthy');
}
else {
    console.log('variable is falsy')
}
