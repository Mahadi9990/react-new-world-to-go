import React from 'react';

function CountryCard({alldata}) {
    return (<>
            {alldata && alldata.length > 0 ?
                alldata.map((item)=>
                    <div className='h-72 w-92 shadow-2xl p-3 rounded-2xl' key={item.cca3.cca3}>
                    <img className='w-full object-cover h-[80%]' src={item.flags.flags.png} alt={item.flags.flags.png} />
                    <h1 key={item.cca3.cca3}>
                        {item.capital.capital[0]}
                    </h1>
                    </div>
                )
            :null}
    </>
    );
}

export default CountryCard;