
<template>
    <div class="container">
        <div class="row">
            <div class="col text-left">

                <h2>Personas en Django</h2>
                <br>
                <div class="col-md-12">
                    <b-table striped hover :items="personas" :fields="fields">

                      <template v-slot:cell(action)="data">
                            <b-button size="sm" variant="primary" :to="{name:'EditPersona',params:{idpersona:data.item.idpersona}}">Editar</b-button>
                            <b-button size="sm" variant="danger">Eliminar</b-button>
                      </template>
                    </b-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data (){
        idpersona:''
        return{

            fields: [
                {key: 'nombre' ,label:'nombre'},
                {key: 'Apaterno', label: 'Paterno'},
                {key: 'Amaterno', label: 'Materno'},
                {key:'action',label:''}

            ],
            personas: []

        }
    },
    methods:{
        getPersons(){
            const ruta = 'http://127.0.0.1:8000/api/v1.0/personas/'
            axios.get(ruta).then((response)=>{
                this.personas = response.data
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    },
    created(){
        this.getPersons()
    }
}
</script>
