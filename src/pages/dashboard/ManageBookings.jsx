import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserProvider";
import axios from "axios";
import { MdDelete, MdEdit } from "react-icons/md";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const ManageBookings = () => {
    const [bookings, setBookings] = useState([])
    const base_url = 'http://localhost:5000/api/v1/bookings/user'
    const { user } = useContext(UserContext)
    console.log(user?.user);
    const MySwal = withReactContent(Swal)

    useEffect(() => {
        const getAllBookings = async () => {
            const { data } = await axios.get(`${base_url}`, {
                headers: {
                    "Authorization": `Bearer ${user?.access_token}`
                }
            })
            setBookings(data.bookings);
            console.log(data.bookings);
        }
        getAllBookings()
    }, [user?.access_token])

    const deleteBooking = async (id, name) => {
        console.log(id);
        const { data } = await axios.delete(`http://localhost:5000/api/v1/bookings/delete/${id}`)
        MySwal.fire({
            title: `${name} is Deleted`,
            icon: "success"
        })
    }
    useEffect(() => {

        deleteBooking()
    }, [])
    return (
        <div>
            <Navbar />

            <div className="py-10">
                <h1 className="text-primary text-3xl font-bold text-center">{user?.user?.name}'s Bookings</h1>
                <div className="flex justify-center items-center py-5">
                    <table className="border-separate border-spacing-2 border border-slate-400">
                        <thead>
                            <tr>
                                <th className="border border-primary">Renter name</th>
                                <th className="border border-primary">Booking Item name</th>
                                <th className="border border-primary">Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {bookings?.map((booking) => (
                                // <Listedbooking key={booking._id} booking={booking} />
                                <tr key={booking._id}>
                                    <td className="border border-primary">{booking.name}</td>
                                    <td className="border border-primary">{booking.bookingsList}</td>
                                    <td className="border border-primary flex items-center gap-1 cursor-pointer">
                                        <MdDelete onClick={() => deleteBooking(booking._id, booking.name)} />
                                        <MdEdit />
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageBookings;