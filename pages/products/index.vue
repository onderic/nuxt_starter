<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const breakpoints = {
  640: { slidesPerView: 2, spaceBetween: 20 },
  768: { slidesPerView: 3, spaceBetween: 24 },
  1024: { slidesPerView: 4, spaceBetween: 24 }
}
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Collections', path: '/collections' },
  { name: 'Leather Bags', path: '/leather-bags' },
  { name: 'Classic Totes', path: '/leather-bags/totes' },
]
const images = [
  '/assets/imgs/p.png',
  '/assets/imgs/3.png',
  '/assets/imgs/1.png',
  '/assets/imgs/2.png',
]

const colors = [
  { name: 'Black', value: '#000000' },
  { name: 'Brown', value: '#8B4513' },
  { name: 'Tan', value: '#D2B48C' },
  { name: 'Navy', value: '#000080' }
]

const relatedProducts = ref([
  {
    id: 1,
    name: 'Classic Leather Tote',
    price: 299,
    image: '/assets/imgs/2.png',
    rating: 4,
  },
  {
    id: 2,
    name: 'Elegant Crossbody Bag',
    price: 199,
    image: '/assets/imgs/p.png',
    rating: 5,
  },
  {
    id: 3,
    name: 'Designer Clutch',
    price: 499,
    image: '/assets/imgs/3.png',
    rating: 4,
  },
  {
    id: 4,
    name: 'Casual Shoulder Bag',
    price: 149,
    image: '/assets/imgs/2.png',
    rating: 5,
  },
  {
    id: 5,
    name: 'Designer Clutch',
    price: 499,
    image: '/assets/imgs/3.png',
    rating: 4,
  },
  {
    id: 6,
    name: 'Casual Shoulder Bag',
    price: 149,
    image: '/assets/imgs/2.png',
    rating: 5,
  },
  // Add more products...
])

const selectedColor = ref(colors[0])

const mainImage = ref(images[0])

const quantity = ref(1)
const stockCount = ref(15)

const increment = () => {
  if (quantity.value < stockCount.value){
    quantity.value++
  }
}

