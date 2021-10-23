// UserListForm 은 UserList의 자식 = 자식은 람다로 처리해야한다 
// map 안에 들어가는 것들은 모두 람다로 처리한다 
import React from 'react'

const UserListForm = ({list}) => {
    return (<table border='1px' style={{textAlign:'center'}}>
    <thead>
    <tr><th>사용자번호</th>
        <th>사용자아이디</th>
        <th>이름</th>
        <th>이메일</th></tr>
    </thead>
    <tbody>
    {list.map((user)=>(
        <tr><td>{user.userId}</td>
        <td>{user.username}</td>
        <td>{user.name}</td>
        <td>{user.email}</td></tr>
    ))}
    </tbody>
    </table>)
}

export default UserListForm