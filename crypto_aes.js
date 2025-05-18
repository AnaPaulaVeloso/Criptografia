// Importa módulos: crypto para criptografia e readline para ler input do usuário
const c = require('crypto'), rl = require('readline').createInterface({input:process.stdin, output:process.stdout});

// Adiciona padding: completa o texto até ser múltiplo de 16
const pad = t => Buffer.concat([Buffer.from(t), Buffer.alloc(16-(t.length%16), 16-(t.length%16))]);

// Remove padding: retira os bytes extras adicionados
const unpad = b => b.slice(0, b.length - b[b.length-1]);

// Função que criptografa o texto
const cript = (t, k = c.randomBytes(32)) => {
    // Cria número aleatório para tornar única cada criptografia
    const iv = c.randomBytes(16);
    // Prepara o algoritmo AES para criptografar
    const cipher = c.createCipheriv('aes-256-cbc', k, iv);
    // Retorna chave e texto criptografado em base64
    return {
        k: k.toString('base64'),                                              // Chave em base64
        d: Buffer.concat([iv, cipher.update(pad(t)), cipher.final()]).toString('base64')  // Dados criptografados
    };
};

// Função que descriptografa o texto
const decript = (d, k) => {
    // Converte o texto criptografado de base64 para bytes
    const buf = Buffer.from(d, 'base64');
    // Prepara o algoritmo AES para descriptografar
    const decipher = c.createDecipheriv('aes-256-cbc', Buffer.from(k, 'base64'), buf.slice(0,16));
    // Descriptografa e remove o padding
    return unpad(Buffer.concat([decipher.update(buf.slice(16)), decipher.final()])).toString();
};

// Pede a mensagem para o usuário
rl.question('Mensagem (min 16 chars): ', m => {
    // Verifica se a mensagem tem tamanho mínimo
    if(m.length < 16) { console.log('Texto muito curto!'); rl.close(); return; }
    
    try {
        // Criptografa a mensagem
        const {k, d} = cript(m);
        // Mostra a chave e o texto criptografado
        console.log('\nChave:', k, '\nCifrado:', d);
        // Descriptografa e mostra o resultado
        const o = decript(d, k);
        // Valida se deu tudo certo
        console.log('Original:', o, '\n', m === o ? 'OK!' : 'Falha!');
    } catch(e) { 
        // Se der erro, mostra a mensagem
        console.log('Erro:', e.message); 
    }
    // Fecha o programa
    rl.close();
});