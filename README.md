# Criptografia

# 🔐 Programa Didático de Criptografia AES-256

Este é um programa educacional que demonstra o funcionamento do algoritmo AES (Advanced Encryption Standard) com uma chave de 256 bits.

## 📚 Conceitos Básicos

### O que é AES?
- **Advanced Encryption Standard (AES)** é um algoritmo de criptografia simétrica
- Considerado um dos mais seguros do mundo
- Usado por governos e empresas para proteger dados sensíveis
- Trabalha com blocos de dados de 128 bits (16 bytes)

### Por que AES-256?
- O número 256 refere-se ao tamanho da chave em bits
- Quanto maior a chave, mais segura a criptografia
- AES-256 é considerado seguro mesmo contra computadores quânticos
- Realiza 14 rodadas de transformações nos dados

## 🛠️ Componentes do Programa

### 1. Chave de Criptografia
- Tamanho: 256 bits (32 bytes)
- Gerada aleatoriamente para cada execução
- Deve ser mantida em segredo
- Mesma chave usada para criptografar e descriptografar

### 2. Vetor de Inicialização (IV)
- Tamanho: 128 bits (16 bytes)
- Gerado aleatoriamente para cada mensagem
- Garante que mensagens iguais gerem resultados diferentes
- Enviado junto com a mensagem criptografada

### 3. Padding PKCS#7
- Garante que a mensagem tenha tamanho múltiplo de 16 bytes
- Adiciona bytes com valor igual ao tamanho do padding
- Exemplo:
  - Se faltam 3 bytes: adiciona [03 03 03]
  - Se faltam 5 bytes: adiciona [05 05 05 05 05]

### 4. Modo CBC (Cipher Block Chaining)
- Cada bloco é combinado com o anterior antes da criptografia
- Usa XOR para combinar os blocos
- Primeiro bloco usa o IV
- Aumenta a segurança contra análise de padrões

## 🚀 Como Usar

1. **Requisitos**
   - Node.js instalado
   - Nenhuma dependência externa

2. **Execução**
   ```bash
   node cripto_explicado.js
   ```

3. **O Programa Vai**
   - Pedir uma mensagem (mínimo 16 caracteres)
   - Gerar uma chave aleatória
   - Criptografar a mensagem
   - Mostrar a chave e o texto cifrado em Base64
   - Descriptografar e validar o resultado

## 🔍 Processo Detalhado

1. **Criptografia**
   ```
   Texto Original → Padding → Divisão em Blocos → 
   Criptografia AES (14 rodadas) → Base64
   ```

2. **Descriptografia**
   ```
   Base64 → Bytes → Descriptografia AES → 
   Remove Padding → Texto Original
   ```

## ⚠️ Avisos de Segurança

1. **Nunca Reutilize**
   - A mesma chave para mensagens diferentes
   - O mesmo IV para mensagens diferentes

2. **Sempre Proteja**
   - A chave de criptografia
   - O processo de transmissão da chave

3. **Lembre-se**
   - Guarde a chave com segurança
   - Sem a chave, os dados são irrecuperáveis
   - Use canais seguros para transmitir a chave

## 📖 Referências

- [NIST FIPS 197 (AES Standard)](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.197.pdf)
- [RFC 5246 (TLS 1.2)](https://tools.ietf.org/html/rfc5246)
- [PKCS#7 Padding](https://tools.ietf.org/html/rfc5652#section-6.3)

## 🤝 Contribuição

Este é um programa educacional para demonstrar conceitos de criptografia. Sugestões e melhorias são bem-vindas!
