import LandingHeader from '../components/landing-page/landing-header';
import LandingFooter from '../components/landing-page/landing-footer';
import pdfImg1 from '../assets/pdf-image.png';
import pdfImg2 from '../assets/pdf-main-img.png';

const Pdf2Page = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#f6f4f0]">
            <LandingHeader />

            <main className="flex-1 py-10 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">

                    {/* Letter Card */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#e8ddd4]">

                        {/* Header Bar */}
                        <div className="bg-[linear-gradient(104.84deg,#C58E6D_0%,#8C5A3C_100%)] px-8 py-4 flex items-center justify-between">
                            <span className="text-white text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase opacity-80">OFFICIAL</span>
                        </div>

                        <div className="px-8 py-10 sm:py-14">

                            {/* Sender + Recipient Header */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 pb-8 border-b border-[#e8ddd4]">
                                {/* Left — HMRC */}
                                <div>
                                    <div className="flex items-center gap-4 mb-4 w-[30%]">
                                        <img src={pdfImg1} alt="PDF image" className="w-full h-full object-cover" />
                                    </div>
                                    <p className="text-[#595959] text-sm font-medium mb-1">Indv and Small Business Compliance</p>
                                    <p className="text-[#595959] text-sm">HM Revenue and Customs</p>
                                    <p className="text-[#595959] text-sm">BX9 1LE</p>
                                </div>

                                {/* Right — Contact Details */}
                                <div className="text-sm space-y-2 sm:text-right">
                                    <div>
                                        <span className="font-semibold text-[#1E1E1E]">FAO:</span>
                                        <span className="text-[#595959] ml-1">Ross Foster</span>
                                    </div>
                                    <p className="text-[#595959]">Foster Whisky Management Ltd</p>
                                    <p className="text-[#595959]">10 Murray Lane, MONTROSE, DD10 8LF</p>
                                    <div className="pt-2 space-y-1">
                                        <p><span className="font-semibold text-[#1E1E1E]">Phone:</span> <span className="text-[#595959]">0300 056 8044</span></p>
                                        <p><span className="font-semibold text-[#1E1E1E]">Email:</span> <a href="mailto:thomas.clark1203@hmrc.gov.uk" className="text-[#8C5A3C] hover:underline">thomas.clark1203@hmrc.gov.uk</a></p>
                                        <p><span className="font-semibold text-[#1E1E1E]">Web:</span> <a href="https://www.gov.uk" target="_blank" rel="noreferrer" className="text-[#8C5A3C] hover:underline">www.gov.uk</a></p>
                                    </div>
                                </div>
                            </div>

                            {/* Reference Block */}
                            <div className="bg-[#FDE8D5] rounded-xl p-6 sm:p-8 mb-10">
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                                    <div>
                                        <p className="text-[#9CA3AF] text-xs tracking-[0.1em] uppercase mb-1">Date</p>
                                        <p className="text-[#1E1E1E] font-semibold">19 December 2024</p>
                                    </div>
                                    <div>
                                        <p className="text-[#9CA3AF] text-xs tracking-[0.1em] uppercase mb-1">Our Ref</p>
                                        <p className="text-[#1E1E1E] font-semibold">449 4229 70</p>
                                    </div>
                                    <div>
                                        <p className="text-[#9CA3AF] text-xs tracking-[0.1em] uppercase mb-1">Your Ref</p>
                                        <p className="text-[#1E1E1E] font-semibold">EPT6409 &amp; 6410</p>
                                    </div>
                                    <div>
                                        <p className="text-[#9CA3AF] text-xs tracking-[0.1em] uppercase mb-1">Case Ref</p>
                                        <p className="text-[#1E1E1E] font-semibold">CFS-2360676</p>
                                    </div>
                                </div>
                            </div>

                            {/* Salutation + Subject */}
                            <div className="mb-8">
                                <p className="text-[#1E1E1E] font-semibold text-base mb-4">Dear Mr Foster</p>
                                <h2 className="text-[#1E1E1E] font-black text-lg sm:text-xl tracking-[0.05em] mb-1">
                                    General Storage and Distribution Warehouse
                                </h2>
                                <p className="text-[#8C5A3C] font-bold text-base tracking-[0.05em]">
                                    Approval Number: GB00004315367
                                </p>
                            </div>

                            {/* Main Body */}
                            <div className="space-y-5 text-sm text-[#595959] leading-relaxed mb-10">
                                <p>
                                    The Commissioners for His Majesty's Revenue and Customs, under section 92 of the Customs and Excise Management Act 1979, have approved as a General Storage and Distribution Warehouse, the premises at:
                                </p>

                                {/* Premises Address */}
                                <div className="border-l-4 border-[#C58E6D] pl-6 py-2 my-4">
                                    <p className="text-[#1E1E1E] font-semibold">Commieston Farm</p>
                                    <p className="text-[#1E1E1E] font-semibold">Montrose</p>
                                    <p className="text-[#1E1E1E] font-semibold">DD10 0AG</p>
                                </div>

                                <p>The approved place of security is outlined on the attached plan dated 17 December 2024 and shown at Annexe A.</p>
                                <p>The approval is effective from <strong className="text-[#1E1E1E]">19 December 2024</strong>.</p>
                                <p>This approval is subject to revocation or variation.</p>
                                <p>This approval enables you to warehouse the following goods without payment of excise duty:</p>

                                <ul className="list-disc list-inside pl-2 space-y-1 font-medium text-[#1E1E1E]">
                                    <li>Spirituous Beverages</li>
                                    <li>Ethyl Alcohol</li>
                                </ul>

                                <p>The approved hours of operation of the warehouse are <strong className="text-[#1E1E1E]">24 hours</strong>.</p>
                                <p>
                                    If you wish us to amend or vary the terms of your warehouse approval you must contact the Excise Processing Teams, HMRC in writing on form EX68: Excise Warehouse Application requesting an amendment to your approval and certificate of registration. The address is Excise Processing Teams, HM Revenue and Customs, BX9 1GL. If you write to us but do not use this address then we may not get your post.
                                </p>
                                <p>Any additional conditions of approval are shown at Annex B.</p>
                                <p>This approval supersedes any previous approval of the premises as a warehouse.</p>
                                <p className="font-semibold text-[#1E1E1E]">
                                    Failure to comply with a condition of approval could result in revocation of the approval and action being taken under civil or criminal law.
                                </p>
                            </div>

                            {/* Review Section */}
                            <div className="bg-[#FDE8D5] rounded-xl p-6 sm:p-8 mb-8">
                                <h3 className="text-[#1E1E1E] font-black text-base sm:text-lg tracking-[0.1em] uppercase mb-4">What to do if you disagree</h3>
                                <div className="space-y-4 text-sm text-[#595959] leading-relaxed">
                                    <p>I'm now offering you a review of my decision. You can either:</p>
                                    <ul className="list-disc list-inside pl-2 space-y-1 text-[#1E1E1E] font-medium">
                                        <li>accept my offer of a review</li>
                                        <li>appeal to an independent tribunal</li>
                                    </ul>
                                    <p>If you want to do either of these, you must do so within <strong className="text-[#1E1E1E]">30 days</strong> of the date of this letter. If you appeal to a tribunal, you cannot accept my offer of a review.</p>
                                    <p>Most disputes can be resolved by a review, without the need to appeal to a tribunal. You may find that a review is quicker and costs you less than appealing to a tribunal.</p>
                                    <p>We'll not take any action to collect any amount you do not agree with during a review. But we will charge interest on any amount the review or tribunal says is due.</p>
                                </div>
                            </div>

                            {/* If you accept review */}
                            <div className="mb-8 space-y-4 text-sm text-[#595959] leading-relaxed">
                                <h4 className="text-[#1E1E1E] font-bold text-base">If you accept my offer of a review</h4>
                                <p>
                                    An impartial officer who works for HMRC's Solicitor's Office and Legal Services (SOLS) team and who specialises in review work will take a fresh look at my decision. They are known as 'review officers'.
                                </p>
                                <p>
                                    The review officer will write to let you know the outcome of their review within <strong className="text-[#1E1E1E]">45 days</strong>, unless they agree a longer period with you. If they agree with my decision, they'll uphold it and explain why. If they do not agree, they'll either cancel or vary my decision and explain why.
                                </p>
                                <p>
                                    If you disagree with the outcome of the review, you can still appeal to the tribunal. You must do this within 30 days of the date of the letter telling you the outcome of the review.
                                </p>
                                <p>
                                    If you accept the offer of a review, then you cannot appeal to a tribunal until the review officer tells you the outcome of their review. For further information about reviews, go to <a href="https://www.gov.uk" className="text-[#8C5A3C] hover:underline">www.gov.uk</a> and search 'disagree with a tax decision', or call the number at the top of this letter.
                                </p>
                            </div>

                            {/* How to accept offer */}
                            <div className="mb-8 space-y-4 text-sm text-[#595959] leading-relaxed">
                                <h4 className="text-[#1E1E1E] font-bold text-base">How to accept my offer of a review</h4>
                                <p>
                                    Please email, or write to, HMRC's Solicitor's Office and Legal Services directly to accept my offer of review. You'll find the email and postal addresses below.
                                </p>
                                <p>
                                    This is your opportunity to say why you think my decision is wrong and send any new information you want considered.
                                </p>
                                <p>Because the SOLS team is a separate part of HMRC, they'll need the following information to identify your case when you accept my offer. You should include:</p>
                                <ul className="list-disc list-inside pl-2 space-y-1">
                                    <li>your name, or business name, as shown at the top of this letter</li>
                                    <li>all references used at the top of this letter</li>
                                    <li>the name of the HMRC officer or team named at the end of this letter</li>
                                </ul>
                                <p>Or, you might find it easier to give the SOLS team a copy of this letter when you accept my offer.</p>

                                {/* Reference strip */}
                                {/* <div className="bg-[#f3ede8] rounded-lg px-6 py-3 flex flex-wrap gap-4 text-xs font-mono text-[#595959] my-4">
                                    <span>093512</span><span>2</span><span>449 4229 70</span><span>CFS-2360676</span>
                                </div> */}

                                <p>
                                    If you want a review but there's a reason you cannot write to the SOLS team within 30 days from the date of this letter, you will need a reasonable excuse for the delay. You'll need to write to the SOLS team as soon as possible after your reasonable excuse has ended and explain why you are late accepting my offer.
                                </p>
                                <p>
                                    The SOLS email address is: <a href="mailto:reviews@hmrc.gov.uk" className="text-[#8C5A3C] hover:underline">reviews@hmrc.gov.uk</a>.
                                </p>
                                <p>
                                    If you want to write, their address is: <strong className="text-[#1E1E1E]">Solicitor's Office and Legal Services, HM Revenue and Customs, BX9 1ZT</strong>.
                                </p>
                            </div>

                            {/* Tribunal section */}
                            <div className="mb-8 space-y-4 text-sm text-[#595959] leading-relaxed">
                                <h4 className="text-[#1E1E1E] font-bold text-base">If you want to appeal to an independent tribunal</h4>
                                <p>
                                    If you do not want to accept my offer of a review, or you disagree with the outcome of it, you can appeal to an independent tribunal. Your request must reach HM Courts and Tribunals Service within 30 days of the date of this letter.
                                </p>
                                <p>
                                    For more about tribunals and how to appeal, go to <a href="https://www.gov.uk" className="text-[#8C5A3C] hover:underline">www.gov.uk</a> and search 'appeal to the tax tribunal' or call <strong className="text-[#1E1E1E]">0300 123 1024</strong>.
                                </p>
                            </div>

                            {/* More info */}
                            <div className="mb-10 space-y-4 text-sm text-[#595959] leading-relaxed">
                                <h4 className="text-[#1E1E1E] font-bold text-base">More information</h4>
                                <p>
                                    You can find more information about your appeal and review rights by going to <a href="https://www.gov.uk" className="text-[#8C5A3C] hover:underline">www.gov.uk</a> and searching for 'HMRC1' or 'disagree with a tax decision'. You can ask for a copy by calling <strong className="text-[#1E1E1E]">0300 200 3610</strong>.
                                </p>
                            </div>

                            {/* Email info box */}
                            <div className="bg-[#FDE8D5] rounded-xl p-6 sm:p-8 mb-10">
                                <h4 className="text-[#1E1E1E] font-bold text-base mb-4">Important information about communicating by email</h4>
                                <div className="space-y-3 text-sm text-[#595959] leading-relaxed">
                                    <p>
                                        Corresponding with us by email will help reduce any delays giving and receiving information. If you want to correspond by email, you must first tell us that you understand and accept the risks of using email. These are detailed in our factsheet CC/FS72 DSC1.
                                    </p>
                                    <p>
                                        We will only contact you by email about a tax matter where you have already given us permission to do so. If you have any doubt about the authenticity of an email which claims to come from HMRC, then do not click on any links, give any personal details, or reply to the email. Please forward the email to us at <a href="mailto:phishing@hmrc.gov.uk" className="text-[#8C5A3C] hover:underline">phishing@hmrc.gov.uk</a>.
                                    </p>
                                    {/* <div className="bg-[#f3ede8] rounded-lg px-6 py-3 flex flex-wrap gap-4 text-xs font-mono text-[#595959] mt-2">
                                        <span>093512</span><span>3</span><span>449 4229 70</span><span>CFS-2360676</span>
                                    </div> */}
                                </div>
                            </div>

                            {/* Dashed divider — Annexe A */}
                            <div className="relative my-10">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t-2 border-dashed border-[#e8ddd4]"></div>
                                </div>
                                <div className="relative flex justify-center">
                                    <span className="bg-white px-4 text-[#9CA3AF] text-xs tracking-[0.2em] uppercase">Annexe A</span>
                                </div>
                            </div>

                            <div className="pt-10">
                                <h4 className="text-[#1E1E1E] font-bold text-base mb-2">Annexe A – Site Plan – Dated 17 December 2024</h4>
                                <div className="mb-10 w-full">
                                    <img src={pdfImg2} alt="PDF image" className="w-full h-full object-cover" />
                                </div>
                            </div>

                            {/* Dashed divider — Annexe B */}
                            <div className="relative my-10">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t-2 border-dashed border-[#e8ddd4]"></div>
                                </div>
                                <div className="relative flex justify-center">
                                    <span className="bg-white px-4 text-[#9CA3AF] text-xs tracking-[0.2em] uppercase">Annexe B</span>
                                </div>
                            </div>

                            <div className="mb-10 space-y-5">
                                <h4 className="text-[#1E1E1E] font-bold text-base">Annexe B – Additional Conditions: Palletisation of Casks</h4>
                                <div className="bg-[#FDE8D5] rounded-xl p-6 sm:p-8 space-y-4 text-sm text-[#595959] leading-relaxed">
                                    <div className="flex gap-3">
                                        <span className="text-[#8C5A3C] font-bold flex-shrink-0">(i)</span>
                                        <p>A record should be affixed to pallets/block stows showing the casks contained therein.</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-[#8C5A3C] font-bold flex-shrink-0">(ii)</span>
                                        <div>
                                            <p className="mb-2">The warehouse-keeper's stock records should, in addition to the detail specified in Section 3.3, Notice 196, show:</p>
                                            <ul className="list-disc list-inside pl-2 space-y-1">
                                                <li>how many pallets are in each stow; and</li>
                                                <li>the number of casks per pallet.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-[#8C5A3C] font-bold flex-shrink-0">(iii)</span>
                                        <p>Management checks must be carried out on casks when they are originally stowed and when they are subsequently removed, with detail of these checks recorded in business records.</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-[#8C5A3C] font-bold flex-shrink-0">(iv)</span>
                                        <p>HMRC reserve the right to amend or revoke the approval to store casks on pallets at any time.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Using references */}
                            <div className="mb-10 space-y-4 text-sm text-[#595959] leading-relaxed">
                                <h4 className="text-[#1E1E1E] font-bold text-base">Using references and sending us documentation</h4>
                                <p>
                                    If you send us any original documents or records, you must tell us that they are originals. You must also tell us, in writing, if you agree that we can securely destroy any documents or records you send us. We securely destroy documents and records 50 working days after we have digitally scanned them.
                                </p>
                                <p>
                                    Whichever method you choose to contact us, you need to quote the case reference <strong className="text-[#1E1E1E]">CFS-2360676</strong>.
                                </p>
                                {/* <div className="bg-[#f3ede8] rounded-lg px-6 py-3 flex flex-wrap gap-4 text-xs font-mono text-[#595959]">
                                    <span>093512</span><span>4</span><span>449 4229 70</span><span>CFS-2360676</span>
                                </div> */}
                            </div>

                            {/* Sign-off */}
                            <div className="mb-10 pt-6 border-t border-[#e8ddd4]">
                                <p className="text-[#595959] text-sm mb-6">Yours sincerely</p>
                                <p className="text-[#1E1E1E] font-bold text-base">Thomas Clark</p>
                                <p className="text-[#595959] text-sm">Officer of HM Revenue &amp; Customs</p>
                            </div>

                            {/* Footer note */}
                            <div className="bg-[#f3ede8] rounded-xl p-6 text-sm text-[#595959] leading-relaxed space-y-2">
                                <p>
                                    Join the millions of taxpayers already using their Personal Tax Account to access a range of services. It takes just a few minutes to get started, go to{' '}
                                    <a href="https://www.gov.uk/personal-tax-account" className="text-[#8C5A3C] hover:underline" target="_blank" rel="noreferrer">www.gov.uk/personal-tax-account</a>
                                </p>
                                <p>
                                    To find out about the service and standard of behaviour you can expect from us, go to{' '}
                                    <a href="https://www.gov.uk" className="text-[#8C5A3C] hover:underline" target="_blank" rel="noreferrer">www.gov.uk</a>{' '}
                                    and search <span className="italic">'HMRC Charter'</span>.
                                </p>
                            </div>

                        </div>

                        {/* Footer Bar */}
                        <div className="bg-[linear-gradient(104.84deg,#C58E6D_0%,#8C5A3C_100%)] px-8 py-4 flex items-center justify-end">
                            <span className="text-white text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase opacity-80">OFFICIAL</span>
                        </div>
                    </div>

                </div>
            </main>

            <LandingFooter />
        </div>
    );
};

export default Pdf2Page;
