import axios from 'axios'

export async function analyzeImageWithOpenAI(base64Image) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'image_url',
                image_url: {
                  url: base64Image
                }
              },
              {
                type: 'text',
                text: 'Solucione o problema de programação apresentado na imagem acima. Forneça o código.'
              }
            ]
          }
        ],
        max_tokens: 500
      },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    )

    return response.data.choices[0].message.content
  } catch (error) {
    console.error('Erro na API OpenAI:', error)
    return 'Erro ao comunicar com a API da IA.'
  }
}
