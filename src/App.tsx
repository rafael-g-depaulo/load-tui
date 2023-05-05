import React, { FC } from "react"
// import { Box, Text, useApp } from "ink"
// import useSWR from "swr"
// import { runOneCommand } from "./command.js"
// import { useState } from "react"
// import { useEffect } from "react"
import { useCommand } from "./hooks/useCommand.js"
import { Text } from "ink"
import { Command } from "./command.js"
import { LoadTable } from "./LoadTable.js"

const cmdTest: Command = { title: "test", command: "sleep 5" }

export const Content: FC<{ cmd: Command }> = ({ cmd }) => {
  const { running, output } = useCommand(cmd)

  if (running) return <Text>Loading...</Text>

  return <Text color="yellow">Done! {output}</Text>
}

export const App = () => {
  // return <Content cmd={cmdTest} />
  return (
    <LoadTable
      items={[
        { title: "test", running: false },
        { title: "haha", running: true },
      ]}
    />
  )
}
