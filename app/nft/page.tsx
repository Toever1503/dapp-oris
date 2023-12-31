"use client"

import ProductItem from "@/components/nft/ProductItem";
import { IProduct } from "@/types/nft/IProduct";
import { useState } from "react";



export default function Page() {

  const [productList, setProductList] = useState<IProduct[]>([]);
  for (let i = 0; i < 10; ++i) {
    productList.push({
      id: 0,
      title: "test",
      image: "",
      price: Number(Number(Math.random()*1).toFixed(3))
    })
  }

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] mx-auto pt-[10px]'>

        {
          productList.map((productItem, productIndex) =>
            <ProductItem key={productIndex} productInfo={productItem} />
          )
        }
      </div>


    </>
  )
}