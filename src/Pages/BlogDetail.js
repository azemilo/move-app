import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../data'

export const BlogDetail = () => {

    const param = useParams()
    console.log(param);
    return (
        <div>BlogDetail
            {data.filter(blog => blog.id === Number(param.id)).map(blog => <div key={blog.id}>
                <h4>{blog.title}</h4>
                <p>{blog.body}</p>
            </div>)}
        </div>
    )
}