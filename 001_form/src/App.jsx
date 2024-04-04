// import { useState } from 'react'
// import Navbar from './components/Navbar';
// import Temp from './components/Temp';
// import './App.css'
// import AboutSection from './components/AboutSection';
// import DismissalAlert from './components/DismissalAlert';
// import {
//   BrowserRouter as Router,
//   Switch, Route,Link
// } from "react-router-dom"


// function App() {
//   const [alert , setAlert] = useState(null);
//   const showalert = (msg,type) =>{
//     setAlert({
//       message : msg,
//       type : type
//     })
//     setTimeout(()=>{
//       setAlert(null);
//     }, 3000);
//   }
//   return (
//     <>
//     <Router>
//     <Navbar></Navbar>
//     <DismissalAlert alert={alert}></DismissalAlert>
//     <Switch>
//        <Route path='/about'>
//         <AboutSection showalert={showalert}/>
//        </Route>
//        <Route path='/'>
//         <Temp showalert={showalert}></Temp>
//        </Route>
//     </Switch>
//     </Router>
//     </>
//   )
// }

// export default App
