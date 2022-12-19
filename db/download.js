import fetch from 'node-fetch';
import { promises as fsPromises} from 'fs'

fetch('ttps://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    fsPromises.writeFile('./character.json', JSON.stringify(data))
  })
  .catch(error => console.error(error))