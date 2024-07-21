import React, {useState, useEffect} from 'react'
import Image from 'next/image';
import { useDispatch,useSelector } from 'react-redux';

import { Item } from '@/typescript/cart.interface';
import { add } from '@/Redux/Cartslice';

 const AllProducts = () => {


    const [products, setProducts] = useState<Array<Item>>([])
    const dispatch = useDispatch()
    const {cart} = useSelector((state)=>state.cart);

    const getallproducts = async() => {
        
        const res = await fetch("https://fakestoreapi.com/products");
        const data =await res.json();
        setProducts(data);
        }
    

    useEffect(()=>{
    getallproducts();
        
    },[])

    
    const handleadd =(product:Item)=>{
      dispatch(add(product));
   }

   console.log(cart,"CART")

  return (
    <div className='productsWrapper'>
        <h2>All Product List</h2>
        {
        products.map((product)=>(
            <div key={product.id} className='card'>
            <Image width={500} height={800} src={product.image} alt='img'/>
            <h3>{product.title}</h3>
            <h5>{product.price}</h5>
            <button className='btn' onClick={()=>handleadd(product)}>Add To Cart</button>
            </div>
        ))}
    </div>
  )
}

export default AllProducts;

