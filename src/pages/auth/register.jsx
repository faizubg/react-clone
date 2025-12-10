import { Link } from "react-router";
const Register = () => {
    return (
        <div className="register">
            <h1>Register</h1>
            <form action="">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
}

export default Register;
