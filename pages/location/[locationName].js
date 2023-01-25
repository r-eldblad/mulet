import Header from "../../components/header";

import { useRouter } from "next/router";
import { useCallback } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchedLocation from "@/components/searchedLocation";

const Location = () => {
  const router = useRouter();
  const locationName = router.query.locationName;

  const [searchedLocation, setSearchedLocation] = useState([]);
  const [searchedLocationForecast, setSearchedLocationForecast] = useState();

  const fetchWeatherData = useCallback((locationName) => {
    axios
      .get(
        `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.NEXT_PUBLIC_ACCU_WEATHER_API_KEY}&q=${locationName}&language=sv&details=true`
      )
      .then((res) => {
        setSearchedLocation(
          res.data.find(
            (location) => location.Country.LocalizedName === "Sverige"
          )
        );

        const temporaryLocation = res.data.find(
          (location) => location.Country.LocalizedName === "Sverige"
        );

        if (temporaryLocation) {
          axios
            .get(
              `https://dataservice.accuweather.com/currentconditions/v1/${temporaryLocation.Key}?apikey=${process.env.NEXT_PUBLIC_ACCU_WEATHER_API_KEY}&language=sv&details=true`
            )
            .then((res) => {
              setSearchedLocationForecast(res.data);
            });
        }
      });
  }, []);

  useEffect(() => {
    fetchWeatherData(locationName);
  }, [locationName]);

  return (
    <>
      <Header />
      <SearchedLocation
        searchedLocation={searchedLocation}
        searchedLocationForecast={searchedLocationForecast}
      />
    </>
  );
};

export default Location;

/*

Skapa en dynamisk route.
Extrahera parametern, som kommer användas som en sökterm i queryn som skickas till API:et







*/
