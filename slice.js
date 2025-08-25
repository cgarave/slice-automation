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

let selectedRegion = '' //holds id of the current selected region

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
    region.id = region.innerHTML; //assigns ID to every region button using its own inner text
    
    region.addEventListener('click', (e) => {
        regionList.forEach(r => r.classList.remove('outline')); //removes all button outlines before adding outline to the clicked button
        region.classList.add('outline');

        //findSelectedRegion();

        controlInputs(sliceTypeList.value, e.target.id);
    })
})

//Slice type dropdown listener
sliceTypeList.addEventListener('change', () => {

    controlPreview(sliceTypeList.value);
    findSelectedRegion();
    controlInputs(sliceTypeList.value, selectedRegion)
})

//Open CP button listener
channelPlannerBtn.addEventListener('click', () => controlPlannerBtn(selectedRegion));

//Create UAT advert button
createAdvertBtn.addEventListener('click', () => createAdvert())

function controlInputs(sliceType, region) {
    switch(sliceType) {

        case 'HB':
            //inputContainer.innerHTML = regionInputFieldList[region];
            Array.from(inputContainer.children).forEach(child => {child.classList.add('hidden');}); //hides all input fields
            document.getElementById(region+'-container').classList.remove('hidden'); //show only input fields for the selected region
            document.querySelectorAll('.cta').forEach(cta => {cta.classList.remove('hidden')}) //show cta link input
            document.querySelectorAll('.tl').forEach(tl => {tl.classList.add('hidden')}) //hides two links input
            controlAdvertName('H', region);
            break;
        
        case 'HVB':
            Array.from(inputContainer.children).forEach(child => {child.classList.add('hidden');});
            document.getElementById(region+'-container').classList.remove('hidden');
            document.querySelectorAll('.cta').forEach(cta => {cta.classList.remove('hidden')})
            document.querySelectorAll('.tl').forEach(tl => {tl.classList.add('hidden')})
            controlAdvertName('VB', region);
            break;

        case 'RHB':
            Array.from(inputContainer.children).forEach(child => {child.classList.add('hidden');});
            document.getElementById(region+'-container').classList.remove('hidden');
            document.querySelectorAll('.cta').forEach(cta => {cta.classList.remove('hidden')})
            document.querySelectorAll('.tl').forEach(tl => {tl.classList.add('hidden')})
            controlAdvertName('H', region);
            break;

        case 'GL':
            Array.from(inputContainer.children).forEach(child => {child.classList.add('hidden');});
            document.getElementById(region+'-container').classList.remove('hidden');
            document.getElementById('game-code-input').classList.remove('hidden'); //show gamecode input
            document.querySelectorAll('.cta').forEach(cta => {cta.classList.add('hidden')})
            document.querySelectorAll('.tl').forEach(tl => {tl.classList.add('hidden')})
            controlAdvertName('H', region);
            break;

        case 'OB':
            Array.from(inputContainer.children).forEach(child => {child.classList.add('hidden');});
            document.getElementById(region+'-container').classList.remove('hidden');
            document.querySelectorAll('.cta').forEach(cta => {cta.classList.remove('hidden')})
            document.querySelectorAll('.tl').forEach(tl => {tl.classList.add('hidden')})
            controlAdvertName('OB', region);
            break;

        case 'SIB':
            Array.from(inputContainer.children).forEach(child => {child.classList.add('hidden');});
            document.getElementById(region+'-container').classList.remove('hidden');
            document.querySelectorAll('.cta').forEach(cta => {cta.classList.remove('hidden')})
            document.querySelectorAll('.tl').forEach(tl => {tl.classList.add('hidden')})
            controlAdvertName('MD', region);
            break;

        case 'SVB':
            Array.from(inputContainer.children).forEach(child => {child.classList.add('hidden');});
            document.getElementById(region+'-container').classList.remove('hidden');
            document.querySelectorAll('.cta').forEach(cta => {cta.classList.remove('hidden')})
            document.querySelectorAll('.tl').forEach(tl => {tl.classList.add('hidden')})
            controlAdvertName('MD', region);
            break;

        case 'CI':
            Array.from(inputContainer.children).forEach(child => {child.classList.add('hidden');});
            document.getElementById(region+'-container').classList.remove('hidden');
            document.querySelectorAll('.cta').forEach(cta => {cta.classList.remove('hidden')})
            document.querySelectorAll('.tl').forEach(tl => {tl.classList.add('hidden')})
            controlAdvertName('H', region);
            break;

        case 'TL':
            Array.from(inputContainer.children).forEach(child => {child.classList.add('hidden');});
            document.getElementById(region+'-container').classList.remove('hidden');
            document.querySelectorAll('.cta').forEach(cta => {cta.classList.add('hidden')})
            document.querySelectorAll('.tl').forEach(tl => {tl.classList.remove('hidden')}) //show two link input
            controlAdvertName('H', region);
            break;

        case 'TB':
            Array.from(inputContainer.children).forEach(child => {child.classList.add('hidden');});
            document.getElementById(region+'-container').classList.remove('hidden');
            document.querySelectorAll('.cta').forEach(cta => {cta.classList.add('hidden')})
            document.querySelectorAll('.tl').forEach(tl => {tl.classList.remove('hidden')})
            controlAdvertName('H', region);
            break;

        case 'NB':
            Array.from(inputContainer.children).forEach(child => {child.classList.add('hidden');});
            document.getElementById(region+'-container').classList.remove('hidden');
            document.querySelectorAll('.cta').forEach(cta => {cta.classList.add('hidden')})
            document.querySelectorAll('.tl').forEach(tl => {tl.classList.add('hidden')})
            controlAdvertName('H', region);
            break;

        case 'MB1':
            Array.from(inputContainer.children).forEach(child => {child.classList.add('hidden');});
            document.getElementById(region+'-container').classList.remove('hidden');
            document.getElementById('mb-input-container').classList.remove('hidden');
            document.querySelectorAll('.general').forEach(general => {general.classList.add('hidden')})
            document.querySelectorAll('.cta').forEach(cta => {cta.classList.add('hidden')})
            document.querySelectorAll('.tl').forEach(tl => {tl.classList.add('hidden')})
            controlAdvertName('MB', region);
            break;

        case 'MB2':
            Array.from(inputContainer.children).forEach(child => {child.classList.add('hidden');});
            document.getElementById(region+'-container').classList.remove('hidden');
            document.getElementById('mb-input-container').classList.remove('hidden');
            document.querySelectorAll('.general').forEach(general => {general.classList.add('hidden')})
            document.querySelectorAll('.cta').forEach(cta => {cta.classList.add('hidden')})
            document.querySelectorAll('.tl').forEach(tl => {tl.classList.add('hidden')})
            controlAdvertName('MB', region);
            break;

        case 'MB3':
            Array.from(inputContainer.children).forEach(child => {child.classList.add('hidden');});
            document.getElementById(region+'-container').classList.remove('hidden');
            document.getElementById('mb-input-container').classList.remove('hidden');
            document.querySelectorAll('.general').forEach(general => {general.classList.add('hidden')})
            document.querySelectorAll('.cta').forEach(cta => {cta.classList.add('hidden')})
            document.querySelectorAll('.tl').forEach(tl => {tl.classList.add('hidden')})
            controlAdvertName('MB', region);
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

function controlAdvertName(sliceType, region) {

    promoCode.addEventListener('input', () => {
        advertName.value = `${sliceType}-${promoCode.value}-${region}`
    })

    advertName.value = `${sliceType}-${promoCode.value}-${region}`
}

function controlPlannerBtn(region) {
    switch (region) {
        case 'CN':
            window.open("https://superadminict888.sharepoint.com/:x:/s/EA-ChinaCN/ESXLQqIMnfVJq-BDLXZpNsUB2RBYF62t9viBs6SnyHKVFA?e=9BWas4", "_blank");
            break;
        case 'VN':
            window.open("https://superadminict888.sharepoint.com/:x:/s/SEARequests/EWQ5lw5PrxhCskBmnfCeW5oBKsE_ITs9tG5KgtMRUfdAaw?e=1G5Eo5", "_blank");
            break;
        case 'TH':
            window.open("https://superadminict888.sharepoint.com/:x:/s/SEA-ThailandTH/Ed0ehlgeYXhFuoBjN_Rl0KEBsM3xxXDI281ZDOkz1hJ_lA?e=uBRaMh", "_blank");
            break;
        case 'KR':
            window.open("https://superadminict888.sharepoint.com/:x:/s/EA-KoreaKR/EXPGfIRCICtAu1XYStvyfxsBkigdxxFF5vEWKkJqDq-zUw?e=1yR3zX", "_blank");
            break;
        case 'ID':
            window.open("https://superadminict888.sharepoint.com/:x:/s/SEA-IndonesiaID/Eb7Yt_GCiXFGi3wNhQ7ryw8BzzZJV-9AeCoSW7nojUvt3Q?e=ymgjhj", "_blank");
            break;
        case 'KH':
            window.open("https://superadminict888.sharepoint.com/:x:/s/SEA-ThailandTHcopy/ET6NeyCLsv1Fl5TGMjdUHBABGyiyBBlPS9BAM3M44MzldA?e=ZlSzny", "_blank");
            break;
        case 'JP':
            window.open("https://superadminict888.sharepoint.com/:x:/s/EA-MalaysiaMY/EbcB0DJG1fhKozIhAgtu-HUBnxW5kiyv4F-zLAcm-jxwsA?e=ee1MUi", "_blank");
            break;
        case 'IN':
            window.open("https://superadminict888-my.sharepoint.com/:x:/g/personal/03100230_paola_b_ict888_net/EZtX2UdmmwZHqmBD-VL87QkBiGlgO-__U0kwT1mQ2WUVqw?e=YMQAzG", "_blank");
            break;
    }
}

function createAdvert() {
    window.open("https://cms.cubebo.blue/7001/advert/Create", "_blank")
}

function findSelectedRegion() {
    Array.from(regionList).map(r => {
        if (r.classList.contains('outline')) {
            selectedRegion = r.id
        }
    });
}
findSelectedRegion();

function handleInputs() {

    //List of input fields
    let encnTitle = document.getElementById('encn-title-input');
    let zhcnTitle = document.getElementById('zhcn-title-input');
    let encnDescription = document.getElementById('encn-desc-input');
    let zhcnDescription = document.getElementById('zhcn-desc-input');
    let cnLink = document.getElementById('cn-link-input');
    let cnAltLink = document.getElementById('cn-alt-link-input');
    let cnLink1 = document.getElementById('cn-link-1-input');
    let cnLink2 = document.getElementById('cn-link-2-input');

    let envnTitle = document.getElementById('envn-title-input');
    let vivnTitle = document.getElementById('vivn-title-input');
    let envnDescription = document.getElementById('envn-desc-input');
    let vivnDescription = document.getElementById('vivn-desc-input');
    let vnLink = document.getElementById('vn-link-input');
    let vnAltLink = document.getElementById('vn-alt-link-input');
    let vnLink1 = document.getElementById('vn-link-1-input');
    let vnLink2 = document.getElementById('vn-link-2-input');

    let enthTitle = document.getElementById('enth-title-input');
    let ththTitle = document.getElementById('thth-title-input');
    let enthDescription = document.getElementById('enth-desc-input');
    let ththDescription = document.getElementById('thth-desc-input');
    let thLink = document.getElementById('th-link-input');
    let thAltLink = document.getElementById('th-alt-link-input');
    let thLink1 = document.getElementById('th-link-1-input');
    let thLink2 = document.getElementById('th-link-2-input');

    let enkrTitle = document.getElementById('enkr-title-input');
    let kokrTitle = document.getElementById('kokr-title-input');
    let enkrDescription = document.getElementById('enkr-desc-input');
    let kokrDescription = document.getElementById('kokr-desc-input');
    let krLink = document.getElementById('kr-link-input');
    let krAltLink = document.getElementById('kr-alt-link-input');
    let krLink1 = document.getElementById('kr-link-1-input');
    let krLink2 = document.getElementById('kr-link-2-input');

    let enidTitle = document.getElementById('enid-title-input');
    let ididTitle = document.getElementById('idid-title-input');
    let enidDescription = document.getElementById('enid-desc-input');
    let ididDescription = document.getElementById('idid-desc-input');
    let idLink = document.getElementById('id-link-input');
    let idAltLink = document.getElementById('id-alt-link-input');
    let idLink1 = document.getElementById('id-link-1-input');
    let idLink2 = document.getElementById('id-link-2-input');

    let enkhTitle = document.getElementById('enkh-title-input');
    let kmkhTitle = document.getElementById('kmkh-title-input');
    let enkhDescription = document.getElementById('enkh-desc-input');
    let kmkhDescription = document.getElementById('kmkh-desc-input');
    let khLink = document.getElementById('kh-link-input');
    let khAltLink = document.getElementById('kh-alt-link-input');
    let khLink1 = document.getElementById('kh-link-1-input');
    let khLink2 = document.getElementById('kh-link-2-input');

    let enjpTitle = document.getElementById('enjp-title-input');
    let jajpTitle = document.getElementById('jajp-title-input');
    let enjpDescription = document.getElementById('enjp-desc-input');
    let jajpDescription = document.getElementById('jajp-desc-input');
    let jpLink = document.getElementById('jp-link-input');
    let jpAltLink = document.getElementById('jp-alt-link-input');
    let jpLink1 = document.getElementById('jp-link-1-input');
    let jpLink2 = document.getElementById('jp-link-2-input');

    let eninTitle = document.getElementById('enin-title-input');
    let hiinTitle = document.getElementById('hiin-title-input');
    let eninDescription = document.getElementById('enin-desc-input');
    let hiinDescription = document.getElementById('hiin-desc-input');
    let inLink = document.getElementById('in-link-input');
    let inAltLink = document.getElementById('in-alt-link-input');
    let inLink1 = document.getElementById('in-link-1-input');
    let inLink2 = document.getElementById('in-link-2-input');

    document.getElementById('encn-title-input').addEventListener('input', () => {
        document.getElementById('en-desktop-title').textContent = document.getElementById('encn-title-input').value
    })
    document.getElementById('zhcn-title-input')
}