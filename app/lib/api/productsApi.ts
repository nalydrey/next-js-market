import axios from "axios";
import { ProductsResponce } from "../models/response/products-responce.model";
import { ProductQueryBuilderDto } from "../models/dto/queryBuilder-product.dto";
import { ProductResponce } from "../models/response/product-responce.model";
import { queryString } from "object-query-string";

export const getProducts  = async (query: ProductQueryBuilderDto) => {

    const qs = queryString(query)
    
    const {data} = await axios.get<ProductsResponce>(`http://localhost:3030/api/products?${qs}`);

    const p = new Promise((res) => {
        setTimeout(() => {
          res('')
        }, 4000)
      })
  
      await p
     
    return data.products
}