<template>
  <div
    class="grid grid-rows-[1fr,auto] h-screen overflow-hidden max-w-screen-mobile m-auto"
  >
    <div class="overflow-auto"><router-view /></div>
    <nav
      class="grid grid-cols-4 place-content-evenly justify-items-center py-6"
    >
      <router-link
        :to="{ name: 'home' }"
        :class="{ 'active-link': $route.name === 'home' }"
        ><svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <g id="_01_align_center" data-name="01 align center">
            <path
              d="M13.338.833a2,2,0,0,0-2.676,0L0,10.429v10.4a3.2,3.2,0,0,0,3.2,3.2H20.8a3.2,3.2,0,0,0,3.2-3.2v-10.4ZM15,22.026H9V17a3,3,0,0,1,6,0Zm7-1.2a1.2,1.2,0,0,1-1.2,1.2H17V17A5,5,0,0,0,7,17v5.026H3.2a1.2,1.2,0,0,1-1.2-1.2V11.319l10-9,10,9Z"
            />
          </g>
        </svg>
      </router-link>
      <router-link
        :class="{ 'active-link': $route.name === 'search' }"
        :to="{ name: 'search' }"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          id="Outline"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path
            d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"
          />
        </svg>
      </router-link>
      <span
        ><img
          src="./assets/discover.svg"
          alt="Discover"
          width="20"
          height="20"
        />
      </span>
      <span
        ><img src="./assets/user.svg" alt="Profile" width="20" height="20"
      /></span>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.active-link {
  color: #7a4df0;
}
</style>
