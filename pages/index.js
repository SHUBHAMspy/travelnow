import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/atoms/footer';
import Hero from '../components/atoms/hero';
import NearbySection from '../components/atoms/nearbyCard';
import Section from '../components/atoms/section';
import Header from '../components/organism/header';
import { wrapper } from '../state/store';


export default function Home({exploreNearby,liveAnywhere}) {
  const metaData = {
    title: 'TravelNow: Room & Hotel Rentals, Cozy Spaces, Unique Homes & Experiences',
    description:
      'A room booking experience platform - Find vacation rentals, unique homes and experiences around the world.',
  };
  return (
    <div className="">
      <Head>
        <title>{metaData.title}</title>
        <meta name='description' content= {metaData.description}/>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        exploreNearby={exploreNearby}

      />
      <main>
        <Hero/>

        <Section
          title={"Explore Nearby"}
          className="grid grid-cols-2 gap-x-1 gap-y-2 lg:gap-x-4  sm:grid-cols-3 lg:grid-cols-4"
        >
          {exploreNearby.map((data,index) => (
            <NearbySection key={index} data={data}/>
          ))}

        </Section>

        <Section
          title="Live Anywhere"
          className="grid grid-cols-2 lg:gap-x-4 gap-x-1 gap-y-2 lg:grid-cols-4"
        >
          {liveAnywhere.map((data,index) => (
            <Link key={index} href="#">
              <a>
                <div className="p-2 lg:p-3 gap-y-4 duration-300 hover:shadow-xl transform transition ease-out rounded-xl">
                  <div className="relative w-full h-40 mb-2 md:h-60 lg:h-72">
                    <Image
                      src={data.img}
                      alt={data.title}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={data.img}
                      className="   rounded-xl"
                    />

                  </div>
                  <div>
                    <h3 className="font-medium leading-5 text-gray-500 text-md md:text-xl">
                      {data.title}
                    </h3>
                  </div>
                </div>
              </a>

            </Link>

          ))}

        </Section>

      </main>
      
      <Footer/>
      
      
    </div>
  )
}

export const getStaticProps = wrapper.getStaticProps(() => async() => {
  const exploreNearbyResponse = await axios.get("https://jsonkeeper.com/b/UHQ7");
  const exploreNearby = exploreNearbyResponse.data ;

  const liveAnywhereResponse = await axios.get('https://jsonkeeper.com/b/VHHT');
  const liveAnywhere = await liveAnywhereResponse.data;

  return {
    props:{
      exploreNearby,
      liveAnywhere
    }
  };
}
)