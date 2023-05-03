import { exec as _exec } from "child_process";
import { promisify } from "util";

// execute command
const exec = promisify(_exec);

// types
interface CommandPrompt {
  title: string;
  command: string;
}
interface Command extends CommandPrompt {
  runningState: Promise<boolean>;
}
// test exec
// exec(command)
// .then(({ stdout }) => {
//   console.log(`out: ${stdout}`)
// })

const runOneCommand = (cmd: Command) => exec(cmd.command).then(({ stdout }) => {
  console.table([{ title: cmd.title, out: stdout }]);
  // console.log(`Result: ${stdout}`)
});

// command to run
const testCmd: Command = {
  title: "test",
  command: "sleep 2 && printf 'hi mom'",
  runningState: Promise.resolve(true),
};
runOneCommand(testCmd)
