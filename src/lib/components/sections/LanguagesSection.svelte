<script lang="ts">
  import Language from "../elements/Language.svelte";

  export let data: CVLanguage[];

  $: filteredData = data.filter((k) => k.visible);
</script>

<ul class="grid grid-flow-row grid-cols-2 gap-4">
  {#each filteredData as language}
    <Language {language} />
  {/each}
</ul>
