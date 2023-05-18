import React from 'react'

function TopButton ({setQuery}) {
    const cities = [
        {
            id:1,
            title: "Helsinki",
        },
        {
            id:2,
            title: "Ha Noi",
        },
        {
            id:3,
            title: "Ho Chi Minh",
        },
        {
            id:4,
            title: "Long An",
        },
        {
            id:5,
            title: "Thanh Hoa",
        },
    ];
    
    return (
    <div className="flex items-center justify-around my-6">
    {cities.map((city) => (

        <button key={city.id} className="text-white text-lg font-medium"
        onClick={() => setQuery({q: city.title})}
        >
            {city.title}
            </button>

    ))}
    </div>
    )
}

export default TopButton