const decrement = () => {
  if (quantity.value > 1){
    quantity.value--
  }
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <!-- Breadcrumb -->
    <nav class="flex items-center space-x-2 text-sm mb-8">
      <template v-for="(crumb, index) in breadcrumbs" :key="index">
        <NuxtLink :to="crumb.path" class="text-gray-500 hover:text-green-600">
          {{ crumb.name }}
        </NuxtLink>
        <span v-if="index < breadcrumbs.length - 1" class="text-gray-400">/</span>
      </template>
    </nav>

    <!-- Product Layout -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
      <!-- Left Column - Images -->
      <div class="space-y-4">
        <!-- Main Image -->
        <div class="bg-gray-100  h-[500px] rounded-lg p-4">
          <img :src="mainImage" alt="Product" class="w-full h-auto object-cover">
        </div>
        
        <!-- Thumbnail Gallery -->
        <div class="grid grid-cols-4 gap-4">
          <button 
            v-for="(image, idx) in images" 
            :key="idx"
            @click="mainImage = image"
            class="bg-gray-100 rounded-lg p-2 hover:ring-2 hover:ring-green-500"
            :class="{'ring-2 ring-green-500': mainImage === image}"
          >
            <img :src="image" alt="Thumbnail" class="w-full h-auto object-cover">
          </button>
        </div>
      </div>

      <!-- Right Column - Product Details -->
      <div class="space-y-6">
        <h1 class="text-3xl font-bold">Classic Leather Max</h1>
            <div class="space-y-4">
            <p class="text-gray-600 leading-relaxed">
                Experience luxury and functionality with our signature Classic Leather Tote. Crafted from premium full-grain leather, 
                this timeless piece features a spacious interior, laptop compartment, and multiple organizer pockets.
            </p>
            <ul class="text-gray-600 space-y-2">
                <li class="flex items-center gap-2">
                <Icon name="uil:check" class="w-5 h-5 text-green-500" />
                Premium full-grain leather
                </li>
                <li class="flex items-center gap-2">
                <Icon name="uil:check" class="w-5 h-5 text-green-500" />
                Durable brass hardware
                </li>
                <li class="flex items-center gap-2">
                <Icon name="uil:check" class="w-5 h-5 text-green-500" />
                15" laptop compartment
                </li>
                <li class="flex items-center gap-2">
                <Icon name="uil:check" class="w-5 h-5 text-green-500" />
                Water-resistant lining
                </li>
            </ul>
            </div>
        <div class="flex items-center space-x-4">
          <div class="flex items-center">
            <Icon 
              v-for="star in 5" 
              :key="star"
              name="material-symbols:star" 
              class="w-5 h-5 text-green-500"
            />
          </div>
          <span class="text-sm text-gray-500">(128 reviews)</span>
        </div>
        <div class="py-4 border-t border-gray-200">
          <p class="text-3xl font-bold">KES 299.00</p>
          <p class="text-gray-600 text-sm">Premium handcrafted leather design</p>
        </div>
        <div class="py-4 border-t border-b border-gray-200">
          <div class="space-y-3">
            <h3 class="text-sm font-medium text-gray-900">Choose a Color</h3>
            <div class="flex items-center gap-3">
              <button
                v-for="color in colors"
                :key="color.name"
                @click="selectedColor = color"
                class="relative w-8 h-8 rounded-full focus:outline-none ring-2 ring-offset-2"
                :class="selectedColor.name === color.name ? 'ring-green-500' : 'ring-transparent'"
                :style="{ backgroundColor: color.value }"
              >
                <span class="sr-only">{{ color.name }}</span>
                <!-- Checkmark for selected color -->
                <svg
                  v-if="selectedColor.name === color.name"
                  class="absolute inset-0 w-5 h-5 m-1.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </div>
            <p class="text-sm text-gray-600">Selected: {{ selectedColor.name }}</p>
          </div>
        </div>
        <div class="py-4 ">
          <div class="space-y-3">
           
              <div class="flex items-center space-x-4">
                <div class="flex items-center py-3 px-3 border border-gray-300 bg-gray-100 rounded-full">
                  <button
                    @click="decrement"
                    class="px-3 py-1 text-gray-600 hover:bg-gray-200"
                    :disabled="quantity === 1"
                    >
                    <Icon 
                    
                      name="uil:minus" 
                      class="w-5 h-5 text-green-900"
                    />
                  </button>
                  <span class="px-6  border-gray-300">{{ quantity }}</span>
                  <button
                   @click="increment"
                   class="px-3 py-1 text-gray-600 hover:bg-gray-200"
                   :disabled="quantity === stockCount"
                  >
                  <Icon 
                    
                    name="uil:plus" 
                    class="w-5 h-5 text-green-900"
                  />
                  </button>
                </div>
                <span class="text-sm font-medium">
                  Only  <span class=" text-orange-500"> {{ stockCount }} items</span> left! <br> Dont miss it
                </span>
              </div>
          </div>
            <!-- Add to Cart -->
          <div class="flex justify-between space-x-8 mt-6">
            <button class="w-full bg-green-900 text-white py-4 px-6 rounded-full hover:bg-green-950">
              Buy Now
            </button>
            <button class="w-full text-gray-700  border-4 border-green-950 py-4 px-6 rounded-full hover:bg-green-950 hover:text-white">
              Add to Cart
            </button>
        </div>
        </div>
        <div class="border border-gray-200 rounded-lg p-4">
            <div class="grid grid-rows-2 divide-y divide-gray-200">
              <div class="pb-4">
                <div class="flex flex-col gap-2">
                  <div class="flex items-center gap-2">
                    <Icon name="uil:truck" class="w-5 h-5 text-orange-500" />
                    <h4 class="font-semibold text-gray-900">Free Delivery</h4>
                  </div>
                  <p class="text-sm text-gray-500 pl-7">Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <div class="pt-4">
                <div class="flex flex-col gap-2">
                  <div class="flex items-center gap-2">
                    <Icon name="uil:shield-check" class="w-5 h-5 text-orange-500" />
                    <h4 class="font-semibold text-gray-900">Return Delivery</h4>
                  </div>
                  <p class="text-sm text-gray-500 pl-7">Free 30 Days Delivery Returns. Details</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>

    <section class="mt-16">
    <h2 class="text-2xl font-bold mb-8">Related Products</h2>
    <Swiper
        :modules="[Navigation]"
        :breakpoints="breakpoints"
        :navigation="true"
        class="relative"
      >
      <SwiperSlide 
        v-for="product in relatedProducts" 
        :key="product.id"
        class="bg-white rounded-lg overflow-hidden"
      >
        <div class="relative bg-gray-100 aspect-square">
          <img 
            :src="product.image" 
            :alt="product.name"
            class="w-full h-full object-cover"
          >
          <button class="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md">
            <Icon name="uil:heart" class="w-5 h-5 text-gray-500" />
          </button>
        </div>
        <div class="p-4">
          <h3 class="font-medium text-gray-900">{{ product.name }}</h3>
          <div class="flex items-center mt-1">
            <div class="flex">
              <Icon 
                v-for="star in product.rating" 
                :key="star"
                name="material-symbols:star" 
                class="w-4 h-4 text-green-500"
              />
            </div>
          </div>
          <p class="mt-1 font-bold text-green-600">KES {{ product.price }}</p>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
  </div>
</template>


<style scoped>
.swiper-button-next,
.swiper-button-prev {
  @apply text-green-600;
}
</style>