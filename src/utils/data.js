//latest id : 15
const portfolioData = [
	{
		id: 10,
		title: "GUSTOSO",
		cat: ["react", "nextjs"],
		img: "/react/food/food.jpg",
		descTitle: "Technology involved:",
		desc: "Next.js React Framework, Tailwind CSS and responsive design, Prisma database, PostgreSQL, Functional components, Auth.js google authentication, Next.js data fetching (getData), zustand state management tool, React query by TanStack, Slick slider",
		youtubeId: "l702OToZaEQ",
		code: "https://github.com/zh3nhua94/food-app",
		demo: "https://gustoso-food-app.vercel.app/",
		featured: true,
	},
	{
		id: 9,
		title: "Zen Enterprise",
		cat: ["react", "nextjs"],
		img: "/react/company/company-5.jpg",
		descTitle: "Technology involved:",
		desc: "Next.js React Framework, Functional components, Dark/Light more toggle, Auth.js authentication, Next.js data fetching (getData), Next.js Context API actions and reducers, Next.js SWR mutation, CRUD operations to MongoDB",
		youtubeId: "47gkKwgTv4c",
		code: "https://github.com/zh3nhua94/nextjs-company",
		demo: "https://zenenterprise.vercel.app/",
		featured: true,
	},
	{
		id: 8,
		title: "Flow Club",
		cat: "react",
		img: "/react/blog/blog-pic-1.jpg",
		descTitle: "Technology involved:",
		desc: "React router DOM, Functional components, Google Fonts, Express, Node.js request query, Dynamic data fetching with Axios and hooks, React Context API actions and reducers, CRUD operations to MongoDB",
		youtubeId: "rmbOb2yn048",
		code: "https://github.com/zh3nhua94/flowclub-blog",
		demo: "https://flowclub.vercel.app/",
		featured: true,
	},
	{
		id: 13,
		title: "Challenge by Corplabs",
		cat: ["react", "nextjs"],
		img: "/react/car/corplabs-carpool.jpg",
		descTitle: "Challenge:",
		desc: "Using any framework build on React and the provided JSON file, create a page that includes a table fulfilling the following:\n- Can be filtered by (isInProduction, brand, model, color)\n- Has pagination & user can select how much to see each page\n- Sorted & filtered results can be shared by link",
		youtubeId: "PBPHF1M4lFU",
		code: "https://github.com/zh3nhua94/car-listing",
		url: "https://carpool-coral.vercel.app/",
		featured: true,
	},
	{
		id: 7,
		title: "ZenSocial",
		cat: "react",
		img: "/react/social/social-pic2.jpg",
		descTitle: "Technology involved:",
		desc: "React router DOM, Functional components, Material icons, Dynamic data fetching with Axios and hooks, React Context API actions and reducers, CRUD operations to MongoDB",
		youtubeId: "L4xl12YKM9g",
		code: "https://github.com/zh3nhua94/zen-social-api",
		featured: true,
	},
	{
		id: 15,
		title: "Autumn. Ecommerce Shop",
		cat: ["react", "frontend"],
		img: "/react/ecommerce/autumn-shop.jpg",
		siteImg: "/react/ecommerce/autumn-shop.jpg",
		descTitle: "Technology involved:",
		desc: "React router DOM, Functional components, Material icons, Dynamic data fetching with Axios and hooks, React Context API actions and reducers, CRUD operations to MongoDB",
		code: "https://github.com/zh3nhua94/autumn-ecommerce",
	},
	{
		id: 16,
		title: "Mobile Job Search App",
		cat: ["react-native"],
		img: "/mobile/mobile-job-app-img.jpg",
		siteImg: "/mobile/mobile-job-app-img.jpg",
		descTitle: "Technology involved:",
		desc: "React Native, Expo Router, Functional components, Dynamic data fetching with custom useFetch hook, axios, rapid API",
		code: "https://github.com/zh3nhua94/mobile-job-app",
	},
	{
		id: 14,
		title: "Sweather Weather",
		cat: ["vuejs", "frontend"],
		img: "/vuejs/weather/weather.jpg",
		siteImg: "/vuejs/weather/weather_2.jpg",
		descTitle: "Technology involved:",
		desc: "Vue.js, Vite, Tailwind CSS, Dynamic data fetching with Axios and hooks, Open Weather Map API, MapBox API",
		code: "https://github.com/zh3nhua94/weather/",
		url: "https://sweather-weather.vercel.app/",
	},
	{
		id: 1,
		title: "VitaHealth",
		cat: "frontend",
		img: "/portfolio/vitahealth.jpg",
		siteImg: "/portfolio/Vitahealth-Ecommerce.jpeg",
		desc: "Vitahealth did a brand refresh by featuring dynamic people of different life stages and vibrant lifestyles. We also featured a diversity of visual elements curated to set apart different life stages in a vibrant way. Our creative elevated the entire brand and is now communicated throughout all regions for branding consistency purposes.",
		url: "https://www.vitahealth.com.my/",
	},
	{
		id: 2,
		title: "UOW Malaysia KDU",
		cat: "frontend",
		img: "/portfolio/uow.jpg",
		siteImg: "/portfolio/uow-1.jpeg",
		desc: "This was a rebranding exercise in line with the transition of KDU University Colleges into University of Wollongong (UOW) Malaysia KDU that will now see new international education and research opportunities through the UOW Global Network. UOW's consistent branding would help to distinguish its offerings and institutions in the competitive higher education space, helping audiences find, choose and trust UOW.",
		url: "https://www.uow.edu.my/",
	},
	{
		id: 3,
		title: "Securities Industry Development Corporation",
		cat: "frontend",
		img: "/portfolio/sidc.jpg",
		siteImg: "/portfolio/sidc-1.jpeg",
		desc: "SIDC is the leading capital market learning and development solutions provider for industry participants in Malaysia. In order to demonstrate value to its target market, we created a unique navigation solution that lets visitors explore different content tailored to their specific needs. We also introduced a versatile calendar and filtering feature to promote all programmes dynamically. All in all, we achieved a seamless user and browsing experience.",
		url: "https://www.sidc.com.my/",
	},
	{
		id: 4,
		title: "Avenue K",
		cat: "frontend",
		img: "/portfolio/ak.jpg",
		siteImg: "/portfolio/ak-1.jpeg",
		desc: "At the core of the Avenue K brand is its experience with customers, being Kuala Lumpur's coolest urban hub that aims to indulge retail desires, entertainment needs and food enthusiasts. As a result, the website is designed to associate with excitement and happenings, portraying that boundless good times and great company are what make life celebrated.",
		url: "https://www.avenuek.com.my/",
	},
	{
		id: 5,
		title: "Hua Yang Berhad",
		cat: "frontend",
		img: "/portfolio/huayang.jpg",
		siteImg: "/portfolio/huayang-1.jpeg",
		desc: "In order to exceed the expectations of Hua Yang's existing customers and attract new prospects, the client needed to deliver an optimised web experience with a facelift. Hence we united all parts of its brand and corporate identity, while offering a premium look and effortless usability. Cloud motifs are also used in order to create a stronger impact in line with its brand tagline, 'Your Dreams, Made Affordable'.",
		url: "https://huayang.com.my/",
	},
	{
		id: 6,
		title: "Land Pacific Group",
		cat: "frontend",
		img: "/portfolio/land.jpg",
		siteImg: "/portfolio/land-pacific-1.jpeg",
		desc: "In an effort to develop a corporate branding campaign, the client seeks to be recognised as not only a builder of quality homes, but also the builder of dreams and the creator of the perfect abode. The night sky design depicts dreams taking shape and Land Pacific is here to make your dream of owning a home come true.",
		url: "https://landpacific.com/",
	},
	{
		id: 11,
		title: "Technigroup Far East Pte Ltd",
		cat: "frontend",
		img: "/portfolio/technigroup.jpg",
		siteImg: "/portfolio/technigroup.jpg",
		url: "https://www.technigroup.com.sg/",
	},
	{
		id: 12,
		title: "C.S.Yap",
		cat: "frontend",
		img: "/portfolio/csyap.jpg",
		siteImg: "/portfolio/csyap.jpg",
		url: "https://www.csyap.com.my/",
	},
];

export default portfolioData;
