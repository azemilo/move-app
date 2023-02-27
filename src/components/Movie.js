import React, { useEffect, useState } from "react"

function Movie() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(fetchData => {
                setData(fetchData);
            })
    }, [])
    console.log(data)
    return <div>
        <table>
            <tr>
                <td>
                    body
                </td>
                <td>
                    id
                </td>
                <td>
                    title
                </td>
                <td>
                    userId
                </td>
            </tr>
        </table>
    </div>
    {
        data.length ?
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                {data?.map((item, index) => (<tr key={index}>
                    <td>{item.Name}</td>
                    <td>{item.Email}</td>
                    <td>{item.Password}</td>
                </tr>))}

            </table > : "not found"
    }
}

export default Movie;

