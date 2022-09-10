import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/atoms/footer';
import RoomCard from '../components/atoms/roomCard';
import Header from '../components/organism/header';
import { getRooms } from '../state/actions/roomActions';
import { wrapper } from '../state/store';
import { formatGuests } from '../utils/guestUtils';

const Search = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const query = router.query;
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [guests, setGuests] = useState();

  const [isFullMap, setIsFullMap] = useState(false);
  console.log(query);

  
  useEffect(() => {
    if(query.location) setLocation(query.location.toString());
    if(query.category) setCategory(query.category.toString());
    if(query.guests) setGuests(JSON.parse(query.guests.toString()));
    
  },[query]);
  
  const getGuests = (guests) => {
    const totalGuests = formatGuests(guests,{noInfants:true});
    if(totalGuests) return `• ${totalGuests}`;
  }
  
  const {rooms,roomsCount,filteredRoomsCount,resPerPage} = useSelector(state => state.allRooms);
  console.log(rooms);
  let count;

  const metaData = {
    title: 'TravelNow: Room & Hotel Rentals, Cozy Spaces, Unique Homes & Experiences',
    description:
      'A room booking experience platform - Find vacation rentals, unique homes and experiences around the world.',
  };

  return (
    <div>
      <Head>
        <title>{metaData.title}</title>
        <meta name='description' content= {metaData.description}/>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header searchPage query={query}/>
      <main 
        className={`${
          !isFullMap && 'lg:grid-cols-[700px,1fr] xl:grid-cols-[840px,1fr]'
        } flex-grow grid grid-cols-1 mt-[86px] duration-500`}
      >
        <div className={`${isFullMap && 'hidden'} px-4 py-8 duration-500 lg:py-12 lg:px-7 gap-10 md:grid-cols-2 lg:grid-cols-2`}
        
        >
          <span>
            {location ? count = filteredRoomsCount : count = roomsCount }
            <h3> {count} </h3>
            {category}{' '}
            {guests && getGuests(guests)}
          </span>

          <h1 className="mb-2 text-2xl font-semibold md:text-3xl lg:text-4xl lg:mb-7">
            Stays in {location}
          </h1>
          <div className="mb-4 space-x-1 space-y-2 text-gray-400 md:space-x-2 lg:mb-8">
            <button className="px-2 py-1 text-xs duration-300 border border-gray-300 border-opacity-50 rounded-full cursor-pointer md:px-4 md:py-2 lg:text-sm active:scale-90 hover:border-gray-500">
              Cancellation flexibility
            </button>
            <button className="px-2 py-1 text-xs duration-300 border border-gray-300 border-opacity-50 rounded-full cursor-pointer md:px-4 md:py-2 lg:text-sm active:scale-90 hover:border-gray-500">
              Type of place
            </button>
            <button className="px-2 py-1 text-xs duration-300 border border-gray-300 border-opacity-50 rounded-full cursor-pointer md:px-4 md:py-2 lg:text-sm active:scale-90 hover:border-gray-500">
              Price
            </button>
            <button className="px-2 py-1 text-xs duration-300 border border-gray-300 border-opacity-50 rounded-full cursor-pointer md:px-4 md:py-2 lg:text-sm active:scale-90 hover:border-gray-500">
              Instant Book
            </button>
            <button className="px-2 py-1 text-xs duration-300 border border-gray-300 border-opacity-50 rounded-full cursor-pointer md:px-4 md:py-2 lg:text-sm active:scale-90 hover:border-gray-500">
              More filters
            </button>
          </div>

          <p className="mb-4 text-sm text-gray-400">
            Review COVID-19 travel restrictions before you book.{' '}
            <Link href="/">
              <a className="underline">Learn more</a>
            </Link>
          </p>

          <section>
            {rooms && rooms.length === 0 ?
              <div> <b>No Rooms</b> </div>
              :
              rooms && rooms.map((room) => (
                <RoomCard key={room._id} room={room}/>
              ))
            }
          </section>

        </div>
          
      </main>
      <Footer/>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps( (store) => async({req,query}) => {
  await store.dispatch(getRooms(req,query.location,query.category,query.guests));
})



export default Search
