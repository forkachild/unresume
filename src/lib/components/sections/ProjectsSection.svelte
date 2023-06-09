<script lang="ts">
  import Project from "../elements/Project.svelte";

  export let data: CVProject[];

  $: filteredData = data.filter((k) => k.visible);
</script>

<ul class="flex flex-col gap-5 {$$props.class}">
  {#each filteredData as project}
    <Project {project} />
  {/each}
</ul>
