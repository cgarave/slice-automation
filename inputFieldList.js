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
                        <input id="encn-title-input" type="text" placeholder="Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="zhcn-title-input" type="text" placeholder="ZH Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <textarea id="encn-desc-input" placeholder="Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                        <textarea id="zhcn-desc-input" placeholder="ZH Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                    </div>
                    <div class="cta flex flex-row gap-x-2">
                        <input id="cn-link-input" type="text" placeholder="CTA Link" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="cn-alt-link-input" type="text" placeholder="CTA Alternative Link" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                </div>
                <div class="tl flex flex-row gap-x-2">
                    <input id="cn-link-1-input" type="text" placeholder="Link 1" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    <input id="cn-link-2-input" type="text" placeholder="Link 2" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                </div>
            </div>`,

    'VN': ` <div id="VN-container" class="general flex flex-col gap-y-2 hidden">
                <div class="flex flex-col gap-y-2">
                    <div class="flex flex-row gap-x-2">
                        <input id="envn-title-input" type="text" placeholder="Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="vivn-title-input" type="text" placeholder="VN Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <textarea id="envn-desc-input" placeholder="Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                        <textarea id="vivn-desc-input" placeholder="VN Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                    </div>
                    <div class="cta flex flex-row gap-x-2">
                        <input id="vn-link-input" type="text" placeholder="CTA Link" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="vn-alt-link-input" type="text" placeholder="CTA Alternative Link" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                </div>
                <div class="tl flex flex-row gap-x-2">
                    <input id="vn-link-1-input" type="text" placeholder="Link 1" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    <input id="vn-link-2-input" type="text" placeholder="Link 2" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                </div>
            </div>`,

    'TH': ` <div id="TH-container" class="general flex flex-col gap-y-2 hidden">
                <div class="flex flex-col gap-y-2">
                    <div class="flex flex-row gap-x-2">
                        <input id="enth-title-input" type="text" placeholder="Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="thth-title-input" type="text" placeholder="TH Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <textarea id="enth-desc-input" placeholder="Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                        <textarea id="thth-desc-input" placeholder="TH Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                    </div>
                    <div class="cta flex flex-row gap-x-2">
                        <input id="th-link-input" type="text" placeholder="CTA Link" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="th-alt-link-input" type="text" placeholder="CTA Alternative Link" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                </div>
                <div class="tl flex flex-row gap-x-2">
                    <input id="th-link-1-input" type="text" placeholder="Link 1" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    <input id="th-link-2-input" type="text" placeholder="Link 2" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                </div>
            </div>`,

    'KR': ` <div id="KR-container" class="general flex flex-col gap-y-2 hidden">
                <div class="flex flex-col gap-y-2">
                    <div class="flex flex-row gap-x-2">
                        <input id="enkr-title-input" type="text" placeholder="Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="kokr-title-input" type="text" placeholder="KR Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <textarea id="enkr-desc-input" placeholder="Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                        <textarea id="kokr-desc-input" placeholder="KR Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                    </div>
                    <div class="cta flex flex-row gap-x-2">
                        <input id="kr-link-input" type="text" placeholder="CTA Link" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="kr-alt-link-input" type="text" placeholder="CTA Alternative Link" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                </div>
                <div class="tl flex flex-row gap-x-2">
                    <input id="kr-link-1-input" type="text" placeholder="Link 1" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    <input id="kr-link-2-input" type="text" placeholder="Link 2" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                </div>
            </div>`,

    'ID': ` <div id="ID-container" class="general flex flex-col gap-y-2 hidden">
                <div class="flex flex-col gap-y-2">
                    <div class="flex flex-row gap-x-2">
                        <input id="enid-title-input" type="text" placeholder="Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="idid-title-input" type="text" placeholder="ID Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <textarea id="enid-desc-input" placeholder="Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                        <textarea id="idid-desc-input" placeholder="ID Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                    </div>
                    <div class="cta flex flex-row gap-x-2">
                        <input id="id-link-input" type="text" placeholder="CTA Link" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="id-alt-link-input" type="text" placeholder="CTA Alternative Link" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                </div>
                <div class="tl flex flex-row gap-x-2">
                    <input id="id-link-1-input" type="text" placeholder="Link 1" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    <input id="id-link-2-input" type="text" placeholder="Link 2" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                </div>
            </div>`,

    'KH': ` <div id="KH-container" class="general flex flex-col gap-y-2 hidden">
                <div class="flex flex-col gap-y-2">
                    <div class="flex flex-row gap-x-2">
                        <input id="enkh-title-input" type="text" placeholder="Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="kmkh-title-input" type="text" placeholder="KH Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <textarea id="enkh-desc-input" placeholder="Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                        <textarea id="kmkh-desc-input" placeholder="KH Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                    </div>
                    <div class="cta flex flex-row gap-x-2">
                        <input id="kh-link-input" type="text" placeholder="CTA Link" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="kh-alt-link-input" type="text" placeholder="CTA Alternative Link" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                </div>
                <div class="tl flex flex-row gap-x-2">
                    <input id="kh-link-1-input" type="text" placeholder="Link 1" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    <input id="kh-link-2-input" type="text" placeholder="Link 2" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                </div>
            </div>`,

    'JP': ` <div id="JP-container" class="general flex flex-col gap-y-2 hidden">
                <div class="flex flex-col gap-y-2">
                    <div class="flex flex-row gap-x-2">
                        <input id="enjp-title-input" type="text" placeholder="Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="jajp-title-input" type="text" placeholder="JP Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <textarea id="enjp-desc-input" placeholder="Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                        <textarea id="jajp-desc-input" placeholder="JP Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                    </div>
                    <div class="cta flex flex-row gap-x-2">
                        <input id="jp-link-input" type="text" placeholder="CTA Link" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="jp-alt-link-input" type="text" placeholder="CTA Alternative Link" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                </div>
                <div class="tl flex flex-row gap-x-2">
                    <input id="jp-link-1-input" type="text" placeholder="Link 1" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    <input id="jp-link-2-input" type="text" placeholder="Link 2" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                </div>
            </div>`,

    'IN': ` <div id="IN-container" class="general flex flex-col gap-y-2 hidden">
                <div class="flex flex-col gap-y-2">
                    <div class="flex flex-row gap-x-2">
                        <input id="enin-title-input" type="text" placeholder="Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="hiin-title-input" type="text" placeholder="IN Title" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
                    <div class="flex flex-row gap-x-2">
                        <textarea id="enin-desc-input" placeholder="Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                        <textarea id="hiin-desc-input" placeholder="IN Description" class="rounded-[4px] p-2 h-20 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black resize-none" autocomplete="off"></textarea>
                    </div>
                    <div class="cta flex flex-row gap-x-2">
                        <input id="in-link-input" type="text" placeholder="CTA Link" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                        <input id="in-alt-link-input" type="text" placeholder="CTA Alternative Link" class="rounded-[4px] p-2 h-10 w-full outline-none font-medium text-xs bg-white placeholder:text-gray-500 text-black" autocomplete="off">
                    </div>
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
    IN: '',
}