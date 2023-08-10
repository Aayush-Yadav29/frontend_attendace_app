import './App.css';
// import './Geolocation.js';
import About from './About.js';
import ContactUs from './ContactUs';
import Home from './Home';
import Footer from './Footer';
import SessionPage from './SessionPage';
import FacultySessionPage from './FacultySessionPage';
function App() {
  const data= [
    {Session : "Session 1", Time : "2:00pm" , Remark : "P"},
    {Session : "Session 2", Time : "10:00am" , Remark : "A"},
    {Session : "Session 3", Time : "3:00pm" , Remark : "P"},
    {Session : "Session 4", Time : "8:00am" , Remark : "A"}
  ]
  
  return (
    <div className="App">
      {/* <Home/>
      <About/>
      <Footer/> */}
      {/* <SessionPage sessionlist={data}/> */}
      <FacultySessionPage sessionlist={data}/>
      {/* <ContactUs/> */}  
    </div>
  );
}

export default App;
