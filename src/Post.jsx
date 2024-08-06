import React, { useEffect, useState } from 'react';
import "./Navbar.css"
function Post() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users/')
            .then((res) => res.json())
            .then((data) => {
                console.log('Fetched data:', data);
                setUsers(data);
            })
            .catch((error) => console.error('Error fetching users:', error));
    }, []);

    console.log(users);



    return (
        <div className='container'>
            <h2>Tastiqlangan Shikoyat</h2>
            {users.length === 0 ? (
                <p>Hech qanday ma'lumot mavjud emas</p>
            ) : (
                users.map((user, index) => (
                    <div key={index} className="user-card">
                        <div className='img_div'>
                        {user.img && (
                                <img src={`http://localhost:5000/uploads/${user.img}`} alt="Uploaded" />
                            )}
                        </div>
                        <p>Sharx: {user.sharx}</p>
                        <p>Manzil: {user.manzil}</p>
                        <p>Ism: {user.ism}</p>
                        <p>Familiya: {user.familiya}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default Post;
