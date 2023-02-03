import React from 'react'
import Link from 'next/link'
import NavOne from "../components/NavBar"
import RightMenu from '../components/RightSide'
import FooterOne from '../components/Footer'
import Image from 'next/image'

const authors_guide = () => {
    return (
        <>
            <div>
                < NavOne />
            </div>
            <div className='row p-4'>
                <div className='col-lg-9'>             
                    <h2 className="text-center mt-1">Author’s Guide</h2>
                    <hr className="hrbgline"></hr>
                    <div className='shrtdes'>
                        <strong>
                            Please read the following instructions carefully for speedy publication of your manuscript in
                            the International Journal of Veterinary Science (IJVS). The Editor-in-Chief reserves the right
                            to reject/return the manuscript if it is not prepared according to the instructions/format of
                            the journal or does not fall within the scope of the IJVS.
                        </strong>
                    </div>
                    <div>
                        <div className="accordian">
                            <input type="checkbox" id="trigger" />
                            <label className='colpsedown' htmlFor="trigger">Scope of the Journal</label>
                            <div><strong>
                                International Journal of Veterinary Science (<Link href={'https://www.ijvets.com/'}><a>https://www.ijvets.com/</a></Link>) is quarterly (published
                                on 15th of January, April, July and October) publication of the Unique Scientific Publishers
                                that publishes original research papers, review articles, clinical articles/case reports and
                                short communications in the field of Veterinary Medicine/Animal Production covering pre-clinical
                                and clinical subjects. The IJVS also aims to publish articles that advance debate on the
                                Veterinary Medicine/Animal Production. We are delighted to consider articles for publication
                                from senior professors/scientists, and researchers/students throughout the world.</strong>
                            </div>
                        </div>
                        <div className="accordian">
                            <input type="checkbox" id="trigger1" />
                            <label className='colpsedown' htmlFor="trigger1">Publishing Ethics</label>
                            <div><strong>
                                Only those manuscripts are considered for publication in the IJVS, the contents of which
                                have not been published and are not being considered for publication in any other journal
                                and prepared keeping all the Ethical guidelines suggested by the
                                <Link href={'https://publicationethics.org/'}><a> Committee on Publication Ethics</a></Link>.
                                It is assumed that all named authors agree with the contents and form of the manuscript
                                and are responsible for the validity and originality of data presented in the manuscript.</strong>
                            </div>
                        </div>
                        <div className="accordian">
                            <input type="checkbox" id="trigger2" />
                            <label className='colpsedown' htmlFor="trigger2">Disclaimer by the Editor-in-Chief/Publisher</label>
                            <div><strong>
                                The contents of the manuscripts published in the IJVS are the opinions of the authors. Consequently,
                                neither the Editor-in-Chief/Editors nor the publisher are responsible for the opinions expressed/deduced
                                or plagiarism committed by the author(s).</strong>
                            </div>
                        </div>
                        <div className="accordian">
                            <input type="checkbox" id="trigger3" />
                            <label className='colpsedown' htmlFor="trigger3">Ethical Guidelines for IJVS Publications</label>
                            <div><strong>
                                These guidelines are developed keeping the standards defined by the
                                <Link href={'https://publicationethics.org/'}><a> Committee on Publication Ethics (COPE)</a></Link>.
                                The management of the IJVS is committed to maintain a high academic standard. The IJVS is
                                unbiased to any religious, nationality and ideological issue. It is purely research-based
                                publication. Thus, we are committed to maintain a high ethical standard and be impartial to
                                anyone. We abide by the code of conduct and international standards as given by the
                                <Link href={'https://publicationethics.org/'}><a> COPE</a></Link>. Any behavior contrary to
                                this ethics including plagiarism are unacceptable; the manuscript will be removed from our
                                website and the employer of the author(s) will be asked for strict action against such person(s).
                                Thus, it is the responsibility of the author(s) to ensure that their submitted work does not
                                interfere with any existing copyright. <span style={{ color: "blue" }}> Author’s responsibilities </span>
                                Authors should present the manuscript in a logical way. Objectives and significance of research
                                work carried out must be mentioned. References to the published work for detailed methodology
                                followed should be provided for the reproduction/replication of the experiment. Counterfeit or
                                intentionally erroneous statements constitute unethical behavior that are unacceptable. Review
                                articles should also be objective, comprehensive, and accurate accounts of the state of the art.
                                In research/clinical articles/short communications authors should ensure for the originality of
                                their work. The work and/or words/statements of others used in the manuscript must be acknowledged
                                properly. Plagiarism in all forms constitutes unethical publishing behavior and is unacceptable.
                                Submitting the same manuscript to more than one journal concurrently constitutes unethical
                                publishing behavior and is intolerable. Authors should not submit redundant publication or/and
                                articles describing basically the same research already published in any journal. The
                                corresponding author should ensure that there is a complete consensus of all co-authors in
                                approving the final version of the paper and each author has contributed sufficiently to the
                                paper presented for publication. Such fact should be mentioned in paper under author’s
                                contribution. <span style={{ color: "blue" }}> Author’s responsibilities </span>
                                Editors should evaluate submitted papers/articles only and only based on their academic merit.
                                An editor must not use unpublished information in his own research work/paper without written
                                consent of the author(s). Editors should take appropriate/reasonable action when ethical
                                complaints have been lodged concerning a submitted/published manuscript/paper.
                                <span style={{ color: "blue" }}> Reviewer’s responsibilities</span> Any manuscript received for
                                review must be treated as confidential document. Privileged information or ideas obtained through
                                peer review must be kept confidential and not used for personal advantage. Reviews should be
                                conducted objectively, and observations should be formulated clearly with supporting arguments,
                                so that authors can use them for the improvement of the paper. Any selected reviewer who feels
                                unqualified to review the manuscript or knows that its prompt review will be impossible should
                                notify the editor and excuse himself from the review process. Reviewers should not consider
                                manuscripts in which they have conflicts of interest resulting from the collaborative, competitive,
                                or other relationships or connection with any of the authors, companies, or institutions connected
                                to a specific paper.</strong>
                            </div>
                        </div>
                        <div className="accordian">
                            <input type="checkbox" id="trigger4" />
                            <label className='colpsedown' htmlFor="trigger4">Plagiarism checking</label>
                            <div><strong>
                                In scientific publications, each journal must follow publication ethics in letter and spirit,
                                similarity, the IJVS is following the best practice guidance of the
                                <Link href={'https://publicationethics.org/'}><a> Committee on Publication Ethics</a></Link>. All
                                submitted articles will undergo a Similarity Index checking process using Turnitin or any
                                other appropriate software. Turnitin checks submissions against millions of published articles,
                                and billions of web contents. Authors can use <Link href={'http://www.als-journal.com/wp-admin/turnitin.com'}><a> Turnitin</a></Link> to 
                        screen their work before submission. If the total Similarity Index is {'>'}19% or any single 
                        source has similarity index {'>'}5%, the manuscript is liable to be rejected. </strong>
                            </div>
                        </div>
                        <div className="accordian">
                            <input type="checkbox" id="trigger5" />
                            <label className='colpsedown' htmlFor="trigger5">Editorial Policy/Review Process</label>
                            <div><strong>
                                The IJVS has double blind review policy. The Editorial Board will send paper to two external
                                reviewers. Editor-in-Chief will approve paper on advice of those reviewers. The journal’s
                                management will always try to get the submitted manuscript reviewed as early as possible.
                                Usually, reviewers are requested to complete the review as early as possible; however, delay in
                                the review process will not be on the part of the IJVS management. If all processes from complete
                                submission to revision go smoothly, then 6-8 weeks are required to reach to a conclusion
                                (Acceptance/Rejection).</strong>
                            </div>
                        </div>
                        <div className="accordian">
                            <input type="checkbox" id="trigger6" />
                            <label className='colpsedown' htmlFor="trigger6">Types of Manuscripts</label>
                            <div><strong>
                                Author has to right type of manuscript on the top left corner.</strong>
                            </div>
                            <div> <strong>
                                <span style={{ color: "blue" }}>Review Articles </span>
                                are mostly invited. Before writing/submission authors must get consent of the Editor-in-Chief by
                                sending your title, abstract along with your brief CV. The Review Article must be related to the
                                animal health, diseases, and production. These articles must digest appropriate published
                                literature, especially from the last 10-15 years and ¼ of these references must comprised of from
                                the last five years. References of books be avoided as book is already a review. An abstract not
                                exceeding 250 words be added. These articles must contain an introduction, text with appropriate
                                headings and a conclusion. Introduction should elucidate the importance of the subject; the text
                                should be comprehensive and meticulous.
                                <strong><span style={{ color: "blue" }}>Research Articles/Original Full-length Articles</span> must
                                    be prepared comprehensively. There must be an abstract that must not exceed 250 words and must
                                    include a brief account of the objectives of the study, methodology, salient findings, and main
                                    conclusion. Abstract be followed by 4-6 keywords (indexing terms). The main manuscript may be
                                    divided into sections like: Introduction, Materials and Methods, Results, Discussion, Conclusion,
                                    Acknowledgment (if any), Author’s contribution and References. Combining Results and Discussion
                                    under one heading in Original full-length article is discouraged. </strong>
                                <span style={{ color: "blue" }}> Short Communication</span> is usually brief account of a
                                research project that is in progress. Thus, it must be brief not more than 2000-2500 words including
                                all aspects. It must contain an Abstract of about 150 words comprised of a brief account of the
                                objectives of the study, methodology, salient findings, and conclusion. Other headings could be
                                “Introduction” “Materials and Methods” and “Results and Discussion”. Tables and Figures must not
                                exceed 4-5 in total.
                                <strong><span style={{ color: "blue" }}> Case Report/Clinical Article</span> should contain an
                                    Abstract of about 150 words and not exceed about 2000-2500 words including up to 10-15 references.
                                    It may include the following sections: Introduction (explaining why the case is being reported,
                                    with references where necessary to previous reports), History, Clinical Examination and Postmortem
                                    Findings of the case if applicable, Diagnosis and Differential Diagnosis, Treatment adopted,
                                    Discussion and References. Tables and Figures must not exceed 4-5 in total.</strong></strong>
                            </div>
                        </div>
                        <div className="accordian">
                            <input type="checkbox" id="trigger7" />
                            <label className='colpsedown' htmlFor="trigger7">Manuscript Preparation and Submission</label>
                            <div><strong>
                                Manuscript completed in all respects be submitted directly to the Editor-in-Chief/Editor
                                <Link href={'mailto: editor@ijvets.com'}><a> (editor@ijvets.com)</a></Link> for quick publication processes.
                                Following files/documents are required at the time of submission: 1. Manuscript (MS Word or compatible) and 2.
                                List of potential reviewers. <span style={{ color: "blue" }}> Potential reviewers: </span>
                                At the time of submission, names of at least three potential reviewers (their designation,
                                institute, official postal address, telephone, official e-mail address) must be provided on a
                                separate sheet/file. Among these, two proposed reviewers must be from technologically advanced
                                countries. <span style={{ color: "blue" }}> Preparation of the Manuscript: </span> Manuscript must
                                be prepared in English language. It must be clear and concise. All the manuscripts must comply
                                with the journal instructions. Failure to do so will result in rejection/return of manuscript and
                                delaying the publication process. We ensure quick publication processes; therefore, authors
                                cooperation is highly appreciated in these regards. Manuscript preferably be prepared in MS Word
                                following the following specifications:
                                <label htmlFor=''>
                                    <ol type="I">
                                        <li>A4 size paper with 1″ margin on each side with 1.5 spacing.</li>
                                        <li>All pages must be numbered in the upper right corner and line-numbered continuously.</li>
                                        <li>Manuscript must be prepared in Time New Roman and font size 12.</li>
                                    </ol>
                                </label>
                                <label htmlFor=''>
                                    <span style={{ color: "blue" }}> Title Page: </span> This page be comprised of
                                    <ol type="I">
                                        <li>The title of the manuscript that must be complete, comprehensive and must denote the essence of the work.</li>
                                        <li>Each author’s affiliation must be provided and identified using numeric superscript. The corresponding author’s name must be indicated with asterisk and his/her email be written in other line than that of author’s addresses.</li>
                                        <li>Novelty statement: In 2-3 sentences explain what the novelty of the study is.</li>
                                    </ol>
                                </label>
                                <label htmlFor=''>Abstracts, Keywords, and other headings must start from the next page.</label>
                                <label style={{ color: "blue" }}> References Format </label>
                                <label htmlFor=''>The IJVS encourages the use of EndNote software (is a commercial reference management
                                    software package, used to manage bibliographies and references when writing essays
                                    and articles) for writing references. Only references closely related to the author’s
                                    work are allowed for citation.</label>
                                <label htmlFor=''>Citations to the journal’s articles should be cited in the text as: Chugunova (2020) or
                                    (Chugunova 2020), Belizário and Sircili 2020 (2020) or (Belizário and Sircili 2020),
                                    Khater et al. (2020) or (Khater et al. 2020). Name of all authors be written, and name
                                    of the Journal be written in full. Authors are encouraged to write DOI of each cited
                                    article. The list of references at the end of manuscript must be arranged alphabetically
                                    and each reference in the list should appear in the following form:</label>
                                <label style={{ color: "blue" }}> Reference to a journal publication: </label>
                                <label htmlFor=''>Belizário JE and Sircili MP, 2020. Novel biotechnological approaches for monitoring and
                                    immunization against resistant to antibiotics Escherichia coli and other pathogenic
                                    bacteria. BMC Veterinary Research 16: 420. <span style={{ color: "blue" }}> https://doi.org/10.1186/s12917-020-02633-8 </span></label>
                                <label htmlFor=''>
                                    Chugunova E, 2020. Using histological analysis to detect mincemeat falsification. International
                                    Journal of Veterinary Science 9: 540-545. <span style={{ color: "blue" }}> https://doi.org/10.37422/IJVS/20.071 </span>
                                </label>
                                <label htmlFor=''>
                                    Khater HF, Ziam H, Abbas A, Abbas RZ, Raza MA, Hussain K, Younis EZ, Radwan IT and Selim A,
                                    2020. Avian coccidiosis: Recent advances in alternative control strategies and vaccine
                                    development. Agrobiological Records 1: 11-25.
                                    <span style={{ color: "blue" }}> https://doi.org/10.47278/journal.abr/2020.004 </span>
                                </label>
                                <label htmlFor=''>
                                    <span style={{ color: "blue" }}> Reference to a book/book chapter: </span>
                                    Bewley JD and Black M, 1994. Seeds: Physiology of Development and Germination, 2nd Ed. Plenum Press, New York, USA, pp: 312-320.
                                </label>
                                <label htmlFor=''>
                                    Mitten SJ and Adams B, 1999. Chapter 3. Reproduction in Ruminants. In: James S and Bowling J (ed), Ruminant Physiology. M-Publishing Inc, Washington, USA, pp: 281-299.
                                </label>

                            </strong>
                            </div>
                        </div>
                        <div className="accordian">
                            <input type="checkbox" id="trigger8" />
                            <label className='colpsedown' htmlFor="trigger8">Bioethics and Animal Use in Research</label>
                            <div><strong>
                                <Link href={'https://www.ncbi.nlm.nih.gov/books/NBK500418/'}><a> Simmonds (2018)</a></Link>
                                explained in detail about the use of animals for research purpose and what bioethics have
                                to be followed. For more detail read the article available at this
                                <Link href={'https://www.ncbi.nlm.nih.gov/books/NBK500418/'}><a>  link</a></Link>. Furthermore,
                                oversight of animal use in biomedical activities has also been compiled by AAALAC International
                                (<Link href={'https://www.ncbi.nlm.nih.gov/books/NBK500418/'}><a> AAALAC International 2015</a></Link>). Implementation
                                of ethical programs for the care and use of animals in biomedical activities requires
                                buy-in from all members of an institution, from the highest-ranking administrators to the
                                animal care and research staffs. The achievement of an ethical, legally compliant, and
                                high-quality animal care and use program is in the self-interest of the institution, as
                                well as those individuals who care for and use the animals. High-quality animal care and
                                use will maximize the quality of the research results, which, in turn, will maximize the
                                prestige of the institution, reputation of the animal users, and likely job satisfaction
                                for the animal care and use staffs. All individuals involved in biomedical activities
                                should, at least, believe in their own minds that what they are doing meets their own
                                sense of what is right, moral, and ethical.
                                <label htmlFor=''>
                                    Manuscripts submitted for publication must contain a statement to the effect that all
                                    human and animal studies have been approved by the appropriate ethics committee/institutional
                                    review board and have, therefore, been performed in accordance with the ethical standards
                                    laid down in the <Link href={'https://www.wma.net/what-we-do/medical-ethics/declaration-of-helsinki/'}><a> 1964 Declaration of Helsinki</a></Link>
                                    and its later amendments.
                                </label>
                            </strong>
                            </div>
                        </div>
                        <div className="accordian">
                            <input type="checkbox" id="trigger9" />
                            <label className='colpsedown' htmlFor="trigger9">Figures and Tables Format</label>
                            <div><strong>
                                All the figures and tables must be referred in the text where appropriate. Illustrations, graphs,
                                photographs must be named as Figures; identified by Arabic numerals like Fig. 1, Fig. 2, etc…. The
                                figures be supplied as digitized in “.JPG or .JPEG or .JPE or .TIF or .TIFF with at least 300 dpi.
                                Tables must be identified by Arabic numerals like Table 1, Table 2, etc… and must not exceed one
                                page (A4 size) and be arranged after the reference section, however, must be separated. Though we
                                have provided guidelines for the preparation of the manuscript, yet you can follow format of the
                                References, Tables and Figures presented in the Volume 10, Issue 1, 2021 of the IJVS available at
                                <span style={{ color: "blue" }}> http://www.ijvets.com/volume-10-no-1-2021/</span></strong>
                            </div>
                        </div>
                        <div className="accordian">
                            <input type="checkbox" id="trigger10" />
                            <label className='colpsedown' htmlFor="trigger10"> Proofs/Reprints</label>
                            <div><strong>
                                The Proofs of accepted pages are sent to the Corresponding Author for proof-reading. Author is
                                requested to return the proofs within 72 hours. It is the responsibility of the corresponding
                                author to carry out the proof-reading,000 for any mistake(s) left in the manuscript, management
                                of the IJVS will not be responsible. <span style={{ color: "blue" }}> Reprints</span>: No reprints
                                will be supplied to authors. All articles are published with Open Access, hence freely available
                                under Archive of the IJVS website (
                                <Link href={'http://www.ijvets.com/archive/'}><a>http://www.ijvets.com/archive/</a></Link>),
                                thus, can be downloaded without any cost/permission.</strong>
                            </div>
                        </div>
                        <div className="accordian">
                            <input type="checkbox" id="trigger11" />
                            <label className='colpsedown' htmlFor="trigger11">Conflict of interest</label>
                            <div><strong>
                                <Link href={'https://en.wikipedia.org/wiki/Conflicts_of_interest'}><a>Conflicts of interest (COIs) </a></Link>
                                if any, may cause wrongdoing and make it more likely. Ethical standards in academic publishing
                                exist to avoid and deal with COIs. Standards vary between journals and are unevenly applied.
                                According to the International Committee of Medical Journal Editors, “authors have a responsibility
                                to evaluate the integrity, history, practices and reputation of the journals to which they submit
                                manuscripts”. COIs increase the likelihood of biases arising; they can harm the quality of research
                                and the public good (even if disclosed). COIs can involve research sponsors, authors, journals,
                                journal’s staff, publishers, and peer reviewers.</strong>
                            </div>
                        </div>
                        <div className="accordian">
                            <input type="checkbox" id="trigger12" />
                            <label className='colpsedown' htmlFor="trigger12">Copyright</label>
                            <div><strong>
                                On acceptance of the manuscript, the author(s) must sign the copyright form. As regard, the
                                transfer of rights, the corresponding author is responsible on behalf of all authors. The
                                submitted manuscripts are published on the understanding that all the authors are aware of
                                the contents and are agreed on the submission of the manuscript to this journal.</strong>
                            </div>
                        </div>
                        <div className="accordian">
                            <input type="checkbox" id="trigger13" />
                            <label className='colpsedown' htmlFor="trigger13">Article Publishing Charges (APCs)</label>
                            <div>
                                <strong>The Management of the IJVS strongly believes in Open Access Policy, therefore, after
                                    publication, all contents are freely available to everybody without any cost/permission.
                                    However, each accepted manuscript is liable for the following APCs with effect from
                                    August 15, 2022:</strong>
                                <label htmlFor=''>
                                    <ol type="I">
                                        <li>APCs up to 6 Printed Pages: US$ 250</li>
                                        <li>Over and above 06 printed pages: US$ 30/Printed page</li>
                                    </ol>
                                </label>
                                These publication charges are meager to cover the cost of web hosting and maintenance,
                                peer review, administration and management, professional production of articles, and
                                dissemination of published papers to various corners in addition to other publishing
                                functions. Publication charges are payable after acceptance.
                            </div>
                        </div>
                        <div className="accordian">
                            <input type="checkbox" id="trigger14" />
                            <label className='colpsedown' htmlFor="trigger14">Waiver/Refund Policy</label>
                            <div><strong>
                                <label htmlFor=''>The IJVS administration/publisher are trying to build research abilities/resources for
                                    authors from underdeveloped and developing countries. The Editorial Board foresee that
                                    some authors do not have access to funds to cover APCs, therefore, accept partial payment
                                    where limited funds are available. No payment information is requested before an article
                                    is accepted, so the ability to pay cannot affect editorial decision. Requests for waivers
                                    and discounts will be considered using the following criteria, i) Whether there was
                                    external funding for the research for any of the authors, and ii) Whether the
                                    authors could contribute from their own personal accounts. In recognition of reviewers’
                                    support, any reviewer that returns a full review on time can receive a 25% discount on
                                    the article publication charges for a paper for which they are the corresponding author,
                                    if submitted within 12 months of completing the review.</label>
                                We do not offer refunds for open access articles once have been published.</strong>
                            </div>
                        </div>
                        <div className="accordian">
                            <input type="checkbox" id="trigger15" />
                            <label className='colpsedown' htmlFor="trigger15">Open Access Policy</label>
                            <div><strong>
                                The IJVS provides online access to articles published (through its platform) free of charge to
                                the end-user and that is re-usable. By default, we publish these articles under a Creative
                                Commons Attribution Non-Commercial (CC BY-NC 4.0) license that allows reuse subject only to the
                                use being non-commercial and to the article being fully attributed (
                                <Link href={'http://creativecommons.org/licenses/by-nc/4.0'}><a>http://creativecommons.org/licenses/by-nc/4.0</a></Link>). IJVS
                                makes all open access articles freely available on <Link href={'https://www.ijvets.com/'}><a> https://www.ijvets.com/</a></Link> from
                                the date of publication. These articles are still protected by copyright but are made available under a Creative
                                Commons. For all research articles except those funded by an organization that mandates CC-BY, the IJVS license
                                allows reuse with complete citation of the origin of the article for non-commercial use only. For commercial use,
                                our normal permissions policy applies.</strong>
                            </div>
                        </div>
                        <div className="accordian">
                            <input type="checkbox" id="trigger16" />
                            <label className='colpsedown' htmlFor="trigger16">Permission Policy</label>
                            <div><strong>
                                <label style={{ color: "blue" }}>Library Use</label>
                                <label htmlFor=''>
                                Specific permission from the IJVS is not required at any time after publication for photocopying
                                journal articles or sections of articles for teachers/students/researchers use if the following
                                conditions are met:</label></strong>
                                <label htmlFor=''>
                                <ol type="I">
                                    <li>The library subscribes to the journal. [contact Editor, IJVS for your library subscription]</li>
                                    <li>Copying is done at the request of the teachers/students/researchers.</li>
                                    <li>A copyright notice appears on the first page of each copy.</li>
                                </ol>
                                </label>
                                <strong><label htmlFor=''>Libraries in non-educational and commercial institutions or libraries transacting interlibrary 
                                loans may apply for paid permission to photocopy the IJVS articles through emailing us (Editor, 
                                IJVS).</label>
                                <label style={{ color: "blue" }}>Custom Reprints</label>
                                <label htmlFor=''>You may obtain high quality, bound versions of individual IJVS articles suitable for professional 
                                    use or display in a portfolio. Reprints may be ordered in multiples of 50. To order reprints, 
                                    contact Editor, IJVS.</label>
                                <label style={{ color: "blue" }}>Disallowed Use</label>
                                <label htmlFor=''>Permission is never granted for use of IJVS for endorsements, implied or otherwise, of 
                                    products or services, or to use contents as part of advertisements or advertising 
                                    supplements. Rights for some IJVS articles may be reverted to the authors. IJVS reserves 
                                    the right to redirect any inquiry regarding a IJVS article to the corresponding author 
                                    for final disposition.</label></strong>                            
                            </div>
                        </div>
                        <div className="accordian">
                            <input type="checkbox" id="trigger17" />
                            <label className='colpsedown' htmlFor="trigger17">Article Withdrawal/Retraction Policy</label>
                            <div><strong>
                                It is a general principle of scholarly publications, the Editor/Editor-in-Chief of the journal is solely and 
                                independently responsible for deciding among the submitted articles to the journal shall be published. In making 
                                this decision the Editor/Editor-in-Chief is guided by policies of the journal’s Editorial Board and constrained by 
                                such legal requirements in force regarding defamation, copyright violation and plagiarism. An outcome of this 
                                principle is the importance of the scholarly archive as a permanent, historic record of the scholarly publication. 
                                Articles that have been published shall remain extant, exact and unaltered as far as is possible. However, very 
                                occasionally circumstances may arise where an article is published that must later be retracted or even removed.</strong>
                            </div>
                            <div><strong>
                                <span style={{ color: "blue" }}>Article Withdrawal </span>
                                This clause of the policy is valid only for Articles In-Press which represent early versions of articles and 
                                sometimes contain errors or may have been accidentally submitted twice. Occasionally, but less frequently, the 
                                articles may represent infringements of professional ethical codes, such as multiple submission, bogus claims of 
                                authorship, plagiarism, fraudulent use of data or the like.</strong>
                            </div>
                            <div><strong>
                                <span style={{ color: "blue" }}>Article Retraction </span>
                                This clause of the policy applies on the published (In-Press/Archive) papers in the IJVS those found violating 
                                professional ethical codes, such as multiple submission, bogus claims of authorship, plagiarism, fraudulent use of 
                                data or the like. The retraction of an article by its authors or the editor under the advice of members of the 
                                scholarly community has long been an occasional feature of the learned world. Standards for dealing with retractions 
                                have been developed by a number of library and scholarly bodies, and this best practice is adopted for article 
                                retraction by the IJVS. A retraction note titled “Retraction: [article title]” signed by the authors and/or the 
                                editor is published in the paginated part of a subsequent issue of the journal and listed in the contents list. In 
                                the electronic version, a link is made to the original article. The online article is preceded by a screen containing 
                                the retraction note. It is to this screen that the link resolves; the reader can then proceed to the article itself. 
                                The original article is retained unchanged save for a watermark on the (.pdf) indicating on each page that it is 
                                “retracted.”</strong>
                            </div>
                            <div><strong>
                                <span style={{ color: "blue" }}>Article Removal: Legal limitations </span>
                                In an extremely limited number of cases, it may be necessary to remove an article from the online database. 
                                This will only occur where the article is clearly defamatory, or infringes others’ legal rights, or where the 
                                article is, or we have good reason to expect it will be, the subject of a court order, or where the article, if 
                                acted upon, might pose a serious health risk. In these circumstances, while the metadata (Title and Authors) 
                                will be retained, the text will be replaced with a screen indicating the article has been removed for legal 
                                reasons.</strong>
                            </div>
                        </div>
                    </div>
                    <h2 className="">Downloads</h2>
                    <hr className="hrbgline"></hr>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <Link href={'/upload/Copyright Release Form.pdf'}><a>Author’s Guide</a></Link>
                        </div>
                        <div className='col-lg-6'>
                            <Link href={'/upload/Copyright.docx'}><a>Copyright Release Form</a></Link>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3'>
                    < RightMenu />
                </div>
            </div>
            <div>
                < FooterOne />
            </div>
        </>
    )
}

export default authors_guide