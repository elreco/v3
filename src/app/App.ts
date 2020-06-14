import TSVector from '../icons/typescript.svg'
import JSVector from '../icons/javascript.svg'
import ReactVector from '../icons/react.svg'
import PHPVector from '../icons/php.svg'
import KotlinVector from '../icons/kotlin.svg'
import GoVector from '../icons/golang.svg'
import LaravelVector from '../icons/laravel.svg'
import CakePHPVector from '../icons/cakephp.svg'
import VueJSVector from '../icons/vuejs.svg'

export type Dictionary<V> = {
  [key: string]: V
}

export type Languages = 'TypeScript' | 'Kotlin' | 'React' | 'PHP' | 'Go' | 'JavaScript'

export const logos: Dictionary<string> = {
  TypeScript: TSVector,
  JavaScript: JSVector,
  React: ReactVector,
  PHP: PHPVector,
  Kotlin: KotlinVector,
  Go: GoVector,
  Laravel: LaravelVector,
  CakePHP: CakePHPVector,
  VueJS: VueJSVector
}

export interface Project {
  language: Languages
  title: string
  slug: string
  repo: string
}

export const projects: Dictionary<Project> = {
  fortnitetracker: {
    language: "PHP",
    title: "Tracker Fortnite",
    slug: "Statistics provider for Fortnite built with Laravel. You can also view your match histories.",
    repo: "https://tracker.fortnitefrance.eu"
  },
  shoplalala: {
    language: "PHP",
    title: "Shoplalala",
    slug: "Shoplalala is a cloud-based, SaaS shopping cart solution like Shopify. A monthly fee gives you access to build you own E-commerce website.",
    repo: "https://www.shoplalala.com"
  },
  fortniteapi: {
    language: "JavaScript",
    title: "Fortnite API",
    slug: "I made an API for Fortnite with reverse engeneering and Express framework. This API is available on the RapidAPI marketplace.",
    repo: "https://rapidapi.com/elreco/api/fortnite-api"
  },
  lorstats: {
    language: "React",
    title: "Legends of Runeterra Cards",
    slug: "Learn about the cards of Legends of Runeterra. I am retrieving the datas from Riot's official Api.",
    repo: "https://lorstats.net/"
  },
  codapi: {
    language: "JavaScript",
    title: "Call of Duty: Modern Warfare API",
    slug: "I have made this api with express framework to provide Call of Duty data for multiplayer and warzone through RapidAPI marketplace.",
    repo: "https://rapidapi.com/elreco/api/call-of-duty-modern-warfare"
  }

}

export const featured = ["fortniteapi", "fortnitetracker", "shoplalala"].map(item => projects[item])

export interface Skill {
  name: string
  logo: string
}

export const skills: Dictionary<Skill> = {
  apache: {
    name: "Laravel",
    logo: "Laravel",
  },
  cakephp: {
    name: "Cake PHP",
    logo: "CakePHP",
  },
  javascript: {
    name: "JavaScript",
    logo: "JavaScript",
  },
  react: {
    name: "React",
    logo: "React",
  },
  vuejs: {
    name: "VueJS",
    logo: "VueJS",
  }

}
