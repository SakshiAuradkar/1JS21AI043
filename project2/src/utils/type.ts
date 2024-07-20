export interface APIObject{
    companyName: String
    categoryName: String
    top: Number
    minPrice: Number
    maxPrice: Number
}

export interface Product {
    id?: string,
    category?: string, 
    productName: string, 
    price: number, 
    rating: number, 
    discount: number, 
    availability: string
}