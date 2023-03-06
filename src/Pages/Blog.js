import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../data'

export const Blog = () => {

    return (
        <div>Blog

            {data.map(blog => <div key={blog.id}>
                <h4>{blog.title}</h4>
                <Link to={`/blog/${blog.id}`}><button>read more</button></Link>
            </div>)}
        </div>
    )
}