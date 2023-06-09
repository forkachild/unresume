<script lang="ts">
  export let icon: string;
  export let style: "line" | "full" = "line";
  export let link: string | null = null;

  $: iconClass = getIconClass(icon, style);

  const getIconClass = (icon: string, style: string): string => {
    return `ri-${icon}-${style}`;
  };
</script>

{#if link == null}
  <i class="text-black {iconClass} {$$props.class}" />
{:else}
  <a href={link} class={$$props.class}>
    <i class="text-red-600 {iconClass}" />
  </a>
{/if}
