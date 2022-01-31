// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequest(req, res) {
  if(req.method === 'POST') {
    const TOKEN = 'd456e5edd078dac3884c8a41fc1622'
    const client = new SiteClient(TOKEN)

    const registroCriado = await client.items.create({
      itemType: "1713121",
      ...req.body,

      //title: "Comunidade de Teste",
      //imageurl: "https://github.com/omariosouto.png",
      //creatorSlug: "omariosouto"
    })
    
    console.log(registroCriado)
    
    res.json({
      dados: 'Algum dado qualquer',
      registroCriado: registroCriado
    })
    return
  }
  res.status(404).json({
  message: 'Ainda não temos nada no GET, mas no POST tem!'
  })
}
