export default function handler(req, res) {
  res.setPreviewData({ name: "preview" });
  res.end("enabled preview");
  res.redirect(req.query.redirect);
}
