import style from "./App.module.css";
import Navbar from "./sections/Navbar/Navbar";
import Header from "./sections/Header/Header";
import Services from "./sections/Services/Services";
import Barbers from "./sections/Barbers/Barbers";

function App() {
    return (
        <div className={style.app}>
            <Navbar />
            <Header />
            <Services />
            <Barbers />
        </div>
    );
}

export default App;
