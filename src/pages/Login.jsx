import React from 'react'
import {useForm} from 'react-hook-form';
import * as s from '../style/SignInUpStyle';
import axios from 'axios'; 
import { useNavigate } from 'react-router';
import { setCookie } from '../cookies';
const api = axios.create({
  baseURL: 'http://3.34.177.220:8083', 
});

function Login(props) {
  const {onLogin} = props;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: {  errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {

      const response = await api.post('/api/users/login', data, {withCredentials: true});
      if (response.data.status==="SUCCESS") {

        console.log(response.data.status);
        const accessToken = response.data.data.accessToken;

        // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
		    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        setCookie("accessToken", accessToken, {path: '/' });
        
        console.log(document.cookie);
        onLogin(); //로그인 핸들러 호출

        //쿠키 저장 완료되면, 로그인 성공하였으므로 메인페이지 이동 
        navigate('/') 
      }
    } catch (error) {
      if(error.response.data.status==500){ //아이디, 비밀번호가 틀렸을 때 
          alert('아이디 또는 비밀번호가 틀렸습니다.');
          reset();
      }
    }

      
}
  return (
    <s.SignLayout>
    <s.SignHeader>
    <img src='/FH_logo.png' width={100} ></img>
    <span className='welcometext'>FH에 오신것을 환영합니다.</span>
    <span className='subtext'>FH는 노원 수제 맥주 축제를 위한 플랫폼 입니다.</span>
    </s.SignHeader>
    <s.SignForm style={{margin: '4rem'}} onSubmit={handleSubmit(onSubmit)}> 
      <s.SignLabel>아이디</s.SignLabel>
      <s.SignInput type="text" name="loginId"  
        {...register("loginId", {required: '아이디를 입력하세요'})}/>
      {errors.uid && <span className="error">{errors.uid.message}</span>}


      <s.SignLabel>비밀번호</s.SignLabel>
      <s.SignInput type="password" name="password" 
      {...register('password', {
            required: '비밀번호를 입력하세요'})}/>
      {errors.password && <span className="error">{errors.password.message}</span>}
    
    <s.SignButton type="submit" style={{marginTop: '3rem'}} >로그인</s.SignButton>
    </s.SignForm>
    <span className='bottomtext'>아직 회원이 아니신가요? <a href='/register'>회원가입</a></span>
  </s.SignLayout>
  )
}

export default Login