<template>
  <div>
    <ul class="nav justify-content-center bg-dark text-white p-2">
      <li class="nav-item">
        <router-link class="nav-link active" to="/">Dashboard</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about">Data</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HeadNav",
};
</script>
