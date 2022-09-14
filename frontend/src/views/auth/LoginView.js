import React, { useState, useEffect, useRef, useContext } from "react";
import { Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../Modules/Login.scss";
import AuthContext from "../../context/AuthProvider";


import axios from '../../api/axios';
const LOGIN_URL = '/login'



export const LoginView = () => {
  const {auth, setAuth} = useContext(AuthContext)
  const userRef = useRef();
  const errorRef = useRef();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMsg('')
  }, [user, password]);


  const loginHandler = async (e)=>{
    e.preventDefault()
    try{
      const response = await axios.post(LOGIN_URL, JSON.stringify({email: user, password: password}),{
        headers: { 'Content-Type': 'application/json'},
        // withCredentials: true
      })
      // console.log(JSON.stringify(response?.data));
      // console.log(JSON.stringify(response));

      const accessToken = response.data.user.token;
      const name = response.data.user.name;
      // console.log(response.data.user.token);

      setAuth({email:user, password:password,name, accessToken })
      setUser("");
      setPassword("");
      // console.log(user,password);
      setSuccess(true)

    }catch(error){
      if(!error?.response){
        setErrorMsg('No server response')
      }else if(error.response.status === 400){
        setErrorMsg('Missing username or password')
      }else if(error.response.status === 401){
        setErrorMsg('Unauthorized')
      }else{
        setErrorMsg('Login faild')
      }
      errorRef.current.focus()
    }
  }


  return (
    <div className="wrap">
      <Container>
        <div className="login-container ">
          {success ? (
            <section className="login">
              <h3>You are Loged in as: {auth.name}</h3>
              <Link to={'/'}>Home</Link>
            </section>
          ):
            (
            <section>
            <Form className="login" onSubmit={loginHandler}>
              <h1>Login </h1>
            <h4
              ref={errorRef}
              className={errorMsg ? "errormsg" : "effscreen"}
              aria-live="assertive" style={{color: 'red'}}
            >
              {errorMsg}
            </h4>
              <input
                type="email"
                placeholder="Your Email..."
                onChange={(e) => setUser(e.target.value)}
                ref={userRef}
                autoComplete="off"
                value={user}
                required

              />
              <input
                type="password"
                id="password"
                placeholder="Your Password..."
                onChange={(e) => setPassword(e.target.value)}
                ref={userRef}
                value={password}
                required

              />
              <input type="submit" value="Login" />
            </Form>
          </section>
            )
          }
        </div>
      </Container>
    </div>
  );
};

// <Container>
//   <div className="container border p-3 mt-5">
//     <div className="col-8 ">
//       <div className="header ">
//         <Form className=" ">
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" placeholder="Enter email" />
//             <Form.Text className="text-muted">
//               We'll never share your email with anyone else.
//             </Form.Text>
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="password" placeholder="Password"   />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formBasicCheckbox">
//           </Form.Group>
//           <Button variant="primary" type="submit">
//             Login
//           </Button>
//         </Form>
//       </div>
//     </div>
//   </div>
// </Container>
