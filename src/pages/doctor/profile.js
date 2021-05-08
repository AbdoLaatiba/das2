import doctor from "../../assets/doctor.jpg";
import {useState} from 'react';
import "./doctor.scss";

function Profile(){
  const [about, setAbout] = useState(true);
  const [schedule, setSchedule] = useState(false);
  const [contact, setContact] = useState(false);

  const hideContent = ()=>{
    setAbout(false);
    setSchedule(false);
    setContact(false);
  }
    return (
        <div className="doctor-profile">
          <div className="profile-card">
            <div className="doctor-profile-img">
              <h2>Doctor name</h2>
              <img  src={doctor} alt="doctor image" />
            </div>
            <div className="content-container">
              <div className="buttons">
                <button onClick={()=>{hideContent(); setAbout(true)}}>About</button>
                <button onClick={()=>{hideContent(); setSchedule(true)}}>Schedule</button>
                <button onClick={()=>{hideContent(); setContact(true)}}>Contact</button>
              </div>
              <div className="content">
                <div className={about?"about active":"about"}>
                  <h3>Education</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                  <strong>clinique xyz</strong>
                </div>
                <div className={schedule?"schedule active rowed":"schedule"}>
                  <div className="slot" >10:00 12:00</div>
                  <div className="slot" >13:00 16:00</div>
                  <div className="slot" >16:30 18:00</div>
                  <div className="slot" >19:00 21:00</div>
                </div>
                <div className={contact?"contact active":"contact"}>
                  <div>
                    <i className="fas fa-phone-square-alt"></i>
                    06 12 34 56 78
                  </div>
                  <div>
                    <i className="fas fa-at"></i>
                      nom.prenom@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
    );
}

export default Profile;