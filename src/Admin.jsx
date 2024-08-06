import React, { useEffect, useState } from 'react';

function Admin() {
    const [users, setUsers] = useState([]);

    // Foydalanuvchilarni serverdan olish
    useEffect(() => {
        fetch('http://localhost:5000/users/')
            .then((res) => res.json())
            .then((data) => {
                console.log('Fetched data:', data);
                setUsers(data);
            })
            .catch((error) => console.error('Error fetching users:', error));
    }, []);

    // Foydalanuvchini o'chirish
    const handleDelete = async (userId) => {
        try {
            const response = await fetch(`http://localhost:5000/users/${userId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log('User deleted:', userId);
                // O'chirilgan foydalanuvchini ro'yxatdan olib tashlash
                setUsers(users.filter(user => user.id !== userId));
            } else {
                console.error('Error deleting user:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className='admin'>
            <h2>Foydalanuvchilar Ro'yxati</h2>
            {users.length === 0 ? (
                <p>Hech qanday ma'lumot mavjud emas</p>
            ) : (
                users.map((user) => (
                    <div key={user.id} className="user-card">
                        <div className='img_div'>
                            {user.img && (
                                <img src={`http://localhost:5000/uploads/${user.img}`} alt="Uploaded" />
                            )}
                        </div>
                        <p>Sharx: {user.sharx}</p>
                        <p>Manzil: {user.manzil}</p>
                        <p>Ism: {user.ism}</p>
                        <p>Familiya: {user.familiya}</p>
                        <button onClick={() => handleDelete(user.id)}>O'chirish</button>
                    </div>
                ))
            )}
        </div>
    );
}

export default Admin;
