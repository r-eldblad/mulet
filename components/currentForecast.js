import styles from "../styles/CurrentForecast.module.css";
import Image from "next/image";
import Footer from "./footer";

const CurrentForecast = ({ currentForecast, currentLocation }) => {
  if (currentForecast && currentForecast.length > 0) {
    const imageUrl = `/${currentForecast[0].WeatherIcon}-s.png`;
    console.log(imageUrl);

    return (
      <main className={styles.mainContainer}>
        <div className={styles.reportContainer}>
          <div className={styles.weatherReportContainer}>
            <p className={styles.statusText}>Nuvarande väder</p>
            <h1 className={styles.location}>
              {currentLocation.LocalizedName},{" "}
              {currentLocation.Country.LocalizedName}
            </h1>

            <div className={styles.imageFrame}>
              <Image src={imageUrl} alt="Weather Icon" width="75" height="45" />
              <p className={styles.weatherText}>
                {currentForecast[0].WeatherText}
              </p>
            </div>

            <h2 className={styles.temperatureText}>
              {currentForecast[0].Temperature.Metric.Value} &#xb0;
              {currentForecast[0].Temperature.Metric.Unit}
            </h2>

            <p>
              Känns som {currentForecast[0].RealFeelTemperature.Metric.Value}
            </p>
          </div>

          <div className={styles.additionalDataReportContainer}>
            <div className={styles.left}>
              <p>
                <span className={styles.makeBold}>Fuktighet:</span>{" "}
                {currentForecast[0].RelativeHumidity} %
              </p>
              <p>
                <span className={styles.makeBold}>Vindbyar:</span>{" "}
                {currentForecast[0].Wind.Speed.Metric.Value}{" "}
                {currentForecast[0].Wind.Speed.Metric.Unit}
              </p>
            </div>
            <div className={styles.right}>
              <p>
                <span className={styles.makeBold}>Molntäcke:</span>{" "}
                {currentForecast[0].CloudCover} %
              </p>
              <p>
                <span className={styles.makeBold}>Sikt:</span>{" "}
                {currentForecast[0].Visibility.Metric.Value}{" "}
                {currentForecast[0].Visibility.Metric.Unit}
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }
  return <div></div>;
};

export default CurrentForecast;
