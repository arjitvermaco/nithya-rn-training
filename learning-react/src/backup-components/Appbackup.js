import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';
import styles from './bigblue.module.css'

export default function App() {
  let companyName = "ABC Technologies";
  let companyCeo = "Mr John Doe";

  let aboutCompany = {
    foundedIn: "1990",
    products: "Cloud Services",
    teamSize: 500,
  };

  let offices = ["New Delhi","Chennai","Bangalore","Noida"]

  let paraStyles = {
    color:'white',
    padding:'30px',
    backgroundColor:'DodgerBlue'
  }
  return (
    <>
      <Header></Header>
      <h1 style={{color:'red',backgroundColor:'black', display:'inline-block'}}>Welcome to the official website of {companyName}</h1>
      <p style={paraStyles}>Our current CEO is : {companyCeo}</p>

      <p className={styles.bigblue}>
        Our company was founded in : {aboutCompany.foundedIn} and we have a team
        of {aboutCompany.teamSize}
        {2+2}
      </p>

      <Footer />
    </>
  );
}

// export default App
