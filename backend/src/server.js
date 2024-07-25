const app = require(".");
const connectDb = require("./config/db");

const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
    await connectDb();
    console.log(`Server running on port http://localhost:${PORT}`)
});