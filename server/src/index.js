import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const store = createStore();
const app = express();

app.use(express.static('public'));

app.get('/ssr', (req, res) => {
	renderer(req, store).then(componentHTML => res.send(componentHTML));
});


app.listen(3000, () => {
	console.log('Listening on prot 3000');
});