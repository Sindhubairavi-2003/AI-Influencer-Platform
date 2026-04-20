'use client';

import axios from 'axios';
import { useState } from 'react';

export default function Login() {

  const [user, setUser] = useState({});

  const login = async () => {
    const res = await axios.post(
      "http://localhost:8080/api/auth/login", user
    );

    if (res.data) alert("Login success");
  };

  return (
    <div className="login-bg">
      <div className="login-box">

        <h2>Login</h2>

        <input
          placeholder="Username"
          onChange={e => setUser({ ...user, username: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={e => setUser({ ...user, password: e.target.value })}
        />

        <button onClick={login}>Login</button>

      </div>
    </div>
  );
}
