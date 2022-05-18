import { Express, Request, Response } from "express"
import { handleBid, handleTickerInfo } from "./controller/market.controller"
import log from "./logger"
import { createTickerSchema } from "./schema/ticker.schema"
import { getTickerInfo, placeBid } from "./service/market.service"
import validateRequest from "./middleware/validateRequest"
import { createBidSchema } from "./schema/bid.schema"

export default function (app: Express) {
    app.get("/api/healthcheck", (req: Request, res: Response) => {
        res.sendStatus(200)
    })

    app.post("/api/market/ticker", validateRequest(createTickerSchema), handleTickerInfo)
    app.post("/api/market/place-bid/test", validateRequest(createBidSchema), handleBid)

}