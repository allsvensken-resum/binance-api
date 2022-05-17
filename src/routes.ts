import { Express, Request, Response } from "express"
import log from "./logger"
import { placeBid } from "./service/market.service"

export default function (app: Express) {
    app.get("/api/healthcheck", (req: Request, res: Response) => {
        res.sendStatus(200)
    })

    app.get("/api/market/ticker", (req: Request, res: Response) => {
        res.sendStatus(200)
    })

    app.post("/api/market/place-bid/test", (req: Request, res: Response) => {
        placeBid(req.body)
            .then((data) => {
                res.send(data)
                res.sendStatus(200)
            }).catch((err) => {
                res.send(500)
            })
    })

}