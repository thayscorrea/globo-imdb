import Pricing from "../components/Pricing";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title='Home' />
      <Layout>
        <Pricing />
      </Layout>
    </>
  );
}
