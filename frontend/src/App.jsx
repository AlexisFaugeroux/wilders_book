import styles from './App.module.css';
import axios from "axios";

import { useState, useEffect } from 'react';

import Wilder from './components/Wilder/Wilder';
import Header from './components/Header/Header';
import AddWilder from './components/AddWilder/AddWilder';

function App() {
  const [wilders, setWilders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const wilders = await axios.get("http://localhost:5000/api/wilder");
      setWilders(wilders.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <main className={styles.container}>
        <h2>Wilders</h2>
        <section className={styles["card-row"]}>
          {wilders.map((wilder) => {
            return <Wilder
              key={wilder.id + Date.now()}
              id={wilder.id}
              name={wilder.name}
              city={wilder.city}
              skills={wilder.skills}
              />
          })}
        </section>
      </main>
      <AddWilder />
      <footer>
        <div className={styles.container}>
          <p>&copy; 2022: Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
