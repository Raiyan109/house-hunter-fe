import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { UserContext } from "../../context/UserProvider";
import Loading from "../../components/Loading";


const BookNew = () => {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState()
    const navigate = useNavigate()
    const MySwal = withReactContent(Swal)
    const { user } = useContext(UserContext)
    console.log(user?.user);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const { data } = await axios.post('http://localhost:5000/api/v1/users/signup', {
            name,
            email,
            phone
        })
        MySwal.fire({
            title: 'Booking successfully',
            icon: "success"
        })
        setLoading(false)
        navigate('/manage-bookings')

    }

    if (loading) {
        return <Loading />
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Book now</h1>

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

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered"
                                value={user?.user?.name}
                                disabled
                                // onChange={(e) => setName(e.target.value)}
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered"
                                value={user?.user?.email}
                                disabled
                                // onChange={(e) => setEmail(e.target.value)}
                                required />
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

export default BookNew;