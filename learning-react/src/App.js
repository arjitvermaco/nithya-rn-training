import React, { useEffect, useState } from 'react'

export default function App() {

  // useEffect(callback function , [arguments])
  const [appName,setAppName] = useState("App Name");
  const [year,setYear] = useState(2023)
  // 1. Will Run on component load and on any state change 
  useEffect(()=>{
    console.log("Use Effect has loaded")
  })
  //2.Will Run only on component load
  useEffect(()=>{
    console.log("Will Run only on component Load")
  },[])
  //3.Will Run on component load and also on arguments changed
 useEffect(()=>{
  console.log("Will Run only on component Load and also on appName change")
 },[appName,year])



  return (
    <div>
      {appName} <br/>
      <button onClick={()=>{setAppName("New App nAme")}}>Change App Name</button> <br/>

      {year} <br/>
      <button onClick={()=>{setYear(2024)}}>Change Year</button>
    </div>
  )
}
