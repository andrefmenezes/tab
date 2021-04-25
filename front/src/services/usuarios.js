import { api } from './config'

export default	{

	salvar:(user)=>{
		//console.log('SALVAR',user)
		return api.post('user',user);
  },
    
	atualizar:(user)=>{
		return api.put('users/'+user.id_user,user);
  },

  listar:()=>{
		return api.get('user')
  },
    
	apagar:(user)=>{
		//console.log('USER de', user); 		
		return api.delete('user/'+user.id_user,  user )
	}
}