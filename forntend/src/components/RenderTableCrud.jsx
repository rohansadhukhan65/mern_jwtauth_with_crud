import React from 'react'
import {useSelector} from 'react-redux'

const RenderTableCrud = () => {
    const {read} = useSelector((state)=>state) 
    console.log(read)
    return (
        <div className='mx-0 my-5 sha rounded-3'>
            <table className="table table-dark ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                    </tr>
                </thead>
                <tbody>
                    {read.map((d,index)=>(

                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{d.fullName}</td>
                                <td>{d.email}</td>
                                <td>{d.pwd}</td>
                            </tr>
                        ))}
                    
                    
                </tbody>
            </table>
        </div>
    )
}

export default RenderTableCrud
