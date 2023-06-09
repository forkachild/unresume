<script lang="ts">
  import LinkedIcon from "../LinkedIcon.svelte";
  import MarkdownText from "../MarkdownText.svelte";

  export let data: CVBasic;

  $: filteredSocial = data.social.filter((k) => k.visible);

  const getLinkForSocial = (social: CVSocial): string => {
    const type = social.type;
    const value = social.value;

    switch (type) {
      case "email":
        return `mailto:${value}`;
      case "mobile":
        return `tel:${value}`;
      case "location":
        return `https://maps.google.com/maps?q=${value}`;
      case "linkedin":
        return `https://www.linkedin.com/in/${value}`;
      case "github":
        return `https://github.com/${value}`;
      case "medium":
        return `https://medium.com/${value}`;
    }
  };

  const getIconForSocialType = (type: CVSocialType): string => {
    switch (type) {
      case "email":
        return "mail";
      case "mobile":
        return "smartphone";
      case "location":
        return "map-pin";
      case "linkedin":
        return "linkedin";
      case "github":
        return "github";
      case "medium":
        return "medium";
    }
  };
</script>

<div class="grid grid-cols-header grid-rows-1 gap-3 {$$props.class}">
  <div>
    <h1>{data.name}</h1>
    <h3 class="text-gray-600">{data.title}</h3>
    <MarkdownText class="mt-3" text={data.about} />
  </div>
  <img
    src={data.profile}
    alt="Profile"
    class="mx-4 h-48 w-48 justify-self-center rounded-full align-middle shadow-md shadow-gray-300"
  />
  <ul class="flex flex-col gap-2">
    {#each filteredSocial as social}
      <li class="flex flex-row items-baseline justify-end gap-4">
        <p class="inline-block font-medium">{social.value}</p>
        <LinkedIcon
          icon={getIconForSocialType(social.type)}
          link={getLinkForSocial(social)}
        />
      </li>
    {/each}
  </ul>
</div>
