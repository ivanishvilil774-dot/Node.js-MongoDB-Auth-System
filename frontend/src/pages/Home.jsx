import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h1 className="text-2xl font-bold mb-4">Welcome</h1>
            <p className="mb-6">Please log in or register to continue</p>

            <div className="flex gap-4 justify-center">
            <button
                onClick={() => navigate("/login")}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Login
            </button>

            <button
                onClick={() => navigate("/register")}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
                Register
            </button>
            </div>
        </div>
        </div>
    );
}

export default Home;