const functions = require("firebase-functions")
const express = require("express")
const cors = require("cors")
const { expressServer } = require("./__sapper__/build/server/server")

const api = express()

api.use(
  cors({
    origin: [
      //add cors here
    ],
    preflightContinue: true,
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
)

exports.ssr = functions.https.onRequest(expressServer)
exports.api = functions.https.onRequest(api)
