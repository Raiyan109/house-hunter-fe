import axios from 'axios';
import { useEffect, useState } from 'react';
import House from './House';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
const Houses = () => {
    const [houses, setHouses] = useState([])
    const [search, setSearch] = useState('')
    const [city, setCity] = useState('')
    const [bed, setBed] = useState('')
    const [bath, setBath] = useState('')
    const [size, setSize] = useState('')
    const [availability, setAvailability] = useState('')
    const [rent, setRent] = useState('')
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);

    const base_url = 'https://house-hunter-be-raiyan109.vercel.app/api/v1/houses'



    useEffect(() => {
        const getAllHouses = async () => {
            const { data } = await axios.get(`${base_url}?search=${search}&city=${city}&bedrooms=${bed}&bathrooms=${bath}&size=${size}&rent=${rent}&page=${page}`)
            setHouses(data.data);
            setPageCount(data.pagination.pageCount)
            console.log(data);
        }
        getAllHouses()
    }, [search, city, bed, bath, size, rent, page])

    // pagination
    // handle prev btn
    const handlePrevious = () => {
        setPage(() => {
            if (page === 1) return page;
            return page - 1
        })
    }

    // handle next btn
    const handleNext = () => {
        setPage(() => {
            if (page === pageCount) return page;
            return page + 1
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(city, bed, bath, size, availability, rent);
    }
    return (
        <div className='py-10'>
            <h1 className='text-2xl text-secondary text-center font-bold py-5'>All Houses</h1>
            {/* Filters */}
            <div className='flex justify-center items-center'>
                <div className='bg-primary px-4 py-5 my-5 flex flex-col lg:flex-row gap-3 w-[880px]'>
                    <form onSubmit={handleSubmit}>
                        <div className='relative space-y-1'>
                            <span className='text-white/90'>Search houses</span>
                            <input
                                type="text"
                                onChange={(e) => setSearch(e.target.value)}
                                id="Search"
                                placeholder="Search..."
                                className="w-full py-1 px-1 shadow-sm placeholder:text-navy-blue placeholder:text-sm placeholder:font-medium"
                            />

                            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center top-5">
                                <button type="button" className="text-gray-600 hover:text-gray-700">
                                    <span className="sr-only">Search</span>

                                    {/* <img src={heroPlus} alt="" /> */}
                                </button>
                            </span>
                        </div>
                        <div className='relative space-y-1'>

                            <div className='flex flex-col justify-center'>
                                <label htmlFor="">Filter by city</label>
                                <select name="" id="" defaultValue='false'
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                >
                                    <option value="">Select one</option>
                                    <option value="dhaka">Dhaka</option>
                                    <option value="chittagong">Chittagong</option>
                                    <option value="sylhet">Sylhet</option>
                                </select>
                            </div>
                        </div>
                        <div className='relative space-y-1'>

                            <div className='flex flex-col justify-center'>
                                <label htmlFor="">Filter by bedrooms</label>
                                <select name="" id="" defaultValue='false'
                                    value={bed}
                                    onChange={(e) => setBed(e.target.value)}
                                >
                                    <option value="">Select one</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        </div>
                        <div className='relative space-y-1'>

                            <div className='flex flex-col justify-center'>
                                <label htmlFor="">Filter by bathrooms</label>
                                <select name="" id="" defaultValue='false'
                                    value={bath}
                                    onChange={(e) => setBath(e.target.value)}
                                >
                                    <option value="">Select one</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        </div>
                        <div className='relative space-y-1'>

                            <div className='flex flex-col justify-center'>
                                <label htmlFor="">Filter by size</label>
                                <select name="" id="" defaultValue='false'
                                    value={size}
                                    onChange={(e) => setSize(e.target.value)}
                                >
                                    <option value="">Select one</option>
                                    <option value="1100">1100</option>
                                    <option value="1200">1200</option>
                                    <option value="1300">1300</option>
                                </select>
                            </div>
                        </div>
                        <div className='relative space-y-1'>

                            <div className='flex flex-col justify-center'>
                                <label htmlFor="">Filter by availability</label>
                                <select name="" id="" defaultValue='false'
                                    value={availability}
                                    onChange={(e) => setAvailability(e.target.value)}
                                >
                                    <option value="">Select one</option>
                                    <option value="dhaka">Dhaka</option>
                                    <option value="chittagong">Chittagong</option>
                                    <option value="sylhet">Sylhet</option>
                                </select>
                            </div>
                        </div>
                        <div className='relative space-y-1'>

                            <div className='flex flex-col justify-center'>
                                <label htmlFor="">Filter by rent</label>
                                <select name="" id="" defaultValue='false'
                                    value={rent}
                                    onChange={(e) => setRent(e.target.value)}
                                >
                                    <option value="">Select one</option>
                                    <option value="11000">11000</option>
                                    <option value="12000">12000</option>
                                    <option value="13000">13000</option>
                                </select>
                            </div>
                        </div>
                        <button className='btn btn-neutral my-2'>Search</button>
                    </form>
                </div>
            </div>

            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        houses.map((house) => (
                            <House key={house._id} house={house} />
                        ))
                    }
                </div>


            </div>
            <div className='flex justify-center items-center mt-10'>
                {/* Pagination */}
                {
                    pageCount > 0 ?
                        <div className="pagination_div d-flex justify-content-end mx-5">
                            <div className='flex gap-4 '>
                                <MdKeyboardDoubleArrowLeft onClick={() => handlePrevious()} className='bg-primary w-7 h-7 cursor-pointer' />
                                {
                                    Array(pageCount).fill(null).map((element, index) => {
                                        return (
                                            <>
                                                <div key={index}
                                                    className='bg-secondary w-7 h-7 cursor-pointer flex justify-center items-center'
                                                    //   active={page === index + 1 ? true : false}
                                                    onClick={() => setPage(index + 1)}>{index + 1}</div>
                                            </>
                                        )
                                    })
                                }
                                <MdKeyboardDoubleArrowRight onClick={() => handleNext()} className='bg-primary w-7 h-7 cursor-pointer' />
                            </div>
                        </div> : ""
                }
            </div>
        </div>
    );
};

export default Houses;