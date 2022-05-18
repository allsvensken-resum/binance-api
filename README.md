# BITKUB PROXY RESTful API

This api is built for using bitkub api easier.

## Base URL

* The base URL is: [http://localhost:8080](http://localhost:8080)

## Endpoint types

### Non-secure endpoints (Do not need authentication)

* [POST /api/market/ticker](#post-apimarketticker)

### Secure endpoints ([Require authentication](#authentication))

* [POST /api/market/place-bid/test](#post-apimarketplace-bidtest)

## API Documentation

Refer to the following for description of each endpoint.

### POST /api/market/ticker

#### Description

Get ticker information.

#### Request body

* `sym` **string** The symbol (required)

#### Example

```javascript
{
    "sym":"BTC"
}
```

#### Response

```javascript
{
    "THB_BTC": {
        "id": 1,
        "last": 1038998.06,
        "lowestAsk": 1038998.16,
        "highestBid": 1038997.23,
        "percentChange": -1.01,
        "baseVolume": 272.29017625,
        "quoteVolume": 284533777.74,
        "isFrozen": 0,
        "high24hr": 1058000,
        "low24hr": 1020199,
        "change": -10562.26,
        "prevClose": 1038998.06,
        "prevOpen": 1049560.32
    }
}
```

### POST /api/market/place-bid/test

#### Description

Test creating a buy order (no balance is deducted).

#### Request body

* `sym` **string** The symbol (required)
* `amt` **float** Amount you wat to spend with no trailing zero (e.g 1000.00 is invalid, 1000 is ok)
* `rat` **float** Rate you want for the order with no traling zero (e.g 1000.00 is invalid, 1000 is ok)

#### Example

```javascript
{
    "sym": "BTC",
    "amt": 10,
    "rat": 260000
}
```

#### Response
```javascript
{
  "error": 0,
  "result": {
    "id": 1, // order id
    "hash": "fwQ6dnQWQPs4cbatF5Am2xCDP1J", // order hash
    "typ": "limit", // order type
    "amt": 1000, // spending amount
    "rat": 15000, // rate
    "fee": 2.5, // fee
    "cre": 2.5, // fee credit used
    "rec": 0.06666666, // amount to receive
    "ts": 1533834547 // timestamp
  }
}
```

## Authentication
* This application use [config](https://www.npmjs.com/package/config) to read config file.
* There is [default.ts file](https://github.com/allsvensken-resum/bitkub-api/blob/main/config/default.ts) that you can set your `API_KEY` as **api_key** and `API_SECRET` as **api_secret_key** in javascript object in the file.
