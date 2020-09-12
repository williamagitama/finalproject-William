import React from 'react'
import './LoginPage.css'
import { Button } from "@material-ui/core";

function LoginPage() {
    return (
        <div className='Login'>
            <div className='user'>
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <Button variant='outlined'>Login</Button>
            </div>
        </div>
    )
}

export default LoginPage
