import "./Sidebar.css";

export default function sidebar () {
    return (
        <div className="sidebar">
            <section className="dashborad">
                Dashboard
            </section>
            <section className="classes">
                My classes
            </section>
            <section className="grades">
                My grades
            </section>
        </div>
    );
}