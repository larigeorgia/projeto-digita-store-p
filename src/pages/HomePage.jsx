import Layout from "../components/Layout"
import Section from "../components/Section"
import Slide from "../components/Slide"
import Img from "../components/Img"
import ProductListing from "../components/ProductListing"
import produtos from "../BD"

const HomePage = () => {
  return (
    <Layout>
        <Slide />
        <Section title="Coleções em Destaque">
          <Img img={produtos}>
          </Img>
        </Section>
        <Section title="Produtos em alta">
          <ProductListing />
        </Section>
    </Layout>
  )
}

export default HomePage

/* <Section props={aquelalista}/> */
// valor={3}