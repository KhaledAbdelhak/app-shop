const router = require('express').Router();
const KEY = process.env.PASSWORD_SECRET
const stripe = require('stripe')("sk_test_51KDTYWLPOvCz4gtPSOZv7stzCvhdG140K87uX9syhlcLoJwl1TSe1qUiboS5cXQpn5m08faBXtDxS0cnKsW6gKlP00TzXuYa3s")

console.log(KEY);

router.post("/payment", (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "eur"
    }, (stripeErr, stripeRes) => {
        if(stripeErr) {
            res.status(500).json(stripeErr)
        }
        else {
            res.status(200).json(stripeRes)
        }
    })
})

module.exports = router;