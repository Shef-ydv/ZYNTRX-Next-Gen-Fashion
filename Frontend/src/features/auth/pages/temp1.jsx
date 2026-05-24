    import React, { useState } from 'react';
    import { useAuth } from "../hook/useAuth";
    import { useNavigate } from "react-router";

    const Login = () => {
        const { handleLogin } = useAuth();
        const navigate = useNavigate();

        const [formData, setFormData] = useState({
            email: '',
            password: ''
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({ ...prev, [name]: value }));
        };

        const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const user=await handleLogin({
            email: formData.email,
            password: formData.password
        });
        
        if(user.role=="buyer"){
             navigate("/");
        }else if(user.role=="seller"){
             navigate("/seller/dashboard");
        }
       
        } catch (error) {
        console.error("Login failed", error);
        }
};

        return (
            <>
                <link
                    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
                    rel="stylesheet"
                />

                <div
                    className="min-h-screen flex flex-col lg:flex-row selection:bg-[#C9A96E]/30"
                    style={{ backgroundColor: '#fbf9f6', fontFamily: "'Inter', sans-serif" }}
                >
                    <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden" style={{ backgroundColor: '#f5f3f0' }}>
                        <img
                            src="/snitch_editorial_warm.png"
                            alt="Snitch Fashion Editorial"
                            className="absolute inset-0 w-full h-full object-cover object-top"
                            style={{ filter: 'brightness(0.97)' }}
                        />

                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    'linear-gradient(to top, rgba(27,24,20,0.62) 0%, rgba(27,24,20,0.08) 45%, transparent 100%)'
                            }}
                        />

                        <div className="absolute inset-0 p-14 flex flex-col justify-between z-10">
                            <span
                                className="text-sm font-medium tracking-[0.35em] uppercase"
                                style={{
                                    fontFamily: "'Cormorant Garamond', serif",
                                    color: '#C9A96E',
                                    letterSpacing: '0.35em'
                                }}
                            >
                                ZYNTRX.
                            </span>

                            <div>
                                <p
                                    className="text-5xl xl:text-6xl font-light leading-[1.08] text-white mb-5"
                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                >
                                    Welcome<br />
                                    <em>back.</em>
                                </p>

                                <p
                                    className="text-sm font-light leading-relaxed max-w-xs"
                                    style={{ color: 'rgba(255,255,255,0.65)' }}
                                >
                                    Sign in to explore the latest exclusive drops and manage your aesthetic.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="w-full lg:w-1/2 flex items-center justify-center min-h-screen px-8 sm:px-14 lg:px-20 py-16"
                        style={{ backgroundColor: '#fbf9f6' }}
                    >
                        <div className="w-full max-w-sm">
                            <div className="lg:hidden mb-14">
                                <span
                                    className="text-sm tracking-[0.35em] uppercase"
                                    style={{ fontFamily: "'Cormorant Garamond', serif", color: '#C9A96E' }}
                                >
                                    ZYNTRX.
                                </span>
                            </div>

                            <div className="mb-14">
                                <p
                                    className="text-[10px] uppercase tracking-[0.22em] mb-4 font-medium"
                                    style={{ color: '#C9A96E' }}
                                >
                                    Sign in to ZYNTRX
                                </p>

                                <h1
                                    className="text-[2.6rem] xl:text-5xl font-light leading-[1.1]"
                                    style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1b1c1a' }}
                                >
                                    Enter the Vault
                                </h1>
                            </div>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="login-email"
                                        className="text-[10px] uppercase tracking-[0.18em] font-medium"
                                        style={{ color: '#7A6E63' }}
                                    >
                                        Email Address
                                    </label>

                                    <input
                                        id="login-email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="hello@example.com"
                                        className="w-full bg-transparent outline-none py-3 text-sm transition-colors duration-300"
                                        style={{
                                            color: '#1b1c1a',
                                            borderBottom: '1px solid #d0c5b5',
                                            fontFamily: "'Inter', sans-serif"
                                        }}
                                        onFocus={e => e.target.style.borderBottomColor = '#C9A96E'}
                                        onBlur={e => e.target.style.borderBottomColor = '#d0c5b5'}
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center justify-between">
                                        <label
                                            htmlFor="login-password"
                                            className="text-[10px] uppercase tracking-[0.18em] font-medium"
                                            style={{ color: '#7A6E63' }}
                                        >
                                            Password
                                        </label>

                                        <a
                                            href="#"
                                            className="text-[10px] transition-colors duration-200"
                                            style={{ color: '#B5ADA3' }}
                                            onMouseEnter={e => e.target.style.color = '#C9A96E'}
                                            onMouseLeave={e => e.target.style.color = '#B5ADA3'}
                                        >
                                            Forgot password?
                                        </a>
                                    </div>

                                    <input
                                        id="login-password"
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        placeholder="••••••••"
                                        className="w-full bg-transparent outline-none py-3 text-sm transition-colors duration-300"
                                        style={{
                                            color: '#1b1c1a',
                                            borderBottom: '1px solid #d0c5b5',
                                            fontFamily: "'Inter', sans-serif"
                                        }}
                                        onFocus={e => e.target.style.borderBottomColor = '#C9A96E'}
                                        onBlur={e => e.target.style.borderBottomColor = '#d0c5b5'}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 text-[11px] uppercase tracking-[0.25em] font-medium transition-all duration-300 mt-2"
                                    style={{
                                        backgroundColor: '#1b1c1a',
                                        color: '#fbf9f6',
                                        fontFamily: "'Inter', sans-serif"
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.backgroundColor = '#C9A96E';
                                        e.currentTarget.style.color = '#1b1c1a';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.backgroundColor = '#1b1c1a';
                                        e.currentTarget.style.color = '#fbf9f6';
                                    }}
                                >
                                    Sign In
                                </button>
                                <a href="/api/auth/google"  className="flex items-center justify-center w-full bg-transparent border border-[#E8E2D9] px-4 py-3 text-sm font-medium text-[#7A6E63] hover:border-[#C9A96E] hover:text-[#1b1c1a] transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#C9A96E] focus:ring-offset-2 focus:ring-offset-[#fbf9f6]"
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.04em' }}
        >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
            </svg>
            <span>Continue with Google</span>
                            </a>

                                <p className="text-center text-[11px]" style={{ color: '#B5ADA3' }}>
                                    Don&apos;t have an account?{' '}
                                    <a
                                        href="/register"
                                        className="transition-colors duration-200"
                                        style={{
                                            color: '#7A6E63',
                                            textDecoration: 'underline',
                                            textUnderlineOffset: '3px'
                                        }}
                                        onMouseEnter={e => e.target.style.color = '#C9A96E'}
                                        onMouseLeave={e => e.target.style.color = '#7A6E63'}
                                    >
                                        Sign up
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    export default Login;