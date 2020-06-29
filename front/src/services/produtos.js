import { api } from './config'

export default	{

	salvar:(user)=>{
		//console.log('SALVAR',user)
		return api.post('user',user);
  },
    
	atualizar:(user)=>{
		return api.put('users/:id_user',user);
  },

  listar:()=>{
		return api.get('user')
  },
    
	apagar:(user)=>{
		console.log('USER de', user); 
		console.log('de', user.id_user);
		return api.delete('user/:id_user', { data: user })
	}
}