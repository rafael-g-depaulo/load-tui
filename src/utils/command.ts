import { exec as _exec } from "child_process"
import { promisify } from "util"

export interface Command {
  title: string
  command: string
}

const exec = promisify(_exec)

export const runCommand = (cmd: Command) => exec(cmd.command)
