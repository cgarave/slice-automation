let desktopBanner = `<div id="desktop-en-image-container" class="h-fit relative rounded-md overflow-hidden">
                        <div class="absolute bottom-0 p-3 w-full flex flex-row justify-between items-center bg-linear-to-t from-black from-10% to-100%">
                            <div class="flex flex-col gap-y-1">
                                <h3 id="en-desktop-title" class="text-[14px] font-semibold">This is english title</h3>
                                <p id="en-desktop-desc" class="text-neutral-400 text-[10px]">This is english description</p>
                                <p id="en-desktop-tnc" class="text-neutral-400 text-[6px] hidden">Terms and Conditions Apply.</p>
                            </div>
                            <a href="" id="en-desktop-button" class="mr-4 p-1 text-[10px] font-medium bg-[#FF6A00] rounded-xs">MORE INFO</a>
                        </div>
                        <img id="en-desktop-img" src="" alt="">
                    </div>
                    <div id="desktop-local-image-container" class="h-fit relative rounded-md overflow-hidden">
                        <div class="absolute bottom-0 p-3 w-full flex flex-row justify-between items-center bg-linear-to-t from-black from-10% to-100%">
                            <div class="flex flex-col gap-y-1">
                                <h3 id="local-desktop-title" class="text-[14px] font-semibold">This is localized title</h3>
                                <p id="local-desktop-desc" class="text-neutral-400 text-[10px]">This is localized description</p>
                                <p id="local-desktop-tnc" class="text-neutral-400 text-[6px] hidden">Terms and Conditions Apply.</p>
                            </div>
                            <a href="" id="local-desktop-button" class="mr-4 p-1 text-[10px] font-medium bg-[#FF6A00] rounded-xs">MORE INFO</a>
                        </div>
                        <img id="local-desktop-img" src="" alt="">
                    </div>`


let mobileBanner = `<div id="mobile-en-image-container" class="h-fit relative rounded-md overflow-hidden">
                        <div class="absolute bottom-0 p-3 w-full flex flex-row justify-between items-center bg-black opacity-80">
                            <div class="flex flex-col gap-y-1">
                                <h3 id="en-mobile-title" class="text-[14px] font-semibold">Hello World</h3>
                                <p id="en-mobile-desc" class="text-neutral-400 text-[10px]">This is description</p>
                                <p id="en-mobile-tnc" class="text-neutral-400 text-[6px] hidden">Terms and Conditions Apply.</p>
                            </div>
                        </div>
                        <img id="en-mobile-img" src="" alt="">
                    </div>
                    <div id="mobile-local-image-container" class="h-fit relative rounded-md overflow-hidden">
                        <div class="absolute bottom-0 p-3 w-full flex flex-row justify-between items-center bg-black opacity-80">
                            <div class="flex flex-col gap-y-1">
                                <h3 id="local-mobile-title" class="text-[14px] font-semibold">Hello World</h3>
                                <p id="local-mobile-desc" class="text-neutral-400 text-[10px]">This is description</p>
                                <p id="local-mobile-tnc" class="text-neutral-400 text-[6px] hidden">Terms and Conditions Apply.</p>
                            </div>
                        </div>
                        <img id="local-mobile-img" src="" alt="">
                    </div>`

function updateCode(){

    let date = promoCode.value.slice(-4);
    let month = date.slice(0, 2);
    let year = date.slice(2);
    let monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let folder_date = `20${year}-${month}-` + (monthName[month - 1]);

    let heroBannerSliceEN = `<swiper-slide>
    <SMediaBanner :img-url="breakpoints.smAndUp 
    ? 'https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/2844x800-${promoCode.value}.webp' 
    : 'https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/1280x720-${promoCode.value}.webp'"
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
</swiper-slide>`

    let heroBannerSliceLocal = `<swiper-slide>
    <SMediaBanner :img-url="breakpoints.smAndUp 
    ? 'https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/2844x800-${promoCode.value}.webp' 
    : 'https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/1280x720-${promoCode.value}.webp'"
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
</swiper-slide>`

    enCodeContainer.textContent = heroBannerSliceEN;
    localCodeContainer.textContent = heroBannerSliceLocal;

}
