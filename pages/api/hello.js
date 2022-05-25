// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  await res.status(200).send({ message: 'Rx Pandan' });
}
