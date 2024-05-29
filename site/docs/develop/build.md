# Build and Deploy

## Build

> Run `pnpm run build:stellarnovaui` to complete the build. The built files will be in the `packages/stellarnovaui` directory. If you want to modify the command script, you can do so in the `script` field of `stellarnovaui/package.json`.

## Deploy

Before publishing, you need to link the project to a git repository and commit all changes. Then run `publish:stellarnovaui`. At this point, you will receive prompts such as choosing how to increment the version, whether to publish, whether to add a tag, etc.

Of course, if you are not logged in to npm, you will be prompted to log in first. Note that before publishing, you need to change the name field in the package.json file under `packages/stellarnovaui` to the name of your component library.
