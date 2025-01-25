<script setup lang="ts">

const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value.title,
  ogTitle: home.value.title,
  description: home.value.description,
  ogDescription: home.value.description,
})

</script>

<template>
  <main>
    <section>
      <div class="bg-[#fcf0e4]">
        <div class="max-w-7xl mx-auto">
          <div class="flex items-center justify-between py-12 md:py-16">
            <!-- Text Content -->
            <div class="flex-1 pr-8">
              <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Grab Up To <span class="text-green-600">50% Off</span> On Selected Items
              </h1>
              <p class="text-lg text-gray-600 mb-8">
                Discover amazing deals on our latest collection. Limited time offer!
              </p>
              <button class="bg-green-900 text-white px-8 py-3 rounded-full font-medium hover:bg-green-700 transition-colors">
                Shop Now
              </button>
            </div>

            <!-- Image -->
            <div class="hidden md:block flex-3  animate-float">
              <img 
              src="/assets/imgs/1.png" 
                alt="Featured Product" 
               
                class="w-full h-auto object-cover "
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-10">
      <ProductArea />
    </section>
    <section class="mt-10">
      <ProductCategory />
    </section>
    <section class="mt-10">
      <UserTestmonials />
    </section>
  </main>
</template>

