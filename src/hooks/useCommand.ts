import _useSWR, { SWRHook } from "swr"
import { Command, runOneCommand } from "../command.js"

// hack because typescript is being a jerk
const useSWR = _useSWR as unknown as SWRHook

export const useCommand = (cmd: Command) => {
  const { isLoading, data, error } = useSWR(cmd.title, () => runOneCommand(cmd))

  return {
    running: isLoading,
    output: data,
    error: error,
    isError: !isLoading && !!error,
  }
}
