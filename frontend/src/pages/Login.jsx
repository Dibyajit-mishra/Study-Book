import React, { useState } from 'react'

const formpattern = {
  email:"",
  pass:""
}

function Login() {
  const [loginData,setLoginData] = useState(formpattern)
  const [image,setImage] = useState('')

  function handelForm(e){
    setLoginData({...loginData,[e.target.name]:e.target.value}) 
  }

  return (
    <section className='h-screen'>
      <div className="border rounded">
        <form onSubmit={}>
          <input type="file" onChange={}/>
          <input type="email" onChange={handelForm} name='email' value={loginData.email}/>
          <input type="password" onChange={handelForm} name='pass'value={loginData.pass}/>
          <button>Sign In</button>
        </form>
      </div>
    </section>
  )
}

export default Login