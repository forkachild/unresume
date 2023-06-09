<script lang="ts">
  export let timeline: CVTimeline;

  const formatTimelineText = (timeline: CVTimeline): string => {
    if (Array.isArray(timeline) && timeline.length === 2)
      return `${timeline[0]} - ${timeline[1]}`;
    else if (typeof timeline === "string") return timeline;

    throw Error("Invalid timeline type");
  };
</script>

<p class="text-gray-500">{formatTimelineText(timeline)}</p>
