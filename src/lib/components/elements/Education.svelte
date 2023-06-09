<script lang="ts">
  import TimelineIndicator from "../TimelineIndicator.svelte";

  export let data: CVEducation;
</script>

<div>
  <div class="flex flex-row justify-between">
    <TimelineIndicator timeline={data.timeline} />
    <p class="text-sm text-gray-500">{data.grade}</p>
  </div>
  <h3 class="mt-1 font-semibold">{data.degree}</h3>
  <h3 class="font-normal">{data.institute}</h3>
</div>
