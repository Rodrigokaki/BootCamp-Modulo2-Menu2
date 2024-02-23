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

    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    output.innerHTML = `<p>Caro <b>${name}</b></p>
    <p>Seguem os dados do seu pedido.</p>
    <p>O seu pedido é:</p>`;

    for(var input of quantities){
        var id = input.id-1;
        var total = prods[id].price * parseFloat(input.value);

        if(input.value > 0){
            output.innerHTML += `<li>Prato: ${prods[id].name} - Preço unitário: ${formatter.format(prods[id].price)} - Quantidade: ${input.value} - Total: ${formatter.format(total)}</li>`;
            finalPrice += total;
        }
    }
    output.innerHTML += `<h3>Preço final ${formatter.format(finalPrice)}</h3>`;
}