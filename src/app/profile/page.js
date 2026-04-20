'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Profile({ params }) {

  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/influencers/${params.id}`)
      .then(res => setData(res.data));
  }, [params.id]);

  if (!data) return <p className="loading">Loading...</p>;

  return (
    <div className="profile-container">

      <div className="profile-card">

        <img src={data.imageUrl} className="profile-img" />

        <h2>{data.name}</h2>
        <p className="category">{data.category}</p>
        <p className="bio">{data.bio}</p>

        <div className="metrics">
          <div>
            <h3>👥 {data.followers}</h3>
            <span>Followers</span>
          </div>

          <div>
            <h3>🔥 {data.engagement}%</h3>
            <span>Engagement</span>
          </div>
        </div>

        <div className="socials">
          <a href={data.instagram}>Instagram</a>
          <a href={data.youtube}>YouTube</a>
          <a href={data.twitter}>Twitter</a>
        </div>

        <button className="hire-btn">Hire / Contact</button>

      </div>
    </div>
  );

}
