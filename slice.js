//Nav 
let promoCode = document.getElementById('promocode');
const sliceTypeList = document.getElementById('slice-type');
const bannerTypeList = document.getElementById('banner-type');
const requestorList = document.getElementById('requestor-list');
const ctaLinkList = document.getElementById('cta-link-list');
const ctaTextList = document.getElementById('cta-text-list');

let advertName = document.getElementById('advert-name');
const channelPlannerBtn = document.getElementById('channel-planner');
const createAdvertBtn = document.getElementById('create-advert')

//Preview containers
let desktopPreviewContainer = document.getElementById('desktop-preview-container');
let mobilePreviewContainer = document.getElementById('mobile-preview-container');
let inputContainer = document.getElementById('input-container');

//Setting all inputs
inputContainer.innerHTML = regionInputFieldList.CN 
                        + regionInputFieldList.VN 
                        + regionInputFieldList.TH 
                        + regionInputFieldList.KR
                        + regionInputFieldList.ID
                        + regionInputFieldList.KH
                        + regionInputFieldList.JP
                        + regionInputFieldList.IN
                        + gameCodeInput 
                        + matchBannerInput

promoCode.addEventListener('input', () => {
    controlPreview(sliceTypeList.value);
})
bannerTypeList.addEventListener('change', () => {
    controlPreview(sliceTypeList.value)
})
ctaTextList.addEventListener('change', () => {
    controlPreview(sliceTypeList.value)
})

//Select region button listener
const regionList = document.querySelectorAll('.region');
regionList.forEach(region => {
    region.id = region.innerHTML; //assigns ID to every region using its own inner text
    
    region.addEventListener('click', (e) => {
        regionList.forEach(r => r.classList.remove('outline')); //removes all button outlines before adding outline to the clicked button
        region.classList.add('outline');

        controlInputs(sliceTypeList.value, e.target.id);
    })
})

//Slice type dropdown listener
sliceTypeList.addEventListener('change', () => {

    controlPreview(sliceTypeList.value);
    
    let selectedRegion = ''

    //using outline class to find which region is selected
    Array.from(regionList).map(r => {
        if (r.classList.contains('outline')) {
            selectedRegion = r.id
        }
    });
    controlInputs(sliceTypeList.value, selectedRegion)
})

