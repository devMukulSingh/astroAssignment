import { z } from "zod";
import { createPostSchema } from "./schema";


export type TcreatePostSchema = z.infer<typeof createPostSchema>

export type TPost = TcreatePostSchema & {
    createdAt:string,
    updatedAt:string,
_id:string
}