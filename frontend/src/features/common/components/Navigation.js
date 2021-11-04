import { Logout } from 'features/user';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Navigation = () => {
  return (
    <div>
        <Ul>
            <Li><Link to="/home" style={{ textDecoration: 'none' }}>Home</Link></Li>
            {localStorage.length > 0 ? <></>
              : <Li><Link to="/users/add" style={{ textDecoration: 'none' }}>UserAdd</Link></Li>}
            <Li><Link to="/users/detail" style={{ textDecoration: 'none' }}>UserDetail</Link></Li>
            <Li><Link to="/users/list" style={{ textDecoration: 'none' }}>UserList</Link></Li>
            {localStorage.length > 0 ? <></>
             : <Li><Link to="/users/login" style={{ textDecoration: 'none' }}>UserLogin</Link></Li>}
            <Li><Link to="/users/modify" style={{ textDecoration: 'none' }}>UserModify</Link></Li>
            <Li><Link to="/users/remove" style={{ textDecoration: 'none' }}>UserRemove</Link></Li>
            {/* <Li>{ localStorage.length > 0 && <Logout/> }
   
                {  localStorage.length == 0  ? <><button onClick = { e => window.location.href = `/users/add`  // =  history.push('/users/add')
                                }>회원가입</button><button onClick = { e => window.location.href='/users/login'}>로그인</button></>
                    :<><h1>안녕 :) <br/> {JSON.parse(window.localStorage.getItem('sessionUser')).name} 로그인 중입니다</h1></>}

            </Li> */}
        </Ul>
    </div>
    )
}

export default Navigation

const Ul = styled.ul`
background-color: #FFDAB9;
text-decoration:none
text-align: center;
`
const Li = styled.li`
float: left;
margin-left: 1em;
font-size:20px;
text-align:center;
display:inline-block;
`