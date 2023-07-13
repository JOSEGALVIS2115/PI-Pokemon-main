import { Router } from 'express';
import { getPokemons, createPokemon, getPokemonById, getPokemonByName } from '../controllers/typesControllers';

const router = Router();

router.get('/', getPokemons);//query {name} ?name=pikachu
router.get('/:id', getPokemonById);//params
router.get('/:name', getPokemonByName);//params
router.post(`/`, createPokemon);//query {name}

export default router; 