<template>
  <div class="bg-red-100 min-h-screen">
    <LayoutHeader />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'LayoutBase'
}
</script>
