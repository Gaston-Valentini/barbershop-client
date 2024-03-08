import style from "./App.module.css";
import Navbar from "./sections/Navbar/Navbar";
import Header from "./sections/Header/Header";
import Services from "./sections/Services/Services";
import Barbers from "./sections/Barbers/Barbers";
import Reviews from "./sections/Reviews/Reviews";
import Contact from "./sections/Contact/Contact";

function App() {
    return (
        <div className={style.app}>
            <Navbar />
            <Header />
            <Services />
            <Barbers />
            <Reviews />
            <Contact />
        </div>
    );
}

export default App;
