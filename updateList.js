let desktopBanner = `<div id="desktop-en-image-container" class="h-fit relative rounded-md overflow-hidden">
                        <div class="absolute bottom-0 p-3 w-full flex flex-row justify-between items-center bg-linear-to-t from-black from-10% to-100%">
                            <div class="flex flex-col gap-y-1">
                                <h3 id="en-desktop-title" class="text-[14px] font-semibold"></h3>
                                <p id="en-desktop-desc" class="text-neutral-400 text-[10px]"></p>
                                <p id="en-desktop-tnc" class="text-neutral-400 text-[6px] hidden"></p>
                            </div>
                            <a href="" id="en-desktop-button" class="mr-4 p-1 text-[10px] font-medium bg-[#FF6A00] rounded-xs">MORE INFO</a>
                        </div>
                        <img id="en-desktop-img" src="" alt="">
                    </div>
                    <div id="desktop-local-image-container" class="h-fit relative rounded-md overflow-hidden">
                        <div class="absolute bottom-0 p-3 w-full flex flex-row justify-between items-center bg-linear-to-t from-black from-10% to-100%">
                            <div class="flex flex-col gap-y-1">
                                <h3 id="local-desktop-title" class="text-[14px] font-semibold"></h3>
                                <p id="local-desktop-desc" class="text-neutral-400 text-[10px]"></p>
                                <p id="local-desktop-tnc" class="text-neutral-400 text-[6px] hidden"></p>
                            </div>
                            <a href="" id="local-desktop-button" class="mr-4 p-1 text-[10px] font-medium bg-[#FF6A00] rounded-xs">MORE INFO</a>
                        </div>
                        <img id="local-desktop-img" src="" alt="">
                    </div>`


let mobileBanner = `<div id="mobile-en-image-container" class="h-fit relative rounded-md overflow-hidden">
                        <div class="absolute bottom-0 p-3 w-full flex flex-row justify-between items-center bg-black opacity-80">
                            <div class="flex flex-col gap-y-1">
                                <h3 id="en-mobile-title" class="text-[14px] font-semibold"></h3>
                                <p id="en-mobile-desc" class="text-neutral-400 text-[10px]"></p>
                                <p id="en-mobile-tnc" class="text-neutral-400 text-[6px] hidden"></p>
                            </div>
                        </div>
                        <img id="en-mobile-img" src="" alt="">
                    </div>
                    <div id="mobile-local-image-container" class="h-fit relative rounded-md overflow-hidden">
                        <div class="absolute bottom-0 p-3 w-full flex flex-row justify-between items-center bg-black opacity-80">
                            <div class="flex flex-col gap-y-1">
                                <h3 id="local-mobile-title" class="text-[14px] font-semibold"></h3>
                                <p id="local-mobile-desc" class="text-neutral-400 text-[10px]"></p>
                                <p id="local-mobile-tnc" class="text-neutral-400 text-[6px] hidden"></p>
                            </div>
                        </div>
                        <img id="local-mobile-img" src="" alt="">
                    </div>`

let desktopVideoBanner = `<div id="desktop-en-image-container" class="h-fit relative rounded-md overflow-hidden">
                        <div class="absolute bottom-0 p-3 w-full flex flex-row justify-between items-center bg-linear-to-t from-black from-10% to-100%">
                            <div class="flex flex-col gap-y-1">
                                <h3 id="en-desktop-title" class="text-[14px] font-semibold"></h3>
                                <p id="en-desktop-desc" class="text-neutral-400 text-[10px]"></p>
                                <p id="en-desktop-tnc" class="text-neutral-400 text-[6px] hidden"></p>
                            </div>
                            <a href="" id="en-desktop-button" class="mr-4 p-1 text-[10px] font-medium bg-[#FF6A00] rounded-xs">MORE INFO</a>
                        </div>
                        <video muted autoplay loop>
                          <source id="en-desktop-video" src="" type="video/mp4">
                        </video>
                    </div>
                    <div id="desktop-local-image-container" class="h-fit relative rounded-md overflow-hidden">
                        <div class="absolute bottom-0 p-3 w-full flex flex-row justify-between items-center bg-linear-to-t from-black from-10% to-100%">
                            <div class="flex flex-col gap-y-1">
                                <h3 id="local-desktop-title" class="text-[14px] font-semibold"></h3>
                                <p id="local-desktop-desc" class="text-neutral-400 text-[10px]"></p>
                                <p id="local-desktop-tnc" class="text-neutral-400 text-[6px] hidden"></p>
                            </div>
                            <a href="" id="local-desktop-button" class="mr-4 p-1 text-[10px] font-medium bg-[#FF6A00] rounded-xs">MORE INFO</a>
                        </div>
                        <video muted autoplay loop>
                          <source id="local-desktop-video" src="" type="video/mp4">
                        </video>
                    </div>`

