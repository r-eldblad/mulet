import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import CurrentForecast from "../components/currentForecast";

import axios from "axios";
import useSWR from "swr";

export default function Home() {
  const [currentForecast, setCurrentForecast] = useState({});
  const [currentLocation, setCurrentLocation] = useState({});

  // Get current location and weather forecast using AccuWeather API and navigator.geolocation
  useEffect(() => {
    if (typeof navigator !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);

        axios
          .get(
            `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${process.env.NEXT_PUBLIC_ACCU_WEATHER_API_KEY}&q=${position.coords.latitude},${position.coords.longitude}&language=sv&details=true`
          )
          .then((res) => {
            setCurrentLocation(res.data);
            axios
              .get(
                `http://dataservice.accuweather.com/currentconditions/v1/${res.data.Key}?apikey=${process.env.NEXT_PUBLIC_ACCU_WEATHER_API_KEY}&language=sv&details=true`
              )
              .then((res) => {
                setCurrentForecast(res.data);
              });
          });
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Mulet.se</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <CurrentForecast
        currentForecast={currentForecast}
        currentLocation={currentLocation}
      />
      <Footer />
    </>
  );
}
