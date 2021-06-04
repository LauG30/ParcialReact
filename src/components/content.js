import React, { useState, useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Card, CardText, CardBody, CardSubtitle, CardHeader } from 'reactstrap';

function Content() {
    const [dropdown, setDropdown] = useState(false);

    const [data, setData] = useState([]);
    const url = 'https://jsonplaceholder.typicode.com/posts';

    const abrirDropdown = () => {
        setDropdown(!dropdown);
    }

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`${url}`)
                .then(response => response.json())
                .then(json => setData(json))
                .catch(error => console.log(error))
        }
        fetchData()
    }, [])

    return (
        <div>
            <div className="contenedor">

                <div className="buscar">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg></span>
                        <input type="text" class="form-control" placeholder="Search for a country..." aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>

                <div className="filtro">
                    <Dropdown isOpen={dropdown} toggle={abrirDropdown}>

                        <DropdownToggle caret className="colorDropdown">
                            Filter by Region <span></span>
                        </DropdownToggle>

                        <DropdownMenu>
                            <DropdownItem>Africa</DropdownItem>
                            <DropdownItem>America</DropdownItem>
                            <DropdownItem>Asia</DropdownItem>
                        </DropdownMenu>

                    </Dropdown>
                </div>
            </div>

            <div className="api">
                {data.map((person, idx) => (
                    <div key={`key_${person._id}`} className="card">

                        <Card>
                            <CardHeader>{idx + 1}</CardHeader>
                            <CardBody>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{person.title}</CardSubtitle>
                                <CardText>{person.body}</CardText>
                            </CardBody>
                        </Card>

                    </div>
                ))}
            </div>
        </div>


    );
}

export default Content;
