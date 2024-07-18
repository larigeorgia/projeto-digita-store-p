import Layout from "../components/Layout"
import Section from "../components/Section"
let conteudoDaPrimeiraSection = "Coleções em Destaque"

const HomePage = () => {
  return (
    <Layout>
        <Slide />
        <Section props={conteudoDaPrimeiraSection}>
          <h1>Coleções em Destaque</h1>
          <Img />
        </Section>
        <Section>
          <h1>Produtos em Alta</h1>
          <ProductList props={3} />
        </Section>
    </Layout>
  )
}

export default HomePage

{/* <Section props={aquelalista}/> */}