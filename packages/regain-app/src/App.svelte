<script>
	import { Amplify } from '@aws-amplify/core';
	import { API, graphqlOperation } from '@aws-amplify/api';
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";

	import { error, groups, exercises, usersettings, messages /* , allUsers */ } from './utils/store';

	import awsmobile from './aws-exports.js';
	import { onMount } from 'svelte';
	import { listExercises, listGroups /*, listUsers */ } from './graphql/queries';

	import "filepond/dist/filepond.min.css";
	import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
	
	Amplify.configure(awsmobile);

	const getGroups = () =>
		API.graphql(graphqlOperation(listGroups))
			.then(res => groups.set(res.data.listGroups.items))
			.catch(err => {
				error.set({
					status: true,
  				message: "Error retrieving GroupExercises" + {err},
				})
			});

	const getExercises = () =>
		API.graphql(graphqlOperation(listExercises))
			.then(res => exercises.set(res.data.listExercises.items))
			.catch(err => {
				error.set({
					status: true,
  				message: "Error retrieving ListExercises." + {err},
				})
			});

	/*
	const getUsers = () =>
		API.graphql(graphqlOperation(listUsers))
			.then(res => allUsers.set(res.data.listUsers.items))
			.catch(err => {
				error.set({
					status: true,
					message: "Error retrieiving ListUsers." + {err},
				})
			});
	*/

	const addMessages = () => {
		messages.set([
			{
				closeIcon: true,
				visible: true,
				message: "Hello, and welcome to Regain, you can click the Minus Button to the left of this message to remove this message",
				stayOn: true,
				responseRequired: true,
				buttons: [],
			},
			{
				closeIcon: true,
				visible: true,
				message: "Good. Messages will pop up here to let you know your progress and ask you for feedback as you progress through you tasks.",
				stayOn: true,
				responseRequired: true,
				buttons: [],
			}
		]);
	}

	const addNewMessages = () => {
		messages.set([
			{
				closeIcon: true,
				visible: true,
				message: "Welcome back to regain, " + $usersettings.username + ". Which exercise will you start off with today?",
				stayOn: false,
				responseRequired: false,
				buttons: [],
			},
		]);
		messages.set([
			{
				closeIcon: true,
				visible: true,
				message: "You're now, " + $usersettings.overallProgress + "% through your overall progress. Congratulations",
				stayOn: false,
				responseRequired: false,
				buttons: [],
			},
		]);
	}

	onMount(() => {
		getGroups();
		getExercises();
		// getUsers();
		if ($usersettings.onboard === true) addMessages();
		if ($usersettings.onboard === false) addNewMessages();
	})
</script>

<Router {routes} />
