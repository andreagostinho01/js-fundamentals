// aula
var nome = 'Programador a Bordo!';
console.log(nome);

console.log(nome.length);

console.log('Programador'.length);

console.log(nome.toUpperCase());

console.log(nome.toLowerCase());

console.log(nome.indexOf('dor'));

console.log(nome.replace('Programador', 'Desenvolvedor'));

console.log(nome.slice(3, 8));

var canalYoutube = '     Programador a Bordo    ';
console.log(canalYoutube);

console.log(canalYoutube.trim());

var autor = 'Ayrton';

console.log('O canal do YouTube ' + canalYoutube.trim() + ' foi criado por ' + autor);

console.log(`O canal do Youtube ${canalYoutube.trim()} foi criado por ${autor}`);

// projeto
const response = document.querySelector('div.response');

function findText() {
  const content = document.querySelector('input').value;
  
  if (content.indexOf('pastel') !== -1)
    response.innerHTML = 'Encontrado';
  else
    response.innerHTML = 'Não encontrado';
}
