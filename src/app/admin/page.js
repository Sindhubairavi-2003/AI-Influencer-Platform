
'use client';

import { useState } from 'react';
import axios from 'axios';

export default function Admin() {

  const [data, setData] = useState({});

  const add = async () => {
    await axios.post("http://localhost:8080/api/influencers", data);
    alert("Influencer Added!");
  };

  return (
    <div className="admin-container">

      <div className="admin-box">

        <h2>Admin Panel</h2>

        <input placeholder="Name"
          onChange={e => setData({ ...data, name: e.target.value })} />

        <input placeholder="Category"
          onChange={e => setData({ ...data, category: e.target.value })} />

        <input placeholder="Followers"
          onChange={e => setData({ ...data, followers: e.target.value })} />

        <input placeholder="Engagement"
          onChange={e => setData({ ...data, engagement: e.target.value })} />

        <input placeholder="Image URL"
          onChange={e => setData({ ...data, imageUrl: e.target.value })} />

        <textarea placeholder="Bio"
          onChange={e => setData({ ...data, bio: e.target.value })} />

        <button onClick={add}>Add Influencer</button>

      </div>

    </div>
  );
}
