<script lang="ts">
  import TagFlow, { TagStyle } from "../elements/TagFlow.svelte";

  export let data: string[];
</script>

<TagFlow tags={data} style={TagStyle.LargeFilled} />
