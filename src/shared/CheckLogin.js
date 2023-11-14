import { getCookie } from "../cookies";

const CheckLogin = () => {
    //쿠키를 이용해 로그인 여부 판단 
    if(getCookie('accessToken') && getCookie('accessToken') !== "undefined"){
      return true;
    }else{
      return false;
    }
   
    
}

export default CheckLogin