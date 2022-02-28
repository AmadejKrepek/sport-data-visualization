<template>
    <ul class="nav justify-content-center bg-dark text-white p-2">
      <li class="nav-item">
        <router-link class="nav-link active" to="/">Dashboard</router-link>
      </li>
      <li class="nav-item dropdown">
        <div class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Data</div>
          <ul class="dropdown-menu text-center" aria-labelledby="navbarDropdownMenuLink">
              <li> 
                <!-- Button trigger modal -->
                <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#importDataModal">
                  Import
                </button>  
              </li>
          </ul>
      </li>
    </ul>
</template>

<script>

export default {
  name: "HeadNav",
  components: {
    
  }
};
</script>
