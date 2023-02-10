import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Contact} from "./contact/Contact";
import {Footer} from "./footer/Footer";
import {Projects} from "./projects/Projects";

function App() {
   return (
     <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
     </div>
   );
}

export default App;
