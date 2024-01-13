import axios from "axios";
import { URL } from "../Constants";


export default
{
    getStaticProducts:async() =>
    {
        try
        {
            const result=await axios.get(`${URL}/api/v1/product/staticProd`)
            console.log(result)
            return result.data
        }
        catch(error)
        {
            console.log(error)
        }
    },

    getTrendProducts:async() =>
    {
        try{
            const result=await axios.get(`${URL}/api/v1/product/dynamicProd`)
            console.log(result)
            return result.data
        }
        catch(error)
        {
            console.log(error)
        }
    }
}