import { queryString } from "object-query-string"
import { CategoryQueryBuilderDto } from "../models/dto/queryBuilder-category"
import axios from "axios"
import { CategoriesResponce } from "../models/response/categories-responce"

  export const getCategories = async (query: CategoryQueryBuilderDto) => {
    const qs = queryString(query)
    const {data} = await axios.get<CategoriesResponce>(`http://localhost:3030/api/categories/many?${qs}`)

    const p = new Promise((res) => {
      setTimeout(() => {
        res('')
      }, 4000)
    })

    await p

    return data.categories
  }