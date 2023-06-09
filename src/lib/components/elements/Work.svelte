<script lang="ts">
  import MarkdownText from "../MarkdownText.svelte";
  import TimelineIndicator from "../TimelineIndicator.svelte";
  import ProjectsSection from "../sections/ProjectsSection.svelte";

  export let data: CVWork;
</script>

<div>
  <div class="flex flex-row justify-between">
    <TimelineIndicator timeline={data.timeline} />
    <p class="text-sm text-gray-500">{data.location}</p>
  </div>
  <h3>{data.title}</h3>
  <h3 class="font-normal">{data.organisation}</h3>
  <ul class="ms-5 mt-2 flex flex-col">
    {#each data.achievements as achievement}
      <li class="list-disc">
        <MarkdownText text={achievement} />
      </li>
    {/each}
  </ul>
  <div class="ms-5 mt-5">
    <h4 class="italic">WORKED ON</h4>
    <ProjectsSection class="mt-3" data={data.projects} />
  </div>
</div>
