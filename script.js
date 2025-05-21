
$(document).ready(function() {
    fetch('pedidos.json')
        .then(response => response.json())
        .then(data => {
            $('#tabelaPedidos').DataTable({
                data: data,
                columns: [
                    {{ data: "Pedido" }},
                    {{ data: "Produto" }},
                    {{ data: "OC/Item_OC" }},
                    {{ data: "Referência" }},
                    {{ data: "Cliente" }},
                    {{ data: "Data" }},
                    {{ data: "PESO" }},
                    {{ data: "Qtde" }},
                    {{ data: "Vl." }},
                    {{ data: "Fator" }},
                    {{ data: "TOTAL" }},
                    {{ data: "COMISSÃO" }},
                    {{ data: "FATURADO" }}
                ],
                language: {{
                    url: "//cdn.datatables.net/plug-ins/1.13.4/i18n/pt-BR.json"
                }}
            });
        });
});