let mobileVideoBanner = `<div id="mobile-en-image-container" class="h-fit relative rounded-md overflow-hidden">
                        <div class="absolute bottom-0 p-3 w-full flex flex-row justify-between items-center bg-black opacity-80">
                            <div class="flex flex-col gap-y-1">
                                <h3 id="en-mobile-title" class="text-[14px] font-semibold"></h3>
                                <p id="en-mobile-desc" class="text-neutral-400 text-[10px]"></p>
                                <p id="en-mobile-tnc" class="text-neutral-400 text-[6px] hidden"></p>
                            </div>
                        </div>
                        <video muted autoplay loop>
                          <source id="en-mobile-video" src="" type="video/mp4">
                        </video>
                    </div>
                    <div id="mobile-local-image-container" class="h-fit relative rounded-md overflow-hidden">
                        <div class="absolute bottom-0 p-3 w-full flex flex-row justify-between items-center bg-black opacity-80">
                            <div class="flex flex-col gap-y-1">
                                <h3 id="local-mobile-title" class="text-[14px] font-semibold"></h3>
                                <p id="local-mobile-desc" class="text-neutral-400 text-[10px]"></p>
                                <p id="local-mobile-tnc" class="text-neutral-400 text-[6px] hidden"></p>
                            </div>
                        </div>
                        <video muted autoplay loop>
                          <source id="local-mobile-video" src="" type="video/mp4">
                        </video>
                    </div>`


