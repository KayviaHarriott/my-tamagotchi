export interface Pet {
  id: number,
  name: string,
  species: string,
  age: number,
  status: STATUS,
  health_level: number,
  hunger_level: number
  happiness_level: number,
  bathroom_level: number,
  friendliness: number
}

enum STATUS{
    DEAD, ALIVE
}