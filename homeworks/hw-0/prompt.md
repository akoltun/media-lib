# Prompt 1. Initialization of the project
You are a principal FullStack developer.

Bootstrap a new Bun application using interactive installer `bun init`. 
For each question select technology that present in the Stack list of `CLAUDE.md` for this project. If none of the available options present in the Stack list choose not to install/add anything.

Document the installation process and all choices in the `README.md` file.

# PROMPT 2. Clarify the reason for creation of cursor rules
What is the reason to create a Cursor rule on the previous step?

# PROMPT 3. Install Typescript dependency
You are a principal FullStack developer.

Install latest TypeScript. 
Add corresponding script to `package.json` according the Key commands.
Document the installed dependency in the `README.md`.

Use context7 MCP.

# PROMPT 4. Replace example app with more simple one
You are a principal FullStack TypeScript developer.

Replace example appliction with the simple one that has only one home page.
Home page shows phrase "Hello, <appeal>!".
In order to get <appeal> send a request to BE: `GET /api/appeal`
This endpoint should return JSON: `{ "appeal": "World" }`
Delete old files from `src` that are not needed for the new application.
Arrange according to *Project Structure* in `CLAUDE.md`.

Check that the application compiles successfully. Fix any compilation errors.

# PROMPT 4-fix-1. Replace example app with more simple one
You are a principal FullStack TypeScript developer.

Replace example appliction with the simple one that has only one home page.
Home page shows phrase "Hello, <appeal>!".
In order to get <appeal> home page sends a request to BE: `GET /api/appeal`.
This endpoint returns JSON: `{ "appeal": "World" }`

Create home page domain, and put all home page related code there.

Delete old files from `src` that are not needed for the new application.
Arrange according to *Project Structure* in `CLAUDE.md`.

Check that the application compiles successfully. Fix any compilation errors. Don't ignore deprecated compiler options, instead delete or replace them.

# PROMPT 5. Check that appliction works and fix error
You are a principal FullStack TypeScript developer.

Check that application works by running it in dev mode, and sending the request to load home page via `curl`.
Fix errors if any.