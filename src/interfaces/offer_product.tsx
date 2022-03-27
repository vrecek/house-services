export interface ProductDetails {
   type: string,
   location: {
      country: string,
      city: string
   },
   date: string
}

export interface Product {
   name: string,
   size: string,
   text?: string,
   stars: number,
   price: number,
   img: string,
   details: ProductDetails
}