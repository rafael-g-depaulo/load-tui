import { exec as _exec } from "child_process"
import { promisify } from "util"

// execute command
const exec = promisify(_exec)

// types
export interface Command {
  title: string
  command: string
}

export const runOneCommand = (cmd: Command) =>
  exec(cmd.command).then(({ stdout }) => {
    // console.table([{ title: cmd.title, out: stdout }])
    // console.log(`Result: ${stdout}`)
    return stdout
  })

// command to run
// const testCmd: Command = {
//   title: "test",
//   command: "sleep 2 && printf 'hi mom'",
// }
