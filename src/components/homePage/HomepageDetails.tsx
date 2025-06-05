import styles from "./homepageDetails.module.css";

const HomepageDetails = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Vestvik Consulting</h1>
            <p>
                Vestvik Consulting hjelper din bedrift med kurs og kompetanse.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                porro aspernatur temporibus officia dolorem iste dolorum eaque
                corporis nulla cum, animi nobis vel blanditiis doloribus
                molestias magnam doloremque eos. Cumque!
            </p>
        </div>
    );
};

export default HomepageDetails;
