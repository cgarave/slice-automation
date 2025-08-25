/*
TWO GAME TWO MARKET ODDS >>>>>>>>>>>>>>>>>>>>>>>>>>
<swiper-slide>
        <SMediaBanner
          :img-url="breakpoints.smAndUp 
                        ? 'https://doc.188contents.com/star4-content/images/banners/generic/2025-04-Apr/UCLSEMIFINAL1-0425/2844x800-UCLSEMIFINAL1-0425.webp' 
                        : 'https://doc.188contents.com/star4-content/images/banners/generic/2025-04-Apr/UCLSEMIFINAL1-0425/1280x720-UCLSEMIFINAL1-0425.webp'"
          title-tag="h1"
          :data-track-content="breakpoints.smAndDown ? true : undefined"
          :data-content-name="breakpoints.smAndDown ? 'TV-UCLSEMIFINALS1-0425 - (PD-BNR)' : undefined"
          :data-content-piece="breakpoints.smAndDown ? 'TV-UCLSEMIFINALS1-0425 - BNR ODDS - (PD-BNR)' : undefined"
:style="breakpoints.smAndUp ? 'height: 25rem;' : 'height: 16rem;'"
media-card
bg-opacity="0"
        >
    <template #default>
  <TwoGameMarketOdds
        sports="Football"
        :data="[{matchId:9404819},{matchId:9404808}]"
        class="mx-auto h-full"
        :style="{paddingTop:breakpoints.smAndDown?'10px':'86px',maxWidth:'360px'}"
        competition-id="27166"
        :market-lines="['1x2','handicap']"
        orientation="centered"
        :teams-color="[{'home':'#ff0000','away':'#ffffff'},{'home':'#0f2e73','away':'#ffffff'}]"
      >
</TwoGameMarketOdds>
    </template>
<template #title>
        <div class="hidden"></div>
        <div class="hidden"></div>
        </template>
        
        <template #subtitle>
        <div class="hidden"></div>
        <div class="hidden"></div>
        </template>         
<template #tnc>The odds may vary from time to time.</template>
</SMediaBanner>
</swiper-slide>

ONE GAME TWO MARKET ODDS MATCH BANNER >>>>>>>>>>>>>>>>>>>>>>>>>>
<swiper-slide>
        <SMediaBanner
          :img-url="breakpoints.smAndUp 
                        ? 'https://doc.188contents.com/taptap-content/images/banners/generic/2025-08-Aug/L1SEASONOPENER-0825/2844x800-L1SEASONOPENER-0825.webp?' 
                        : 'https://doc.188contents.com/taptap-content/images/banners/generic/2025-08-Aug/L1SEASONOPENER-0825/1280x720-L1SEASONOPENER-0825.webp?'"
          title-tag="h1"
          :data-track-content="breakpoints.smAndDown ? true : undefined"
          :data-content-name="breakpoints.smAndDown ? 'TV-L1SEASONOPENER-0825 - (PD-BNR)' : undefined"
          :data-content-piece="breakpoints.smAndDown ? 'TV-L1SEASONOPENER-0825 - BNR ODDS - (PD-BNR)' : undefined"
:style="breakpoints.smAndUp ? 'height: 25rem;' : 'height: 16rem;'" media-card bg-opacity="0"
        >
 <template #default>
<SingleGameTwoMarketOdds
  sports="Football"
  :data="[{'matchId':9657183}]"
  class="mx-auto h-full"
  :style="{paddingTop:breakpoints.smAndDown?'24px':'86px',maxWidth:'360px'}"
  competition-id="28649"
  :market-lines="['handicap','ou']"
  team-color-home="#eaff00"
  team-color-away="#326bed">
</SingleGameTwoMarketOdds>
  </template>
<template #title>
        <div class="hidden"></div>
        <div class="hidden"></div>
        </template>
        
        <template #subtitle>
        <div class="hidden"></div>
        <div class="hidden"></div>
        </template>    
<template #tnc>The odds may vary from time to time</template>
</SMediaBanner>
</swiper-slide>

SINGLE GAME SINGLE MARKET ODDS >>>>>>>>>>>>>>>>>>>>>>>>>>
<SingleGameSingleMarketOdds
  sports="Football"
  :data="[{'matchId':156612}]"
  competition-id="26726"
  :market-lines="['correctScore']"
  orientation="vertical"
  team-color-home="#2B00FF"
  team-color-away="#BACB1A"
/>

VIDEO BANNER >>>>>>>>>>>>>>>>>>>>>>>>>>
<swiper-slide>
  <SMediaBanner title-tag="h1" @click="openGame()" :link="`/${gv.lan}/live/evolution`">
    <template #default>
      <div class="bg-center bg-no-repeat">
        <video loop :autoplay="true" muted webkit-playsinline playsinline :src="breakpoints.smAndUp? 
		'https://doc.188contents.com/taptap-content/images/banners/generic/2025-08-Aug/EVOICEFISHING-0825/2844x800-EVOICEFISHING-0825.mp4' 
		:'https://doc.188contents.com/taptap-content/images/banners/generic/2025-08-Aug/EVOICEFISHING-0825/1280x720-EVOICEFISHING-0825.mp4'"
		class="absolute object-cover object-center w-full h-full">
        </video>
      </div>
    </template>
    <template #title>
        <div class="hidden md:block">Ice Fishing</div>
        <div class="md:hidden">Ice Fishing</div>
        </template>
        
        <template #subtitle>
        <div class="hidden md:block">Fish Fast. Win Faster. Reel In Riches Up to 5,000x!</div>
        <div class="md:hidden">Fish Fast. Win Faster. Reel In Riches Up to 5,000x!</div>
        </template>
    <template #actions> <a class="max-w-full s-button false overflow-hidden relative inline-flex items-center justify-center gap-1 outline-none text-button transition-all duration-300 rounded before:absolute before:bg-current before:color-[inherit] before:inset-0 before:opacity-0 before:pointer-events-none before:rounded-[inherit] hover:before:md:opacity-[.04] focus:before:opacity-[.12] active:before:opacity-[.12] hover:md:shadow-8 h-9 px-4 min-w-16 bg-primary--darken-5 text-light--high hover:text-light--high shadow-2 flex-[0_0_auto]" color="primary--darken-5" :href="`/${gv.lan}/live/evolution`">PLAY NOW</a> </template> 
  </SMediaBanner>
</swiper-slide>

OVERLAY IMAGE BANNER >>>>>>>>>>>>>>>>>>>>>>>>>>
<SwiperSlide>
  <SSplashBanner
    class="h-full apd-splash-gradient-dark" content-position="bottom"
      :img-url="breakpoints.smAndUp 
      ? 'https://doc.188contents.com/star4-content/images/banners/promotion/2025-06-Jun/FFWCFREEBET-0625/en-kh_1800x1800-FFWCFREEBET-0625.webp' 
      : 'https://doc.188contents.com/star4-content/images/banners/promotion/2025-06-Jun/FFWCFREEBET-0625/en-kh_1800x1800-FFWCFREEBET-0625-mobile.webp'"
    >

    <template #title>
      <div class="text-h5 font-bold line-clamp-4">Get a Sports Free Bet with Your Deposit!</div>
    </template>
    <template #subtitle>
      <div class="text-body-1 mb-6">Join now and make a deposit to receive a daily Sports Free Bet of up to USD 9.</div>
    </template>

    <template #actions>
      <SButton color="primary--darken-5" :href="`/${gv.lan}/promotions#khdailybonus`">JOIN NOW</SButton>
    </template>
<template #tnc>Terms &amp; Conditions apply</template>
  </SSplashBanner>
</SwiperSlide>

OVERLAY VIDEO BANNER >>>>>>>>>>>>>>>>>>>>>>>>>>
<SwiperSlide>
  <SSplashBanner
          class="h-full"
content-position="bottom"
          img-url="https://doc.188contents.com/taptap-content/images/banners/generic/2025-08-Aug/INTROTAPTAP-0825/en-vn_1800x1800-INTROTAPTAP-0825.webp"
data-track-content data-content-name="OB–INTROTAPTAP-0825 - (MK-BNR)" data-content-piece="OB–INTROTAPTAP-0825 - CTA VID - (MK-BNR)"
        >

    <template #title>
      <div class="text-light--high text-h4 font-bold line-clamp-4"><br><br></div>
    </template>
    
    <template #actions>
      <div>
<VideoPlayer class="mt-2" video-url="https://www.youtube.com/watch?v=Fyxqg08W2Mo&feature=youtu.be">
    <SButton color="primary--darken-5" class="mb-2"> WATCH NOW </SButton>
</VideoPlayer>

 <!--a class="max-w-full s-button false overflow-hidden relative inline-flex items-center justify-center gap-1 outline-none text-button transition-all duration-300 rounded before:absolute before:bg-current before:color-[inherit] before:inset-0 before:opacity-0 before:pointer-events-none before:rounded-[inherit] hover:before:md:opacity-[.04] focus:before:opacity-[.12] active:before:opacity-[.12] hover:md:shadow-8 h-9 px-4 min-w-16 bg-primary--darken-5 text-light--high hover:text-light--high shadow-2 flex-[0_0_auto]"
color="primary--darken-5" :href="`https://www.youtube.com/watch?v=Fyxqg08W2Mo`">Watch now</a-->

 </div>
    </template>
  </SSplashBanner>
</SwiperSlide>

SUBSCREEN BANNER KOREA >>>>>>>>>>>>>>>>>>>>>>>>>>
<SMediaBanner
      :img-url="
          breakpoints.smAndUp
            ? `https://doc.188contents.com/star4-content/images/banners/promotion/2025-05-May/KRREDPCSN-0525/1600x800-KRREDPCSN-0525.webp`
            : `https://doc.188contents.com/star4-content/images/banners/promotion/2025-05-May/KRREDPCSN-0525/1600x800-KRREDPCSN-0525.webp`
        "

      :style="breakpoints.smAndUp ? 'height: 25rem;' : 'height: 16rem;'"
      hide-content
    >
 <div class="absolute w-full max-w-full s-responsive-content z-[1] bottom-0">
      <div class="flex flex-wrap flex-auto s-media-banner-content">
        <div class="flex-grow w-full max-w-full basis-0 ">
          <div class="flex p-8 pt-16 pb-4 bg-gradient-to-t from-black/95 via-black/80 to-black/0 justify-center">
            <div class="text-center">

              <h2 class="s-media-banner--title line-clamp-2 not-only:mb-[.125rem] text-light--high text-h6">
                Get up to KRW 50,000  Re-Deposit Bonus for Casino, Live Casino everyday!
              </h2>
<div>

    <SButton :href="`/${gv.lan}/promotions`" 
        class="max-w-full s-button false overflow-hidden relative inline-flex items-center justify-center gap-1 outline-none text-button transition-all duration-300 rounded before:absolute before:bg-current before:color-[inherit] before:inset-0 before:opacity-0 before:pointer-events-none before:rounded-[inherit] hover:before:md:opacity-[.04] focus:before:opacity-[.12] active:before:opacity-[.12] hover:md:shadow-8 h-9 px-4 min-w-16 bg-primary--darken-5 text-light--high hover:text-light--high shadow-2 flex-[0_0_auto] " color="primary--darken-5"
       
data-track-content data-content-name="MD–KRREDPCSN-0525 - (-BNR)" data-content-piece="MD–KRREDPCSN-0525 - CTA TNC - (-BNR)"
>MORE INFO</SButton>
<div class="text-light--medium text-[0.625rem]"> Terms &amp; Conditions apply. </div>
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </SMediaBanner>

SUBSCREEN BANNER CAMBODIA >>>>>>>>>>>>>>>>>>>>>>>>>>
<SMediaBanner
      :img-url="breakpoints.smAndUp 
                        ? 'https://doc.188contents.com/star4-content/images/banners/promotion/2025-07-Jul/KHLUCKYDRAW-0725/1600x800-KHLUCKYDRAW-0725-2.webp' 
                        : 'https://doc.188contents.com/star4-content/images/banners/promotion/2025-07-Jul/KHLUCKYDRAW-0725/1600x800-KHLUCKYDRAW-0725-2.webp'"
          :link="`/${gv.lan}/promotions/cambodia/sppt20253006002`"
      class="apd-h-[25rem]"
:style="breakpoints.smAndUp ? 'height: 25rem;' : 'height: 16rem;'"
      hide-content
    >
  <div class="absolute w-full max-w-full s-responsive-content z-[1] bottom-0">
    <div class="flex flex-wrap flex-auto s-media-banner-content">
      <div class="flex-grow w-full max-w-full basis-0 ">
        <div class="flex p-8 pt-16 pb-4 bg-gradient-to-t from-black/95 via-black/80 to-black/0 justify-center">
          <div class="text-center">
            
            <h2 class="s-media-banner--title line-clamp-2 not-only:mb-[.125rem] text-light--high text-h6">We Are Rebranding! Join Us for Exclusive Prize Giveaway!</h2>
            <SButton :href="`/${gv.lan}/promotions/cambodia/sppt20253006002`" color="primary--darken-5" class="mb-2">MORE INFO</SButton>
            <div class="text-light--medium text-[0.625rem]"> Terms & Conditions apply. </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</SMediaBanner>

CLICKABLE IMAGE >>>>>>>>>>>>>>>>>>>>>>>>>>
<swiper-slide>
      <SMediaBanner
          :img-url="breakpoints.smAndUp 
                        ? 'https://doc.188contents.com/star4-content/images/banners/generic/2025-06-Jun/AFCQUALIFIERS-IDVSCN-0625/en-cn_2844x800-AFCQUALIFIERS-IDVSCN-0625.webp' 
                        : 'https://doc.188contents.com/star4-content/images/banners/generic/2025-06-Jun/AFCQUALIFIERS-IDVSCN-0625/en-cn_1280x720-AFCQUALIFIERS-IDVSCN-0625.webp'"
          :link="`/${gv.lan}/sports/all-market/9534969/Indonesia-vs-China?`" 

          title-tag="h1"
          :data-track-content="breakpoints.smAndDown ? true : undefined"
          :data-content-name="breakpoints.smAndDown ? 'TV-AFCQUALIFIERS-IDVSCN-0625 - (PD-BNR)' : undefined"
          :data-content-piece="breakpoints.smAndDown ? 'TV-AFCQUALIFIERS-IDVSCN-0625 - BNR ODDS - (PD-BNR)' : undefined"
          media-card bg-opacity="0">

<div class="md:flex m-auto justify-between w-full h-full">
    <a :href="`/${gv.lan}/sports/all-market/9534969/Indonesia-vs-China?`" class="flex" style="height: 100%; width: 100%;"></a>
</div>
        <template #title>
        <div class="hidden"></div>
        <div class="hidden"></div>
        </template>
        
        <template #subtitle>
        <div class="hidden"></div>
        <div class="hidden"></div>
        </template> 
        <template #tnc>The odds may vary from time to time.</template>       
        </SMediaBanner>
      </swiper-slide>

TWO BUTTONS EURO >>>>>>>>>>>>>>>>>>>>>>>>>>
<swiper-slide>
  <SMediaBanner
      :img-url="
           breakpoints.mdAndUp
            ? 'https://doc.188contents.com/star4-content/images/banners/generic/2024-06-Jun/EUROROUND16-1-0624/2844x800-EUROROUND16-1-0624.webp?v=10'
            : 'https://doc.188contents.com/star4-content/images/banners/generic/2024-06-Jun/EUROROUND16-1-0624/1024x512-EUROROUND16-1-GREY-0624.webp?v=5'
        "
      title-tag="h1"

:data-track-content="breakpoints.smAndDown ? true : undefined"
    :data-content-name="breakpoints.smAndDown ? 'TV-EUROROUND16-1-0624 - (PD-BNR)' : undefined"
    :data-content-piece="breakpoints.smAndDown ? 'TV-EUROROUND16-1-0624 - BNR ODDS Match 2 - (PD-BNR)' : undefined"

:link="`/${gv.lan}/sports/all-market/8366425/Germany-vs-Denmark?`"
      >
<div class="md:flex m-auto justify-between w-full mt-16 hidden" style="max-width:820px;">
<a :href="`/${gv.lan}/`" class="flex" 
style="height: 200px; width: 318px;
background: url('https://doc.188contents.com/star4-content/images/banners/generic/2024-06-Jun/EUROROUND16-1-0624/matches/en-cn_match1-team1.webp?v=1') center left no-repeat;
background-size: contain; filter: grayscale(1); pointer-events: none;
"
data-track-content data-content-name="TV-EUROROUND16-1-0624 - (PD-BNR)" data-content-piece="TV-EUROROUND16-1-0624 - CTA ODDS Match 1 - (PD-BNR)"
>&nbsp;
</a>
<a :href="`/${gv.lan}/sports/all-market/8366425/Germany-vs-Denmark?`" class="flex" 
style="height: 200px; width: 318px;
background: url('https://doc.188contents.com/star4-content/images/banners/generic/2024-06-Jun/EUROROUND16-1-0624/matches/en-cn_match1-team2.webp?v=3') center left no-repeat;
background-size: contain;
"
data-track-content data-content-name="TV-EUROROUND16-1-0624 - (PD-BNR)" data-content-piece="TV-EUROROUND16-1-0624 - CTA ODDS Match 2 - (PD-BNR)"
>&nbsp;
</a>
</div>
   <template #title>
     <div class="hidden md:block">EURO 2024 - Round of 16. July 03, 2024</div>
<div class="md:hidden">EURO 2024 - Round of 16</div>
    </template>
    <template #subtitle>
      <div class="hidden md:block">Checkout the hottest odds now!</div>
      <div class="md:hidden">July 03,2024</div>
    </template>
  </SMediaBanner>

</swiper-slide>

TWO LINKS JOVS >>>>>>>>>>>>>>>>>>>>>>>>>>
<swiper-slide>

        <SMediaBanner
          :img-url="breakpoints.smAndUp 
                        ? 'https://doc.188contents.com/star4-content/images/banners/promotion/2025-07-Jul/FTDPID2-0725/2844x800-FTDPID2-0725.webp' 
                        : 'https://doc.188contents.com/star4-content/images/banners/promotion/2025-07-Jul/FTDPID2-0725/1280x720-FTDPID2-0725.webp'"
          title-tag="h1"
          :data-track-content="breakpoints.smAndDown ? true : undefined"
          :data-content-name="breakpoints.smAndDown ? 'TV-FTDPID2-0725 - (MK-BNR)' : undefined"
          :data-content-piece="breakpoints.smAndDown ? 'TV-FTDPID2-0725 - BNR TNC - (MK-BNR)' : undefined"
          
        >
<!--Desktop Start-->
        <div class="md:flex m-auto justify-between w-full mt-10 hidden md:block" style="max-width:820px;">
        <a :href="`/${gv.lan}/promotions/indonesia/depositpertama-50-taptap-indonesia`" class="flex" 
        style="height: 230px; width: 420px;"

        data-track-content data-content-name="TV-EUROROUND16-1-0624 - (PD-BNR)" data-content-piece="TV-EUROROUND16-1-0624 - CTA ODDS Match 1 - (PD-BNR)"
        >&nbsp;
        </a>

        <a :href="`/${gv.lan}/promotions/indonesia/depositpertama-taptap-200-indonesia`" class="flex" 
        style="height: 230px; width: 420px;"
        data-track-content data-content-name="TV-EUROROUND16-1-0624 - (PD-BNR)" data-content-piece="TV-EUROROUND16-1-0624 - CTA ODDS Match 2 - (PD-BNR)"
        >&nbsp;
        </a>
        </div>
<!--Desktop End-->
<!--Mobbile Start-->
       <div class="flex flex-row m-auto justify-between h-full w-full md:hidden" style="max-width:820px;">
        <a :href="`/${gv.lan}/promotions/indonesia/depositpertama-50-taptap-indonesia`"  
        style="height: 100%; width: 50%; "

        data-track-content data-content-name="TV-EUROROUND16-1-0624 - (PD-BNR)" data-content-piece="TV-EUROROUND16-1-0624 - CTA ODDS Match 1 - (PD-BNR)"
        >&nbsp;
        </a>

        <a :href="`/${gv.lan}/promotions/indonesia/depositpertama-taptap-200-indonesia`"
        style="height: 100%; width: 50%;"
        data-track-content data-content-name="TV-EUROROUND16-1-0624 - (PD-BNR)" data-content-piece="TV-EUROROUND16-1-0624 - CTA ODDS Match 2 - (PD-BNR)"
        >&nbsp;
        </a>
       </div>
<!--Mobbile end-->
        <template #title>Your Choice of First-Time Deposit Bonus!</template>
        <template #subtitle>Pick your First-Time Deposit Bonus: 50% or 200%! Don’t miss out.</template>
        <template #tnc>Terms &amp; Conditions apply</template>
        
        </SMediaBanner>
      </swiper-slide>

*/