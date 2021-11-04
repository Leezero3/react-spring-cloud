import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { remove } from 'features/user/reducer/userSlice'
import { useDispatch } from 'react-redux';
import Layout from 'features/common/components/Layout';
import styled from 'styled-components'

export function UserRemove() {
  const [pwd, setPwd] = useState('')
  const sessionUser = JSON.parse(localStorage.getItem('sessionUser'))
  const history = useHistory()
  const dispatch = useDispatch()

  // const handleChange = e => {
  //   setPwd(e.target.value)
  // }
  // const handleClick = e => {
  //   e.preventDefault()
  //   if(sessionUser.password === pwd){
  //     UserRemove(sessionUser)
  //     .then(res => {
  //       console.log(res.data)
  //       localStorage.setItem('sessionUser', '')
  //       history.push('/')
  //     })
  //     .catch(err => console.log(err))
  //   }else{
  //     alert('입력된 비밀번호가 틀립니다')
  //     document.getElementById('password').value = ''
  //   }
    
  // }
  return (
    <Layout><Main>
      <h1>회원탈퇴</h1>
      <form method="DELETE" onSubmit={useCallback(
        e => {
          e.preventDefault();
        (sessionUser.password === pwd ) ? dispatch(remove(sessionUser.userId))
        : document.getElementById('password').value = ''
      })
    }>
    <ul>
      <li><label><span>사용자 번호 : {sessionUser.userId} </span></label></li>
      {/* 만약 보이지 않게 하고 싶다면 이미 위 쪽에서 아이디를 받아오고 있음으로 위의 줄을 지워주면 됨
        현재의 경우 관리자 모드라고 가정하고 보이도록 처리함 */}
      <li><label><span>사용자아이디 : {sessionUser.username} </span></label></li>
      <li><label for="pw">비밀번호 확인</label>
      <input type="password" id="password" name="password" onChange={e => {setPwd(e.target.value)}}/></li>
      <li><input type="submit" value="탈퇴요청" /></li>
      <li><input type="button" value="탈퇴취소" onClick={e => history.push("/users/detail")}/></li>
    </ul>
</form>

  </Main></Layout>
  );
}

const Main = styled.div`
width: 500px;
margin: 0 auto;
text-decoration:none
text-align: center;
` 