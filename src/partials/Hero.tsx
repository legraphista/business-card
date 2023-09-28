import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Ștefan</GradientText>{' '}
          <div className="inline-block animate-bounce">👋</div>
        </>
      }
      description={
        <>
          Joined{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="https://web.archive.org/web/20171002062424/https://findie.co/"
          >
            Findie
          </a>{' '}
          from it's inception in 2014 aiming to provide a Netflix for shorts
          platform. Pivoted to{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="https://kamua.com/"
          >
            Kamua
          </a>{' '}
          around 2019, an AI centric video editing platform. Got acquitted by{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="https://jellysmack.com/"
          >
            JellySmack 🦄
          </a>{' '}
          in 2021.
          <br />
          Currently tasked with creating internal video editing tools, ML & AI
          pipelines, and other <i>special ✨ projects</i>.
          <br />
          Over 9+ years of experience in the video space, building workflows,
          AI, and products.
          <br />
          <br />
          By day, I'm a technologist. Always looking to create meaningful tech.
          <br />
          By night, I'm a gamer and a tinkerer. Always eager to learn new
          things.
        </>
      }
      avatar={
        <img
          className="h-64 w-64 rounded-3xl"
          src="/assets/images/avatar.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <div className="mb-8 flex w-full flex-row justify-center md:mb-0 md:justify-start">
          <a href="https://github.com/legraphista">
            <HeroSocial
              src="/assets/images/github-icon.svg"
              alt="Github icon"
            />
          </a>
          <a href="https://twitter.com/legraphista">
            <HeroSocial
              src="/assets/images/twitter-icon.svg"
              alt="Twitter icon"
            />
          </a>
          {/* <a href="/"> */}
          {/*  <HeroSocial */}
          {/*    src="/assets/images/facebook-icon.png" */}
          {/*    alt="Facebook icon" */}
          {/*  /> */}
          {/* </a> */}
          <a href="https://www.linkedin.com/in/stefangabriel/">
            <HeroSocial
              src="/assets/images/linkedin-icon.svg"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://www.youtube.com/channel/UCODTTNnONsrZUnLnz3WiZaw">
            <HeroSocial
              src="/assets/images/youtube-icon.svg"
              alt="Youtube icon"
            />
          </a>
        </div>
      }
    />
  </Section>
);

export { Hero };
