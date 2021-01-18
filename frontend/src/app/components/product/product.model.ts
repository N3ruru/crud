import { interval } from "rxjs";

export interface Product{
    id?: number
    name: string
    price: number | null
}