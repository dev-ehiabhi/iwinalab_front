<script setup lang="ts">
    import section_1_image from '@/assets/images/landing/challenges.png'
    import section_2_image from '@/assets/images/landing/harvest.png'
    import section_3_image from '@/assets/images/landing/guy.png'
</script>

<template>
    <div class="w-full h-screen bg-no-repeat bg-cover bg-center bg-[url('/images/landing/hero_section.jpg')]">
        <header class="bg-gray-400 bg-transparent bg-blend-overlay">
            <!-- <img src="" alt="">  -->
            <div class="relative isolate px-6 pt-4 lg:px-8">                
                <div class="mx-auto max-w-7xl py-6 sm:py-8 lg:py-12">
                    <div class="text-left">
                        <h1 class="text-2xl font-bold tracking-normal leading-8 text-white/100 capitalize sm:text-5xl">Your gateway to <br />international regulatory <br />excellence!</h1>
                        <p class="mt-6 text-lg leading-8 text-white">Empowering Farmers and SMEs for global exports.</p>
                        <div class="mt-10 flex items-center justify-start gap-x-6">
                            <a href="#" class="rounded-md bg-lime-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600">Explore our Solutions</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>

    <div class="py-12 text-center">
        <h1 class="text-4xl capitalize">The problem</h1>
        <p class="py-4 text-lg">African farmers and SMEs face obstacles in meeting vital global compliance standards, demanding prompt action.</p>
    </div>

    <article class="group grid rounded-md max-w-5xl mx-auto grid-cols-1 md:grid-cols-8 overflow-hidden bg-neutral-50 text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
        <!-- image -->
        <div class="col-span-3 overflow-hidden">
            <img :src="section_1_image" class="h-52 md:h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105" alt="Sack, seed, scale" />
        </div>
        <!-- body -->
        <div class="flex flex-col justify-center p-6 col-span-5">
            <h1 class="mb-4 text-4xl font-medium">Challenges</h1>
            <h3 class="text-balance text-xl font-bold text-neutral-900 lg:text-2xl dark:text-white" aria-describedby="articleDescription">Regulatory Compliance</h3>
            <p id="articleDescription" class="my-4 max-w-lg text-pretty text-sm">
                Regulations are vital in agro-industry. 
                Compliance software simplifies the process, 
                reducing costs and risks while expanding global market access.
            </p>
            
            <h3 class="text-balance text-xl font-bold text-neutral-900 lg:text-2xl dark:text-white" aria-describedby="articleDescription">Supply Chain Transparency</h3>
            <p id="articleDescription" class="my-4 max-w-lg text-pretty text-sm">
                The agro-industry supply chain is complex, obscuring transparency. 
                Software solutions provide end-to-end visibility, 
                ensuring product quality and trust with consumers.
            </p>

            <h3 class="text-balance text-xl font-bold text-neutral-900 lg:text-2xl dark:text-white" aria-describedby="articleDescription">Product Traceability</h3>
            <p id="articleDescription" class="my-4 max-w-lg text-pretty text-sm">
                Traditional tracing is slow, error-prone, and risky. 
                Traceability software with RFID and blockchain ensures fast, accurate product tracking, 
                enhancing food safety and consumer protection.
            </p>
        </div>
    </article>

    <div class="my-8"></div>

    <article class="group grid rounded-md max-w-5xl mx-auto grid-cols-1 md:grid-cols-8 overflow-hidden bg-neutral-50 text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
        <!-- body -->
        <div class="flex flex-col justify-center p-6 col-span-5">
            <!-- <h1 class="mb-4 text-4xl font-medium">Challenges</h1> -->
            <h3 class="text-balance text-xl font-bold text-neutral-900 lg:text-2xl dark:text-white" aria-describedby="articleDescription">Lack of Compliance Assurance</h3>
            <p id="articleDescription" class="my-4 max-w-lg text-pretty text-sm">
                Agro-industry exporters often struggle to meet international standards, 
                risking rejected shipments, losses, and a damaged reputation. 
                Compliance software proactively monitors and assesses compliance, 
                offering real-time alerts and suggestions to prevent costly issues.
            </p>
            
            <h3 class="text-balance text-xl font-bold text-neutral-900 lg:text-2xl dark:text-white" aria-describedby="articleDescription">Limited Market Access</h3>
            <p id="articleDescription" class="my-4 max-w-lg text-pretty text-sm">
                Small-scale producers often lack access to global markets. 
                Market access platforms offer tools and information to connect them with 
                buyers and expand their reach, improving livelihoods.
            </p>

            <h3 class="text-balance text-xl font-bold text-neutral-900 lg:text-2xl dark:text-white" aria-describedby="articleDescription">Lack of Financial Planning</h3>
            <p id="articleDescription" class="my-4 max-w-lg text-pretty text-sm">
                Subsistence exporters and producers often face financial challenges. 
                Financial management software helps them plan budgets, organize finances, 
                and make informed investments to unlock growth opportunities and reap the 
                rewards of their efforts.
            </p>
        </div>

        <!-- image -->
        <div class="col-span-3 overflow-hidden">
            <img :src="section_2_image" class="h-52 md:h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105" alt="Sack, seed, scale" />
        </div>
    </article>

    <article class="group grid rounded-md max-w-5xl mx-auto grid-cols-1 md:grid-cols-8 overflow-hidden bg-neutral-50 text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
        <!-- image -->
        <div class="col-span-3 overflow-hidden">
            <img :src="section_3_image" class="h-52 md:h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105" alt="Sack, seed, scale" />
        </div>
        <!-- body -->
        <div class="flex flex-col justify-center p-6 col-span-5">
            <h1 class="mb-4 text-4xl font-medium">Consequences</h1>
            <h3 class="text-balance text-xl font-bold text-neutral-900 lg:text-2xl dark:text-white" aria-describedby="articleDescription">Revenue Loss</h3>
            <p id="articleDescription" class="my-4 max-w-lg text-pretty text-sm">
                Failure to meet compliance standards can result in revenue loss, 
                impacting these businesses' growth and investment capabilities.
            </p>
            
            <h3 class="text-balance text-xl font-bold text-neutral-900 lg:text-2xl dark:text-white" aria-describedby="articleDescription">Reduced Market Access</h3>
            <p id="articleDescription" class="my-4 max-w-lg text-pretty text-sm">
                Non-compliance limits global market access, 
                hampering expansion and income diversification for African products.
            </p>

            <h3 class="text-balance text-xl font-bold text-neutral-900 lg:text-2xl dark:text-white" aria-describedby="articleDescription">Inhibited Growth</h3>
            <p id="articleDescription" class="my-4 max-w-lg text-pretty text-sm">
                Inability to meet compliance hinders the growth of African agriculture and SME sectors, 
                limiting their potential.
            </p>
        </div>
    </article>

    <div class="my-12"></div>

    <section class="bg-lime-50">
        <article class="px-8 pt-8">
            <div class="py-12 text-center">
                <h1 class="text-4xl capitalize">The problem</h1>
                <p class="py-4 text-lg">African farmers and SMEs face obstacles in meeting vital global compliance standards, demanding prompt action.</p>
            </div>

            <div class="md:flex justify-around gap-4 border-t border-lime-200 pt-4">
                <div class="lg:flex-1">
                    <h1 class="text-2xl font-semibold text-gray-600">Assessment Tools</h1>
                    <p class="py-4">Our tools streamline compliance assessment, 
                        offering actionable insights for product enhancement to farmers, 
                        producers and exporters.
                    </p>
                    <a href="" class="text-sm">View Details</a>
                </div>
                <div class="lg:flex-1">
                    <h1 class="text-2xl font-semibold text-gray-600">Marketplace</h1>
                    <p class="py-4">
                        Our marketplace links compliant African producers with international buyers, 
                        streamlining supply chains and boosting business growth.
                    </p>
                    <a href="" class="text-sm">View Details</a>
                </div>
                <div class="lg:flex-1">
                    <h1 class="text-2xl font-semibold text-gray-600">Regulatory Support</h1>
                    <p class="py-4">
                        iWina Lab supports regulatory bodies with robust software for monitoring and 
                        enforcing compliance, improving industry standards.
                    </p>
                    <a href="" class="text-sm">View Details</a>
                </div>
                <div class="lg:flex-1">
                    <h1 class="text-2xl font-semibold text-gray-600">Training Modules</h1>
                    <p class="py-4">
                        We offer specialized training modules that equip our users with the knowledge 
                        and skills required to meet compliance standards effectively.
                    </p>
                    <a href="" class="text-sm">View Details</a>
                </div>
            </div>

            <img src="" alt="" class="w-[95%] mx-auto pt-8">
        </article>
    </section>

    <section class="bg-blue-50">
        <article class="p-16">
            <div class="text-center">
                <h1 class="text-4xl capitalize">Market Opportunity</h1>
                <p class="py-4 text-lg">
                    Africa's booming agriculture sector offers significant opportunities for economic 
                    advancement and food production growth, promising positive impacts on millions of 
                    lives and addressing historical challenges.
                </p>
            </div>

            <div class="mx-8 lg:mx-16 flex justify-between pt-8">
                <div class="">
                    <h1 class="text-2xl text-center font-semibold text-gray-600">$40B</h1>
                    <p class="py-3">
                        Agriculture marketplace
                    </p>
                </div>

                <div class="border-r border-blue-200 mx-4"></div>

                <div class="">
                    <h1 class="text-2xl text-center font-semibold text-gray-600">60%</h1>
                    <p class="py-3">
                        Percentage engage in farming
                    </p>
                </div>

                <div class="border-r border-blue-200 mx-4"></div>

                <div class="">
                    <h1 class="text-2xl text-center font-semibold text-gray-600">Demand</h1>
                    <p class="py-3">
                        Global demand for agricultural product
                    </p>
                </div>
            </div>
        </article>
    </section>

</template>