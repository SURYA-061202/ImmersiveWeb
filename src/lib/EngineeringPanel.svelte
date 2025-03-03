<script>
    export let title = "Lorem Ipsum";
    export let heading = "HAHAHA";
    export let text = "HAHAHA";
    export let img;
    export let invert = false;
</script>

<div
    data-aos="fade"
    class="raleway flex flex-row rounded md:rounded-2xl bg-[#000e] p-8 md:p-16 md:py-28 gap-8 lg:gap-16 {invert
        ? 'flex-row-reverse'
        : ''}"
>
    <img
        class="lg:h-[50vh] hidden md:block lg:w-fit object-cover"
        data-aos={invert ? "fade-left" : "fade-right"}
        data-aos-delay="100"
        src={img}
        alt="bg"
    />
    <div class="flex flex-col w-full gap-8 justify-center">
        <div class="text-bold text-white text-2xl md:text-4xl lg:text-5xl">
            {title}
        </div>
        <div class="flex flex-col md:flex-row gap-8">
            <img
                class="xs:h-[30vw] md:h-[15vw] md:h-fit lg:w-fit object-cover md:hidden"
                src={img}
                alt="bg"
            />
            <div class="flex flex-col raleway font-bold text-xl gap-8">
                <div class="flex flex-col" style="white-space: pre-line;">
                    <div
                        class="text-secondary md:text-2xl lg:w-[80%]"
                        data-aos="fade"
                        data-aos-delay="50"
                    >
                        {heading}
                    </div>
                    <div
                        class="barlow font-normal text-sm md:text-md text-[#fffa]"
                        data-aos="fade"
                        data-aos-delay="100"
                    >
                        {text}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
