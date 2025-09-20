import Country from "../Country";

const CountriesData = fetch("https://openapi.programming-hero.com/api/all").then((res)=>res.json())

const Contries = () => {
    return (
        <div className="flex justify-center items-center mx-auto">
            <Country country={CountriesData}/>
        </div>
    );
};

export default Contries;