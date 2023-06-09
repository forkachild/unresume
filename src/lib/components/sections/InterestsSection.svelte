<script lang="ts">
  import TagFlow, { TagStyle } from "../elements/TagFlow.svelte";

  export let data: CVInterest[];
</script>

<TagFlow tags={data} style={TagStyle.LargeOutlined} />
