import styles from './OurServices.module.css';

const services = [
  { title: "Website Infrastructure", img: "https://www.indusnet.co.in/lp/emerge/assets/lib/images/services/img-website-design.jpg" },
  { title: "Application & Software Development", img: "https://www.indusnet.co.in/lp/emerge/assets/lib/images/services/img-web-mobile-app-dev.jpg" },
  { title: "Ecommerce Marketing", img: "https://www.indusnet.co.in/lp/emerge/assets/lib/images/services/img-ecommerce-development.jpg" },
  { title: "PR Marketing", img: "https://www.indusnet.co.in/lp/emerge/assets/lib/images/services/img-digital-marketing.jpg" },
];

const OurServices = () => {
  return (
    <section className={styles.container}>
      <p className={styles.heading}>Our Services</p>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={service.img} alt={service.title} className={styles.image} />
              <p className={styles.text}>{service.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
