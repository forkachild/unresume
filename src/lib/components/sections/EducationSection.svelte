<script lang="ts">
  import Education from "../elements/Education.svelte";

  export let data: CVEducation[];

  $: filteredData = data.filter((k) => k.visible);
</script>

<ul class="flex flex-col gap-5">
  {#each filteredData as education}
    <Education data={education} />
  {/each}
</ul>
