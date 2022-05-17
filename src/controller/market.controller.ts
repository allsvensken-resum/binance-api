import { getTickerInfo, placeBid } from "../service/market.service";
import { Request, Response } from "express"
import log from "../logger";

export const handleTickerInfo = async (req: Request, res: Response) => {
    try {
        const data = await getTickerInfo(req.body);
        res.send(data)
    } catch (err) {
        log.error(err)
        res.status(500).send(err)
    }
}

export const handleBid = async (req: Request, res: Response) => {
    try {
        const data = await placeBid(req.body)
        res.send(data)
    } catch (err) {
        log.error(err)
        res.status(500).send(err)
    }
}