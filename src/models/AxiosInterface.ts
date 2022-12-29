export default interface AxiosInterfacePoke {
  data: AxiosDataInterface
}

interface AxiosDataInterface {
  count: number,
  next: string | null,
  previous: string,
  results: []
}