import React,  { useState, useCallback } from 'react';
import { useHistory  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { joinPage } from '../reducer/userSlice';
import { useForm } from "react-hook-form";

export default function UserAdd() {
    const history = useHistory()
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);

    // const [join, setJoin] = useState({
    //     username: '', password: '', email:'', name:'', regDate: new Date().toLocaleDateString()
    // })
    // const {username, password, email, name} = join
    
    // const handleChange = useCallback(
    //     e => {
    //         const { value, name } = e.target
    //         setJoin({
    //             ...join,
    //             [name] : value
    //         })
    //     }, [join] //state 
    // )
    
   
    // const onSubmit = async(data) => {
    //     await dispatch(joinPage(JSON))}
        // e.preventDefault()
        // e.stopPropagation()
        // const json = {
        //     'username': join.username,
        //     'password': join.password,
        //     'email': join.email,
        //     'name': join.name,
        //     'regDate': join.regDate
        
        // alert(`회원가입 정보: ${JSON.stringify(json)}`)
        // alert(`${join.username} 회원가입 환영`)
        // history.push('/users/login')

        // const joinRequest = {...join}
        // alert(`회원가입정보: ${JSON.stringify(joinRequest)}`)
        // userJoin(joinRequest)
        // .then(res =>{
        //     alert('회원가입 성공')
        //     history.push('/users/login')
        // })
        // .catch(err => {
        //     alert(`회원가입 실패 : ${err}`)
        // })
    

    return (
    <div>
        <h1>회원 가입을 환영합니다.</h1>
    <form onSubmit={handleSubmit(async(data) => {await dispatch(joinPage({...data, regDate: new Date().toLocaleDateString()}))})} method='POST'> 
          <ul>
              <li>
                <label>
                    {/* use aria-invalid to indicate field contain error */}
                아이디 : <input type="text" id="username" name="username" size="10" minlength="4" 
                        maxlength="10"aria-invalid={errors.username ? "true" : "false"} 
                        {...register('username', { required: true, maxLength: 5 })}/>
                </label>
                  <small>4~15자리 이내의 영문과 숫자</small>
                  <small> {/* use role="alert" to announce the error message */}
                   {errors.username && errors.username.type === "required" && (
                        <span role="alert">------</span>
                    )}
                    {errors.username && errors.username.type === "maxLength" && (
                        <span role="alert">15자를 초과하였습니다</span>
                    )}
                    </small>
                  
              </li>
              <li>
                  <label>
                      이메일 : <input type="email" id="email" 
                        aria-invalid={errors.email ? "true" : "false"}
                        {...register('email', { required: true, maxLength: 30 })}
                        size="10" minlength="4" maxlength="15"/>
                    {/* use role="alert" to announce the error message */}
                    {errors.email && errors.email.type === "required" && (
                        <Span role="alert">이메일은 필수값입니다</Span>
                    )}
                    {errors.email && errors.email.type === "maxLength" && (
                        <Span role="alert">이메일은 4자에서 15 글자이어야 합니다.</Span>
                    )}
                  </label>
              </li>
              <li>
                  <label>
                      비밀 번호 : <input type="password" id="password" name="password" value={password} onChange={handleChange}/>
                  </label>
              </li>
              <li>
                  <label>
                      이름 : <input type="text" id="name" name="name" value={name} onChange={handleChange}/>
                  </label>
              </li>
              <li>
                <input type="submit" onClick={ e => handleSubmit(e)} value="회원가입"/>
              </li>

          </ul>
      </form>
    </div>
);
}
const Span = styled.span`
color: red
`
                