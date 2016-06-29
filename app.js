const http = require('http')
const Bot = require('messenger-bot')
const process = require('process')

let bot = new Bot({
  token: 'EAAO18AsM3GkBAGp2IEgxMJ0nfHKWhg4Hb6AOak5j8bltj0TmOqkmu558pJ1oho36TZByTqMQbLEh9Li95Sx0IB4bv6TCZChJGyZAdUJT1fRrhfEJqLQUhAIPxXFpzEOKtfoDC6H4gTXxWI8LWmRwXVHlYvjGpzemZB26RraeOAZDZD',
  verify: 'helloworld',
  app_secret: '97431de067de9a6a581a5984b3b0c1c7'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err

      console.log(`${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

http.createServer(bot.middleware()).listen(process.env.PORT)
console.log('서버 뜸')
