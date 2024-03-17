import { MouseEventHandler } from "react"


export interface CustomButtonProps {
    title: string
    containerStyles?: string
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit"
    textStyles?:string
    rightIcon?:string
    isDisabled?:boolean
}

export interface SearchManufacturerProps{
    manufacturer: string
    setManufacturer: (manufacturer:string)=>void
}
export interface CarProps{
city_mpg: number,
class:string,
combination_mpg:number,
cylinder:number,
displacement:number,
fuel_type:string,
drive:string,
highway_mpg:number,
make:string,
model:string,
transmission:string,
year:number
}