import { useRouter } from "next/router";
import styles from "../styles/students.module.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Students() {
  const router = useRouter();

  const homeClick3 = (event) => {
    event.preventDefault();
    router.push("/Dashboard"); 
  };

  const addStudentClick = (event) => {
    event.preventDefault();
    router.push("/AddStudent"); 
  };

  const logOutClick = (event) => {
    event.preventDefault();
    router.push("/Login"); 
  };

  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://dummyjson.com/users");
      setStudents(response.data.users);
      //  console.log(response.data.users)
    };
    fetchData();
  }, []);

  ///Search Kısmı
  const [searchText, setSearchText] = useState("");
  const handleSearch = async () => {
    const response = await axios.get(
      `https://dummyjson.com/users/search?q=${searchText}`
    );
    setStudents(response.data.users);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  ///Delete Kısmı
  const handleDelete = (studentId) => {
    const updatedStudents = students.filter(
      (student) => student.id !== studentId
    );
    setStudents(updatedStudents);
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardManageCourses}>
        <h5 className={styles.dashboardManage}>
          <Image src="/imagesJohn/Line.png" alt="Line" width={4} height={12} />
          MANAGE COURSES
        </h5>
        <div className={styles.dashboardProfile}>
          <Image src="/imagesJohn/profile.png" alt="Profile" width={128} height={196} />
        </div>

        <div className={styles.dashboardButton}>
          <button onClick={homeClick3} className={styles.dashboardButton1}>
            <Image
              src="/imagesJohn/Home.png"
              alt="Home"
              width={19}
              height={17}
            />
            Home
          </button>
          <button className={styles.dashboardButton2}>
            <Image
              src="/imagesJohn/Course.png"
              alt="Course"
              width={12}
              height={15}
            />
            Course
          </button>
          <button className={styles.dashboardButton3}>
            <Image
              src="/imagesJohn/Students.png"
              alt="Students"
              width={20}
              height={16}
            />
            Studens
          </button>
          <button className={styles.dashboardButton4}>
            <Image
              src="/imagesJohn/Payment.png"
              alt="Payment"
              width={15}
              height={15}
            />
            Payment
          </button>
          <button className={styles.dashboardButton5}>
            <Image
              src="/imagesJohn/Report.png"
              alt="Report"
              width={13}
              height={17}
            />
            Report
          </button>
          <button className={styles.dashboardButton6}>
            <Image
              src="/imagesJohn/Settings.png"
              alt="Settings"
              width={15}
              height={15}
            />
            Settings
          </button>
          <button onClick={logOutClick} className={styles.dashboardButton7}>
            Logout
            <Image
              src="/imagesJohn/Logout.png"
              alt="Logout"
              width={17}
              height={13}
            />
          </button>
        </div>
      </div>

      <div className={styles.dashboardHeader}>
        <div className={styles.dashboardHeader1}>
          <Image
            src="/imagesBox/toggleBar.png"
            alt="toggleBar"
            width={18}
            height={18}
          />
        </div>
        <div className={styles.dashboardHeader2}>
          <Image
            src="/imagesBox/warning.png"
            alt="warning"
            width={17}
            height={20}
          />
        </div>
      </div>

      <div>
        <div>
          <div className={styles.studentsList1}>
            <h2>Students List</h2>

            <input
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              onKeyPress={handleKeyPress}
            ></input>
            <button onClick={addStudentClick} className={styles.studentsAdd}>ADD NEW STUDENT</button>
          </div>

          <div className={styles.studentsList}>
            <ul>
              <li>Name</li>
              <li>Email</li>
              <li>Phone</li>
              <li>WebSite</li>
              <li>Company Name</li>
            </ul>
          </div>
          {students.map((student) => (
            <div className={styles.students1} key={student.id}>
              <img
                className={styles.students2}
                src={student.image}
                alt={student.firstName}
                width={65}
                height={55}
              />
              <p className={styles.students3}>{student.firstName}</p>
              <p className={styles.students4}>{student.email}</p>
              <p className={styles.students5}>{student.phone}</p>
              <p className={styles.students5}>{student.domain}</p>
              <p className={styles.students6}>{student.company.name}</p>

             
                <Image className={styles.studentsUpdate}
                  src="/imagesStudents/update.png"
                  alt="delete"
                  width={19}
                  height={19}
                />
             

            
                <Image  className={styles.studentsDelete}

                onClick={() => handleDelete(student.id)}

                  src="/imagesStudents/delete.png"
                  alt="delete"
                  width={16}
                  height={18}
                />
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Students;
