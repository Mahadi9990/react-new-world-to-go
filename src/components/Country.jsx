import React, { use } from 'react';
import CountryCard from './CountryCard/CountryCard';

const Country = ({country}) => {
    const data = use(country)
    const alldata = data.countries
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 p-4">
            <CountryCard alldata={alldata}/>
        </div>
    );
};

export default Country;