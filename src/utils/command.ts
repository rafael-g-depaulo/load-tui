import { exec as _exec } from "child_process"
import { promisify } from "util"

export interface CommandPromt {
  title: string
  command: string
}

const exec = promisify(_exec)

export const runCommand = (cmd: CommandPromt) => exec(cmd.command)
