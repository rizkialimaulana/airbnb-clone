import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Card from '../components/Card';
import SearchCard from '../components/SearchCard';

export default function search({searchResult, cityGroup}: any) {
  const router = useRouter()
  const { destination_id, checkin_date, checkout_date, adults_number} =  router.query; 
  return (
    <div className="h-full">
      <Head>
        <title>Search result for "{destination_id}"</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header 
        destination={destination_id}
        range={`${checkin_date} to ${checkout_date}`}
        guest={adults_number}
      />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <span className="text-xs">{searchResult.searchResults.totalCount} places for {checkin_date} until {checkout_date}</span>
          <h1 className="text-lg font-bold">Explore {destination_id}</h1>
          <div className="flex flex-col space-y-5 md:space-y-0 md:grid md:grid-cols-4">
            {cityGroup.suggestions.map((item: any) => (
              <SearchCard
                key={item.geoId}
                entities={item.entities}
              />
            ))}
          </div>
        </section>
      </main>
      <footer className='sticky bottom-0'>
        <Footer />
      </footer>
    </div>
  );
}

export async function getServerSideProps() {
  // const router = useRouter();
  // const { destination_id, checkin_date, checkout_date, adults_number } =
  //   router.query;
   const options = {
     method: "GET",
     headers: {
       "X-RapidAPI-Key": "f528326de0msh904c15b86767962p156662jsnccf1023e905f",
       "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
     },
   };
   const searchResult = await fetch(
     "https://hotels-com-provider.p.rapidapi.com/v1/hotels/search?checkin_date=2022-10-26&checkout_date=2022-11-1&sort_order=STAR_RATING_HIGHEST_FIRST&destination_id=666143&adults_number=1&locale=in_ID&currency=IDR&guest_rating_min=4",
     options
   ).then((res) => res.json());

   const cityGroup = await fetch(
     `https://hotels-com-provider.p.rapidapi.com/v1/destinations/search?query=Bandung&currency=IDR&locale=in_ID`,
     options
   ).then((res) => res.json());
   return {
     props: {
       searchResult,
       cityGroup
     },
   };
} 