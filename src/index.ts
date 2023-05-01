#!/usr/bin/env node

import { exec as _exec } from "child_process"
import { promisify } from "util"

// command to run
const testCmd: Command = {
  title: "test",
  command: "sleep 2 && printf 'hi mom'"
}

// execute command
const exec = promisify(_exec)

interface Command {
  title: string
  command: string
}

// test exec
// exec(command)
// .then(({ stdout }) => {
//   console.log(`out: ${stdout}`)
// })

const runOneCommand = (cmd: Command) => exec(cmd.command).then(({ stdout }) => {
  console.table([{ title: cmd.title, out: stdout }])
  // console.log(`Result: ${stdout}`)
})


runOneCommand(testCmd)
