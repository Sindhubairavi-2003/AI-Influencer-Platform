'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Profile({ params }) {

  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/influencers/${params.id}`)
      .then(res => setData(res.data));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="profile">

      <img src={data.imageUrl} className="profile-img" />
      <h2>{data.name}</h2>
      <p>{data.bio}</p>

      <p>👥 {data.followers}</p>
      <p>🔥 {data.engagement}%</p>

      <button className="hire-btn">Hire</button>

    </div>
  );
}