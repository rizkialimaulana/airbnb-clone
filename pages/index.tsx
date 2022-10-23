import Head from 'next/head'
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header'

export default function Home ({exploreData}: any) {
  return (
    <div className="h-full">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-center font-bold text-xl pb-6">
            {" "}
            Explore Bandung{" "}
          </h2>
          <div className="flex flex-col space-y-5 md:space-y-0 md:grid md:grid-cols-4">
            {exploreData.searchResults.results.map((item: any) => (
              <Card
                key={item.id}
                name={item.name}
                address={item.address.streetAddress}
                image={item.optimizedThumbUrls.srpDesktop}
                landmarks={item.landmarks}
                rating={item.guestReviews.unformattedRating}
                price={item.ratePlan.price.current}
              />
            ))}
          </div>
        </section>

        <section>
          <h2></h2>
        </section>
      </main>
      <footer className='sticky bottom-0'>
        <Footer />
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f528326de0msh904c15b86767962p156662jsnccf1023e905f",
      "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
    },
  };
  const exploreData = await fetch(
    "https://hotels-com-provider.p.rapidapi.com/v1/hotels/search?checkin_date=2022-10-26&checkout_date=2022-11-1&sort_order=STAR_RATING_HIGHEST_FIRST&destination_id=666143&adults_number=1&locale=in_ID&currency=IDR&guest_rating_min=4",
    options
  ).then((res) => res.json());
  
  return {
    props: {
      exploreData
    }
  }
}
