export const generateRandomString = () => {
    const character = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = '';
    for(let i=0;i<6;i++){
        result+=character.charAt(Math.floor(Math.random()*character.length))
    }

    return result;
}