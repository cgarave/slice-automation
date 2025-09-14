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

//Code containers
let enCodeContainer = document.getElementById('en-code')
let localCodeContainer = document.getElementById('local-code')

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

//List of input fields
let encnTitle = document.getElementById('encn-title-input');
let encnMobileTitle = document.getElementById('encn-mobile-title-input');
let zhcnTitle = document.getElementById('zhcn-title-input');
let zhcnMobileTitle = document.getElementById('zhcn-mobile-title-input');
let encnDescription = document.getElementById('encn-desc-input');
let encnMobileDescription = document.getElementById('encn-mobile-desc-input');
let zhcnDescription = document.getElementById('zhcn-desc-input');
let zhcnMobileDescription = document.getElementById('zhcn-mobile-desc-input');
let cnLink = document.getElementById('cn-link-input');
cnLink.value = '`/${gv.lan}/`'
let cnLink1 = document.getElementById('cn-link-1-input');
let cnLink2 = document.getElementById('cn-link-2-input');

let envnTitle = document.getElementById('envn-title-input');
let envnMobileTitle = document.getElementById('envn-mobile-title-input');
let vivnTitle = document.getElementById('vivn-title-input');
let vivnMobileTitle = document.getElementById('vivn-mobile-title-input');
let envnDescription = document.getElementById('envn-desc-input');
let envnMobileDescription = document.getElementById('envn-mobile-desc-input');
let vivnDescription = document.getElementById('vivn-desc-input');
let vivnMobileDescription = document.getElementById('vivn-mobile-desc-input');
let vnLink = document.getElementById('vn-link-input');
vnLink.value = '`/${gv.lan}/`'
let vnLink1 = document.getElementById('vn-link-1-input');
let vnLink2 = document.getElementById('vn-link-2-input');

let enthTitle = document.getElementById('enth-title-input');
let enthMobileTitle = document.getElementById('enth-mobile-title-input');
let ththTitle = document.getElementById('thth-title-input');
let ththMobileTitle = document.getElementById('thth-mobile-title-input');
let enthDescription = document.getElementById('enth-desc-input');
let enthMobileDescription = document.getElementById('enth-mobile-desc-input');
let ththDescription = document.getElementById('thth-desc-input');
let ththMobileDescription = document.getElementById('thth-mobile-desc-input');
let thLink = document.getElementById('th-link-input');
thLink.value = '`/${gv.lan}/`'
let thLink1 = document.getElementById('th-link-1-input');
let thLink2 = document.getElementById('th-link-2-input');

let enkrTitle = document.getElementById('enkr-title-input');
let enkrMobileTitle = document.getElementById('enkr-mobile-title-input');
let kokrTitle = document.getElementById('kokr-title-input');
let kokrMobileTitle = document.getElementById('kokr-mobile-title-input');
let enkrDescription = document.getElementById('enkr-desc-input');
let enkrMobileDescription = document.getElementById('enkr-mobile-desc-input');
let kokrDescription = document.getElementById('kokr-desc-input');
let kokrMobileDescription = document.getElementById('kokr-mobile-desc-input');
let krLink = document.getElementById('kr-link-input');
krLink.value = '`/${gv.lan}/`'
let krLink1 = document.getElementById('kr-link-1-input');
let krLink2 = document.getElementById('kr-link-2-input');

let enidTitle = document.getElementById('enid-title-input');
let enidMobileTitle = document.getElementById('enid-mobile-title-input');
let ididTitle = document.getElementById('idid-title-input');
let ididMobileTitle = document.getElementById('idid-mobile-title-input');
let enidDescription = document.getElementById('enid-desc-input');
let enidMobileDescription = document.getElementById('enid-mobile-desc-input');
let ididDescription = document.getElementById('idid-desc-input');
let ididMobileDescription = document.getElementById('idid-mobile-desc-input');
let idLink = document.getElementById('id-link-input');
idLink.value = '`/${gv.lan}/`'
let idLink1 = document.getElementById('id-link-1-input');
let idLink2 = document.getElementById('id-link-2-input');

let enkhTitle = document.getElementById('enkh-title-input');
let enkhMobileTitle = document.getElementById('enkh-mobile-title-input');
let kmkhTitle = document.getElementById('kmkh-title-input');
let kmkhMobileTitle = document.getElementById('kmkh-mobile-title-input');
let enkhDescription = document.getElementById('enkh-desc-input');
let enkhMobileDescription = document.getElementById('enkh-mobile-desc-input');
let kmkhDescription = document.getElementById('kmkh-desc-input');
let kmkhMobileDescription = document.getElementById('kmkh-mobile-desc-input');
let khLink = document.getElementById('kh-link-input');
khLink.value = '`/${gv.lan}/`'
let khLink1 = document.getElementById('kh-link-1-input');
let khLink2 = document.getElementById('kh-link-2-input');

let enjpTitle = document.getElementById('enjp-title-input');
let enjpMobileTitle = document.getElementById('enjp-mobile-title-input');
let jajpTitle = document.getElementById('jajp-title-input');
let jajpMobileTitle = document.getElementById('jajp-mobile-title-input');
let enjpDescription = document.getElementById('enjp-desc-input');
let enjpMobileDescription = document.getElementById('enjp-mobile-desc-input');
let jajpDescription = document.getElementById('jajp-desc-input');
let jajpMobileDescription = document.getElementById('jajp-mobile-desc-input');
let jpLink = document.getElementById('jp-link-input');
jpLink.value = '`/${gv.lan}/`'
let jpLink1 = document.getElementById('jp-link-1-input');
let jpLink2 = document.getElementById('jp-link-2-input');

let eninTitle = document.getElementById('enin-title-input');
let eninMobileTitle = document.getElementById('enin-mobile-title-input');
let hiinTitle = document.getElementById('hiin-title-input');
let hiinMobileTitle = document.getElementById('hiin-mobile-title-input');
let eninDescription = document.getElementById('enin-desc-input');
let eninMobileDescription = document.getElementById('enin-mobile-desc-input');
let hiinDescription = document.getElementById('hiin-desc-input');
let hiinMobileDescription = document.getElementById('hiin-mobile-desc-input');
let inLink = document.getElementById('in-link-input');
inLink.value = '`/${gv.lan}/`'
let inLink1 = document.getElementById('in-link-1-input');
let inLink2 = document.getElementById('in-link-2-input');

let gameCode = document.getElementById('game-code-input');

