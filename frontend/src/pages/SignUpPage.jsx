import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authUser";

export default function SignUpPage() {
    const {searchParams} =new URL(document.location)
 const emailValue=searchParams.get("email")

    const [value,setValue]=useState({
email:emailValue||"",
username:"",
password:""
});

const {signup}=useAuthStore();
 const handleChanges=(e)=>{
    const {name,value}=e.target
    setValue(preState=>({
...preState,[name]:value
    }))
 }  
 const onhandleSubmit=(e)=>{
    e.preventDefault();
    console.log("Email Data",value.email)
   const data={email:value?.email,username:value?.username,password:value?.password}
signup(data)
 }
 
 return (
    <div className="h-screen w-full hero-bg">
        <header className="max-w-6xl mx-auto flex items-center justify-between p-4">
            <Link to={"/"}>
              <img src="/netflix-logo.png" alt="logo" className="w-52" />
            </Link>
        </header>
        <div className="flex justify-center items-center mt-20 mx-3">
          <div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md">
          <h1 className="text-center text-white text-2xl font-bold mb-4">Sign Up</h1>

<form className="space-y-4" onSubmit={onhandleSubmit}>
    <div>
        <label htmlFor="email" className="text-sm font-medium text-gray-300 block">
        Email
        </label>
        <input type="email" name="email" onChange={handleChanges}  className="w-full px-2 mt-1 border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring" placeholder="you@example.com" id="email" value={value.email}/>
    </div>
    <div>
        <label htmlFor="username" className="text-sm font-medium text-gray-300 block">
        Username
        </label>
        <input type="text" name="username" onChange={handleChanges}  className="w-full px-2 mt-1 border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring" placeholder="enter username" id="username" value={value.username}/>
    </div>
    <div>
        <label htmlFor="password" className="text-sm font-medium text-gray-300 block">
        Password
        </label>
        <input type="password" name="password" onChange={handleChanges}  className="w-full px-2 mt-1 border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring" placeholder="********" id="password" value={value.password}/>
    </div>
    <button className="w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700">
      Sign Up
    </button>
</form>
<div className="text-center text-gray-400">
already a member ? {" "}
<Link to={"/login"} className="text-red-500 hover:underline">
Sign In
</Link>
</div>
          </div>
        </div>
    </div>
  )
}
