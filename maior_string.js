var cidades = ["Campinas", " Hortolândia", "Sumaré", "São Sebastião"];


var aux = 0;
cidade_maior = "";


for (var x = 0; x < cidades.length; x++) {
    if (cidades[x].length > aux){
        aux = cidades[x].length;
        cidade_maior = cidades[x];
    } 
   
   
    }

    console.log(cidade_maior);
    console.log(cidade_maior.length);