import {useGetAllProductsQuery, useGetProductQuery} from "../features/slice/apiSlice"

export const Data=()=>{

    const {data:allProductData}=useGetAllProductsQuery();
    const {data:productData}=useGetProductQuery("iphone");
    console.log(allProductData);
    console.log(productData);

    return(<div>Data by rtx query:</div>)
}