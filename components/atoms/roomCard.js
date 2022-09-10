import Image from 'next/image';
import React from 'react';

const RoomCard = ({room}) => {
  return (
    <div className="grid sm:grid-cols-[300px,1fr] py-5 border-gray-200 cursor-pointer sm:border-t grid-cols-1 gap-x-4 md:max-w-xs rounded-md overflow-hidden shadow-lg">
      <div className="relative w-full mb-2 md:mb-0 sm:h-44 ">
        <Image 
          src={room.images[0].url}
          alt={room.name}
          layout='fill'
          objectFit="cover"
          placeholder="blur"
          blurDataURL={room.images[0].url}
          quality={40}
          className="w-full absolute transition duration-300 ease-in-out scale-105 "
        />
      </div>
      <div className="flex flex-col px-1 sm:px-0 md:py-4 md:px-4 lg:py-4 lg:px-4 bg-white">

      </div>

    </div>
  );
};

export default RoomCard;
