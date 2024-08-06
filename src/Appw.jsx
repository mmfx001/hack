import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Appw = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const usr = [
        {
            ism: "MarsIT",
            kod: "marsit1233",
            navigator: '/admin' // Path to the admin page
        }
    ];

    const handleLogin = () => {
        const min = 8;
        const max = 12;

        if (password.length < min || password.length > max) {
            setError('Parol uzunligi 8 va 12 oralig\'da bo\'lishi kerak');
            return;
        }

        const user = usr.find(v => v.ism === username && v.kod === password);

        if (user) {
            console.log('Tori');
            navigate(user.navigator); // Use react-router-dom to navigate
        } else {
            setError('Bunday foydalanuvchi yo\'q!');
        }
    };

    return (
        <div>
            <form action="">
                <h1>Adminlikka kirish uchun o'zingizni tasdiqlang!</h1>
                <input 
                    type="text" 
                    id="username" 
                    placeholder="User Name..." 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required
                />
                <input 
                    type="password" 
                    id="password" 
                    placeholder="Password..." 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required
                />
                <b>{error}</b>
                <button 
                    id="loginBtn" 
                    type="button" 
                    onClick={handleLogin}
                >
                    <b>Login</b>
                </button>
            </form>
        </div>
    );
};

export default Appw;
