<script lang="ts">
  export let title: string;
</script>

<div class="m-4 {$$props.class}">
  <h2 class="relative mb-4 inline-block">
    <div class="absolute end-0 start-0 top-0 h-0.5 bg-gray-500 content-none" />
    {title.toUpperCase()}
    <div
      class="absolute bottom-0 end-0 start-0 h-0.5 bg-gray-500 content-none"
    />
  </h2>
  <slot />
</div>
