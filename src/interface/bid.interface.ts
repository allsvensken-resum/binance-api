export interface BidRequest {
    sym: string;
    type: string;
    amt: number;
    rate: number;
    ts?: number;
    sig?: string
}

export interface BidResponse {
    error: number
    result: BidResult
}

export interface BidResult {
    id: number
    hash: string
    typ: string
    amt: number
    rat: number
    fee: number
    cre: number
    rec: number
    ts: number
}

export interface BidError {
    message: string
}
