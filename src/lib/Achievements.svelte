<script>
    let stats = [
        ["1", "Indian tech enabled construction Firm"],
        ["300+", "Projects Completed"],
        ["100+", "Professional Employees"],
        ["60+", "Business Partners"],
    ];
</script>

<div class="bg-black md:py-16">
    <h1
        class="text-white mukta text-center text-4xl pt-16 md:py-16 md:text-6xl lg:text-7xl"
        data-aos="fade"
    >
        Achievements
    </h1>
    <div
        class="flex flex-col barlow gap-8 justify-between lg:justify-center md:flex-row p-16 lg:mx-4"
        data-aos="fade"
    >
        {#each stats as stat}
            <div
                class="flex flex-col justify-center text-center md:w-1/3 h-fit md:gap-4"
            >
                <div
                    class="text-primary md:h-16 lg:h-fit barlow-condensed text-4xl font-bold md:text-6xl lg:text-7xl grow"
                >
                    {stat[0]}
                </div>
                <div class="text-white md:h-16 barlow font-normal md:text-xl">
                    {stat[1]}
                </div>
            </div>
        {/each}
    </div>
</div>