let sportType = document.getElementById('sport-type')
let oddsType1 = document.getElementById('odds-type-1')
let oddsType2 = document.getElementById('odds-type-2')
let team1Shirt = document.getElementById('team-1-shirt')
let team2Shirt = document.getElementById('team-2-shirt')
let competitionCode = document.getElementById('competition-code')
let matchCode1 = document.getElementById('match-code-1')
let matchCode2 = document.getElementById('match-code-2')

promoCode.addEventListener('input', () => {
    findSelectedRegion();
    controlPreview(sliceTypeList.value, selectedRegion);
    controlCtaText(selectedRegion)
    handleInputs(sliceTypeList.value, selectedRegion)
    bannerTypeList.value === 'promotion' ? controlTnc(selectedRegion) : console.log('generic');
    updateCode(sliceTypeList.value);
})
bannerTypeList.addEventListener('change', () => {
    findSelectedRegion();
    controlPreview(sliceTypeList.value, selectedRegion);
    controlCtaText(selectedRegion);
    handleInputs(sliceTypeList.value, selectedRegion);
    bannerTypeList.value === 'promotion' ? controlTnc(selectedRegion) : console.log('generic');
    updateCode(sliceTypeList.value);
})
requestorList.addEventListener('change', () => {
    updateCode(sliceTypeList.value);
})
ctaLinkList.addEventListener('change', () => {
    updateCode(sliceTypeList.value);
})
ctaTextList.addEventListener('change', () => {
    findSelectedRegion();
    controlPreview(sliceTypeList.value, selectedRegion);
    controlCtaText(selectedRegion);
    handleInputs(sliceTypeList.value, selectedRegion);
    bannerTypeList.value === 'promotion' ? controlTnc(selectedRegion) : console.log('generic');
    updateCode(sliceTypeList.value);
})

//Select region button listener
const regionList = document.querySelectorAll('.region');
regionList.forEach(region => {
    region.id = region.innerHTML; //assigns ID to every region button using its own inner text
    
    region.addEventListener('click', (e) => {
        regionList.forEach(r => r.classList.remove('outline')); //removes all button outlines before adding outline to the clicked button
        region.classList.add('outline');

        controlInputs(sliceTypeList.value, e.target.id);
        controlPreview(sliceTypeList.value, e.target.id);
        controlCtaText(e.target.id)
        handleInputs(sliceTypeList.value, e.target.id)
        bannerTypeList.value === 'promotion' ? controlTnc(e.target.id) : console.log('generic');
        updateCode(sliceTypeList.value);
    })
})

//Slice type dropdown listener
sliceTypeList.addEventListener('change', () => {

    findSelectedRegion();
    controlPreview(sliceTypeList.value, selectedRegion);
    controlInputs(sliceTypeList.value, selectedRegion)
    controlCtaText(selectedRegion)
    updateCode(sliceTypeList.value);
})

//Open CP button listener
channelPlannerBtn.addEventListener('click', () => controlPlannerBtn(selectedRegion));

//Create UAT advert button
createAdvertBtn.addEventListener('click', () => createAdvert())

//Function that controls input visibility depending on toggled slice type
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

