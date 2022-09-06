// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' });
  testFunc(req, res);
}

const testFunc = (req, res) => {
  console.log('this is test function');
  res.status(200).json({ name: 'Shahadat Robin' });
};
