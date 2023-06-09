type CVBasic = {
    name: string;
    title: string;
    about: string;
    profile: string;
    social: CVSocial[];
}

type CVSocialType = "email" | "mobile" | "location" | "linkedin" | "github" | "medium";
type CVSkill = string;
type CVInterest = string;
type CVTimeline = string | string[];

type CVSocial = {
    visible: boolean;
    type: CVSocialType;
    value: string;
}

type CVWork = {
    visible: boolean;
    title: string;
    organisation: string;
    location: string;
    timeline: CVTimeline,
    achievements: string[];
    projects: CVProject[];
}

type CVProject = {
    visible: boolean;
    title: string;
    description: string;
    timeline: CVTimeline;
    team: string;
    link?: string;
    achievements: string[];
    tags: string[];
}


type CVEducation = {
    visible: boolean;
    degree: string;
    institute: string;
    timeline: CVTimeline;
    grade: string;
}

type CVPublication = {
    visible: boolean;
    type: string;
    title: string;
    timeline: CVTimeline;
    link?: string;
}

type CVLanguage = {
    visible: boolean;
    name: string;
    proficiency: string;
}

type CVModel = {
    basic: CVBasic;
    skills: CVSkill[];
    work: CVWork[];
    projects: CVProject[];
    education: CVEducation[];
    publications: CVPublication[];
    languages: CVLanguage[];
    interests: CVInterest[];
}