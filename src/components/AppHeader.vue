<script setup lang="ts">
import { ref } from 'vue'
import logo from '@/assets/images/general/iwina_logo.png'

const toggle_status = ref(false);
const dropdown_status = ref(false);

const changeToggleStatus = () => {
    toggle_status.value = !toggle_status.value;
};

const changeDropdownStatus = () => {
    dropdown_status.value = !dropdown_status.value;
};

</script>

<template>
    <nav class="relative bg-white shadow-lg dark:bg-gray-800">
        <div class="px-6 md:px-8 py-3 mx-auto md:flex">
            <div class="flex items-center justify-between">
                <a href="#">
                    <img class="w-auto h-6 sm:h-8" :src="logo" alt="">
                </a>

                <!-- Mobile menu button -->
                <div class="flex md:hidden">
                    <button @click="changeToggleStatus" type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        <svg v-show="!toggle_status" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                        </svg>
                
                        <svg v-show="toggle_status" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <div :class="[toggle_status ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full']" class="absolute inset-x-0 z-20 w-full py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between">
                <div class="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
                    <RouterLink to="/" class="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">Home</RouterLink>
                    <a href="#" class="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">
                        <!-- Toggle Button -->
                        <button type="button" @click.passive="changeDropdownStatus" 
                            class="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-lg tracking-wide transition hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" :class="dropdown_status ? 'text-gray-800 dark:text-amber-100' : 'text-neutral-700 dark:text-neutral-200'" :aria-expanded="dropdown_status" aria-haspopup="true">
                            Solutions
                            <svg aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4 rotate-0">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                            </svg>        
                        </button>
                        <!-- Dropdown Menu -->
                        <div v-show="dropdown_status"                            
                            class="absolute top-11 flex w-full min-w-[32rem] flex-col divide-y divide-neutral-300 overflow-visible rounded-lg bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 dark:divide-gray-900 dark:bg-gray-800 z-10" role="menu">
                            <!-- Dropdown Section -->
                            <div class="py-1"> 
                                <p class="gap-2 px-6 py-2 text-sm text-neutral-700" role="menuitem">
                                    Solutions
                                </p>
                            </div>
                            <!-- Dropdown Section -->
                            <div class="flex flex-col justify-between py-1.5"> 
                                <div class="w-full flex justify-between">
                                    <a href="#" class="w-1/2 flex flex-grow items-center gap-2 px-4 py-2 text-sm text-neutral-700 hover:bg-gray-800/5 hover:text-gray-800 focus-visible:bg-gray-800/10 focus-visible:text-gray-800 focus-visible:outline-none dark:bg-gray-800 dark:text-neutral-200 dark:hover:bg-gray-50/5 dark:hover:text-amber-100 dark:focus-visible:bg-gray-50/10 dark:focus-visible:text-amber-100" role="menuitem">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"  class="w-4 h-4">
                                            <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"/>
                                        </svg>
                                        Audit & Assessment
                                    </a>
                                    <a href="#" class="w-1/2 flex flex-grow items-center whitespace-nowrap gap-2 px-4 py-2 text-sm text-neutral-700 hover:bg-gray-800/5 hover:text-gray-800 focus-visible:bg-gray-800/10 focus-visible:text-gray-800 focus-visible:outline-none dark:bg-gray-800 dark:text-neutral-200 dark:hover:bg-gray-50/5 dark:hover:text-amber-100 dark:focus-visible:bg-gray-50/10 dark:focus-visible:text-amber-100" role="menuitem">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"  class="w-4 h-4">
                                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                                        </svg>
                                        Risk Management
                                    </a>
                                </div>
                                
                                <div class="w-full flex justify-between">
                                    <a href="#" class="w-1/2 flex flex-grow items-center gap-2 px-4 py-2 text-sm text-neutral-700 hover:bg-gray-800/5 hover:text-gray-800 focus-visible:bg-gray-800/10 focus-visible:text-gray-800 focus-visible:outline-none dark:bg-gray-800 dark:text-neutral-200 dark:hover:bg-gray-50/5 dark:hover:text-amber-100 dark:focus-visible:bg-gray-50/10 dark:focus-visible:text-amber-100" role="menuitem">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"  class="w-4 h-4">
                                            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd"/>
                                        </svg>
                                        Blockchain
                                    </a>
                                    <a href="#" class="w-1/2 flex flex-grow items-center whitespace-nowrap gap-2 px-4 py-2 text-sm text-neutral-700 hover:bg-gray-800/5 hover:text-gray-800 focus-visible:bg-gray-800/10 focus-visible:text-gray-800 focus-visible:outline-none dark:bg-gray-800 dark:text-neutral-200 dark:hover:bg-gray-50/5 dark:hover:text-amber-100 dark:focus-visible:bg-gray-50/10 dark:focus-visible:text-amber-100" role="menuitem">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"  class="w-4 h-4">
                                            <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd"/>
                                        </svg>
                                        Safety & Quality Management
                                    </a>
                                </div>

                                <div class="w-full flex justify-between">
                                    <a href="#" class="w-1/2 flex flex-grow items-center gap-2 px-4 py-2 text-sm text-neutral-700 hover:bg-gray-800/5 hover:text-gray-800 focus-visible:bg-gray-800/10 focus-visible:text-gray-800 focus-visible:outline-none dark:bg-gray-800 dark:text-neutral-200 dark:hover:bg-gray-50/5 dark:hover:text-amber-100 dark:focus-visible:bg-gray-50/10 dark:focus-visible:text-amber-100" role="menuitem">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"  class="w-4 h-4">
                                            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd"/>
                                        </svg>
                                        Compliance & Regulation
                                    </a>
                                    <a href="#" class="w-1/2 flex flex-grow items-center whitespace-nowrap gap-2 px-4 py-2 text-sm text-neutral-700 hover:bg-gray-800/5 hover:text-gray-800 focus-visible:bg-gray-800/10 focus-visible:text-gray-800 focus-visible:outline-none dark:bg-gray-800 dark:text-neutral-200 dark:hover:bg-gray-50/5 dark:hover:text-amber-100 dark:focus-visible:bg-gray-50/10 dark:focus-visible:text-amber-100" role="menuitem">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"  class="w-4 h-4">
                                            <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd"/>
                                        </svg>
                                        Sustainability
                                    </a>
                                </div>

                                <div class="w-full flex justify-between">
                                    <a href="#" class="w-1/2 flex flex-grow items-center gap-2 px-4 py-2 text-sm text-neutral-700 hover:bg-gray-800/5 hover:text-gray-800 focus-visible:bg-gray-800/10 focus-visible:text-gray-800 focus-visible:outline-none dark:bg-gray-800 dark:text-neutral-200 dark:hover:bg-gray-50/5 dark:hover:text-amber-100 dark:focus-visible:bg-gray-50/10 dark:focus-visible:text-amber-100" role="menuitem">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"  class="w-4 h-4">
                                            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd"/>
                                        </svg>
                                        Recall Management
                                    </a>
                                    <a href="#" class="w-1/2 flex flex-grow items-center whitespace-nowrap gap-2 px-4 py-2 text-sm text-neutral-700 hover:bg-gray-800/5 hover:text-gray-800 focus-visible:bg-gray-800/10 focus-visible:text-gray-800 focus-visible:outline-none dark:bg-gray-800 dark:text-neutral-200 dark:hover:bg-gray-50/5 dark:hover:text-amber-100 dark:focus-visible:bg-gray-50/10 dark:focus-visible:text-amber-100" role="menuitem">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"  class="w-4 h-4">
                                            <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd"/>
                                        </svg>
                                        Supplier Management
                                    </a>
                                </div>

                                <div class="w-full flex justify-between">
                                    <a href="#" class="w-1/2 flex flex-grow items-center gap-2 px-4 py-2 text-sm text-neutral-700 hover:bg-gray-800/5 hover:text-gray-800 focus-visible:bg-gray-800/10 focus-visible:text-gray-800 focus-visible:outline-none dark:bg-gray-800 dark:text-neutral-200 dark:hover:bg-gray-50/5 dark:hover:text-amber-100 dark:focus-visible:bg-gray-50/10 dark:focus-visible:text-amber-100" role="menuitem">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"  class="w-4 h-4">
                                            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd"/>
                                        </svg>
                                        Quality Incidents
                                    </a>
                                    <a href="#" class="w-1/2 flex flex-grow items-center whitespace-nowrap gap-2 px-4 py-2 text-sm text-neutral-700 hover:bg-gray-800/5 hover:text-gray-800 focus-visible:bg-gray-800/10 focus-visible:text-gray-800 focus-visible:outline-none dark:bg-gray-800 dark:text-neutral-200 dark:hover:bg-gray-50/5 dark:hover:text-amber-100 dark:focus-visible:bg-gray-50/10 dark:focus-visible:text-amber-100" role="menuitem">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"  class="w-4 h-4">
                                            <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd"/>
                                        </svg>
                                        Traceablity
                                    </a>
                                </div>
                            </div>
                        </div> 
                    </a>

                    <a href="#" class="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2 whitespace-nowrap">About Us</a>
                    <a href="#" class="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">Blog</a>
                </div>

                <div class="relative mt-4 md:mt-0">   
                    <RouterLink to="/login" class="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">Login</RouterLink>
                    <a href="#" class="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">Contact</a>
                </div>
            </div>
        </div>
    </nav>
</template>