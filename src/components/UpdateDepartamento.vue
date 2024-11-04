<template>
  <div>
    <h1>Update departamento</h1>

    <form
      v-if="departamento"
      style="width: 500px; margin: 0 auto"
      v-on:submit.prevent="updateDepartamento()"
    >
      <input type="hidden" v-model="departamento.idDepartamento" />

      <label>Nombre</label>
      <input type="text" v-model="departamento.nombre" class="form-control" />

      <label>Localidad</label>
      <input
        type="text"
        v-model="departamento.localidad"
        class="form-control"
      />
      <br />
      <button class="btn btn-warning">Update</button>
    </form>
  </div>
</template> 
    
    <script>
import ServiceDepartamentos from "@/services/ServiceDepartamentos";

const service = new ServiceDepartamentos();

export default {
  name: "UpdateDepartamento",
  mounted() {
    let id = this.$route.params.id;

    service.findDepartamento(id).then((result) => {
      this.departamento = result;
    });
  },
  data() {
    return {
      departamento: null,
    };
  },
  methods: {
    updateDepartamento() {
      service.updateDepartamento(this.departamento).then((result) => {
        console.log(result);

        this.$router.push("/");
      });
    },
  },
};
</script> 
    
    <style>
</style> 