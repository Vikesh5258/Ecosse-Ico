import React from 'react';
import LandingHeader from '../components/landing-page/landing-header';
import LandingFooter from '../components/landing-page/landing-footer';

const TermsAndConditionsPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
            <LandingHeader />

            <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12 md:mb-16">
                        <h1 className="text-[36px] sm:text-[44px] md:text-[56px] font-black tracking-[0.2em] text-[#1E1E1E] mb-2">
                            Terms of Service and Use
                        </h1>
                    </div>

                    <div className="space-y-8 text-[#0B0B0B] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.8] tracking-[0.05em] font-medium">
                        <section>
                            <div className="space-y-4">
                                <p>[ECOSSE Coin] is a peer-to-peer platform service that enables its users to exchange currency, using a variety of mediums, to and from cryptocurrency. Users on the platform can create advertisements in which they offer to buy or sell cryptocurrency. Other users respond to these advertisements and the two users can agree to trade cryptocurrencies for cash or complete the trade online. In order for a user to sell cryptocurrencies they ("seller") must store the cryptocurrencies in the [ECOSSE Coin] web wallet belonging to their account from where the cryptocurrencies are transferred to the user purchasing the cryptocurrencies ("buyer") after the seller confirms the buyers payment. All trades on this site are conducted between users of the service. [ECOSSE Coin] may help to resolve disputes between buyers and sellers. Acting as an escrow provider, [ECOSSE Coin] is not itself a party of any cryptocurrency trade or transactions conducted by its users. [ECOSSE Coin] does not provide an exchange service. [PLEASE ENSURE THIS FUNCTION IS ACTUALLY BEING PROVIDED AND UPDATE ACCORDINGLY]</p>
                                <p>These Terms of Service and Use ("Agreement") form a legal agreement covering the provision of services ("service" or "services") provided by [ECOSSE Coin] Ltd ("[ECOSSE Coin]" or "[ECOSSE Coin]" or "us" or "our" or "we") to you as an individual ("you" or "your"). Your use of the services will be governed by this Agreement, along with the [ECOSSE Coin] Privacy Policy. Please read through this Agreement and Privacy Policy carefully before accepting them.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#1E1E1E] mb-4">Acceptance and Change of Terms</h2>
                            <div className="space-y-4">
                                <p>By signing up for an account on [ECOSSE Coin] you accept both the Terms of Service and Use, and the Privacy Policy. By accepting this Agreement or by using the Service, you expressly acknowledge and agree that you are entering into a legal agreement with [ECOSSE Coin], and have understood and agree to comply with, and be legally bound by, this Agreement.</p>
                                <p>We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service and Use by posting updates and changes to our website. If there is a change which has a material adverse impact on you, we will notify you by emailing you and providing 30 days notice. If you do not agree to the changes, you can terminate this agreement by discontinuing to use the services.</p>
                                <p>It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the services following the posting of any changes to these Terms of Service and Use constitutes acceptance of those changes.</p>
                                <p>For changes to these Terms of Service and Use that will significantly affect your rights and obligations we will strive to notify you before the changes take effect. You can terminate this Agreement at any time by concluding any outstanding trades and other obligations, withdrawing any remaining balances and deleting your account.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#1E1E1E] mb-4">Registration and User Account</h2>
                            <div className="space-y-4">
                                <p>To use our services, or to access this site or some of the resources it has to offer, you may be asked to provide registration details in order to register a user account ("User Account" or "account"). It is a condition of use of this site and our services that all the details you provide are correct, current, and complete. If we believe the details are not correct, current, or complete, we have the right to refuse you access to the site, or any of its resources, and to terminate or suspend your account.</p>
                                <p>You must be at least 18 years old to sign up for a [ECOSSE Coin] account. If you sign up for an account, you warrant that you are at least 18 years old. You may only use your own account at [ECOSSE Coin] and you may only have one account registered. You may only act on your own behalf. You may not use your account to act as an intermediary or broker for any entity or person. You are not allowed to borrow, sell, share or otherwise make available your account or any details necessary to access your account to other people or entities.</p>
                                <p>You are responsible for maintaining adequate security and control of any and all usernames, passwords, two-factor authentication codes or any other codes or credentials that you use to access the services.</p>
                                <p>Your account must not contain misleading or fraudulent information, including, but not limited to having a non-personal phone number. Creating fake reputation information for your account, faking your country of origin or providing fraudulent identification documents is prohibited.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#1E1E1E] mb-4">Company accounts</h2>
                            <div className="space-y-4">
                                <p>If you wish to use our services as a company or other entity you are required to verify your account as a company. A company-verified account is individual and can only be used by the person who registered it. Company accounts are not allowed to be shared with or used by other individuals or entities.</p>
                                <p>Accounts that are company-verified are allowed the following exemptions from these Terms of Service and Use:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>A company may have several active user accounts at any time, provided they are all company-verified and operated by a single employee of the company. A single employee may only register and operate a single account.</li>
                                    <li>A company may have active advertisements from several accounts with the following exceptions: </li>
                                    <li>Ads are not allowed to overlap between accounts. E.g. you're not allowed to create advertisements using the same limits with the same price in the same payment method category in the same country.</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#1E1E1E] mb-4">Identity Verification</h2>
                            <div className="space-y-4">
                                <p>In order to ensure [ECOSSE Coin] remains a safe platform for all of our customers we may require you to verify your identity as part of the services we offer. Identity verification may be required during trade disputes, fraud investigations, and to ensure account ownership. As part of our ID verification process we may require you to provide us with your full name as well as documents and photographs that verify your identity.</p>
                                <p>In certain situations we may require enhanced identity verification. This may include requirements to verify details regarding payments you have made or received during trades on [ECOSSE Coin] as well as cryptocurrency transactions that you've sent or received from your [ECOSSE Coin] account.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#1E1E1E] mb-4">Cryptocurrency Trading</h2>
                            <div className="space-y-4">
                                <p>[ CHECK Is this service actually being provided? Or is it just to purchase only?]</p>
                                <p>You can initiate cryptocurrency trades ("trade" or "contact") to either buy or sell cryptocurrency by sending trade requests to advertisements created by other users.</p>
                                <p>By sending a trade request you agree to be bound by the terms and conditions of the trade as selected and determined by the advertiser (whether by selecting from options available to advertiser for advertisements or by any freeform terms and conditions set out by the advertiser in the Terms of trade field) and displayed on the advertisement page. The terms and conditions specified by the advertiser are valid in all cases except when they contradict or violate these Terms of Service and Use, are unreasonable or otherwise difficult to comply with, are illegal, or if both parties of the trade consent to alter the terms and conditions of the trade.</p>
                                <p>The exchange rate, cryptocurrency amount, payment window, payment method and other terms and conditions of the trade that are visible on the advertisement page prior to sending a trade request cannot be altered once a trade request has been sent and the trade has started.</p>
                                <p>When you are selling cryptocurrency it is your responsibility to check that you have confirmed, independent of the buyer and their payment evidence, that you have received payment for the full amount, that the payment is not made by a third party to the trade, and that it was made according to your instructions given to the buyer. After you have released a trade to the buyer it is not possible to cancel, reverse, dispute or otherwise recover or return the cryptocurrencies to you.</p>
                                <p>Payments made by buyers must be sent by the same person that registered and uses the account. Payment details provided by sellers must match the name of the [ECOSSE Coin] account holder. Making, providing, or attempting to make or provide payments to or from third parties is considered a violation of this agreement.</p>
                                <p>All communication relevant to the trade must happen in the trade chat part of the trade in such a way that it is readily available for [ECOSSE Coin] support staff to review. Communication that has not occurred on [ECOSSE Coin] or that has been hidden, encrypted or otherwise obstructed from view is not taken into consideration during dispute review and dispute resolution.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#1E1E1E] mb-4">Disputing Cryptocurrency Trades</h2>
                            <div className="space-y-4">
                                <p>When a buyer and a seller are in disagreement over a trade either party or [ECOSSE Coin] can start a dispute ("Disputed trade" or "dispute") to initiate a mediation process on the cryptocurrency held in escrow. Disputed trades are reviewed and resolved by [ECOSSE Coin] support staff.</p>
                                <p>Disputes can only be started on trades that are open and marked as paid by the buyer. Trades that are not marked as paid by the buyer, have been released by the seller, cancelled by the buyer, automatically cancelled, or already disputed and resolved are considered completed and cannot be disputed, reversed, or altered.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#1E1E1E] mb-4">Unresponsiveness</h2>
                            <div className="space-y-4">
                                <p>When you are involved in a cryptocurrency trade it is important that you remain active and available from the time the trade is started to the time that the trade is completed, cancelled, or resolved. This means that you must be able to provide a response to a request by [ECOSSE Coin] support in a disputed trade within 12 hours or you may be deemed as unresponsive and the dispute may be resolved against you.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#1E1E1E] mb-4">Dispute review</h2>
                            <div className="space-y-4">
                                <p>During a dispute review [ECOSSE Coin] support may give you instructions that you are required to follow. The instructions given to you may require you to provide proof of payment, proof that you have or have not received payment (e.g. bank transaction history), additional ID verification, photo; audio; or video evidence, or any other documents deemed relevant by [ECOSSE Coin]. Unless otherwise specified by [ECOSSE Coin], these documents must be added to the disputed trade itself. Failure to follow the instructions may lead to the dispute being resolved against you.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#1E1E1E] mb-4">Dispute resolution</h2>
                            <div className="space-y-4">
                                <p>A disputed trade is most commonly resolved by [ECOSSE Coin] support moving the escrowed cryptocurrency to the buyer or the seller of the disputed trade once the dispute resolution criteria are met.</p>
                                <p>In very rare situations where neither party fulfill the criteria, or it is in other ways unclear or not possible to determine which party has fulfilled the dispute resolution criteria, [ECOSSE Coin] may decide to resolve the dispute by splitting the escrowed cryptocurrency between the buyer and the seller evenly or unevenly.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#1E1E1E] mb-4">Dispute resolution criteria</h2>
                            <div className="space-y-4">
                                <p>[ECOSSE Coin] can resolve a disputed trade to a cryptocurrency buyer when one of the following criteria are met:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>The buyer has made payment according to the instructions provided by the seller in the trade chat, advertisement terms of trade, or advertisement payment details and the buyer has provided sufficient proof that the payment was made according to these instructions.</li>
                                    <li>The seller has become unresponsive.</li>
                                </ul>
                                <p>[ECOSSE Coin] can resolve a disputed trade to a cryptocurrency seller when one of the following criteria are met:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>The buyer has not provided payment or not provided payment in full</li>
                                    <li>The buyer has become unresponsive</li>
                                    <li>The payment made by the buyer has been held/frozen/stopped by the payment provider</li>
                                    <li>The buyer has not provided payment according to the instructions provided to them by the seller in the trade chat, advertisement terms of trade or advertisement payment details.</li>
                                    <li>The payment is made by a third party to the trade OR the payment is made from a payment account not registered in the name of the buyer.</li>
                                </ul>
                                <p>If the buyer or the seller of a disputed trade provides fraudulent information or fraudulent documents or makes false claims or otherwise tries to force a certain outcome of a disputed trade the dispute may be immediately resolved against the user.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#1E1E1E] mb-4">Incorrect dispute resolution</h2>
                            <div className="space-y-4">
                                <p>If you believe [ECOSSE Coin] has resolved a dispute you are a party of in a way which is not in accordance with these terms you have a right to request a review. To request a review you need to notify us and specifically request a review by contacting customer support no later than 120 days after the dispute resolution.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#1E1E1E] mb-4">Trades</h2>
                            <div className="space-y-4">
                                <p>You can create cryptocurrency trade advertisements ("advertisement" or "ad" or "ads") to advertise that you want to buy or sell cryptocurrencies. Other users can send trade requests to you from the advertisements that you've created. When a trade request is sent to you a cryptocurrency trade is automatically started.</p>
                                <p>When you have advertisements enabled you are required to be active and available to reply to trades started from these advertisements. If a dispute is initiated in a trade against an advertiser who is not active and available the advertiser may be deemed unresponsive as per this agreement and the dispute may be resolved against them.</p>
                                <p>Information and payment details you provide in advertisements and trades must at all times be correct and up to date. Disputes may be resolved against you if you include out-of-date payment details and a buyer completes payment accordingly. Refusal to complete trades or to provide payment details for trades opened from your advertisements is considered a violation of this agreement.</p>
                                <p>The price or price equation that is defined in the advertisement details must contain any and all fees that the advertiser requires the buyer to pay. After initiation of a trade the price is locked and cannot be changed or any additional fees added without consent from both parties of the trade.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#1E1E1E] mb-4">Limitation, Suspension, and Termination of Your User Account</h2>
                            <div className="space-y-4">
                                <p>Occasionally situations arise where we may need to limit, suspend, or terminate your account. Account limitation ("limit", "limitation") results in a temporary or permanent loss of access to a certain specific part or parts of the services we offer. Account suspension ("suspension", "block", "ban") results in a temporary loss of access to most parts of the services we offer. Account termination ("termination", "permanent ban") results in permanent loss of access to all services we offer as well as termination of this Agreement.</p>
                                <p>We have the right to, limit, suspend, or terminate your account or access to the services that we provide to you if:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>we have a reason to believe that you have acted in violation of these Terms of Service and Use or applicable laws or regulations or if we have a reason to believe that any content or material submitted or shared by you in or through the services violates these Terms of Service and Use or applicable laws or regulations or third party rights;</li>
                                    <li>we suspect that you use the services to engage in, attempt to engage in, or in connection with fraudulent activity, money laundering, terrorist financing or other financial crime;</li>
                                    <li>we have reason to believe that you have supplied false, misleading or deceptive information in connection with your registration, identity verification, trades or any other use of our services, either to us or to another user;</li>
                                    <li>we are required to do so under any applicable law, regulation or an order issued by an authority;</li>
                                    <li>make available content or behave in a way that libels, defames, invades privacy, stalks, is obscene, pornographic, racist, abusive, harassing, threatening or is offensive;</li>
                                    <li>if you use the services in a manner which may cause the services to be interrupted or damaged or such a way that the functionality of the services is in any way impaired or attempt to bypass or break any security mechanism of the services or if [ECOSSE Coin] believes in good faith that such action is reasonably necessary to protect the security of its services or its property or brand or the security, property and rights of its users or those of third parties;</li>
                                    <li>attempt any unauthorized access to user accounts or any part or component of the service.</li>
                                </ul>
                                <p>We will normally give you a notice of any limitation, suspension, or termination of your account but we may, if it is reasonable to do so (for example we consider it advisable for security reasons), limit, suspend or terminate your account without prior notice to you.</p>
                                <p>You acknowledge that our decision to limit, suspend, or terminate your account, may be based on confidential criteria that are essential to our risk management and security protocols and that we are under no obligation to disclose the details of our risk management and security procedures to you.</p>
                                <p>In the event that we limit, suspend or terminate your account we will lift the suspension as soon as possible once the reasons for the suspension or termination no longer exist.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#1E1E1E] mb-4">Limiting Access to Your [ECOSSE Coin] Wallet</h2>
                            <div className="space-y-4">
                                <p>In certain situations your ability to access, conduct cryptocurrency transactions, or start trades using cryptocurrency held in your [ECOSSE Coin] wallet may be limited.</p>
                                <p>This limitation may be applied specifically to your account in order to safeguard cryptocurrency stored in your wallet when we e.g. suspect a third party has gained unauthorized access to your account; if we suspect you of engaging in or being involved in fraudulent or illegal activity; if we are provided with valid legal request from an authority.</p>
                                <p>This limitation may be applied generally to all users or a subset of our users during service outages or maintenance outages of the website; during cryptocurrency hard-forks or other situations where we believe there is a high risk to your cryptocurrency balance.</p>
                                <p>In the event that we limit access to your wallet we aim to remove the limitation as soon as possible once the reasons for the suspension or termination no longer exist.</p>
                                <p>We will normally give you a notice of any limitation of access to your wallet but we may, if it is reasonable to do so (for example we consider it advisable for security reasons), limit access to your wallet without prior notice.</p>
                                <p>You acknowledge that our decision to limit access to your wallet may be based on confidential criteria that are essential to our risk management and security protocols and that we are under no obligation to disclose the details of our risk management and security procedures to you.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#1E1E1E] mb-4">Fees and Pricing</h2>
                            <div className="space-y-4">
                                <p>The services are provided to you against fees determined on a per transaction and/or per trade basis in accordance with the prices and pricing principles set out on our website. Such fees may include fees for incoming and outgoing transactions, and percentage based fees for trades completed.</p>
                                <p>Unless otherwise specified fees are automatically deducted from your [ECOSSE Coin] wallet balance or deposit at the time when the service is rendered or completed.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#1E1E1E] mb-4">Supporting Blockchain Forks and Other Cryptocurrencies</h2>
                            <div className="space-y-4">
                                <p>[CHECK - is this correct? We will just be issuing ECOSSE Coins?]</p>
                                <p>From time to time, new and alternative cryptocurrencies and/or forks of the cryptocurrency blockchain may be created. This may result in holders of private keys containing a cryptocurrency balance receiving a corresponding amount of the new cryptocurrency on the newly created blockchain ("air-drop"). We reserve the right at our sole discretion to decide if and how we support any new cryptocurrencies and/or blockchain forks in our services including defining which blockchain shall be deemed as cryptocurrency within the meaning of this Agreement. We strive to communicate our decisions concerning any significant new forks or cryptocurrencies on our website in a timely manner. If we decide to not support a new cryptocurrency we may, but are not obligated to, compensate users who held cryptocurrency in their [ECOSSE Coin] account at the time of the air-drop in a manner deemed appropriate by us. We reserve the right to provide compensation by converting all of the available new cryptocurrency to cryptocurrency and sharing all of the converted cryptocurrency between users who held a cryptocurrency balance on their account at the time of the creation of the new cryptocurrency. In case such a conversion takes place we may charge you a processing fee in any amount deemed reasonable by us at our sole discretion but not exceeding the amount of compensation payable to you.</p>
                                <p>If we decide to support a new cryptocurrency, unless otherwise communicated by us, these Terms of Service and Use, including any reference to cryptocurrency, shall be equally applied to the new cryptocurrency.</p>
                                <p>We cannot guarantee that the decisions we take under this Section will be suitable, desirable or practical to you. If you are concerned about our decisions, stances or the lack thereof regarding any given blockchain fork or new cryptocurrency, we recommend that you withdraw your balance and handle the situation on your own as you see fit. We are not in any circumstance liable for any damage, losses, expenses or harm resulting to you from the use of our rights under this Section.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#1E1E1E] mb-4">Allowed Jurisdictions</h2>
                            <div className="space-y-4">
                                <p>To use services provided by [ECOSSE Coin] you may need to fulfil certain legal obligations in your country and/or state of residence. By accepting these terms and service you confirm that you have reviewed your local laws and regulations and that you are aware of, and fulfil, any and all such obligations.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#1E1E1E] mb-4">Intellectual Property Rights</h2>
                            <div className="space-y-4">
                                <p>You acknowledge and agree that all copyrights, trademarks and all other intellectual property rights in and related to this site and our services is exclusively the property of [ECOSSE Coin] and our licensors. We grant you a revocable, non-exclusive, non-sublicensable, non-transferable and limited license, subject to the terms of this Agreement, to access and use our site and service, as well as related content, materials and information (collectively, the "Content") solely for approved purposes as permitted by us from time to time. Any other use of the Content is expressly prohibited and you agree not to copy, transmit, distribute, sell, license, reverse engineer, modify, publish, or participate in the transfer or sale of, create derivative works from, or in any other way exploit any of the Content, in whole or in part.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#1E1E1E] mb-4">Disclaimer of Warranties and Limitation of Liability</h2>
                            <div className="space-y-4">
                                <p>This site and the services are provided on an "as is" and "as available" basis for your information and use without any representation or endorsement. To the maximum extent permitted by applicable law, we make no warranties of any kind, whether express or implied, in relation to the site or the services, including but not limited to, implied warranties of satisfactory quality, functionality, fitness for a particular purpose, non-infringement, compatibility, security, accuracy, condition or completeness, or any implied warranty arising from course of dealing or usage or trade.</p>
                                <p>[ECOSSE Coin] Ltd or [ECOSSE Coin] is not associated with and does not itself support or claim to be in partnership with any of the payment methods, services or companies which may appear visible in the Online Payment method lists or advertisement details. Also, services provided by [ECOSSE Coin] Ltd or [ECOSSE Coin] are not authorized, approved, endorsed or sponsored by any of the payment methods listed on the website or their respective trademark owners. Payment method listings are visible on [ECOSSE Coin] for informative purposes only.</p>
                                <p>[ECOSSE Coin] is not responsible for any user-generated content on its site including but not limited to messages, feedbacks or advertisements but may remove or modify said content without notice or liability at any time in its sole discretion.</p>
                                <p>This site may contain links to other sites on the Internet. These sites may contain information or material that some people may find inappropriate or offensive. These other sites are not under the control of [ECOSSE Coin], and you acknowledge that (whether or not such sites are affiliated in any way with [ECOSSE Coin]) [ECOSSE Coin] is not responsible for the accuracy, legality, decency, or any other aspect of the content of such sites.</p>
                                <p>[ECOSSE Coin] reserves the right to modify or discontinue, temporarily or permanently, all or any part of this site and/or any software, facilities and services on this site, with or without notice, and/or to establish general guidelines and limitations on their use.</p>
                                <p>If and to the maximum extent permitted by applicable law, we will not be liable for:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>any economic losses (including without limitation loss of revenues, profits, contracts, business or anticipated savings);</li>
                                    <li>any loss of goodwill or reputation;</li>
                                    <li>any special or indirect or consequential losses, howsoever arising</li>
                                </ul>
                                <p>in any case whether or not such losses were within the contemplation of either of us at the date on which the event giving rise to the loss occurred. Without limitation, you (and not us) assume the entire cost of all necessary servicing, repair or correction or correction in the event of any such loss or damage arising.</p>
                                <p>Nothing in these Terms of Service and Use shall exclude or limit our liability based on wilful conduct or gross negligence. If and to the extent applicable law does not allow the above limitations of warranty and liability, such limitations shall not apply to you.</p>
                                <p>Notwithstanding any other provision in these Terms of Service and Use, nothing shall limit your rights as a consumer under mandatory provisions of applicable consumer protection legislation.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#1E1E1E] mb-4">Indemnity</h2>
                            <div className="space-y-4">
                                <p>You agree to be fully responsible for (and fully indemnify us against) all claims, liability, damages, losses, expenses, including legal fees and costs suffered by us and arising out of or related to any breach of this Agreement by you or any other liabilities incurred by us arising out of your use of the services, or use by any other person accessing the services using your user account, device or internet access account; or your violation of any law or rights of any third party.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#1E1E1E] mb-4">General</h2>
                            <div className="space-y-4">
                                <p>We may transfer or assign our rights and duties under this Agreement to any party at any time without notice to you, but this will not affect your rights or our obligations under this Agreement. You may not, however, transfer or assign any of your rights and duties under this Agreement to any other party.</p>
                                <p>This Agreement (as amended from time to time) contains the entire agreement and understanding between us in respect of all matters which are referred to herein and supersedes any prior written or oral agreement between us relating to such matters. No oral explanation or oral information given by either of us shall alter the interpretation of this Agreement. You confirm that, in agreeing to accept this Agreement, you have not relied on any representation that is not expressly included herein and you agree that you shall have no remedy in respect of any misrepresentation which has not become a term of this Agreement. However, nothing in this Agreement purports to exclude liability for any fraudulent statement or act.</p>
                                <p>If any part of provision this Agreement is deemed unlawful, void or for any reason unenforceable, then that provision shall be deemed to be severable from this Agreement and shall not affect the validity and enforceability of any of the remaining provisions of the Agreement.</p>
                                <p>Our failure to enforce any right or provision in this Agreement will not constitute a waiver of such right or provision unless acknowledged and agreed to by us in writing. Except as expressly set forth in this Agreement, the exercise by either party of any of its remedies under this Agreement will be without prejudice to its other remedies under this Agreement or otherwise permitted under law.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#1E1E1E] mb-4">Governing Law</h2>
                            <div className="space-y-4">
                                <p>You agree that this Agreement and any dispute between you and us shall be governed in all respects by the laws of England and Wales, and you unconditionally submit to the non-exclusive jurisdiction of the courts of England and Wales.</p>
                                <p>The services are offered by us from the United Kingdom. We make no representations that the services are appropriate or available for use in any specific countries. Users of [ECOSSE Coin] are themselves responsible for making sure they are in compliance with legislation of the jurisdiction they operate and reside in. If your local laws do not permit you to use the services provided by [ECOSSE Coin], you may not access this website.</p>
                            </div>
                        </section>

                    </div>
                </div>
            </main>

            <LandingFooter />
        </div>
    );
};

export default TermsAndConditionsPage;
