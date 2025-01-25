<script setup lang="ts">
import type { Category } from '~/types/category'

const categories = ref<Category[]>([
  {
    id: 1,
    name: 'Handbags',
    itemCount: 120,
    image: '/assets/imgs/2.png',
    icon: 'uil:bag',
  },
  {
    id: 2,
    name: 'Backpacks',
    itemCount: 85,
    image: '/assets/imgs/2.png',
    icon: 'uil:backpack',
  },
  {
    id: 3,
    name: 'Wallets',
    itemCount: 75,
    image: '/assets/imgs/2.png',
    icon: 'uil:wallet',
  },
  {
    id: 4,
    name: 'Travel Bags',
    itemCount: 65,
    image: '/assets/imgs/2.png',
    icon: 'uil:suitcase',
  },
  {
    id: 5,
    name: 'Accessories',
    itemCount: 95,
    image: '/assets/imgs/2.png',
    icon: 'uil:watch-alt',
  },
  {
    id: 6,
    name: 'Clutches',
    itemCount: 45,
    image: '/assets/imgs/2.png',
    icon: 'uil:backpack',
  },
])
</script>


<template>
    <div class="max-w-7xl mx-auto px-4">
      <h1 class="mb-10 capitalize font-bold text-xl">
        Popular Categories
      </h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
           v-for="category in categories" 
             :key="category.id" 
             class="relative group cursor-pointer">
          <div class="bg-gray-100 rounded-lg p-6 flex items-center space-x-4">
            <!-- Background Image -->
            <div class="relative w-24 h-24 bg-white p-1 rounded-lg overflow-hidden">
              <img
                  :src="category.image" 
                   :alt="category.name" 
                   class="w-full h-full object-cover"
              >
            </div>
            
            <!-- Icon & Details -->
            <div class="flex-1">
              <div class="bg-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3 shadow-sm">
                <Icon :name="category.icon" class="w-6 h-6 text-green-900" />
              </div>
              <h3 class="font-semibold text-lg">{{ category.name }}</h3>
              <p class="text-sm text-gray-500">{{ category.itemCount }} items</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>