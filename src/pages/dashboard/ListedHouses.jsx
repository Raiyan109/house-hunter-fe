import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserProvider";
import ListedHouse from "./ListedHouse";

const ListedHouses = () => {
    const [houses, setHouses] = useState([])
    const base_url = 'http://localhost:5000/api/v1/houses/user'
    const { user } = useContext(UserContext)
    console.log(user?.user);


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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListedHouses;