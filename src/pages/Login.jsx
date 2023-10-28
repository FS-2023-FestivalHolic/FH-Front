import React from 'react'
import {useForm} from 'react-hook-form';
import * as s from '../style/SignInUpStyle';
function Login() {

  const {
    register,
    handleSubmit,
    formState: {  errors },
    reset
  } = useForm();

  const onSubmit = (data) => {

    console.log(data);
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