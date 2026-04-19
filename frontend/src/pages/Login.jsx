import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../api/auth"; // from earlier step
import { useNavigate } from "react-router-dom";

function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const res = await loginUser(form);

        // save token
        localStorage.setItem("token", res.data.token);

        navigate("/message");

        alert("Logged in!");
        } catch (err) {
        console.error(err.response?.data || err.message);
        alert("Login failed");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
        <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-md w-[300px]"
        >
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

            <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full mb-3 p-2 border rounded"
            />

            <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
            />

            <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
            Login
            </button>

            <p className="text-sm mt-4 text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500">
                Register
            </Link>
            </p>
        </form>
        </div>
    );
}

export default Login;