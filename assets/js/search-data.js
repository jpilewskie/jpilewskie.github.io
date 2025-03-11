// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-homepage",
    title: "homepage",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-about",
          title: "about",
          description: "research interests - satellite remote sensing, convection, clouds, radiation, climate variability and change",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about/";
          },
        },{id: "nav-research",
          title: "research",
          description: "My work broadly focuses on studying clouds and storm systems within the context of their present-day impact on the Earth&#39;s climate. Storms are integral to the Earth’s climate system as they influence large-scale weather patterns and heating within the atmosphere, and produce significant amounts of rainfall. As atmospheric CO2 concentrations are increasing due to human activity, extreme weather events, such as increased droughts and intensifying hurricanes, are becoming more apparent across the globe, as discussed in the Intergovernmental Panel Climate Change (IPCC) Sixth Assessment (AR6) Synthesis Report. The changing extremes have direct effects on food and water security, and other such public health and economic impacts. Climate model projections indicate that storm system behavior is expected to continue altering in response to surface warming. Yet, climate models consistently misrepresent present-day weather extremes and rainfall amounts, and there are large sources of model spread and uncertainties in simulated future climate scenarios. Such errors arise because physical processes underlying weather and climate states are not adequately captured in models. The focus of my work, therefore, is to analyze signatures of these physical processes from satellite observations of cloud, precipitation, and their energetic features. Below outline my specific interests.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-resources",
          title: "resources",
          description: "Code and Data",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resources/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "projects-convective-system-characteristics-on-a-global-scale",
          title: 'Convective System Characteristics on a Global Scale',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/research/co_database";
            },},{id: "projects-how-many-quot-hot-towers-quot-occur-at-any-given-time",
          title: 'How Many &amp;quot;Hot Towers&amp;quot; Occur at any Given Time?',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/research/hot_towers";
            },},{id: "projects-a-lagrangian-perspective-of-convective-system-evolution",
          title: 'A Lagrangian Perspective of Convective System Evolution',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/research/cloud_tracking";
            },},{id: "projects-top-of-atmosphere-convective-cloud-radiative-effects",
          title: 'Top-of-Atmosphere Convective Cloud Radiative Effects',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/research/convection_radiation";
            },},{id: "projects-observational-constraints-of-high-cloud-feedbacks",
          title: 'Observational Constraints of High Cloud Feedbacks',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/research/high_cloud_feedbacks";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
