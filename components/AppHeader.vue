<script setup lang="ts">

const isOpen = ref(false)
const isCategoryOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)
const route = useRoute()

const categories = [
  'Electronics',
  'Clothing',
  'Home & Garden',
  'Sports',
  'Books',
  'Toys',
  'Health & Beauty',
  'Automotive',
]
const selectedCategory = ref(categories[0])

const searchQuery = ref('')

const cartItemCount = ref(2)

const handleSearch = () => {
  console.log('Searching for:', searchQuery.value)
}
// Close dropdown when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isCategoryOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const links = computed(() => [{
  label: 'Deals',
  to: '#deals',
  icon: 'fa:credit-card',
  active: route.hash === '#deals',
}, {
  label: 'Whats New',
  to: '#whatsnew',
  icon: 'fa:graduation-cap',
  active: route.hash === '#whatsnew',
}, {
  label: 'Delivery',
  to: '#delivery',
  icon: 'fa:question-circle',
  active: route.hash === '#delivery',
}])

const languages = ['Swahili', 'Español', 'Français']
const locations = ['Nairobi', 'London', 'Paris', 'Tokyo']
const selectedLang = ref('Swahili')
const selectedLocation = ref('Nairobi')

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
   <div class="bg-green-800  py-1 text-white">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <!-- Phone -->
      <div class="hidden sm:flex items-center space-x-2">
        <Icon name="fa:phone" class="h-4 w-4" />
        <span class="text-sm">+1 234 567 890</span>
      </div>

      <!-- Promo Message -->
      <div class="text-center text-sm font-medium">
        <span class="hidden sm:inline">🎉 Special Offer:</span> Get 50% off selected items!
      </div>

      <!-- Language & Location -->
      <div class="flex items-center space-x-4">
        <select 
          v-model="selectedLang"
          class="bg-green-800 text-sm rounded px-2 py-1 border-none outline-none"
        >
          <option v-for="lang in languages" :key="lang" :value="lang">
            {{ lang }}
          </option>
        </select>

        <select 
          v-model="selectedLocation"
          class="bg-green-800 text-sm rounded px-2 py-1 border-none outline-none"
        >
          <option v-for="loc in locations" :key="loc" :value="loc">
            {{ loc }}
          </option>
        </select>
      </div>
    </div>
  </div>
  <nav class="">
    <div class="max-w-7xl mx-auto">
      <div class="flex justify-between h-16">
        <!-- Logo Section -->
        <div class="flex-shrink-0 flex items-center">
          <img class="h-8 w-auto" src="/public/favicon.ico" alt="Logo">
         <h1 class="text-green-900 font-bold text-lg ml-2"> ShopCart</h1>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden sm:flex items-center space-x-8">
          <!-- Categories Dropdown -->
          <div ref="dropdownRef" class="relative">
            <button 
              class="flex items-center space-x-2 text-gray-700  font-medium border-none"
              @click="isCategoryOpen = !isCategoryOpen"
            >
              <span>Categories</span>
              <Icon 
                :name="isCategoryOpen ? 'fa:chevron-up' : 'fa:chevron-down'" 
                class="h-4 w-4"
              />
            </button>
            
            <!-- Dropdown Menu -->
            <div 
              v-show="isCategoryOpen"
              class="absolute z-50 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            >
              <div class="py-1">
                <a
                  v-for="category in categories"
                  :key="category"
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  @click="selectedCategory = category; isCategoryOpen = false"
                >
                  {{ category }}
                </a>
              </div>
            </div>
          </div>

          <!-- Other Navigation Links -->
          <NuxtLink 
            v-for="link in links" 
            :key="link.label"
            :to="link.to"
            :class="[
              'px-3 py-2 rounded-md font-medium transition-colors',
              link.active 
                ? 'text-green-600 bg-green-50' 
                : 'text-gray-700 hover:text-gray-900'
            ]"
          >
          <Icon 
            :name="link.icon"
            class="h-6 w-6 sm:hidden mr-2"
            :class="link.active ? 'text-green-600' : 'text-gray-700'"
          />
            <span>{{ link.label }}</span>
          </NuxtLink>
        </div>

        <!-- serch bar -->
        <div class="hidden sm:flex items-center">
          <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search for products..."
            class="w-full px-4 py-2 pl-10 pr-4 text-sm text-gray-900 bg-gray-100 rounded-full focus:outline-none focus:bg-white focus:ring-2 focus:ring-green-500"
            @keyup.enter="handleSearch"
          >
          <div class="absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon 
              name="fa:search" 
              class="h-5 w-5 text-gray-400"
            />
          </div>
        </div>
        </div>
        <!--  Button -->
        <div class="hidden sm:flex items-center space-x-4">
          
          <!-- Account Icon -->
          <div class="p-2 text-gray-600 hover:text-gray-900 flex items-center">
            <div class="relative">
              <Icon name="uil:user" class="h-6 w-6" />
            </div>
            <span class="text-sm font-semibold ml-2">
              Account
            </span>
          </div>

          <!-- Cart Icon -->
          <div class="p-2 text-gray-600 hover:text-gray-900 flex items-center">
          <div class="relative">
            <Icon name="uil:cart" class="h-6 w-6" />
            <span 
              v-if="cartItemCount > 0" 
              class="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
            >
              {{ cartItemCount }}
            </span>
          </div>
          <span class="text-sm font-semibold ml-2">
            Cart
          </span>
        </div>
        </div>

        <!-- Mobile menu button -->
        <div class="sm:hidden flex items-center">
          <button 
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500"
            @click="toggleMenu"
          >
          <Icon
            :name="isOpen ? 'uil:times' : 'fa:bars'"
            style="color: black"
            class="h-6 w-6"
          />

          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isOpen" class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <NuxtLink
          v-for="link in links"
          :key="link.label"
          :to="link.to"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
        >
          <Icon 
            :name="link.icon"
            class="h-6 w-6 sm:hidden mr-2"
            style="color: black"
          />
          <span>{{ link.label }}</span>
        </NuxtLink>
        <button class="w-full mt-4 bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700">
          Login
        </button>
      </div>
    </div>
  </nav>
</template>