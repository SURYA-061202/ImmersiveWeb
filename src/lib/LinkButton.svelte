<script>
    import { onMount } from "svelte";
    import btn_default from "./../assets/button-default.png";
    import btn_hover from "./../assets/button-hover.png";
    import { Link, link } from "svelte-navigator";

    export let size = 25;
    let isHover = false;

    onMount(() => {
        size = size;
    });
</script>

<button
    class="h-fit"
    style="--size:{size};"
    on:mouseenter={() => {
        isHover = true;
    }}
    on:mouseleave={() => {
        isHover = false;
    }}
>
    <a href="/contact" use:link>
        <img
            src={isHover ? btn_hover : btn_default}
            alt="button icon"
            class="w-full"
        />
    </a>
</button>

<style>
    img {
        height: calc(var(--size) * 1px);
        width: calc(var(--size) * 1px);
    }
    button {
        height: calc(var(--size) * 1px);
        width: calc(var(--size) * 1px);
    }
</style>
