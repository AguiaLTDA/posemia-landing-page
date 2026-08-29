export interface LeadPayload {
  nome: string;
  whatsapp: string;
  email: string;
  formacao: string;
  profissao: string;
  cidade: string;
  areaInteresse: string;
  lgpd: boolean;
  timestamp?: string;
}

export async function saveLeadToSheets(lead: LeadPayload): Promise<{ success: boolean; message: string }> {
  const timestamp = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  const fullPayload = { ...lead, timestamp };

  // Always save to localStorage as local backup
  try {
    const existing = JSON.parse(localStorage.getItem('posemia_leads') || '[]');
    existing.push(fullPayload);
    localStorage.setItem('posemia_leads', JSON.stringify(existing));
  } catch (err) {
    console.warn('Fallback localStorage notice:', err);
  }

  // Google Apps Script Webhook URL from environment variables or window config
  const webhookUrl =
    (import.meta as any).env?.VITE_GOOGLE_SHEETS_WEBHOOK_URL ||
    (window as any).__GOOGLE_SHEETS_WEBHOOK_URL__;

  if (webhookUrl && webhookUrl.trim() !== '') {
    try {
      // Send data to Google Apps Script Webhook endpoint
      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script redirects require no-cors mode
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(fullPayload)
      });

      return {
        success: true,
        message: 'Inscrição registrada e enviada para o Google Sheets com sucesso!'
      };
    } catch (error) {
      console.error('Erro no envio para o Google Sheets:', error);
      return {
        success: true, // Lead is safely stored in localStorage
        message: 'Inscrição salva localmente com sucesso!'
      };
    }
  }

  // If webhook URL is not yet configured by the user
  return {
    success: true,
    message: 'Inscrição salva com sucesso (Configure a URL do Webhook do Google Sheets para sincronização em nuvem).'
  };
}
