import {Request, Response} from 'express';
import knex from '../database/connection';

class Ativo{

async index(requst: Request,response: Response){
const ativos = await knex('ativo').select('*');

const serializedAtivos = ativos.map(ativo =>{
  
  return{
    id: ativo.id_ativo,
    name: ativo.name_ativo,
    pm: ativo.pm_ativo
  }
    
});

return response.json(serializedAtivos);
}


}


export default Ativo;