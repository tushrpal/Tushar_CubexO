import {useGetAllProductsQuery, useGetProductQuery} from "../features/slice/apiSlice"

export const Data=()=>{

    const {data:allProductData,isLoading,isError,error}=useGetAllProductsQuery();
    const {data:productData}=useGetProductQuery("iphone");
    
    console.log(allProductData);
    console.log(productData);

    if(isLoading){
        return <h1>Loading....</h1>
    }else{
        return (
  <div>
    <h2>All Products</h2>
    <ul>
      {allProductData?.products?.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  </div>
);

    }
    return(<div>Data by rtx query:</div>)
}