import React from 'react';
import { useQuery } from "@tanstack/react-query";
import MediaCard from './MediaCard';
const Media = () => {
  
  const { data: media = []} = useQuery({
    queryKey: ["media"],
    queryFn: async () => {
      const res = await fetch(`https://friendvillage-server.vercel.app/media`);
      const data = await res.json();
      return data;
    },
  });


  return (
    <section>
      <div>
        {media.map((post) => (
          <MediaCard key={post._id} post={post}></MediaCard>
        ))}
      </div>
    </section>
  );
};

export default Media;