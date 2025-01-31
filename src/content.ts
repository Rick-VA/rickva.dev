import { differenceInYears } from "date-fns"

// Personal Information --> #hero section
export const name = "Rick van Assen"
export const designation = "Software / DevOps Engineer"
export const location = "Hasselt, Overijssel, Nederland"
export const pronouns = ""
export const website = "https://rickva.dev"

const age = differenceInYears(Date.now(), "2005-02-07")
// About
export const about = `Hallo, mijn naam is Rick van Assen, ${age} jaar oud en op dit moment werk ik als Software / DevOps Engineer bij brainhive. In mijn vrije tijd programmeer ik graag, speel ik games, doe ik windsurfen en ga ik graag uit met vrienden.`

// Work Experience --> #work section
export const work = [
	
	{
		from: "2024",
		to: "present",
		role: "Software / DevOps Engineer",
		org: "Brainhive",
		org_url: "https://brainhive.nl/",
		location: "Zwolle, Overijssel",
		skills: "Rust, Golang, ScyllaDB, Kubernetes, Typescript, Next.js"
	},
	{
		from: "2023",
		to: "2024",
		role: "Software Developer",
		org: "Wenpro",
		org_url: "https://wenpro.nl/",
		location: "Staphorst, Overijssel",
		skills: "Laravel, PHP, Javascript, Jquery"
	},
	{
		from: "2022",
		to: "2023",
		role: "Stagair Software Developer",
		org: "Digi-Process",
		org_url: "https://digi-process.nl/",
		location: "IJsselmuiden, Overijssel",
		skills: "Laravel, PHP, Javascript, Jquery"
	},
	{
		from: "2021",
		to: "2023",
		role: "Matten expeditie",
		org: "Vebe",
		org_url: "https://www.condor-group.eu/nl/vebe",
		location: "Hasselt, Overijssel",
		skills: ""
	},
]

// Projects --> #project section
export const projects = [
	{
		from: "2024",
		to: "2024",
		title: "Proat ies Asselts",
		description: "Ik kreeg van de mannen van de dialectgroep van Hasselt de opdracht om een simpele website te maken voor hun",
		url: "https://www.proatiesasselts.nl/",
		tech: "Vue.js, Netlify",
	},
	{
		from: "2023",
		to: "2024",
		title: "Vilt op maat",
		description: "Ik heb de opdracht gekregen om een webshop voor vilt op maat te maken dit was in opdracht van Wenpro.",
		url: "https://viltopmaat.nl/",
		tech: "Laravel, PHP, Javascript, Jquery, Mollie APi, Mailtrap",
	},
	{
		from: "2023",
		to: "2024",
		title: "Deurmat op maat",
		description: "Ik heb de opdracht gekregen om een webshop voor deurmatten op maat te maken dit was in opdracht van Wenpro.",
		url: "https://deurmatopmaat.com/",
		tech: "Laravel, PHP, Javascript, Jquery, Mollie APi, Mailtrap",
	},
	{
		from: "2023",
		to: "2024",
		title: "Het Mannenkoor Hasselt",
		description: "een website die ik heb gemaakt voor het Hasselts Mannenkoor.",
		url: "https://hethasseltsmannenkoor.nl/",
		tech: "Vue.js, Netlify",
	},
	{
		from: "2023",
		to: "2024",
		title: "Screendoek op maat",
		description: "Ik heb de opdracht gekregen om een webshop voor screendoeken op maat te maken dit was in opdracht van Wenpro.",
		url: "https://screendoekopmaat.nl/",
		tech: "Laravel, PHP, Javascript, Jquery, Mollie APi, Mailtrap",
	}
]

// Education --> #education section
export const education = [
	{
		from: "2021",
		to: "2024",
		institute: "Landstede MBO",
		course: "Software Developer",
		location: "Zwolle, Overijssel"
	},
	{
		from: "2017",
		to: "2021",
		institute: "Agnieten College",
		course: "VMBO-TL (Techniek en Economie)",
		location: "Zwartsluis, Overijssel"
	},
]

// Contact --> #contact section
export const contact = [
	{
		source_name: "Email",
		source: "mailto:rick@rickva.dev",
	},
	{
		source_name: "GitHub",
		source: "https://github.com/Rick-VA",
	},
	{
		source_name: "LinkedIn",
		source: "https://www.linkedin.com/in/rick-van-assen/",
	},
]

// // Certifications --> #certificate section

// export const certificates = [
// 	{
// 		issued: "2021",
// 		title: "Middelbareschool diploma",
// 		org: "Agnieten College",
// 		url: "https://www.agnietenzwartsluis.nl/",
// 		description: "Teoretische leerweg (TL) diploma behaald op het Agnieten College in Zwartsluis.",
// 	}
// ]

// // Blogs --> #blogs section
// export const blogs = [
// 	{
// 		date: "12-July, 2023",
// 		url: "https://medium.com/",
// 		title: "Adventures in Safety Inspection",
// 		description: "Join me in my humorous escapades as a safety inspector in Quahog.",
// 		publisher: "Quahog Times",
// 	},
// 	{
// 		date: "25-June, 2023",
// 		url: "https://medium.com/",
// 		title: "Top 10 Safety Tips for Families",
// 		description: "Learn the best safety practices for families to ensure a secure environment.",
// 		publisher: "Safety Monthly",
// 	}
// ]

// // Achievements --> #achievement section
// export const achievements = [
// 	{
// 		title: "Safety Hero Award",
// 		year: "2020",
// 		decription: "Recognized for outstanding contributions to improving safety standards in Quahog."
// 	},
// 	{
// 		title: "Safety Innovation Prize",
// 		year: "2018",
// 		decription: "Awarded for implementing innovative safety measures that yielded significant improvements."
// 	},
// 	{
// 		title: "Community Safety Ambassador",
// 		year: "2015",
// 		decription: "Honored for promoting safety awareness and education in the Quahog community."
// 	},
// 	{
// 		title: "Safety Campaign Excellence",
// 		year: "2013",
// 		decription: "Acknowledged for leading a successful safety campaign that reached thousands of residents."
// 	}
// ]
