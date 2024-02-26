$("#phone").mask("(99) 9999-99999");

var prods = [
    { id: 1, name: "Bife", price: 30.0 },
    { id: 2, name: "Coxa", price: 25.0 },
    { id: 3, name: "Carne", price: 22.0 },
    { id: 4, name: "Farofa", price: 10.0 },
    { id: 5, name: "Salada", price: 8.0 },
    { id: 6, name: "Torresmo", price: 12.0 },
];

function calc(){
    var quantities = document.getElementsByName("quantity");
    var output     = document.getElementById("output");
    var total      = 0;
    var finalPrice = 0;
    var name = document.getElementById("name").value;
    var hasItem = 0;

    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    

    for(var input of quantities){
        if(input.value == 0){
            continue;
        }
        else{
            hasItem = 1;
            break;
        }
    }

    if(hasItem == 1){
        output.innerHTML = `<div>Caro <b>${name}</b></div>
        <div>Seguem os dados do seu pedido.</div>
        <div class="mb-3">O seu pedido é:</div>`;
    
        for(var input of quantities){
            var id = input.id-1;
            var total = prods[id].price * parseFloat(input.value);
    
            if(input.value > 0){
                output.innerHTML += `<li class="fs-6">Prato: ${prods[id].name} - Preço unitário: ${formatter.format(prods[id].price)} - Quantidade: ${input.value} - Total: ${formatter.format(total)}</li>`;
                finalPrice += total;
            }
        }
        output.innerHTML += `<h3 class="mt-3">Preço final ${formatter.format(finalPrice)}</h3>`;
    }
    else{
        output.innerHTML = `<h3 class="text-danger text-center">Selecione pelo menos um prato!</h3>`
    }

}