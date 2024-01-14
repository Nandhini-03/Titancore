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

export const DynamicDescription=atom(
    {
        key:"DynamicDescription",
        default:""
    }
)

export const SearchValues=atom(
    {
        key:"SearchValues",
        default:""
    }
)
