<script setup>
defineProps({
    title: {
        default: 'The Future of Sustainable Design'
    },
    body: {
        default: 'Exploring how minimalist architecture and renewable materials are shaping the urban landscapes of 2026...'
    },
    category: {
        default: 'Architecture'
    },
    date: {
        default: '24 May, 2026'
    },
    image: {
        default: 'https://picsum.photos/800/600'
    },
    avatar: {
        default: 'https://picsum.photos/100/100'
    },
    id: {
        default: '1'
    }
});
</script>

<template>
    <div class="card h-100 border-1 shadow-sm overflow-hidden hover-shadow-lg">
        
        <div class="card-img-container">
            <img :src="image" class="card-img-top" alt="Header Image">
        </div>

        <div class="card-body p-4 d-flex flex-column">
            <div class="d-flex align-items-center justify-content-between mb-3">
                <div class="d-flex align-items-center">
                    <img :src="avatar" class="rounded-circle border border-2 me-2" width="32" height="32" alt="Author">
                    <span class="badge bg-light text-primary border">
                        {{ category }}
                    </span>
                </div>
                <small class="text-muted fw-medium">{{ date }}</small>
            </div>

            <h5 class="card-title fw-bold mb-2">
                {{ title }}
            </h5>

            <p class="card-text text-muted small mb-4 line-clamp-2">
                {{ body }}
            </p>

            <div class="mt-auto pt-3 border-top">
                <RouterLink :to="`/blog/${id}`" class="link-primary text-decoration-none fw-bold small text-uppercase">
                    Read Article <i class="bi bi-chevron-right ms-1"></i>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Card 1 Animation & Sizing Logic */
.hover-shadow-lg {
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.hover-shadow-lg:hover {
    transform: translateY(-4px);
    box-shadow: 0 1rem 3rem rgba(0,0,0,.125) !important;
}

/* Matching the first card's image height exactly */
.card-img-container {
    height: 180px; 
    position: relative;
    overflow: hidden;
}

.card-img-top {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Title and Body line clamping to prevent size breaking */
.card-title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    min-height: 3rem; 
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>