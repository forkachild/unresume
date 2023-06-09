<script lang="ts">
  import TitledSectionContainer from "$lib/components/TitledSectionContainer.svelte";
  import EducationSection from "$lib/components/sections/EducationSection.svelte";
  import HeaderSection from "$lib/components/sections/HeaderSection.svelte";
  import InterestsSection from "$lib/components/sections/InterestsSection.svelte";
  import ProjectsSection from "$lib/components/sections/ProjectsSection.svelte";
  import PublicationsSection from "$lib/components/sections/PublicationsSection.svelte";
  import SkillSection from "$lib/components/sections/SkillSection.svelte";
  import WorkSection from "$lib/components/sections/WorkSection.svelte";

  export let data: CVModel;
</script>

<HeaderSection data={data.basic} class="m-4" />
<div class="flex flex-row gap-4">
  <div class="flex flex-1 flex-col gap-4">
    <TitledSectionContainer title="Skills">
      <SkillSection data={data.skills} />
    </TitledSectionContainer>
    <TitledSectionContainer title="Work Experience">
      <WorkSection data={data.work} />
    </TitledSectionContainer>
  </div>
  <div class="flex flex-1 flex-col gap-4">
    <TitledSectionContainer title="Personal Projects">
      <ProjectsSection data={data.projects} />
    </TitledSectionContainer>
    <TitledSectionContainer title="Education">
      <EducationSection data={data.education} />
    </TitledSectionContainer>
    <TitledSectionContainer title="Publications">
      <PublicationsSection data={data.publications} />
    </TitledSectionContainer>
    <TitledSectionContainer title="Interests">
      <InterestsSection data={data.interests} />
    </TitledSectionContainer>
  </div>
</div>
