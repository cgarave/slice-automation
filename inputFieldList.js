const gameCodeInput = `<input id="game-code-input" type="text" placeholder="Game Code" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black hidden" autocomplete="off">`
const matchBannerInput = `<div id="mb-input-container" class="flex flex-col gap-y-2 hidden">
                            <div class="flex flex-row gap-x-2">
                                <div class="bg-neutral-900 text-white font-semibold rounded-[4px] px-2 text-xs border border-neutral-500">
                                    <select id="sport-type" class="bg-neutral-900 border-none outline-none w-30 h-full hover:cursor-pointer">
                                        <option value="#">Select Sport</option>
                                        <option value="football">Football</option>
                                        <option value="basketball">Basketball</option>
                                        <option value="tennis">Tennis</option>
                                        <option value="badminton">Badminton</option>
                                    </select>
                                </div>
                                <div class="bg-neutral-900 text-white font-semibold rounded-[4px] px-2 text-xs border border-neutral-500">
                                    <select id="odds-type-1" class="bg-neutral-900 border-none outline-none w-30 h-full hover:cursor-pointer">
                                        <option value="#">Select Odds 1</option>
                                        <option value="ou">Over/Under</option>
                                        <option value="1x2">1x2</option>
                                        <option value="handicap">Handicap</option>
                                    </select>
                                </div>
                                <div class="bg-neutral-900 text-white font-semibold rounded-[4px] px-2 text-xs border border-neutral-500">
                                    <select id="odds-type-2" class="bg-neutral-900 border-none outline-none w-30 h-full hover:cursor-pointer">
                                        <option value="#">Select Odds 2</option>
                                        <option value="ou">Over/Under</option>
                                        <option value="1x2">1x2</option>
                                        <option value="handicap">Handicap</option>
                                    </select>
                                </div>
                                <div class="h-full w-full text-xs font-medium">
                                    <label for="team-1-shirt">Team 1 Shirt Color</label>
                                    <input id="team-1-shirt" type="color" class="w-full">
                                </div>
                                <div class="h-full w-full text-xs font-medium">
                                    <label for="team-2-shirt">Team 2 Shirt Color</label>
                                    <input id="team-2-shirt" type="color" class="w-full">
                                </div>
                            </div>
                            <div class="flex flex-row gap-x-2">
                                <input id="competition-code" type="text" placeholder="Competition Code" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                                <input id="match-code-1" type="text" placeholder="Match Code 1" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                                <input id="match-code-2" type="text" placeholder="Match Code 2" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                            </div>
                        </div>`

