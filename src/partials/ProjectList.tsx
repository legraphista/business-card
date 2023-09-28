import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        My <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Joi Tester"
        description="Quick joi schema validation tool, complete with localized error messages."
        link="https://joi-tester.corneroftheinternet.rocks"
        img={{
          src: '/assets/images/projects/joi-tester.png',
          alt: 'Joi Tester',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>React</Tags>
            <Tags color={ColorTags.LIME}>Typescript</Tags>
            <Tags color={ColorTags.SKY}>Joi</Tags>
          </>
        }
      />
      <Project
        name="Destiny 2 Weapon Breakdown"
        description="Useful for inventory management and disposal of redundant weapons. Helps you find duplicates, easily compare them across damage type, weapon type, archetype and slot."
        link="https://d2-weapons-breakdown.pages.dev/"
        img={{
          src: '/assets/images/projects/d2-weapon-breakdown.png',
          alt: 'Destiny 2 Weapon Breakdown',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>React</Tags>
            <Tags color={ColorTags.LIME}>Typescript</Tags>
            <Tags color={ColorTags.ROSE}>MUI</Tags>
          </>
        }
      />
      <Project
        name="Destiny 2 Vendor Armor"
        description="Helps you easily check this week's vendors armor stats at a quick glance across all vendors and get indication of best roles."
        link="/"
        img={{
          src: '/assets/images/projects/d2-vendors.png',
          alt: 'Destiny 2 Vendor Armor',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>React</Tags>
            <Tags color={ColorTags.LIME}>Typescript</Tags>
            <Tags color={ColorTags.ROSE}>MUI</Tags>
          </>
        }
      />
      <Project
        name="CautaMedicamente.ro"
        description="A tool to seach the available stock of medicine in pharmacies near you. Built on top of each pharmacy's own inventory and stock system. The project currently covers only Romania and aims to have all pharmacies encolled in the search. Currently this is in standby due to lack of personal time."
        link="https://alpha.cautamedicamente.ro/"
        img={{
          src: '/assets/images/projects/cautamedicamente.png',
          alt: 'CautaMedicamente.ro',
        }}
        category={
          <>
            <Tags color={ColorTags.RED}>WIP</Tags>
            <Tags color={ColorTags.FUCHSIA}>React</Tags>
            <Tags color={ColorTags.LIME}>Typescript</Tags>
            <Tags color={ColorTags.ROSE}>MUI</Tags>
            <Tags color={ColorTags.ORANGE}>CF Workers / D1</Tags>
            <Tags color={ColorTags.CYAN}>DBSCAN</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
