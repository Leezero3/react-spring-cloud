import React from 'react';
import { Link } from 'react-router-dom';
export function Navigation() {

  return (
    <nav class="navi">
        <ul>
            <li><Link to='/home'>홈</Link></li>
            <li><Link to='/user-add'>홈</Link></li>
            <li><Link to='/user-detail'>홈</Link></li>
            <li><Link to='/user-login'>홈</Link></li>
            <li><Link to='/user-list'>홈</Link></li>
            <li><Link to='/user-modify'>홈</Link></li>
            <li><Link to='/user-remove'>홈</Link></li>
        </ul>
    </nav>
    )
}

