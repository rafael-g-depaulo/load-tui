import React from "react"
import { Text } from "ink"
import { useCommand } from "./hooks/useCommand.js"

type Props = {}

export const App = ({}: Props) => {
  const { running, data } = useCommand({
    title: "asdsa",
    command: "sleep 1 && echo teste",
  })

  if (running) return <Text>Running</Text>

  return (
    <Text>
      result is: <Text color="yellow">{data?.stdout ?? ""}</Text>
    </Text>
  )
}

export const getApp = (props: Props) => <App {...props} />
