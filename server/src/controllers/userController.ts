
import {Request, Response} from 'express';
import knex from '../database/connection';
class User{
    
async show(request: Request,response: Response){
    const id = request.params.id_user;

    const user = await knex('user').select('*');
/*
   if(!user){
       return response.status(400).json({msg: 'erro'});
   }

   //join
const ativos = await knex('ativo')
.join('user_ativo','ayivo.id_ativo','=','user_ativo.id_ativo')
.where('user_ativo.iduser',id);

//return response.json({user, ativos});
*/
   return response.json(user);
}



    async create(request: Request,response: Response){
       // console.log('[DEBUG] USER ROTA',request)
        const {
            name_user,
            email_user,
            senha_user,
            //ativos
        } = request.body;
     
     
     
     const usuario ={
        name_user,
        email_user,
        senha_user
       }  
       //console.log('[DEBUG] USUARIO REQ:', usuario)
        await knex('user').insert(usuario);
    /* const papeis = ativos.map((ativo_id: number) =>{
       return{
             ativo_id,
             user_id: ids[0],
         }
     });
     
     await trx('user_ativo').insert(papeis);
     */
     
     
         return response.json(usuario)
     }

     async delete(request: Request,response: Response){
       // console.log('[DEBUG] USER ROTA',request)
        //console.log('[DEBUG] USER ROTA',request.params.id_user);
      const del =  await knex('user').where('id_user',request.params.id_user).del()
         
       return response.json(del);

    }
 
    async atualizar(request: Request,response: Response){
        const {
            name_user,
            email_user,
            senha_user,
            //ativos
        } = request.body;
     
     
     
     const atualizar ={
        name_user,
        email_user,
        senha_user
       }  
      
        await knex('user').where('id_user', request.params.id_user)
       .update(atualizar)
       return response.json({msg: 'ok'});
    }
}


export default User;