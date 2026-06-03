import LandingHeader from '../components/landing-page/landing-header';
import LandingFooter from '../components/landing-page/landing-footer';
import pdfImg1 from '../assets/pdf-image.png';

const Pdf1Page = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#f6f4f0]">
            <LandingHeader />

            {/* Page Content */}
            <main className="flex-1 py-10 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">

                    {/* Certificate Card */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#e8ddd4]">

                        {/* Official Header Bar */}
                        <div className="bg-[linear-gradient(104.84deg,#C58E6D_0%,#8C5A3C_100%)] px-8 py-4 flex items-center justify-between">
                            <span className="text-white text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase opacity-80">OFFICIAL</span>
                        </div>

                        <div className="px-8 py-10 sm:py-14">

                            {/* HMRC Logo + Title */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10 pb-8 border-b">
                                {/* HM Revenue & Customs branding */}
                                <div className="flex items-center w-[15%]">
                                    <img src={pdfImg1} alt="PDF image" className="w-full h-full object-cover"/>
                                </div>

                                {/* Certificate Title */}
                                <div className="text-right">
                                    <h1 className="text-[18px] sm:text-[22px] font-black tracking-[0.1em] text-[#1E1E1E] uppercase leading-tight">
                                        EXCISE WAREHOUSING
                                    </h1>
                                    <p className="text-[#595959] text-sm sm:text-base tracking-[0.08em] font-medium">Authorised Warehousekeeper</p>
                                    <p className="text-[#595959] text-sm sm:text-base tracking-[0.08em] font-medium">Registration Certificate</p>
                                </div>
                            </div>

                            {/* Issued To / Issued By */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 pb-8 border-b border-[#e8ddd4]">
                                <div>
                                    <p className="text-[#1E1E1E] font-semibold text-sm tracking-[0.1em] mb-1">Foster Whisky Management Ltd</p>
                                    <p className="text-[#595959] text-sm leading-relaxed">10 Murray Lane<br />MONTROSE<br />DD10 8LF</p>
                                </div>
                                <div className="sm:text-right">
                                    <p className="text-[#1E1E1E] font-semibold text-sm tracking-[0.1em] mb-1">HM Revenue and Customs</p>
                                    <p className="text-[#595959] text-sm leading-relaxed">Excise Processing Teams<br />BX9 1GL</p>
                                    <p className="text-[#595959] text-sm mt-3"><span className="font-medium text-[#1E1E1E]">Date of Issue:</span> 19/12/2024</p>
                                    <p className="text-[#595959] text-sm"><span className="font-medium text-[#1E1E1E]">Page:</span> 1 of 2</p>
                                </div>
                            </div>

                            {/* Notice */}
                            <p className="text-[#595959] text-sm leading-relaxed mb-10 italic border-l-4 border-[#C58E6D] pl-4">
                                Note that conditions and requirements contained in HM Revenue and Customs law and public notices apply to this registration and you must comply with them.
                            </p>

                            {/* Details Section */}
                            <div className="bg-[#FDE8D5] rounded-xl p-6 sm:p-8 mb-8">
                                <h2 className="text-[#1E1E1E] font-black text-base sm:text-lg tracking-[0.15em] uppercase mb-6">
                                    Details of Registered Person
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <p className="text-[#9CA3AF] text-xs tracking-[0.1em] uppercase mb-1">Departmental Trader Registration Number</p>
                                        <p className="text-[#1E1E1E] font-semibold">449 4229 70 0001</p>
                                    </div>
                                    <div>
                                        <p className="text-[#9CA3AF] text-xs tracking-[0.1em] uppercase mb-1">Excise ID</p>
                                        <p className="text-[#1E1E1E] font-semibold">GBWK449422900</p>
                                    </div>
                                    <div>
                                        <p className="text-[#9CA3AF] text-xs tracking-[0.1em] uppercase mb-1">Effective Date of Registration</p>
                                        <p className="text-[#1E1E1E] font-semibold">19/12/2024</p>
                                    </div>
                                    <div>
                                        <p className="text-[#9CA3AF] text-xs tracking-[0.1em] uppercase mb-1">Trading Name</p>
                                        <p className="text-[#1E1E1E] font-semibold">N/A</p>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <p className="text-[#9CA3AF] text-xs tracking-[0.1em] uppercase mb-1">Name</p>
                                        <p className="text-[#1E1E1E] font-semibold">Foster Whisky Management Ltd</p>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <p className="text-[#9CA3AF] text-xs tracking-[0.1em] uppercase mb-1">Address</p>
                                        <p className="text-[#1E1E1E] font-semibold">10 Murray Lane, MONTROSE, DD10 8LF</p>
                                    </div>
                                </div>
                            </div>

                            {/* Certificate Body Text */}
                            <div className="space-y-4 text-sm text-[#595959] leading-relaxed mb-10">
                                <p>
                                    This certificate confirms that you are registered as an authorised warehousekeeper with effect from the date shown. It also summarises the key registration information held about you by HM Revenue and Customs.
                                </p>
                                <p>
                                    If the certificate contains any errors or omissions, please notify HM Revenue and Customs in writing at the above address, quoting your Departmental Trader Registration Number.
                                </p>
                                <p>
                                    If there are any subsequent changes in the details shown you should notify HM Revenue and Customs in writing at the above address within 7 days.
                                </p>
                                <p className="font-semibold text-[#1E1E1E]">
                                    All excise warehousekeepers are required to submit a W1 return, normally on a monthly basis for each set of premises they operate.
                                </p>
                                <p>
                                    You are reminded that legislation exists relating to the deposit and holding of goods in duty suspension in an excise warehouse.
                                </p>
                            </div>

                            {/* Divider for Page 2 */}
                            <div className="relative my-12">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t-2 border-dashed border-[#e8ddd4]"></div>
                                </div>
                            </div>

                            {/* Page 2 Official Bar label */}
                            <div className="flex items-center justify-between py-4">
                                <span className="text-[#9CA3AF] text-xs font-semibold tracking-[0.2em] uppercase">OFFICIAL</span>
                            </div>

                            {/* Page 2 Header re-issue */}
                            <div className="text-right mb-8 pb-6 border-b border-[#e8ddd4]">
                                <p className="text-[#595959] text-sm"><span className="font-medium text-[#1E1E1E]">Date of Issue:</span> 19/12/2024</p>
                                <p className="text-[#595959] text-sm"><span className="font-medium text-[#1E1E1E]">Page:</span> 2 of 2</p>
                                <p className="text-[#595959] text-sm"><span className="font-medium text-[#1E1E1E]">Departmental Trader Registration Number:</span> 449 4229 70 0001</p>
                            </div>

                            {/* Registered Warehouses */}
                            <div className="bg-[#FDE8D5] rounded-xl p-6 sm:p-8 mb-8">
                                <h2 className="text-[#1E1E1E] font-black text-base sm:text-lg tracking-[0.15em] uppercase mb-6">
                                    Registered Warehouses
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <p className="text-[#9CA3AF] text-xs tracking-[0.1em] uppercase mb-1">Name</p>
                                        <p className="text-[#1E1E1E] font-semibold">Foster Whisky Management</p>
                                    </div>
                                    <div>
                                        <p className="text-[#9CA3AF] text-xs tracking-[0.1em] uppercase mb-1">Address</p>
                                        <p className="text-[#1E1E1E] font-semibold">Commieston Farm<br />Montrose<br />DD10 0AG</p>
                                    </div>
                                </div>
                            </div>

                            {/* Footer note */}
                            <div className="space-y-3 text-sm text-[#595959] leading-relaxed">
                                <p>
                                    If you have any other queries, you should contact your local office which is at <span className="font-semibold text-[#1E1E1E]">GLASGOW</span>.
                                </p>
                                <p>
                                    The address and telephone number is in the telephone book under <span className="italic">'HM Revenue and Customs'</span>.
                                </p>
                            </div>

                        </div>

                        {/* Official Footer Bar */}
                        <div className="bg-[linear-gradient(104.84deg,#C58E6D_0%,#8C5A3C_100%)] px-8 py-4 flex items-center justify-end">
                            <span className="text-white text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase opacity-80">OFFICIAL</span>
                        </div>
                    </div>

                    {/* Back button */}
                    {/* <div className="mt-8 flex justify-start">
                        <a href="/" className="inline-flex items-center gap-2 text-[#8C5A3C] font-semibold text-sm tracking-[0.1em] hover:gap-4 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="19" y1="12" x2="5" y2="12" />
                                <polyline points="12 19 5 12 12 5" />
                            </svg>
                            Back to Home
                        </a>
                    </div> */}

                </div>
            </main>

            <LandingFooter />
        </div>
    );
};

export default Pdf1Page;
