import { useState } from 'react';
import PreLoader from './components/PreLoader';
import NavBar from './components/NavBar';
import Landingpage from './components/Landingpage';


export default function App() {
const [loading,setLoading]=useState(true)

  return (
<>
 {loading ? (
  <PreLoader setLoading={setLoading} />
 ):(
  <div>
    <Landingpage />
  </div>
 )}
</>
  )
}