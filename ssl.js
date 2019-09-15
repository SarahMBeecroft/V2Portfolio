const get = require('simple-get')
 
get('http://portfolio.sarahbeecroft.me', function (err, res) {
  if (err) throw err
  console.log(res.statusCode) // 200
  res.pipe(process.stdout) // `res` is a stream
})