import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container__text}>
        <p>@2022 Berlin - Germany</p>
        <p>Developed by Saron Brandao Web Dev</p>
      </div>
      <div className={styles.container__logos}>
        <a href="https://www.linkedin.com/in/saronbrandao/" target="blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
