var itens = [];

document.querySelector('input[name=acao]').addEventListener('click',()=>{
    var nomeproduto = document.querySelector('input[name=nome_produto]');
    var valorproduto = document.querySelector('input[name=valor_produto');
    
    itens.push({
        nome: nomeproduto.value,
        valor: valorproduto.value
    })

    let listaprodutos = document.querySelector('.lista-produtos')
    let soma = 0;
    listaprodutos.innerHTML="";
    itens.map(function(val){

        soma+=parseFloat(val.valor);

        listaprodutos.innerHTML+=`
        
        <div class="produtos">
            <h3>`+val.nome+`</h3>
            <h3 class="valor">R$`+val.valor+`</h3>
        </div> `
        ;
    })

    soma = soma.toFixed(2);
    nomeproduto.value=""
    valorproduto.value=""

    let elementoSoma = document.querySelector('.valor-produto-total h1');
    elementoSoma.innerHTML = 'R$'+soma;
    
});

document.querySelector('button[name=limpar]').addEventListener('click', ()=>{
    itens = [];
    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.valor-produto-total h1').innerHTML = 'R$ 00,00';

})


