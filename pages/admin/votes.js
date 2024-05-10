import { routePrivate } from "../../services/routePrivate";

import Layout from "../../components/LayoutAdmin/Layout";
import SeoHead from "../../components/SeoHead";
import TableEvaluations from "../../components/Tables/Evaluations";

const Votes = ({ items }) => {

  routePrivate()

  return (
    <>
      <SeoHead title='Votes' />
      <Layout>
        <TableEvaluations items={items} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const items = await fetch(`http://localhost:8000/evaluations/movies`).then(res => res.json());

  return {
    props: {
      items: items,
    },
  }
}

export default Votes