import axios from 'axios';
import { useEffect, useState } from 'react';
import House from './House';

const Houses = () => {
    const [houses, setHouses] = useState([])

    const getAllHouses = async () => {
        const { data } = await axios.get('http://localhost:5000/api/v1/houses')
        setHouses(data.data);
    }

    useEffect(() => {
        getAllHouses()
    }, [])
    return (
        <div className='py-10'>
            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        houses.map((house) => (
                            <House key={house._id} house={house} />
                        ))
                    }
                </div>

            </div>

        </div>
    );
};

export default Houses;