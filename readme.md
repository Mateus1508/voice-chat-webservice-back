**Passo a passo para usar a API**

1. Crie um arquivo `.env` na raiz do projeto.
2. Adicione a seguinte linha ao arquivo `.env`, substituindo `SUA_CHAVE_API` pela chave de API real do serviço de IA que você pretende utilizar:

   ```
   API_KEY=SUA_CHAVE_API
   ```

   **Importante:** Consulte a documentação do serviço da [google AI](https://ai.google/build) para obter a chave de API.

**Executando a API**

1. No terminal, execute o comando `node index.js`.
2. A API será iniciada e imprimirá uma mensagem de confirmação indicando a porta em que está rodando (por exemplo, `Server running on: http://localhost:3000`).

**Testando a API**

1. Utilize um cliente HTTP (como Postman, Insomnia ou cURL) para enviar uma solicitação POST ao endpoint `/api/send-message`.
2. No corpo da solicitação (body), inclua um objeto JSON com a propriedade `text` contendo o texto que deseja processar. Por exemplo:

   ```json
   {
     "text": "Este é um exemplo de texto para ser processado pela API."
   }
   ```

3. Envie a solicitação.
4. Se tudo estiver configurado corretamente, a API responderá com um código de status 200 e o resultado do processamento do texto no formato JSON.

