# Regain

[![N|Solid](https://halide.michaelcuneo.com.au/assets/PoweredByFastlab.png)](https://fastlab.soci.org.au)

This project is a mono-repo containing two defunct regain-native and regain-native-admin repos which both ran React-Native backed by AWS Amplify, regain-admin-svelte, and a rebuild regain-app being the most current.

- `packages/regain_v2` original David Cornforth version.
- `packages/regain-native-admin` contains the original React-Native build.
- `packages/regain-native` contains the original React-Native rebuild.
- `packages/regain-admin-svelte` Administrative portal for doctors to administer their own clients.
- `packages/regain-app` Fully self managed regain experience.
- `packages/assets` is all recordings for Regain as raw/unedited footage, and edited footage.
- `packages/documentation` all working documents, through all iterations and versions.

## Installation

Requires React-Native, Node.js, npm, or pnpm (Can break some repo's due to compatibility)

> Refer to each readme in each repo for installation instructions.

The only active project right now is regain-2024, so workspaces is only set to `packages/regain-2024`.
Edit package.json and add extra workspaces to work on more.

## License

This software is not free, all IP is owned by FASTlab, The University of Newcastle and external stakeholder collaborators.
