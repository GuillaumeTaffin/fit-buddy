<script lang='ts'>
    export let hint = '';
    export let type = 'text';

    export let text: string;


</script>

<input {type}
       placeholder={hint}
       on:change={val => text = val.target.value}
       class='bg-[color:var(--white)] text-black w-full p-4 outline-[color:var(--primary-dark)] rounded-md'>