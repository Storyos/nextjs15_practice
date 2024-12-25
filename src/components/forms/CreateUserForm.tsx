'use client';

import { useState } from "react";

export default function CreateUserForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const response = await fetch('/api/user',{
            method: 'POST',
            body: JSON.stringify({name, email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok){
            setMessage("유저 생성 성공");
        } else{
            setMessage("유저 생성 실패");
        }

    }
    return (
        <div >
        <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit}>
            <input type="text"
            placeholder="Name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            required />
            <input type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            required />
            <input type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            required />
            <button type="submit">Create User</button>
        </form>
        {message && <p>{message}</p>}
        </div>
    );
}