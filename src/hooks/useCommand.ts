import useSWR from "swr"
import { Command, runOneCommand } from "../command.js"

export const useCommand = (cmd: Command) => {
  const { isLoading, data, error } = useSWR(cmd.title, () => runOneCommand(cmd))

  return {
    running: isLoading,
    output: data,
    error: error,
    isError: !isLoading && !!error,
  }
}
