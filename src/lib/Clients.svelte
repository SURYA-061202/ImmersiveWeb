<script>
    import Carosal from "./Carosal.svelte";
</script>

<div class="p-8 my-16" data-aos="fade">
    <div class="flex gap-8 md:gap-12 flex-col-reverse flex-col md:flex-row">
        <div class="flex flex-col barlow text-black justify-center grow">
            <h1 class="text-xl md:text-2xl">Our Clients</h1>
            <div
                class="text-2xl md:text-4xl xl:text-5xl text-[#0007] xl:w-[60%]"
            >
                We believe each <span class="text-black">client</span>
                is a long term <span class="text-primary"> partnership</span>
            </div>
        </div>
        <Carosal />
    </div>
</div>
