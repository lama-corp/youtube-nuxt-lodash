<template>
  <header class="bg-white shadow">
    <div
      class="
        max-w-7xl
        mx-auto
        px-2
        sm:px-4
        lg:divide-y lg:divide-gray-200 lg:px-8
      "
    >
      <div class="relative h-16 flex justify-between">
        <div class="relative z-10 px-2 flex lg:px-0">
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
          </div>
        </div>
        <div
          class="
            relative
            z-0
            flex-1
            px-2
            flex
            items-center
            justify-center
            sm:absolute sm:inset-0
          "
        >
          <h1>{{ title }}</h1>
        </div>
        <div class="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
          <!-- Profile dropdown -->
          <div class="flex-shrink-0 relative ml-4">
            <div>
              <button
                id="user-menu-button"
                type="button"
                class="
                  bg-white
                  rounded-full
                  flex
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://avatars.githubusercontent.com/u/12933109?s=60&amp;v=4"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <nav class="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global">
        <nuxt-link
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="
            bg-gray-100
            text-gray-900
            rounded-md
            py-2
            px-3
            inline-flex
            items-center
            text-sm
            font-medium
          "
        >
          {{ link.label }}
        </nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'LayoutHeader',
  props: {
    title: {
      type: String,
      default: 'Bienvenue ami du lama !',
    },
  },
  data() {
    return {
      links: [
        { to: '/', label: 'Accueil' },
      ],
    }
  },
}
</script>
