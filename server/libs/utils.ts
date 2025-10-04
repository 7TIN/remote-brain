export function randomGenerate(len : number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let str = "";
  for (let i = 0; i<len; i++){
    const temp = Math.floor(Math.random() * characters.length);
    str += characters[temp];
  }
  return str;
}