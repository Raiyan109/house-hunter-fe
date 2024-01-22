import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const MySwal = withReactContent(Swal)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState()
    const [role, setRole] = useState(0)
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const { data } = await axios.post('http://localhost:5000/api/v1/users/signup', {
            name,
            role,
            email,
            password,
            phone
        })
        MySwal.fire({
            title: 'Signed up successfully',
            icon: "success"
        })
        setLoading(false)
        navigate('/login')
        setName('')
        setEmail('')
        setPassword('')
        setPhone('')
    }

    if (loading) {
        return <span className="loading loading-ring loading-lg"></span>
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign up now!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit}>

                        {/* Status check */}

                        {/* <div className="dropdown dropdown-bottom">
                            <div tabIndex={0} role="button" className="btn m-1">Sign up as</div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <li><a>House Owner</a></li>
                                <li><a>House Renter</a></li>
                            </ul>
                        </div> */}
                        <div className='flex flex-col justify-center'>
                            <label htmlFor="">Role</label>
                            <select name="" id="" defaultValue='false' value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="">Select role</option>
                                <option value="0">House Owner</option>
                                <option value="1">House Renter</option>
                            </select>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required />
                        </div>
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="number" placeholder="phone" className="input input-bordered"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;