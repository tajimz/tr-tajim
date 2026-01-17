<template>
    <div class="container py-4">
        <div class="row justify-content-center">
            <div class="col-md-10 col-lg-8">
                
                <nav class="mb-5">
                    <button @click="$router.back()" class="btn btn-link link-dark text-decoration-none p-0 fw-medium border-0 bg-transparent">
                        <i class="bi bi-arrow-left me-2"></i>Back to Thoughts
                    </button>
                </nav>

                <header class="mb-4">
                    <div class="d-flex align-items-center gap-3 mb-3">
                        <span class="badge bg-dark rounded-pill px-3">Architecture</span>
                        <span class="text-muted small border-start ps-3">24 May, 2026</span>
                    </div>
                    
                    <h1 class="display-4 fw-bold mb-4 text-dark lh-1">
                        The Future of Sustainable Design
                    </h1>

                    <div class="d-flex align-items-center">
                        <img src="https://picsum.photos/100/100" class="rounded-circle me-2 border" width="32" height="32" alt="Me">
                        <span class="text-secondary small">By <strong>Me</strong></span>
                    </div>
                </header>

                <div class="mb-5">
                    <img src="https://picsum.photos/800/600" class="img-fluid rounded-4 shadow-sm w-100 object-fit-cover hero-img" alt="Visual">
                </div>

                <article class="blog-text">
                    <p class="fs-4 text-dark mb-5 lh-base italic-serif">
                        "Exploring how minimalist architecture and renewable materials are shaping the urban landscapes of 2026..."
                    </p>

                    <div class="text-secondary fs-5 lh-lg">
                        <p>When I sat down to write about the future of sustainable design, I realized that my interest in architecture isn't just about the technical side—it's about how we feel in the spaces we inhabit.</p>
                        
                        <p>This entry is a reflection of my personal journey exploring these themes throughout 2026. I hope these thoughts resonate with your own experiences of modern living.</p>
                    </div>
                </article>

                <footer class="mt-5 pt-5 border-top text-center text-muted small">
                    <p>Thanks for reading my blog. Stay curious.</p>
                </footer>

            </div>
        </div>
    </div>
</template>

<style scoped>
.hero-img {
    height: 450px; 
}
.object-fit-cover {
    object-fit: cover;
}
.italic-serif {
    font-style: italic;
    color: #444;
}
.blog-text p {
    margin-bottom: 1.5rem;
}

.btn-link:hover {
    transform: translateX(-4px);
    transition: transform 0.2s ease;
}
</style>