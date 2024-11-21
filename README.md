# Regain

[![N|Solid](https://halide.michaelcuneo.com.au/assets/PoweredByFastlab.png)](https://fastlab.soci.org.au)

This project is a mono-repo containing two defunct regain-native and regain-native-admin repos which both ran React-Native backed by AWS Amplify, regain-admin-svelte, and a rebuild regain-app being the most current.

#### Active Project.

- `packages/regain-2024` Converted from `regain-app`, and upgraded to SvleteKit v5.0 and AWS Amplify Gen2.

Regain 2024 has been completely rebuilt because the reliance on third party UI modules has been deprecated in favour of in house UI modules, and the switch to creating a monorepo for this has been extensive and time consuming. But now that we have in house UI modules we won't need to push support requests to other people to fix small problems, we can just deal with all of this ourselves.

The active UI components will be made public and available under @michaelcuneo on NPM. I may transition this to @fastlab in the future if actual real collaboration continues.

UI Components used in this project will be

@michaelcuneo/svelte-components
@michaelcuneo/meltui-components

MeltUI has been utilised for some UI components, even though this is a third party Node package, it is only a builder using WAI-ARIA design, as a wrapper for Svelte, so it won't need constant upgrades and/or maintenance.

#### Retired Projects.

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
Edit `package.json` and add extra workspaces to work on more.

## License

This software is not free, all IP is owned by FASTlab, The University of Newcastle and external stakeholder collaborators.
