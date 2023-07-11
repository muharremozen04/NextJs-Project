import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/dashboard.module.css";
import Image from "next/image";


  
function Dashboard() {

  const router = useRouter(); 
  const homeClick2 = (event) => {
    event.preventDefault();
    router.push('/Students'); 
  };

  const logOutClick = (event) => {
    event.preventDefault();
    router.push("/Login"); 
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardManageCourses}>
        <h5 className={styles.dashboardManage}><Image src="/imagesJohn/Line.png" alt="Line" width={4} height={17}/>MANAGE COURSES</h5>
        <div className={styles.dashboardProfile}>
          <Image src="/imagesJohn/profile.png" alt="Profile" width={128} height={196} />
        </div>

        <div className={styles.dashboardButton}>
          <button className={styles.dashboardButton1}><Image src="/imagesJohn/Home.png" alt="Home" width={19} height={17}/>Home</button>
          <button className={styles.dashboardButton2}><Image src="/imagesJohn/Course.png" alt="Course" width={12} height={15}/>Course</button>
          <button onClick={homeClick2} className={styles.dashboardButton3}><Image src="/imagesJohn/Students.png" alt="Students" width={20} height={16}/>Studens</button>
          <button className={styles.dashboardButton4}><Image src="/imagesJohn/Payment.png" alt="Payment" width={15} height={15}/>Payment</button>
          <button className={styles.dashboardButton5}><Image src="/imagesJohn/Report.png" alt="Report" width={13} height={17}/>Report</button>
          <button className={styles.dashboardButton6}><Image src="/imagesJohn/Settings.png" alt="Settings" width={15} height={15}/>Settings</button>
          <button onClick={logOutClick } className={styles.dashboardButton7}>Logout<Image src="/imagesJohn/Logout.png" alt="Logout" width={17} height={13}/></button>
        </div>
      </div>

      <div className={styles.dashboardHeader}>
      <Image src="/imagesBox/Header.png" alt="Header" width={770} height={60}/>
      <div className={styles.dashboardToggleBar}>
         <Image src="/imagesBox/toggleBar.png" alt="toggleBar" width={18} height={18}/>
         </div>
         <div className={styles.dashboardWarning}>
      <Image src="/imagesBox/warning.png" alt="warning" width={17} height={20}/>
      </div>
      </div>

      <div className={styles.dashboardBox}>
     
        <div className={styles.dashboardStudents}>
        <div className={styles.dashboardStudents0}>
        <Image src="/imagesBox/StudentsBox.png" alt="Students" width={48} height={38}/>
        </div>
          <p>Students</p>

          <div className={styles.dashboardStudents1}>
          <Image src="/imagesBox/243Box.png" alt="243" width={56} height={37}/>
          </div>

        </div>
        <div className={styles.dashboardCourse}>
        <Image src="/imagesBox/CourseBox.png" alt="CourseBox" width={28} height={35}/>
          <p>Course</p>
          <div className={styles.dashboardCourse1}>
          <Image src="/imagesBox/13Box.png" alt="13" width={30} height={37}/>
          </div>
        </div>
        <div className={styles.dashboardPayments}>
        <Image src="/imagesBox/PaymentsBox.png" alt="PaymentsBox" width={35} height={40}/>
          <p>Payments</p>
          <div className={styles.dashboardPayments1}>
          <Image src="/imagesBox/556000Box.png" alt="556" width={143} height={37}/>
          </div>
        </div>
        <div className={styles.dashboardUsers}>
        <Image src="/imagesBox/UsersBox.png" alt="Settings" width={34} height={34}/>
          <p>Users</p>
          <div className={styles.dashboardUsers1}>
          <Image src="/imagesBox/3Box.png" alt="3" width={18} height={37}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
