import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/react.svg'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";


const Login = () => {
    const MySwal = withReactContent(Swal)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const { data } = await axios.post('http://localhost:5000/api/v1/users/signin', {
                email,
                password
            })
            MySwal.fire({
                title: 'Logged in successfully',
                icon: "success"
            })
            setLoading(false)
            console.log(data.user);
            localStorage.setItem('userData', JSON.stringify(data.user))
            navigate('/dashboard')
            setEmail('')
            setPassword('')
        } catch (error) {
            MySwal.fire({
                title: 'Something went wrong!',
                text: 'Please try again',
                icon: "error"
            })
            navigate('/login')
        }
    }

    if (loading) {
        return <Loading />
    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p>New in House Hunters?
                            go to <Link to='/signUp' className='btn btn-link'>Sign up</Link>

                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;