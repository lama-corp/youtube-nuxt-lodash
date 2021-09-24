<template>
  <div class="flex items-top justify-center items-center py-40">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div
        class="content mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6"
      >
        <h2 class="text-2xl leading-7 font-semibold">
          {{ content }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    content: {
      type: String,
      default: 'Content',
    },
  },
}
</script>
