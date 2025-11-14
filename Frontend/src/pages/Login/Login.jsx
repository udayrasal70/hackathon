import './Login.css';

function Login() {
  return (
    <div className='container'>
        <div className='login-container'>
      <div className='page-header'><h1 >Login</h1></div>
      <div className='form-floating mb-3'>
        <input type="email" className='form-control' id="floatingInput" placeholder="name@example.com" />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className='form-floating'>
        <input type="password" className='form-control' id="floatingPassword" placeholder="Password" />
        <label htmlFor="floatingPassword">Password</label>
      </div><br />
     <button type="button" class="btn btn-success">login</button>
      </div>
    </div>
  );
}

export default Login;