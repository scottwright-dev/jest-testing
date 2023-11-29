function capitalize(string) {

   const firstChar = string.charAt(0).toUpperCase() 
   const rest = string.slice(1).toLowerCase();

  return firstChar.concat(rest);

  }

  export default capitalize;

  console.log(capitalize('hello'));
  console.log(capitalize('fish'));
  console.log(capitalize('Fish and chips'));
  console.log(capitalize('ALL CAPS'));