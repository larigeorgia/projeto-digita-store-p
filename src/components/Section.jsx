// let conteudos = [
//   {nome: "",
//   conteudo: <img src="" alt="" />

//   },
//   {
//   nome:"",
//   conteudo: <ProductList />
//   }
// ]


const Section = ({ children }) => {
  return (
    <main>
      { children }
    </main>
    // <h1>{conteudos[0].nome}</h1>,
    // <div className="">Section</div>
  )
}

export default Section