const regionInputFieldList = {
    'CN': ` <div id="CN-container" class="general flex flex-col gap-y-2 hidden">
                <div class="flex flex-col gap-y-2">
                    <div class="flex flex-row gap-x-2">
                        <input id="encn-title-input" type="text" placeholder="Desktop Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="zhcn-title-input" type="text" placeholder="Desktop Localized Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <textarea id="encn-desc-input" placeholder="Desktop Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                        <textarea id="zhcn-desc-input" placeholder="Desktop Localized Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <input id="encn-mobile-title-input" type="text" placeholder="Mobile Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="zhcn-mobile-title-input" type="text" placeholder="Mobile Localized Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <textarea id="encn-mobile-desc-input" placeholder="Mobile Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                        <textarea id="zhcn-mobile-desc-input" placeholder="Mobile Localized Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                    </div>
                    <input id="cn-link-input" type="text" placeholder="CTA Link" class="cta rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                </div>
                <div class="tl flex flex-row gap-x-2">
                    <input id="cn-link-1-input" type="text" placeholder="Link 1" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    <input id="cn-link-2-input" type="text" placeholder="Link 2" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                </div>
            </div>`,

    'VN': ` <div id="VN-container" class="general flex flex-col gap-y-2 hidden">
                <div class="flex flex-col gap-y-2">
                    <div class="flex flex-row gap-x-2">
                        <input id="envn-title-input" type="text" placeholder="Desktop Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="vivn-title-input" type="text" placeholder="Desktop Localized Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <textarea id="envn-desc-input" placeholder="Desktop Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                        <textarea id="vivn-desc-input" placeholder="Desktop Localized Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <input id="envn-mobile-title-input" type="text" placeholder="Mobile Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="vivn-mobile-title-input" type="text" placeholder="Mobile Localized Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <textarea id="envn-mobile-desc-input" placeholder="Mobile Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                        <textarea id="vivn-mobile-desc-input" placeholder="Mobile Localized Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                    </div>
                    <input id="vn-link-input" type="text" placeholder="CTA Link" class="cta rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                </div>
                <div class="tl flex flex-row gap-x-2">
                    <input id="vn-link-1-input" type="text" placeholder="Link 1" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    <input id="vn-link-2-input" type="text" placeholder="Link 2" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                </div>
            </div>`,

    'TH': ` <div id="TH-container" class="general flex flex-col gap-y-2 hidden">
                <div class="flex flex-col gap-y-2">
                    <div class="flex flex-row gap-x-2">
                        <input id="enth-title-input" type="text" placeholder="Desktop Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="thth-title-input" type="text" placeholder="Desktop Localized Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <textarea id="enth-desc-input" placeholder="Desktop Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                        <textarea id="thth-desc-input" placeholder="Desktop Localized Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <input id="enth-mobile-title-input" type="text" placeholder="Mobile Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="thth-mobile-title-input" type="text" placeholder="Mobile Localized Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <textarea id="enth-mobile-desc-input" placeholder="Mobile Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                        <textarea id="thth-mobile-desc-input" placeholder="Mobile Localized Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                    </div>
                    <input id="th-link-input" type="text" placeholder="CTA Link" class="cta rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                </div>
                <div class="tl flex flex-row gap-x-2">
                    <input id="th-link-1-input" type="text" placeholder="Link 1" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    <input id="th-link-2-input" type="text" placeholder="Link 2" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                </div>
            </div>`,

    'KR': ` <div id="KR-container" class="general flex flex-col gap-y-2 hidden">
                <div class="flex flex-col gap-y-2">
                    <div class="flex flex-row gap-x-2">
                        <input id="enkr-title-input" type="text" placeholder="Desktop Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="kokr-title-input" type="text" placeholder="Desktop Localized Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <textarea id="enkr-desc-input" placeholder="Desktop Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                        <textarea id="kokr-desc-input" placeholder="Desktop Localized Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <input id="enkr-mobile-title-input" type="text" placeholder="Mobile Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="kokr-mobile-title-input" type="text" placeholder="Mobile Localized Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <textarea id="enkr-mobile-desc-input" placeholder="Mobile Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                        <textarea id="kokr-mobile-desc-input" placeholder="Mobile Localized Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                    </div>
                    <input id="kr-link-input" type="text" placeholder="CTA Link" class="cta rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                </div>
                <div class="tl flex flex-row gap-x-2">
                    <input id="kr-link-1-input" type="text" placeholder="Link 1" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    <input id="kr-link-2-input" type="text" placeholder="Link 2" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                </div>
            </div>`,

    'ID': ` <div id="ID-container" class="general flex flex-col gap-y-2 hidden">
                <div class="flex flex-col gap-y-2">
                    <div class="flex flex-row gap-x-2">
                        <input id="enid-title-input" type="text" placeholder="Desktop Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="idid-title-input" type="text" placeholder="Desktop Localized Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <textarea id="enid-desc-input" placeholder="Desktop Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                        <textarea id="idid-desc-input" placeholder="Desktop Localized Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <input id="enid-mobile-title-input" type="text" placeholder="Mobile Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="idid-mobile-title-input" type="text" placeholder="Mobile Localized Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <textarea id="enid-mobile-desc-input" placeholder="Mobile Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                        <textarea id="idid-mobile-desc-input" placeholder="Mobile Localized Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                    </div>
                    <input id="id-link-input" type="text" placeholder="CTA Link" class="cta rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                </div>
                <div class="tl flex flex-row gap-x-2">
                    <input id="id-link-1-input" type="text" placeholder="Link 1" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    <input id="id-link-2-input" type="text" placeholder="Link 2" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                </div>
            </div>`,

    'KH': ` <div id="KH-container" class="general flex flex-col gap-y-2 hidden">
                <div class="flex flex-col gap-y-2">
                    <div class="flex flex-row gap-x-2">
                        <input id="enkh-title-input" type="text" placeholder="Desktop Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="kmkh-title-input" type="text" placeholder="Desktop Localized Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <textarea id="enkh-desc-input" placeholder="Desktop Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                        <textarea id="kmkh-desc-input" placeholder="Desktop Localized Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <input id="enkh-mobile-title-input" type="text" placeholder="Mobile Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="kmkh-mobile-title-input" type="text" placeholder="Mobile Localized Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <textarea id="enkh-mobile-desc-input" placeholder="Mobile Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                        <textarea id="kmkh-mobile-desc-input" placeholder="Mobile Localized Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                    </div>
                    <input id="kh-link-input" type="text" placeholder="CTA Link" class="cta rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                </div>
                <div class="tl flex flex-row gap-x-2">
                    <input id="kh-link-1-input" type="text" placeholder="Link 1" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    <input id="kh-link-2-input" type="text" placeholder="Link 2" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                </div>
            </div>`,

    'JP': ` <div id="JP-container" class="general flex flex-col gap-y-2 hidden">
                <div class="flex flex-col gap-y-2">
                    <div class="flex flex-row gap-x-2">
                        <input id="enjp-title-input" type="text" placeholder="Desktop Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="jajp-title-input" type="text" placeholder="Desktop Localized Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <textarea id="enjp-desc-input" placeholder="Desktop Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                        <textarea id="jajp-desc-input" placeholder="Desktop Localized Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <input id="enjp-mobile-title-input" type="text" placeholder="Mobile Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="jajp-mobile-title-input" type="text" placeholder="Mobile Localized Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <textarea id="enjp-mobile-desc-input" placeholder="Mobile Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                        <textarea id="jajp-mobile-desc-input" placeholder="Mobile Localized Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                    </div>
                    <input id="jp-link-input" type="text" placeholder="CTA Link" class="cta rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                </div>
                <div class="tl flex flex-row gap-x-2">
                    <input id="jp-link-1-input" type="text" placeholder="Link 1" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    <input id="jp-link-2-input" type="text" placeholder="Link 2" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                </div>
            </div>`,

    'IN': ` <div id="IN-container" class="general flex flex-col gap-y-2 hidden">
                <div class="flex flex-col gap-y-2">
                    <div class="flex flex-row gap-x-2">
                        <input id="enin-title-input" type="text" placeholder="Desktop Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="hiin-title-input" type="text" placeholder="Desktop Localized Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <textarea id="enin-desc-input" placeholder="Desktop Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                        <textarea id="hiin-desc-input" placeholder="Desktop Localized Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <input id="enin-mobile-title-input" type="text" placeholder="Mobile Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="hiin-mobile-title-input" type="text" placeholder="Mobile Localized Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <textarea id="enin-mobile-desc-input" placeholder="Mobile Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                        <textarea id="hiin-mobile-desc-input" placeholder="Mobile Localized Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                    </div>
                    <input id="in-link-input" type="text" placeholder="CTA Link" class="cta rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                </div>
                <div class="tl flex flex-row gap-x-2">
                    <input id="in-link-1-input" type="text" placeholder="Link 1" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    <input id="in-link-2-input" type="text" placeholder="Link 2" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                </div>
            </div>`,
}

