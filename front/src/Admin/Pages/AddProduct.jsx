import React, { useEffect, useState } from 'react'
import ProductModal from '../Components/ProductModal'
import axios from 'axios'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { AppRoute } from '../../App'

export default function Products() {

    const [Product, setProduct] = useState([])
    useEffect(() => {
        axios.get(`/api/allproducts`)
            .then(json => setProduct(json.data.products))
            .catch(err => console.log(err.message))
    },[])


    
    
    const deleteproduct = (_id) => {
        axios.delete(`/api/deleteproduct/${_id}`)
            .then(response => {
                console.log(response.data.products);
                setProduct(prevProduct => prevProduct.filter(Product => Product._id !== _id));
            })
            .catch(error => {
                console.error('Error deleting Product:', error);
            });
    };
    

   
    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center bg-warning p-2 my-3 rounded">
                <span className='fs-4 fw-bold text-white'>Products</span>
                <ProductModal reCallToData={setProduct} />
            </div>

            <div className="container">
                <table className="table align-middle">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                            <th scope="col">Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            Product?.map((val, key) =>
                                <tr key={key}>
                                    <td><img src={val.thumbnail} className='img-fluid rounded-circle border border-secondary' style={{ height: '10vh', aspectRatio: 1 / 1, objectFit: 'contain' }} alt="" srcSet="" /></td>
                                    <td>{val.productName}</td>
                                    <td>{val.category}</td>
                                    <td>{val.brand}</td>
                                    <td>{val.price}</td>
                                    <td>{val.description?.length < 20 ? val.description : val.description?.substring(0, 20) + "..."}</td>
                                    <td className='d-flex justify-content-between'>
                                        <button className="btn btn-dark" onClick={() => deleteproduct(val._id)}><AiOutlineDelete /></button>
                                      

                                    </td>



                                </tr>)
                        }



                    </tbody>
                </table>

            </div>
        </div>
    )
}

