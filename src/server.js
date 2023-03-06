const app = require('./app');
const connection = require('./db/connection');

const PORT = 3000;

app.listen(PORT, async () => {
  console.log(`API TrybeCash está sendo executada na porta ${PORT}`);

  // O código abaixo é só para testarmos a comunicação com o MySQL e pode ser retirado depois.
  const [result] = await connection.execute('SELECT 1');
  if (result) {
    console.log('MySQL connection OK');
  }
});