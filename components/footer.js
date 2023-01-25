import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <p>Copyright &#169; Rasmus Eldblad</p>
      </footer>
    </div>
  );
};

export default Footer;
