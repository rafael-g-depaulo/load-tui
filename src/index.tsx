#!/usr/bin/env node

import React, { useEffect, useState } from "react"
import { Text, Box, render, useApp } from "ink"

// render(<Text>test </Text>)
//
// render(
// 	<Box flexDirection="column" padding={2}>
// 		<Box>
// 			<Box borderStyle="single" marginRight={2}>
// 				<Text>single</Text>
// 			</Box>
//
// 			<Box borderStyle="double" marginRight={2}>
// 				<Text>double</Text>
// 			</Box>
//
// 			<Box borderStyle="round" marginRight={2}>
// 				<Text>round</Text>
// 			</Box>
//
// 			<Box borderStyle="bold">
// 				<Text>bold</Text>
// 			</Box>
// 		</Box>
//
// 		<Box marginTop={1}>
// 			<Box borderStyle="singleDouble" marginRight={2}>
// 				<Text>singleDouble</Text>
// 			</Box>
//
// 			<Box borderStyle="doubleSingle" marginRight={2}>
// 				<Text color="green" >doubleSingle</Text>
// 			</Box>
//
// 			<Box borderStyle="classic">
// 				<Text>classic</Text>
// 			</Box>
// 		</Box>
// 	</Box>
// );


const Counter = () => {
  const [counter, setCounter] = useState(0);

  const app = useApp()

  useEffect(() => {
    const timer = setInterval(() => {
      if (counter < 70)
        setCounter(previousCounter => previousCounter + 1);
      else
        app.exit()

    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [app, counter]);

  return <Text color="green">{counter} tests passed</Text>;
};

render(<Counter />);
