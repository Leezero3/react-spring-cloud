import React, { useState, useEffect, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

export function UserDetail() {
  const SERVER = 'http://localhost:8080'
  const history = useHistory()
  const [detail, setDetail] = useState()

  const fetchOne = () => {
    const sessionuser = JSON.parse(localStorage.getItem('sessionUser'))
    alert('사용자 아이디:'+ sessionuser.userId)
    axios.get(`${SERVER}/user-detail/${sessionuser.userId}`)
    .then(res => {
      alert(`회원정보 조회 성공: ${res.data}`)
    })
    .catch(err => {
      alert(`${err}`)
    })
  }
  useEffect(() => {
    fetchOne()
  },[])

  return (
    <div>
        <h1>회원 정보</h1>
          <ul>
              <li>
                  <label>
                      <span> 아이디 : </span>
                  </label>
              </li>
              <li>
                  <label>
                    <span> 이메일 : ******* </span>
                  </label>
              </li>
              <li>
                  <label>
                       <span> 비밀 번호 : ******** </span>
                  </label>
              </li>
              <li>
                  <label>
                    <span> 이메일 : </span>
                  </label>
              </li>
              <li>
                  <input type="button" value="회원정보수정"/>
              </li>

          </ul>
    </div>
  );
}
