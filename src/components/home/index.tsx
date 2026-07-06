import { getUserInfo } from "@/services/action.setTokenToCookie";
import Banner from "./Banner";
import OrganizationJsonLd from "../jsonld/OrganizationJsonLd";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alphaclub.ae";

const HomePage = async () => {
  return (
    <div>
      <OrganizationJsonLd
        name="Alpha Club UAE"
        url={baseUrl}
        // logo={`${baseUrl}/logo.png`}
        // sameAs={["https://facebook.com/alphaclubuae", "https://instagram.com/alphaclubuae"]}
      />
      <Banner />
    </div>
  );
}

export default HomePage;