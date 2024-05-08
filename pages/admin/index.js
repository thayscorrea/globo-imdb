import Layout from "../../components/LayoutAdmin/Layout";
import SeoHead from "../../components/SeoHead";

const Home = ({ items }) => {
  return (
    <div className="body-layout-admin">
      <SeoHead title='Home' />
      <Layout>
      </Layout>
    </div>
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