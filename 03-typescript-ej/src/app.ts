import { heroes } from "./data/heroes"
import { findHeroByid } from "./services/hero.service"



const hero  = findHeroByid(8)

console.log(hero?.name ?? 'Heroe no encontrado')

