import { object, string, number } from "yup";

export const createBidSchema = object({
    body: object({
        sym: string().required("sym is required."),
        amt: number().required("amt is required."),
        rat: number().required("rat is required."),
    })
})