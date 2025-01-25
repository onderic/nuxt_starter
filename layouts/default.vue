<template>
  <div class="flex flex-col min-h-screen">
    <!-- Fixed Header -->
    <div class="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
      <AppHeader />
    </div>

    <!-- Scrollable Content -->
    <main class="flex-grow mt-[100px] ">
      <div class="sm:px-4 lg:px-0">
        <slot />
      </div>
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<style>
html, body {
  height: 100%;
  overflow-x: hidden;
}
</style>