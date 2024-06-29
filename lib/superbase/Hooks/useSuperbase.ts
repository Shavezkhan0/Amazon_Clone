"use client"
import { useState } from "react"
import { superbase } from "../products";

export const useSuperbase = () => {
    const [products, setProducts] = useState<any[]>([])
    const [filterData, setfilterData] = useState<any[]>([])
    const [singleProduct, setSingleProduct] = useState<any[]>([])
    const [mensProduct, setmensProduct] = useState<any[]>([])
    const [womensProduct, setwomensProduct] = useState<any[]>([])

    const getDataFromSuperbase = async () => {
        let { data, error } = await superbase.from('projects').select("*")

        if (data) {
            setProducts(data)

        }
        if (error) {
            console.log(error);
        }

    }

    const getFilterData = async (query: string) => {
        let { data, error } = await superbase.from('projects').select("*").or(`title.ilike.%${query}% , description.ilike.%${query}% , category.ilike.%${query}%`)

        if (data) {
            setfilterData(data)

        }
        if (error) {
            console.log(error);
        }

    }

    const getSingleProduct = async (id: number) => {
        let { data, error } = await superbase.from('projects').select("*").eq('id', id);
        if (data) {
            setSingleProduct(data);
        }
        if (error) {
            console.log(error);
        }

    }

    const getmensProducts = async () => {
        let { data, error } = await superbase.from('projects').select("*").ilike('category', `men's clothing`)
        if (data) {
            setmensProduct(data);
        }
        if (error) {
            console.log(error);
        }
    }

    const getwomensProducts = async () => {
        let { data, error } = await superbase.from('projects').select("*").ilike('category', `women's clothing`)
        if (data) {
            setwomensProduct(data);
        }
        if (error) {
            console.log(error);
        }
    }



    return {
        products,
        getDataFromSuperbase,
        filterData,
        getFilterData,
        singleProduct,
        getSingleProduct,
        mensProduct,
        getmensProducts,
        womensProduct,
        getwomensProducts,

    }
}