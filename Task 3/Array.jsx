import React, { useState } from 'react'

export default function Array() {
    const [profiles, setProfiles] = useState([
        {
            name: "Bhavesh",
            age: 20,
            contact: 8547465987,
            email: "Bhave223@gmail.com"
        }
    ]);

    return (
        <div>
            {
                profiles.map((profile, i) => (
                    <div key={i}>
                        <h1>Name : {profile.name}</h1>
                        <h1>Age : {profile.age}</h1>
                        <h1>Contact : {profile.contact}</h1>
                        <h1>Email : {profile.email}</h1>
                    </div>
                ))
            }

        </div>
    )
}