const localizedOdds = {
    EN: 'The odds may vary from time to time',
    CN: '赔率实时变动',
    VN: 'Tỉ lệ cược có thể thay đổi theo thời gian.',
    TH: 'อัตราการต่อรองเปลี่ยนแปลงได้ตลอดเวลา',
    KR: '배당률은 경기 상황에 따라 수시로 변동될수 있습니다',
    ID: 'Odds dapat berubah sewaktu-waktu',
    KH: 'ហាងឆេងអាចប្រែប្រួលតាមពេលវេលាជាក់ស្តែង',
    JP: 'オッズは変動することがありますので、ご注意ください。',
    IN: 'समय-समय पर ऑड्स भिन्न हो सकती हैं।',
}

const localizedTNCs = {
    EN: 'Terms &amp; Conditions apply',
    CN: '规则与条款适用。',
    VN: 'Điều Khoản và Điều Kiện áp dụng',
    TH: 'ข้อกำหนดและ เงื่อนไขบังคับใช้',
    KR: '이용약관이 적용됩니다',
    ID: 'Syarat dan Kondisi berlaku.',
    KH: 'លក្ខន្តិកៈត្រូវបានអនុវត្ត',
    JP: '利用規約が適用されます。',
    IN: 'नियम और शर्तें',
}

const buttonText = {
    //[Eng, CN, VN, TH, KR, ID, KH, JP, IN]
    moreInfo: ['MORE INFO', '优惠详情', 'CHI TIẾT', 'อ่านเพิ่มเติม', '더 보기', 'INFO LENGKAP', 'ព័ត៌មានបន្ថែម', '詳細', 'अधिक जानकारी'],
    playNow: ['PLAY NOW', '立即游戏', 'CHƠI NGAY', 'เล่นเลย', '지금 플레이', 'MAIN SEKARANG', 'លេងឥឡូវនេះ', '今すぐプレー', 'अभी खेलें'],
    viewOdds: ['VIEW ODDS', '查看赔率', 'XEM CƯỢC', 'ดูราคาที่นี่', '배당 보기', 'LIHAT ODDS', 'មើលហាងឆេង', 'オッズを見る', 'संभावनाएँ देखें'],
    betNow: ['BET NOW', '立即投注', 'CƯỢC NGAY', 'ดูราคาที่นี่', '지금 베팅하기', 'TARUHAN SEKARANG', 'ភ្នាល់ឥឡូវនេះ', '今すぐベット', 'अभी बेट करो'],
    joinNow: ['JOIN NOW', '立即加入', 'THAM GIA NGAY', 'เข้าร่วมตอนนี้', '지금 참여', 'KLAIM SEKARANG', 'ចូលរួមឥឡូវនេះ', '今すぐ申請', 'शामिल हों'],
    tryNow: ['TRY NOW', '立即投注', 'THỬ NGAY', 'ลองเลย', '지금 플레이 해보세요', 'COBA SEKARANG', 'សាកល្បងឥឡូវនេះ', '今すぐやってみて下さい', 'अभी ट्राई करे'],
    depositNow: ['DEPOSIT NOW', '立即存款', 'GỬI TIỀN NGAY', 'ฝากเงินตอนนี้', '지금 입금하세요', 'DEPOSIT SEKARANG', 'ដាក់ប្រាក់ឥឡូវនេះ', '今すぐ入金', 'अभी डिपाजिट करें'],
    watchNow: ['WATCH NOW', '观看视频', 'VN WATCH NOW', 'ดูวิดีโอ', '비디오 보기', 'LIHAT VIDEO', 'មើលវីដេអូ', '動画を見る', 'वीडियो देखें'],
}