<script>
    import img from "./../assets/engg/bim.png";

    let content = {
        Implementation: `BIM Process Implementation.
Documentation as per BIM Level 2 / EIR
Model Compliance Auditing as per project BEP and ISO 19650 BIM Level 2 Standards.
BIM Documents Preparation`,
        "3D Modelling and 2D Detailing": `LOD 200 to LOD 300 - Design Intent modelling.
LOD 350 - Coordinated Model Delivery.
LOD 400 - Construction Model.
LOD 500 - As built Model Delivery.`,
        "Clash Coordination": `Developing Clash Matrix.
Federation of LOD 300/350 models (ASIMEPF) and identifying the clash coordination
Preparation of clash reports and progress dashboards for Client Consultant review`,
        "Scan To BIM": `Transfer Redline Drawing Markups to BIM.
Point cloud Scan data to BIM Modelling
Updating model per received Asset Information's.
Issued for Consultant approval.`,
    };
</script>

<div
    data-aos="fade"
    class="raleway flex flex-col rounded md:rounded-2xl bg-[#000e] p-8 md:p-16 gap-8"
>
    <div
        class="text-bold text-white text-2xl md:text-4xl lg:text-5xl lg:w-[60%]"
    >
        Building information modelling (BIM)
    </div>
    <div
        class="flex flex-col justify-between md:flex-row md:flex-row-reverse gap-8"
    >
        <img
            class="h-[50vh] md:w-[35vw] md:h-fit lg:w-fit object-cover"
            src={img}
            alt="bg"
        />
        <div class="flex flex-col raleway font-bold text-xl gap-8">
            {#each Object.entries(content) as [title, text]}
                <div class="flex flex-col" style="white-space: pre-line;">
                    <div class="text-secondary md:text-2xl">{title}</div>
                    <div
                        class="barlow font-normal text-sm md:text-md text-[#fffa]"
                    >
                        {text}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
