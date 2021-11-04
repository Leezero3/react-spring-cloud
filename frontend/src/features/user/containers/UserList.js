import React from 'react'
import Layout from 'features/common/components/Layout';
import styled from "styled-components";
import { UserListForm } from '..'

export function UserList (){
    return(
        <Layout>
            <Main><UserListForm/></Main>
        </Layout>)
    }
    
export default UserList 
const Main = styled.div`
width: 500px;
margin: 0 auto;
text-decoration:none
text-align: center;
` 





//     return (<table border='1px' style={{textAlign:'center'}}>
//     <thead>
//     <tr><th>사용자번호</th>
//         <th>사용자아이디</th>
//         <th>이름</th>
//         <th>이메일</th></tr>
//     </thead>
//     <tbody>
//         {users.map((user) => (
//             <tr><td>{user.userId}</td>
//             <td>{user.username}</td>
//             <td>{user.name}</td>
//             <td>{user.email}</td></tr>
//         ))}
    
//     </tbody>
//     </table>)
// }

