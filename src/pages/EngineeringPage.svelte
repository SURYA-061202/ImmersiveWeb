<script>
    import engg from "./../assets/engg/engg.svg";
    import BIM from "../lib/BIM.svelte";
    import img1 from "./../assets/engg/1.png";
    import img2 from "./../assets/engg/2.png";
    import img3 from "./../assets/engg/3.png";
    import img4 from "./../assets/engg/4.png";
    import EngineeringPanel from "../lib/EngineeringPanel.svelte";

    let content = [
        {
            title: "Construction Simulations",
            heading: "Planning - 4D Model Based Simulations",
            img: img1,
            text: `Bid 4D BIM presentation.

4D BIM Model based scheduling as per the contractor Baseline or working program schedule.
Visual report on Construction Look ahead and Baseline vs Actual comparison.`,
        },

        {
            title: "AEC Data Engineering and Analytics",
            heading: "Data Engineering and Analytics",
            img: img2,
            text: `Building Customized Data Warehousing Services on AEC data and developing descriptive dashboards for analysis and wise decision-making
​
Building Machine learning Modules For Effective operations.`,
        },

        {
            title: "Quantity Survey",
            heading: "Costing - 5D BIM",
            img: img3,
            text: `5D BIM Quantification on design intent and Construction model as well as integrating with 4D Model .
​
Automated Quantity Survey from BIM Models.
​
Interactive Dashboards`,
        },

        {
            title: "Augmented Reality / Virtual Reality",
            heading: "Application Development",
            img: img4,
            text: `Developing augmented reality applications for Site validation and
Real Estate AR showrooms.
​
Customized Training Virtual Reality on site safety modules and Virtual Factory operations.`,
        },
    ];
</script>

<div class="p-4 xs:p-8 flex flex-col gap-8 md:gap-16">
    <div class="flex flex-col lg:flex-row justify-center">
        <div class="flex flex-row xs:justify-center md:justify-start grow">
            <div
                class="flex flex-col justify-center raleway text-black text-4xl md:text-5xl block xs:hidden"
            >
                <div class="font-normal pb-2" id="engg">Engineering</div>
                <div
                    class="font-bold text-secondary xs:tracking-[0.75rem] xs:border-black xs:border-t-2 pb-2"
                >
                    Services
                </div>
            </div>
            <div class="h-full hidden xs:block">
                <img class="m-auto h-full" src={engg} alt="decoration" />
            </div>
        </div>
        <div
            data-aos="fade"
            class="text-md barlow text-[#111d] font-normal lg:w-[50%] md:px-4 m-auto"
        >
            At Indian Infra we provide Engineering Services, Building
            Information Modeling, Digital Engineering and Rendered
            Visualizations. We develop innovative solutions directed towards the
            Architecture, Engineering and Construction Industry. Indian Infra is
            currently making a significant process on research and development
            tasks in parallel with production activities, seeking a synthesis
            between technology and effective response to the challenges of each
            project.
        </div>
    </div>

    <iframe
        width="560"
        height="315"
        class="rounded-xl bg-black w-full md:h-[50vh] lg:h-[60vh] xl:h-[70vh]"
        src="https://www.youtube.com/embed/9jJ-fxUT4Fo?si=tLg8CZDRY8bK1NzB"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
    ></iframe>

    <BIM />
    {#each content as c, index}
        <EngineeringPanel
            title={c.title}
            img={c.img}
            heading={c.heading}
            text={c.text}
            invert={Boolean(index % 2)}
        />
    {/each}
</div>
