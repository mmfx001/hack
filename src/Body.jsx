import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";

function Body({ onSubmit }) {
    const [image, setImage] = useState(null);
    const [sharx, setSharx] = useState('');
    const [manzil, setManzil] = useState('');
    const [ism, setIsm] = useState('');
    const [familiya, setFamiliya] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const formData = {
            image: image ? URL.createObjectURL(image) : null, // Convert image to URL if it's not null
            sharx,
            manzil,
            ism,
            familiya,
        };

        // POST request to the server
        try {
            const response = await fetch('http://localhost:5000/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Set header to indicate JSON format
                },
                body: JSON.stringify(formData), // Convert formData to JSON
            });

            if (response.ok) {
                // Successfully posted data
                const data = await response.json();
                console.log('Success:', data);
                navigate('/post');
            } else {
                // Error handling
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    return (<div className="div">
        
        <div className='container'>
            <h1 className='div_complaiint'>Shikoyatlar qilish</h1>
            <div className='input_div'>
                <div className="mb-1">
                    Image <span className="font-css top">*</span>
                    <div className="">
                        <input 
                            type="file" 
                            id="file-input"
                            className='inpt' 
                            name="image" 
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>
                </div>
                <input 
                    type="text" 
                    placeholder='Sharx...'
                    className='inpt_0' 
                    value={sharx} 
                    onChange={(e) => setSharx(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder='Manzil...' 
                    value={manzil} 
                    className='inpt_1'
                    onChange={(e) => setManzil(e.target.value)} 
                />
                <div className='shaxs_input'>
                    <input 
                        type="text" 
                        placeholder='Ismingiz...' 
                        value={ism} 
                        className='inpt_2'
                        onChange={(e) => setIsm(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        placeholder='Familiyangiz...' 
                        value={familiya} 
                        className='inpt_3'
                        onChange={(e) => setFamiliya(e.target.value)} 
                    />
                    <button 
                        className='tastiqlash_button' 
                        onClick={handleSubmit}
                    >
                        tastiqlash
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Body;
