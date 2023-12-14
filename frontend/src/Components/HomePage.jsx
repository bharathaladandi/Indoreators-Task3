import React, { useState } from 'react';

export const HomePage = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [data, setData] = useState(null);

    const handlePostData = async () => {
        try {
            const response = await fetch('https://chimpu.xyz/api/post.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phoneNumber: phoneNumber }),
            });

            const headers = response.headers;
            const dataReceive = headers.get('Authorization');

            setData(dataReceive);
        } catch (error) {
            console.error('Error while posting data:', error);
        }
    };

    return (
        <div style={{ backgroundColor: 'teal', height: '100vh', textAlign: 'center' }}>
            <div style={{ paddingTop: '10%' }}>
                <label style={{ color: 'white', fontSize: '30px' }}>
                    Phone Number:
                    <input style={{ height: '30px', width: '40%', margin: '10px' }}
                        type="number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </label>
                <button style={{
                    height: '40px', width: '130px',
                    borderRadius: '5px', cursor: 'pointer',
                     backgroundColor: '#feb2b2'
                }} onClick={handlePostData}>Post Data</button>

                {data && (
                    <div>
                        <h2>Phone Numbers:</h2>
                        <p>{data}</p>
                    </div>
                )}
            </div>
        </div>
    );
};


