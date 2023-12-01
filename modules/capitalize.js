function capitalize(string) {

   const firstChar = string.charAt(0).toUpperCase() 
   const rest = string.slice(1).toLowerCase();

  return firstChar.concat(rest);

  }

  export default capitalize;
