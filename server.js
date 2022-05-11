const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//cors 
const cors = require("cors"); 
const corsOptions = { origin: "https://localhost:8081", optionsSuccessStatus: 200, }; 
app.use(cors()); 
app.options('*',cors());

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.get('/commanders', async (req, res) => {
const allCommanders =  await prisma.commander.findMany({});
res.json(allCommanders);
});


app.get('/commanders/:id', async (req, res) => {
  const id = req.params.id;
  const commander = await prisma.commander.findUnique({where: {id: parseInt(id)}});
  res.json(commander);
});

app.post('/commanders', async (req, res) => {
    const commander = {
      name: req.body.name,
      username: req.body.username,
      mainStack: req.body.mainStack,
      currentEnrollment:req.body.currentEnrollment
     };
    const message = 'Commander creado.';
    await prisma.commander.create({data: commander});
    return res.json({message});
  });

app.put('/commanders/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.commander.update({
		where: {
			id: id
		},
		data: {
			mainStack: req.body.mainStack
		}
	})
	return res.json({message: "Actualizado correctamente"});
});

app.delete('/commanders/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.commander.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});