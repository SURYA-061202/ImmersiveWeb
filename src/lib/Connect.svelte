<script>
    import img from "./../assets/connect.png";
    import LinkButton from "./LinkButton.svelte";
</script>

<div class="flex w-full md:p-8 mb-8 md:mb-0">
    <div class="bg-black grow md:m-8 md:rounded-2xl">
        <div
            class="flex flex-col p-8 gap-8 rounded-xl md:flex-row md:p-16 lg:my-8 lg:gap-16"
            data-aos="fade"
        >
            <img src={img} alt="people shaking hands :)" />
            <div class="flex flex-col justify-center gap-2 lg:gap-8">
                <h1
                    class="mukta text-white font-bold text-3xl md:text-4xl lg:text-7xl"
                >
                    Let's <br />
                    <span class="text-primary text-3xl md:text-4xl lg:text-7xl"
                        >&emsp;Connect</span
                    >
                </h1>
                <p
                    class="barlow font-normal text-gray-200 text-md md:pl-8 md:text-xl lg:text-4xl lg:w-[80%] grow"
                >
                    Got Interesting mind blowing project in mind?
                </p>
                <div class="flex flex-row-reverse">
                    <LinkButton size={42} />
                </div>
            </div>
        </div>
    </div>
</div>
