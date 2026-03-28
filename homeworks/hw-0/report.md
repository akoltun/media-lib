# Prompt 1. Initialization of the project
## Method of checking
- `git diff`
## Positive
- Run `bun init` with React flag according requirements
- Didn't install any "non-stack" technology proposed by Bun
- Documented everything in `README.md` according my request
## Negative
- Created `.cursor/rules/use-bun-instead-of-node-vite-npm-pnpm.mdc` file which was not requested. Not clear the reason - I have installed Cursor but it should not know about it.

# PROMPT 2. Clarify the reason for creation of cursor rules
## Respond
bun init --react generated this rule specifically to guide the Cursor AI assistant — not you or other developers directly. Its purpose is to prevent Cursor from suggesting  Node.js/npm/Vite/Jest equivalents when helping with code in this project, and instead steer it toward Bun-native APIs and tooling.                                                       
                            
In short: it's an AI coding assistant guardrail, not a developer-facing convention document. Bun includes it automatically because Cursor is a popular IDE and without this rule the AI inside it would likely suggest npm install, vite, express, jest, etc. — all of which have Bun-native replacements.  
## Positive
Looks like, it is not Claude but Bun who created it. Which is weird in a way because Anthropic is contributing a lot in Bun codebase, and using it a lot, so it could create something for Claude Code, not only for Cursor.

# PROMPT 3. Install Typescript dependency
## Method of checking
- `git diff`
## Positive
- Installed the dependency
## Negative
- Performed couple of calls to `bun pm info typescript@latest version 2>/dev/null || npm show typescript version` instead of directly install the last version with `bun install typescript@latest`

# PROMPT 4. Replace example app with more simple one
## Method of checking
- `git diff`
## Positive
- Created working application according the prompt
## Negative
- It placed the home page component in `app/home` folder, although according the Project Structure it should be placed to `domains/home` folder
- Instead of fixing TS error caused by deprecating of some old parameters by new version of TypeScript, it added a directive to ignore deprecations.
## My action
- make project structure more precise, correct the prompt and rerun it

# PROMPT 4-fix-1. Replace example app with more simple one
## Method of checking
- `git diff`
- `bun dev`
## Positive
- It generated correct application structure exactly as expected
- It correctly fixed TypeScript deprecation error
- It checked that application compiles successfully
## Negative
- There is error running the application because I didn't request to test it since Playwright is not installed yet
## My action
- Actually it can be tested with simple `curl` request and parsing of responded html, so I will ask it in the next prompt

# PROMPT 5. Check that appliction works and fix error
## Method of checking
- `git diff`
- `bun dev`
## Positive
- It debugged and fixed the issue
- It also renamed the title in the `html` file :)
## Negative
- It didn't stop the server after testing, and it run it as independent process, so it was not closed when I exited Claude. So I had to kill the process from terminal.
- I have impression that it doesn't really use context7 MCP if I don't explicitly ask it in the prompt, even though it is said in the `CLAUDE.md` file