//Function that controls the preview section
function controlPreview(sliceType, region) {

    let date = promoCode.value.slice(-4);
    let month = date.slice(0, 2);
    let year = date.slice(2);
    let monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let folder_date = `20${year}-${month}-` + (monthName[month - 1]);

    switch(sliceType) {
        case 'HB':
            desktopPreviewContainer.innerHTML = desktopBanner; 
            mobilePreviewContainer.innerHTML = mobileBanner;
            //Desktop Preview
            document.getElementById('en-desktop-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/2844x800-${promoCode.value}.webp`;
            document.getElementById('local-desktop-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/2844x800-${promoCode.value}.webp`;

            //Mobile Preview
            document.getElementById('en-mobile-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/1280x720-${promoCode.value}.webp`;
            document.getElementById('local-mobile-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/1280x720-${promoCode.value}.webp`;
            break;
        
        case 'HVB':
            desktopPreviewContainer.innerHTML = desktopVideoBanner; 
            mobilePreviewContainer.innerHTML = mobileVideoBanner; 
            document.getElementById('en-desktop-video').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/2844x800-${promoCode.value}.mp4`
            document.getElementById('local-desktop-video').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/2844x800-${promoCode.value}.mp4`
            document.getElementById('en-mobile-video').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/1280x720-${promoCode.value}.mp4`
            document.getElementById('local-mobile-video').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/1280x720-${promoCode.value}.mp4`
            break;

        case 'RHB':
            desktopPreviewContainer.innerHTML = desktopBanner; 
            mobilePreviewContainer.innerHTML = mobileBanner;
            switch(region) {
                case 'CN':
                    document.getElementById('en-desktop-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/en-cn_2844x800-${promoCode.value}.webp`;
                    document.getElementById('local-desktop-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/zh-cn_2844x800-${promoCode.value}.webp`;
                    document.getElementById('en-mobile-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/en-cn_1280x720-${promoCode.value}.webp`;
                    document.getElementById('local-mobile-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/zh-cn_1280x720-${promoCode.value}.webp`;
                    break;
                case 'VN':
                    document.getElementById('en-desktop-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/en-gb_2844x800-${promoCode.value}.webp`;
                    document.getElementById('local-desktop-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/vi-vn_2844x800-${promoCode.value}.webp`;
                    document.getElementById('en-mobile-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/en-gb_1280x720-${promoCode.value}.webp`;
                    document.getElementById('local-mobile-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/vi-vn_1280x720-${promoCode.value}.webp`;
                    break;
                case 'TH':
                    document.getElementById('en-desktop-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/en-th_2844x800-${promoCode.value}.webp`;
                    document.getElementById('local-desktop-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/th-th_2844x800-${promoCode.value}.webp`;
                    document.getElementById('en-mobile-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/en-th_1280x720-${promoCode.value}.webp`;
                    document.getElementById('local-mobile-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/th-th_1280x720-${promoCode.value}.webp`;
                    break;
                case 'KR':
                    document.getElementById('en-desktop-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/en-kr_2844x800-${promoCode.value}.webp`;
                    document.getElementById('local-desktop-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/ko-kr_2844x800-${promoCode.value}.webp`;
                    document.getElementById('en-mobile-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/en-kr_1280x720-${promoCode.value}.webp`;
                    document.getElementById('local-mobile-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/ko-kr_1280x720-${promoCode.value}.webp`;
                    break;
                case 'ID':
                    document.getElementById('en-desktop-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/en-id_2844x800-${promoCode.value}.webp`;
                    document.getElementById('local-desktop-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/id-id_2844x800-${promoCode.value}.webp`;
                    document.getElementById('en-mobile-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/en-id_1280x720-${promoCode.value}.webp`;
                    document.getElementById('local-mobile-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/id-id_1280x720-${promoCode.value}.webp`;
                    break;
                case 'KH':
                    document.getElementById('en-desktop-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/en-gb_2844x800-${promoCode.value}.webp`;
                    document.getElementById('local-desktop-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/en-gb_2844x800-${promoCode.value}.webp`;
                    document.getElementById('en-mobile-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/en-gb_1280x720-${promoCode.value}.webp`;
                    document.getElementById('local-mobile-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/en-gb_1280x720-${promoCode.value}.webp`;
                    break;
                case 'JP':
                    document.getElementById('en-desktop-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/en-jp_2844x800-${promoCode.value}.webp`;
                    document.getElementById('local-desktop-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/ja-jp_2844x800-${promoCode.value}.webp`;
                    document.getElementById('en-mobile-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/en-jp_1280x720-${promoCode.value}.webp`;
                    document.getElementById('local-mobile-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/ja-jp_1280x720-${promoCode.value}.webp`;
                    break;
                case 'IN':
                    document.getElementById('en-desktop-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/en-gb_2844x800-${promoCode.value}.webp`;
                    document.getElementById('local-desktop-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/en-gb_2844x800-${promoCode.value}.webp`;
                    document.getElementById('en-mobile-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/en-gb_1280x720-${promoCode.value}.webp`;
                    document.getElementById('local-mobile-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/en-gb_1280x720-${promoCode.value}.webp`;
                    break;
            }
            break;

        case 'GL':
            desktopPreviewContainer.innerHTML = desktopBanner; 
            mobilePreviewContainer.innerHTML = mobileBanner;
            //Desktop Preview
            document.getElementById('en-desktop-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/2844x800-${promoCode.value}.webp`;
            document.getElementById('local-desktop-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/2844x800-${promoCode.value}.webp`;

            //Mobile Preview
            document.getElementById('en-mobile-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/1280x720-${promoCode.value}.webp`;
            document.getElementById('local-mobile-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/1280x720-${promoCode.value}.webp`;
            break;
        
        case 'MB1':
            desktopPreviewContainer.innerHTML = desktopMatchBanner; 
            mobilePreviewContainer.innerHTML = mobileMatchBanner;
            document.getElementById('odds-type-2').parentElement.classList.add('hidden');
            document.getElementById('match-code-2').classList.add('hidden');
            controlOdds(region);
            //Desktop Preview
            document.getElementById('en-desktop-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/2844x800-${promoCode.value}.webp`;
            document.getElementById('local-desktop-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/2844x800-${promoCode.value}.webp`;

            //Mobile Preview
            document.getElementById('en-mobile-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/1280x720-${promoCode.value}.webp`;
            document.getElementById('local-mobile-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/1280x720-${promoCode.value}.webp`;
            break;
        
        case 'MB2':
            desktopPreviewContainer.innerHTML = desktopMatchBanner; 
            mobilePreviewContainer.innerHTML = mobileMatchBanner;
            document.getElementById('odds-type-2').parentElement.classList.remove('hidden');
            document.getElementById('match-code-2').classList.add('hidden');
            controlOdds(region);
            //Desktop Preview
            document.getElementById('en-desktop-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/2844x800-${promoCode.value}.webp`;
            document.getElementById('local-desktop-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/2844x800-${promoCode.value}.webp`;

            //Mobile Preview
            document.getElementById('en-mobile-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/1280x720-${promoCode.value}.webp`;
            document.getElementById('local-mobile-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/1280x720-${promoCode.value}.webp`;
            break;

        case 'MB3':
            desktopPreviewContainer.innerHTML = desktopMatchBanner; 
            mobilePreviewContainer.innerHTML = mobileMatchBanner;
            document.getElementById('odds-type-2').parentElement.classList.remove('hidden');
            document.getElementById('match-code-2').classList.remove('hidden');
            controlOdds(region);
            //Desktop Preview
            document.getElementById('en-desktop-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/2844x800-${promoCode.value}.webp`;
            document.getElementById('local-desktop-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/2844x800-${promoCode.value}.webp`;

            //Mobile Preview
            document.getElementById('en-mobile-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/1280x720-${promoCode.value}.webp`;
            document.getElementById('local-mobile-img').src = `https://doc.188contents.com/taptap-content/images/banners/${bannerTypeList.value}/${folder_date}/${promoCode.value}/1280x720-${promoCode.value}.webp`;
            break;
    }

}

//Function that handles the advert name input
function controlAdvertName(sliceType, region) {

    promoCode.addEventListener('input', () => {
        advertName.value = `${sliceType}-${promoCode.value}-${region}`
    })

    advertName.value = `${sliceType}-${promoCode.value}-${region}`
}

//Function that controls the channel planner button
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

//Function that handles create advert button
function createAdvert() {
    window.open("https://cms.cubebo.blue/7001/advert/Create", "_blank")
}

//Function that determines what region is currently selected by the user. This returns a value to the 'selectedRegion' variable.
function findSelectedRegion() {
    Array.from(regionList).map(r => {
        if (r.classList.contains('outline')) {
            selectedRegion = r.id
        }
    });
}
findSelectedRegion(); //Function call to set the region to CN upon loading of page

//Function that controls CTA text dropdown
function controlCtaText(region) {
    switch(ctaTextList.value){
        case 'more-info':
            document.getElementById('en-desktop-button').innerHTML = buttonText.moreInfo[0];

            switch(region) {
                case 'CN': 
                    document.getElementById('local-desktop-button').innerHTML = buttonText.moreInfo[1];
                    break;
                case 'VN':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.moreInfo[2];
                    break;
                case 'TH':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.moreInfo[3];
                    break;
                case 'KR':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.moreInfo[4];
                    break;
                case 'ID':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.moreInfo[5];
                    break;
                case 'KH':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.moreInfo[6];
                    break;
                case 'JP':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.moreInfo[7];
                    break;
                case 'IN':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.moreInfo[8];
                    break;
            }
            break;

        case 'play-now':
            document.getElementById('en-desktop-button').innerHTML = buttonText.playNow[0];

            switch(region) {
                case 'CN': 
                    document.getElementById('local-desktop-button').innerHTML = buttonText.playNow[1];
                    break;
                case 'VN':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.playNow[2];
                    break;
                case 'TH':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.playNow[3];
                    break;
                case 'KR':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.playNow[4];
                    break;
                case 'ID':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.playNow[5];
                    break;
                case 'KH':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.playNow[6];
                    break;
                case 'JP':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.playNow[7];
                    break;
                case 'IN':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.playNow[8];
                    break;
            }
            break;

        case 'view-odds':
            document.getElementById('en-desktop-button').innerHTML = buttonText.viewOdds[0];

            switch(region) {
                case 'CN': 
                    document.getElementById('local-desktop-button').innerHTML = buttonText.viewOdds[1];
                    break;
                case 'VN':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.viewOdds[2];
                    break;
                case 'TH':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.viewOdds[3];
                    break;
                case 'KR':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.viewOdds[4];
                    break;
                case 'ID':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.viewOdds[5];
                    break;
                case 'KH':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.viewOdds[6];
                    break;
                case 'JP':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.viewOdds[7];
                    break;
                case 'IN':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.viewOdds[8];
                    break;
            }
            break;

        case 'bet-now':
            document.getElementById('en-desktop-button').innerHTML = buttonText.betNow[0];

            switch(region) {
                case 'CN': 
                    document.getElementById('local-desktop-button').innerHTML = buttonText.betNow[1];
                    break;
                case 'VN':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.betNow[2];
                    break;
                case 'TH':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.betNow[3];
                    break;
                case 'KR':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.betNow[4];
                    break;
                case 'ID':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.betNow[5];
                    break;
                case 'KH':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.betNow[6];
                    break;
                case 'JP':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.betNow[7];
                    break;
                case 'IN':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.betNow[8];
                    break;
            }
            break;

        case 'join-now':
            document.getElementById('en-desktop-button').innerHTML = buttonText.joinNow[0];

            switch(region) {
                case 'CN': 
                    document.getElementById('local-desktop-button').innerHTML = buttonText.joinNow[1];
                    break;
                case 'VN':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.joinNow[2];
                    break;
                case 'TH':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.joinNow[3];
                    break;
                case 'KR':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.joinNow[4];
                    break;
                case 'ID':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.joinNow[5];
                    break;
                case 'KH':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.joinNow[6];
                    break;
                case 'JP':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.joinNow[7];
                    break;
                case 'IN':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.joinNow[8];
                    break;
            }
            break;

        case 'try-now':
            document.getElementById('en-desktop-button').innerHTML = buttonText.tryNow[0];

            switch(region) {
                case 'CN': 
                    document.getElementById('local-desktop-button').innerHTML = buttonText.tryNow[1];
                    break;
                case 'VN':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.tryNow[2];
                    break;
                case 'TH':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.tryNow[3];
                    break;
                case 'KR':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.tryNow[4];
                    break;
                case 'ID':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.tryNow[5];
                    break;
                case 'KH':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.tryNow[6];
                    break;
                case 'JP':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.tryNow[7];
                    break;
                case 'IN':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.tryNow[8];
                    break;
            }
            break;

        case 'deposit-now':
            document.getElementById('en-desktop-button').innerHTML = buttonText.depositNow[0];

            switch(region) {
                case 'CN': 
                    document.getElementById('local-desktop-button').innerHTML = buttonText.depositNow[1];
                    break;
                case 'VN':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.depositNow[2];
                    break;
                case 'TH':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.depositNow[3];
                    break;
                case 'KR':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.depositNow[4];
                    break;
                case 'ID':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.depositNow[5];
                    break;
                case 'KH':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.depositNow[6];
                    break;
                case 'JP':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.depositNow[7];
                    break;
                case 'IN':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.depositNow[8];
                    break;
            }
            break;

        case 'watch-now':
            document.getElementById('en-desktop-button').innerHTML = buttonText.watchNow[0];

            switch(region) {
                case 'CN': 
                    document.getElementById('local-desktop-button').innerHTML = buttonText.watchNow[1];
                    break;
                case 'VN':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.watchNow[2];
                    break;
                case 'TH':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.watchNow[3];
                    break;
                case 'KR':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.watchNow[4];
                    break;
                case 'ID':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.watchNow[5];
                    break;
                case 'KH':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.watchNow[6];
                    break;
                case 'JP':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.watchNow[7];
                    break;
                case 'IN':
                    document.getElementById('local-desktop-button').innerHTML = buttonText.watchNow[8];
                    break;
            }
            break;
    }
}

function handleInputs(sliceType, region) {

    switch(region){
        case 'CN':
            //Title
            document.getElementById('en-desktop-title').innerHTML = encnTitle.value;
            document.getElementById('en-mobile-title').innerHTML = encnMobileTitle.value;
            document.getElementById('local-desktop-title').innerHTML = zhcnTitle.value;
            document.getElementById('local-mobile-title').innerHTML = zhcnMobileTitle.value;
            //Description
            document.getElementById('en-desktop-desc').innerHTML = encnDescription.value;
            document.getElementById('en-mobile-desc').innerHTML = encnMobileDescription.value;
            document.getElementById('local-desktop-desc').innerHTML = zhcnDescription.value;
            document.getElementById('local-mobile-desc').innerHTML = zhcnMobileDescription.value;
            //Link
            document.getElementById('en-desktop-button').href = cnLink.value;
            document.getElementById('local-desktop-button').href = cnLink.value;

            encnTitle.addEventListener('input', () => {
                document.getElementById('en-desktop-title').innerHTML = encnTitle.value;
                updateCode(sliceType);
            })
            encnMobileTitle.addEventListener('input', () => {
                document.getElementById('en-mobile-title').innerHTML = encnMobileTitle.value;
                updateCode(sliceType);
            })
            zhcnTitle.addEventListener('input', () => {
                document.getElementById('local-desktop-title').innerHTML = zhcnTitle.value;
                updateCode(sliceType);
            })
            zhcnMobileTitle.addEventListener('input', () => {
                document.getElementById('local-mobile-title').innerHTML = zhcnMobileTitle.value;
                updateCode(sliceType);
            })
            encnDescription.addEventListener('input', () => {
                document.getElementById('en-desktop-desc').innerHTML = encnDescription.value;
                updateCode(sliceType);
            })
            encnMobileDescription.addEventListener('input', () => {
                document.getElementById('en-mobile-desc').innerHTML = encnMobileDescription.value;
                updateCode(sliceType);
            })
            zhcnDescription.addEventListener('input', () => {
                document.getElementById('local-desktop-desc').innerHTML = zhcnDescription.value;
                updateCode(sliceType);
            })
            zhcnMobileDescription.addEventListener('input', () => {
                document.getElementById('local-mobile-desc').innerHTML = zhcnMobileDescription.value;
                updateCode(sliceType);
            })
            cnLink.addEventListener('input', () => {
                document.getElementById('en-desktop-button').href = cnLink.value;
                document.getElementById('local-desktop-button').href = cnLink.value;
                updateCode(sliceType);
            })
            break;

        case 'VN':
            //Title
            document.getElementById('en-desktop-title').innerHTML = envnTitle.value;
            document.getElementById('en-mobile-title').innerHTML = envnMobileTitle.value;
            document.getElementById('local-desktop-title').innerHTML = vivnTitle.value;
            document.getElementById('local-mobile-title').innerHTML = vivnMobileTitle.value;
            //Description
            document.getElementById('en-desktop-desc').innerHTML = envnDescription.value;
            document.getElementById('en-mobile-desc').innerHTML = envnMobileDescription.value;
            document.getElementById('local-desktop-desc').innerHTML = vivnDescription.value;
            document.getElementById('local-mobile-desc').innerHTML = vivnMobileDescription.value;
            //Link
            document.getElementById('en-desktop-button').href = vnLink.value;
            document.getElementById('local-desktop-button').href = vnLink.value;

            envnTitle.addEventListener('input', () => {
                document.getElementById('en-desktop-title').innerHTML = envnTitle.value;
                updateCode(sliceType);
            })
            envnMobileTitle.addEventListener('input', () => {
                document.getElementById('en-mobile-title').innerHTML = envnMobileTitle.value;
                updateCode(sliceType);
            })
            vivnTitle.addEventListener('input', () => {
                document.getElementById('local-desktop-title').innerHTML = vivnTitle.value;
                updateCode(sliceType);
            })
            vivnMobileTitle.addEventListener('input', () => {
                document.getElementById('local-mobile-title').innerHTML = vivnMobileTitle.value;
                updateCode(sliceType);
            })
            envnDescription.addEventListener('input', () => {
                document.getElementById('en-desktop-desc').innerHTML = envnDescription.value;
                updateCode(sliceType);
            })
            envnMobileDescription.addEventListener('input', () => {
                document.getElementById('en-mobile-desc').innerHTML = envnMobileDescription.value;
                updateCode(sliceType);
            })
            vivnDescription.addEventListener('input', () => {
                document.getElementById('local-desktop-desc').innerHTML = vivnDescription.value;
                updateCode(sliceType);
            })
            vivnMobileDescription.addEventListener('input', () => {
                document.getElementById('local-mobile-desc').innerHTML = vivnMobileDescription.value;
                updateCode(sliceType);
            })
            vnLink.addEventListener('input', () => {
                document.getElementById('en-desktop-button').href = vnLink.value;
                document.getElementById('local-desktop-button').href = vnLink.value;
                updateCode(sliceType);
            })
            break;

        case 'TH':
            //Title
            document.getElementById('en-desktop-title').innerHTML = enthTitle.value;
            document.getElementById('en-mobile-title').innerHTML = enthMobileTitle.value;
            document.getElementById('local-desktop-title').innerHTML = ththTitle.value;
            document.getElementById('local-mobile-title').innerHTML = ththMobileTitle.value;
            //Description
            document.getElementById('en-desktop-desc').innerHTML = enthDescription.value;
            document.getElementById('en-mobile-desc').innerHTML = enthMobileDescription.value;
            document.getElementById('local-desktop-desc').innerHTML = ththDescription.value;
            document.getElementById('local-mobile-desc').innerHTML = ththMobileDescription.value;
            //Link
            document.getElementById('en-desktop-button').href = thLink.value;
            document.getElementById('local-desktop-button').href = thLink.value;

            enthTitle.addEventListener('input', () => {
                document.getElementById('en-desktop-title').innerHTML = enthTitle.value;
                updateCode(sliceType);
            })
            enthMobileTitle.addEventListener('input', () => {
                document.getElementById('en-mobile-title').innerHTML = enthMobileTitle.value;
                updateCode(sliceType);
            })
            ththTitle.addEventListener('input', () => {
                document.getElementById('local-desktop-title').innerHTML = ththTitle.value;
                updateCode(sliceType);
            })
            ththMobileTitle.addEventListener('input', () => {
                document.getElementById('local-mobile-title').innerHTML = ththMobileTitle.value;
                updateCode(sliceType);
            })
            enthDescription.addEventListener('input', () => {
                document.getElementById('en-desktop-desc').innerHTML = enthDescription.value;
                updateCode(sliceType);
            })
            enthMobileDescription.addEventListener('input', () => {
                document.getElementById('en-mobile-desc').innerHTML = enthMobileDescription.value;
                updateCode(sliceType);
            })
            ththDescription.addEventListener('input', () => {
                document.getElementById('local-desktop-desc').innerHTML = ththDescription.value;
                updateCode(sliceType);
            })
            ththMobileDescription.addEventListener('input', () => {
                document.getElementById('local-mobile-desc').innerHTML = ththMobileDescription.value;
                updateCode(sliceType);
            })
            thLink.addEventListener('input', () => {
                document.getElementById('en-desktop-button').href = thLink.value;
                document.getElementById('local-desktop-button').href = thLink.value;
                updateCode(sliceType);
            })
            break;
        
        case 'KR':
            //Title
            document.getElementById('en-desktop-title').innerHTML = enkrTitle.value;
            document.getElementById('en-mobile-title').innerHTML = enkrMobileTitle.value;
            document.getElementById('local-desktop-title').innerHTML = kokrTitle.value;
            document.getElementById('local-mobile-title').innerHTML = kokrMobileTitle.value;
            //Description
            document.getElementById('en-desktop-desc').innerHTML = enkrDescription.value;
            document.getElementById('en-mobile-desc').innerHTML = enkrMobileDescription.value;
            document.getElementById('local-desktop-desc').innerHTML = kokrDescription.value;
            document.getElementById('local-mobile-desc').innerHTML = kokrMobileDescription.value;
            //Link
            document.getElementById('en-desktop-button').href = krLink.value;
            document.getElementById('local-desktop-button').href = krLink.value;

            enkrTitle.addEventListener('input', () => {
                document.getElementById('en-desktop-title').innerHTML = enkrTitle.value;
                updateCode(sliceType);
            })
            enkrMobileTitle.addEventListener('input', () => {
                document.getElementById('en-mobile-title').innerHTML = enkrMobileTitle.value;
                updateCode(sliceType);
            })
            kokrTitle.addEventListener('input', () => {
                document.getElementById('local-desktop-title').innerHTML = kokrTitle.value;
                updateCode(sliceType);
            })
            kokrMobileTitle.addEventListener('input', () => {
                document.getElementById('local-mobile-title').innerHTML = kokrMobileTitle.value;
                updateCode(sliceType);
            })
            enkrDescription.addEventListener('input', () => {
                document.getElementById('en-desktop-desc').innerHTML = enkrDescription.value;
                updateCode(sliceType);
            })
            enkrMobileDescription.addEventListener('input', () => {
                document.getElementById('en-mobile-desc').innerHTML = enkrMobileDescription.value;
                updateCode(sliceType);
            })
            kokrDescription.addEventListener('input', () => {
                document.getElementById('local-desktop-desc').innerHTML = kokrDescription.value;
                updateCode(sliceType);
            })
            kokrMobileDescription.addEventListener('input', () => {
                document.getElementById('local-mobile-desc').innerHTML = kokrMobileDescription.value;
                updateCode(sliceType);
            })
            krLink.addEventListener('input', () => {
                document.getElementById('en-desktop-button').href = krLink.value;
                document.getElementById('local-desktop-button').href = krLink.value;
                updateCode(sliceType);
            })
            break;

        case 'ID':
            //Title
            document.getElementById('en-desktop-title').innerHTML = enidTitle.value;
            document.getElementById('en-mobile-title').innerHTML = enidMobileTitle.value;
            document.getElementById('local-desktop-title').innerHTML = ididTitle.value;
            document.getElementById('local-mobile-title').innerHTML = ididMobileTitle.value;
            //Description
            document.getElementById('en-desktop-desc').innerHTML = enidDescription.value;
            document.getElementById('en-mobile-desc').innerHTML = enidMobileDescription.value;
            document.getElementById('local-desktop-desc').innerHTML = ididDescription.value;
            document.getElementById('local-mobile-desc').innerHTML = ididMobileDescription.value;
            //Link
            document.getElementById('en-desktop-button').href = idLink.value;
            document.getElementById('local-desktop-button').href = idLink.value;

            enidTitle.addEventListener('input', () => {
                document.getElementById('en-desktop-title').innerHTML = enidTitle.value;
                updateCode(sliceType);
            })
            enidMobileTitle.addEventListener('input', () => {
                document.getElementById('en-mobile-title').innerHTML = enidMobileTitle.value;
                updateCode(sliceType);
            })
            ididTitle.addEventListener('input', () => {
                document.getElementById('local-desktop-title').innerHTML = ididTitle.value;
                updateCode(sliceType);
            })
            ididMobileTitle.addEventListener('input', () => {
                document.getElementById('local-mobile-title').innerHTML = ididMobileTitle.value;
                updateCode(sliceType);
            })
            enidDescription.addEventListener('input', () => {
                document.getElementById('en-desktop-desc').innerHTML = enidDescription.value;
                updateCode(sliceType);
            })
            enidMobileDescription.addEventListener('input', () => {
                document.getElementById('en-mobile-desc').innerHTML = enidMobileDescription.value;
                updateCode(sliceType);
            })
            ididDescription.addEventListener('input', () => {
                document.getElementById('local-desktop-desc').innerHTML = ididDescription.value;
                updateCode(sliceType);
            })
            ididMobileDescription.addEventListener('input', () => {
                document.getElementById('local-mobile-desc').innerHTML = ididMobileDescription.value;
                updateCode(sliceType);
            })
            idLink.addEventListener('input', () => {
                document.getElementById('en-desktop-button').href = idLink.value;
                document.getElementById('local-desktop-button').href = idLink.value;
                updateCode(sliceType);
            })
            break;

        case 'KH':
            //Title
            document.getElementById('en-desktop-title').innerHTML = enkhTitle.value;
            document.getElementById('en-mobile-title').innerHTML = enkhMobileTitle.value;
            document.getElementById('local-desktop-title').innerHTML = kmkhTitle.value;
            document.getElementById('local-mobile-title').innerHTML = kmkhMobileTitle.value;
            //Description
            document.getElementById('en-desktop-desc').innerHTML = enkhDescription.value;
            document.getElementById('en-mobile-desc').innerHTML = enkhMobileDescription.value;
            document.getElementById('local-desktop-desc').innerHTML = kmkhDescription.value;
            document.getElementById('local-mobile-desc').innerHTML = kmkhMobileDescription.value;
            //Link
            document.getElementById('en-desktop-button').href = khLink.value;
            document.getElementById('local-desktop-button').href = khLink.value;

            enkhTitle.addEventListener('input', () => {
                document.getElementById('en-desktop-title').innerHTML = enkhTitle.value;
                updateCode(sliceType);
            })
            enkhMobileTitle.addEventListener('input', () => {
                document.getElementById('en-mobile-title').innerHTML = enkhMobileTitle.value;
                updateCode(sliceType);
            })
            kmkhTitle.addEventListener('input', () => {
                document.getElementById('local-desktop-title').innerHTML = kmkhTitle.value;
                updateCode(sliceType);
            })
            kmkhMobileTitle.addEventListener('input', () => {
                document.getElementById('local-mobile-title').innerHTML = kmkhMobileTitle.value;
                updateCode(sliceType);
            })
            enkhDescription.addEventListener('input', () => {
                document.getElementById('en-desktop-desc').innerHTML = enkhDescription.value;
                updateCode(sliceType);
            })
            enkhMobileDescription.addEventListener('input', () => {
                document.getElementById('en-mobile-desc').innerHTML = enkhMobileDescription.value;
                updateCode(sliceType);
            })
            kmkhDescription.addEventListener('input', () => {
                document.getElementById('local-desktop-desc').innerHTML = kmkhDescription.value;
                updateCode(sliceType);
            })
            kmkhMobileDescription.addEventListener('input', () => {
                document.getElementById('local-mobile-desc').innerHTML = kmkhMobileDescription.value;
                updateCode(sliceType);
            })
            khLink.addEventListener('input', () => {
                document.getElementById('en-desktop-button').href = khLink.value;
                document.getElementById('local-desktop-button').href = khLink.value;
                updateCode(sliceType);
            })
            break;

        case 'JP':
            //Title
            document.getElementById('en-desktop-title').innerHTML = enjpTitle.value;
            document.getElementById('en-mobile-title').innerHTML = enjpMobileTitle.value;
            document.getElementById('local-desktop-title').innerHTML = jajpTitle.value;
            document.getElementById('local-mobile-title').innerHTML = jajpMobileTitle.value;
            //Description
            document.getElementById('en-desktop-desc').innerHTML = enjpDescription.value;
            document.getElementById('en-mobile-desc').innerHTML = enjpMobileDescription.value;
            document.getElementById('local-desktop-desc').innerHTML = jajpDescription.value;
            document.getElementById('local-mobile-desc').innerHTML = jajpMobileDescription.value;
            //Link
            document.getElementById('en-desktop-button').href = jpLink.value;
            document.getElementById('local-desktop-button').href = jpLink.value;

            enjpTitle.addEventListener('input', () => {
                document.getElementById('en-desktop-title').innerHTML = enjpTitle.value;
                updateCode(sliceType);
            })
            enjpMobileTitle.addEventListener('input', () => {
                document.getElementById('en-mobile-title').innerHTML = enjpMobileTitle.value;
                updateCode(sliceType);
            })
            jajpTitle.addEventListener('input', () => {
                document.getElementById('local-desktop-title').innerHTML = jajpTitle.value;
                updateCode(sliceType);
            })
            jajpMobileTitle.addEventListener('input', () => {
                document.getElementById('local-mobile-title').innerHTML = jajpMobileTitle.value;
                updateCode(sliceType);
            })
            enjpDescription.addEventListener('input', () => {
                document.getElementById('en-desktop-desc').innerHTML = enjpDescription.value;
                updateCode(sliceType);
            })
            enjpMobileDescription.addEventListener('input', () => {
                document.getElementById('en-mobile-desc').innerHTML = enjpMobileDescription.value;
                updateCode(sliceType);
            })
            jajpDescription.addEventListener('input', () => {
                document.getElementById('local-desktop-desc').innerHTML = jajpDescription.value;
                updateCode(sliceType);
            })
            jajpMobileDescription.addEventListener('input', () => {
                document.getElementById('local-mobile-desc').innerHTML = jajpMobileDescription.value;
                updateCode(sliceType);
            })
            jpLink.addEventListener('input', () => {
                document.getElementById('en-desktop-button').href = jpLink.value;
                document.getElementById('local-desktop-button').href = jpLink.value;
                updateCode(sliceType);
            })
            break;

        case 'IN':
            //Title
            document.getElementById('en-desktop-title').innerHTML = eninTitle.value;
            document.getElementById('en-mobile-title').innerHTML = eninMobileTitle.value;
            document.getElementById('local-desktop-title').innerHTML = hiinTitle.value;
            document.getElementById('local-mobile-title').innerHTML = hiinMobileTitle.value;
            //Description
            document.getElementById('en-desktop-desc').innerHTML = eninDescription.value;
            document.getElementById('en-mobile-desc').innerHTML = eninMobileDescription.value;
            document.getElementById('local-desktop-desc').innerHTML = hiinDescription.value;
            document.getElementById('local-mobile-desc').innerHTML = hiinMobileDescription.value;
            //Link
            document.getElementById('en-desktop-button').href = inLink.value;
            document.getElementById('local-desktop-button').href = inLink.value;

            eninTitle.addEventListener('input', () => {
                document.getElementById('en-desktop-title').innerHTML = eninTitle.value;
                updateCode(sliceType);
            })
            eninMobileTitle.addEventListener('input', () => {
                document.getElementById('en-mobile-title').innerHTML = eninMobileTitle.value;
                updateCode(sliceType);
            })
            hiinTitle.addEventListener('input', () => {
                document.getElementById('local-desktop-title').innerHTML = hiinTitle.value;
                updateCode(sliceType);
            })
            hiinMobileTitle.addEventListener('input', () => {
                document.getElementById('local-mobile-title').innerHTML = hiinMobileTitle.value;
                updateCode(sliceType);
            })
            eninDescription.addEventListener('input', () => {
                document.getElementById('en-desktop-desc').innerHTML = eninDescription.value;
                updateCode(sliceType);
            })
            eninMobileDescription.addEventListener('input', () => {
                document.getElementById('en-mobile-desc').innerHTML = eninMobileDescription.value;
                updateCode(sliceType);
            })
            hiinDescription.addEventListener('input', () => {
                document.getElementById('local-desktop-desc').innerHTML = hiinDescription.value;
                updateCode(sliceType);
            })
            hiinMobileDescription.addEventListener('input', () => {
                document.getElementById('local-mobile-desc').innerHTML = hiinMobileDescription.value;
                updateCode(sliceType);
            })
            inLink.addEventListener('input', () => {
                document.getElementById('en-desktop-button').href = inLink.value;
                document.getElementById('local-desktop-button').href = inLink.value;
                updateCode(sliceType);
            })
            break;
    }
    gameCode.addEventListener('input', () => {
        updateCode(sliceType);
    })

    sportType.addEventListener('change', () => {
        updateCode(sliceType);
    })
    oddsType1.addEventListener('change', () => {
        updateCode(sliceType);
    })
    oddsType2.addEventListener('change', () => {
        updateCode(sliceType);
    })
    team1Shirt.addEventListener('input', () => {
        updateCode(sliceType);
    })
    team2Shirt.addEventListener('input', () => {
        updateCode(sliceType);
    })
    competitionCode.addEventListener('input', () => {
        updateCode(sliceType);
    })
    matchCode1.addEventListener('input', () => {
        updateCode(sliceType);
    })
    matchCode2.addEventListener('input', () => {
        updateCode(sliceType);
    })

}
// handleInputs(selectedRegion)

function controlTnc(region){

    switch(region) {
        case 'CN': 
            document.getElementById('en-desktop-tnc').innerHTML = localizedTNCs.EN
            document.getElementById('en-mobile-tnc').innerHTML = localizedTNCs.EN
            document.getElementById('local-desktop-tnc').innerHTML = localizedTNCs.CN
            document.getElementById('local-mobile-tnc').innerHTML = localizedTNCs.CN
            break;
        case 'VN':
            document.getElementById('en-desktop-tnc').innerHTML = localizedTNCs.EN
            document.getElementById('en-mobile-tnc').innerHTML = localizedTNCs.EN
            document.getElementById('local-desktop-tnc').innerHTML = localizedTNCs.VN
            document.getElementById('local-mobile-tnc').innerHTML = localizedTNCs.VN
            break;
        case 'TH':
            document.getElementById('en-desktop-tnc').innerHTML = localizedTNCs.EN
            document.getElementById('en-mobile-tnc').innerHTML = localizedTNCs.EN
            document.getElementById('local-desktop-tnc').innerHTML = localizedTNCs.TH
            document.getElementById('local-mobile-tnc').innerHTML = localizedTNCs.TH
            break;
        case 'KR':
            document.getElementById('en-desktop-tnc').innerHTML = localizedTNCs.EN
            document.getElementById('en-mobile-tnc').innerHTML = localizedTNCs.EN
            document.getElementById('local-desktop-tnc').innerHTML = localizedTNCs.KR
            document.getElementById('local-mobile-tnc').innerHTML = localizedTNCs.KR
            break;
        case 'ID':
            document.getElementById('en-desktop-tnc').innerHTML = localizedTNCs.EN
            document.getElementById('en-mobile-tnc').innerHTML = localizedTNCs.EN
            document.getElementById('local-desktop-tnc').innerHTML = localizedTNCs.ID
            document.getElementById('local-mobile-tnc').innerHTML = localizedTNCs.ID
            break;
        case 'KH':
            document.getElementById('en-desktop-tnc').innerHTML = localizedTNCs.EN
            document.getElementById('en-mobile-tnc').innerHTML = localizedTNCs.EN
            document.getElementById('local-desktop-tnc').innerHTML = localizedTNCs.KH
            document.getElementById('local-mobile-tnc').innerHTML = localizedTNCs.KH
            break;
        case 'JP':
            document.getElementById('en-desktop-tnc').innerHTML = localizedTNCs.EN
            document.getElementById('en-mobile-tnc').innerHTML = localizedTNCs.EN
            document.getElementById('local-desktop-tnc').innerHTML = localizedTNCs.JP
            document.getElementById('local-mobile-tnc').innerHTML = localizedTNCs.JP
            break;
        case 'IN':
            document.getElementById('en-desktop-tnc').innerHTML = localizedTNCs.EN
            document.getElementById('en-mobile-tnc').innerHTML = localizedTNCs.EN
            document.getElementById('local-desktop-tnc').innerHTML = localizedTNCs.IN
            document.getElementById('local-mobile-tnc').innerHTML = localizedTNCs.IN
            break;
    }

    if(bannerTypeList.value == 'generic') {
        document.getElementById('en-desktop-tnc').classList.add('hidden');
        document.getElementById('local-desktop-tnc').classList.add('hidden');
        document.getElementById('en-mobile-tnc').classList.add('hidden');
        document.getElementById('local-mobile-tnc').classList.add('hidden');
    } else if (bannerTypeList.value == 'promotion') {
        document.getElementById('en-desktop-tnc').classList.remove('hidden');
        document.getElementById('local-desktop-tnc').classList.remove('hidden');
        document.getElementById('en-mobile-tnc').classList.remove('hidden');
        document.getElementById('local-mobile-tnc').classList.remove('hidden');
    }
}

function controlOdds(region){
    switch(region) {
        case 'CN': 
            document.getElementById('en-desktop-odds').innerHTML = localizedOdds.EN
            document.getElementById('en-mobile-odds').innerHTML = localizedOdds.EN
            document.getElementById('local-desktop-odds').innerHTML = localizedOdds.CN
            document.getElementById('local-mobile-odds').innerHTML = localizedOdds.CN
            break;
        case 'VN':
            document.getElementById('en-desktop-odds').innerHTML = localizedOdds.EN
            document.getElementById('en-mobile-odds').innerHTML = localizedOdds.EN
            document.getElementById('local-desktop-odds').innerHTML = localizedOdds.VN
            document.getElementById('local-mobile-odds').innerHTML = localizedOdds.VN
            break;
        case 'TH':
            document.getElementById('en-desktop-odds').innerHTML = localizedOdds.EN
            document.getElementById('en-mobile-odds').innerHTML = localizedOdds.EN
            document.getElementById('local-desktop-odds').innerHTML = localizedOdds.TH
            document.getElementById('local-mobile-odds').innerHTML = localizedOdds.TH
            break;
        case 'KR':
            document.getElementById('en-desktop-odds').innerHTML = localizedOdds.EN
            document.getElementById('en-mobile-odds').innerHTML = localizedOdds.EN
            document.getElementById('local-desktop-odds').innerHTML = localizedOdds.KR
            document.getElementById('local-mobile-odds').innerHTML = localizedOdds.KR
            break;
        case 'ID':
            document.getElementById('en-desktop-odds').innerHTML = localizedOdds.EN
            document.getElementById('en-mobile-odds').innerHTML = localizedOdds.EN
            document.getElementById('local-desktop-odds').innerHTML = localizedOdds.ID
            document.getElementById('local-mobile-odds').innerHTML = localizedOdds.ID
            break;
        case 'KH':
            document.getElementById('en-desktop-odds').innerHTML = localizedOdds.EN
            document.getElementById('en-mobile-odds').innerHTML = localizedOdds.EN
            document.getElementById('local-desktop-odds').innerHTML = localizedOdds.KH
            document.getElementById('local-mobile-odds').innerHTML = localizedOdds.KH
            break;
        case 'JP':
            document.getElementById('en-desktop-odds').innerHTML = localizedOdds.EN
            document.getElementById('en-mobile-odds').innerHTML = localizedOdds.EN
            document.getElementById('local-desktop-odds').innerHTML = localizedOdds.JP
            document.getElementById('local-mobile-odds').innerHTML = localizedOdds.JP
            break;
        case 'IN':
            document.getElementById('en-desktop-odds').innerHTML = localizedOdds.EN
            document.getElementById('en-mobile-odds').innerHTML = localizedOdds.EN
            document.getElementById('local-desktop-odds').innerHTML = localizedOdds.IN
            document.getElementById('local-mobile-odds').innerHTML = localizedOdds.IN
            break;
    }
}