import { Command, runCommand } from "../utils/command.js"
import { useSWR } from "../utils/swr.js"

export const useCommand = (cmd: Command) => {
  const { data, error, isLoading } = useSWR(cmd.title, () => runCommand(cmd))

  return {
    data,
    error,
    running: isLoading,
  }
}
