import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "🟢 Aadhaar Family Info API by @Mr_Itachi007",
    usage: "/fetch?aadhaar=YOUR_AADHAAR_NUMBER"
  });
});

app.get("/fetch", async (req, res) => {
  const { aadhaar, key } = req.query;

  if (!aadhaar || key !== "Itachi007") {
    return res.status(400).json({
      success: false,
      error: "❌ Missing or invalid parameters. Example: /fetch?aadhaar=889006376974&key=Itachi007",
      credit: "@Mr_Itachi007"
    });
  }

  try {
    const apiUrl = `https://family-members-n5um.vercel.app/fetch?aadhaar=${aadhaar}&key=paidchx`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    res.json({
      success: true,
      name: "Itachi",
      key: "Itachi007",
      data,
      credit: "@Mr_Itachi007"
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
      credit: "@Mr_Itachi007"
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

export default app;
