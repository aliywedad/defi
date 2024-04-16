import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

function Login( {message}) {

  // function handleCallbackResponse (response) {
  // console.log("l")
  // }
  
  // useEffect(() => {
  //   google.accounts.id.initialize({
  //     client_id: "964065372421-01o3o5knudb3j34k6n41pnsc1ddkdcs2.apps.googleusercontent.com",
  //     callback: handleCallbackResponse
  //   });
  
  //   google.accounts.id.renderButton(
  //     document.getElementById("signInDiv"),
  //     { theme: "outline", size: "large" }
  //   );
  // }, []);



   const [email, setEmail] = useState('');
  const [Loggedin, setLoggedin] = useState(false);
  // const [Role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const[user,setuser]=useState({"email":"","role":""})

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/auth/', { login: email, pwd: password });
  
      console.log(response.data); // Log the response data
  
      if (response.status === 200) {
        console.log('Success');
        const data = response.data;
        console.log(data.role)
         if (data.role==='organisateur') {
          console.log('Admin')
          navigate('/admin');
  
        } else if (data.role==='jury') {
          console.log('Jery')
          navigate(`/Jery/${data.id}`); // Use ${} for interpolation
  
        } else if (data.role==='étudiant') {
          console.log('Etudiant')
          navigate('/Etudiant');
  
        }




       } else {
        console.error('Error');
        setError('Invalid login or password');
      }
    } catch (error) {
      console.error('Error submitting the form', error);
      setError('Network error or server issue');
    }
  };

  return (
    //   <div className="App">

    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
           <div className="App">
           <div className="signInDiv"></div>

           </div>

          <div className="card" style={{ maxWidth: "500px", margin: "auto" }}>
            <div className="card-body">
              {message} <br/>
              <form id="formAuthentication" className="mb-3" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email-username"
                    placeholder="Entrez votre email "
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3 form-password-toggle">
                  <div className="d-flex justify-content-between">
                    <label className="form-label" htmlFor="password">Mot de passe</label>
                    <a href='/#'>
                      <small>Mot de passe oublié ?</small>
                    </a>
                  </div>
                  <div className="input-group input-group-merge">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      aria-describedby="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                  </div>
                </div>
                <div className="mb-3">
                  {error && <div className="text-danger">{error}</div>}
                </div>
                <div className="mb-3">
                  <button className="btn btn-primary d-grid w-100" type="submit">Se connecter</button>
                </div>
              </form>

              <p className="text-center">
                <a href="auth-register-basic.html">
                  <span>Créer un compte</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
