import {useCookies} from 'react-cookie';

const CheckLogin = () => {
    //쿠키를 이용해 로그인 여부 판단 
    const [cookies] = useCookies(['sessionId']);
    
    if(cookies.sessionId && cookies.sessionId !== "undefined"){
      return true;
    }else{
      return false;
    }
   
    
}

export default CheckLogin