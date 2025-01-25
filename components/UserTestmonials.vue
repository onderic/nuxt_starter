<script setup lang="ts">

import type { Testimonial } from '~/types/testmonial'

const testimonials = ref<Testimonial[]>([
  {
    id: 1,
    name: 'Sarah Johnson',
    image: '/assets/imgs/user.png',
    rating: 5,
    review: 'The quality of their bags is exceptional. I\'ve been a loyal customer for years and never disappointed.',
    position: 'Fashion Blogger',
  },
  {
    id: 2,
    name: 'Michael Chen',
    image: '/assets/imgs/user.png',
    rating: 5,
    review: 'Outstanding customer service and premium products. Highly recommended!',
    position: 'Business Executive',
  },
  {
    id: 3,
    name: 'Emma Williams',
    image: '/assets/imgs/user.png',
    rating: 4,
    review: 'Their collection is both stylish and practical. Perfect for modern professionals.',
    position: 'Interior Designer',
  },
])

const currentSlide = ref(0)

// Manual interval implementation
let intervalId: number

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % testimonials.value.length
}

onMounted(() => {
  intervalId = window.setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
    <section class="bg-gray-50 py-16">
        <div class="max-w-7xl mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>

            <div class="relative">
                <!-- Testimonial Slides -->
                <div class="overflow-hidden">
                    <div
                      class="flex transition-transform duration-500 ease-in-out"
                        :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                        <div
                           v-for="testimonial in testimonials" :key="testimonial.id"
                            class="w-full flex-shrink-0 px-4">
                            <div class="max-w-2xl mx-auto text-center">
                                <img
                                    :src="testimonial.image" :alt="testimonial.name"
                                    class="w-20 h-20 rounded-full bg-white mx-auto mb-6 object-cover">

                                <!-- Rating Stars -->
                                <div class="flex justify-center gap-1 mb-4">
                                    <Icon
                                     v-for="star in testimonial.rating" :key="star" name="material-symbols:star"
                                        class="h-5 w-5 text-green-500" />
                                </div>

                                <p class="text-gray-600 text-lg italic mb-6">
                                    "{{ testimonial.review }}"
                                </p>
                                <h4 class="font-semibold text-lg">{{ testimonial.name }}</h4>
                                <p class="text-gray-500">{{ testimonial.position }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Navigation Dots -->
                <div class="flex justify-center mt-8 space-x-2">
                    <button
v-for="(_, index) in testimonials" :key="index"
                        class="w-3 h-3 rounded-full transition-colors duration-200"
                        :class="currentSlide === index ? 'bg-green-600' : 'bg-gray-300'"
                        @click="currentSlide = index" />
                </div>
            </div>
        </div>
    </section>
</template>