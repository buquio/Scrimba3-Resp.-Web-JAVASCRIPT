export function getDate() {
  const date = new Date();  
  return date;
}

export const year = new Date().getFullYear();



xxxx default export
export default function getDate() {
  const year = new Date().getFullYear();
  const date = `${new Date()}, year: ${year}`;  
  return date;
}




xxxx excercise
export default function getUser() {
  return {
    name: "Clementine Bauch", 
    company: "Romaguera-Jacobson"
  }
}
