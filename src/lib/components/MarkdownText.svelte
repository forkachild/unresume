<script lang="ts">
  import { marked } from "marked";

  export let text: string;

  $: htmlText = marked.parse(text, { mangle: false, headerIds: false });
</script>

<p class={$$props.class}>{@html htmlText}</p>
