/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export function redactSecrets(text: string): string {
	const redactions: RegExp[] = [
		/password\s*=\s*['"][^'"]*['"]/gi,
		/secret\s*=\s*['"][^'"]*['"]/gi,
		/token\s*=\s*['"][^'"]*['"]/gi,
		/api_key\s*=\s*['"][^'"]*['"]/gi,
		/access_key\s*=\s*['"][^'"]*['"]/gi,
		/client_secret\s*=\s*['"][^'"]*['"]/gi,
		// AWS Access Key ID
		/\b(A3T|AKIA|ASIA)[A-Z0-9]{16}\b/g,
		// AWS Secret Access Key
		/\b(?<![A-Z0-9])[A-Za-z0-9/+=]{40}(?![A-Z0-9])\b/g,
		// Google OAuth Access Token
		/\bya29\.[0-9A-Za-z\-_]+\b/g,
		// Generic API keys
		/\b[a-z0-9]{32,45}\b/gi,
		// JWTs (3-part base64url)
		/\beyJ[A-Za-z0-9_-]+?\.[A-Za-z0-9_-]+?\.[A-Za-z0-9_-]+?\b/g,
		// Generic key-value secrets in text
		/\b(api[-_ ]?key|secret|token|access[-_ ]?key|client[-_ ]?secret)[\s:=]+[^\s"'&]{5,}/gi,
		// More generic phrase matchers
		/\b(?:password|pass|pwd|token|secret|api[-_ ]?key|access[-_ ]?key|client[-_ ]?secret)\b[\s:=-]+["']?[\w\/+=.-]{3,}["']?/gi,
		/\b(password|pass|pwd|token|secret|api[-_ ]?key|access[-_ ]?key|client[-_ ]?secret)\b\s*(=|is|:)?\s*["']?([^\s"'=]{3,})["']?/gi,
	];

	let redacted = text;
	for (const pattern of redactions) {
		redacted = redacted.replace(pattern, '[REDACTED]');
	}
	return redacted;
}