import React, {useState, useEffect} from 'react'
import {useForm} from 'react-hook-form';
import * as s from '../style/SignInUpStyle';
import { useNavigate } from 'react-router';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.34.177.220:8083', 
});
function Register() {

  const {
    register,
    handleSubmit,
    formState: {  errors },
    reset
  } = useForm();

  const navigate = useNavigate();

  //회원가입 폼 제출 
  const onSubmit = async (data) => {
    try {
      const response = await api.post('/api/users/sign-up', data);
      if (response.data.status=="SUCCESS") {
        console.log(response.data.status);
        alert('회원가입 성공! 로그인을 진행해주세요')
        navigate('/login');
      }
    } catch (error) {
      console.log('API 호출 중 에러 발생:', error.response.data);
    }
      console.log(data);
  }

  return (
    <s.SignLayout>
      <s.SignHeader>
      <img src='/FH_logo.png' width={100} ></img>
      <span className='welcometext'>FH에 오신것을 환영합니다.</span>
      <span className='subtext'>FH는 노원 수제 맥주 축제를 위한 플랫폼 입니다.</span>
      </s.SignHeader>

      <s.SignForm onSubmit={handleSubmit(onSubmit)}>
        <s.SignLabel>아이디</s.SignLabel>
        <s.SignInput type="text" name="loginId" placeholder='4~15자 이내로 작성해주세요' 
        {...register("loginId", {required: '아이디를 입력하세요', 
              minLength: { value: 4, message: '최소 4자 이상이어야 합니다.',
              maxLength: { value: 15, message: '최대 15자까지 입력 가능합니다.'}}})}/>
        {errors.uid && <span className="error">{errors.uid.message}</span>}

        <s.SignLabel>비밀번호</s.SignLabel>
        <s.SignInput type="password" name="password" placeholder='최소 6자 이상(알파벳, 숫자 필수)'
        {...register('password', {
            required: '비밀번호를 입력하세요',
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
              message: '알파벳과 숫자를 포함한 최소 6자 이상이어야 합니다',
            }
        })}/>
        {errors.password && <span className="error">{errors.password.message}</span>}

        <s.SignLabel>이메일</s.SignLabel>
        <s.SignInput type="text" name="email" placeholder='festivalholic@gmail.com'
        {...register('email', {
          required: '이메일을 입력하세요',
          pattern: {
            value: /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
            message: '이메일 형식을 확인해주세요',
          }
        })}/>
         {errors.email && <span className="error">{errors.email.message}</span>}

        <s.SignLabel>실명</s.SignLabel>
        <s.SignInput type="text" name="name" placeholder='홍길동'
         {...register('name', {
          required: '이름을 입력하세요',
        })}/>
        {errors.name && <span className="error">{errors.name.message}</span>}
        
        <s.SignLabel>닉네임</s.SignLabel>
        <s.SignInput type="text" name="nickName" placeholder='별명을 알파벳, 한글, 숫자 20자 이하로 작성해주세요'
         {...register('nickName', {
          required: '닉네임을 입력하세요',
          maxLength: { value: 20, message: '최대 20자까지 입력 가능합니다.'}
        })}/>
        {errors.nickname && <span className="error">{errors.nickname.message}</span>}

        <s.SignButton type="submit" >회원가입</s.SignButton>
      </s.SignForm>
      <span className='bottomtext'>이미 회원이신가요? <a href='/login'>로그인</a></span>
    </s.SignLayout>
  )
}

export default Register