import React from 'react';
import ProfileModal from '../About/ProfileModal'
import { FaEdit } from "react-icons/fa";

const Card = ({ data }) => {
  const { name, email, university, address } = data;
  return (
    <div>
      <div className="p-6  w-3/4 m-auto dark:bg-neutral dark:text-gray-100">
        <h2 className="float-left">My Profile</h2>
        <label htmlFor="my-modal-3" className="btn float-right">
          <FaEdit />
        </label>

        <br></br>
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
          <img
            src="https://source.unsplash.com/75x75/?portrait"
            alt=""
            className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
          />
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold text-center md:text-left">
              {name}
            </h4>
            <h4 className="text-lg font-semibold text-center md:text-left">
              {email}
            </h4>
            <h4 className="text-lg font-semibold text-center md:text-left">
              {university}
            </h4>
            <h4 className="text-lg font-semibold text-center md:text-left">
              {address}
            </h4>
          </div>
        </div>
      </div>
      <ProfileModal data={data}></ProfileModal>
    </div>
  );
};

export default Card;