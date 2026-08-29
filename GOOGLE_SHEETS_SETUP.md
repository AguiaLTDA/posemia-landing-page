# Guia de Configuração: Conectar Formulário ao Google Sheets

Este guia ensina como conectar o formulário de inscrição da sua landing page a uma planilha do **Google Sheets** em 3 passos simples usando o **Google Apps Script** (100% gratuito e sem necessidade de servidores externos).

---

## Passo 1: Criar a Planilha no Google Sheets

1. Acesse o seu Google Drive e crie uma nova planilha vazia.
2. Na primeira linha (Linha 1), escreva os seguintes nomes de colunas:

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| **Data/Hora** | **Nome** | **WhatsApp** | **E-mail** | **Formação** | **Profissão** | **Cidade** | **Trilha de Interesse** | **LGPD Aceito** |

---

## Passo 2: Adicionar o Código no Apps Script

1. No menu superior da planilha, clique em **Extensões** > **Apps Script**.
2. Apague todo o conteúdo do editor e cole o código abaixo:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString("pt-BR"),
      data.nome || "",
      data.whatsapp || "",
      data.email || "",
      data.formacao || "",
      data.profissao || "",
      data.cidade || "",
      data.areaInteresse || "",
      data.lgpd ? "Sim" : "Não"
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ result: "success" })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", error: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

## Passo 3: Implantar como Web App (Gerar URL do Webhook)

1. No canto superior direito da tela do Apps Script, clique no botão azul **Implantar** > **Nova implantação**.
2. Clique no ícone de engrenagem ao lado de *Selecionar tipo* e escolha **App da Web**.
3. Preencha as configurações:
   - **Descrição**: Webhook Landing Page Pós IA
   - **Executar como**: **Eu (seu-email@gmail.com)**
   - **Quem tem acesso**: **Qualquer pessoa** *(necessário para permitir o recebimento público de inscrições)*
4. Clique em **Implantar** e autorize as permissões solicitadas.
5. Copie a **URL do App da Web** gerada (exemplo: `https://script.google.com/macros/s/AKfycbx.../exec`).

---

## Passo 4: Conectar no Projeto React

Crie ou edite o arquivo `.env` na raiz do projeto `posemia` adicionando a linha:

```env
VITE_GOOGLE_SHEETS_WEBHOOK_URL="https://script.google.com/macros/s/SUA_URL_COPIADA_AQUI/exec"
```

Pronto! Qualquer formulário enviado na landing page será instantaneamente gravado como uma nova linha na sua planilha do Google Sheets.
