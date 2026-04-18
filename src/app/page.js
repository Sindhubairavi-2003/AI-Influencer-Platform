'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const API = "http://localhost:8080/api/influencers";

export default function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(API).then(res => setData(res.data));
  }, []);

  return (
    <div className="grid">

      {data.map(i => (
        <Link href={`/profile/${i.id}`} key={i.id} className="card">

          <img src={i.imageUrl} />
          <h3>{i.name}</h3>
          <p>{i.category}</p>
          <p>👥 {i.followers}</p>

        </Link>
      ))}

    </div>
  );
}