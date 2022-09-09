import React from "react";
// import { useState } from "react";
import { Form, Container } from "react-bootstrap";
import "../../Modules/Login.scss";

export const LoginView = () => {
//   const [user, setUser] = useState("");
//   const [password, setPassword] = useState("");

  return (
    <div className="wrap">
      <Container>
        <div className="login-container ">
          <Form className="login">
            <h1>Login </h1>
            <input type="Text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Login" />
          </Form>
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
