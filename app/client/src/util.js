export function validateData(obj) {
   return !Object.keys(obj).some(key => obj[key] === '');
}