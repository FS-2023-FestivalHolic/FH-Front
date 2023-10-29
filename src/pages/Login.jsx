import React from 'react'
import {useForm} from 'react-hook-form';
import * as s from '../style/SignInUpStyle';
import axios from 'axios'; // axios를 임포트해야 합니다
import { useCookies } from 'react-cookie'; // useCookies import
import { useNavigate } from 'react-router';
function Login() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['mySessionId']); // 세션 쿠키를 사용하기 위해 react-cookie의 useCookies 사용
  const {
    register,
    handleSubmit,
    formState: {  errors },
    reset
  } = useForm();

  const onSubmit = (data) => {

      console.log(data);
      axios
      .post('/api/login', data) // 로그인 API 엔드포인트로 POST 요청을 보냅니다.
      .then((res) => {
        // 서버에서 로그인 성공 메세지를 받으면
        if (res.data.loginSuccess) {
          // 서버에서 받은 세션 ID를 쿠키에 저장
          setCookie('mySessionId', res.data.mySessionId, { path: '/' });
          //쿠키 저장 완료되면, 로그인 성공하였으므로 메인페이지 이동 
          navigate('/') 
        } else {
          // 로그인이 실패한 경우 에러 메시지를 처리할 수 있습니다.
          console.log('로그인 실패');
        }
      })
      .catch((error) => {
        console.error('로그인 요청 오류:', error);
      });
      reset();
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
      <s.SignInput type="text" name="uid"  
        {...register("uid", {required: '아이디를 입력하세요'})}/>
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