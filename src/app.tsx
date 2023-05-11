import React from "react"
import { Text } from "ink"
// import * as useSWR from "swr"
// import { SWRHook } from "swr"
// declare module "swr" {
//   const _useSWR: SWRHook
//   export { _useSWR as default }
// }
import useSWR from "swr"

type Props = {}

export default function App({}: Props) {
  const {} = useSWR("asd", () => Promise.resolve(true))
  return (
    <Text>
      Hello, <Text color="green">asdasasd</Text>
    </Text>
  )
}
