import React, { useState, useEffect, useRef } from "react";
// import { useState } from "react";
import { Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../Modules/Login.scss";

export const LoginView = () => {
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


  const loginHandler =(e)=>{
    e.preventDefault()
    setUser("");
    setPassword("");
    console.log(user,password);
    setSuccess(true)
  }


  return (
    <div className="wrap">
      <Container>
        <div className="login-container ">
          {success ? (
            <section className="login">
              <h3>You are Loged in as{'as'}</h3>
              <Link to={'../home'}>Home</Link>
            </section>
          ):
            (
            <section>
            <p
              ref={errorRef}
              className={errorMsg ? "errormsg" : "effscreen"}
              aria-live="assertive"
            >
              {errorMsg}
            </p>
            <Form className="login" onSubmit={loginHandler}>
              <h1>Login </h1>
              <input
                type="text"
                id="username"
                placeholder="Username"
                onChange={(e) => setUser(e.target.value)}
                ref={userRef}
                autoComplete="off"
                value={user}
                required
              />
              <input
                type="password"
                id="password"
                placeholder="Password"
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
