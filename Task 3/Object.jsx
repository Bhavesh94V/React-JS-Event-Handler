import React, { useState } from 'react'

export default function Object() {
    const [profile, setprofile] = useState({
        Student1: {
            name: "Bhavesh",
            age: 20,
            contact: 8547465987,
            email: "Bhave223@gmail.com"
        },

        Student2: {
            name: "Harsh",
            age: 19,
            contact: 8564752838,
            email: "Har123@gmail.com"
        }
    })

    return (
        <div>
            <h1>Name : {profile.Student1.name}</h1>
            <h1>Age : {profile.Student1.age}</h1>
            <h1>Contact : {profile.Student1.contact}</h1>
            <h1>Email : {profile.Student1.email}</h1>
        </div>
    )
}
