import React from 'react';
import  { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../../Context/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';



const MediaPost = () => {



const [imgUrl, setImageUrl] = useState('');
 const { user } = useContext(AuthContext);
 const { register, handleSubmit } = useForm();
 const [data, setData] = useState("");

 const location = useLocation();
 const navigate = useNavigate();
 const from = location.state?.from?.pathname || "/";



  const handlePost = (data) => {

      let today = new Date();

      // get the date and time
      let now = today.toLocaleString();
      const content = data.content;
    
     const imageHostKey = `634c2deda08c4156e1c5b749ed046470`;
     console.log("ot", imageHostKey);
 const image = data.image[0]
   const formData = new FormData();
formData.append('image', image)
   const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
   fetch(url,{
     method: 'POST',
     body: formData 
   })
     .then(res => res.json())
     .then(imgData => {
console.log(imgData.data.url)
if(imgData.success){

  const mediaPost = {
     content,
     post_date: now,
    image:imgData.data.url
  };
   fetch("https://friendvillage-server.vercel.app/addmediapost", {
     method: "POST",
     headers: {
       "content-type": "application/json",
     },
     body: JSON.stringify(mediaPost),
   })
     .then((res) => res.json())
     .then((data) => {
       console.log(data);
       toast("Product Successfully Added");

       navigate(from, { replace: true });
     });

}
     })
   
 
 };
 


  return (
    <section>
      <div className="w-3/4 p-5 rounded shadow-md dark:bg-neutral  m-auto">
        <form action="" onSubmit={handleSubmit(handlePost)}>
          <textarea
            {...register("content", { required: true })}
            className="textarea textarea-primary w-1/2 mb-3"
            placeholder="Whats On Your Mind?"
          ></textarea>
          <br></br>

          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input file-input-bordered file-input-primary w-1/2 mb-3 "
          />
          <br></br>
          <input className="btn btn-primary w-1/2 mb-3" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default MediaPost;