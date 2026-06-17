import fs from "fs";
import path from "path";

export default function PartnerInfoPage() {
  const html = fs.readFileSync(
    path.join(process.cwd(), "public", "partner.html"),
    "utf8"
  );

  return (
    // <div dangerouslySetInnerHTML={{ __html: html }} />
    <div className="partner-info">
      {html}
    </div>
  );
}