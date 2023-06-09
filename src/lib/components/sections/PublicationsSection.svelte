<script lang="ts">
  import Publication from "../elements/Publication.svelte";

  export let data: CVPublication[];

  $: filteredData = data.filter((k) => k.visible);
</script>

<ul class="flex flex-col gap-5 {$$props.class}">
  {#each filteredData as publication}
    <Publication {publication} />
  {/each}
</ul>
