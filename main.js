import './style.css'

import Typed from 'typed.js'

document.querySelector('#app').innerHTML = `
 
<div id="body" class="font-container px-4 sm:px-10 lg:px-20 bg-scroll">

  <main>
    <header>
  <nav class="text-white flex justify-between items-center py-6 px-0 ">
    <div class='flex gap-6'>
      <button data-text="Awesome" class="button1 dark:block hidden">
  <span class="actual-text">&nbsp;Luiz&nbsp;&nbsp;Felipe&nbsp;</span>
  <span class="hover-text1" aria-hidden="true">&nbsp;Luiz&nbsp;&nbsp;Felipe&nbsp;</span>
</button>
<button data-text="Awesome" class="button2 dark:hidden block">
  <span class="actual-text">&nbsp;Luiz&nbsp;&nbsp;Felipe&nbsp;</span>
  <span class="hover-text2" aria-hidden="true">&nbsp;Luiz&nbsp;&nbsp;Felipe&nbsp;</span>
</button>

    </div>
    <div id="menu"  class="hidden  md:flex duration-300 md:static md:min-h-fit lg:-ml-36 absolute min-h-[30vh] left-0 top-[-100%] md:w-auto w-full flex flex-col md:flex-row md:items-center py-6 md:px-4 md:py-3 rounded-bl-md rounded-br-md md:rounded-lg border-solid border-2 border-zinc-400 dark:border-zinc-600 bg-zinc-100 dark:bg-zinc-900  ">
      <ul class="flex flex-col md:flex-row gap-6 font-mono md:items-center text-3xl align-middle justify-center md:bg-transparent px-6 rounded-full font-medium max-w-max ">
         <a href="/"
        class="text-2xl font-sans align-middle font-bold leading-6  p-3 hover:white hover:bg-zinc-300  dark:hover:bg-zinc-800 rounded-md cursor-pointer text-gray-800 dark:text-gray-200">Home</a>
      <a href="#Projects"
        class="text-2xl  font-sans p-3 align-middle font-bold leading-6  hover:white hover:bg-zinc-300  dark:hover:bg-zinc-800 rounded-md cursor-pointer text-gray-800 dark:text-gray-200">Projects</a>
      <a href="#Skills"
        class="text-2xl p-3 font-sans align-middle font-bold leading-6 hover:white hover:bg-zinc-300  dark:hover:bg-zinc-800 rounded-md cursor-pointer text-gray-800 dark:text-gray-200">Skills</a>
      <a href="#Contact"
        class="text-2xl p-3 font-sans align-middle font-bold leading-6  hover:white hover:bg-zinc-300  dark:hover:bg-zinc-800 rounded-md cursor-pointer text-gray-800 dark:text-gray-200">Contact</a>
      

      </ul>
    </div>
    <div class="flex items-center gap-6">
      <button name="light-dark-mode-toggle" id="theme-toggle" type="button" class="h-fit w-fit my-0 dark:text-white text-gray-500 hover:scale-110 transition-transform transform hover:bg-zinc-200 bg-zinc-100 dark:hover:bg-zinc-600 dark:bg-zinc-800 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
        <svg id="theme-toggle-dark-icon" class="hidden w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
        <svg id="theme-toggle-light-icon" class="hidden w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path>
        </svg>
      </button>
      <ion-icon id="toggle-menu-button" name="menu" class="w-7 h-7 dark:bg-zinc-800  p-2.5 rounded-lg cursor-pointer md:hidden text-gray-500 dark:text-gray-400 hover:scale-110 transition-transform transform hover:bg-zinc-200 bg-zinc-300 dark:hover:bg-zinc-600  "></ion-icon>
    </div>
  </nav>
</header>

    

    <div id="hero" class="mt-20 mb-20 ">
      <div class=""><!-- commented text-center for having the text at left instead of center-->
        <h1 class="text-gray-950 dark:text-gray-100 text-3xl md:text-5xl font-bold mb-2 tracking-tight">Luiz Felipe</h1>
        <div id="typed-strings">
          <p class="text-gray-600 dark:text-gray-400 text-1xl md:text-2xl max-w-screen-md mx-auto font-normal tracking-tight mb-4">Student • Web Developer • Tech Enthusiast </p>
        </div>
        <span id="typed" class="dark:text-gray-400"></span>
        <div class="max-w-screen-md mt-2"><!-- commented mx-auto for having the text at left instead of center -->
          <p class="text-gray-800 dark:text-gray-200 text-xl md:text-3xl tracking-tight">
            I'm a passionate web developer, creating my unique digital world step by step. I'm currently pursuing an undergraduate course in engineering while developing websites.
          </p>
          <p class="text-gray-800 dark:text-gray-200 text-xl md:text-3xl tracking-tight mt-4">
            I already have experience in this field. Last year I improved myself in Visteon, an international company in the automobile branch.
          </p>
        </div>
      <div class=""><!-- commented text-center for having the text at left instead of center-->
        <p class="text-gray-600 dark:text-gray-400 text-xl md:text-2xl mt-4 tracking-tight">Connect with me here! ⬇️</p>
        <div class="mt-8 flex flex-wrap gap-5  mb-16"><!-- commented justify-center for having the text at left instead of center-->
          <a href="https://github.com/LuizFelipeDias" aria-label="GitHub" class="dark:fill-white fill-black transition-transform hover:scale-150">
            <svg width="30" height="30" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/luiz-felipe-dias-de-araujo/" aria-label="LinkedIn" class="dark:fill-white  transition-transform hover:scale-150 fill-black">
            <svg width="30" height="30" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z" fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
          </a>
         
        </div>
      </div>
    </div>

  <section id="Experience" class="mt-20 mb-20 pt-8">
    <div id="Experience">
      <h1 class="text-gray-950 dark:text-gray-100 text-5xl font-bold tracking-tight mb-10">Experience</h1>
      
      <!-- Card 1 -->
      <div id="cards" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 sm:px-10 lg:px-20">
        <div id="block" class="mt-8 shadow-md dark:bg-zinc-900 bg-zinc-100 rounded-xl border-2 border-solid border-zinc-400 dark:border-zinc-700 hover:border-zinc-600 dark:hover:border-white transform hover:scale-103 transition-transform">
          <img class="p-4 rounded-3xl" src="/Visteon.png" alt="Visteon">
          <h1 class="dark:text-gray-100 text-4xl font-bold tracking-tight mx-5">Visteon</h1>
          <p class="dark:text-gray-100 font-semibold text-md tracking-tight p-2 mx-5">
            A global automotive technology company specializing in designing and manufacturing cockpit electronics and connected car solutions.
          </p>
          <p class="dark:text-gray-100 font-semibold text-md tracking-tight p-2 mx-5">
            There, my function was as a full-stack developer. In this period, I worked with some frameworks and languages, and these details are in the skills section.
          </p>
          <div class="flex mt-4 mx-5 mb-5"></div>
        </div>

        <!-- Card 2 -->
        <div id="block" class="mt-8 shadow-md dark:bg-zinc-900 bg-zinc-100 rounded-xl border-2 border-solid border-zinc-400 dark:border-zinc-700 hover:border-zinc-600 dark:hover:border-white transform hover:scale-103 transition-transform">
          <img class="p-4 rounded-3xl" src="/B&Z.jpg" alt="B&Z">
          <h1 class="dark:text-gray-100 text-4xl font-bold tracking-tight mx-5">BeZ</h1>
          <p class="dark:text-gray-100 font-semibold text-md tracking-tight p-2 mx-5">
           A company spcialspecializing in industrial automation.
          <p class="dark:text-gray-100 font-semibold text-md tracking-tight p-2 mx-5">
            There, my function was as an automation engineer. In this period, I worked with Python and libraries like openCV and pySerial.
          </p>
          <div class="flex mt-4 mx-5 mb-5"></div>
        </div>
      </div>
    </div>
  </section>


    <section id="Projects" class="mt-20 mb-20 pt-8"><!-- added  py-10 for having the having section look better-->
      <div id="projects">
        <h1 class="text-gray-950 dark:text-gray-100 text-5xl font-bold tracking-tight mb-10 ">Projects</h1><!-- commented text-center for having the text at left instead of center-->
        <div id="cards" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 sm:px-10 lg:px-20">
          <div id="block" class="mt-8 shadow-md dark:bg-zinc-900 bg-zinc-100 rounded-xl border-2 border-solid border-zinc-400 dark:border-zinc-700 hover:border-zinc-600 dark:hover:border-white  transform hover:scale-103 transition-transform">
            <img class="p-4 rounded-3xl" src="/printPicklist.png" alt="Picklist">
            <h1 class="dark:text-gray-100 text-4xl font-bold tracking-tight mx-5">Picklist</h1>
            <p class="dark:text-gray-100 font-semibold text-md tracking-tight p-2 mx-5">Wainting list system.</p>
            <div class="flex mt-4 mx-5 mb-5">
              <a href="https://github.com/LuizFelipeDias/Picklist" class="bg-gray-900  items-center hover:scale-110 transition-transform transform dark:bg-gray-100 text-white dark:text-black flex gap-2 p-3 rounded-md font-medium ml-5">Github
                <svg class="fill-white dark:fill-black" width="22" height="22" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>

          <div id="block" class="mt-8 shadow-md dark:bg-zinc-900 bg-zinc-100 rounded-xl border-2 border-solid border-zinc-400 dark:border-zinc-700 hover:border-zinc-600 dark:hover:border-white transform hover:scale-103 transition-transform">
            <img class="p-4 rounded-3xl" src="/printScrap.png" alt="Scrap">
            <h1 class="dark:text-gray-100 text-4xl font-bold tracking-tight mx-5">Scrap</h1>
            <p class="dark:text-gray-100 font-semibold text-md tracking-tight p-2 mx-5">Control system of scrap from hardwares</p>
            <div class="flex mt-4 mx-5 mb-5">
              <a href="https://github.com/LuizFelipeDias/Scrap" class="bg-gray-900  items-center hover:scale-110 transition-transform transform dark:bg-gray-100 text-white dark:text-black flex gap-2 p-3 rounded-md font-medium ml-5">Github
                <svg class="fill-white dark:fill-black" width="22" height="22" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>

        <button id="a" class="mt-8 mb-16 flex  px-4 sm:px-10 lg:px-20 transition-transform hover:scale-105 "><!-- commented justify-center for having the text at left instead of center-->
          <p class="dark:text-gray-900 flex gap-2 text-2xl font-md dark:bg-gray-100 p-3 rounded-lg text-gray-100 bg-gray-900 tracking-tight">
            <a class="flex gap-2" href="#">View more projects
              <svg width="34" height="34" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>
            </a>
          </p>
        </button>
    
      </div>
    </section>



    <h1 class="flex flex-col text-5xl font-bold tracking-tight text-gray-950 dark:text-gray-100 mb-8 ">Skill</h1><!-- commented text-center for having the text at left instead of center-->
    
    <div class="px-4 sm:px-10 lg:px-20">
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">

            <div id="block" class="mt-8 p-4 grid col-span-1 shadow-md w-full dark:bg-zinc-900 bg-zinc-100 rounded-xl border-2 border-solid border-zinc-400 dark:border-zinc-700 hover:border-zinc-600 dark:hover:border-white transform hover:scale-105 transition-transform">
                <h1 class="dark:text-gray-100 m-3 text-2xl sm:text-4xl font-bold tracking-tight mb-4">Languages and Frameworks</h1>
                <div class="flex flex-wrap gap-3 px-2 sm:px-5 pt-3 sm:pt-6">
                    <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=html" alt="HTML">
                    <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=css" alt="CSS">
                    <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=javascript" alt="JavaScript">
                    <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=cpp" alt="C++">
                    <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=python" alt="Python">
                    <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=tailwindcss" alt="TailwindCSS">
                    <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=bootstrap" alt="Bootstrap">
                    <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=nodejs" alt="Node.js">
                    <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=expressjs" alt="Express.js">
                    <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=laravel" alt="laravel">
                    <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=vue" alt="vue">
                    <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=nestjs" alt="nestjs">
                    <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=react" alt="react">
                </div>
            </div>

            <div id="block" class="mt-8 p-4 grid col-span-1 shadow-md w-full dark:bg-zinc-900 bg-zinc-100 rounded-xl border-2 border-solid border-zinc-400 dark:border-zinc-700 hover:border-zinc-600 dark:hover:border-white transform hover:scale-105 transition-transform">
                
            <h1 class=" dark:text-gray-100 text-2xl m-3 sm:text-4xl font-bold tracking-tight mb-4">Database and Tools</h1>
                
                <div class="flex flex-wrap gap-3 px-2 sm:px-5 pt-3 sm:pt-6">
                    <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=mysql" alt="MySQL">
                    <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB">
                    <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=supabase" alt="Supabase">
                    <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=vscode" alt="VS Code">
                    <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=vite" alt="Vite">
                    <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=vercel" alt="Vercel">
                    <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=netlify" alt="Netlify">
                    <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=figma" alt="Figma">
                    <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=github" alt="GitHub">
                    <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=postman" alt="Postman">
                    <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=linux" alt="linux">
                    <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=git" alt="git">
                    <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=docker" alt="docker">
                </div>
            </div>

        </div>
    </div>
</div>
<div id="Contact" class="mt-20 mb-20 pt-8 ">
  <h1 class="dark:text-gray-100 mb-16 text-5xl font-bold tracking-tight ">Contact</h1><!-- commented text-center for having the text at left instead of center-->
  <div id="block" class="flex justify-center items-center">
         <!--<form action="https://api.web3forms.com/submit" method="POST" class="w-full max-w-2xl lg:max-w-4xl"> this form is commented for removing captcha and to improve/change reponsivenes if needed switch back to it or it classes-->
    <form
  action="https://formspree.io/f/mvoejjvq"
  method="POST"
>
      <input type="hidden" name="access_key" value="ad73a3b2-ca2f-45bc-918a-5c642ff8ebf7" />
      
      <div class="dark:bg-zinc-900 bg-zinc-100 border-zinc-300 dark:border-zinc-700 border-solid border-2 p-4 rounded-xl shadow-lg">
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2 mb-8 md:mb-0 p-4">
            <h1 class="text-3xl dark:text-gray-100 font-bold mb-4">Contact Me</h1>
            <p class="dark:text-gray-100 mb-6">Any questions or discussions? Just write me a message!</p>
            <div class=" grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" autocomplete="given-name" placeholder="John" name="first-name" required class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <input type="text" autocomplete="given-name" placeholder="Doe" name="last-name" class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div class="form-group mt-4">
              <input type="email" autocomplete="given-email" name="email" required placeholder="your@mail.com" class="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div class="form-group mt-4">
              <textarea id="message" name="message" placeholder="Your Message" class="border border-gray-300 rounded-md px-4 py-2 w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
             
            <!-- <div class="h-captcha" data-captcha="true"></div>-->
            <button type="submit" class="form-submit bg-gray-900 dark:bg-gray-100 text-white dark:text-black font-medium px-6 py-2 rounded-md mt-4 dark:hover:bg-gray-300 hover:scale-110 transform transition-transform duration-300">SEND MESSAGE</button>
          </div>
    </form>
    <div class="md:w-1/2  bg-zinc-200 dark:bg-zinc-800 text-gray-900 dark:text-gray-100 p-8 rounded-lg">
      <h2 class="text-2xl font-bold mb-4">Contact Information</h2>
      <p class="mb-6">Fill up the form and send me your message or contact through below details</p>
      <div class="flex items-center mb-4">
        <i class="fas fa-phone mr-4"></i>
        <span>+55 92 99264 2708</span>
      </div>
      <div class="flex items-center mb-4">
        <i class="fas fa-envelope mr-4"></i>
        <span>lfdias2203@gmail.com</span>
      </div>
    <div class="mt-6 flex flex-row gap-5 ml-4">
     <a href="https://github.com/LuizFelipeDias" aria-label="GitHub" class="dark:fill-white fill-black transition-transform hover:scale-150">
            <svg width="30" height="30" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/luiz-felipe-dias-de-araujo/" aria-label="LinkedIn" class="dark:fill-white  transition-transform hover:scale-150 fill-black">
            <svg width="30" height="30" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z" fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
          </a>
    </div>
    <div class="flex items-center ml-4 my-4">
    </div>
    <a href="assets/LuizFelipe_DiasdeAraujo_CurrículoAtual.pdf" download class="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-lg hover:bg-opacity-70 transition font-semibold shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" width="24px">
        <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
        <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
        <g id="SVGRepo_iconCarrier">
          <g id="Interface / Download">
            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#f1f1f1" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" id="Vector"></path>
          </g>
        </g>
      </svg>
      Resume
      <div class="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
      </div>
    </a>

  </div>
</div>
</div>
</main>

<div>
<p class="dark:text-gray-100 font-semibold p-6 text-2xl flex justify-center tracking-tight"></p>
<p class="dark:text-gray-100 font-semibold pb-20 text-2xl items-center flex justify-center tracking-tight"><a href="https://github.com/LuizFelipeDias/Portfolio.git" class="bg-gray-900  items-center hover:scale-110 transition-transform transform dark:bg-gray-100 text-white dark:text-black flex gap-2 p-3 rounded-md font-medium ml-5">Source Code
                <svg class="fill-white dark:fill-black" width="22" height="22" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
              </a></p>
</div>

</div>



`
var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  themeToggleLightIcon.classList.remove('hidden')
} else {
  themeToggleDarkIcon.classList.remove('hidden')
}

var themeToggleBtn = document.getElementById('theme-toggle')

themeToggleBtn.addEventListener('click', function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle('hidden')
  themeToggleLightIcon.classList.toggle('hidden')

  // if set via local storage previously
  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    }
  }
})
var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  backSpeed: 40,
  typeSpeed: 60
})
/*
document
  .getElementById('toggle-menu-button')
  .addEventListener('click', function () {
    var menu = document.getElementById('menu')
    if (menu.style.top === '0px') {
      menu.style.top = '-100%'
    } else {
      menu.style.top = '0px'
    }
  })*/
const toggleMenuButton = document.getElementById('toggle-menu-button')
const menu = document.getElementById('menu')

toggleMenuButton.addEventListener('click', () => {
  menu.classList.toggle('hidden')
})
