<script lang='ts'>
    export let onClick: () => void;

    import LocationIcon from '../../lib/icons/location-empty.svg';
</script>

<button class="locator-button btn " on:click={onClick}>
    <img class="locator-icon" src={LocationIcon} alt="Locator" />
</button>

<style>
    .locator-button {
        background-color: white;
        border: none;
        padding: 0;
        cursor: pointer;
        position: absolute;
        bottom: 5.5rem;
        right: .3rem;
        z-index: 51;
        width: 2rem;
        height: 2rem;
        align-items: center;
        justify-content: center;
        filter: opacity(.7);
    }
</style>
