export default interface ICharacter {
  id: string,
  name: string,
  powerstats: Record<string, string>,
  biography: Record<string, any>,
  appearance: Record<string, any>,
  work: Record<string, string>,
  connections: Record<string, string>,
  image: Record<string, string>
}