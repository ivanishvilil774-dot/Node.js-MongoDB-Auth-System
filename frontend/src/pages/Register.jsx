import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";

function Register() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const res = await registerUser({
            name: form.name,
            email: form.email,
            password: form.password,
            age: form.age,
        });

        console.log(res.data);
        alert("Account created!");

        navigate("/message");

        } catch (err) {
        console.error(err.response?.data || err.message);
        alert("Registration failed");
        }
    };

    return (
        <>
        
        <div className="flex items-center justify-center h-screen bg-gray-100">
        <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-md w-[320px]"
        >
            <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

            <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full mb-3 p-2 border rounded"
            />

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
            className="w-full mb-3 p-2 border rounded"
            />

            <input
            type="number"
            name="age"
            placeholder="Age"
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
            />

            <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
            Create Account
            </button>

            <p className="text-sm mt-4 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
                Login
            </Link>
            </p>
        </form>
        </div>
    </>

    );
}

export default Register;