import { heroes } from "../data/heroes"

export const findHeroByid = (id :number)=>{
    return heroes.find(a => a.id === id)
}
