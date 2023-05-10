#!/usr/bin/env node
import { render } from "ink"
import meow from "meow"
import App from "./app.js"
import { parseArgs } from "./utils/parseArgs.js"

const cli = meow(
  `
	Usage
	  $ load-tui "name1" "command1 args here" "name2" "command2 args here" 

	Options
		--help

	Examples
	  $ load-tui hi 'echo 1' hello 'echo 2'
    # TODO: add example here
`,
  {
    importMeta: import.meta,
    flags: {
      name: {
        type: "string",
      },
    },
  },
)

render(App({ name: cli.flags.name }))
