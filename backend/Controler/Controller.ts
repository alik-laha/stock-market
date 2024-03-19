import { Request, Response } from 'express';
export const Searchdata=(req:Request,res:Response)=> {
    try {
        const {searchData}=req.body
        if (searchData) {
            const encodedInput = encodeURIComponent(searchData);
            fetch(`https://groww.in/v1/api/search/v1/entity?app=false&page=0&q=${encodedInput}&se`)
                .then((res) => res.json())
                .then((data) => {
                    return res.json({data: data})
                })
        }
    }
    catch (err){
        console.log(err)
        return res.status(400).json({message:"Error Occured",err:err})
    }
}