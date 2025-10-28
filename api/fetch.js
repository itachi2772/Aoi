// api/fetch.js
export default async function handler(req, res) {
  try {
    const { aadhaar, key } = req.query;

    if (!aadhaar) {
      return res.status(400).json({ error: "Missing 'aadhaar' parameter" });
    }

    if (!key || key !== "itachi007") {
      return res.status(401).json({ error: "Invalid or missing key. Use key=itachi007" });
    }

    const upstreamUrl = `https://family-members-n5um.vercel.app/fetch?aadhaar=${encodeURIComponent(aadhaar)}&key=paidchx`;
    const response = await fetch(upstreamUrl);

    if (!response.ok) {
      return res.status(500).json({ error: "Upstream API error" });
    }

    const data = await response.json();

    const finalResponse = {
      name: "Itachi",
      ...data,
      credit: "by @Mr_Itachi007"
    };

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(finalResponse);
  } catch (e) {
    res.status(500).json({ error: "Server error", detail: e.message });
  }
}
