import { Express, Request, Response } from "express"
import { handleBid, handleTickerInfo } from "./controller/market.controller"
import log from "./logger"
import { getTickerInfo, placeBid } from "./service/market.service"

export default function (app: Express) {
    app.get("/api/healthcheck", (req: Request, res: Response) => {
        res.sendStatus(200)
    })

    app.get("/api/market/ticker", handleTickerInfo)
    app.post("/api/market/place-bid/test", handleBid)

}