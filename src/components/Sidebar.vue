<script setup>

</script>

<template>
<nav class="nav flex-column bg-white border shadow-sm p-3 d-flex" id="nav" style="width: 270px; flex-shrink: 0;">    
    <ul class="nav flex-column nav-pills gap-1">
      <li class="nav-item">
        <RouterLink class="nav-link active d-flex align-items-center" aria-current="page" to="/">
          <i class="bi bi-house fs-5 me-3"></i> 
          <span>Home</span>
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link link-dark d-flex align-items-center" to="/about">
          <i class="bi bi-info-circle fs-5 me-3"></i> 
          <span>About</span>
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link link-dark d-flex align-items-center" to="/contact">
          <i class="bi bi-envelope fs-5 me-3"></i> 
          <span>Contact</span>
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link link-dark d-flex align-items-center" to="/blog">
          <i class="bi bi-journal-text fs-5 me-3"></i> 
          <span>Blog</span>
        </RouterLink>
      </li>
    </ul>

    

  </nav>
</template>

<style scoped>
.nav-link {
  transition: background-color 0.2s ease, color 0.2s ease;
  border-radius: 8px; 
  padding: 0.8rem 1rem;
}

.nav-link:not(.active):hover {
  background-color: #c1ddf8;
  color: #0d6efd;
}

#nav{
    margin-top: 2px;
}
</style>