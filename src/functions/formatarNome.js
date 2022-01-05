import capitalize from './capitalize';

/**
 * Exemplo de entrada:  '   mATHEUS       d   c   comparotto   de   shmebuLLock   e   Fulano '
 * Exemplo de saída:    'Matheus D. C. Comparotto de Shmebullock e Fulano'
 */
function formatarNome(string = '   mATHEUS       d   c   comparotto   de   shmebuLLock   e   Fulano ') {
  const espacos = new RegExp(/\s+/, 'g');
  
  string = string.replace(espacos, ' ');
  string = string.split(' ');
  string = string.filter(Boolean);
  
  const nome = [];
  const excecoes = ['da', 'das', 'de', 'do', 'dos', 'e'];
  
  for (let token of string) {
    token = token.toLowerCase();
    
    if (excecoes.includes(token))
      nome.push(token);
    else {
      if(token.length === 1) token += '.';
      nome.push(capitalize(token))
    }
  }

  return nome.join(' ');
}

export default formatarNome;