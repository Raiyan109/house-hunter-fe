
const ListedHouse = ({ house }) => {
    return (
        <div>

            {/* <tr key={house._id}> */}
            <td className="border border-primary">{house._id}</td>
            <td className="border border-primary">{house.address}</td>
            <td className="border border-primary">{house.city}</td>
            <td className="border border-primary">{house.phone}</td>
            <td className="border border-primary">{house.desc}</td>
            <td className="border border-primary">{house.rent}</td>
            <td className="border border-primary">{house.size}</td>
            <td className="border border-primary">{house.bedrooms}</td>
            <td className="border border-primary">{house.bathrooms}</td>
            <td className="border border-primary">{house.image}</td>
            {/* </tr> */}
        </div>
    );
};

export default ListedHouse;