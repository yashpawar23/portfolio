import './App.css';
import WhiteModetxt from './Component/AnimatedText/WhiteModetxt';
import Experience from './Component/Experience/Experience';
import Intro from './Component/Introduction/Intro';
import Navbar from './Component/Navbar/Navbar'
import Services from './Component/Services/Services';
import InputForm from './Component/Form/InputForm'
import Footer from './Component/Footer/Footer';
import Project from './Component/Projects/Project';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <WhiteModetxt/>
      <Intro/>
      <Services/>
      <Experience/>
      <Project/>
      <InputForm/>
      <Footer/>
    </div>
  );
}

export default App;
