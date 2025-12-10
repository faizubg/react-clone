import { Link } from "react-router";
const Login = () => {
    return (
        <div className="login">
            <h1>Login</h1>
            <form action="">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    );
}

export default Login;