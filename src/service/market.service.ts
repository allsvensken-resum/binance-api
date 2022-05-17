import log from "../logger"
import config from "config"
import { createHmac } from "crypto"
import axios from "../axios"
import { BidRequest, BidResponse } from "../interface/bid.interface"
import { AppError, internalServerError } from "../interface/err.interface"
import { TickerRequest, TickerResponse } from "../interface/ticker.interface"

const basePath = "/market"

export const getTickerInfo = async (data: TickerRequest): Promise<TickerResponse | AppError> => {
    let respErr
    const resp = await axios.get<TickerResponse>(`${basePath}/ticker?sym=${data.sym}`).catch(err => {
        respErr = err
        log.error(err)
    })

    if (!resp || respErr) return internalServerError
    return resp.data
}

export const placeBid = async (data: BidRequest): Promise<BidResponse | AppError> => {
    let tsErr
    const ts = await getServerTime().catch(e => {
        tsErr = e
        log.error(e);
    })

    if (tsErr || !ts) return internalServerError

    const req = data;
    req.ts = ts.data

    const signature = signJson(req);
    req.sig = signature;

    let bidErr
    const bidResponse = await axios.post<BidResponse>(`${basePath}/place-bid/test`, req).catch(e => {
        bidErr = e
        log.error(e)
    })

    if (!bidResponse || bidErr) return internalServerError;
    return bidResponse.data
}

const getServerTime = () => {
    return axios.get<number>("/servertime")
}

const encodeJson = (data: any): string => {
    return JSON.stringify(data);
}

const signJson = (data: any): string => {
    const stringJson = encodeJson(data)
    log.info(`Signing payload: ${stringJson}`)
    const secret = config.get("api_secret_key") as string
    const h = createHmac("sha256", secret)
        .update(stringJson)
        .digest("hex");
    log.info(`Signature : ${h}`)
    return h;
}