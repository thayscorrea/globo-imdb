import Layout from "../../components/LayoutAdmin/Layout";
import SeoHead from "../../components/SeoHead";

const Votes = ({ items }) => {
  return (
    <>
      <SeoHead title='Votes' />
      <Layout>
       
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const items = await fetch(`http://localhost:8000/users`).then(res => res.json());

  return {
    props: {
      items: items,
    },
  }
}

export default Votes