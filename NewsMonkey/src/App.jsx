import React,{useState} from 'react'
import News from "./components/News.jsx"

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import LoadingBar from 'react-top-loading-bar'



function App() {

    const [progress, setProgress] = useState(0);
    const apikey = "df35acd3ae394a35bd9136a4ec7efdc8";

    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path='' element={<div>
            <LoadingBar
              color='#f11946'
              progress={progress}
            />
            <Layout/>
          </div>}>
            <Route exact path='/' element={<News apikey={apikey} key={"general"} pagesize={6} country={"in"} category={"general"} setProgress={setProgress} />} />
            <Route exact path='/business' element={<News apikey={apikey} key={"business"} pagesize={6} country={"in"} category={"business"} setProgress={setProgress} />} />
            <Route exact path='/entertainment' element={<News apikey={apikey} key={"entertainment"} pagesize={6} country={"in"} category={"entertainment"} setProgress={setProgress} />} />
            <Route exact path='/sports' element={<News apikey={apikey} key={"sports"} pagesize={6} country={"in"} category={"sports"} setProgress={setProgress} />} />
            <Route exact path='/science' element={<News apikey={apikey} key={"science"} pagesize={6} country={"in"} category={"science"} setProgress={setProgress} />} />
            <Route exact path='/technology' element={<News apikey={apikey} key={"technology"} pagesize={6} country={"in"} category={"technology"} setProgress={setProgress} />} />
            <Route exact path='/health' element={<News apikey={apikey} key={"health"} pagesize={6} country={"in"} category={"health"} setProgress={setProgress} />} />
          </Route>
        )
        
      )
      

  return (
    <RouterProvider router={router} />
  )
}

export default App