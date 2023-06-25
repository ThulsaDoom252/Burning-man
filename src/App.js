import 'reset-css'
import Header from "./components/Header/Header";
import Main from "./components/Section/Main";
import Footer from "./components/Footer/Footer";

const App = () => {
    return <div className={'wrapper'}>
        <Header/>
        <Main/>
        <Footer/>
    </div>

}

export default App;
