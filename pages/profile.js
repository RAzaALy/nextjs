import styles from '../styles/Profile.module.css';
import Footer from '../components/layout/Footer';
import Head from 'next/head';

const profile = () => {
  return (
    <>
    <Head>
      <title>Profile Page</title>
      <meta name="description" content="profile page" />
    </Head>
    <div className={styles.container}>
    <div>

      <h1>Profile page</h1>
      <button className="btn btn-danger">Button</button>
    </div>
    </div>
    </>
  );
};

export default profile;
profile.getLayout = function PageLayout(page){
  return (
    <>
    {page}
    <Footer />
    </>
  )
}