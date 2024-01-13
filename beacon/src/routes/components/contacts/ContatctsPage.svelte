<!--
	Max Comment
	
	How do we want to save the friends list? Locally or Server-side?
	I honestly think it makes sense to save this serverside, but then have a local version that is updated upon loading the app.  This will help make it appear responsive.
	
	While the local side is less important I would just save it using cookies.  This is the contancts list.
-->


<script lang="ts">
	import { TabGroup, Tab, Avatar } from '@skeletonlabs/skeleton';
	import { parseCSV } from '$lib/csvUtils';
	import HeartEmpty from '$lib/icons/heart-empty.svg';
	import HeartFilled from '$lib/icons/heart-filled.svg';
	import { Contacts } from '@capacitor-community/contacts';
	import { slide } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';
	import AddContactButton from './AddContactButton.svelte';

	let friends: any = [];

	// Get Friend Positions
	async function loadFriendLocations() {
		try {
			friends = await parseCSV('src/lib/data/friendLocations.csv');
		} catch (error) {
			console.error('Error loading friend locations:', error);
		}
	}
	let tabSet: number = 0;
	loadFriendLocations();

	const retrieveListOfContacts = async () => {
		const projection = {
			// Specify which fields should be retrieved.
			name: true,
			phones: true,
			postalAddresses: true
		};

		const result = await Contacts.getContacts({
			projection
		});
	};

	//console.log(retrieveListOfContacts());
</script>

<div transition:slide={{ duration: 300, axis: 'y' }} class="background">
	<div class="tableContainer px-4 bottom-4 top-4">
		<!-- Native Table Element -->
		<table class="mr-2 table-comfortable">
			<thead>
				<tr>
					<th class="table-cell-fit"></th>
					<th class="table-sort-dsc">Name</th>
					<th class="table-cell-fit">Best Friend</th>
				</tr>
			</thead>
			<tbody>
				{#each friends as friend, i}
					<tr>
						<td class="table-cell-fit">
							<Avatar initials="MM" background="bg-secondary-800" width="w-[3rem]" /></td
						>
						<td class="">{friend.name}</td>
						<td class="table-cell-fit"
							>{#if friend.bestFriend == 1}
								<img class="heart-icon" src={HeartFilled} alt="Contacts" />
							{:else}
								<img class="heart-icon" src={HeartEmpty} alt="Contacts" />
							{/if}</td
						>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<div class="contactsButton">
		<AddContactButton />
	</div>
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
		bottom: 0;
	}

	.heart-icon {
		margin: 0 auto; /* Center the image */
		filter: invert(1);
		width: 1.2rem;
		padding-top: 0.5rem;
	}

	.tableContainer {
		position: fixed;
		padding: 1rem;
		left: 0.2rem;
		bottom: 5rem;
		right: 0.2rem;
		top: .2rem;
		border-style: solid;
		overflow-y: scroll;
		scrollbar-width: none;
	}

	.contactsButton {
		position: fixed;
		bottom: 5rem;
		right: 1rem;
		padding: 1rem;
	}
</style>
