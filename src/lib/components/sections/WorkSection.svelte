<script lang="ts">
  import Work from "../elements/Work.svelte";

  export let data: CVWork[];

  $: filteredData = data.filter((k) => k.visible);
</script>

<ul class="flex flex-col gap-8">
  {#each filteredData as work}
    <Work data={work} />
  {/each}
</ul>
