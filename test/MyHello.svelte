<script>
    let { whatItIs } = $props();
    const name = 'SvQuery';
    let count = 0;
    // $: time = 0;
    // time++;
</script>

<div>
    <h1>{name} is {whatItIs}!</h1>
    <button on:click={() => count++}>Count: {count}!</button>
</div>
