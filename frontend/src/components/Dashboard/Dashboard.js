import React from 'react'
import Header from '../Header/Header'
import './Dashboard.css';
import UserPost from './UserPost';

function Dashboard() {
    return (
        <div className='dash'>
            <Header />

            <UserPost />
        </div>
    )
}

export default Dashboard
