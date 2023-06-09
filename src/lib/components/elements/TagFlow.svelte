<script lang="ts" context="module">
  export enum TagStyle {
    LargeFilled,
    LargeOutlined,
    SmallFilled,
  }
</script>

<script lang="ts">
  export let tags: string[];
  export let style: TagStyle;

  $: tagGapStyle = getTagGapStyle(style);
  $: tagPaddingStyle = getTagPaddingStyle(style);
  $: tagShadowStyle = getTagShadowStyle(style);
  $: tagBgStyle = getTagBGStyle(style);
  $: textColorStyle = getTextColorStyle(style);
  $: textSizeStyle = getTextSizeStyle(style);

  const getTagPaddingStyle = (style: TagStyle): string => {
    switch (style) {
      case TagStyle.LargeFilled:
      case TagStyle.LargeOutlined:
        return "px-2.5 py-1";
      case TagStyle.SmallFilled:
        return "px-2 py-0.5";
    }
  };

  const getTagBGStyle = (style: TagStyle): string => {
    switch (style) {
      case TagStyle.LargeFilled:
        return "bg-gray-800";
      case TagStyle.LargeOutlined:
      case TagStyle.SmallFilled:
        return "bg-gray-200";
    }
  };

  const getTextColorStyle = (style: TagStyle): string => {
    switch (style) {
      case TagStyle.LargeFilled:
        return "text-gray-100";
      case TagStyle.LargeOutlined:
      case TagStyle.SmallFilled:
        return "text-gray-800";
    }
  };

  const getTextSizeStyle = (style: TagStyle): string => {
    switch (style) {
      case TagStyle.LargeFilled:
      case TagStyle.LargeOutlined:
        return "text-sm";
      case TagStyle.SmallFilled:
        return "text-xs";
    }
  };

  const getTagGapStyle = (style: TagStyle): string => {
    switch (style) {
      case TagStyle.LargeFilled:
      case TagStyle.LargeOutlined:
        return "gap-1.5";
      case TagStyle.SmallFilled:
        return "gap-1";
    }
  };

  const getTagShadowStyle = (style: TagStyle): string => {
    switch (style) {
      case TagStyle.LargeFilled:
      case TagStyle.LargeOutlined:
        return "";
      case TagStyle.SmallFilled:
        return "shadow-sm shadow-gray-400";
    }
  };
</script>

<ul class="flex flex-row flex-wrap {tagGapStyle} {$$props.class}">
  {#each tags as tag}
    <li
      class="rounded-md font-medium {tagPaddingStyle} {tagShadowStyle} {tagBgStyle} {textColorStyle} {textSizeStyle}"
    >
      {tag}
    </li>
  {/each}
</ul>
