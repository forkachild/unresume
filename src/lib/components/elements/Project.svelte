<script lang="ts">
  import LinkedIcon from "../LinkedIcon.svelte";
  import MarkdownText from "../MarkdownText.svelte";
  import TimelineIndicator from "../TimelineIndicator.svelte";
  import TagFlow, { TagStyle } from "./TagFlow.svelte";

  export let project: CVProject;
</script>

<div>
  <TimelineIndicator timeline={project.timeline} />
  <div class="flex flex-row items-center gap-2">
    <h3>{project.title}</h3>
    {#if project.link}
      <LinkedIcon icon="links" link={project.link} />
    {/if}
  </div>
  <p class="mt-1">{project.description}</p>
  <!-- svelte-ignore a11y-no-redundant-roles -->
  <TagFlow class="mt-2" tags={project.tags} style={TagStyle.SmallFilled} />
  <!-- svelte-ignore a11y-no-redundant-roles -->
  <ul class="ms-5 mt-2 flex flex-col gap-0.5" role="list">
    {#each project.achievements as achievement}
      <li class="list-disc">
        <MarkdownText text={achievement} />
      </li>
    {/each}
  </ul>
</div>
