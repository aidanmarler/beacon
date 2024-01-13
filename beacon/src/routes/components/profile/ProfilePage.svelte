<!--
	Max Comment
	
	So we want to have this appear when the app is loaded IF the user is not signed in.render
	What should the differences be if they are signed in?  Should there be any?
-->

<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { focusTrap } from '@skeletonlabs/skeleton';
	import { sineIn, sineInOut } from 'svelte/easing';
	import { blur, slide } from 'svelte/transition';

	let name = 'Jessie Doe';
	let phone = '+1 (234) 567-8910';
	let updateFrequency = "1";

	function handleNameChange(event: any) {
		name = event.target.value;
		console.log(name);
		// Max // Function to change the name in the database
	}

	function handlePhoneChange(event: any) {
		phone = event.target.value;
		console.log(phone);
		// Max // Function to change the phone in the database - maybe this should not be possible...? or at least take extra steps?
	}

	function handleFrequencyChange(event: any) {
		updateFrequency = event.target.value;
		console.log(updateFrequency);
		// Max // Function to change the update frequency, which I think is actually more local.  
			  // We will want a function to change the Lat and Lng in the database.  I imagine this is all an API where we can specify a user with a (1) user ID, (2) a column, and (3) the value to change it to. 
	}
</script>

<div transition:slide={{ duration: 300, axis: 'y' }} class="bg-surface-900 background">
	<form use:focusTrap={true}>
		<!--Profile Picture-->
		<Avatar initials="JD" background="bg-secondary-800" width="w-[30vmin]" />
		<div class="inputs">
			<!--Name-->
			<input
				data-focusindex="1"
				type="text"
				placeholder="Name"
				bind:value={name}
				on:input={handleNameChange}
				class="input variant-form-material text-center"
			/>
			<!--Phone-->
			<input
				data-focusindex="2"
				type="tel"
				width="w-[90%]"
				placeholder="+1 (234) 567-8910"
				bind:value={phone}
				on:input={handlePhoneChange}
				class="input variant-form-material text-center"
			/>
			<!--How often to update-->
			<select
				class="select variant-form-material text-center"
				size="1"
				bind:value={updateFrequency}
				on:input={handleFrequencyChange}
			>
				<option value="1">Every Hour</option>
				<option value="6">Every 6 Hours</option>
				<option value="12">Every 12 Hours</option>
				<option value="24">Every 24 Hours</option>
				<option value="48">Every 48 Hours</option>
				<option value="null">Never</option>
			</select>
		</div>
		<div class="location">
			<!--Coordinates-->
			<p>lat:<br />lon:</p>
			<!--Update Location-->
			<button class="btn bg-primary-800">Update Location</button>
		</div>
	</form>
</div>

<style>
	.background {
		height: calc(100%);
		display: flex;
		z-index: 1;
		width: 100%;
		position: absolute;
		/* blur glass effect */
		backdrop-filter: blur(1.5rem);
		background-color: rgba(0, 0, 0, 0.6);
		justify-content: center;
		align-items: center;
		bottom: 0;
		right: 0;
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		left: 10vmin;
		right: 6vmin;
		transform: translate(0, -2rem);
		position: fixed;
	}

	.inputs {
		margin-top: 5%;
	}

	.inputs > * {
		margin-top: 5%;
	}

	.location {
		margin-top: 10%;
		justify-content: center;
		align-items: center;
		text-align: center;
		bottom: 4rem;
	}

	.location > * {
		margin-top: 5%;
	}
</style>
