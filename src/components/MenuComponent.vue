<template>
  <div>
    <nav
      class="navbar navbar-expand-sm navbar-dark bg-dark"
      aria-label="Third navbar example"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">The Ofice</a>

        <div class="collapse navbar-collapse" id="navbarsExample03">
          <ul class="navbar-nav me-auto mb-2 mb-sm-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/"
                >Home</router-link
              >
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/create">Create</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template> 
      
<script>
export default {
  name: "MenuComponent",

  data() {
    return {
      oficios: [],
    };
  },
  mounted() {},
};
</script> 