import React, { useState } from 'react';
import ProfileModal from '../About/ProfileModal';

import { useQuery } from "@tanstack/react-query";
import { useEffect } from 'react';
import Card from './Card';



const About = () => {
 
  
  const { data: profile = [] } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/profile`);
      const data = await res.json();
      return data;
    },
  });




  return (
    <section>
      <div>
        {profile.map((data) => (
          <Card key={data._id} data={data}></Card>
        ))}
      </div>
    </section>
  );
};

export default About;