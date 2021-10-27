import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';


export function UserDetail() {

  const history = useHistory()
  const [detail, setDetail] = useState({
      userId:'', username:'', password:'', email:'', name:'', regDate: new Date().toLocaleDateString()
  })
  
  const UserDetail = () => {
      const sessionUser = JSON.parse(localStorage.getItem('sessionUser'))
      UserDetail()
      .then(res => {
          setDetail(res.data)
      })
      .catch(err => {
          alert(`${err}`)
      })
  }
  useEffect(() => {
    UserDetail()
  }, [])
  
  const logout = e => {
    e.preventDefault()
    localStorage.setItem('sessionUser','')
    history.push('/')
}


return (
  <div>
       <h1>회원정보</h1>
  
      <ul>
        <li>
              <label>
                  <span>회원번호 : {detail.userId} </span>
              </label>
              
        </li>
        <li>
              <label>
                  <span>아이디 : {detail.username} </span>
              </label>
              
        </li>
        <li>
              <label>
              <span>이메일 :  {detail.email}  </span>
              </label>
        </li>
        <li>
              <label>
                  <span>비밀 번호 :  *******  </span>
              </label>
        </li>
        <li>
              <label>
              <span>이름 : {detail.name} </span>
              </label>
        </li>
         
        <li>
              <input type="button" value="회원정보수정" onClick={()=> history.push('/users/modify')}/>
        </li>
        <li>
                <input type="button" value="로그아웃" onClick={logout}/>
        </li>

      </ul>
 
  </div>
);
}