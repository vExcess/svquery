<script>
    let { whatItIs } = $props();
    const name = 'SvQuery';
    $: count = 0;
    $: timer = 0;

    setInterval(() => {
        timer++;
    }, 500)
    
</script>

<div>
    <h1>{name} is {whatItIs}!</h1>
    <p>Timer: {timer}</p>
    <button on:click={() => count++}>Count: {count}!</button>
</div>
