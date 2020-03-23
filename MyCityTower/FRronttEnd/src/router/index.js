import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListPersona from '@/components/Persona/ListPersona'
import EditPersona from "../components/Persona/EditPersona";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/personas',
      name: 'ListPersona',
      component: ListPersona
    },
    {
      path: "/personas/:idpersona/edit",
      name: 'EditPersona',
      component: EditPersona
    }


  ],
  mode: 'history'
})
