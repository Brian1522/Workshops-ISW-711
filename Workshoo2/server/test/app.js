const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());


app.get('/tipocambio', function (req, res) {
  if(req.query.tipo == 'euro') {
    res.json({
      "TipoCompraEuros" : "731.85",
      "TipoVentaEuros" : "761.9"
    });
  } else {
    res.json({
      "TipoCompraDolares" : "621",
      "TipoVentaDolares" : "621"
    });
  }
});

app.listen(3001, () => console.log(`BBCR Exchange type service listening on port 3001!`))