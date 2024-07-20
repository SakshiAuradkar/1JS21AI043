import { APIObject } from "@/utils/type"

export async function getProducts({companyName, categoryName, top, minPrice, maxPrice} : APIObject){
    const response = await fetch(
        `http://20.244.56.144/test/companies/${companyName}/categories/${categoryName}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`, 
        {
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        }
    )
    if (!response.ok) console.log("Wrong")
    return await response.json();
}