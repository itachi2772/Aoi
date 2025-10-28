import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "🟢 Aadhaar Family Info API by @Mr_Itachi007",
    usage: "/fetch?aadhaar=YOUR_AADHAAR_NUMBER&key=Itachi007"
  });
});

// Fetch route
app.get("/fetch", async (req, res) => {
  const { aadhaar, key } = req.query;

  // Key validation
  if (key !== "Itachi007") {
    return res.status(401).json({ error: "❌ Invalid API Key" });
  }

  if (!aadhaar) {
    return res.status(400).json({ error: "❌ Please provide aadhaar number" });
  }

  try {
    // Example external API
    const apiUrl = `https://family-members-n5um.vercel.app/fetch?aadhaar=${aadhaar}`;
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
    res.status(500).json({ error: "Server Error", details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
