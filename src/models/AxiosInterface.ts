import { PokeDetail } from "./PokeInterface"

interface AxiosInterfacePokeList {
  data: AxiosDataInterface
}

interface AxiosInterfacePokeDetail {
  data: PokeDetail
}

interface AxiosDataInterface {
  count: number,
  next: string | null,
  previous: string,
  results: []
}

export type {
  AxiosInterfacePokeDetail,
  AxiosInterfacePokeList
}