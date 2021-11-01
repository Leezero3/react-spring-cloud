import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginPage } from '../reducer/userSlice';
import { useForm } from "react-hook-form";

export function UserLogin() {
  const history = useHistory()
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [login, setLogin] = useState({})
  const {username, password} = login
  const handleChange = e => {
    const {value, name} = e.target
    setLogin({
      ...login,
      [name] : value
    })
  }

  const changeNull = ls =>{
    for(const i of ls){
      document.getElementById(i).value = ''
    }
  }

  const onSubmit = async e => {
    // e.preventDefault()
    // e.stopPropagation()
    const loginRequest = {username, password}
    await dispatch(loginPage(loginRequest))
    const loginUser = JSON.parse(localStorage.getItem('sessionUser'))
    if(loginUser.username != null){
      alert(`${loginUser.name}님 환영합니다`)
      history.push("/users/detail")
    }else{
          alert('아이디, 비번 오류로 로그인 실패')
          changeNull(['username','password'])
        }
      }



    // userLogin(loginRequest)
    // .then(res => {
    //   const user = res.data;
    //   if(user.username != null){
    //     alert('로그인 성공, '+ JSON.stringify(res.data))
    //     localStorage.setItem('sessionUser', JSON.stringify(res.data))
    //     history.push("/users/detail")
    //   }else{
    //     alert('아이디, 비번 오류로 로그인 실패  ')
    //     document.getElementById('username').value = ''
    //     document.getElementById('password').value = ''
    //   }
    // })
    // .catch(err => {
    //   alert('접속 실패' + err)
    //   document.getElementById('username').value = ''
    //   document.getElementById('password').value = ''
    // })
  

  return (
    <div>
        <h1>로그인</h1>
    <form onSubmit={handleSubmit(onSubmit)} method="POST">
        <ul>
            <li>
              <label for="id">아이디</label>
              <input type="text" id="username" name="username" onChange={handleChange} aria-invalid={errors.username ? "true" : "false" } 
                                  {...register('username', { required: true, maxLength: 10 })} value={username}/>
              <small> {/* use role="alert" to announce the error message */}
                    {errors.username && errors.username.type === "required" && (
                          <span role="alert">아이디는 4-15자 이내입니다</span>
                      )}
                      {errors.username && errors.username.type === "maxLength" && (
                          <span role="alert">자를 초과하였습니다</span>
                      )}
              </small>
            </li>
            <li>
              <label for="pw">비밀번호</label>
              <input type="password" id="password" name="password" onChange={handleChange}/>
            </li>
            <li>
              <input type="button" title="로그인" value="로그인" onClick={onSubmit}/>
            </li>
        </ul>

    </form>
    </div>
  );
}