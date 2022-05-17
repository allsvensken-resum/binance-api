import { object, string, ref } from "yup";

export const createTickerSchema = object({
    body: object({
        sym: string().required("sym is required.")
    })
})