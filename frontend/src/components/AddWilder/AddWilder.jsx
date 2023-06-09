import axios from "axios";

import styles from './AddWilder.module.css'

import { useState } from "react";

const AddWilder = () => {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");

    return (
        <form className={styles.addWilderForm} onSubmit={(e) => {
            e.preventDefault();
            axios.post("http://localhost:5000/api/wilder", {
                name:name,
                city:city
            })
        }}>
            <label>Name:</label>
            <input
                className={styles.input} 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label>City:</label>
            <input
                className={styles.input}  
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <br />
            <button>Add Wilder</button>
        </form>
    )
};

export default AddWilder;