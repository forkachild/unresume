<script lang="ts">
  import LinkedIcon from "../LinkedIcon.svelte";
  import TimelineIndicator from "../TimelineIndicator.svelte";

  export let publication: CVPublication;
</script>

<div>
  <div class="flex flex-row justify-between">
    <TimelineIndicator timeline={publication.timeline} />
    <p class="text-sm text-gray-500">{publication.type}</p>
  </div>
  <div class="flex flex-row items-center gap-2">
    <h3>{publication.title}</h3>
    {#if publication.link}
      <LinkedIcon icon="links" link={publication.link} />
    {/if}
  </div>
</div>
