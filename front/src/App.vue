<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Produtos Front</a>
      </div>
    </nav>

    <div class="container">
<!--{{user.nome}}-->
      <form @submit.prevent="salvar">

          <label>Nome</label>
          <input type="text" placeholder="Nome" v-model="user.name_user">
          <label>email</label>
          <input type="text" placeholder="QTD" v-model="user.email_user">
          <label>senha</label>
          <input type="text" placeholder="Valor" v-model="user.senha_user">

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>NOME</th>
            <th>QTD</th>
            <th>VALOR</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="user of users " :key="user.id_user">

            <td>{{user.name_user}}</td>
            <td>{{user.email_user}}</td>
            <td>{{user.senha_user}}</td>
            <td>
              <button @click="editar(user)" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button @click="remover(user)" class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>

import Produto from './services/produtos'

export default {
  data(){
return {
  user:{
    id_user:'',
    name_user:'',
    email_user: '',
    senha_user: '',
  },
  users:[

  ]
}
  },
  mounted(){
this.listar()
  },
  methods:{

listar(){
Produto.listar().then(res =>{  
  this.users = res.data
})


},


salvar(){
  console.log(this.user)

  if(!this.user.id_user){

Produto.salvar(this.user).then( res =>{
    this.user = {}
    alert('ok');
    this.listar();
  }).catch(e =>{
    console.log(e.res)
  })
  }else{
    Produto.atualizar(this.user).then( res =>{
    this.user = {}
    alert('atualizado');
    this.listar();
  }).catch(e =>{
    console.log(e.res)
  })
  }
  
},

editar(user){
this.user = user;

},


remover(user){
  Produto.apagar(user).then( res =>{
this.listar();

  })
  console.log(user);
}


  },
  

}
</script>

<style>



</style>
