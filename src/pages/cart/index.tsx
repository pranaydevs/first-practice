import React from 'react'
import { remove } from '@/Redux/Cartslice'
import { useDispatch, useSelector } from 'react-redux'



const Cartpage = () => {

    const dispatch = useDispatch();
    const {cart} = useSelector((state)=>state.cart);
    const handleRemove = (id:any)=>{
        dispatch(remove(id))
    }

  console.log(cart,"cart")

    return (
    <div>
        <h3>Cart Page</h3>
        <div className='cartWrapper'>
            {cart?.map((item:any)=>
             <div key={item.id}>
                <h2>{item.title}</h2>
                <h4>{item.price}</h4>
                <button onClick={()=>handleRemove(item.id)}>Remove </button>
             </div>
            )}
        </div>

    </div>
  )
}

export default Cartpage