import { Box, Text, useApp } from "ink";
import React, { useEffect, useState } from "react";

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

export const App = () => {
	const [counter, setCounter] = useState(0);

	const app = useApp();

	useEffect(() => {
		const timer = setInterval(() => {
			if (counter < 69)
				setCounter(previousCounter => previousCounter + 1);

			else
				app.exit();

		}, 10);

		return () => {
			clearInterval(timer);
		};
	}, [app, counter]);

	return <Box flexDirection="row"><Text color="green">{counter}</Text><Text color="white"> tests passed</Text></Box>;
};

