import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserProvider";
import axios from "axios";

const ManageBookings = () => {
    const [bookings, setBookings] = useState([])
    const base_url = 'http://localhost:5000/api/v1/bookings/user'
    const { user } = useContext(UserContext)
    console.log(user?.user);


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
    return (
        <div>
            <Navbar />

            <div className="py-10">
                <h1 className="text-primary text-3xl font-bold text-center">{user?.user?.name}'s Bookings</h1>
                <table className="border-separate border-spacing-2 border border-slate-400">
                    <thead>
                        <tr>
                            <th className="border border-primary">Booker name</th>
                            <th className="border border-primary">Booking Item name</th>

                        </tr>
                    </thead>
                    <tbody>
                        {bookings?.map((booking) => (
                            // <Listedbooking key={booking._id} booking={booking} />
                            <tr key={booking._id}>
                                <td className="border border-primary">{booking.name}</td>
                                <td className="border border-primary">{booking.bookingsList}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageBookings;