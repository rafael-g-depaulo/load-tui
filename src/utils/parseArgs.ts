export interface CommandPromt {
  title: string
  command: string
}

type Descriminator = string | number
const groupBy = <T>(
  arr: T[],
  cb: (item: T, index: number) => Descriminator,
): { [key: Descriminator]: T[] } =>
  arr.reduce((acc, cur, i) => {
    const desc = cb(cur, i)
    // const group: T[] = [...acc[desc], cur]
    return { ...acc, [desc]: [...(acc[desc] ?? []), cur] }
  }, {} as { [key: Descriminator]: T[] })

export const parseArgs = (args: string[]): CommandPromt[] =>
  Object.values(
    groupBy(args, (_, i) => Math.floor(i / 2)) as {
      [a: number]: [string, string]
    },
  ).map(([title, command]) => ({ title, command }))