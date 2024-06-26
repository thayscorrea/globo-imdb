import CallToAction from "../components/CallToAction";
import CarouselBlock from "../components/CarouselBlock";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

const Home = ({ items }) => {
  return (
    <>
      <SeoHead title='Home' />
      <Layout>
        <CarouselBlock items={items} />
        <CallToAction />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const items = await fetch(`http://localhost:8000/movies`).then(res => res.json());

  return {
      props: {
          items: items,
      },
  }
}

export default Home