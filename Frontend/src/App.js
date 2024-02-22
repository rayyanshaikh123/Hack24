import React, {useState} from 'react'
// import Signup from './components/Signup'
// import Login from './components/Login'
import LoadingBar from 'react-top-loading-bar';
import Product from './components/Product';
import 'ldrs/quantum';
import Navbar from './components/Navbar';
// import LandPage from './components/LandPage';


export default function App() {
  const [progress,setProgress] = useState(0)
  return (
    <>
    <LoadingBar
color='#0C359E'
progress={progress}
// onLoaderFinished={() => setProgress(0)}
/>
<Navbar/>
<Product setProgress={setProgress }/>
{/* <LandPage/> */}
          {/* <Signup/> */}
          {/* <Login/> */}
    </>
  )
}
