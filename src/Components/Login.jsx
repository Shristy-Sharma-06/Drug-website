import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        console.log('Email:', email);
        console.log('Password:', password);
        alert("Login successful");
        
        
        // ✅ Clear input fields after submit
        setEmail('');
        setPassword('');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 px-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md transition-all duration-300 hover:shadow-2xl">
                <h2 className="text-3xl font-extrabold text-orange-600 mb-2 text-center">Welcome Back</h2>
                <p className="text-sm text-gray-600 mb-8 text-center">Please login to your account</p>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                            required
                        />
                    </div>

                    <div className="flex justify-between items-center text-sm">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="accent-orange-500" />
                            Remember me
                        </label>
                        <a href="#" className="text-orange-500 hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-6 text-sm text-center text-gray-600">
                    Don&apos;t have an account?{' '}
                    <a href="#" className="text-orange-500 hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Login;
