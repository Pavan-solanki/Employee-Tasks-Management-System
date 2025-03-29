import React, { useContext, useEffect, useState } from 'react'
import "./App.css"
import Login from './components/Auth/Login'
import EmployeeDash from './components/Dashboard/EmployeeDash'
import AdminDash from './components/Dashboard/AdminDash'
import { AuthContext } from './context/AuthProvider'
// import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {

  // useEffect(() => {
  //   // setLocalStorage();
  //   // getLocalStorage()
  // }, [])
  const [user, setUser] = useState(null)
  const [loggedInuserdata, setloggedInuserdata] = useState(null)
  const [userData,setuserData]=useContext(AuthContext)
  useEffect(() => {
    const loggedInUser=localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData=JSON.parse(loggedInUser)
      setUser(userData.role)
        setloggedInuserdata(userData.data)
      
    }
  }, [])

  const handler= (email, password)=> {
    if(email=='admin@me.com' && password=='123'){
      setUser("admin")
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(userData){
      const employee=userData.find((e)=>e.email==email && e.password==password)
      if(employee){
        setUser("employee")
        setloggedInuserdata(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
        // console.log(employee);
      }
      
    }
    else{
      alert("Please enter valid credentials")
    }
  }

  

  return (
    <>
      {!user ? <Login handler={handler} />:""}
      {user==="admin" ? <AdminDash changeUser={setUser}/> : (user==="employee" ? <EmployeeDash changeUser={setUser} data={loggedInuserdata}/>:null)}
      
    </>
  )
}

export default App