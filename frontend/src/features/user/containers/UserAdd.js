import React from 'react';
import { useDispatch } from 'react-redux';
import { join, exist } from 'features/user/reducer/userSlice'
import styled from 'styled-components'
import { useForm } from "react-hook-form";
import Layout from 'features/common/components/Layout';

export default function UserAdd() {
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
    <Layout>
    <Main>
        <h1>회원 가입을 환영합니다.</h1>
        <form method='POST' 
        onSubmit={ handleSubmit(async (data) => {await dispatch(join({...data, 
                                            regDate: new Date().toLocaleDateString()}))})}>
            <ul>
                <li>
                    <label>아이디 : </label>
                    <input type="text" id="username" 
                        {...register('username', { required: true, maxLength: 30 })}
                        size="10" minlength="4" maxlength="15"/>
                        {errors.username && errors.username.type === "required" && (
                            <Span role="alert">아이디는 필수값입니다</Span>
                        )}
                        {errors.username && errors.username.type === "maxLength" && (
                            <Span role="alert">아이디는 4자에서 15 글자이어야 합니다.</Span>
                        )}
                        <button onClick={() => dispatch(
                            exist(document.getElementById('username').value))}>중복체크</button>
                    <br/>
                    <small>4~15자리 이내의 영문과 숫자</small>
                </li>
                <li>
                    <label> 이메일 : </label>
                    <input type="email" id="email" 
                        aria-invalid={errors.name ? "true" : "false"}
                        {...register('email', { required: true, maxLength: 30 })}
                        size="10" minlength="4" maxlength="15"/>
                    {/* use role="alert" to announce the error message */}
                    {errors.email && errors.email.type === "required" && (
                        <Span role="alert">이메일은 필수값입니다</Span>
                    )}
                    {errors.email && errors.email.type === "maxLength" && (
                        <Span role="alert">이메일은 4자에서 15 글자이어야 합니다.</Span>
                    )}
                </li>
                <li>
                    <label>비밀 번호 : </label>
                    <input type="password" id="password" 
                        aria-invalid={errors.password ? "true" : "false"}
                        {...register('password', { required: true, maxLength: 30 })}
                        size="10" minlength="1" maxlength="15"/>
                    {errors.password && errors.password.type === "required" && (
                        <Span role="alert">비밀 번호는 필수값입니다</Span>
                    )}
                    {errors.password && errors.password.type === "maxLength" && (
                        <Span role="alert">비밀 번호는 1자에서 15 글자이어야 합니다.</Span>
                    )}
                </li>
                <li>
                    <label> 이름 : </label>
                    <input type="text" id="name" 
                        aria-invalid={errors.name ? "true" : "false"}
                        {...register('name', { required: true, maxLength: 30 })}
                        size="10" minlength="2" maxlength="5"/>
                    {errors.name && errors.name.type === "required" && (
                        <Span role="alert">이름은 필수값입니다</Span>
                    )}
                    {errors.name && errors.name.type === "maxLength" && (
                        <Span role="alert">이름은 2자에서 5 글자이어야 합니다.</Span>
                    )}
                </li>
            </ul>
            <input type="submit" value="회원가입"/> 
        </form>
    </Main>
    </Layout>
    </div>
    );
}

const Span = styled.span`
color: red
`
const Main = styled.div`
width: 500px;
margin: 0 auto;
text-decoration:none
text-align: center;
`    