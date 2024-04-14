import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

function Login() {
  const [donner, setDonner] = useState([]);
  const [email, setEmail] = useState('');
  const [Loggedin, setLoggedin] = useState(false);
  const [Role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const data = [
      { "id": 1, "role": "Admin", "pwd": "admin", "login": "22086@supnum.mr" },
      { "id": 2, "role": "Jery", "pwd": "jery", "login": "22086@supnum.mr" },
      { "id": 3, "role": "Etudiant", "pwd": "etudiant", "login": "22086@supnum.mr" },
      { "id": 4, "role": "Jery", "pwd": "med", "1234": "22086@supnum.mr" },
      { "id": 5, "role": "Etudiant", "pwd": "med", "12345": "22086@supnum.mr" },
      { "id": 6, "role": "Jery", "pwd": "med", "12346": "22086@supnum.mr" },
      { "id": 7, "role": "Etudiant", "pwd": "med", "12347": "22086@supnum.mr" }
    ];
    setDonner(data);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = donner.find(item => item.login === email && item.pwd === password);
    if (user) {
      // If user is found, you can redirect to the appropriate page based on the user's role
      console.log('Logged in successfully:', user);
      // Example: Redirect to admin page if user's role is 'Admin'
      if (user.role === 'Admin') {
        console.log('Admin')
        navigate('/admin');

      } else if (user.role === 'Jery') {
        console.log('Jery')
        navigate('/Jery');

      } else if (user.role === 'Etudiant') {
        console.log('Etudiant')
        navigate('/Etudiant');

      }
    } else {
      setError('Invalid login or password');
    }
  };

  return (
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
          <div className="card" style={{ maxWidth: "500px", margin: "auto" }}>
            <div className="card-body">
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
