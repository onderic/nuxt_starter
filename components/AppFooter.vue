<template>
    <footer class="bg-gray-100 mt-20">
      <div class="max-w-7xl mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Company Info -->
          <div class="space-y-4">
            <h3 class="font-bold text-xl">MW</h3>
            <p class="text-gray-600 text-sm">Your ultimate destination for luxury bags and accessories.</p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-600 hover:text-green-600">
                <Icon name="mdi:facebook" class="w-6 h-6" />
              </a>
              <a href="#" class="text-gray-600 hover:text-green-600">
                <Icon name="mdi:twitter" class="w-6 h-6" />
              </a>
              <a href="#" class="text-gray-600 hover:text-green-600">
                <Icon name="mdi:instagram" class="w-6 h-6" />
              </a>
            </div>
          </div>
  
          <!-- Quick Links -->
          <div>
            <h4 class="font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-600 hover:text-green-600 text-sm">About Us</a></li>
              <li><a href="#" class="text-gray-600 hover:text-green-600 text-sm">Contact</a></li>
              <li><a href="#" class="text-gray-600 hover:text-green-600 text-sm">FAQs</a></li>
              <li><a href="#" class="text-gray-600 hover:text-green-600 text-sm">Privacy Policy</a></li>
            </ul>
          </div>
  
          <!-- Categories -->
          <div>
            <h4 class="font-semibold mb-4">Categories</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-600 hover:text-green-600 text-sm">Handbags</a></li>
              <li><a href="#" class="text-gray-600 hover:text-green-600 text-sm">Backpacks</a></li>
              <li><a href="#" class="text-gray-600 hover:text-green-600 text-sm">Travel Bags</a></li>
              <li><a href="#" class="text-gray-600 hover:text-green-600 text-sm">Accessories</a></li>
            </ul>
          </div>
  
          <!-- Newsletter -->
          <div>
            <h4 class="font-semibold mb-4">Newsletter</h4>
            <p class="text-gray-600 text-sm mb-4">Subscribe for updates and exclusive offers</p>
            <form class="space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
              >
              <button class="w-full bg-green-900 text-white px-4 py-2 rounded-md hover:bg-green-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
  
      <!-- Copyright Bar -->
      <div class="border-t border-gray-200">
        <div class="max-w-7xl mx-auto px-4 py-4">
          <p class="text-center text-sm text-gray-600">
            © 2024 MW. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </template>