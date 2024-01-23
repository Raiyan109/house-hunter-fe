
const House = ({ house }) => {

    return (
        <div>
            <div className='p-4 space-y-3 hover:bg-primary bg-neutral group transition-all cursor-pointer relative'>
                <img src={house.image} alt="" className='w-72 h-56' />
                <div className='absolute top-4 left-4 flex justify-between'>
                    {/* <img src={house.for} alt="" className='w-20 h-20 object-contain' /> */}
                    <button className="bg-primary py-1 px-2 rounded-full">{house.city}</button>
                </div>
                <div className='absolute top-4 right-8 flex justify-between'>
                    {/* <img src={house.love} alt="" className='w-10 h-10 object-contain' /> */}
                    <button className="bg-primary py-1 px-2">{house.size} sqft.</button>
                </div>
                <div className='flex items-center justify-between'>
                    <h1 className='text-orange-500 font-bold group-hover:text-white/75'>{house.name}</h1>
                    <div className='bg-orange-500 text-white px-3'>
                        <h1>{house.rent}</h1>
                    </div>
                </div>
                <p className='max-w-[250px] text-sm text-secondary group-hover:text-neutral'>{house.desc}</p>
                <p className='max-w-[250px] text-sm text-secondary group-hover:text-neutral'>Phone : <span className="text-orange-400">{house.phone}</span></p>
                <p className='max-w-[250px] text-sm text-secondary group-hover:text-neutral'>Address : <span className="text-orange-400">{house.address}</span></p>
                <hr />
                <div className='flex items-center gap-3 group-hover:text-white/75'>
                    <div className='flex items-center gap-2'>
                        {/* <img src={icon} alt="" /> */}
                        <h1>Beds: {house.bedrooms}</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        {/* <img src={icon} alt="" /> */}
                        <h1>Baths: {house.bathrooms}</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        {/* <img src={icon} alt="" /> */}
                        <h1>Available on: {house.available}</h1>
                    </div>
                </div>
                <hr />
                <div className='flex justify-between items-center group-hover:text-white/75'>
                    <button>View Details</button>
                    {/* <img src={arrow} alt="" /> */}
                </div>
            </div>
        </div>
    );
};

export default House;