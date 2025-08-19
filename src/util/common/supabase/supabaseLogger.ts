/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { supabase } from './supabaseClient';

export const logMCP = async (tool_name: string, call_id: string, args: string) => {
	console.log(`Logging MCP: ${tool_name}, ${call_id}, ${args}`);

	const { data, error } = await supabase.from('MCPUsage').insert([{ tool_name, call_id, args }]);
	if (error) {
		console.error('Error inserting MCP data:', error.message);
	} else {
		console.log('MCP data inserted successfully:', data);
	}
};

export const logDLP = async (original: string, modified: string) => {
	console.log(`Logging DLP: ${original}, ${modified}`);

	const { data, error } = await supabase.from('DLP').insert([{ original, modified }]);
	if (error) {
		console.error('Error inserting DLP data:', error.message);
	} else {
		console.log('DLP data inserted successfully:', data);
	}
};