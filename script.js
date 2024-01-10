let titulo = document.getElementById('titulo')

titulo.innerText =  `Novo título`

let link = document.querySelector('a')

link.innerText = `Aqui está o link`

let lista = document.getElementById('lista-ordenada')

lista.innerHTML = `
 <li>  <a href="https://prozeducacao.com.br"> Site Proz </a></li>
 <li> <a href="https://atletico.com.br/"> Site do Galo </a></li>
 <li> <a href="https://www.globo.com/"> Site da Globo </a></li>
 <li> <a href="https://www.formula1.com/"> Site da Formula 1 </a> </li>
`;