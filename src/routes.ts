import { Express, Request, Response } from "express"
import log from "./logger"
import { getTickerInfo, placeBid } from "./service/market.service"

export default function (app: Express) {
    app.get("/api/healthcheck", (req: Request, res: Response) => {
        res.sendStatus(200)
    })

    app.get("/api/market/ticker", (req: Request, res: Response) => {
        getTickerInfo(req.body).then((data) => {
            res.send(data)
        }).catch(err => {
            res.sendStatus(500)
            log.error(err)
        })
    })

    app.post("/api/market/place-bid/test", (req: Request, res: Response) => {
        placeBid(req.body)
            .then((data) => {
                res.send(data)
            }).catch((err) => {
                res.sendStatus(500)
                log.error(err)
            })
    })

}