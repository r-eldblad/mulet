import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Mulet.se</h1>
      <input
        id="searchLocation"
        className={styles.searchLocationBar}
        type="search"
        placeholder="Sök plats"
      />
    </header>
  );
};

export default Header;