function controlInputs(sliceType, region) {
    switch(sliceType) {

        case 'HB':
            //inputContainer.innerHTML = regionInputFieldList[region];
            Array.from(inputContainer.children).forEach(child => {
                child.classList.add('hidden');
            });

            document.getElementById(region+'-container').classList.remove('hidden');
            
            //hides cta link input
            document.querySelectorAll('.cta').forEach(cta => {cta.classList.remove('hidden')})
            //hides two links input
            document.querySelectorAll('.tl').forEach(tl => {tl.classList.add('hidden')})
            break;
        
        case 'HVB':
            Array.from(inputContainer.children).forEach(child => {
                child.classList.add('hidden');
            });

            document.getElementById(region+'-container').classList.remove('hidden');
            
            //hides cta link input
            document.querySelectorAll('.cta').forEach(cta => {cta.classList.remove('hidden')})
            //hides two links input
            document.querySelectorAll('.tl').forEach(tl => {tl.classList.add('hidden')})
            break;

        case 'RHB':
            Array.from(inputContainer.children).forEach(child => {
                child.classList.add('hidden');
            });

            document.getElementById(region+'-container').classList.remove('hidden');
            
            //hides cta link input
            document.querySelectorAll('.cta').forEach(cta => {cta.classList.remove('hidden')})
            //hides two links input
            document.querySelectorAll('.tl').forEach(tl => {tl.classList.add('hidden')})
            break;

        case 'GL':
            Array.from(inputContainer.children).forEach(child => {
                child.classList.add('hidden');
            });

            document.getElementById(region+'-container').classList.remove('hidden');
            document.getElementById('game-code-input').classList.remove('hidden');

            //hides cta link input
            document.querySelectorAll('.cta').forEach(cta => {cta.classList.add('hidden')})
            //hides two links input
            document.querySelectorAll('.tl').forEach(tl => {tl.classList.add('hidden')})
            break;

        case 'OB':
            Array.from(inputContainer.children).forEach(child => {
                child.classList.add('hidden');
            });

            document.getElementById(region+'-container').classList.remove('hidden');
            
            //hides cta link input
            document.querySelectorAll('.cta').forEach(cta => {cta.classList.remove('hidden')})
            //hides two links input
            document.querySelectorAll('.tl').forEach(tl => {tl.classList.add('hidden')})
            break;

        case 'SIB':
            Array.from(inputContainer.children).forEach(child => {
                child.classList.add('hidden');
            });

            document.getElementById(region+'-container').classList.remove('hidden');
            
            //hides cta link input
            document.querySelectorAll('.cta').forEach(cta => {cta.classList.remove('hidden')})
            //hides two links input
            document.querySelectorAll('.tl').forEach(tl => {tl.classList.add('hidden')})
            break;
        case 'SVB':
            Array.from(inputContainer.children).forEach(child => {
                child.classList.add('hidden');
            });

            document.getElementById(region+'-container').classList.remove('hidden');
            
            //hides cta link input
            document.querySelectorAll('.cta').forEach(cta => {cta.classList.remove('hidden')})
            //hides two links input
            document.querySelectorAll('.tl').forEach(tl => {tl.classList.add('hidden')})
            break;
        case 'CI':
            Array.from(inputContainer.children).forEach(child => {
                child.classList.add('hidden');
            });

            document.getElementById(region+'-container').classList.remove('hidden');
            
            //hides cta link input
            document.querySelectorAll('.cta').forEach(cta => {cta.classList.remove('hidden')})
            //hides two links input
            document.querySelectorAll('.tl').forEach(tl => {tl.classList.add('hidden')})
            break;
        case 'TL':
            Array.from(inputContainer.children).forEach(child => {
                child.classList.add('hidden');
            });

            document.getElementById(region+'-container').classList.remove('hidden');
            
            //hides cta link input
            document.querySelectorAll('.cta').forEach(cta => {cta.classList.add('hidden')})
            //hides two links input
            document.querySelectorAll('.tl').forEach(tl => {tl.classList.remove('hidden')})
            break;
        case 'TB':
            Array.from(inputContainer.children).forEach(child => {
                child.classList.add('hidden');
            });

            document.getElementById(region+'-container').classList.remove('hidden');
            
            //hides cta link input
            document.querySelectorAll('.cta').forEach(cta => {cta.classList.add('hidden')})
            //hides two links input
            document.querySelectorAll('.tl').forEach(tl => {tl.classList.remove('hidden')})
            break;
        case 'NB':
            Array.from(inputContainer.children).forEach(child => {
                child.classList.add('hidden');
            });

            document.getElementById(region+'-container').classList.remove('hidden');
            
            //hides cta link input
            document.querySelectorAll('.cta').forEach(cta => {cta.classList.add('hidden')})
            //hides two links input
            document.querySelectorAll('.tl').forEach(tl => {tl.classList.add('hidden')})
            break;
        case 'MB1':
            Array.from(inputContainer.children).forEach(child => {
                child.classList.add('hidden');
            });

            document.getElementById(region+'-container').classList.remove('hidden');
            document.getElementById('mb-input-container').classList.remove('hidden');

            //hides general input
            document.querySelectorAll('.general').forEach(general => {general.classList.add('hidden')})
            //hides cta link input
            document.querySelectorAll('.cta').forEach(cta => {cta.classList.add('hidden')})
            //hides two links input
            document.querySelectorAll('.tl').forEach(tl => {tl.classList.add('hidden')})
            break;
        case 'MB2':
            Array.from(inputContainer.children).forEach(child => {
                child.classList.add('hidden');
            });

            document.getElementById(region+'-container').classList.remove('hidden');
            document.getElementById('mb-input-container').classList.remove('hidden');

            //hides general input
            document.querySelectorAll('.general').forEach(general => {general.classList.add('hidden')})
            //hides cta link input
            document.querySelectorAll('.cta').forEach(cta => {cta.classList.add('hidden')})
            //hides two links input
            document.querySelectorAll('.tl').forEach(tl => {tl.classList.add('hidden')})
            break;
        case 'MB3':
            Array.from(inputContainer.children).forEach(child => {
                child.classList.add('hidden');
            });

            document.getElementById(region+'-container').classList.remove('hidden');
            document.getElementById('mb-input-container').classList.remove('hidden');

            //hides general input
            document.querySelectorAll('.general').forEach(general => {general.classList.add('hidden')})
            //hides cta link input
            document.querySelectorAll('.cta').forEach(cta => {cta.classList.add('hidden')})
            //hides two links input
            document.querySelectorAll('.tl').forEach(tl => {tl.classList.add('hidden')})
            break;
        case 'FCB':
            break;
        case 'F1':
            break;
        
    }
}

function controlPreview(sliceType) {

    desktopPreviewContainer.innerHTML = desktopBanner; 
    mobilePreviewContainer.innerHTML = mobileBanner;

    let date = promoCode.value.slice(-4);
    let month = date.slice(0, 2);
    let year = date.slice(2);
    let monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let folder_date = `20${year}-${month}-` + (monthName[month - 1]);

    //Desktop Preview
    document.getElementById('en-desktop-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/2844x800-${promoCode.value}.webp`;
    document.getElementById('local-desktop-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/2844x800-${promoCode.value}.webp`;

    //Mobile Preview
    document.getElementById('en-mobile-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/1280x720-${promoCode.value}.webp`;
    document.getElementById('local-mobile-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/1280x720-${promoCode.value}.webp`;

    //Desktop Buttons
    document.getElementById('en-desktop-button').textContent = ctaTextList.value;
    document.getElementById('local-desktop-button').textContent = ctaTextList.value;

}