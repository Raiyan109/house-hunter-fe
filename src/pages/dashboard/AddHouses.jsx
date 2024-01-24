import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Loading from "../../components/Loading";
import { UserContext } from "../../context/UserProvider";

const AddHouses = () => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [bedrooms, setBedrooms] = useState('')
    const [bathrooms, setBathrooms] = useState('')
    const [size, setSize] = useState('')
    const [image, setImage] = useState('')
    const [availability, setAvailability] = useState('')
    const [rent, setRent] = useState('')
    const [phone, setPhone] = useState('')
    const [desc, setDesc] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const MySwal = withReactContent(Swal)
    const { user } = useContext(UserContext)
    console.log(user.access_token);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const { data } = await axios.post('http://localhost:5000/api/v1/houses/create', {
                name,
                address,
                city,
                bedrooms,
                bathrooms,
                size,
                image,
                availability,
                rent,
                desc,
                addedBy: user?.user?._id
            }, {
                headers: {
                    "Authorization": `Bearer ${user?.access_token}`
                }
            })
            MySwal.fire({
                title: 'House added successfully',
                icon: "success"
            })
            setLoading(false)
            navigate('/listed-houses')
        } catch (error) {
            console.log(error.message);
            MySwal.fire({
                title: error.message,
                icon: "error"
            })

        }

    }

    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add New Houses</h1>

                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="address" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">City</span>
                                </label>
                                <input type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    placeholder="city" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Bedrooms</span>
                                </label>
                                <input type="text"

                                    value={bedrooms}
                                    onChange={(e) => setBedrooms(e.target.value)} placeholder="bedrooms" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Bathrooms</span>
                                </label>
                                <input type="text"
                                    value={bathrooms}
                                    onChange={(e) => setBathrooms(e.target.value)}
                                    placeholder="bathrooms" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Room Size</span>
                                </label>
                                <input type="text"
                                    value={size}
                                    onChange={(e) => setSize(e.target.value)}
                                    placeholder="room size" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image url</span>
                                </label>
                                <input type="text"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    placeholder="image url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Availability</span>
                                </label>
                                <input type="text"
                                    value={availability}
                                    onChange={(e) => setAvailability(e.target.value)}
                                    placeholder="availability" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rent per month</span>
                                </label>
                                <input type="text"
                                    value={rent}
                                    onChange={(e) => setRent(e.target.value)}
                                    placeholder="rent" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="text"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="phone"
                                    pattern="/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/"
                                    title="Must be a bangladeshi number"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text"
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                    placeholder="description" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddHouses;