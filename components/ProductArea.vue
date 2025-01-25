<script setup lang="ts">
import type { Product } from '~/types/product'

const products = ref<Product[]>([
  {
    id: 1,
    name: 'Classic Leather Tote',
    price: 299,
    image: '/assets/imgs/2.png',
    brand: 'Premium handcrafted leather design',
    rating: 4,
    totalRatings: 100,
  },
  {
    id: 2,
    name: 'Elegant Crossbody Bag',
    price: 199,
    image: '/assets/imgs/p.png',
    brand: 'Versatile everyday carry companion',
    rating: 3,
    totalRatings: 128,
  },
  {
    id: 3,
    name: 'Designer Clutch',
    price: 499,
    image: '/assets/imgs/p.png',
    brand: 'Luxury evening party essential',
    rating: 4,
    totalRatings: 120,
  },
  {
    id: 4,
    name: 'Casual Shoulder Bag',
    price: 149,
    image: '/assets/imgs/3.png',
    brand: 'Comfortable lightweight daily bag',
    rating: 3,
    totalRatings: 128,
  },
  {
    id: 5,
    name: 'Premium Backpack',
    price: 399,
    image: '/assets/imgs/2.png',
    brand: 'Spacious water resistant travel',
    rating: 5,
    totalRatings: 128,
  },
  {
    id: 6,
    name: 'Mini Travel Bag',
    price: 249,
    image: '/assets/imgs/3.png',
    brand: 'Compact weekend getaway companion',
    rating: 1,
    totalRatings: 150,
  },
  {
    id: 7,
    name: 'Canvas Weekender',
    price: 279,
    image: '/assets/imgs/2.png',
    brand: 'Durable stylish travel essential',
    rating: 5,
    totalRatings: 89,
  },
  {
    id: 8,
    name: 'Minimalist Satchel',
    price: 189,
    image: '/assets/imgs/p.png',
    brand: 'Modern professional daily companion',
    rating: 4,
    totalRatings: 167,
  },
])

const filters = ['Material', 'Price Range', 'Style', 'Color', 'Size', 'Brand']
const activeFilter = ref<number | null>(null)

const toggleFilter = (index: number) => {
  activeFilter.value = activeFilter.value === index ? null : index
}

const navigateToProduct =(id: number) => {
  navigateTo(`/products/${id}`)
}

</script>
<template>
  <div class="max-w-7xl mx-auto px-4 ">
    <!-- Filter Buttons -->
    <div class="flex justify-between items-start mb-10">
      <div class="flex flex-wrap gap-4 items-center">
        <div v-for="(filter, index) in filters" :key="filter" class="relative">
          <button
            class="px-4 py-2 bg-gray-100 text-sm border rounded-full hover:bg-gray-50 flex items-center"
            @click="toggleFilter(index)">
            {{ filter }}
            <Icon name="fa:chevron-down" class="ml-2 h-2 w-3 text-gray-500" />
          </button>
        </div>
      </div>

      <button class="px-4 py-2 bg-gray-100 border text-sm rounded-full hover:bg-gray-50 flex items-center">
        Sort By
        <Icon name="fa:chevron-down" class="ml-2 h-4 w-4 text-gray-500" />
      </button>
    </div>
    <h1 class="mb-10 capitalize font-bold text-xl">leather Bags for you!</h1>
    <!-- Products Grid -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div v-for="product in products" :key="product.id" class="rounded-sm overflow-hidden flex flex-col">
        <div class="relative bg-gray-100 h-[300px]">
          <div class="relative w-full h-full p-10">
            <div 
              class="relative w-full h-full rounded-lg overflow-hidden cursor-pointer" 
              @click="navigateToProduct(product.id)"
            >
              <img 
              :src="product.image" 
                  :alt="product.name"
                  class="w-full h-full object-cover transform scale-95 transition-transform duration-300 hover:scale-100">
            </div>
          </div>
          <!-- Button moved here, outside padding area -->
          <button
            class="absolute top-4 right-4 p-2.5 bg-white rounded-full hover:bg-green-500  hover:text-white flex items-center justify-center w-10 h-10 z-10">
            <Icon name="uil:heart" class="h-5 w-5 text-gray-500 hover:text-white" />
          </button>
        </div>


        <div class="py-4 flex-1 flex flex-col justify-between">
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-serif font-semibold text-gray-900">{{ product.name }}</h3>
            <span class="text-sm font-serif font-semibold text-gray-900">${{ product.price }}</span>
           
          </div>
          <p class="text-gray-800 font-sans text-xs py-2">{{ product.brand }}</p>
           <!-- Add Rating Stars -->
           <div class="flex items-center gap-2 py-1">
            <div class="flex gap-0.5">
              <Icon 
                v-for="star in 5" 
                :key="star"
                :name="star <= product.rating ? 'material-symbols:star' : 'material-symbols:star-outline'"
                class="h-4 w-4 text-green-500"
              />
            </div>
            <span class="text-xs text-gray-500">({{ product.totalRatings }})</span>
          </div>
          <div class="mt-2 flex items-center justify-between">
          
            <button class="bg-green-900 text-white px-4 py-2 rounded-full text-sm hover:bg-green-950">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>