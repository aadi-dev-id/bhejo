import React from 'react'

const Common = () => {
  console.log("Common Default");
  return "Common Deafult";
}
const setCookie = (cookieName, cookieValue, mintusToExpire) => {
    const date = new Date();
    date.setTime(date.getTime() + (mintusToExpire * 60 * 1000)); // Convert hours to milliseconds
    const expires = "expires=" + date.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
    return true;
}
const deleteCookie = (name) => {
    const date = new Date();
    date.setTime(date.getTime() - 5000); // Convert hours to milliseconds
    const expires = "expires=" + date.toUTCString();
    document.cookie = cookieName + "=;" + expires + ";path=/";
}
const apiEndpoint = () =>{
    const mode = 'prod';
    if(mode=='dev'){
      return "http://localhost:3000";
    }else{
      // set live api url
      return "https://bhejo-api-deploy.vercel.app"; 
    }
}
export default Common
export {setCookie,deleteCookie,apiEndpoint}
