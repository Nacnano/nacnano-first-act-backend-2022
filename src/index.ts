import express from "express";
const app = express();
const port = 3000;

app.use(express.json());

app.get('/hello', (req, res) => {
  res.status(200).send('Hello World!');
})

app.get('/query', (req, res) => {
  res.json({
    query: req.query,
  });
});

app.get('/post/:id/comment/:cid', (req, res) => {
  res.json({
    param: req.params,
  });
});

app.get('/echo-json', (req, res) => {
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

function grading(score: number) {
  if (score > 100) return null;
  else if (score >= 80) return 'A';
  else if (score >= 70) return 'B';
  else if (score >= 60) return 'C';
  else if (score >= 50) return 'D';
  else if (score >=0) return 'F';
  return null;
}

app.get('/grade', (req, res) => {
  const score: number = parseFloat(req.body.score);
  const graded: any = grading(score);
  if (graded) {
      res.json({
      "grade" : graded
    })
  }
  else {
      res.json({
      "status" : 400,
      "error" : "score out of range"
    })
  }

});