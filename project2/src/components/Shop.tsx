"use client";
import React, { useEffect, useState } from 'react'
import useLoadingStore from '@/store/LoadingStore';
import useShopStore from '@/store/ShopStore';

import { getProducts } from '@/utils/API';
import useToastStore from '@/store/ToastStore';
import Card from './ui/Card';
import CardSkeleton from './ui/CardSkeleton';
import { Product } from '@/utils/type';

import {Products} from "@/data.json"

const Shop = () => {

    const {data} = useShopStore() as any;
    const {addToast} = useToastStore() as any;
    const {loadingStates, setLoadingStates} = useLoadingStore() as any;

    const [products, setProducts] = useState(Products);

    // useEffect(() => {
    //   setLoadingStates("get-products", true);
    //   (async () => {
    //     const response = await getProducts(data);
    //     if(!response.ok) addToast({message: "Failed to Fetch", type: "error"})
    //     else setProducts(response);
    //   })();
    //   setLoadingStates("get-products", false);
    // }, [data])

  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
      {
        loadingStates["get-products"] ?  
        <CardSkeleton />
        :
        products.map((product: Product, index: number) => {
          const id = crypto.randomUUID();
          return <Card key={index} id={id} {...product} />
        })
      }
    </div>
  )
}

export default Shop