function updateCode(sliceType){

    switch(sliceType) {
        case 'HB':
            enCodeContainer.textContent = `<swiper-slide>
    <SMediaBanner :img-url="breakpoints.smAndUp 
    ? '${document.getElementById('en-desktop-img').src}' 
    : '${document.getElementById('en-mobile-img').src }'"
    :link="${document.getElementById('en-desktop-button').getAttribute('href')}"
    title-tag="h1"
    :data-track-content="breakpoints.smAndDown ? true : undefined"
    :data-content-name="breakpoints.smAndDown ? 'TV-${promoCode.value} - (${requestorList.value}-BNR)' : undefined"
    :data-content-piece="breakpoints.smAndDown ? 'TV-${promoCode.value} - BNR ${ctaLinkList.value} - (${requestorList.value}-BNR)' : undefined">
        <template #title>
            <div class="hidden md:block">${document.getElementById('en-desktop-title').innerHTML}</div>
            <div class="md:hidden">${document.getElementById('en-mobile-title').innerHTML}</div>
        </template>
        
        <template #subtitle>
            <div class="hidden md:block">${document.getElementById('en-desktop-desc').innerHTML}</div>
            <div class="md:hidden">${document.getElementById('en-mobile-desc').innerHTML}</div>
        </template>          
        <template #actions>
            <SButton :href="${document.getElementById('en-desktop-button').getAttribute('href')}"
            color="primary--darken-5"
            data-track-content
            data-content-name="TV-${promoCode.value} - (${requestorList.value}-BNR)"
            data-content-piece="TV-${promoCode.value} - CTA ${ctaLinkList.value} - (${requestorList.value}-BNR)">${document.getElementById('en-desktop-button').textContent}</SButton>
        </template>
        <template #tnc>${document.getElementById('en-desktop-tnc').innerHTML}</template>
    </SMediaBanner>
</swiper-slide>`;
            localCodeContainer.textContent = `<swiper-slide>
    <SMediaBanner :img-url="breakpoints.smAndUp 
    ? '${document.getElementById('local-desktop-img').src}' 
    : '${document.getElementById('local-mobile-img').src }'"
    :link="${document.getElementById('local-desktop-button').getAttribute('href')}"
    title-tag="h1"
    :data-track-content="breakpoints.smAndDown ? true : undefined"
    :data-content-name="breakpoints.smAndDown ? 'TV-${promoCode.value} - (${requestorList.value}-BNR)' : undefined"
    :data-content-piece="breakpoints.smAndDown ? 'TV-${promoCode.value} - BNR ${ctaLinkList.value} - (${requestorList.value}-BNR)' : undefined">
        <template #title>
            <div class="hidden md:block">${document.getElementById('local-desktop-title').innerHTML}</div>
            <div class="md:hidden">${document.getElementById('local-mobile-title').innerHTML}</div>
        </template>
        
        <template #subtitle>
            <div class="hidden md:block">${document.getElementById('local-desktop-desc').innerHTML}</div>
            <div class="md:hidden">${document.getElementById('local-mobile-desc').innerHTML}</div>
        </template>          
        <template #actions>
            <SButton :href="${document.getElementById('local-desktop-button').getAttribute('href')}"
            color="primary--darken-5"
            data-track-content
            data-content-name="TV-${promoCode.value} - (${requestorList.value}-BNR)"
            data-content-piece="TV-${promoCode.value} - CTA ${ctaLinkList.value} - (${requestorList.value}-BNR)">${document.getElementById('local-desktop-button').textContent}</SButton>
        </template>
        <template #tnc>${document.getElementById('local-desktop-tnc').innerHTML}</template>
    </SMediaBanner>
</swiper-slide>`;
            break;

        case 'HVB':
            
            enCodeContainer.textContent = `<swiper-slide>
  <SMediaBanner title-tag="h1" @click="openGame()" :link="${document.getElementById('en-desktop-button').getAttribute('href')}">
    <template #default>
      <div class="bg-center bg-no-repeat">
        <video loop :autoplay="true" muted webkit-playsinline playsinline :src="breakpoints.smAndUp? 
		'${document.getElementById('en-desktop-video').src}' 
		:'${document.getElementById('en-mobile-video').src}'"
		class="absolute object-cover object-center w-full h-full">
        </video>
      </div>
    </template>
    <template #title>
        <div class="hidden md:block">${document.getElementById('en-desktop-title').innerHTML}</div>
        <div class="md:hidden">${document.getElementById('en-mobile-title').innerHTML}</div>
        </template>
        
        <template #subtitle>
        <div class="hidden md:block">${document.getElementById('en-desktop-desc').innerHTML}</div>
        <div class="md:hidden">${document.getElementById('en-mobile-desc').innerHTML}</div>
        </template>
    <template #actions> 
        <a class="max-w-full s-button false overflow-hidden relative inline-flex items-center justify-center gap-1 outline-none text-button transition-all duration-300 rounded before:absolute before:bg-current before:color-[inherit] before:inset-0 before:opacity-0 before:pointer-events-none before:rounded-[inherit] hover:before:md:opacity-[.04] focus:before:opacity-[.12] active:before:opacity-[.12] hover:md:shadow-8 h-9 px-4 min-w-16 bg-primary--darken-5 text-light--high hover:text-light--high shadow-2 flex-[0_0_auto]" color="primary--darken-5" :href="${document.getElementById('en-desktop-button').getAttribute('href')}">${document.getElementById('en-desktop-button').textContent}</a> 
    </template> 
    <template #tnc>${document.getElementById('en-desktop-tnc').innerHTML}</template>
  </SMediaBanner>
</swiper-slide>`;
            localCodeContainer.textContent = `<swiper-slide>
  <SMediaBanner title-tag="h1" @click="openGame()" :link="${document.getElementById('local-desktop-button').getAttribute('href')}">
    <template #default>
      <div class="bg-center bg-no-repeat">
        <video loop :autoplay="true" muted webkit-playsinline playsinline :src="breakpoints.smAndUp? 
		'${document.getElementById('local-desktop-video').src}' 
		:'${document.getElementById('local-mobile-video').src}'"
		class="absolute object-cover object-center w-full h-full">
        </video>
      </div>
    </template>
    <template #title>
        <div class="hidden md:block">${document.getElementById('local-desktop-title').innerHTML}</div>
        <div class="md:hidden">${document.getElementById('local-mobile-title').innerHTML}</div>
        </template>
        
        <template #subtitle>
        <div class="hidden md:block">${document.getElementById('local-desktop-desc').innerHTML}</div>
        <div class="md:hidden">${document.getElementById('local-mobile-desc').innerHTML}</div>
        </template>
    <template #actions> 
        <a class="max-w-full s-button false overflow-hidden relative inline-flex items-center justify-center gap-1 outline-none text-button transition-all duration-300 rounded before:absolute before:bg-current before:color-[inherit] before:inset-0 before:opacity-0 before:pointer-events-none before:rounded-[inherit] hover:before:md:opacity-[.04] focus:before:opacity-[.12] active:before:opacity-[.12] hover:md:shadow-8 h-9 px-4 min-w-16 bg-primary--darken-5 text-light--high hover:text-light--high shadow-2 flex-[0_0_auto]" color="primary--darken-5" :href="${document.getElementById('local-desktop-button').getAttribute('href')}">${document.getElementById('local-desktop-button').textContent}</a> 
    </template> 
    <template #tnc>${document.getElementById('local-desktop-tnc').innerHTML}</template>
  </SMediaBanner>
</swiper-slide>`;
            break;
            
        case 'RHB':
            enCodeContainer.textContent = `<swiper-slide>
    <SMediaBanner :img-url="breakpoints.smAndUp 
    ? '${document.getElementById('en-desktop-img').src}' 
    : '${document.getElementById('en-mobile-img').src }'"
    :link="${document.getElementById('en-desktop-button').getAttribute('href')}"
    title-tag="h1"
    :data-track-content="breakpoints.smAndDown ? true : undefined"
    :data-content-name="breakpoints.smAndDown ? 'TV-${promoCode.value} - (${requestorList.value}-BNR)' : undefined"
    :data-content-piece="breakpoints.smAndDown ? 'TV-${promoCode.value} - BNR ${ctaLinkList.value} - (${requestorList.value}-BNR)' : undefined">
        <template #title>
            <div class="hidden md:block">${document.getElementById('en-desktop-title').innerHTML}</div>
            <div class="md:hidden">${document.getElementById('en-mobile-title').innerHTML}</div>
        </template>
        
        <template #subtitle>
            <div class="hidden md:block">${document.getElementById('en-desktop-desc').innerHTML}</div>
            <div class="md:hidden">${document.getElementById('en-mobile-desc').innerHTML}</div>
        </template>          
        <template #actions>
            <SButton :href="${document.getElementById('en-desktop-button').getAttribute('href')}"
            color="primary--darken-5"
            data-track-content
            data-content-name="TV-${promoCode.value} - (${requestorList.value}-BNR)"
            data-content-piece="TV-${promoCode.value} - CTA ${ctaLinkList.value} - (${requestorList.value}-BNR)">${document.getElementById('en-desktop-button').textContent}</SButton>
        </template>
        <template #tnc>${document.getElementById('en-desktop-tnc').innerHTML}</template>
    </SMediaBanner>
</swiper-slide>`;
            localCodeContainer.textContent = `<swiper-slide>
    <SMediaBanner :img-url="breakpoints.smAndUp 
    ? '${document.getElementById('local-desktop-img').src}' 
    : '${document.getElementById('local-mobile-img').src }'"
    :link="${document.getElementById('local-desktop-button').getAttribute('href')}"
    title-tag="h1"
    :data-track-content="breakpoints.smAndDown ? true : undefined"
    :data-content-name="breakpoints.smAndDown ? 'TV-${promoCode.value} - (${requestorList.value}-BNR)' : undefined"
    :data-content-piece="breakpoints.smAndDown ? 'TV-${promoCode.value} - BNR ${ctaLinkList.value} - (${requestorList.value}-BNR)' : undefined">
        <template #title>
            <div class="hidden md:block">${document.getElementById('local-desktop-title').innerHTML}</div>
            <div class="md:hidden">${document.getElementById('local-mobile-title').innerHTML}</div>
        </template>
        
        <template #subtitle>
            <div class="hidden md:block">${document.getElementById('local-desktop-desc').innerHTML}</div>
            <div class="md:hidden">${document.getElementById('local-mobile-desc').innerHTML}</div>
        </template>          
        <template #actions>
            <SButton :href="${document.getElementById('local-desktop-button').getAttribute('href')}"
            color="primary--darken-5"
            data-track-content
            data-content-name="TV-${promoCode.value} - (${requestorList.value}-BNR)"
            data-content-piece="TV-${promoCode.value} - CTA ${ctaLinkList.value} - (${requestorList.value}-BNR)">${document.getElementById('local-desktop-button').textContent}</SButton>
        </template>
        <template #tnc>${document.getElementById('local-desktop-tnc').innerHTML}</template>
    </SMediaBanner>
</swiper-slide>`;
            break;
    }

}
