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
    {Session : "Session 4", Time : "8:00am" , Remark : "A"},

    
  ]

  const data2= [
    {Session : "Session 1", Date : "02-08-2023", StartTime : "2:00pm" , EndTime : "4:00pm"},
    {Session : "Session 2", Date : "10-08-2023", StartTime : "10:00am" , EndTime : "12:00pm"},
    {Session : "Session 3", Date : "22-08-2023", StartTime : "3:00pm" , EndTime : "5:00pm"},
    {Session : "Session 4", Date : "09-08-2023", StartTime : "8:00am" , EndTime : "10:00am"},

    
  ]
  
  return (
    <div className="App">
      {/* <Home/>
      <About/>
      <Footer/> */}
      <SessionPage sessionlist={data}/>
      {/* <FacultySessionPage sessionlist={data2}/> */}
      {/* <ContactUs/> */}  
    </div>
  );
}

export default App;
