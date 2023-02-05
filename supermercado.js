var items =[];
document.querySelector("input[type=submit]")
.addEventListener("click",()=>{
    // pegando  nomeProduto e precoProduto
    var nomeProduto = document.querySelector("input[name =nome_produto]");
    var precoProduto = document.querySelector("input[name= price");
    //add no array
    items.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    });
   // alert(nomeProduto);

 let listaProdutos = document.querySelector(".lista-produtos");
 let soma =0;
 listaProdutos.innerHTML="";// limpando a lista para não add o mesmo produto
  items.map(function(val){
    soma +=parseFloat(val.valor);
    listaProdutos.innerHTML+=`
        <div class="lista-produto-single">
            <h3>`+val.nome+`</h3>
            <h3 class ="price-produto"><span>R$`+val.valor+`</span></h3>
        </div>

    `;
  });
  // alert(items[0].nome);
   soma = soma.toFixed(2);
   nomeProduto.value ="";
   precoProduto.value=""

   let elementoSoma = document.querySelector('.soma-produto h1');
   elementoSoma.innerHTML ="R$"+soma;
});
document.querySelector("button[name=limpar]")
.addEventListener("click",()=>{
    items =[];
    document.querySelector(".lista-produtos").innerHTML ="";
    document.querySelector('.soma-produto h1').innerHTML ="R$0";
})// deletar items  da lista usando filter
