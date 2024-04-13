// // LoginComponent.js
// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// function LoginComponent() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useHistory();

//   const handleLogin = () => {
//     // Perform authentication logic, then determine user's role
//     const role = 'admin'; // Example role for demonstration

//     // Redirect based on user's role
//     if (role === 'admin') {
//       history.push('/admin');
//     } else if (role === 'student') {
//       history.push('/student');
//     } else {
//       // Handle other roles or unauthorized access
//       console.error('Unauthorized access');
//     }
//   };

//   return (
//     <div>
//       <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

// export default LoginComponent;
