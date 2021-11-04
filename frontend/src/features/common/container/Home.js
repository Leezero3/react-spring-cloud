import React from 'react';
import styled from "styled-components";
import { Layout } from '..';

export default function Home() {
    // const sessionUser = localStorage.getItem("sessionUser")
    // const history = useHistory()
    // const [sessionName, setSessionName] = useState('')
    // const logout = e => {
    //     e.preventDefault()
    //     localStorage.setItem('sessionUser','')
    //     history.push('/')
    /*  */
  // return (
  //   <div>
  //       {sessionName === 'None' ?
  //       <><button onClick = {() => window.location.href = '/users/add'}>회원가입</button>
  //       <button onClick = { () => window.location.href = '/users/login'}>로그인</button></>
  //       :
  //       <><h1>{JSON.parse(localStorage.getItem('sessionUser')).name}님 접속중</h1>
  //       </>}        
  //   </div>
  // );
 
 
 
//   return(<div>
//     {localStorage.length > 0 ?
//     <><h3>{JSON.parse(window.localStorage.getItem('sessionUser')).name}님 접속중</h3> <Logout/></>
//     : <><h3>로그인 필요</h3>
//     <button onClick = {e => window.location.href = `/users/add`}>회원가입</button>
//     <button onClick = {e => window.location.href = `/users/login`}>로그인</button>
//     </>}
//     <h1>시간이란...</h1>
//     <p>내일 죽을 것처럼 오늘을 살고
//         영원히 살 것처럼 내일을 꿈꾸어라.</p>
//     </div>)
// }

// or 
 
//  return (<>
//     <div style={{margin:'20px'}}>
//         { localStorage.length > 0 && <Logout/> }
   
//         {  localStorage.length == 0  ? <><button onClick = { e => window.location.href = `/users/add`  // =  history.push('/users/add')
//                         }>회원가입</button><button onClick = { e => window.location.href='/users/login'}>로그인</button></>
//             :<><h1>안녕 :) <br/> {JSON.parse(window.localStorage.getItem('sessionUser')).name} 로그인 중입니다</h1></>}
//         <h1>Home</h1>
//          <p>
//              내일 죽을 것처럼 오늘을 살고
//              영원히 살 것처럼 내일을 꿈꾸어라.
//          </p>
//  </div>
// </>) 
return(
    <Layout>
        <Main><h1>시간이란...</h1>
        <p>내일 죽을 것처럼 오늘을 살고
            영원히 살 것처럼 내일을 꿈꾸어라.</p></Main>
    </Layout>)
}

const Main = styled.div`
width: 500px;
margin: 0 auto;
text-decoration:none
text-align: center;
`