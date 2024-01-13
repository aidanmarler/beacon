<script lang="ts">
	import { page } from '$app/stores';
	import { TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
	import ContactsIcon from '$lib/icons/contacts.svg';
	import MapIcon from '$lib/icons/globe.svg';
	import ProfileIcon from '$lib/icons/profile.svg';
	import ProfilePage from './profile/ProfilePage.svelte';
	import ContatctsPage from './contacts/ContatctsPage.svelte';
	import { fade, blur } from 'svelte/transition';

	let showContacts = false;
	let showProfile = false;

	function selectTab(tab: string): void {
		switch (tab) {
			case 'contacts':
				showContacts = !showContacts;
				showProfile = false;
				break;
			case 'map':
				showContacts = false;
				showProfile = false;
				break;
			case 'profile':
				showProfile = !showProfile;
				showContacts = false;
				break;
			default:
				break;
		}
	}
</script>

<TabGroup
	justify="justify-center"
	active="variant-ghost-primary"
	flex="flex-1 lg:flex-none"
	rounded=""
	border=""
	class="variant-glass-surface w-full fixed bottom-0 left-0 z-[1000]"
>
	<TabAnchor on:click={() => selectTab('contacts')} selected={showContacts} class="md:min-w-24">
		<svelte:fragment slot="lead">
			<img class="tab-icon" src={ContactsIcon} alt="Contacts" />
		</svelte:fragment>
		Contacts
	</TabAnchor>
	<TabAnchor
		on:click={() => selectTab('map')}
		selected={!showContacts && !showProfile}
		class="md:min-w-24"
	>
		<svelte:fragment slot="lead">
			<img class="tab-icon" src={MapIcon} alt="Contacts" />
		</svelte:fragment>
		Map
	</TabAnchor>
	<TabAnchor on:click={() => selectTab('profile')} selected={showProfile} class="md:min-w-24">
		<svelte:fragment slot="lead">
			<img class="tab-icon" src={ProfileIcon} alt="Contacts" />
		</svelte:fragment>
		Profile
	</TabAnchor>
</TabGroup>

{#if showContacts}
	<!-- Render Contacts component -->
	<span transition:fade={{ duration: 150 }}>
		<ContatctsPage />
	</span>
{/if}

{#if showProfile}
	<!-- Render Profile component -->
	<span transition:fade={{ duration: 150 }}>
		<ProfilePage />
	</span>
{/if}

<style>
	/* Add custom styles for the tab icons */
	.tab-icon {
		display: block;
		margin: 0 auto; /* Center the image */
		filter: invert(1);
		width: 1.5rem;
		padding-top: 0.5rem;
	}
</style>
