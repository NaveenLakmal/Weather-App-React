import { useEffect, useState } from "react";
import '../componets/HomeNew.css'

export default function HomeNew() {

    const [weather, setWeather] = useState({
        name: 'Name',
        region: 'Region',
        country: 'Country',
        data_Location: 'Date & Location',
        temp: '25.5',
        cloudy: 'Cloudy',
        img: ''
    })

    const [svalue, setSvalue] = useState("panadura");

    // const [weather, setWeather] = useState({
    //     name: 'Name',
    //     region: 'Region',
    //     country: 'Country',
    //     data_Location: 'Date & Location',
    //     temp: 'Temp',
    //     cloudy: 'Cloudy',
    //     img: ''
    // })


    useEffect(() => {
        const btnSearch = document.getElementById('btn-search');
        btnSearch.addEventListener('click', () => {
            const searchValue = document.getElementById('txt-search').value;
            setSvalue(searchValue)
            console.log(searchValue + "kaya");

            fetch(`http://api.weatherapi.com/v1/current.json?key=b2f37cbc9a7d45ab95142554242502&q=${searchValue}`)
                .then(Response => Response.json())
                .then(data => {
                    setWeather(
                        {
                            name: data.location.name,
                            region: data.location.region,
                            country: data.location.country,
                            data_Location: data.location.localtime,
                            temp: data.current.temp_c + 'C',
                            cloudy: data.current.condition.text,
                            img: data.current.condition.icon
                        }
                    )
                }).catch(error => console.log('error', error));

        });

        //     

    }, [])




    return (
        <div>

            <div className="container">

                <div className="row">
                    <h1 className="country">{weather.country}</h1>
                    <h2 className="province">{weather.region}</h2>
                    <h3 className="city">Colombo</h3>
                </div>

                <div className="d-flex">
                    <img src={weather.img} alt="api Jpg" />
                    <h1 className="temperature">{weather.temp}</h1>
                </div>

                <div className="row">
                    <h3 className="status">{weather.cloudy}</h3>
                </div>

                <div className="searchFormDiv">
                    <div className="d-flex " >

                        <input className="form-control me-3 mt-5  ms-3 " id="txt-search" placeholder="Search" />
                        <button className="btn btn-primary mt-5 me-3" id="btn-search" >Search</button>

                    </div>
                </div>



                {/* <div className="row">
                <p className="province">Western</p>
                </div> */}


                <div className="row">

                    {/* <input type="text" id="txt-search" className="form-control" placeholder="Enter location" />
                    <button id="btn-search">Search</button> */}

                </div>
                <div className="row">
                    <section>
                        <h1>{weather.name}</h1>
                        <h1></h1>
                        <h1></h1>
                    </section>
                </div>
            </div>






            <div class="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div class="col-md-4 d-flex align-items-center">
                        <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                            <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap" /></svg>
                        </a>
                        <span class="mb-3 mb-md-0 text-body-secondary">&copy; 2024 Company, Inc</span>
                    </div>

                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter" /></svg></a></li>
                        <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram" /></svg></a></li>
                        <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook" /></svg></a></li>
                    </ul>
                </footer>
            </div>

        </div>

    )
}