import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserProvider";
import ListedHouse from "./ListedHouse";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { MdDelete, MdEdit } from "react-icons/md";

const ListedHouses = () => {
    const [houses, setHouses] = useState([])
    const base_url = 'http://localhost:5000/api/v1/houses/user'
    const { user } = useContext(UserContext)
    console.log(user?.user);
    const MySwal = withReactContent(Swal)

    useEffect(() => {
        const getAllHouses = async () => {
            const { data } = await axios.get(`${base_url}`, {
                headers: {
                    "Authorization": `Bearer ${user?.access_token}`
                }
            })
            setHouses(data.houses);
            console.log(data.houses);
        }
        getAllHouses()
    }, [user?.access_token])

    const deleteHouse = async (id, name) => {
        console.log(id);
        const { data } = await axios.delete(`http://localhost:5000/api/v1/bookings/delete/${id}`)
        MySwal.fire({
            title: `${name} is Deleted`,
            icon: "success"
        })
    }
    useEffect(() => {

        deleteHouse()
    }, [])
    return (
        <div className="py-10">
            <h1 className="text-primary text-3xl font-bold text-center">{user?.user?.name}'s Houses</h1>
            <table className="border-separate border-spacing-2 border border-slate-400">
                <thead>
                    <tr>
                        <th className="border border-primary">Name</th>
                        <th className="border border-primary">Address</th>
                        <th className="border border-primary">City</th>
                        <th className="border border-primary">Phone</th>
                        <th className="border border-primary">Description</th>
                        <th className="border border-primary">Rent</th>
                        <th className="border border-primary">Size</th>
                        <th className="border border-primary">Bedrooms</th>
                        <th className="border border-primary">Bathrooms</th>
                        <th className="border border-primary">image</th>
                        <th className="border border-primary">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {houses?.map((house) => (
                        // <ListedHouse key={house._id} house={house} />
                        <tr key={house._id}>
                            <td className="border border-primary">{house.name}</td>
                            <td className="border border-primary">{house.address}</td>
                            <td className="border border-primary">{house.city}</td>
                            <td className="border border-primary">{house.phone}</td>
                            <td className="border border-primary">{house.desc}</td>
                            <td className="border border-primary">{house.rent}</td>
                            <td className="border border-primary">{house.size}</td>
                            <td className="border border-primary">{house.bedrooms}</td>
                            <td className="border border-primary">{house.bathrooms}</td>
                            <td className="border border-primary w-10 h-10 object-contain rounded-full">
                                <img src={house.image} alt="" />
                            </td>
                            <td className="border border-primary flex items-center gap-1 cursor-pointer">
                                <MdDelete onClick={() => deleteHouse(house._id, house.name)} />
                                <MdEdit />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListedHouses;