// let conteudos = [
//   {nome: "",
//   conteudo: <img src="" alt="" />

//   },
//   {
//   nome:"",
//   conteudo: <ProductList />
//   }
// ]

const Section = ({ children, title}) => {
  return (
    <div>
      <h1>{title}</h1>
    <div class="flex flex-wrap">
      { children }
    </div>
    </div>
    
    // <h1>{conteudos[0].nome}</h1>,
    // <div className="">Section</div>
  )
}

export default Section