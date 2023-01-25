import styles from "../styles/CurrentForecast.module.css";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const SearchedLocation = ({ searchedLocation, searchedLocationForecast }) => {
  if (searchedLocationForecast && searchedLocationForecast.length > 0) {
    const imageUrl = `/${searchedLocationForecast[0].WeatherIcon}-s.png`;

    return (
      <main className={styles.mainContainer}>
        <div className={styles.reportContainer}>
          <div className={styles.weatherReportContainer}>
            <p className={styles.statusText}>Nuvarande väder</p>
            <h1 className={styles.location}>
              {searchedLocation.LocalizedName},{" "}
              {searchedLocation.Country.LocalizedName}
            </h1>
            <div className={styles.imageFrame}>
              <Image src={imageUrl} alt="Weather Icon" width="75" height="45" />
              <p className={styles.weatherText}>
                {searchedLocationForecast[0].WeatherText}
              </p>
            </div>

            <h2 className={styles.temperatureText}>
              {searchedLocationForecast[0].Temperature.Metric.Value} &#xb0;
              {searchedLocationForecast[0].Temperature.Metric.Unit}
            </h2>

            <p>
              Känns som{" "}
              {searchedLocationForecast[0].RealFeelTemperature.Metric.Value}
            </p>
          </div>

          <div className={styles.additionalDataReportContainer}>
            <div className={styles.left}>
              <p>
                <span className={styles.makeBold}>Fuktighet:</span>{" "}
                {searchedLocationForecast[0].RelativeHumidity} %
              </p>
              <p>
                <span className={styles.makeBold}>Vindbyar:</span>{" "}
                {searchedLocationForecast[0].Wind.Speed.Metric.Value}{" "}
                {searchedLocationForecast[0].Wind.Speed.Metric.Unit}
              </p>
            </div>
            <div className={styles.right}>
              <p>
                <span className={styles.makeBold}>Molntäcke:</span>{" "}
                {searchedLocationForecast[0].CloudCover} %
              </p>
              <p>
                <span className={styles.makeBold}>Sikt:</span>{" "}
                {searchedLocationForecast[0].Visibility.Metric.Value}{" "}
                {searchedLocationForecast[0].Visibility.Metric.Unit}
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }
};
export default SearchedLocation;
