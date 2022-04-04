<!--suppress ReservedWordAsName -->
<script lang='ts'>
    export let hint = '';
    export let type = 'text';
    export let padding = '2';

    export let text = '';

    export let outlined = false;
    $: outlinedClass = outlined ? 'border border-primary-dark' : '';

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
       class='bg-white text-black text-sm w-full h-fit p-{padding} outline-primary-dark rounded-md text-black {outlinedClass} {clazz}'>