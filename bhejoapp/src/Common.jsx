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
    return true;
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
// Function to get the value of a specific cookie by its name
const getCookie = async (cookieName)=>{
  const name = cookieName + "=";
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return ""; // Return an empty string if the cookie is not found
}

export default Common
export {setCookie,getCookie,deleteCookie,apiEndpoint}
