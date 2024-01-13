import {atom} from 'recoil'

export const ProductsState=atom(
    {
        key:"ProductsState",
        default:[]
    }
)

export const DynamicProducts=atom(
    {
        key:"DynamicProducts",
        default:[]
    }
)