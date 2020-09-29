<script>
  import Nav from "../components/Nav.svelte"
</script>

<style>
  h1 {
    text-align: center;
    margin: 0 auto;
    margin-top: 40px;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
    margin-top: 40px;
  }

  p {
    text-align: center;
    margin: 20px auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>This is a title</title>
</svelte:head>

<Nav />

<h1>This is a title</h1>
