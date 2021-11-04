import React from 'react';
import { Logout } from 'features/user';
import {Navigation }from 'features/common';
import styled from 'styled-components'
const Header = () => {
    return (
      <><header>
        <Navigation/><br/>
        <HR/>
        {localStorage.length > 0 ? // 제일 안전 session 의 경우 오류가 날때도 있음 
        <div>
            <Span>{JSON.parse(window.localStorage.getItem('sessionUser')).name}님 접속중 
            <Logout/></Span> 
        </div>
        : <>
        <Span><button onClick = {e => window.location.href = `/users/add`}>회원가입</button>
        <button onClick = {e => window.location.href = `/users/login`}>로그인</button></Span>
        </>}

      </header>
      </>
    )
}

export default Header 

const Span = styled.span`
color: red;
float: right;
padding-right: 100px
`
const HR = styled.hr`
  border: 1px solid black;
  text-align: center;
`