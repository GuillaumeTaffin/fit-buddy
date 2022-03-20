<!--suppress ReservedWordAsName -->
<script lang='ts'>
    export let hint = '';
    export let type = 'text';

    export let text: string;

    let input;

    export function focus() {
        input.focus();
    }

    let clazz = '';
    export { clazz as class };

</script>

<input {type}
       bind:this={input}
       placeholder={hint}
       on:change={val => text = val.target.value}
       class='bg-white text-black w-full p-4 outline-primary-dark rounded-md text-black {clazz}'>