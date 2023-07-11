import React from 'react'
import axios from "axios";
import { useState } from 'react';
import { useRouter } from "next/router";
import styles from "../styles/addStudent.module.css";


function AddStudent() {
 
        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
      
        const handleSubmit = async (event) => {
          event.preventDefault();
      
          try {
            const response = await axios.post('https://dummyjson.com/users/add', {
              firstName,
              lastName
            });
      
            console.log(response.data);
            alert("Öğrenci başarıyla eklendi.");
            setFirstName("");
            setLastName("");
          } catch (error) {
            console.error(error);
            alert("Bir hata oluştu.");
          }
        };
      
        const router = useRouter();
        const backStudentClick = (event) => {
            event.preventDefault();
            router.push("/Students"); 
          };

  return (
    <div className={styles.formContainer} >
    <h1>Add New Student</h1>
    <form onSubmit={handleSubmit}>
      <div className={styles.formField} >
        <label>First Name</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
      </div>
      <div className={styles.formField} >
        <label>Last Name</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
      </div>
      <button className={styles.button} type="submit">Add</button>
      <button onClick={backStudentClick} className={styles.button1} type="submit">Back</button>
    </form>
  </div>
  )
}

export default AddStudent