/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://khxcbhzwkqwkexjwiucb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoeGNiaHp3a3F3a2V4andpdWNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2MDkxNTUsImV4cCI6MjA3MTE4NTE1NX0.7RRuD9-x3t_lDRBvlWSPRhRMWf9Q3ITGKuXEcVJEjto';

if (!supabaseUrl || !supabaseAnonKey) {
	throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);