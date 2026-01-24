import "./Sidebar.css";
import porfilePicture from "../../assets/profilepicture.png";

export default function sidebar () {
    return (
        <div className="sidebar">
            <div className="profile">
                <img className="profilepicture" src={porfilePicture}></img>
                <div className="name">
                    <span className="firstname">Janina</span>
                    <span className="lastname">König</span>
                </div>
            </div>
            <section className="menu">
                        <button className="menuButton classesButton">
                    My classes
                </button>
                <button className="menuButton gradesButton">
                    My grades
                </button>
                <button className="menuButton dashboardButton">
                    Dashboard
                </button>
            </section>
        </div>
    );
}