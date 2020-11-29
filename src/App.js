import './App.css';
import { FaCar, FaSearch, FaMailBulk, FaSuitcase, FaMosque, FaRegStar, FaCcMastercard } from "react-icons/fa";
import { MdPermIdentity } from "react-icons/md";

function App() {
  return (
    <div className="main_wrapper">
      <div className="container_wrapper">
        <div className="head_wrapper">

        </div>
        <div className="seperator">

        </div>
        <div className="body_wrapper">
          <div className="nav_menu">
              <ul>
                <li><MdPermIdentity/> <span>Employer Profile</span></li>
                <li><FaCar/> <span>Onboard Your Vehicle</span></li>
                <li><FaSearch/> <span>Search & Hire Drivers</span></li>
                <li><FaMailBulk /><span>Inbox</span></li>
                <li><FaSuitcase/><span>Recruitment</span></li>
                <li><FaMosque/> <span>My Organisation</span></li>
                <li><FaRegStar/> <span>Rate A Driver</span></li>
                <li><FaCcMastercard/> <span>My Subscription</span></li>
              </ul>
          </div>
          <div className="body_content_wrapper">
            <div className="chat_wrapper">
              <div className="chat_head"></div>
              <div className="chat_body">
                <div className="chat_list_container"></div>
                <div className="chat_message_container"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_wrapper"></div>
      </div>
     
    </div>
  );
}

export default App;
