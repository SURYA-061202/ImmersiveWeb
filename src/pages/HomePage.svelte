<script>
    import Hero from "./../lib/Hero.svelte";
    import Construction from "./../lib/Construction.svelte";
    import Achievements from "./../lib/Achievements.svelte";
    import TabbedCard from "./../lib/TabbedCard.svelte";
    import Projects from "./../lib/Projects.svelte";
    import Clients from "./../lib/Clients.svelte";
    import Connect from "./../lib/Connect.svelte";
</script>

<div>
    <div class="lg:px-8">
        <Hero />
        <Construction />
    </div>
    <Achievements />
    <div class="lg:px-8">
        <TabbedCard />
        <Projects />
        <Clients />
    </div>
    <Connect />
</div>
