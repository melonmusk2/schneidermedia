import App2 from "./App2";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom"
import Impressum from "./components/Impressum";
import Kontakt from "./components/kontakt";
import Header from "./components/header"


const NotFound = () => {
  return <div className="text-center font-bold leading-10 text-[50px] mb-20 mt-20"> <h1 className="text-black">404 Not Found</h1>
  <p className="text-black">Die von Ihnen gesuchte Seite konnte nicht gefunden werden.</p>
  <p><a className="bh2" href=""> Zurück zur Homepage</a></p>
  </div>;
};

function App() {
  return (
    <>
    <Header/>
      <Routes>     
          <Route path="/" element={<App2 />} />  
          <Route path="/Impressum" element={<Impressum />} />
          <Route path="/Kontakt" element={<Kontakt />} />  
        </Routes>
      <Footer/>
    </>
  )

}


export default App