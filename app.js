// ** 3. Parti Modüller
import app from "./server/server.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} üzerinde başarıyla başlatıldı `);
});
