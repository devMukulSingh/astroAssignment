import {z} from "zod"

export const createPostSchema = z.object({
    title: z.string().trim().min(1,{
        message:"Title is required"
    }).max(30,{
        message:"Max 30 characters allowed"
    }),
    description: z.string().trim().min(1, {
        message: "Description is required"
    }).max(500,{
        message:"Max 500 characters allowed"
    }),
})