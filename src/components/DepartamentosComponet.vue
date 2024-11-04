<template>
  <div>
    <h1>DepartamentosComponent</h1>
    <img src="./../assets/images/loading.gif" alt="" v-if="status == false" />
    <table v-else class="table table-bordered">
      <thead>
        <tr>
          <th>Id Departamento</th>
          <th>Nombre</th>
          <th>Localidad</th>
          <th>Detalles</th>
          <th>Modificar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dept in departamentos" :key="dept">
          <td>{{ dept.idDepartamento }}</td>
          <td>{{ dept.nombre }}</td>
          <td>{{ dept.localidad }}</td>
          <td>
            <router-link
              class="btn btn-info"
              :to="
                '/details/' +
                dept.idDepartamento +
                '/' +
                dept.nombre +
                '/' +
                dept.localidad
              "
              >Detalles</router-link
            >
          </td>
          <td>
            <router-link
              class="btn btn-warning"
              :to="
                '/update/' +
                dept.idDepartamento 
              "
              >Modificar</router-link
            >
          </td>
          <td>
            <router-link
              class="btn btn-danger"
              :to="
                '/delete/' +
                dept.idDepartamento 
              "
              >Eliminar</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceDepartamentos from "./../services/ServiceDepartamentos";
const service = new ServiceDepartamentos();
export default {
  name: "DepartamentosComponent",
  data() {
    return {
      departamentos: [],
      status: false,
    };
  },
  mounted() {
    service.getDepartamentos().then((result) => {
      this.status = true;
      this.departamentos = result;
    });
  },
};
</script>

<style>
img {
  width: 150px;
}
</style>