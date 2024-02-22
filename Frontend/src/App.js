import React, {useState} from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import LoadingBar from 'react-top-loading-bar';
import Product from './components/Product';

export default function App() {
  const [progress,setProgress] = useState(0)
  return (
    <>
    <LoadingBar
color='#f11946'
progress={progress}
// onLoaderFinished={() => setProgress(0)}
/>
          <Signup/>
          {/* <Login/> */}
    </>
  )
}
