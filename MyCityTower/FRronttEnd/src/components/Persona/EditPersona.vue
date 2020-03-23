<template>
  <div class="continaer">
      <div class="col text-left">
          <h2>Edicion de Persona</h2>
      </div>

      <div class="row">
          <div class="col">

            <div class="card">
              <div class="card-body">
                <form @submit="onSubmit">
                  <div class="form-group row">
                    <label for="nombre" class="col-sm-2 col-form-label">Nombre</label>
                    <div class="col-sm-6">
                      <input type="text" placeholder="Nombre" name="nombre" class="form-control" v-model.trim="form.nombre">
                    </div>

                  </div>
                  <div class="form-group row">
                    <label for="paterno" class="col-sm-2 col-form-label">Apellido Paterno</label>
                    <div class="col-sm-6">
                      <input type="text" placeholder="Apellido Paterno" name="Apaterno" class="form-control" v-model.trim="form.Apaterno">
                    </div>

                  </div>
                  <div class="form-group row">
                    <label for="materno" class="col-sm-2 col-form-label">Apellido Materno</label>
                    <div class="col-sm-6">
                      <input type="text" placeholder="Apellido Materno" name="Amaterno" class="form-control" v-model.trim="form.Amaterno">
                    </div>
                    <br>
                  <div class="rows">
                    <div class="col-text-left">
                      <b-button type="submit" variant="primary">Actualizar</b-button>
                    </div>

                  </div>
                  </div>
                </form>


              </div>

            </div>

          </div>

      </div>

  </div>


</template>

<script>
  import  axios from 'axios'
    export default {
        name: "EditPersona",
        data(){
            return{
                idpersona: this.$route.params.idpersona,
                form:{
                    nombre:'',
                    Apaterno:'',
                    Amaterno:''
                }
            }
        },
        methods:{
            onSubmit(evt){
              evt.preventDefault()
                 const ruta =  'http://localhost:8000/api/v1.0/personas/'+this.idpersona+'/'

                axios.put(ruta,this.form).then((response)=>{
                    this.form.nombre = response.data.nombre
                    this.form.Apaterno = response.data.Apaterno
                    this.form.Amaterno = response.data.Amaterno

                    alert("actualizacion exitosa")

                })
                    .catch((error) => {
                    console.log(error.response.data)
                })





            },

            getPersona(){
                const ruta =  'http://localhost:8000/api/v1.0/personas/'+this.idpersona+'/'
                axios.get(ruta).then((response)=>{
                    this.form.nombre = response.data.nombre
                    this.form.Apaterno = response.data.Apaterno
                    this.form.Amaterno = response.data.Amaterno

                })
                    .catch((error) => {
                    console.log(error)
                })

            }
        },
        created() {
           this.getPersona()
        }
    }
</script>

<style scoped>

</style>
