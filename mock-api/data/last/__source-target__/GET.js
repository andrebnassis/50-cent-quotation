const mockedResponse = {
    "USDBRL":{
    code: "USD",
    codein: "BRL",
    name: "Dólar Americano/Real Brasileiro",
    high: "5.4329",
    low: "5.4329",
    varBid: "0.0005",
    pctChange: "0.01",
    bid: "5.4324",
    ask: "5.4334",
    timestamp: "1643232601",
    create_date: "2022-01-26 18:30:01"
}
};

module.exports = (req, res) => {
    return res.status(200).send(mockedResponse);
};

// Sending just the status
// module.exports = (req, res) => res.sendStatus(403);

// you can learn more at https://www.npmjs.com/package/connect-api-mocker
