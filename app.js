// ** 3. Parti Modüller
const app = require("./server/server");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} üzerinde başarıyla başlatıldı `);
});
