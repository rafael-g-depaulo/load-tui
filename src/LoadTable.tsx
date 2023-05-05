import { Box, Text } from "ink"
import Spinner from "ink-spinner"
// import Table from "ink-table"
import React from "react"

export interface LoadStatus {
  running: boolean
  title: string
}

interface Props {
  items: LoadStatus[]
}

export const LoadTable = ({ items }: Props) => {
  return (
    <Box flexDirection="column" borderStyle="round" borderColor="white">
      {items.map(item => (
        <>
          <Box padding={1} key={item.title} borderStyle="round">
            <Spinner type="dots" />
            <Text>{item.title}</Text>
          </Box>
          {/* <Table data={[{ msg: "tinyTable" }]} /> */}
        </>
      ))}
    </Box>
  )
}
