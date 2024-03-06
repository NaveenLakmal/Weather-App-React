import { useEffect, useState } from "react";

function Home() {

    // const apikey=b2f37cbc9a7d45ab95142554242502;
    let districkValue;

   // const[number,setNumber]=useState(50)
    const [whether, setWeather] = useState(
        {
            name: 'Name',
            region: 'Region',
            country: 'Country',
            data_Location: 'Date & Location',
            temp: 'Temp',
            cloudy: 'Cloudy',
            img: ''
        }
    );

    useEffect(() => {
        const searchBtn = document.getElementById('search-btn');
        searchBtn.addEventListener('click', () => {
            const searchValue = document.getElementById('txtSearch').value;
            const requestOptions = {
                method: 'GET'
            };


            fetch(`http://api.weatherapi.com/v1/current.json?key=b2f37cbc9a7d45ab95142554242502&q=${searchValue}`, requestOptions)
                .then(Response => Response.json())
                .then(data => {
                    setWeather({
                        name: data.location.name,
                        region: data.location.region,
                        country: data.location.country,
                        data_Location: data.location.localtime,
                        temp: data.current.temp_c + 'C',
                        cloudy: data.current.condition.text,
                        img: data.current.condition.icon
                    });

                })
                .catch(error => console.log('error', error));
        });

    }, []);



    return (
        // <div className="main div">
        //     <div className="nav">
        //         <nav className="navbar navbar-expand-lg bg-body-tertiary">
        //             <div className="container-fluid">
        //                 <a className="navbar-brand" href="#">Weather</a>
        //                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                     <span className="navbar-toggler-icon"></span>
        //                 </button>
        //                 <div className="collapse navbar-collapse" id="navbarSupportedContent">

        //                     <form className="d-flex" role="search">
        //                         <input className="form-control me-2" id="txtSearch" type="search" placeholder="Search"  />
        //                         <button className="btn btn-outline-success" type="submit" id="search-btn">Search buttn</button>
        //                     </form>
        //                 </div>
        //             </div>
        //         </nav>
        //     </div>



        //     <div>
        //         <section id="current-weather">
        //             <h1 className="heders">Current Weather🍃</h1>
        //             <div>

        //                 <h1 id="name">{whether.name}</h1>
        //                 <h1 id="region">{whether.region}</h1>
        //                 <h1 id="country">{whether.country}</h1>
        //                 <h1 id="time">{whether.data_Location}</h1>
        //                 <h1 id="temp">{whether.temp}</h1>
        //                 <h1 id="cloudy">{whether.cloudy}</h1>
        //                 <img id="img" src={whether.img} alt="" />


        //             </div>

        //         </section>
        //     </div>
        // </div>




        // 

        <div>
            <header>

                <h1 className="title"><b>Weather</b> Forecast</h1>

                <div className="user-interface">
                    <input type="text" id="txtSearch" placeholder="Enter location" />
                    <button id="search-btn">Search</button>

                </div>

            </header>

            <section >
                <h1 className="heders">Current Weather🍃</h1>
                <div>

                    <h1 id="name">{whether.name}</h1>
                    <h1 id="region">{whether.region}</h1>
                    <h1 id="country">{whether.country}</h1>
                    <h1 id="time">{whether.data_Location}</h1>
                    <h1 id="temp">{whether.temp}</h1>
                    <h1 id="cloudy">{whether.cloudy}</h1>
                    <img id="img" src={whether.img} alt="" />


                </div>

            </section>

        </div>



    )
}
export default Home;