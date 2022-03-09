import React from "react";
import { Col, Row, Divider, Tag } from "antd";
import { connect } from "react-redux";

const printed_archives = [
    {
        title: "WATCH: TOP CARDIOLOGIST DISCUSSES SHOCKING STUDY REGARDING JAB VS VIRUS",
        image: "/assets/imgs/dummy.jpg",
        link: "https://steadfastclash.com/the-latest/watch-top-cardiologist-discusses-shocking-study-regarding-jab-vs-virus/",
        categories: [],
        date: "",
    },
    {
        title: "COVID revealed",
        image: "/assets/imgs/dummy.jpg",
        link: "https://vrevealed.com/c19/webathon",
        categories: ["VR P 2 (brave doctors and scientists spreading positive information)"],
        date: "",
    },
    {
        title: "#RealNotRare: Vax-Injured Women Release Video To Raise Awareness About Adverse Reactions",
        image: "/assets/imgs/dummy.jpg",
        link: "https://yournews.com/2021/12/09/2263764/realnotrare-vax-injured-women-release-video-to-raise-awareness-about-adverse/",
        categories: ["V PR 2 (vaccine adverse effects)"],
        date: "",
    },
    {
        title: "ATTORNEY FUELLMICH ON NUREMBERG 2.0: JUSTICE WILL NOT COME BY THE COURTS BUT BY THE PEOPLE RISING UP",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.bitchute.com/video/2ktsoHULV1xD/",
        categories: ["V PR 2 (vaccine adverse effects)"],
        date: "",
    },
    {
        title: "Europe fighting back",
        image: "/assets/imgs/dummy.jpg",
        link: "https://twitter.com/BernieSpofforth/status/1470109920896983049",
        categories: [" V PR 2 (COVID litigation (populations fighting back against governments)"],
        date: "",
    },
    {
        title: "Showing the science | Dr. Byram Bridle",
        image: "/assets/imgs/dummy.jpg",
        link: "https://rumble.com/vpra5j-showing-the-science-dr.-byram-bridle.html?fbclid=IwAR3io4WCkygnaX2NCJKIknjmqodb8eq2TkmM-YUXeBcxGGvgahYgMHNh-uc",
        categories: ["VR P 2 (brave doctors and scientists spreading positive information)"],
        date: "",
    },
    {
        title: "REMOVING SPIKE PROTEINS, ELIMINATING GRAPHENE OXIDE, EVERSING MRNA DAMAGE, &amp; MORE W/ DR. NIEUSMA",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.bitchute.com/video/F8djRQzofIF1/?fbclid=IwAR3Pz11Ip0stxIshh6q5bv97fALN2NWUq55x4Yq83RbBAZNIdGa3bfWMhjQ",
        categories: ["V PR 2 (vaccine adverse effects)"],
        date: "",
    },
    {
        title: "Dr. Peter McCullough at Reawaken America",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.brighteon.com/e857a93d-2b8d-453f-a3fb-5dbab469d587",
        categories: ["V PR 2 (brave doctors and scientists spreading positive information)"],
        date: "",
    },
    {
        title: "MARK LEVIN INTERVIEWS DR. HARVEY RISCH (FULL INTERVIEW) | FOX NEWS V PR 2",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.bitchute.com/video/mAOVVqNfbXyT/",
        categories: ["(brave doctors and scientists spreading positive information)"],
        date: "",
    },
    {
        title: "Dr. Steven Pelech, PhD: The Missing Science You Need on Antibody Immunity.",
        image: "/assets/imgs/dummy.jpg",
        link: "https://rumble.com/vq2joz-dr.-steven-pelech-phd-the-missing-science-you-need-on-antibody-immunity..html",
        categories: ["V PR 2 (brave doctors and scientists spreading positive information)"],
        date: "",
    },
    {
        title: "COVID-19 Vaccine Causes AIDS Warns Dr. Zelenko",
        image: "/assets/imgs/dummy.jpg",
        link: "https://banned.video/watch?id=61b3e1dd41190915ff8754d0",
        categories: ["V PR 2 (brave doctors and scientists spreading positive information)"],
        date: "",
    },
    {
        title: "REAL AMERICA — Dan Ball W/ PhD Bio-Scientist, Dr. David Wiseman, COVID Corruption, 11/19/21",
        image: "/assets/imgs/dummy.jpg",
        link: "https://rumble.com/vpi7f4-real-america-dan-ball-w-phd-bio-scientist-dr.-david-wiseman-covid-corruptio.html",
        categories: [],
        date: "",
    },
    {
        title: "Omicron symptoms mild so far, says South African doctor who spotted",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.bbc.com/news/av/uk-59450988",
        categories: ["it"],
        date: "",
    },
    {
        title: "WEBINAR WITH PETER MCCULLOUGH, SENATOR RON JOHNSON, BRIAN TYSON + 7 AUSTRALIAN PARLIAMENTARIANS",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.bitchute.com/video/U1QmZIlcGKwU/",
        categories: [],
        date: "",
    },
    {
        title: "DAUNTING COMPILATION OF ATHLETES COLLAPSING AND DYING",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.bitchute.com/video/6UF0IcM6CV0s/",
        categories: [],
        date: "",
    },
    {
        title: "NANO GRAPHENE Razorblades | Dr. Andreas Noack ~ Whistleblower Chemist &amp; Graphene Expert is Now Dead | Nov. 27/21",
        image: "/assets/imgs/dummy.jpg",
        link: "https://odysee.com/@TimelessTruths:3/NANO-GRAPHENE-Razorblades-Whistleblower-Dr-Andreas-Noack:f",
        categories: [],
        date: "",
    },
    {
        title: "INVENTOR OF MRNA VACCINE TECH: FAUCI RESPONSIBLE FOR 500,000 COVID DEATHS BY BLOCKING IVERMECTIN/HCQ",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.bitchute.com/video/VdxrIoIL7aK8/",
        categories: [],
        date: "",
    },
    {
        title: "RFK JR. ON TUCKER CARLSON 11/15/21 ABOUT VACCINE SAFETY AND THE REAL ANTHONY FAUCI",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.bitchute.com/video/Wat8dWFnAiBH/",
        categories: [],
        date: "",
    },
    {
        title: "Dr. Dianne Andrews IBAW: Dr. Peter McCullough – This show may save your life with Covid-19",
        image: "/assets/imgs/dummy.jpg",
        link: "https://rumble.com/vpqnv2-dr.-dianne-andrews-ibaw-this-show-may-save-your-life-with-covid-19.html",
        categories: [],
        date: "",
    },
    {
        title: "The COVID vaccines were designed to fail Bhadki",
        image: "/assets/imgs/dummy.jpg",
        link: "https://rumble.com/vpw1y9-the-covid-vaccines-were-designed-to-fail.html",
        categories: [],
        date: "",
    },
    {
        title: "VIDEO: Former Pfizer Employee Says COVID-19 Vaccine Causes Recipients to Become More Susceptible to the Virus",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.thegatewaypundit.com/2021/11/video-former-pfizer-employee-says-covid-19-vaccine-causes-recipients-become-susceptible-virus/?utm_source=Email&amp;utm_medium=the-gateway-pundit&amp;utm_campaign=dailypm&amp;utm_content=daily",
        categories: [],
        date: "",
    },
    {
        title: "URGENT: DR. PETER MCCULLOUGH CALLS FOR HALT TO VACCINE PROGRAM",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.redvoicemedia.com/video/2021/11/urgent-dr-peter-mccullough-calls-for-immediate-vaxx-halt/",
        categories: [],
        date: "",
    },
    {
        title: "Finally! Medical Proof the Covid Jab is “Murder”",
        image: "/assets/imgs/dummy.jpg",
        link: "https://brandnewtube.com/watch/finally-medical-proof-the-covid-jab-is-quot-murder-quot_TWpj5FDYSrjRIsT.html",
        categories: [],
        date: "",
    },
    {
        title: "Houston Methodist doctor who resigned following suspension over controversial COVID-19 tweets sp",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.youtube.com/watch?v=KVwm-KJvGzk",
        categories: [],
        date: "",
    },
    {
        title: "Dr. Fauci: Tucker Carlson’s Personal Attacks Are A Badge Of Honor",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.youtube.com/watch?v=vURsft2Zq40",
        categories: [],
        date: "",
    },
    {
        title: "MODERNA VACCINE 2015 – GLEN BECK",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.bitchute.com/video/mV9G9fsY2A6Z/",
        categories: [],
        date: "",
    },
    {
        title: "Dr. Peter McCullough Issues Emergency Warning: Vaccine Created Spike Protein is Deadly in the Human Body",
        image: "/assets/imgs/dummy.jpg",
        link: "https://freeworldnews.tv/watch?id=6185b407e19ed5372ded8319&amp;fbclid=IwAR3FrBP4v1qpW7s_IIQFVWv0kN0xFJpTQxA-5NSLH3m9tASXuHuxe-YELVs",
        categories: [],
        date: "",
    },
    {
        title: "Dr. Robert Malone: Children Who Have Had COVID Are at Higher Risk of Adverse Effects If You Vaccinate Them (VIDEO)",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.thegatewaypundit.com/2021/11/dr-robert-malone-children-covid-higher-risk-adverse-effects-vaccinate-video/?utm_source=Email&amp;utm_medium=the-gateway-pundit&amp;utm_campaign=dailypm&amp;utm_content=daily",
        categories: [],
        date: "",
    },
    {
        title: "LIVE: Sen. Ron Johnson hosts press conference featuring parents of children injured by vaccine",
        image: "/assets/imgs/dummy.jpg",
        link: "https://rumble.com/vomhj2-live-sen.-ron-johnson-hosts-press-conference-featuring-parents-of-children-.html",
        categories: [],
        date: "",
    },
    {
        title: "Peterson on vaccines",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.facebook.com/scott.spidle.790/videos/1077409296409852/",
        categories: [],
        date: "",
    },
    {
        title: "Job Loss Due to Vaccine Mandates | Counterculture",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.theepochtimes.com/job-loss-due-to-vaccine-mandates-counterculture_4102849.html?utm_source=morningbriefnoe&amp;utm_medium=email&amp;utm_campaign=mb-2021-11-15&amp;est=y0dgYg%2FC11fWppOkVFbD8V7ccySUkZwaKSfYA6Ita%2BVqT9gpPRjT7V2bWGc%3D?utm_source=morningbriefnoe&amp;utm_medium=email&amp;utm_campaign=mb-2021-08-20&amp;mktids=6915e925258a10451cc2001be2c0d771&amp;est=%5BEMAIL_SECURE_LINK%5D",
        categories: [],
        date: "",
    },
    {
        title: "The Measles Myth",
        image: "/assets/imgs/dummy.jpg",
        link: "https://odysee.com/@drsambailey:c/themeaslesmyth:0",
        categories: [],
        date: "",
    },
    {
        title: "What Happened to Tiffany Dover?",
        image: "/assets/imgs/dummy.jpg",
        link: "https://drtrozzi.org/2021/11/14/what-happened-to-tiffany-dover/",
        categories: [],
        date: "",
    },
    {
        title: "RN missing since collapsing at Pfizer Promo Event December 2020",
        image: "/assets/imgs/dummy.jpg",
        link: "https://drtrozzi.org/2021/11/14/what-happened-to-tiffany-dover/",
        categories: [],
        date: "",
    },
    {
        title: "What Happened to Tiffany Dover?",
        image: "/assets/imgs/dummy.jpg",
        link: "https://drtrozzi.org/2021/11/14/what-happened-to-tiffany-dover/",
        categories: [],
        date: "",
    },
    {
        title: "RN missing since collapsing at Pfizer Promo Event December 2020",
        image: "/assets/imgs/dummy.jpg",
        link: "https://drtrozzi.org/2021/11/14/what-happened-to-tiffany-dover/",
        categories: [],
        date: "",
    },
    {
        title: "Doctor Exposes Covid Vaccine Attacking Blood Cells",
        image: "/assets/imgs/dummy.jpg",
        link: "https://freeworldnews.tv/watch?id=615499332b9dc11cfaa7ac63",
        categories: [],
        date: "",
    },
    {
        title: "URGENT: DR. PETER MCCULLOUGH CALLS FOR IMMEDIATE VAXX HALT",
        image: "/assets/imgs/dummy.jpg",
        link: "https://rumble.com/vp4vzb-urgent-dr.-peter-mccullough-calls-for-immediate-vaxx-halt.html",
        categories: [],
        date: "",
    },
    {
        title: "Dr. Fauci Admits Vaccines Did Not Work as Advertised and that Vaccinated Are in Great Danger Today (VIDEO)",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.thegatewaypundit.com/2021/11/dr-fauci-admits-vaccines-not-work-advertised-vaccinated-great-danger-today/",
        categories: [],
        date: "",
    },
    {
        title: "Canadian Covid Care Alliance video of athletes collapsing/dying from heart attacks",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.instagram.com/tv/CWOVCjngHZB/?utm_medium=copy_link",
        categories: [],
        date: "",
    },
    {
        title: "BILL GATES ADMITS THE VACCINES “DON’T BLOCK TRANSMISSION”: “IT’S BEEN COMPLETELY HORRIFIC”",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.bitchute.com/video/iqB6rT1lesFA/",
        categories: [],
        date: "",
    },
    {
        title: "2012 vs.&nbsp;2020: TODAY, As We Were Told Yesterday",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.cristoverdad.com/2012-vs-2020-hoy-tal-como-nos-lo-contaron-ayer/",
        categories: [],
        date: "",
    },
    {
        title: "South African Physician warns of the bigger plan",
        image: "/assets/imgs/dummy.jpg",
        link: "https://drtrozzi.org/2021/11/11/south-african-physician-warns-of-the-bigger-plan/",
        categories: [],
        date: "",
    },
    {
        title: "Dr Shankara Chetty concisely explains the dark science of the covid agenda, and the function of the spike glycoprotein poison",
        image: "/assets/imgs/dummy.jpg",
        link: "https://drtrozzi.org/2021/11/11/south-african-physician-warns-of-the-bigger-plan/",
        categories: [],
        date: "",
    },
    {
        title: "Air Canada’s union files a grievance against the company’s vaccine mandates",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.youtube.com/watch?v=q3pD8-Ugxsg",
        categories: [],
        date: "",
    },
    {
        title: "Dr. Mark McDonald – Part 1 – Covid &amp; the United States of Fear – a Psychiatric Perspective on Vaccination, Mandates &amp; Authoritarianism",
        image: "/assets/imgs/dummy.jpg",
        link: "https://covexit.com/dr-mark-mcdonald-part-1-covid-and-the-united-states-of-fear/",
        categories: [],
        date: "",
    },
    {
        title: "David Martin, we will kill many children with the vaccines",
        image: "/assets/imgs/dummy.jpg",
        link: "https://twitter.com/Dr_RohenKapur/status/1459222563654184961",
        categories: [],
        date: "",
    },
    {
        title: "Actor Matthew McConaughey Comes Out Against Vaccine Mandates For Kids",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.youtube.com/watch?v=saIWRS65VCo",
        categories: [],
        date: "",
    },
    {
        title: "Real America – Dan Ball W/ Dr. David Wiseman (November 3, 2021",
        image: "/assets/imgs/dummy.jpg",
        link: "https://rumble.com/voplz4-real-america-dan-ball-w-dr.-david-wiseman-november-3-2021.html",
        categories: [],
        date: "",
    },
    {
        title: "Q&amp;A with Dr. Peter McCullough",
        image: "/assets/imgs/dummy.jpg",
        link: "https://rumble.com/vocjxg-q-and-a-with-dr.-peter-mccullough.html",
        categories: [],
        date: "",
    },
    {
        title: "Peter Doshi U.S. Senator Ron Johnson Holds Panel in DC on COVID-19 Vaccine Mandates and Injuries",
        image: "/assets/imgs/dummy.jpg",
        link: "https://brandnewtube.com/watch/peter-doshi-u-s-senator-ron-johnson-holds-panel-in-dc-on-covid-19-vaccine-mandates-and-injuries_LWTWpHPVdy2Ye6U.html",
        categories: [],
        date: "",
    },
    {
        title: "Are the scientific journals censoring the Science? Part 1: Removal of Myocarditis report in VAERS",
        image: "/assets/imgs/dummy.jpg",
        link: "https://rumble.com/von23w-are-the-scientific-journals-censoring-the-science-part-1-removal-of-myocard.html",
        categories: [],
        date: "",
    },
    {
        title: "I Tested Positive For COVID, Faced Hospitalization If Not For “The Kitchen Sink” Prescriptions",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.youtube.com/watch?v=IkQSOF0T2aQ",
        categories: [],
        date: "",
    },
    {
        title: "TRUMP SAYS CHILDREN DON’T NEED COVID VACCINE: ‘THEIR IMMUNE SYSTEMS ARE STRONG’",
        image: "/assets/imgs/dummy.jpg",
        link: "https://rsbnetwork.com/news/trump-says-children-dont-need-covid-vaccine-their-immune-systems-are-strong/",
        categories: [],
        date: "",
    },
    {
        title: "Symposium: Hoosiers Speak on the Effects of Vaccine and Mask Mandates – Tuesday, Nov. 2, 2021",
        image: "/assets/imgs/dummy.jpg",
        link: "https://rumble.com/voprpp-vaccine-injury-symposium.html",
        categories: [],
        date: "",
    },
    {
        title: "Jacinda Arden",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.facebook.com/nick.neilson.3/videos/442621043924647/",
        categories: [],
        date: "",
    },
    {
        title: "Nobel Prof. Montagnier: COVID-19 Caused By a Vaccine Experiment Gone Bad?",
        image: "/assets/imgs/dummy.jpg",
        link: "https://childrenshealthdefense.org/news/nobel-prof-montagnier-covid-19-caused-by-a-vaccine-experiment-gone-bad",
        categories: [],
        date: "",
    },
    {
        title: "BOOSTER DANGER: 10 Times More Potent Than First Shots",
        image: "/assets/imgs/dummy.jpg",
        link: "https://rumble.com/vool6v-booster-danger-10-times-more-potent-than-first-shots.html",
        categories: [],
        date: "",
    },
    {
        title: "Advisory Committee on Immunization Practices- ACIP",
        image: "/assets/imgs/dummy.jpg",
        link: "https://video.ibm.com/channel/VWBXKBR8af4",
        categories: [],
        date: "",
    },
    {
        title: "Dr. Peter McCullough Continues To Sound Alarm On The Deaths &amp; Injuries Right After The Vaccines! – Tim Truth Must Video",
        image: "/assets/imgs/dummy.jpg",
        link: "https://beforeitsnews.com/health/2021/10/dr-peter-mccullough-continues-to-sound-alarm-on-the-deaths-and-injuries-right-after-the-vaccines-tim-truth-must-video-3042455.html",
        categories: [],
        date: "",
    },
    {
        title: "Dr Rochagné Kilian – Blows the Whistle on Covid-19 Vaccines and D-Dimer Levels",
        image: "/assets/imgs/dummy.jpg",
        link: "https://rumble.com/vohbts-dr-rochagn-kilian-blows-the-whistle-on-covid-19-vaccines-and-d-dimer-levels.html",
        categories: [],
        date: "",
    },
    {
        title: "This Short Clip From 1976 “60 Minutes” Piece on Swine Flu Vaccination Has Gone Viral – 4024",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "Neil Oliver: We haven’t even got past Halloween but it’s already panto season at COP26",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.gbnews.uk/gb-views/neil-oliver-we-havent-even-got-past-halloween-but-its-already-panto-season-at-cop26/150704",
        categories: [],
        date: "",
    },
    {
        title: "Dr. Peter McCullough on Newsmax – Chris Salcedo Show, Oct 20, 2021",
        image: "/assets/imgs/dummy.jpg",
        link: "https://rumble.com/vo0iu2-dr.-peter-mccullough-on-newsmax-chris-salcedo-show-oct-20-2021.html",
        categories: [],
        date: "",
    },
    {
        title: "Are There Safety Concerns with the Synthetic mRNA Spike Protein?",
        image: "/assets/imgs/dummy.jpg",
        link: "https://rumble.com/vjcwwx-are-there-safety-concerns-with-the-synthetic-mrna-spike-protein.html",
        categories: [],
        date: "",
    },
    {
        title: "COVID Q &amp; A with Dr. Peter McCullough, #7",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.americaoutloud.com/covid-q-a-with-dr-peter-mccullough-7/",
        categories: [],
        date: "",
    },
    {
        title: "Michael Palmer MD, Asst. Prof Biochem U Waterloo: “This is a technology designed to poison people”",
        image: "/assets/imgs/dummy.jpg",
        link: "https://3speak.tv/watch?v=vladtepesblog/vtoqeckj&amp;utm_source=studio",
        categories: [],
        date: "",
    },
    {
        title: "YALE PROF. DR. HARVEY RISCH: GOVERNMENT APPROACH TO A CHILDREN VACCINATION REPRESENTS A “NOBLE LYING”",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.bitchute.com/video/yDCtcPbiTqwS/",
        categories: [],
        date: "",
    },
    {
        title: "COVID Q &amp; A with Dr. Peter McCullough, #7",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.americaoutloud.com/covid-q-a-with-dr-peter-mccullough-7/",
        categories: [],
        date: "",
    },
    {
        title: "Dr Lee Merritt Packs Mountains of Information Deconstructing Fallacy of the Pandemic",
        image: "/assets/imgs/dummy.jpg",
        link: "https://rumble.com/vnrqz7-dr-lee-merritt-packs-mountains-of-information-deconstructing-fallacy-of-the.html",
        categories: [],
        date: "",
    },
    {
        title: "Amish Covid | Full Measure",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.youtube.com/watch?v=O1DgWYdukZU",
        categories: [],
        date: "",
    },
    {
        title: "Israeli Ministry of Health deleted thousands of covid-19 vaccine adverse events testimonies website",
        image: "/assets/imgs/dummy.jpg",
        link: "https://brandnewtube.com/watch/israeli-ministry-of-health-deleted-thousands-of-covid-19-vaccine-adverse-events-testimonies-website_UZcL9SHC9EMAqKj.html",
        categories: [],
        date: "",
    },
    {
        title: "THE GROUPS WITH EXEMPTION FROM GETTING THE COVID VAXX – THIS WILL ASTOUND YOU – JEFF RENSE",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.bitchute.com/video/RYHgsC08FZsA/",
        categories: [],
        date: "",
    },
    {
        title: "DR RYAN COLE MD – IMMUNOLOGIST AND VIRAL EXPERT TALKS ABOUT COVID AND VACCINES",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.bitchute.com/video/j2lvyukyURvc/",
        categories: [],
        date: "",
    },
    {
        title: "Dr. Peter McCullough Interviewed by Dr. Brian Ardis",
        image: "/assets/imgs/dummy.jpg",
        link: "https://rumble.com/vo0iwa-dr.-peter-mccullough-interviewed-by-dr.-brian-ardis.html",
        categories: [],
        date: "",
    },
    {
        title: "Dr. Peter McCullough on Newsmax – Chris Salcedo Show, Oct 20, 2021",
        image: "/assets/imgs/dummy.jpg",
        link: "https://rumble.com/vo0iu2-dr.-peter-mccullough-on-newsmax-chris-salcedo-show-oct-20-2021.html",
        categories: [],
        date: "",
    },
    {
        title: "The Highwire EPISODE 238: AMERICAN EXODUS",
        image: "/assets/imgs/dummy.jpg",
        link: "https://thehighwire.com/watch/",
        categories: [],
        date: "",
    },
    {
        title: "LAWFARE: VAXX ‘MANDATE’ IS WARFARE — MITCH FINE",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.bitchute.com/video/DsrTYDhYxODX/?list=notifications&amp;randomize=false",
        categories: [],
        date: "",
    },
    {
        title: "Powerful Video: Military Members Publicly Defy Biden’s Illegal Covid Vaccine Mandate",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.infowars.com/posts/powerful-video-military-members-publicly-defy-bidens-illegal-covid-vaccine-mandate/",
        categories: [],
        date: "",
    },
    {
        title: "Dr. Peter McCullough on Newsmax – Chris Salcedo Show, Oct 20, 2021",
        image: "/assets/imgs/dummy.jpg",
        link: "https://rumble.com/vo0iu2-dr.-peter-mccullough-on-newsmax-chris-salcedo-show-oct-20-2021.html",
        categories: [],
        date: "",
    },
    {
        title: "Dr. Sucharit Bhakdi Warns: COVID Shots to “Decimate World Population”",
        image: "/assets/imgs/dummy.jpg",
        link: "https://visionlaunch.com/dr-sucharit-bhakdi-warns-covid-shots-to-decimate-world-population/",
        categories: [],
        date: "",
    },
    {
        title: "PREVENTION OF DISCRIMINATION BILL 2021 – NOW IN SENATE Today I have introduce legislation making it unlawful to discriminate against Australians who do not take the vaccine",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.facebook.com/PaulineHansonAu/videos/414884903371587/",
        categories: [],
        date: "",
    },
    {
        title: "Interview: Superior Natural Immunity to SARS-CoV-2",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.jeremyrhammond.com/2021/10/12/interview-superior-natural-immunity-to-sars-cov-2/",
        categories: [],
        date: "",
    },
    {
        title: "DR BRYAN ARDIS EXPOSES DEATH BY REMDESIVIR PROTOCOL PUSHED BY FAUCI",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.bitchute.com/video/gkNnzDYTGod2/",
        categories: [],
        date: "",
    },
    {
        title: "DR MICHAEL MCDOWELL – ORIGINS OF SARS COV-2 AND THE GENETIC BIOWEAPONS INDUSTRY",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.bitchute.com/video/7b2BBegQOxGj/",
        categories: [],
        date: "",
    },
    {
        title: "CHRISTIANE NORTHRUP = COVID VACCINE SHEDDING / TRANSMISSION, ESPECIALLY AMONGST WOMEN",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.bitchute.com/video/xJSNY9mUOIj5/",
        categories: [],
        date: "",
    },
    {
        title: "DR RYAN COLE MD – IMMUNOLOGIST AND VIRAL EXPERT EXPLAINS HOW THE VACCINE WEAKENS THE IMMUNE SYSTEM",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.bitchute.com/video/43olH6iAvT3f/",
        categories: [],
        date: "",
    },
    {
        title: "It is Your Right to Choose What to Put in Your Body, reminds Dr. Bryan Ardis",
        image: "/assets/imgs/dummy.jpg",
        link: "https://rumble.com/vnuh54-it-is-your-right-to-choose-what-to-put-in-your-body-reminds-dr.-brian-ardis.html",
        categories: [],
        date: "",
    },
    {
        title: "Dr. Peter McCullough Breaks CDC Bombshell",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.brighteon.com/49647ef9-42e9-4d8e-9fc1-d114276a37dc",
        categories: [],
        date: "",
    },
    {
        title: "INTERVIEW WITH DR. DAN STOCK ON ANTIBODY DEPENDENT ENHANCEMENT, VITAMIN D",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.bitchute.com/video/cT1o1hYwld1O/",
        categories: [],
        date: "",
    },
    {
        title: "Pandemic Of The VACCINATED Generating Mutant Chinese Virus",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.redvoicemedia.com/2021/10/pandemic-of-the-vaccinated-generating-mutant-chinese-virus-strains-more-infected-than-unvaccinated/",
        categories: ["Strains Risch"],
        date: "",
    },
    {
        title: "COVID expert Dr. Peter McCullough urges ‘unbreakable resistance’ to vaccines for kids",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.lifesitenews.com/news/covid-expert-dr-peter-mccullogh-urges-unbreakable-resistance-to-vaccines-for-kids/",
        categories: [],
        date: "",
    },
    {
        title: "Weighing Risks, Benefits, and Medical Judgement McCullough America out Loud",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.americaoutloud.com/weighing-risks-benefits-and-medical-judgement/",
        categories: [],
        date: "",
    },
    {
        title: "Must Watch: Dr. Peter McCullough MD on Covid Early Treatment and Prevention 9/24/2021",
        image: "/assets/imgs/dummy.jpg",
        link: "https://www.youtube.com/watch?v=K-IgAxwSfzU",
        categories: [],
        date: "",
    },
    {
        title: "Must Watch: Dr.  Peter McCullough MD on Covid Early Treatment and Prevention 9/24/2021",
        image: "https://i.ytimg.com/vi_webp/K-IgAxwSfzU/hqdefault.webp",
        link: "https://www.youtube.com/embed/K-IgAxwSfzU?feature=oembed",
        categories: [],
        date: "",
    },
    {
        title: "Nurse Whistleblower: “I’m Watching Them Commit Murder”",
        image: "https://static-3.bitchute.com/live/cover_images/GHAY4kwlmiUQ/zio7WOmJm6Cu_640x360.jpg",
        link: "https://rumble.com/vn16bp-nurse-whistleblower-im-watching-them-commit-murder.html",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
    {
        title: "",
        image: "/assets/imgs/dummy.jpg",
        link: "",
        categories: [],
        date: "",
    },
];
let span = {
    left: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 16,
        xl: 16,
        xxl: 16,
    },
    right: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 8,
        xl: 8,
        xxl: 8,
    },
};
export const PrintedArchives = (props) => {
    return (
        <Col span={24}>
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                    <p><strong><a href="https://www.theatlantic.com/science/archive/2021/12/mask-guidelines-cdc-walensky/621035/">The CDC’s Flawed Case for Wearing Masks in School</a></strong></p>
                    <p><strong><a href="https://www.theatlantic.com/science/archive/2021/12/mask-guidelines-cdc-walensky/621035/">The agency’s director has said, repeatedly, that schools without mask mandates have triple the risk of COVID outbreaks. That claim is based on very shaky science.</a> PR 2 (failure of mask mandates)</strong></p>
                    <p><strong><a href="https://www.theblaze.com/news/fauci-email-francis-collins-great-barrington-declaration?utm_source=theblaze-7DayTrendingTest&amp;utm_medium=email&amp;utm_campaign=The%20Blaze%20PM%20Trending%202021-12-18&amp;utm_term=ACTIVE%20LIST%20-%207%20Day%20Engagement">NIH Director Francis Collins told Anthony Fauci there needs to be a ‘quick and devastating’ takedown of anti-lockdown declaration by ‘fringe’ Harvard, Stanford, Oxford epidemiologists: Emails PR 2 (dark forces operating on society conspiring against the population)</a></strong></p>
                    <p><strong><a href="https://dailyexpose.uk/2021/12/18/australian-senator-says-she-refuses-to-take-the-covid-19-vaccine/">Australian Senator Says She Refuses to Take the Covid-19 Vaccine</a> PR 2 (populations fighting back against governments)</strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_app/us-fda-approves-astrazeneca-amgen-drug-for-severe-asthma_4165120.html?v=ul">US FDA Approves AstraZeneca-Amgen Drug for Severe Asthma</a> PR 2 (dark forces operating on society conspiring against the population)</strong></p>
                    <p><strong><a href="https://www.studyfinds.org/covid-patients-no-symptoms/">‘Silent’ COVID twice as prevalent as feared: 4 in 10 patients have no symptoms, study warns</a> PR 2 (dark forces operating on society conspiring against the population)</strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_morningbrief/follow-the-science-a-potent-source-of-authority-for-politicians_4149874.html?utm_source=morningbriefnoe&amp;utm_medium=email&amp;utm_campaign=mb-2021-12-13&amp;mktids=eaf9818e3ea49c2add9f814ef5b738fa&amp;est=BzxvIbis5FOTjr0a4JuN0xPiZK17OIiWwS9gWulJ0PTO%2B1A7ddretFk%2B5R4%3D?utm_source=morningbriefnoe&amp;utm_medium=email_MB&amp;utm_campaign=mb-2021-12-12&amp;utm_content=News_%E2%80%98Follow_the_Science&amp;est=%5bEMAIL_SECURE_LINK%5d">‘Follow the Science’ a Potent Source of Authority for Politicians</a> PR 2 (dark forces operating on society conspiring against the population)</strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_morningbrief/pandemic-could-be-solved-quickly-if-politics-thrown-out-dr-ben-carson_4161315.html?utm_source=morningbriefnoe&amp;utm_medium=email&amp;utm_campaign=mb-2021-12-17&amp;mktids=e0b681a9ea46f28cd3563657c937b4de&amp;est=IqvaRwqSevoo8ghTYlIfNsUY4r5dLYECdpu%2B9ZHutusySEOQkdAJ5K7TrG4%3D?utm_source=morningbriefnoe&amp;utm_medium=email&amp;utm_campaign=mb-2021-08-20&amp;mktids=6915e925258a10451cc2001be2c0d771&amp;est=%5bEMAIL_SECURE_LINK%5d">Pandemic Could Be Solved Quickly If Politics Thrown Out: Dr. Ben Carson</a> PR 2</strong></p>
                    <p><strong><a href="https://dailyexpose.uk/2021/12/17/dr-peter-mccullough-warns-that-covid-19-vaccines-are-more-dangerous-than-the-virus/">Dr Peter McCullough Warns That Covid-19 Vaccines are More Dangerous Than the Virus</a> PR 2 (Vaccine adverse effects/side-effects&nbsp;and harms)&nbsp;</strong></p>
                    <p><strong><a href="https://dailyexpose.uk/2021/12/18/triple-vaccinated-account-4-in-5-covid-deaths/">Triple &amp; Double Vaccinated accounted for 4 in every 5 Covid-19 Deaths in England over the past month despite most vulnerable getting Booster in October</a> PR 2 (Vaccine adverse effects/side-effects&nbsp;and harms)</strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/hillsdale-colleges-larry-arnn-on-lockdowns-education-and-the-tyranny-of-experts_4159628.html?utm_source=morningbriefnoe&amp;utm_medium=email&amp;utm_campaign=mb-2021-08-20&amp;mktids=6915e925258a10451cc2001be2c0d771&amp;est=603K7PhMf8T2UAxY38GQgo8kRUHug6s2Lxh%2BAizkHfl5gnBkrLvq94L%2FmcI%3D">Hillsdale College’s Larry Arnn on Lockdowns, Education, and the Tyranny of Experts</a> (dark forces operating on society conspiring against the population)</strong></p>
                    <p><strong><a href="https://dailyexpose.uk/2021/12/18/nih-directors-fauci-and-collins-target-the-great-barrington-declaration/">NIH Directors Fauci and Collins Target the Great Barrington Declaration</a> PR 2 (dark forces operating on society conspiring against the population)</strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/12/new-103-us-marines-discharged-refusing-covid-vaccine/?utm_source=Email&amp;utm_medium=the-gateway-pundit&amp;utm_campaign=dailyam&amp;utm_content=daily">NEW: 103 US Marines Discharged For Refusing Covid Vaccine</a> PR 2 (dark forces operating on society conspiring against the population)</strong></p>
                    <p><strong><a href="https://www.yahoo.com/news/44-people-test-positive-covid-162014912.html">44 people test positive for COVID on Royal Caribbean Symphony of the Seas ship</a> PR 2 (vaccine failure/failed breakthrough infection/Delta/omicron)</strong></p>
                    <p><strong><a href="https://www.theblaze.com/news/biden-national-address-omicron-start-warning?utm_source=theblaze-dailyPM&amp;utm_medium=email&amp;utm_campaign=Daily-Newsletter__PM%202021-12-19&amp;utm_term=ACTIVE%20LIST%20-%20TheBlaze%20Daily%20PM">Joe Biden will issue ‘stark warning’ to unvaccinated Americans in national address on Omicron variant</a> PR 2 (dark forces operating on society conspiring against the population)</strong></p>
                    <p><strong><a href="https://americanconservatives.com/2021/12/boeing-backs-down-drops-vaccine-mandate-for-u-s-employees/">Boeing Backs Down, Drops Vaccine Mandate For U.S Employees</a> PR 2 (populations fighting back against governments)</strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-10321143/We-stop-viral-spread-COVID-end-pandemic-writes-Dr-Jay-Bhattacharya.html">We cannot stop the spread of COVID, but we CAN end the pandemic: Protect the old and vulnerable, forget lockdowns – and learn to live with the virus, writes Dr. Jay Bhattacharya, Stanford University School of Medicine professor</a> PR 2 (populations fighting back against governments)</strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/12/reminder-efficacy-chloroquine-treating-coronavirus/?utm_source=Email&amp;utm_medium=the-gateway-pundit&amp;utm_campaign=dailypm&amp;utm_content=daily">A Reminder of the Efficacy of Chloroquine in Treating Coronavirus</a> PR 2 (Early treatment success (outpatient)</strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/12/no-vax-no-food-spokane-christmas-food-pantry-requires-proof-vaccination-covid-test-get-food/?utm_source=Email&amp;utm_medium=the-gateway-pundit&amp;utm_campaign=dailyam&amp;utm_content=daily">No Vax, No Food: Spokane Christmas Food Pantry Requires Proof of Vaccination or COVID Test to Get Food</a> PR 2 (dark forces operating on society conspiring against the population)</strong></p>
                    <p><strong><a href="https://www.npr.org/sections/coronavirus-live-updates/2021/10/04/1043050072/new-zealand-acknowledges-it-can-no-longer-completely-get-rid-of-the-coronavirus">New Zealand acknowledges it can no longer completely get rid of the coronavirus</a> PR 2 (failure of lockdowns)</strong></p>
                    <p><strong><a href="https://www.americaoutloud.com/the-mrna-covid-19-vaccines-were-designed-and-manufactured-to-fail/">The mRNA Covid-19 Vaccines Were Designed and Manufactured to Fail</a> PR 2 (dark forces operating on society conspiring against the population)</strong></p>
                    <p>
                        <strong>
                            <a href="https://dailyexpose.uk/2021/12/19/uk-whistle-blower-ae-nurse-shares-the-truth-about-the-pandemic/">
                                UK Whistle-Blower – A&amp;E Nurse Shares The Truth About The “Pandemic”
                            </a>
                            (populations fighting back against governments)
                        </strong>
                    </p>
                    <p>
                        <strong>
                            <a href="https://www.npr.org/sections/goatsandsoda/2021/08/20/1029628471/highly-vaccinated-israel-is-seeing-a-dramatic-surge-in-new-covid-cases-heres-why">
                                Highly Vaccinated Israel Is Seeing A Dramatic Surge In New COVID Cases. Here’s Why
                            </a> PR 1 (vaccine failure/failed breakthrough infection/Delta/omicron)
                        </strong>
                    </p>
                    <p>
                        <strong>
                            <a href="https://trialsitenews.com/4th-child-died-in-vietnam-due-to-overreaction-from-pfizer-biontech-mrna-based-covid-19-vaccine/">
                                4th Child Died in Vietnam Due to ‘Overreaction’ from Pfizer-BioNTech mRNA-based COVID-19 Vaccine
                            </a> PR 1 (vaccine failure/failed breakthrough infection/Delta/omicron)
                        </strong>
                    </p>
                    <p>
                        <strong>
                            <a href="https://mailchi.mp/aapsonline/no-to-hr-55?e=3c2cb96855">
                                ALERT: Stop Expansion of Government Vaccine Databases
                            </a> PR 2 (populations fighting back against governments)
                        </strong>
                    </p>
                    <p>
                        <strong>
                            <a href="https://www.lewrockwell.com/2021/12/no_author/what-they-are-not-telling-you-about-covid-19-hospitalizations-deaths-and-what-you-can-do-about-it/">
                                A PREVALENT BUT UNMENTIONED MEGA-VIRUS APPEARS TO CAUSE THE HOSPITALIZATIONS &amp; DEATHS THAT ARE ATTRIBUTED TO COVID-19 CORONAVIRUS? PR 2
                            </a> (COVID basics, COVID politics)
                        </strong>
                    </p>
                    <p>
                        <strong>
                            <a href="https://www.theepochtimes.com/mkt_breakingnews/virginia-hospital-found-in-contempt-of-court-for-not-giving-patient-prescribed-ivermectin_4156904.html?utm_source=newsnoe&amp;utm_medium=email&amp;utm_campaign=breaking-2021-12-15-1&amp;mktids=ec6b20b9281c4f7aa7189abb896a1cbb&amp;est=RU9WwdUoccRnlUmdbs8ovmSg5%2B%2BofAh6UnBz8NXYJq0Av0LkCRTEnH0COcAAq%2FBD">
                                Virginia Hospital Allows COVID Patient to Get Ivermectin After Court Holds It in Contempt: Family
                            </a> PR 2 (populations fighting back against governments)
                        </strong>
                    </p>
                    <p><strong><a href="https://brownstone.org/articles/79-research-studies-affirm-naturally-acquired-immunity-to-covid-19-documented-linked-and-quoted/">139 Research Studies Affirm Naturally Acquired Immunity to Covid-19: Documented, Linked, and Quoted</a> PR 2 (populations fighting back against governments)</strong></p>
                    <p><strong><a href="https://www.reuters.com/world/refugees-lack-covid-shots-because-drugmakers-fear-lawsuits-documents-2021-12-16/">Refugees lack COVID shots because drugmakers fear lawsuits, documents show</a> (dark forces operating on society conspiring against the population)</strong></p>
                    <p><strong><a href="https://nationalpost.com/news/canada/canadians-hitting-outer-limits-of-what-public-health-restrictions-theyll-accept-kenney-says">Canadians hitting ‘outer limits’ of what public-health restrictions they’ll accept, Kenney says</a> PR 2 (populations fighting back against governments)</strong></p>
                    <p><strong><a href="https://abcnews.go.com/Business/wireStory/senate-aims-reject-bidens-vaccine-mandate-businesses-81636502">Senate rejects Biden’s vaccine mandate for businesses PR 2 (populations fighting back against governments)</a></strong></p>
                    <p><strong><a href="https://www.zerohedge.com/political/youtube-censors-bombshell-joe-rogan-interview-cardiologist-peter-mccullough?utm_source=&amp;utm_medium=email&amp;utm_campaign=362">YouTube Censors Bombshell Joe Rogan Interview With Cardiologist Peter McCullough</a> PR 2 smear/slander of doctors and scientists/censorship&nbsp;</strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/bidens-health-care-worker-covid-19-vaccine-mandate-now-blocked-in-texas_4163332.html?utm_source=newsnoe&amp;utm_campaign=breaking-2021-12-17-1&amp;utm_medium=email">Biden’s Health Care Worker COVID-19 Vaccine Mandate Now Blocked in Texas</a> PR 2 (vaccine/mask mandate litigation/patents)</strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/12/readycdc-panel-raises-concerns-vaccine-induced-myocarditis-children-age-5-11-8-confirmed-cases-quickly-show-vaers-less-2-months-jab-approved-age-group/?utm_source=Gab&amp;utm_campaign=websitesharingbuttons">CDC Panel Raises Concerns Over Vaccine-Induced Myocarditis in Children Age 5-11 Who Received Pfizer COVID Vaccine</a> PR 2 (vaccine failure/failed breakthrough infection/Delta/omicron)</strong></p>
                    <p><strong><a href="https://dailyexpose.uk/2021/12/17/dr-mike-yeadon-the-scientific-tyranny-is-permanent-totalitarian-and-its-nearly-here-its-up-to-us-to-stop-it/">Dr. Mike Yeadon: The Scientific Tyranny is Permanent, Totalitarian and it’s nearly here, it’s up to us to stop it</a> PR 2 (dark forces operating on society conspiring against the population)</strong></p>
                    <p><strong><a href="https://www.latimes.com/california/story/2021-01-12/children-apologizing-to-parents-grandparents-spreading-coronavirus-into-families-as-l-a-county-reels">Children apologize to their dying elders for spreading COVID-19 as L.A. County reels</a> PR 2 (dark forces operating on society conspiring against the population)</strong></p>
                    <p><strong><a href="https://dailyexpose.uk/2021/12/17/people-going-blind-after-getting-covid-vaccine/">Why are so many people going Blind after getting the Covid-19 Vaccine?</a> PR 2 (Vaccine adverse effects/side-effects&nbsp;and harms)</strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/federal-judges-slap-down-the-biden-administration-hard_4150217.html?utm_medium=email&amp;utm_source=opinionia&amp;utm_campaign=opinionia-2021-12-12">Federal Judges Slap Down the Biden Administration—Hard</a> PR 2 (vaccine/mask mandate litigation/patents)</strong></p>
                    <p><strong><a href="https://dailyexpose.uk/2021/11/30/huge-increase-in-ovarian-cancer-and-new-born-deaths-covid-jab/">Official Data shows huge increase in cases of Ovarian Cancer, and Deaths of New-Born Babies have hit Critical Levels; are the Covid-19 Vaccines to blame?</a> PR 2 (vaccine damaging immune system)&nbsp;</strong></p>
                    <p><strong><a href="https://dailyexpose.uk/2021/12/12/japan-places-warning-on-covid-vaccines/">Japan Places Warning on COVID ‘Vaccines</a> PR 2 (vaccine/mask mandate litigation/patents)</strong></p>
                    <p><strong><a href="https://www.theblaze.com/news/judge-holds-hospital-in-contempt-of-court-for-refusing-ivermectin-covid-patient?utm_source=theblaze-breaking&amp;utm_medium=email&amp;utm_campaign=20211214Trending-JudgeIvermectin&amp;utm_term=ACTIVE%20LIST%20-%20TheBlaze%20Breaking%20News">Judge holds hospital in contempt of court for refusing ivermectin to COVID patient on ventilator, ignoring court order</a> PR 2 (early treatment success)</strong></p>
                    <p><strong><a href="https://dailyexpose.uk/2021/12/12/prof-sucharit-bhakdi-the-vaccines-do-not-work-and-the-fear-is-they-will-cause-a-massive-self-to-self-attack/">Prof. Sucharit Bhakdi: The Vaccines Do Not Work and The Fear Is They Will Cause a Massive Self-To-Self Attack PR 2</a> (vaccine failure/failed breakthrough infection/Delta/omicron)</strong></p>
                    <p><strong><a href="https://dailyexpose.uk/2021/12/12/rapid-vitamin-d-delivery-may-result-in-better-covid-outcomes/">Rapid Vitamin D Delivery May Result in Better Covid Outcomes</a> PR 2 (early treatment success)</strong></p>
                    <p><strong><a href="https://www.lewrockwell.com/2021/12/martin-armstrong/top-cardiologist-warns-of-deadly-vaccine-induced-myocarditis-in-children/">Top Cardiologist Warns of Deadly Vaccine Induced Myocarditis in Children</a> PR 2 (myocarditis)&nbsp;</strong></p>
                    <p><strong><a href="https://www.lewrockwell.com/2021/12/no_author/fda-now-wants-75-years-to-release-pfizer-vaccine-documents/">FDA Now Wants 75 Years to Release Pfizer Vaccine Documents</a> PR 2 (dark forces operating on society)</strong></p>
                    <p><strong><a href="https://www.theatlantic.com/ideas/archive/2021/12/where-i-live-no-one-cares-about-covid/620958/">Where I Live, No One Cares About COVID PR 2 (populations fighting back against governments)</a></strong></p>
                    <p><strong><a href="https://www.theatlantic.com/ideas/archive/2021/12/where-i-live-no-one-cares-about-covid/620958/">Outside the world inhabited by the professional classes in a handful of major metropolitan areas, many Americans are leading their lives as if COVID is over. PR 2 (populations fighting back against governments)</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/human-fat-cells-host-ccp-virus-dramatic-inflammatory-response-preprint-study_4152593.html?utm_source=morningbriefnoe&amp;utm_medium=email_MB&amp;utm_campaign=mb-2021-12-12&amp;utm_content=News_Human_Fat_Cells&amp;est=c%2BPftO1IG%2FZwNvMF8jTfL5fsTNKprCcvP6K%2FEt%2FkmAUjo8UwHsYXpn37pz0%3D">Human Fat Cells Host CCP Virus, ‘Dramatic Inflammatory Response’</a>: Preprint Study PR 2 (underlying risk factor for COVID)</strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/south-africa-sees-downward-trend-in-covid-19-cases-despite-conducting-more-tests_4152488.html?utm_source=morningbriefnoe&amp;utm_medium=email_MB&amp;utm_campaign=mb-2021-12-12&amp;utm_content=News_South_Africa_Sees&amp;est=lZcFAsOXccExalqVE%2BuNOIQu9ARJOI602%2FdBZIH3JZ%2Bwc000R2lu4L9ATuE%3D">South Africa Sees Downward Trend in COVID-19 Cases Despite Conducting More Tests</a> PR 2 Study (natural/innate immunity)</strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/uk-confirms-first-death-with-omicron-covid-19-variant_4154043.html?utm_content=News_UK_Confirms_1st?utm_medium=email_BN&amp;utm_source=newsnoe&amp;utm_campaign=EET_BreakingNews_12-13-2021-noe-Canada-free-sub-1&amp;est=elias98_99%40yahoo.com">UK Confirms 1st Death With Omicron COVID-19 Virus Variant</a> PR 2 (vaccine failure/failed breakthrough infection/Delta/omicron)</strong></p>
                    <p><strong><a href="https://citizenfreepress.com/breaking/soccer-vaccine-coincidence/">Soccer player Vaccine coincidence</a>…PR 2 (vaccine safety)</strong></p>
                    <p><strong><a href="https://dailyexpose.uk/2021/12/13/as-many-as-123000-nhs-health-and-social-care-staff-may-choose-to-resign-rather-than-take-the-jab/">As Many As 123,000 NHS, Health and Social Care Staff May Choose to Resign Rather Than Take the Jab</a> PR 2 (vaccine safety)</strong></p>
                    <p><strong><a href="https://dailyexpose.uk/2021/12/13/israel-says-covid-19-vaccine-booster-shots-will-be-needed-forever/">Israel Says Covid-19 Vaccine Booster Shots Will Be Needed FOREVER</a> PR 2 (vaccine failure/failed breakthrough infection/Delta/omicron)</strong></p>
                    <p><strong><a href="https://www.theblaze.com/op-ed/horowitz-now-we-know-why-the-establishment-has-always-opposed-early-treatment">Horowitz: Now we know why the establishment has always opposed early treatment</a> PR 2 (early treatment success)</strong></p>
                    <p><strong><a href="https://dailyexpose.uk/2021/12/13/taiwan-79-of-covid-cases-are-people-who-are-vaccinated/">Taiwan: 79% of Covid Cases Are People Who Are “Vaccinated</a>” PR 2 (vaccine failure/failed breakthrough infection/Delta/omicron)<a href="https://ca.finance.yahoo.com/news/omicron-variant-caseload-expected-rapidly-190346053.html">Omicron variant caseload expected to ‘rapidly escalate’ in the coming days, Tam says</a> PR 2 (vaccine failure/failed breakthrough infection/Delta/omicron)</strong></p>
                    <p><strong><a href="https://www.juliusruechel.com/2021/12/a-half-truth-is-whole-lie-omicron.html">“A Half Truth is a Whole Lie”: The Omicron Variant, Cross-Reactive Immunity, and the Manufactured Illusion of an Unprecedented Virus</a>&nbsp;</strong></p>
                    <p><strong><a href="https://www.npojip.org/english/MedCheck/Med%20Check%20Tip-20-2021-08&amp;12.pdf">Med Check Japan</a>&nbsp;</strong></p>
                    <p><strong><a href="https://www.cnbc.com/2021/12/08/omicron-pfizer-ceo-says-we-may-need-fourth-covid-vaccine-doses-sooner-than-expected.html">Pfizer CEO says fourth Covid vaccine doses may be needed sooner than expected due to omicron</a>&nbsp;</strong></p>
                    <p><strong><a href="https://www.westernjournal.com/cdc-announces-79-us-omicron-cases-occurred-vaccinated-individuals/">CDC Announces 79% of All US Omicron Cases Have Occurred in Vaccinated Individuals</a>&nbsp;</strong></p>
                    <p><strong><a href="https://www.wnd.com/2021/12/austrians-beg-help-unvaccinated-face-1-year-prison/">Austrians beg for help: ‘Unvaccinated’ to face 1 year in prison</a>&nbsp;</strong></p>
                    <p><strong><a href="https://www.newsmax.com/health/health-news/fda-vaccinedata-pfizer-75-years/2021/12/08/id/1047876/"><span lang="en-US">FDA Says It’ll Take 75 Years to Fully Release Pfizer Vaccine Data</span><span lang="en-US">&nbsp;</span></a></strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-10299669/Thousands-protesters-march-Vienna-furious-demonstration-against-compulsory-Covid-jabs.html">Tens of thousands of protesters march through Vienna with ‘No to vaccine fascism’ signs in furious demonstration against compulsory COVID shots</a>&nbsp;</strong></p>
                    <p><strong><a href="https://www.westernjournal.com/fauci-uses-santa-prop-vaccine-promotion-makes-ridiculous-statement-media/">Fauci Uses Santa as Prop for Vaccine Promotion, Makes This Ridiculous Statement to the Media</a>&nbsp;</strong></p>
                    <p><strong><a href="https://www.militarytimes.com/news/pentagon-congress/2021/12/10/pentagon-considering-covid-booster-mandate-for-all-troops/">Pentagon considering COVID booster mandate for all troops</a>&nbsp;</strong></p>
                    <p><strong><a href="https://www.kbtx.com/2021/12/09/texas-am-univeristy-system-ends-vaccine-mandate-federal-contractors/">Texas A&amp;M University System ends vaccine mandate for federal contractors</a>&nbsp;</strong></p>
                    <p><strong><a href="https://joelshirschhorn.substack.com/p/special-report-two-ivermectin-success?justPublished=true">Special Report: Two ivermectin success stories</a>&nbsp;</strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/12/12/outpatient-treatments-for-covid-19-reviewed.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1HL&amp;cid=20211212_HL2&amp;mid=DM1064420&amp;rid=1348530980">Outpatient Treatments for COVID-19 Reviewed</a>&nbsp;</strong></p>
                    <p><strong><a href="https://dailyexpose.uk/2021/12/09/four-reasons-why-vaccine-passports-will-not-work/">Four reasons why Vaccine Passports do not and will not work</a>&nbsp;</strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/covid-vaccines-shingles-immune-system-detoxification/?utm_source=salsa&amp;eType=EmailBlastContent&amp;eId=1a230901-0343-4ff3-9870-3a7e62dde1f9">Vaccines Are Sabotaging the Immune System. Shingles May Hold Some Answers</a>.&nbsp;</strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/covid-nw-most-vaccinated-state-has-largest-covid-surge-since-beginning-of-pandemic/?utm_source=salsa&amp;eType=EmailBlastContent&amp;eId=1a230901-0343-4ff3-9870-3a7e62dde1f9">Vermont Seeing Largest COVID Surge of Pandemic, Despite 74% of Residents Vaccinated</a>&nbsp;</strong></p>
                    <p><strong><a href="https://pubs.acs.org/doi/10.1021/acs.jpclett.1c03380">Mechanisms of SARS-CoV-2 Evolution Revealing Vaccine-Resistant Mutations in Europe and America</a>&nbsp;</strong></p>
                    <p><strong><a href="https://ambassadorlove.wordpress.com/2021/12/08/covid-19-patent-horrors/">Covid-19 Patent Horrors</a>&nbsp;</strong></p>
                    <p><strong><a href="https://rescue.substack.com/p/the-despicable-defamation-of-a-lifesaving?token=eyJ1c2VyX2lkIjozMTY3MTA2OCwicG9zdF9pZCI6NDUxODkzMTgsIl8iOiJVNXFnNCIsImlhdCI6MTYzOTA2MDkxNCwiZXhwIjoxNjM5MDY0NTE0LCJpc3MiOiJwdWItNDE4Mjc1Iiwic3ViIjoicG9zdC1yZWFjdGlvbiJ9.tuASvlV_-JHIY247yPw1qhB7B0yqoYx42KhR83a7A-A">The Despicable Defamation of a Lifesaving Doctor</a>&nbsp;</strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/29-us-states-have-confirmed-omicron-variant-cases-most-among-vaccinated_4152127.html?utm_source=newsnoe&amp;utm_medium=email&amp;utm_campaign=breaking-2021-12-12-1&amp;mktids=2364855efcfd1912bc6a8f4043005d42&amp;est=kHexlgzTJmyJl9TXriF%2BpuyGYDacaKAxLiU2FkTWNUa8eV38rWWirN6ONRPApZum">29 US States Have Confirmed Omicron Variant Cases, Most Among Vaccinated</a>&nbsp;</strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/natural-immunity-more-protective-over-time-than-covid-19-vaccination-study_4149953.html?utm_source=newsnoe&amp;utm_medium=email&amp;utm_campaign=breaking-2021-12-10-2&amp;mktids=f8b6cc6f7d710d6fa53e722520e41e38&amp;est=qACvMCEGu4Su7n4QvBBNhyCQo8YVAiYkHQ2%2FNqo%2Bt2Wbl%2BJjbNZB%2BCjWmjjGc8Lu">Natural Immunity More Protective Over Time Than COVID-19 Vaccination: Study</a>&nbsp;</strong></p>
                    <p><strong><a href="https://thepostmillennial.com/watch-ontario-top-doctor-says-province-will-review-what-it-means-to-be-fully-vaccinated-due-to-omicron-fears?utm_source=MC%20Import&amp;utm_medium=deployer&amp;utm_campaign=Canadian%20News%20Daily&amp;utm_term=297">Ontario top doctor says province will review what it means to be ‘fully vaccinated’ due to Omicron fears</a> )</strong></p>
                    <p><strong><a href="https://www.geezie.us/health/how-a-wisconsin-wedding-with-super-responsible-vaccinated-people-led-to-outbreak/">How a Wisconsin wedding with ‘super responsible’ vaccinated people led to outbreak</a>&nbsp;</strong></p>
                    <p><strong><a href="https://ca.yahoo.com/news/covid-19-omicron-travel-warning-who-190836205.html">COVID-19 Omicron travel warning: 60 or over? Postpone your international holiday plans, WHO warns</a>&nbsp;</strong></p>
                    <p><strong><a href="https://s3.amazonaws.com/media2.fairhealth.org/whitepaper/asset/Risk%20Factors%20for%20COVID-19%20Mortality%20among%20Privately%20Insured%20Patients%20-%20A%20Claims%20Data%20Analysis%20-%20A%20FAIR%20Health%20White%20Paper.pdf"><span lang="en-US">Risk Factors for COVID-19 Mortality among Privately Insured Patients</span></a><span lang="en-US">&nbsp;</span></strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/12/pennsylvania-state-supreme-court-strikes-school-mask-mandate/?utm_source=Email&amp;utm_medium=the-gateway-pundit&amp;utm_campaign=dailyam&amp;utm_content=daily">Pennsylvania State Supreme Court Strikes Down School Mask Mandate</a>&nbsp;</strong></p>
                    <p><strong><a href="https://rairfoundation.com/alert-japan-places-myocarditis-warning-on-vaccines-requires-informed-consent/">Alert: Japan Places Myocarditis Warning on ‘Vaccines’ – Requires Informed Consent</a>&nbsp;</strong></p>
                    <p><strong><a href="https://www.independent.co.uk/news/health/omicron-milder-delta-signs-south-africa-b1974206.html"><span lang="en-US">South African doctors suggest omicron Covid is milder and more contagious than delta</span></a><span lang="en-US">&nbsp;</span></strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/omicron-pfizer-fauci-cdc-eye-new-definition-fully-vaccinated/?utm_source=salsa&amp;eType=EmailBlastContent&amp;eId=1a230901-0343-4ff3-9870-3a7e62dde1f9">4 Shots Likely Needed to Fight Omicron, Pfizer Says as Fauci, CDC Eye New Definition of ‘Fully Vaccinated’</a>&nbsp;</strong></p>
                    <p><strong><a href="https://dailyexpose.uk/2021/12/10/brazil-two-babies-hospitalised-after-being-injected-with-pfizers-covid-19-vaccine/">Brazil: Two Babies Hospitalised After Being Injected With Pfizer’s Covid-19 Vaccine</a>&nbsp;</strong></p>
                    <p lang="en-CA"><strong><a href="https://www.zerohedge.com/covid-19/explosion-new-heart-conditions-dismissed-post-pandemic-stress-disorder?utm_source=&amp;utm_medium=email&amp;utm_campaign=334">Explosion In New Heart Conditions Dismissed As “Post Pandemic Stress Disorder”</a> </strong></p>
                    <p lang="en-CA"><strong><a href="https://www.theepochtimes.com/covid-19-vaccine-mandates-should-be-absolute-last-resort-who_4144517.html?utm_source=morningbriefnoe&amp;utm_medium=email_MB&amp;utm_campaign=mb-2021-12-07&amp;utm_content=News_COVID-19_Vaccine_Mandates&amp;est=QAMJlH%2BA9fQOpzMzLLKtOLThALvsJLv%2FjXOcG3ehPxiG2WK20nh1aUtMCum2m6DM?utm_source=morningbriefnoe&amp;utm_medium=email_MB&amp;utm_campaign=mb-2021-12-07&amp;utm_content=News_COVID-19_Vaccine_Mandates&amp;est=%5BEMAIL_SECURE_LINK%5D">COVID-19 Vaccine Mandates Should Be ‘Absolute Last Resort’</a></strong></p>
                    <p lang="en-CA"><strong><a href="https://dailyexpose.uk/2021/12/07/polands-nuremberg-2-0-project-has-been-launched/">Poland’s Nuremberg 2.0 Project Has Been Launched</a> </strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/media-sen-ron-johnson-fauci-hiv-danger/?utm_source=salsa&amp;eType=EmailBlastContent&amp;eId=85d6997c-d0f8-4f5d-994d-da9d99232eeb">Media Lambastes Sen. Ron Johnson for Speaking Truth: Yes, Fauci Did ‘Overhype’ Danger of HIV</a> </strong></p>
                    <p><strong><a href="https://www.theburningplatform.com/2021/11/13/vaers-covid-vaccine-data-show-surge-in-reports-of-serious-injuries-as-5-year-olds-start-getting-shots/">VAERS COVID Vaccine Data Show Surge in Reports of Serious Injuries, as 5-Year-Olds Start Getting Shots</a> </strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/greece-covid-vaccine-mandate-senior-citizens/?utm_source=salsa&amp;eType=EmailBlastContent&amp;eId=85d6997c-d0f8-4f5d-994d-da9d99232eeb"><span lang="en-US">Amid Tangle of Corruption, Greece Imposes COVID Vaccine Mandate on People 60 and Older</span></a><span lang="en-US"> </span></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/12/08/covid-vaccines-cause-miscarriage.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1HL&amp;cid=20211208&amp;mid=DM1061299&amp;rid=1344721304">Miscarriages and Other Tragic Side Effects of the mRNA Shots</a> </strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/nih-no-documents-available-on-removal-of-gain-of-function-definition-from-website_4147680.html?utm_content=News_NIH:_No_Documents?utm_medium=email_BN&amp;utm_source=newsnoe&amp;utm_campaign=EET_BreakingNews_12-09-2021-noe-Canada-free-sub-1&amp;est=elias98_99%40yahoo.com">NIH: No Documents Available on Removal of ‘Gain-of-Function’ Definition From Website</a> </strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/11/report-fully-vaccinated-account-81-covid-deaths-uk/">Report: The Fully Vaccinated Account for 81% of the COVID Deaths in the UK</a> </strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/sub-saharan-africa-low-rate-infection-death-covid/?utm_source=salsa&amp;eType=EmailBlastContent&amp;eId=85d6997c-d0f8-4f5d-994d-da9d99232eeb">Africa Has 17.46% of World’s Population, Only 3% of World’s COVID Deaths. Scientists Want to Know Why.</a> </strong></p>
                    <p><strong><a href="https://dailyexpose.uk/2021/12/07/american-toxicologist-calls-for-an-immediate-halt-to-covid-injections-due-to-multiple-safety-concerns/">American Toxicologist Calls for An Immediate Halt to Covid Injections Due to Multiple Safety Concerns</a> </strong></p>
                    <p><strong><a href="https://dailytelegraph.co.nz/news/pfizer-document-concedes-that-there-is-a-large-increase-in-types-of-adverse-event-reaction-to-its-vaccine/"><span lang="en-US">GUY HATCHARD: PFIZER DOCUMENT CONCEDES THAT THERE IS A LARGE INCREASE IN TYPES OF ADVERSE EVENT REACTION TO ITS VACCINE</span></a><span lang="en-US"> </span></strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/covid-nw-fully-vaccinated-oregon-residents-died-half-received-pfizer-vaccine/">552 Fully Vaccinated Oregon Residents Died of COVID, Half Received Pfizer Vaccine + More</a> </strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/fauci-when-not-if-definition-of-fully-vaccinated-will-change_4146012.html?utm_source=newsnoe&amp;utm_medium=email&amp;utm_campaign=breaking-2021-12-08-4&amp;mktids=067d64d60c4ea8e1a6896f29633f9243&amp;est=EjM0Bd0OGftscZwmDlWhHKxnxlEsg0ahSErU4qhKC5Vx2PjkGb%2FW4%2Bkl7Az4LjV%2B">Fauci: Definition of Fully Vaccinated Will Be Changed</a> </strong></p>
                    <p><strong>3<a href="https://report24-news.translate.goog/32-jaehriger-basketball-star-starb-ploetzlich-und-unerwartet-nach-schlaganfall/?_x_tr_sl=auto&amp;_x_tr_tl=en&amp;_x_tr_hl=en&amp;_x_tr_pto=nui">2-year-old basketball star died “suddenly and unexpectedly” after a stroke</a> </strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/cdc-data-natural-immunity-covid/">CDC Forced to Admit It Doesn’t Collect Data on Natural Immunity to COVID</a> </strong></p>
                    <p><strong><a href="https://www.theguardian.com/world/2021/nov/29/covid-booster-jabs-to-be-offered-to-all-uk-adults-after-three-month-gap">UK’s minimum gap for Covid booster jabs to be halved to three months</a> </strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/12/australian-football-player-diagnosed-pericarditis-receiving-first-pfizer-shot-team-director-quits-slams-leagues-forceful-jab-policy-video/?utm_source=Email&amp;utm_medium=the-gateway-pundit&amp;utm_campaign=dailyam&amp;utm_content=daily">Australian Football Player Diagnosed with Pericarditis After Receiving First Pfizer Shot – Team Director Quits and Slams Leagues “Forceful” Jab Policy (VIDEO)</a> </strong></p>
                    <p><strong><a href="https://thepostmillennial.com/70-percent-of-canadians-want-the-unvaccinated-fired-from-their-jobs-poll">70 percent of Canadians want the unvaccinated fired from their jobs: Poll</a> </strong></p>
                    <p><strong><a href="https://dailyexpose.uk/2021/12/08/fully-vaccinated-passengers-and-crew-contract-covid-19-on-cruise-ship/">Fully Vaccinated Passengers and Crew Contract Covid-19 on Cruise Ship</a> </strong></p>
                    <p><strong><a href="https://dailyexpose.uk/2021/12/08/bad-batch-covid-vaccine-killing-children-west-midlands/">Is a bad batch of the Pfizer Covid Vaccine causing Children to “Die Suddenly” in the West Midlands of England?</a> </strong></p>
                    <p><strong><a href="https://rumble.com/vqgdfd-tpc-641-dianne-andrews-vaccines-borders-elections.html">TPC #641: Dianne Andrews (Vaccines, Borders, Elections)</a> </strong></p>
                    <p><strong><a href="https://edition.cnn.com/2021/12/08/health/pfizer-omicron-vaccine-data/index.html">Protection against Omicron coronavirus variant improves with three vaccine doses, Pfizer says</a></strong><span style="font-family: Garamond, serif;"><span style="font-size: medium;"> </span></span></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/11/pfizer-ceo-says-likely-scenario-annual-revaccination-covid-video/?utm_source=Email&amp;utm_medium=the-gateway-pundit&amp;utm_campaign=dailypm&amp;utm_content=daily">Pfizer CEO Says “Most Likely Scenario” is “Annual Revaccination” Against Covid (VIDEO)</a> </strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/naturally-immune-people-at-little-risk-of-reinfection-severe-disease-from-covid-19-study_4126747.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-11-27-3&amp;mktids=b837377253e317707e36492838051765&amp;est=wsaX%2FZyit2D3dvMIKtdT1krTRosa9j3nV2KPjEQmFh1nnuJhMn1UIsaPIrPfT43o">Naturally Immune People at Little Risk of Reinfection, Severe Disease From COVID-19: Study</a> </strong></p>
                    <p><strong><a href="https://dailyexpose.uk/2021/11/27/only-the-fully-vaccinated-should-fear-the-new-variant/">Only the Fully Vaccinated should fear the New “Worst Ever” Covid-19 Variant; data shows they already account for 4 in every 5 Covid Deaths</a> </strong></p>
                    <p><strong><a href="https://report24-news.translate.goog/franzoesischer-top-infektiologe-fordert-lockdown-fuer-alle-geimpften/?_x_tr_sl=auto&amp;_x_tr_tl=en&amp;_x_tr_hl=en&amp;_x_tr_pto=nui">French top infectiologist calls for lockdown for all vaccinated</a> </strong></p>
                    <p><strong><a href="https://johnplatinumgoss.com/2021/11/28/bbc-deaf-to-debate-blind-to-reason/">BBC – deaf to debate, blind to&nbsp;reason</a> </strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/florida-reports-lowest-daily-covid-19-cases-per-capita-in-us_4127566.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-11-28-4&amp;mktids=e9456ec2dced0d915f09cc3be3f4b2f1&amp;est=7b5v97c6A60fLwULNnrrbAgu41iSwBtXW3ghIGMxS268AFidoDdJmH9d3UbWgxil">Florida Reports Lowest Daily COVID-19 Cases per Capita in</a> </strong></p>
                    <p><strong><a href="https://theconservativetreehouse.com/blog/2021/11/27/explosive-interview-uk-cardiologist-highlights-link-between-mrna-vaccines-and-heart-disease-while-noting-researchers-withholding-data-fearful-of-losing-funding/"><span lang="en-US">Dr. Aseem Malhotra exposes a link between mRNA vaccines and heart disease</span></a><span lang="en-US"> </span></strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/11/dr-fauci-says-omicron-variant-likely-already-us-claims-vaccines-will-contain-emerging-variant-video/?utm_source=Email&amp;utm_medium=the-gateway-pundit&amp;utm_campaign=dailypm&amp;utm_content=daily">Dr. Fauci Says Omicron Variant Likely Already in US, Claims Vaccines will ‘Contain’ Emerging Variant (VIDEO)</a> </strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/11/south-african-medical-association-debunks-global-hysteria-says-omicron-variant-symptoms-unusual-mild-even-says-no-reason-panic/">South African Medical Association Debunks Global Hysteria – Says Omicron Variant Symptoms ‘Unusual But Mild’ – Even WHO Says No Reason to Panic</a> </strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/11/former-physician-president-comes-mev-midterm-election-variant-democrats-need-excuse-mail-voting-will-anything-cheat/">Former Physician to the President: Here Comes the MEV – Midterm Election Variant – Democrats Need Excuse for Mail-in Voting, Will Do Anything to Cheat</a> </strong></p>
                    <p><strong><a href="https://aaronkheriaty.substack.com/p/on-the-rise-of-our-technocratic-biosecurity?token=eyJ1c2VyX2lkIjoxMjA2NDA1NCwicG9zdF9pZCI6NDE1ODcyOTIsIl8iOiI5TmVzSyIsImlhdCI6MTYzODI4NDUyNSwiZXhwIjoxNjM4Mjg4MTI1LCJpc3MiOiJwdWItNDkxNjEwIiwic3ViIjoicG9zdC1yZWFjdGlvbiJ9.MN_aSrKHuJm9L4J2rHFLedOCq-bUAQDsE2WGIbBkAbo">On the Rise of Our Technocratic Biosecurity Surveillance Regime</a> </strong></p>
                    <p><strong><a href="https://www.yahoo.com/news/organ-transplant-patients-risk-covid-173810899.html">Organ transplant patients are at risk from covid, but some donors and recipients are fighting vaccination requirements</a> </strong></p>
                    <p><strong><a href="https://www.lewrockwell.com/2021/11/vasko-kohlmayer/hard-data-shows-the-covid-vaccines-dont-work/">Hard Data Shows the Covid Vaccines Don’t Work</a> </strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/11/30/covid-vaccine-acute-coronary-syndrome.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1HL&amp;cid=20211130&amp;mid=DM1055043&amp;rid=1337205464">mRNA Vaccines Put You at Risk for Acute Coronary Syndrome</a> </strong></p>
                    <p><strong><a href="https://www.zerohedge.com/covid-19/omicron-extremely-mild-says-doctor-who-first-discovered-strain-numerous-mutations?utm_source=&amp;utm_medium=email&amp;utm_campaign=311">Omicron Is “Extremely Mild” Says Doctor Who First Discovered Strain; Numerous Mutations “Destabilize” The Virus</a> </strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/covid-19-infections-among-vaccinated-more-common-and-severe-in-immunocompromised-study_4130766.html?utm_content=News_COVID-19_Infections_Among?utm_medium=email_BN&amp;utm_source=newsnoe&amp;utm_campaign=EET_BreakingNews_11-30-2021-noe-Canada-free-sub-1&amp;est=elias98_99%40yahoo.com">COVID-19 Infections Among Vaccinated More Common, Severe in Immunocompromised:</a> Study </strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/11/desantis-said-florida-wont-lock-media-driven-hysteria-omicron-variant/?utm_source=Email&amp;utm_medium=the-gateway-pundit&amp;utm_campaign=dailyam&amp;utm_content=daily">DeSantis Said Florida Won’t Lock Down Over ‘Media-Driven Hysteria’ About Omicron Variant</a> </strong></p>
                    <p><strong><a href="https://www.thedailybeast.com/greece-to-fine-unvaccinated-dollar115-a-month-until-they-get-jab">Greece to Fine Unvaccinated $115 a Month Until They Get Jab</a> </strong></p>
                    <p><strong><a href="https://c19vitamind.com/">Vitamin D for COVID 19</a> </strong></p>
                    <p><strong><a href="https://www.kentucky.com/news/politics-government/article256230412.html">Judge in Ky. blocks federal contractor vaccine mandate, granting AG Cameron’s request</a> </strong></p>
                    <p><strong><a href="https://100percentfedup.com/md-catholic-priest-no-earthly-king-or-president-or-public-health-official-or-billionaire-technocrat-gets-to-dictate-what-we-must-put-into-our-bodies-into-these-temples-of-the-holy-spirit-vide/">MD Catholic Priest: “No earthly king, or president or public health official or billionaire technocrat gets to dictate what we MUST put into our bodies…into these temples of the Holy Spirit” [VIDEO]</a> </strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/11/sweden-get-covid-vaccine-passport-chip-hand-video/?utm_source=Email&amp;utm_medium=the-gateway-pundit&amp;utm_campaign=dailypm&amp;utm_content=daily">Sweden: Get Your Covid Vaccine Passport in a Chip in Your Hand (VIDEO)</a> </strong></p>
                    <p><strong><a href="https://notesfromthesocialclinic.org/the-importance-of-knowing-the-ct-value-at-which-covid-pcr-tests-are-positive-long-version/">The Importance of Knowing the Ct Value at which COVID PCR Tests are Positive—Long Version</a> </strong></p>
                    <p><strong><a href="https://www.msn.com/en-us/health/medical/this-is-not-a-pandemic-of-the-unvaccinated/ar-AARiXud?ocid=ientp">This is not a pandemic of the unvaccinated</a> </strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/un-jabbed-toronto-paramedic-says-vax-mandate-has-caused-critical-shortage-of-ambulances/">Un-jabbed Toronto paramedic says vax mandate has caused critical shortage of ambulances</a> </strong></p>
                    <p><strong><a href="https://www.youtube.com/watch?v=pyPjAfNNA-U">Perspectives on the Pandemic | “Blood Clots and Beyond” | Episode 15</a> </strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/11/go-two-omicron-infected-individuals-arrive-australia-victims-fully-vaccinated/?utm_source=Email&amp;utm_medium=the-gateway-pundit&amp;utm_campaign=dailypm&amp;utm_content=daily">Here We Go… Two Omicron-Infected Individuals Arrive in Australia – Both Victims are FULLY VACCINATED</a> </strong></p>
                    <p><strong><a href="https://amgreatness.com/2021/11/29/the-madness-of-anthony-fauci/">The Madness of Anthony Fauci</a></strong><span style="font-family: Garamond, serif;"><span style="font-size: medium;"> </span></span></p>
                    <p><strong><a href="https://mises.org/wire/low-vaccination-rates-africas-covid-deaths-remain-far-below-europe-and-us">With Low Vaccination Rates, Africa’s Covid Deaths Remain Far below Europe and the US</a> </strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-10238113/New-Botswana-variant-32-horrific-mutations-evolved-Covid-strain-EVER.html">New Botswana variant with 32 ‘horrific’ mutations is the most evolved Covid strain EVER and could be ‘worse than Delta’ — as expert says it may have emerged in an HIV patient</a> </strong></p>
                    <p><strong><a href="https://www.globalresearch.ca/war-unvaccinated-desperate-attempt-demonize-destroy-control-group/5762565">The War on the ‘Unvaccinated’ Is a Desperate Attempt to Demonize and Destroy the Control Group</a> </strong></p>
                    <p><strong><a href="https://dailyexpose.uk/2021/11/25/11-times-more-deaths-due-to-covid-vaccine-than-all-other-vaccines-australia/">Australia has recorded 11 times more Deaths in 8 months following Covid-19 Vaccination than it has Deaths following every other Vaccine combined in over 50 years</a> </strong></p>
                    <p><strong><a href="https://www.lewrockwell.com/2021/11/jon-rappoport/covid-concentration-camps-for-australians-its-happening/">Covid Concentration Camps for Australians; It’s Happening</a> </strong></p>
                    <p><strong><a href="https://f.hubspotusercontent10.net/hubfs/8079569/The%20FauciCOVID-19%20Dossier.pdf"><span lang="en-US">The Fauci/COVID-19 Dossier</span></a><span lang="en-US"> </span></strong></p>
                    <p><strong><a href="https://dailyexpose.uk/2021/11/25/pandemic-of-fully-vaccinated-89-percent-covid-deaths-vaccinated/">89% of Covid-19 Deaths among the Fully Vaccinated – Latest Public Health Data proves this is a ‘Pandemic of the Fully Vaccinated’ and suggests the Vaccinated are more likely to die</a> </strong></p>
                    <p><strong><a href="https://freewestmedia.com/2021/11/03/japan-sees-huge-drop-in-cases-after-it-switches-to-ivermectin/">Japan sees huge drop in cases after it switches to Ivermectin</a> </strong></p>
                    <p><strong><a href="https://dailyexpose.uk/2021/11/25/official-fda-report-finds-all-cause-death-rate-is-higher-among-the-vaccinated/">Official FDA report finds all-cause Death rate is higher among the Vaccinated and admits young Myocarditis victims have required Intensive Care</a> </strong></p>
                    <p><strong><a href="https://apnews.com/article/coronavirus-pandemic-science-health-africa-public-health-2b15d77e29c2607d4686e059e3313391">South African scientists detect new virus variant amid spike</a> </strong></p>
                    <p><strong><a href="https://apnews.com/article/coronavirus-pandemic-health-education-lawsuits-missouri-95e591bc3c8e11d5179560088bda1fd3">Springfield parents file lawsuit over school mask mandate</a> </strong></p>
                    <p><strong><a href="https://dailyexpose.uk/2021/11/25/us-navy-shipbuilder-suspends-covid-19-vaccine-mandate-after-employees-threaten-to-quit/">US Navy Shipbuilder Suspends Covid-19 Vaccine Mandate After Employees Threaten to Quit</a> </strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/the-new-covid-19-variant-from-south-africa-what-we-know-so-far_4125920.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-11-26-3&amp;mktids=ae7781fbce5797d545b2f0cb41c5bd1a&amp;est=MTEBVxiEdAUNIiCh7ES7zATj1uEyZL3AbAWrSDqiwqxTw5ORi7W%2FsfGvs4gDOD5d">The New COVID-19 Variant From South Africa: What We Know So Far</a> </strong></p>
                    <p><strong><a href="https://dossier.substack.com/p/nu-variant-hysteria-originated-with?token=eyJ1c2VyX2lkIjoxNDY3NTQxNiwicG9zdF9pZCI6NDQ2MjAxMTIsIl8iOiJDak85QiIsImlhdCI6MTYzNzk2MzY4NiwiZXhwIjoxNjM3OTY3Mjg2LCJpc3MiOiJwdWItNjkwMDkiLCJzdWIiOiJwb3N0LXJlYWN0aW9uIn0.G47W8Rqd-LzVDCLb4cNzxni-iFmZImddOcbsLgVpUJw">New variant hysteria comes from same institution that popularized lockdowns &amp; previous COVID scares</a> </strong></p>
                    <p><strong><a href="https://apnews.com/article/coronavirus-pandemic-science-health-south-africa-middle-east-14b1419135057aaf96bfb495742e4ab1">Israel warns of ‘emergency’ after detecting new virus strain</a></strong><span style="font-family: Garamond, serif;"><span style="font-size: medium;"> </span></span></p>
                    <p><strong><a href="https://www.taiwannews.com.tw/en/news/4340862">Taiwan halts 2nd-dose BioNTech vaccinations for ages 12-17 amid concerns of myocarditis</a> </strong></p>
                    <p><strong><a href="https://sharylattkisson.com/2021/11/read-22-states-challenge-covid-19-vaccine-mandate/?utm_source=ActiveCampaign&amp;utm_medium=email&amp;utm_content=Sharyl+Attkisson+Daily+Newsletter&amp;utm_campaign=Daily+Newsletter">(READ) 22 states challenge Covid-19 vaccine mandate</a> </strong></p>
                    <p><strong><a href="https://www.cdc.gov/mmwr/volumes/70/wr/mm7047e1.htm">Risk for Stillbirth Among Women With and Without COVID-19 at Delivery Hospitalization — United States, March 2020–September 2021</a> </strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/11/germany-merkel-limit-large-parts-public-life-unvaccinated-people/?utm_source=Email&amp;utm_medium=the-gateway-pundit&amp;utm_campaign=dailyam&amp;utm_content=daily">Germany: Merkel to Limit Large Parts of Public Life For Unvaccinated People</a> </strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/11/breaking-houston-health-dept-workers-caught-video-going-door-door-asking-residents-vaccinated-one-get/?utm_source=Email&amp;utm_medium=the-gateway-pundit&amp;utm_campaign=dailyam&amp;utm_content=daily">BREAKING: Houston Health Dept Workers Caught on VIDEO Going Door-to-Door Asking Residents: “Have you been vaccinated?…Which one did you get?”</a> </strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-10223105/Police-fire-warning-shots-protesters-Rotterdam-tensions-boil-new-Covid-restrictions.html">Seven hurt as Netherlands police fire on anti-lockdown rioters: Anger at Euro Covid restrictions turns increasingly violent as Austria makes vaccine MANDATORY and Germans face ‘Christmas lockdown’</a> </strong></p>
                    <p><strong><a href="https://www.cnn.com/2021/10/13/us/parents-say-walgreens-mistake-covid-vaccine/index.html">Parents say Walgreens mistakenly injected them and their two kids with the Covid-19 vaccine instead of flu shot</a> </strong></p>
                    <p><strong><a href="https://www.publichealthontario.ca/-/media/documents/ncov/epi/covid-19-myocarditis-pericarditis-vaccines-epi.pdf?sc_lang=en"><span lang="en-US">Myocarditis and Pericarditis Following Vaccination with COVID-19 mRNA Vaccines in Ontario: December 13, 2020 to September 4, 2021</span></a><span lang="en-US"> </span></strong></p>
                    <p><strong><a href="https://needtoknow.news/2021/11/are-you-more-likely-to-die-from-covid-19-or-the-shot/?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=are-you-more-likely-to-die-from-covid-19-or-the-shot">Are You More Likely to Die From COVID-19 or the Shot?</a> </strong></p>
                    <p><strong><a href="https://www.rt.com/usa/540688-army-punishments-unvaccinated-soldiers/">Punishments set for US troops who refuse vaccination</a> </strong></p>
                    <p><strong><a href="https://trialsitenews.com/the-costs-of-inoculating-children-against-covid-19-far-outweigh-the-benefits/">THE COSTS OF INOCULATING CHILDREN AGAINST COVID-19 FAR OUTWEIGH THE BENEFITS</a> </strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/11/new-york-fights-massive-vaccine-mandate-protest-saturday-organizers-calling-hands-deck/?utm_source=Email&amp;utm_medium=the-gateway-pundit&amp;utm_campaign=dailypm&amp;utm_content=daily">New York FIGHTS ON with MASSIVE Vaccine Mandate Protest Tomorrow! Organizers Calling For All Hands On Deck!</a> </strong></p>
                    <p><strong><a href="https://www.yahoo.com/news/dr-fauci-says-doesnt-understand-172512388.html">Dr. Fauci says he doesn’t understand parents who have not vaccinated their kids: ‘What are you waiting for? Protect your children’</a> </strong></p>
                    <p><strong><a href="https://news.yahoo.com/could-oral-antiviral-pills-game-131702148.html">Could oral antiviral pills be a game-changer for COVID-19? An infectious disease physician explains why these options are badly needed</a> </strong></p>
                    <p><strong><a href="https://www.theguardian.com/world/2021/nov/19/austria-plans-compulsory-covid-vaccination-for-all">Austria plans compulsory Covid vaccination for all</a> </strong></p>
                    <p><strong><a href="https://thehighwire.com/watch/">Pandemic of the Vaccinated – Official data shows 91% of Covid-19 Deaths have been among the Fully Vaccinated since August; but they want to Lockdown the Unvaccinated</a> </strong></p>
                    <p><strong><a href="https://humanityattheprecipice.files.wordpress.com/2021/11/joshteaguereportsdoctortopoliceforemails19112021.pdf"><span lang="en-US">Australian doctor challenging COVID policies</span></a><span lang="en-US"> </span></strong></p>
                    <p><strong><a href="https://www.yahoo.com/news/dr-fauci-says-expects-babies-210236434.html">Dr. Fauci says he expects babies and toddlers will have a COVID-19 vaccine by spring 2022</a> </strong></p>
                    <p><strong><a href="https://trialsitenews.com/the-original-antigenic-sin-covid-19-vaccination-and-sub-optimal-initial-immune-priming-deranges-the-antibody-cytotoxic-t-cell-immune-response/">The Original Antigenic Sin: COVID-19 Vaccination and Sub-Optimal Initial Immune Priming Deranges the Antibody- Cytotoxic T cell Immune Response</a> </strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/fda-asks-court-for-55-years-to-fully-release-pfizer-covid-19-vaccine-data_4110761.html">FDA Asks Court for 55 Years to Fully Release Pfizer COVID-19 Vaccine Data</a></strong><span style="font-family: Garamond, serif;"><span style="font-size: medium;"> </span></span></p>
                    <p><strong><a href="https://www.depopulation.news/2021-10-13-vaers-160000-americans-have-died-covid-vaccines.html">VAERS: At least 160,000 Americans have likely died from covid vaccines</a> </strong></p>
                    <p><strong><a href="https://www.npr.org/sections/health-shots/2021/11/12/1053509795/long-covid-causes-treatment-clues?utm_term=nprnews&amp;utm_medium=social&amp;utm_source=facebook.com&amp;utm_campaign=npr&amp;fbclid=IwAR0GgsxHssWGyGO_WKJA6dwZIm5A-zE9wN-7itBjCD09j4UnWnVsHyXD690">New clues to the biology of long COVID are starting to emerge</a> </strong></p>
                    <p><strong><a href="https://beckernews.com/the-cdc-finally-reveals-its-estimate-for-how-many-americans-have-natural-immunity-42976/">The CDC Finally Reveals Its Estimate for How Many Americans Have ‘Natural Immunity’: 146.6 Million People</a> </strong></p>
                    <p><strong><a href="https://aaronsiri.substack.com/p/cdc-admits-crushing-rights-of-naturally">CDC Admits Crushing Rights of Naturally Immune Without Proof They Transmit the Virus</a> </strong></p>
                    <p><strong><a href="https://citizenfreepress.com/breaking/cdc-busted-on-natural-immunity/">CDC busted on Natural Immunity</a></strong></p>
                    <p><strong><a href="https://www.aljazeera.com/news/2021/11/14/austria-orders-nationwide-lockdown-for-unvaccinated">Austria orders nationwide lockdown for unvaccinated</a> </strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/hospital-system-that-operates-in-19-states-blocked-from-firing-workers-over-vaccine-oklahoma-ag_4103586.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-11-14-3&amp;mktids=ce7db216476103786bb1b3d1aa303631&amp;est=3erYL0BBi2amk%2BUhMbbi1txklW5ZYIZygq3UA9DQH2RxMb4quofol6IuP5wDMe5f">Hospital System That Operates in 19 States Blocked From Firing Workers Over Vaccine: Oklahoma AG</a> </strong></p>
                    <p><strong><a href="https://www.cnn.com/2021/11/13/us/houston-doctor-suspended-covid-19/index.html">A Texas hospital suspends a doctor’s privileges for spreading ‘misinformation’ about Covid-19</a> </strong></p>
                    <p><strong><a href="https://www.cidrap.umn.edu/news-perspective/2020/01/china-releases-genetic-data-new-coronavirus-now-deadly">China releases genetic data on new coronavirus, now deadly</a> </strong></p>
                    <p><strong><a href="https://joelshirschhorn.substack.com/p/cdc-twisted-the-definition-of-vaccine">CDC Twisted the Definition of Vaccine</a> </strong></p>
                    <p><strong><a href="https://brownstone.org/articles/this-is-not-a-pandemic-of-the-unvaccinated/">This Is Not a Pandemic of the Unvaccinated</a> </strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/11/rfk-jr-completely-dismantles-covid-misinformation-narrative-euphemism-statement-departs-official-government-policy-engineering-destruction-demo/?utm_source=Email&amp;utm_medium=the-gateway-pundit&amp;utm_campaign=dailyam&amp;utm_content=daily">RFK Jr. Completely DISMANTLES the “Covid Misinformation” Narrative – “It’s a Euphemism For Any Statement That Departs From Official Government Policy” – “They Are Engineering Destruction of Democracy Worldwide</a>” </strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-10201037/WH-Chief-Staff-Ron-Klain-retweet-prompts-court-halt-Biden-vaccine-mandate.html">Judge cited tweet by Ron Klain for blocking Biden’s vaccine mandate:&nbsp;Chief of Staff said imposing it as an emergency workplace safety rule is the ‘ultimate work-around for the Federal govt to require vaccinations’</a> </strong></p>
                    <p><strong><a href="https://www.theatlantic.com/health/archive/2021/11/the-worlds-only-normal-until-you-test-positive/620653/">Getting Back to Normal Is Only Possible Until You Test Positive</a> </strong></p>
                    <p><strong><a href="https://sharylattkisson.com/2021/11/poll-57-say-the-pandemic-is-over/?utm_source=ActiveCampaign&amp;utm_medium=email&amp;utm_content=Sharyl+Attkisson+Daily+Newsletter&amp;utm_campaign=Daily+Newsletter">(POLL) 57% say the pandemic is over Attkisson</a> </strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_morningbrief/cdc-no-record-of-naturally-immune-transmitting-covid-19_4102046.html?utm_source=morningbriefnoe&amp;utm_medium=email2&amp;utm_campaign=mb-2021-11-15&amp;mktids=7fd199223fdd40325b2028bdf3c57071&amp;est=3pJyERPG%2F1PxvN3A2IV2tninVBBST9T5mBGhcYU16hrIdQvtyxYYhvlKfn8xLp8H">CDC: No Record of Naturally Immune Transmitting COVID-19</a> </strong></p>
                    <p><strong><a href="https://theexpose.uk/2021/11/12/covid-vaccines-negative-effectiveness-minus-126-percent/">Latest UKHSA Report shows the Covid-19 Vaccines have negative effectiveness as low as MINUS 126% as infections in the Fully Vaccinated soar</a> </strong></p>
                    <p><strong><a href="https://sharylattkisson.com/2021/11/__trashed-5/?utm_source=ActiveCampaign&amp;utm_medium=email&amp;utm_content=Sharyl+Attkisson+Daily+Newsletter&amp;utm_campaign=Daily+Newsletter">Attkisson (FORUM) Should people be arrested for what the vaccine industry/government decide is ‘misinformation’?</a> </strong></p>
                    <p><strong><a href="https://www.zerohedge.com/covid-19/oklahoma-national-guard-goes-rogue-after-new-commander-rejects-vaccine-mandate-pentagon?utm_source=&amp;utm_medium=email&amp;utm_campaign=275">Oklahoma National Guard ‘Goes Rogue’ After New Commander Rejects Vaccine Mandate; Pentagon To Respond ‘Appropriately’</a> </strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/little-evidence-supports-use-of-cloth-masks-to-limit-spread-of-coronavirus-analysis_4102824.html?utm_content=News_Little_Evidence_Supports?utm_medium=email_BN&amp;utm_source=newsnoe&amp;utm_campaign=EET_BreakingNews_11-15-2021-noe-Canada-free-sub-1&amp;est=elias98_99%40yahoo.com">Little Evidence Supports Use of Cloth Masks to Limit Spread of Coronavirus: Analysis</a> </strong></p>
                    <p><strong><a href="https://amgreatness.com/2021/11/13/dr-fauci-warned-about-coronaviruses-in-2003-but-didnt-act-on-it/">Dr. Fauci Warned About Coronaviruses in 2003—But Didn’t Act On It</a> </strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-10193133/People-died-COVID-19-Fauci-Birx-stuck-irrational-lockdown-policies-says-Atlas.html">EXCLUSIVE: Thousands of people died needlessly from COVID-19 because Fauci and Birx stuck to ‘irrational’ lockdown policies rather than protecting the most vulnerable, Trump adviser Scott Atlas says in new book</a> </strong></p>
                    <p><strong><a href="https://www.breitbart.com/politics/2021/11/10/procter-gamble-employees-push-back-vaccine-mandate-coercion/">Procter &amp; Gamble Employees Push Back on Vaccine Mandate: ‘It’s Coercion, Plain and Simple’</a> </strong></p>
                    <p><strong><a href="https://www.naturalnews.com/2021-11-10-genocide-childrens-hospitals-flooded-infant-cardiac-patients.html">COVID VAX GENOCIDE: Children’s hospitals now being flooded with INFANT cardiac patients</a> </strong></p>
                    <p><strong><a href="https://brightlightnews.com/why-is-ontarios-top-doc-burying-important-vaccine-data-the-vaccinated-are-as-infectious-as-the-unvaccinated/?fbclid=IwAR017QyMCZik3qU2yXUPLnBgHIgbCVR6Q9NKfUnNQjPV29cBAOOf2X-OeBg">Why Is Ontario’s Top Doc Burying Important Vaccine Data: The Vaccinated Are As Infectious As The Unvaccinated?</a> </strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/excess-deaths-unrelated-to-covid-soar-passed-65000-uk-report/">Excess deaths unrelated to COVID soar passed 65,000: UK report</a> </strong></p>
                    <p><strong><a href="https://www.breitbart.com/europe/2021/11/11/germany-reports-record-high-new-coronavirus-cases-considers-new-lockdowns/?utm_source=newsletter&amp;utm_medium=email&amp;utm_term=daily&amp;utm_campaign=20211111">Germany Reports Record-High New Coronavirus Cases, Considers New Lockdowns</a> </strong></p>
                    <p><strong><a href="https://www.breitbart.com/politics/2021/11/11/masked-up-states-reporting-more-coronavirus-cases/?utm_source=newsletter&amp;utm_medium=email&amp;utm_term=daily&amp;utm_campaign=20211111">Masked-Up States Reporting More Coronavirus Cases Per Capita than Maskless Florida</a> </strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/regulator-investigating-moderna-vaccine-over-rare-but-serious-blood-condition_4099180.html?utm_content=News_Regulator_Reviewing_Reports?utm_medium=email_BN&amp;utm_source=newsnoe&amp;utm_campaign=EET_BreakingNews_11-11-2021-noe-Canada-free-sub-3&amp;est=elias98_99%40yahoo.com">Regulator Reviewing Reports of ‘Rare’ and Serious Condition Linked to Moderna Vaccine</a> </strong></p>
                    <p><strong><a href="https://www.cnbc.com/2021/11/09/covid-vaccines-pfizer-ceo-says-people-who-spread-misinformation-on-shots-are-criminals.html?recirc=taboolainternal">Pfizer CEO says people who spread misinformation on Covid vaccines are ‘criminals’</a> </strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/bayer-executive-mrna-shots-are-gene-therapy-marketed-as-vaccines-to-gain-public-trust/">Bayer executive: mRNA shots are ‘gene therapy’ marketed as ‘vaccines’ to gain public</a> </strong></p>
                    <p><strong><a href="https://www.msn.com/en-us/news/world/israel-holds-e2-80-98war-games-e2-80-99-to-prepare-for-more-lethal-covid-strain/ar-AAQzQDK">Israel Holds ‘War Games’ to Prepare for More Lethal Covid Strain</a> </strong></p>
                    <p><strong><a href="http://www.drdavidgrimes.com/2021/11/covid-19-vitamin-d-urgent-vaccines-need.html"><span lang="en-US">Dr. David Grimes on unsafe COVID vaccines</span></a><span lang="en-US"> </span></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/antibodies-persist-for-more-than-a-year-after-covid-19-infection-study-finds_4029278.html">Antibodies Persist for More Than a Year After COVID-19 Infection, Study</a> </strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/fda-alert-2-million-at-home-covid-19-tests-recalled-over-false-positives_4101243.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-11-12-2&amp;mktids=d9d5e31e81b94b1dbe3855b9a45047db&amp;est=DzmEVwkJR%2BjNKRX3OwmRQFmrOXCFAho%2BO7j%2Fsu%2BAEG%2BEJFunUp8wAaBpXgx%2BDUJ4">FDA Alert: 2 Million At-home COVID-19 Tests Recalled Over False Positives</a> </strong></p>
                    <p><strong><a href="https://www.theguardian.com/world/live/2021/nov/12/covid-news-live-austria-to-restrict-unvaccinated-in-north-province-the-netherlands-considers-new-partial-lockdown?CMP=Share_iOSApp_Other">Covid live: Netherlands to return to partial lockdown from Saturday; UK PM warns of ‘storm clouds over Europe’</a> </strong></p>
                    <p><strong><a href="https://www.timesofisrael.com/1-in-4-hospitalized-covid-patients-who-lack-vitamin-d-die-israeli-study/">1 in 4 COVID patients hospitalized while vitamin D deficient die – Israeli study</a> </strong></p>
                    <p><strong><a href="https://stevekirsch.substack.com/p/heres-the-real-reason-comirnaty-is">Here’s the real reason Comirnaty is not available</a> </strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/missouri-governor-considering-unemployment-for-people-fired-for-refusing-covid-19-vaccines_4101529.html?utm_content=News_Missouri_Governor_Considering?utm_medium=email_BN&amp;utm_source=newsnoe&amp;utm_campaign=EET_BreakingNews_11-12-2021-noe-Canada-free-sub-3&amp;est=sr7283%40gmail.com">Missouri Governor Considering Unemployment for People Fired for Refusing COVID-19 Vaccines</a> </strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/11/just-appeals-court-re-affirms-halt-bidens-covid-vaccine-mandate-private-businesses-cites-severe-risks/">JUST IN: Appeals Court Re-Affirms Halt on Biden’s Covid Vaccine Mandate for Private Businesses – Cites ‘Severe’ Risks</a> </strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/naturally-acquired-immunity-versus-vaccine-acquired-immunity_4082499.html">Naturally Acquired Immunity Versus Vaccine Acquired Immunity</a> </strong></p>
                    <p><strong><a href="https://sharylattkisson.com/2021/11/forum-shaken-faith-in-public-health-agencies-and-officials/?utm_source=ActiveCampaign&amp;utm_medium=email&amp;utm_content=Sharyl+Attkisson+Daily+Newsletter&amp;utm_campaign=Daily+Newsletter">(FORUM) Shaken faith in public health agencies and officials</a> </strong></p>
                    <p><strong><a href="https://mises.org/wire/why-bidens-vaccine-mandate-hasnt-delivered-promised-results">Why Biden’s Vaccine Mandate Hasn’t Delivered the Promised Results</a> </strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/11/13/covid-19-highly-treatable.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1HL&amp;cid=20211113_HL2&amp;mid=DM1041641&amp;rid=1321432206">Dr. Pierre Kory: ‘COVID-19 Is Highly Treatable’</a> </strong></p>
                    <p><strong><a href="https://www.oann.com/alexander-media-using-flawed-cdc-study-to-promote-covid-vaccine/">Alexander: Media Using Flawed CDC Study To Promote COVID Vaccine</a> </strong></p>
                    <p><strong><span lang="zxx"><a href="https://www.dailymail.co.uk/news/article-10197077/U-S-appeals-court-affirms-hold-Biden-COVID-19-vaccine-mandate.html">Federal court UPHOLDS decision to halt Biden’s federal vaccine mandate after blasting edict as ‘staggeringly overbroad’</a></span> </strong></p>
                    <p><strong><span lang="zxx"><a href="https://brownstone.org/articles/20-essential-studies-that-raise-grave-doubts-about-covid-19-vaccine-mandates/">21 Essential Studies that Raise Grave Doubts about COVID-19 Vaccine Mandates</a></span> </strong></p>
                    <p lang="en-CA"><strong><span lang="zxx"><a href="https://brownstone.org/articles/79-research-studies-affirm-naturally-acquired-immunity-to-covid-19-documented-linked-and-quoted/">123 Research Studies Affirm Naturally Acquired Immunity to Covid-19: Documented, Linked, and Quoted</a></span> </strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-10191649/Austria-days-away-placing-millions-unvaccinated-people-lockdown.html">Austria is ‘days away’ from placing millions of unvaccinated people under lockdown as Covid-19 infections soar</a> </strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/11/austrian-chancellor-schallenberg-dont-see-two-thirds-lose-freedom-one-third-dithering-moves-place-millions-unvaccinated-lockdown/?utm_source=Email&amp;utm_medium=the-gateway-pundit&amp;utm_campaign=dailypm&amp;utm_content=daily">Austrian Chancellor Schallenberg: “I Don’t See Why Two-Thirds Should Lose Their Freedom Because One-Third Is Dithering” – Moves to Place MILLIONS of the Unvaccinated On Lockdown</a> </strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/11/cdc-admits-no-record-unvaccinated-person-spreading-covid-recovering-covid/?utm_source=Email&amp;utm_medium=the-gateway-pundit&amp;utm_campaign=dailyam&amp;utm_content=daily">CDC Admits It Has No Record of an Unvaccinated Person Spreading Covid After Recovering From Covid</a> </strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/11/michigan-school-system-closes-large-number-teachers-become-covid-shot/?utm_source=Email&amp;utm_medium=the-gateway-pundit&amp;utm_campaign=dailypm&amp;utm_content=daily">Michigan School System Closes After ‘Large Number’ of Teachers Become Ill from COVID Shot</a> </strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/11/macron-announces-new-booster-jab-mandate-france-experiencing-start-fifth-covid-wave/?utm_source=Email&amp;utm_medium=the-gateway-pundit&amp;utm_campaign=dailypm&amp;utm_content=daily">Macron Announces New Booster Jab Mandate as France Experiences Start of Fifth Covid Wave</a></strong><span style="font-family: Garamond, serif;"><span style="font-size: medium;"> </span></span></p>
                    <p><strong><a href="https://www.breitbart.com/politics/2021/11/04/biden-administration-vaccine-mandate/">Biden Administration Weighs Expanding Vaccine Mandate to Companies with 99 Employees or Fewer</a> </strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_morningbrief/report-of-problems-with-pfizer-covid-19-vaccine-trial-being-investigated-contract-company_4085813.html?utm_source=morningbriefnoe&amp;utm_medium=email&amp;utm_campaign=mb-2021-11-05&amp;mktids=9e83805539ccea2fa7171d75d04eaf44&amp;est=Ym8%2BGP51wHW9b4Ec31WZ9P6BQA8RkP4D6%2FLfXNQBxwXTlhldS8CAf32L3tE%3D?utm_source=morningbriefnoe&amp;utm_medium=email&amp;utm_campaign=mb-2021-08-20&amp;mktids=6915e925258a10451cc2001be2c0d771&amp;est=%5BEMAIL_SECURE_LINK%5D">Report of Problems With Pfizer COVID-19 Vaccine Trial Being Investigated: Contract Company</a> </strong></p>
                    <p><strong><a href="https://www.cnbc.com/2021/11/05/pfizer-says-its-covid-pill-with-hiv-drug-cuts-the-risk-of-hospitalization-or-death-by-89percent.html">Pfizer says its Covid pill with HIV drug cuts the risk of hospitalization or death by 89%</a> </strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/ron-johnson-people-injured-covid-vaccine/?utm_source=salsa&amp;eType=EmailBlastContent&amp;eId=1101e41b-8057-48a7-9216-5e0e187b9193">Vaccine-Injured Speak Out, Feel Abandoned by Government Who Told Them COVID Shot Was Safe</a> </strong></p>
                    <p><strong><a href="https://www.foxnews.com/opinion/nih-lied-gain-of-function-covid-sen-rand-paul">Sen. Rand Paul, MD: NIH lied and continues to lie about ‘gain of function’ research and COVID</a> </strong></p>
                    <p><strong><a href="https://www.yahoo.com/news/aaron-rodgers-says-hes-taken-194528964.html">Aaron Rodgers says he’s taken ivermectin and hydroxychloroquine since testing positive for COVID-19</a> </strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/peter-doshi-restev-levi-covid-vaccines-trial-data/?utm_source=salsa&amp;eType=EmailBlastContent&amp;eId=080d3e9b-9010-4351-a53e-5ce203c2e612">We’re Not in a ‘Pandemic of the Unvaccinated,’ Peter Doshi Explains During COVID Panel</a> </strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/fda-pfizer-covid-vaccine-risk-benefit-analysis-nntv-children/?utm_source=salsa&amp;eType=EmailBlastContent&amp;eId=080d3e9b-9010-4351-a53e-5ce203c2e612">Pfizer COVID Vaccine Fails Risk-Benefit Analysis in Children 5 to 11</a> </strong></p>
                    <p><strong><a href="https://will-law.org/will-sues-biden-admin-over-osha-vaccine-or-test-mandate-on-businesses/">WILL SUES BIDEN ADMIN. OVER OSHA VACCINE-OR-TEST MANDATE ON BUSINESSES</a> </strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/11/new-businesses-january-4-implement-bidens-unconstitutional-vaccine-mandate/?utm_source=Email&amp;utm_medium=the-gateway-pundit&amp;utm_campaign=dailyam&amp;utm_content=daily">NEW: Businesses Have Until January 4 to Implement Biden’s Unconstitutional Vaccine Mandate or Face Hefty Fines</a> </strong></p>
                    <p><strong><a href="https://www.zerohedge.com/covid-19/falsified-data-pfizer-vaccine-trial-had-major-flaws-whistleblower-tells-peer-reviewed?utm_source=&amp;utm_medium=email&amp;utm_campaign=248">‘Falsified Data’: Pfizer Vaccine Trial Had Major Flaws, Whistleblower Tells Peer-Reviewed Journal</a> </strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mpp-says-hospitals-can-still-mandate-covid-vaccines-for-employees-despite-fords-statement_4086460.html?utm_source=morningbriefnoe&amp;utm_medium=email&amp;utm_campaign=mb-2021-08-20&amp;mktids=6915e925258a10451cc2001be2c0d771&amp;est=rn81YuNOfQQTAPKriBrNm6WJApeec4Qq79fcPR6ShUJyK6L%2BFGDnTMffMtY%3D">Ontario Hospitals Can Still Mandate COVID Vaccines for Employees Despite Ford’s Statement, MPP Says</a> </strong></p>
                    <p><strong><a href="https://sharylattkisson.com/2021/11/poll-86-say-no-to-4th-covid-booster-shot/?utm_source=ActiveCampaign&amp;utm_medium=email&amp;utm_content=Sharyl+Attkisson+Daily+Newsletter&amp;utm_campaign=Daily+Newsletter">(POLL) 86% say ‘No’ to 4th Covid booster shot</a> </strong></p>
                    <p><strong><a href="https://www.nexusnewsfeed.com/article/science-futures/bombshell-swedish-study-finds-covid-jabs-provide-no-lasting-protection-immunity-plunges-to-zero-in-mere-months/">Bombshell Swedish study finds covid jabs provide no lasting protection, immunity plunges to ZERO in mere months</a> </strong></p>
                    <p><strong><a href="https://www.newsweek.com/cdc-must-explain-endgame-school-masking-mandates-opinion-1643203">The CDC Must Explain the Endgame for School Masking Mandates | Opinion</a> </strong></p>
                    <p><strong><a href="https://www.newsweek.com/will-kids-forced-get-covid-vaccine-opinion-1642704">Will Kids Be Forced To Get A COVID Vaccine? | Opinio</a></strong></p>
                    <p><strong><a href="https://www.nexusnewsfeed.com/article/health-healing/high-recorded-mortality-in-countries-categorized-as-covid-19-vaccine-champions-1/">High recorded mortality in countries categorized as “Covid-19 Vaccine Champions</a>” </strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/11/historic-psyop-covid-19-pandemic-will-surrender-will-stand/?utm_source=Email&amp;utm_medium=the-gateway-pundit&amp;utm_campaign=dailypm&amp;utm_content=daily">The Historic Psyop of the COVID-19 Pandemic – Will You Surrender or Will You Stand?</a> </strong></p>
                    <p><strong><a href="https://ca.news.yahoo.com/covid-19-vaccination-rates-among-080000010.html">COVID-19 vaccination rates among eastern European diaspora become cause for concern</a> </strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/judge-pauses-chicago-vaccine-mandate-deadline-for-police_4080960.html?utm_content=News_Judge_Pauses_Chicago?utm_medium=email_BN&amp;utm_source=newsnoe&amp;utm_campaign=EET_BreakingNews_11-02-2021-noe-Canada-free-sub&amp;est=elias98_99%40yahoo.com">Judge Pauses Chicago Vaccine Mandate Deadline for Police</a> </strong></p>
                    <p><strong><a href="https://ca.news.yahoo.com/theres-no-delta-specific-booster-135312340.html">There’s no Delta-specific booster coming to save you – what we have is good enough</a> </strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/chinese-media-promote-beijing-lawyer-saying-covid-19-laws-could-allow-death-penalty_4080950.html?utm_source=morningbriefnoe&amp;utm_medium=email&amp;utm_campaign=mb-2021-08-20&amp;mktids=6915e925258a10451cc2001be2c0d771&amp;est=L1upzkybc%2B5hgCaDYBFdmgY8LgvXeop0aufeigbw9Ne083AR8EQRBc43sw0%3D">Chinese Media Promote Beijing Lawyer Saying COVID-19 Laws Could Allow ‘Death Penalty’</a> </strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/jj-covid-vaccine-recipients-see-higher-risk-of-blood-clots-mayo-clinic-study_4080116.html?utm_source=morningbriefnoe&amp;utm_medium=email&amp;utm_campaign=mb-2021-08-20&amp;mktids=6915e925258a10451cc2001be2c0d771&amp;est=hQhp7yocmfOp%2BBa2XxfhBex1NYI6Ad2zgj%2FlTNwmjdryr6Bzh%2FSi3cXiQ3A%3D">J&amp;J COVID Vaccine Recipients See Higher Risk of Blood Clots: Mayo Clinic Study</a> </strong></p>
                    <p><strong><a href="https://ca.news.yahoo.com/fda-told-moderna-needs-more-004121182.html">The FDA told Moderna it needs more time to review use of their COVID-19 vaccine for kids</a> </strong></p>
                    <p lang="en-US"><strong><a href="https://www.the-sun.com/news/3681845/wuhan-lab-coronavirus-10000-stronger-leak/">SUPER VIRUS&nbsp;</a></strong></p>
                    <p><strong><a href="https://www.the-sun.com/news/3681845/wuhan-lab-coronavirus-10000-stronger-leak/"><span lang="en-US">China lab created coronavirus ‘10,000-times stronger than usual’ as fears rage over Wuhan ‘leak’, scientists warn</span></a><span lang="en-US"> </span></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/harvard-epidemiologist-martin-kulldorff-on-vaccine-passports-the-delta-variant-and-the-covid-public-health-fiasco_3942556.html"><span lang="en-US">Harvard Epidemiologist Martin Kulldorff on Vaccine Passports, the Delta Variant, and the COVID ‘Public Health Fiasco’</span></a><span lang="en-US"> </span></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/10/27/diabetes-pandemic.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1HL&amp;cid=20211027&amp;mid=DM1028424&amp;rid=1305237541"><span lang="en-US">How Health Officials Accelerated the Diabetes Pandemic</span></a><span lang="en-US"> </span></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_morningbrief/children-shouldnt-get-covid-19-vaccines-kulldorff_4069255.html?utm_source=morningbriefnoe&amp;utm_medium=email2&amp;utm_campaign=mb-2021-10-27&amp;mktids=8cbfd2f506c65b5b64a26e4d3a891200&amp;est=KIfYs9XvpSFW3mcFoMbp1vgeDBOnqxIojceIrrixANM2Hvvthx8beC3wglwP0kCi"><span lang="en-US">Children Shouldn’t Get COVID-19 Vaccines, Harvard Professor Says</span></a><span lang="en-US"> </span></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/opinion/abp-vigano-the-catholic-church-has-a-duty-to-resist-deadly-covid-jab-agenda-of-the-globalist-elite/"><span lang="en-US">Abp. Viganò warns US bishops about COVID jab: the Great Reset wants ‘billions of chronically ill people’ </span></a></strong></p>
                    <p><strong><a href="https://m.washingtontimes.com/news/2021/oct/28/applying-brakes-on-warp-speed-covid-19-vaccination/?fbclid=IwAR1kZV1vw_16wA8HNtVhKQR47KnLQXSqWL3AtFNcTePVnmGBDSrkELO0M08">Applying brakes on ‘Warp Speed’ COVID-19 vaccinations for children</a> </strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/children-immune-priming-covid-vaccines-infection-transmission/">Pretending We Can Vaccinate Our Way Out of This Pandemic Is Dangerous — Especially for Kids</a> </strong></p>
                    <p><strong><a href="https://www.msn.com/en-us/health/medical/how-fauci-fooled-america-opinion/ar-AAQbFiu?ocid=msedgntp">How Fauci Fooled America | Opinion</a> </strong></p>
                    <p><strong><a href="https://eugyppius.substack.com/p/the-vaccines-cannot-do-what-is-asked">The Vaccines Cannot Do What Is Asked of Them</a> </strong></p>
                    <p><strong><a href="https://boriquagato.substack.com/p/swedish-study-shows-covid-vaccines">swedish study shows covid vaccines drop below zero efficacy on spread by about 200 days</a> </strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/louisiana-teenager-illegally-given-covid-19-vaccine-without-parental-permission_4072384.html?utm_content=News_Louisiana_Teenager_Given?utm_medium=email_BN&amp;utm_source=newsnoe&amp;utm_campaign=EET_BreakingNews_11-02-2021-noe-Canada-free-sub&amp;est=sr7283%40gmail.com">Louisiana Teenager Given COVID-19 Vaccine Without Parental Permission</a> </strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/cdc-advisors-endorse-pfizers-covid-vaccine-kids-5-11/?utm_source=salsa&amp;eType=EmailBlastContent&amp;eId=e80dabbb-bf63-4263-af15-215b6fd196ee">CDC Advisors Unanimously Endorse Pfizer’s COVID Vaccine for Kids 5-11 Despite Expert Concerns Over Clinical Data</a></strong><span style="font-family: Garamond, serif;"><span style="font-size: medium;"> </span></span></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/iceland-the-fifth-european-country-to-halt-moderna-covid-vaccine/">Iceland becomes fifth European country to halt Moderna COVID-19 vaccine</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/iceland-the-fifth-european-country-to-halt-moderna-covid-vaccine/">‘In recent days, there has been data from the Nordic countries on the increased incidence of myocarditis and pericarditis after vaccination with the Moderna vaccine, in addition to vaccination with Pfizer/BioNTech,’ Icelandic officials said Friday.</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_morningbrief/health-care-workers-speak-out-on-why-they-would-rather-lose-their-jobs-than-take-a-covid-19-vaccine_4065164.html?utm_source=Morningbrief&amp;utm_medium=email&amp;utm_campaign=mb-2021-10-26&amp;mktids=4393bd947bd545e31711ca61f8cf4867&amp;est=KM%2FCuV1dkJkk3VlP1EAx3zke7h1KTjxam0Nt%2BqNap2Fu9Dcynw%2FfuKpJRzEmyJTPyq7AkQ%3D%3D">Health Care Workers Speak Out on Why They Would Rather Lose Their Jobs Than Take a COVID-19 Vaccine</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/stop-the-shot-caught-on-tape-conference-will-expose-doctors-hospitals-that-deny-care-to-covid-patients/">‘Stop the Shot: Caught on Tape’ conference will expose doctors, hospitals that deny care to COVID patients</a></strong></p>
                    <p><strong><a href="https://web.archive.org/web/20211026072034/https:/www.telegraph.co.uk/politics/2021/10/25/vaccine-passports-could-fuel-covid-cost-venues-millions-says/">Vaccine passports could fuel Covid and cost venues millions, says leaked government report</a> The Telegraph</strong></p>
                    <p><strong><a href="https://www.marketwatch.com/story/fauci-says-u-s-on-track-to-start-vaccinating-kids-aged-5-to-11-by-november-as-fda-advisers-prepare-to-meet-on-the-matter-11635172684">Fauci says U.S. is on track to start vaccinating kids aged 5 to 11 by November, as FDA advisers prepare to meet on the matter</a></strong></p>
                    <p><strong><a href="https://nationalfile.com/fda-committee-members-reviewing-pfizer-vaccine-for-children-have-worked-for-pfizer-have-big-pfizer-connections/">FDA Committee Members Reviewing Pfizer Vaccine For Children Have Worked For Pfizer, Have Big Pfizer Connections</a></strong></p>
                    <p><strong><a href="https://drtrozzi.org/2021/10/07/children-should-be-freed-now-and-never-covid-injected/">Children Should Be Freed Now and Never Covid-Injected</a></strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/fda-endorses-pfizer-covid-vaccine-children/?utm_source=salsa&amp;eType=EmailBlastContent&amp;eId=eff7f043-13ae-4afc-80bb-76e5996c583a">Breaking: FDA Panel Endorses Pfizer Shots for 5- to 11-Year-Olds, Experts Say Vaccine for Kids Is ‘Unnecessary, Premature and Will Do More Harm Than Good’</a></strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/scientists-created-sars-cov-2-variant/?utm_source=salsa&amp;eType=EmailBlastContent&amp;eId=45187f96-66b3-4a5a-bae6-a67154a3c804">Are Scientists Cooking Up More Lethal Versions of COVID?</a></strong></p>
                    <p><strong><a href="https://web.archive.org/web/20211025144229/https:/www.telegraph.co.uk/news/2021/10/25/rushing-booster-jab-roll-risks-harm-good-warn-jcvi-scientists/">Rushing booster jab roll out risks doing more harm than good, warn JCVI scientists</a> The Telegraph</strong></p>
                    <p><strong><a href="http://www.drdavidgrimes.com/2020/11/covid-19-vitamin-d-deaths-of-doctors.html">Excess&nbsp;deaths from Black, Asian, and&nbsp;Minority Ethnic Doctors during the Covid-19 Pandemic</a></strong></p>
                    <p><strong><a href="https://dailysceptic.org/2021/10/24/boris-admits-the-vaccine-doesnt-protect-you-against-catching-the-disease-and-it-doesnt-protect-you-against-passing-it-on/">Boris Admits the Vaccine “Doesn’t Protect You Against Catching the Disease, and It Doesn’t Protect You Against Passing it On”</a></strong></p>
                    <p><strong><a href="https://www.the-sun.com/news/3681845/wuhan-lab-coronavirus-10000-stronger-leak/">SUPER VIRUS&nbsp;</a></strong></p>
                    <p><strong><a href="https://www.the-sun.com/news/3681845/wuhan-lab-coronavirus-10000-stronger-leak/">China lab created coronavirus ‘10,000-times stronger than usual’ as fears rage over Wuhan ‘leak’, scientists warn</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/opinion/abp-vigano-the-catholic-church-has-a-duty-to-resist-deadly-covid-jab-agenda-of-the-globalist-elite/">Abp. Viganò warns US bishops about COVID jab: the Great Reset wants ‘billions of chronically ill people’</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/harvard-epidemiologist-martin-kulldorff-on-vaccine-passports-the-delta-variant-and-the-covid-public-health-fiasco_3942556.html">Harvard Epidemiologist Martin Kulldorff on Vaccine Passports, the Delta Variant, and the COVID ‘Public Health Fiasco’</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/10/27/diabetes-pandemic.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1HL&amp;cid=20211027&amp;mid=DM1028424&amp;rid=1305237541">How Health Officials Accelerated the Diabetes Pandemic</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_morningbrief/children-shouldnt-get-covid-19-vaccines-kulldorff_4069255.html?utm_source=morningbriefnoe&amp;utm_medium=email2&amp;utm_campaign=mb-2021-10-27&amp;mktids=8cbfd2f506c65b5b64a26e4d3a891200&amp;est=KIfYs9XvpSFW3mcFoMbp1vgeDBOnqxIojceIrrixANM2Hvvthx8beC3wglwP0kCi">Children Shouldn’t Get COVID-19 Vaccines, Harvard Professor Says</a></strong></p>
                    <p><strong><a href="https://www.zerohedge.com/political/nih-director-shredded-over-risky-research-wuhan-after-cnn-interview-goes-sideways?utm_source=&amp;utm_medium=email&amp;utm_campaign=224">NIH Director Shredded Over Risky Research In Wuhan After CNN Interview Goes Sideways</a></strong></p>
                    <p><strong><a href="https://www.cnn.com/2021/10/26/health/covid-19-fourth-dose-for-the-immunocompromised/index.html">Immunocompromised may need a fourth Covid-19 shot, CDC says</a></strong></p>
                    <p><strong><a href="https://aaronsiri.substack.com/p/fda-buries-data-on-seriously-injured?justPublished=true">FDA Buries Data on Seriously Injured Child in Pfizer’s Covid-19 Clinical Trial</a></strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/brian-dressen-brianne-covid-pfizer-vaccine-risk-benefit-calculus-children/?utm_source=salsa&amp;eType=EmailBlastContent&amp;eId=4fe2da96-8253-489e-94cb-1eb9eba79c1f">Scientist Whose Wife Was Injured by COVID Vaccine Tells FDA: ‘Please Do Not Give This to Kids’</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/california-in-n-out-shut-down-permanently-for-refusing-to-check-customers-vaccination-status_4071086.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-10-27-2&amp;mktids=8fad7d3c419cbc705c54928a13445e7d&amp;est=Er5ApHpRMa41nlSTy2wPzWFvgX1V6tJb5w1RT64%2BnRBxZL8zL1JY914OfOpJb4b5">California In-N-Out Shut Down Permanently for Refusing to Check Customers’ Vaccination Status</a></strong></p>
                    <p><strong><a href="https://medium.com/@articlev/nearly-two-million-americans-dead-in-pandemic-fd4603cc62ed">Nearly Two Million Americans Dead in Pandemic</a></strong></p>
                    <p><strong><a href="https://www.marketwatch.com/story/fauci-says-u-s-on-track-to-start-vaccinating-kids-aged-5-to-11-by-november-as-fda-advisers-prepare-to-meet-on-the-matter-11635172684">Fauci says U.S. is on track to start vaccinating kids aged 5 to 11 by November, as FDA advisers prepare to meet on the matter</a></strong></p>
                    <p><strong><a href="https://maheshshenai.substack.com/p/the-most-neglected-subgroup-vaccination">The Most Neglected Subgroup: Vaccination in COVID-recovered Children</a></strong></p>
                    <p><strong><a href="https://brownstone.org/articles/dear-pfizer-leave-the-children-alone/">Pfizer, leave our children alone with COVID vaccines</a>&nbsp;</strong></p>
                    <p><strong><a href="https://brownstone.org/articles/79-research-studies-affirm-naturally-acquired-immunity-to-covid-19-documented-linked-and-quoted/">91 Research Studies Affirm Naturally Acquired Immunity to Covid-19: Documented, Linked, and Quoted</a></strong></p>
                    <p className="p1"><strong><span className="s1"><a href="https://twitter.com/cdefitrader/status/1452762342446489606?s=21">Argentina to suspend Moderna and Pfizer vaccines until 2023 “in order to have the necessary hindsight until the end of the experimental framework planned for that date</a></span><span className="s2"><span className="Apple-converted-space">&nbsp;</span></span></strong></p>
                    <p className="p1"><strong><span className="s3"><a href="https://www.wsj.com/articles/its-madness-to-quarantine-schoolchildren-covid-testing-regulation-guidelines-11635104550?mod=opinion_lead_pos5">It’s Madness to Quarantine Schoolchildren</a></span></strong></p>
                    <p className="p1"><strong><span className="s3"><a href="https://www.wsj.com/articles/its-madness-to-quarantine-schoolchildren-covid-testing-regulation-guidelines-11635104550?mod=opinion_lead_pos5">The CDC’s policies hinder learning and provide no meaningful reduction in Covid-19 transmission.</a></span><span className="s4"><span className="Apple-converted-space">&nbsp;</span></span></strong></p>
                    <p className="p1"><strong><span className="s3"><a href="https://www.theepochtimes.com/mkt_breakingnews/nih-removes-language-on-gain-of-function-from-website-amid-criticism-over-funding-chinese-research_4067379.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-10-25-2&amp;mktids=407bcfdf7d67c31081c8a182da5c2f24&amp;est=UO3oZYtR%252BXoQlzaO17qPBWfx88bl8Up%252BPDbFwnURPdeVK%252BmSLWnnhnJMFFbw%252BBAc">NIH Removes Language on ‘Gain-of-Function’ From Website Amid Criticism Over Funding Chinese Research</a></span></strong></p>
                    <p className="p1"><strong><span className="s3"><a href="https://childrenshealthdefense.org/defender/chd-legal-action-fda-eua-pfizer-biontech-vaccine-children/?utm_source=salsa&amp;eType=EmailBlastContent&amp;eId=f326fd0c-8e0b-4c01-934a-0fbcad820dfd">CHD to Sue FDA for ‘Recklessly Endangering’ Children if Agency Authorizes Pfizer Vaccine for Children 5 to 11 Years Old</a></span></strong></p>
                    <p className="p1"><strong><span className="s3"><a href="https://www.ouest-france.fr/sport/tennis/open-d-australie/tennis-novak-djokovic-et-les-non-vaccines-finalement-presents-a-l-open-d-australie-1da38bb6-3552-11ec-bfef-977b026634bc">Tennis.&nbsp;Novak Djokovic and the unvaccinated finally present at the Australian Open?</a></span></strong></p>
                    <p className="p1"><strong><span className="s3"><a href="https://www.ouest-france.fr/sport/tennis/open-d-australie/tennis-novak-djokovic-et-les-non-vaccines-finalement-presents-a-l-open-d-australie-1da38bb6-3552-11ec-bfef-977b026634bc">A WTA document claims unvaccinated female players would eventually be allowed to compete in the Australian Open, with quarantine and regular testing.&nbsp;The decision will also apply to the men’s tournament.</a></span></strong></p>
                    <p className="p1"><strong><span className="s3"><a href="https://www.theepochtimes.com/mkt_morningbrief/biden-plays-chicken-with-semitruck-drivers_4063261.html?utm_source=Morningbrief&amp;utm_medium=email&amp;utm_campaign=mb-2021-10-25&amp;mktids=10916355ef0b82e1dc909cfed775fd5b&amp;est=RkF7S5t%252BvPnarqISoTkSx6d%252B8HVLgi7o5FcAQohQsiKHyDSHR7ylvMn8ByAIYcf6k%252B4jDg%253D%253D">Vaccine Mandate Threatens Major Trucking Disruption, Industry Insiders Say</a></span></strong></p>
                    <p className="p1"><strong><span className="s3"><a href="https://www.benzinga.com/pressreleases/21/10/g23537684/childrens-health-defense-robert-f-kennedy-jr-and-meryl-nass-md-tell-fda-advisory-committee-approva">Children’s Health Defense, Robert F. Kennedy, Jr. and Meryl Nass, MD Tell FDA Advisory Committee: Approval of the COVID Vaccine for Young Children Will Put Millions at Serious Risk</a></span></strong></p>
                    <p className="p1"><strong><span className="s3"><a href="https://www.npr.org/2021/09/13/1036533173/despite-warnings-south-africans-are-using-an-animal-medication-to-treat-covid-19">Research Shows This Drug Shouldn’t Be Used For COVID-19, But In South Africa Many Do</a></span></strong></p>
                    <p className="p1"><strong><span className="s3"><a href="https://www.theepochtimes.com/mkt_breakingnews/nypds-largest-police-union-sues-city-covid-19-vaccine-mandate_4067316.html?utm_content=News_NYPDs_Largest_Police?utm_medium=email_BN&amp;utm_source=newsnoe&amp;utm_campaign=EET_BreakingNews_10-25-2021-noe-Canada-free-sub-3&amp;est=sr7283%2540gmail.com">NYPD’s Largest Police Union Sues Mayor Over COVID-19 Vaccine Mandate</a></span></strong></p>
                    <p className="p1"><strong><span className="s3"><a href="https://www.wnd.com/2021/10/exposed-inhumane-lethal-covid-protocol-hospitals/">Exposed: Inhumane, lethal COVID Protocol in hospitals</a></span></strong></p>
                    <p className="p1"><strong><span className="s3"><a href="https://articles.mercola.com/sites/articles/archive/2021/10/26/leaky-vaccine-breakthrough-variant.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1HL&amp;cid=20211026&amp;mid=DM1027598&amp;rid=1304237720">The Leaky Vaccine Breakthrough Variant Is Here</a></span><span className="s4"><span className="Apple-converted-space">&nbsp;</span></span></strong></p>
                    <p className="p1"><strong><span className="s3"><a href="https://townhall.com/tipsheet/leahbarkoukis/2021/10/25/nih-quietly-edits-section-of-website-on-gain-of-function-research-n2597968">NIH Quietly Edits Section of Website on Gain-of-Function Research</a></span></strong></p>
                    <p className="p1"><strong><span className="s3"><a href="https://sharylattkisson.com/2021/10/covid-19-natural-immunity-compared-to-vaccine-induced-immunity-the-definitive-summary/">Covid-19 natural immunity compared to vaccine-induced immunity: The definitive summary</a></span></strong></p>
                    <p className="p1"><strong><span className="s3"><a href="https://www.globalresearch.ca/covid-vax-you-can-never-achieve-full-immunity-again-government-stats-unveil-horrifying-truth/5759472">If You Take the COVID Vax, You Can Never Achieve Full Immunity Again – Government Stats Unveil the Horrifying Truth</a></span></strong></p>
                    <p className="p1"><strong><span className="s3"><a href="https://banned.video/watch?id=617805b37031df173f85c2d9">Medical Bombshell: Pfizer Vax Attacks Human Blood Creating Clots Under Microscope</a></span></strong></p>
                    <p className="p1"><strong><span className="s3"><a href="https://www.theepochtimes.com/federal-employee-and-police-advocacy-groups-protest-vaccine-mandates_4067477.html?utm_content=News_CA_Federal_Employee_and?utm_medium=email_BN&amp;utm_source=newsnoe&amp;utm_campaign=EET_BreakingNews_10-25-2021-noe-Canada-free-sub-3&amp;est=elias98_99%2540yahoo.com">Federal Employee and Police Advocacy Groups Protest Vaccine Mandates</a></span></strong></p>
                    <p className="p1"><strong><span className="s3"><a href="https://superu.net/video/5d7b1847-e1d9-483b-8266-5b7cd084fedf/">Trudeau’s sniper detail blasts PM over over</a></span></strong></p>
                    <p className="p1"><strong><span className="s3"><a href="https://www.lifesitenews.com/news/black-conservative-mp-from-ontario-warns-against-trudeaus-plan-to-inject-kids-with-covid-jab/">Black Conservative MP from Ontario warns against Trudeau’s plan to inject kids with COVID jab</a></span></strong></p>
                    <p className="p1"><strong><span className="s3"><a href="https://www.lifesitenews.com/news/covid-jab-mandate-halted-in-canadian-hospital-for-staff-who-launched-legal-challenge/">COVID jab mandate halted in Canadian hospital for staff who launched legal challenge</a></span></strong></p>
                    <p><strong><a href="https://www.independent.co.uk/asia/china/covid-virus-wuhan-summer-2019-b1932574.html">Covid ‘was spreading virulently in Wuhan’ as early as summer 2019, report suggests</a>&nbsp;</strong></p>
                    <p><strong><a href="https://brownstone.org/articles/the-attack-on-scientific-dissent-becomes-ever-more-brutal/">https://brownstone.org/articles/the-attack-on-scientific-dissent-becomes-ever-more-brutal/</a>&nbsp;</strong></p>
                    <p><strong><a href="https://brownstone.org/articles/twenty-steps-to-end-the-madness/">https://brownstone.org/articles/twenty-steps-to-end-the-madness/</a></strong></p>
                    <p><strong><a href="https://www.geertvandenbossche.org/post/the-unforgivable-sin">The unforgivable sin</a>&nbsp;</strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/10/17-year-old-healthy-hockey-player-passes-away-canada-weeks-jab-father-devastated-loss/">17-Year-Old Healthy Hockey Player Passes Away in Canada Weeks After Jab — Father Is Devastated After Loss</a></strong></p>
                    <p><strong><a href="https://news.yale.edu/2020/09/21/childrens-immune-response-more-effective-against-covid-19">Children’s immune response more effective against COVID-19</a>&nbsp;</strong></p>
                    <p><strong><a href="https://www.genengnews.com/news/kids-nose-cells-are-primed-to-fight-viruses-may-explain-milder-covid-19/?utm_medium=newsletter&amp;utm_source=GEN+Daily+News+Highlights&amp;utm_content=01&amp;utm_campaign=GEN+Daily+News+Highlights_20210819&amp;oly_enc_id=4125F3799801G1X">Kids’ Nose Cells Are Primed to Fight Viruses, May Explain Milder COVID-19</a>&nbsp;&nbsp;</strong></p>
                    <p><strong><a href="https://www.hartgroup.org/myocarditis-side-effect/">Myocarditis in children and young adults. This cannot be dismissed as a mild and self-limiting condition</a></strong></p>
                    <p><strong><a href="https://www.bitchute.com/video/TsdTTHJteilw/">A PATHOLOGIST SUMMARY OF WHAT THESE JABS DO TO THE BRAIN AND OTHER ORGANS PR 1</a></strong></p>
                    <p><strong><a href="https://www.youtube.com/watch?v=AQgzcHQc0F0">DeSantis Calls On Businesses To Pay For Adverse Reactions To Vaccine If They Mandate It</a></strong></p>
                    <p><strong><a href="https://www.oann.com/dr-bhattacharya-there-are-no-studies-showing-masking-children-is-effective/">Dr. Bhattacharya: There Are No Studies Showing Masking Children Is Effective</a></strong></p>
                    <p><strong><a href="https://www.fromrome.info/2021/10/23/australia-queensland-premier-says-quarantine-facilities-for-unvaxxed/">AUSTRALIA: QUEENSLAND PREMIER SAYS QUARANTINE FACILITIES FOR&nbsp; UNVAXXED</a></strong></p>
                    <p><strong><a href="https://healthimpactnews.com/2020/4-year-old-almost-dies-due-to-lung-infection-caused-by-prolonged-mask-wearing-doctor-rants-how-many-children-must-die/">4-Year-Old Almost Dies due to Lung Infection Caused by Prolonged Mask Wearing – Doctor Rants “How Many Children Must Die?”</a></strong></p>
                    <p><strong><a href="https://www.spectator.com.au/2021/10/the-covid-hunt/">The Covid hunt</a></strong></p>
                    <p><strong><a href="https://www.spectator.com.au/2021/10/the-covid-hunt/">The woke elite declares open season on the unvaccinated</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/newly-released-documents-show-nih-funded-gain-of-function-research-in-china-experts_4061437.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-10-22-1&amp;mktids=917cb854fb5d8841b81edba4213b6e81&amp;est=YVp3%2FMl6PiWtWz8%2Fg1Kw5vlsKbay0WLGGTv%2BQ1RemjOLRymaYlbAJJMDawHh7T0g">Newly Released Documents Show NIH Funded Gain-of-Function Research in China: Experts</a>&nbsp;</strong></p>
                    <p><strong><a href="https://theexpose.uk/2021/10/22/pfizers-dr-scott-gottlieb-appears-to-have-violated-federal-ethics-rules/">Pfizer’s Dr Scott Gottlieb; ex-FDA Chief &amp; “Predictor” of Pandemics, pushed restrictive Covid policies in violation of Federal Ethics Rules</a>&nbsp;</strong></p>
                    <p><strong><a href="https://www.mainstpress.com/2021/10/22/florida-governor-desantis-has-genius-idea-about-covid-vaccine-mandate/">Florida Governor DeSantis Has Genius Idea About COVID Vaccine Mandates</a>&nbsp;</strong></p>
                    <p><strong><a href="https://www.washingtonexaminer.com/policy/healthcare/fauci-critics-say-nih-letter-debunks-gain-of-function-denial">Fauci critics say NIH letter debunks ‘gain of function’ denial</a>&nbsp;</strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/makes-no-sense-southwest-airlines-says-it-wont-fire-workers-who-dont-get-covid-vaccine_4063579.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-10-22-2&amp;mktids=750cbed6b5bfc66d03cd02f18e5f21c1&amp;est=MRQbEfwwt7RtT%2FQoLCLU%2BBdnDyOQ5qVMIFLvvb6cUEbFhb5foYz%2FOvyuyxvbfeeo">‘Makes No Sense’: Southwest Airlines Says It Won’t Fire Workers Who Don’t Get COVID Vaccine</a>&nbsp;</strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://www.americanthinker.com/articles/2021/10/the_oftenoverlooked_facts_about_covid19_.html">The Often-Overlooked Facts About Covid-19</a></strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://www.cdc.gov/vaccines/covid-19/health-departments/breakthrough-cases.html">COVID-19 Vaccine Breakthrough Case Investigation and Reporting</a>&nbsp;</strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://americanmind.org/salvo/woke-medicines-critical-harm/">The American Medical Association has fallen into Marxist lockstep with Critical Race Theory.</a></strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://uncanceled.news/fully-vaccinated-are-covid-super-spreaders-says-inventor-of-mrna-technology/">‘Fully Vaccinated’ Are COVID ‘Super-Spreaders,’ Says Inventor of mRNA Technology</a>&nbsp;</strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://www.theburningplatform.com/2021/09/10/patients-filling-the-hospitals-are-vaccinated-period/">Patients filling the hospitals are VACCINATED! Period!</a></strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://thelibertydaily.com/100-vaccinated-nfl-team-loses-their-head-coach-two-assistants-the-gm-and-two-players-due-to-covid/">100% ‘Vaccinated’ NFL Team Loses Their Head Coach, Two Assistants, the GM, and Two Players Due to Covid</a>&nbsp;</strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://principia-scientific.com/nuremberg-code-outlaws-forced-medical-procedures-including-vaccinations/">Nuremberg Code Outlaws Forced Medical Procedures, Including Vaxes</a>&nbsp;</strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://www.reuters.com/article/factcheck-vaccine-safe-idUSL2N2NX1J6">Fact Check-No evidence spike proteins from COVID-19 vaccines are toxic</a></strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://sharylattkisson.com/2021/10/amish-covid-no-hospitalization-isolation-or-vaccines-herd-immunity/">Amish Covid: ‘No hospitalization, isolation or vaccines = herd immunity’</a>&nbsp;</strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://www.zerohedge.com/political/sweden-suspends-moderna-shot-indefinitely-after-vaxxed-patients-develop-crippling-heart">Sweden Suspends Moderna Shot Indefinitely After Vaxxed Patients Develop Crippling Heart Condition</a></strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://www.dcclothesline.com/2021/10/17/are-covid-vaccines-giving-people-aids-immune-system-functions-are-dropping-around-5-each-week-in-those-who-were-vaccinated/">Are covid “vaccines” giving people AIDS? Immune system functions are dropping around 5% EACH WEEK in those who were vaccinated</a>&nbsp;</strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://www.conejoguardian.org/2021/10/21/ventura-county-nurses-blow-the-whistle-on-crisis-in-local-health-care/">Ventura County Nurses Blow the Whistle on Crisis in Local Health Care</a></strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/10/24/li-meng-yan-covid-origin.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1HL&amp;cid=20211024_HL2&amp;mid=DM1025952&amp;rid=1302029890">Chinese Defector Reveals COVID Origin</a>&nbsp;</strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/biden-plays-chicken-with-semitruck-drivers_4063261.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-10-24-1&amp;mktids=e42d9ac2f275cf7c82ae75de9f1589cf&amp;est=m42H%2Fgu0T8Me1agS1AlXrj40RZPvll132Y8W3ZtTROwG98mmO4FW3R2xPSX9pzEI">Vaccine Mandate Threatens Major Trucking Disruption, Industry Insiders Say</a>&nbsp;</strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://sharylattkisson.com/2021/10/study-significant-preterm-births-in-astrazeneca-covid-19-vaccine-study-no-impact-on-womens-short-term-fertility/?utm_source=ActiveCampaign&amp;utm_medium=email&amp;utm_content=Sharyl+Attkisson+Daily+Newsletter&amp;utm_campaign=Daily+Newsletter">STUDY: Significant preterm births in AstraZeneca Covid-19 vaccine study; no impact on women’s short-term fertility</a></strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://americanmind.org/salvo/a-covid-death-the-bureaucracy-decides/">A Covid Death? The Bureaucracy Decides</a>&nbsp;</strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://www.lifesitenews.com/news/canadas-top-organ-transplant-hospital-denies-treatment-to-unvaccinated-patients/">Canada’s top organ transplant hospital denies treatment to unvaccinated patients</a>&nbsp;</strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://www.lifesitenews.com/news/745918/">Former Canadian provincial premier calls out COVID tyranny, says ‘end game’ is a global ‘reset’</a></strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://www.zerohedge.com/political/ecohealth-throws-fauci-under-bus-over-wuhan-gain-function-report-researcher-claims">EcoHealth Throws NIH Under The Bus Over Wuhan Gain-Of-Function Report; Researcher Claims ‘Massive Cover-Up’</a></strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/firefighters-say-florida-countys-vaccine-mandate-causing-rifts-among-first-responders-that-compromise-public-safety_4065615.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-10-24-3&amp;mktids=18d4ad8e268f5310ed35e9599b06d8b2&amp;est=Dk07ZuujLHaMTDuUvkKore0LqnrsnwKH1WWxjxB0ByWEdmx%2BSgYGoKk4v1UC88xF">Firefighters Say Florida County’s Vaccine Mandate Causing Rifts Among First Responders That Compromise Public Safety</a>&nbsp;</strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://www.demandthetruth.xyz/">#DemandTheTruth</a>&nbsp;</strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://internet2-0.com/PCR%20Purchasing%20Report%20Wuhan%20China.pdf">Procuring for a Pandemic: An Assessment of Hubei Province (China) PCR Procurement Contracts</a>&nbsp;</strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://www.bloomberg.com/news/articles/2021-10-04/china-pcr-purchases-spiked-in-months-before-first-known-covid-cases-firm-says">China PCR Purchases Spiked in Months Before First Known Covid Cases, Firm Says</a>&nbsp;</strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.10.08.21264699v1">Cardiovascular Mortality during the COVID-19 Pandemics in a Large Brazilian City: a Comprehensive Analysis</a>&nbsp;&nbsp;</strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://thefederalist.com/2021/10/14/the-worst-is-yet-to-come-from-bidens-vaccine-coercion/">The Worst Is Yet To Come From Biden’s Vaccine Coercion</a>&nbsp;</strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://www.wnd.com/2021/10/breakthrough-cases-killing-people-will-get-worse/">Breakthrough cases are killing people – and it will only get worse</a></strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://www.city-journal.org/deadly-cost-of-lockdown-policies">Death By Policy</a>&nbsp;</strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://ijvtpr.com/index.php/IJVTPR/article/view/23/51">Worse Than the Disease? Reviewing Some Possible Unintended Consequences of the mRNA Vaccines Against COVID-19</a>&nbsp;</strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://onlinelibrary.wiley.com/doi/epdf/10.1002/eji.202149535">Persistence of neutralizing antibodies a year after SARS-CoV-2 infection in humans</a>&nbsp;</strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/biden-plays-chicken-with-semitruck-drivers_4063261.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-10-24-1&amp;mktids=e42d9ac2f275cf7c82ae75de9f1589cf&amp;est=m42H%2Fgu0T8Me1agS1AlXrj40RZPvll132Y8W3ZtTROwG98mmO4FW3R2xPSX9pzEI">Vaccine Mandate Threatens Major Trucking Disruption, Industry Insiders Say</a>&nbsp;</strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://www.independent.co.uk/asia/china/covid-virus-wuhan-summer-2019-b1932574.html">Covid ‘was spreading virulently in Wuhan’ as early as summer 2019, report suggests</a></strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://www.zerohedge.com/medical/fauci-funded-cruel-puppy-experiments-where-sand-flies-eat-them-alive-vocal-cords-severed?utm_source=&amp;utm_medium=email&amp;utm_campaign=209">Fauci Funded ‘Cruel’ Puppy Experiments Where Sand Flies ‘Eat Them Alive’; Vocal Cords Severed</a></strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://twitter.com/TicketOut/status/1450860451399602185">HMS Queen Elizabeth aircraft carrier outbreak when all double vaccinated sailors</a>&nbsp;</strong></p>
                    <p><strong><a href="https://uploads-ssl.webflow.com/5fa5866942937a4d73918723/6018018e4b1729f3251e4281_UKMFA_Pfizer_COVID-19_Vaccine_(Public1-2).pdf">Pfizer Covid-19 Vaccine (Comirnaty) PATIENT INFORMATION LEAFLET</a></strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://www.theepochtimes.com/antibodies-persist-for-more-than-a-year-after-covid-19-infection-study-finds_4029278.html?utm_medium=EmailMk&amp;utm_source=VI&amp;utm_campaign=VI_BN5&amp;utm_term=BN5l-10-25-2021&amp;utm_content=brnews1&amp;instaaccount=sr7283%40gmail.com">Antibodies Persist for More Than a Year After COVID-19 Infection, Study Finds</a></strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://aaronsiri.substack.com/p/study-destroys-justification-for">Study Destroys Justification for Vaccine Mandates</a></strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://aaronsiri.substack.com/p/the-obvious-wins-again-natural-immunity?justPublished=true">The Obvious Wins Again: Natural Immunity Superior to Vaccine Immunity</a>&nbsp;</strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1027511/Vaccine-surveillance-report-week-42.pdf">COVID-19 vaccine surveillance report Week 42 PHE UK # 42</a></strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://www.zerohedge.com/political/ecohealth-throws-fauci-under-bus-over-wuhan-gain-function-report-researcher-claims">EcoHealth Throws NIH Under The Bus Over Wuhan Gain-Of-Function Report; Researcher Claims ‘Massive Cover-Up’</a></strong></p>
                    <p>&nbsp;</p>
                    <p><strong><a href="https://www.conejoguardian.org/2021/10/21/ventura-county-nurses-blow-the-whistle-on-crisis-in-local-health-care/">Ventura County Nurses Blow the Whistle on Crisis in Local Health Care</a></strong></p>
                    <p><strong><a href="https://www.hartgroup.org/myocarditis-side-effect/">Myocarditis in children and young adults. This cannot be dismissed as a mild and self-limiting condition</a> </strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/fully-vaccinated-people-now-the-majority-of-covid-deaths-in-uk-sweden/">‘Fully vaccinated’ were the majority of COVID deaths in Sweden, UK in September</a>&nbsp;</strong></p>
                    <p><strong><a href="https://www.theblaze.com/op-ed/horowitz-the-country-with-the-best-data-shows-infection-rates-higher-among-the-vaccinated">Horowitz: The country with the best data shows infection rates higher among the vaccinated</a>&nbsp;</strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/florida-sees-45-drop-in-covid-cases-as-desantis-refuses-coercive-restrictions-mandates/">Florida has second biggest decrease in new COVID cases in US as DeSantis refuses lockdowns, mandates</a>&nbsp;</strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/vaccine-injury-stories-pour-in-after-israeli-woman-launches-project-to-expose-untold-suffering-suffering/">Vaccine injury stories pour in after Israeli mom launches project to expose untold suffering</a>&nbsp;</strong></p>
                    <p><strong>England/UK, <a href="https://theexpose.uk/2021/10/20/child-deaths-are-52-percent-higher-since-they-were-offered-the-covid-19-vaccine/">Child deaths are 52% higher than the 5-year-average since they were offered the Covid-19 vaccine, after previously being 14% down according to ONS data</a>&nbsp;</strong></p>
                    <p><strong><a href="https://navajotimes.com/reznews/get-vaccinated-or-lose-your-job-tuba-city-hospital-workers-question-covid-19-vaccine-mandate/">‘Get vaccinated or lose your job’: Tuba City hospital workers question COVID-19 vaccine mandate</a></strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/moderna-history-failure-covid-vaccine/?utm_source=salsa&amp;eType=EmailBlastContent&amp;eId=9d898720-dfb2-40c8-af3c-08a772840b5e">Moderna Had a Long History of Failure. Then Along Came COVID.</a></strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/desantis-special-session-fight-federal-vaccine-mandates/?utm_source=salsa&amp;eType=EmailBlastContent&amp;eId=9d898720-dfb2-40c8-af3c-08a772840b5e">Florida Governor Calls for Special Session to Fight Federal Vaccine Mandates</a></strong></p>
                    <p><strong><a href="https://www.peoplealwayswin.com/2021/10/21/told-you-so-rand-paul-does-victory/">“TOLD YOU SO”; Rand Paul Does Victory Lap After NIH Proves Fauci Was Lying</a></strong></p>
                    <p><strong><a href="https://halturnerradioshow.com/index.php/en/news-page/world/1-000-lawyers-and-10-000-doctors-have-filed-a-lawsuit-for-covid-19-vaccine-violations-of-the-nuremberg-code">1,000 Lawyers and 10,000 Doctors Have Filed a Lawsuit for COVID-19 “Vaccine” Violations of the Nuremberg Code</a></strong></p>
                    <p><strong><a href="https://www.americanthinker.com/articles/2021/10/covid_and_medical_ethics.html">COVID and Medical Ethics</a></strong></p>
                    <p><strong><a href="https://sharylattkisson.com/2021/10/report-most-military-comply-with-covid-19-vaccine-mandate-but-12000-in-air-force-are-still-noncompliant/?utm_source=ActiveCampaign&amp;utm_medium=email&amp;utm_content=Sharyl+Attkisson+Daily+Newsletter&amp;utm_campaign=Daily+Newsletter">REPORT: Most military comply with Covid-19 vaccine mandate but 12,000 in Air Force are still noncompliant</a></strong></p>
                    <p><strong><a href="https://www.zerohedge.com/covid-19/nih-admits-funding-gain-function-covid-experiments-gives-ecohealth-five-days-report?utm_source=&amp;utm_medium=email&amp;utm_campaign=199">NIH Admits Funding Gain-Of-Function COVID Experiments; Gives EcoHealth Five Days To Report Data</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/in-n-out-burger-wont-ask-customers-for-jab-status-we-refuse-to-become-the-vaccination-police/">In-N-Out Burger won’t ask customers for jab status: ‘We refuse to become the vaccination police’</a>&nbsp;</strong></p>
                    <p><strong><a href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1023849/Vaccine_surveillance_report_-_week_40.pdf">UK: COVID-19 vaccine surveillance report Week 40 PR 2</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/10/22/intravenous-injection-covid-vaccine.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1HL&amp;cid=20211022&amp;mid=DM1024720&amp;rid=1300229789">Warning: The COVID Jabs Are Administered Incorrectly</a></strong></p>
                    <p><strong><a href="https://noorchashm.medium.com/faucis-noble-lie-denying-that-the-covid-recovered-and-already-immune-are-equally-if-not-7c4a82abc68">Fauci’s “Noble Lie”: Denying That The COVID-Recovered and Already Immune Are Equally, If Not Better, Protected From Infection Than The Vaccinated.</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/top-doctors-and-scientists-sue-the-fda-to-obtain-the-data-used-to-approve-pfizer-jab/">Dr. Peter McCullough, other top doctors sue FDA for Pfizer vaccine data</a></strong></p>
                    <p><strong><a href="https://brownstone.org/articles/florida-registers-nations-lowest-covid-case-numbers/?fbclid=IwAR0YjIX9PoflgeXpaM258CMzfy7TaFQsfYK2rI6Os3x73y-GiG8XNpuPc4U">Florida Registers Nation’s Lowest COVID Case Numbers</a></strong></p>
                    <p><strong><a href="https://noqreport.com/2021/10/21/the-truth-about-breakthrough-infections/">The Truth About Breakthrough Infections</a></strong></p>
                    <p><strong><a href="https://dailycaller.com/2021/10/20/joseph-ladapo-mask-mandate-kids/">Florida Surgeon General Says Unequivocally, ‘Data Does Not Support’ Masking School Children</a></strong></p>
                    <p><strong><a href="https://www.instagram.com/p/CVOfmDzAW6K/?utm_medium=share_sheet">Its always about the money in COVID</a>&nbsp;</strong></p>
                    <p><strong><a href="https://brownstone.org/articles/the-decay-of-science-in-the-age-of-lockdowns/">The Decay of Science in the Age of Lockdowns</a></strong></p>
                    <p><strong><a href="https://collateralglobal.org/article/report-the-impact-of-pandemic-restrictions-on-childhood-mental-health/">CG REPORT 3: The Impact of Pandemic Restrictions on Childhood Mental Health</a></strong></p>
                    <p><strong><a href="https://www.washingtontimes.com/news/2021/oct/20/why-is-questioning-covid-19-groupthink-considered-/">Why is questioning COVID-19 groupthink considered dangerous?</a></strong></p>
                    <p><strong><a href="https://www.aier.org/article/the-fdas-war-against-the-truth-on-ivermectin/">The FDA’s War Against the Truth on Ivermectin</a></strong></p>
                    <p><strong><a href="https://www.tandfonline.com/doi/full/10.1080/13571516.2021.1976051?journalCode=cijb20&amp;">Covid-19 Lockdown Cost/Benefits: A Critical Assessment of the Literature</a></strong></p>
                    <p><strong><a href="https://aaronsiri.substack.com/p/whistleblower-fda-and-cdc-ignore-3e2?utm_campaign=post&amp;utm_medium=web&amp;utm_source=">Whistleblower: FDA and CDC Ignore Damning Report that over 90% of a Hospital’s Admissions were Vaccinated for Covid-19 and No One Was Reporting This to VAERS</a></strong></p>
                    <p><strong><a href="https://pubmed.ncbi.nlm.nih.gov/33224380/">Metabolic Syndrome and COVID-19</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/10/21/vaccine-induced-mortality.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1HL&amp;cid=20211021_HL2&amp;mid=DM1023965&amp;rid=1299224099">Are the COVID Jabs Responsible for Rising Mortality Trends? Mercola</a></strong></p>
                    <p><strong><a href="https://lucas.travel/102121tsa/">TSA Adds to Terrorist Watchlist Kentucky Man Who Sued Agency 2 Days Ago over Mask Mandate</a></strong></p>
                    <p><strong><a href="https://lucas.travel/102121tsa/">Frequent Flyer Searched Extensively, Denied Boarding United Flight after Fainting</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/florida-governor-calls-for-special-session-to-block-vaccine-and-mask-mandates_4060820.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-10-21-1&amp;mktids=d760be34fda8936686ba4e5ac93bf21a&amp;est=kvXFd5QGwacLauOidvWZpRKnlW6UaubvtgQByZVL1MTA7FWaY3oHbr0K4BPzHMsc">Florida Governor Calls for Special Session to Counter Vaccine and Mask Mandates</a></strong></p>
                    <p><strong><a href="https://www.rickscott.senate.gov/2021/10/video-release-democrats-block-sen-rick-scott-s-legislation-to-prevent-vaccine-mandates-for-government-assistance">Democrats Block Sen. Rick Scott’s Legislation to Prevent Vaccine Mandates for Government Assistance</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/vaccine-passports-will-create-a-global-digital-infrastructure-of-surveillance-former-ontario-privacy-commissioner_4059307.html?utm_source=morningbriefnoe&amp;utm_medium=email_MB&amp;utm_campaign=mb-2021-10-20&amp;utm_content=News_Vaccine_Passports_Will&amp;est=EMiRBen%2FX63gAnPiuWq%2FuGeo%2BajWgy2%2BClxTandpVfdZtRdv9XZ2jBA8nc6tDh%2FP">Vaccine Passports Will Create a ‘Global Digital Infrastructure of Surveillance’: Former Ontario Privacy Commissioner</a></strong></p>
                    <p><strong><a href="https://pubmed.ncbi.nlm.nih.gov/34326466/">Response to mRNA vaccination for COVID-19 among patients with multiple myeloma</a></strong></p>
                    <p><strong><a href="https://ca.news.yahoo.com/canada-vaccine-passport-covid19-international-travel-proof-of-vaccination-certificate-152654486.html">Canada’s COVID-19 travel vaccine passport: Canadian government reveals standardized, national proof of vaccination</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/federal-reserve-businesses-say-vaccine-mandates-are-hurting-employment_4061045.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-10-21-2&amp;mktids=be402a9f072dfcd5c42d5264c5c39779&amp;est=KUn%2FIyTMb8wuqd2MDyMX0noZZht81gBu%2FZQQr03aodjJnMxUZUt%2BxriLCIre1ye1">Federal Reserve: Businesses Say Vaccine Mandates Are Hurting Employment</a></strong></p>
                    <p><strong><a href="https://www.wbaltv.com/article/covid-19-vaccine-hospitalization-maryland/37503110">Data shows increase of vaccinated people among hospitalized Marylanders</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/fully-vaccinated-are-covid-super-spreaders-says-inventor-of-mrna-technology/">Fully vaccinated are COVID ‘super-spreaders,’ says inventor of mRNA technology</a></strong></p>
                    <p><strong><a href="https://lucas.travel/101921tsa/">12 Flyers &amp; Ex-Flight Attendant File 6 Lawsuits Across the Nation Challenging TSA Mask Mandate</a></strong></p>
                    <p><strong><a href="https://www.zerohedge.com/covid-19/doctors-can-prescribe-ivermectin-hydroxychloroquine-label-covid-19-nebraska-ag">Doctors Can Prescribe Ivermectin, Hydroxychloroquine Off-Label For COVID-19: Nebraska AG</a></strong></p>
                    <p><strong><a href="https://www.westernjournal.com/osha-will-not-make-employers-record-worker-side-effects-forced-covid-vaccine/?utm_source=Email&amp;utm_medium=conservative-brief-WJ&amp;utm_campaign=dailypm&amp;utm_content=western-journal&amp;ats_es=%5B-MD5-%5D">OSHA Will Not Make Employers Record Worker Side Effects from Forced COVID Vaccine</a></strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/10/taiwan-deaths-vaccination-covid-19/">TAIWAN: More Deaths from Vaccination than from COVID-19</a></strong></p>
                    <p><strong><a href="https://www.scribd.com/document/531564267/US-DoD-Project-Salus-Humetrix-VE-Study-2021-09-28a">US DoD Project Salus Humetrix VE Study 2021-09-28a</a></strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/nebraska-ag-doug-peterson-legal-opinion-ivermectin-hcq-covid/?utm_source=salsa&amp;eType=EmailBlastContent&amp;eId=a9f67b5a-4f9b-4b78-8124-bec5425eb630&amp;eType=EmailBlastContent&amp;eId=a9f67b5a-4f9b-4b78-8124-bec5425eb630">Ground breaking: Nebraska AG Says Doctors Can Legally Prescribe Ivermectin, HCQ for COVID, Calls Out FDA, CDC, Fauci, Media for ‘Fueling Confusion and Misinformation’</a></strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/10/report-indiana-walgreens-accidentally-gives-pfizer-covid-jabs-4-5-yr-old-siblings-pediatric-cardiologist-reportedly-treating-kids-heart-issues-video/">REPORT: Indiana Walgreens “Accidentally” Gives Pfizer COVID Jabs To 4 and 5 Yr Old Siblings…Pediatric Cardiologist Is Reportedly Treating Both Kids For Heart Issues [VIDEO]</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/racial-bias-challenge-to-new-york-citys-vaccine-passport-system-rejected-by-federal-judge_4045093.html?utm_source=newsnoe&amp;utm_medium=email&amp;utm_campaign=breaking-2021-10-12-3&amp;mktids=ac9b3b03ccc3bc4240eab23548f71a22&amp;est=zLLKsnZf3zHmI7N4A7sVxb7bssWnOtVOqhxsxQtyI4uLOqoDSegLMFaLrdKa970e5TsUIPHn">Federal Judge Grants Injunction Against NY COVID-19 Vaccine Mandate for Health Care Workers</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/opinion/abp-vigano-a-pandemic-sanhedrin-is-spinning-a-labyrinth-of-covid-lies/">Abp. Viganò: the ‘pandemic Sanhedrin’ is spinning a ‘labyrinth’ of COVID lies</a></strong></p>
                    <p><strong><a href="https://news.wttw.com/2021/10/13/unvaccinated-chicago-teachers-can-keep-working-if-they-agree-weekly-covid-19-testing">Unvaccinated Chicago Teachers Can Keep Working if They Agree to Weekly COVID-19 Testing</a></strong></p>
                    <p><strong><a href="https://www.mdedge.com/hematology-oncology/article/247004/coronavirus-updates/eu-finds-jj-covid-shot-possibly-linked?uac=17589HT&amp;sso=true&amp;ecd=wnl_eveningnews_211009_mdedge_9am&amp;utm_medium=email&amp;utm_source=NewsMDedgeeNL100921F&amp;utm_content=J%26J%20vaccine%20linked%20to%20another%20clotting%20condition">EU finds J&amp;J COVID shot possibly linked to another rare clotting condition</a></strong></p>
                    <p><strong><a href="https://americanconsequences.com/dr-ron-paul-the-great-southwest-airlines-rebellion/">The Great Southwest Airlines Rebellion</a></strong></p>
                    <p><strong><a href="https://www.eutimes.net/2021/10/australias-gladys-berejiklian-was-bribed-and-blackmailed-to-impose-the-mandate/">Australia’s Gladys Berejiklian was Bribed and Blackmailed to Impose the Mandate</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/pope-joins-2-day-ecumenical-prayer-meeting-to-promote-fraternity-vaccines/">Pope Francis calls for ‘more vaccines’ at meeting of world leaders in Rome</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/billionaire-supermarket-owner-warns-food-prices-will-go-up-tremendously_4055057.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-10-18-3&amp;mktids=c03604fb4195daff118c1b6a3bf35158&amp;est=d%2BcoWCW9QSH%2BYOV%2FQi7DSHelyvlzzGSBRTMqRSZLWSR1meglAZ8jId159mZlZtgL">Billionaire Supermarket Owner Warns: Food Prices Will Go Up ‘Tremendously’</a></strong></p>
                    <p><strong><a href="https://www.bmj.com/content/372/bmj.n149">Covid-19: Norway investigates 23 deaths in frail elderly patients after vaccination</a></strong></p>
                    <p><strong><a href="https://www.rintrah.nl/too-many-people-are-dying-and-its-starting-to-worry-the-demographers/">Too many people are dying and it’s starting to worry the demographers</a></strong></p>
                    <p><strong><a href="https://americanmilitarynews.com/2021/09/army-flight-surgeon-says-pilots-risk-sudden-cardiac-death-from-covid-vaccine-side-effect/">Army flight surgeon says pilots risk ‘sudden cardiac death’ from COVID vaccine side effect</a></strong></p>
                    <p><strong><a href="https://ethics.harvard.edu/blog/risky-drugs-why-fda-cannot-be-trusted">Risky Drugs: Why The FDA Cannot Be Trusted</a></strong></p>
                    <p><strong><a href="https://www.dailyherring.com/blog/nebraskaagopinion?fbclid=IwAR2fgzDTy6CWYXBjzaTUqoTedBVNu-Dk4trrB8R3IAfkA5s7wc_ApJtJ2W8">Nebraska Attorney General Calls Out Pharmaceutical Misconduct</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/legal-group-sues-ontario-over-vaccine-passport-mandate_4054911.html?utm_content=News_CA_Legal_Group_Sues?utm_medium=email_BN&amp;utm_source=newsnoe&amp;utm_campaign=EET_BreakingNews_10-18-2021-noe-Canada-free-sub-2&amp;est=elias98_99%40yahoo.com">Legal Group Sues Ontario Government Over Vaccine Passport Mandate</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/10/18/vaccine-mandate-dissenters-smeared.aspx">Vaccine Mandate Dissenters Smeared</a></strong></p>
                    <p><strong><a href="https://theexpose.uk/2021/10/15/its-worse-than-we-thought-fully-covid-vaccinated-ade/">It gets worse – A comparison of official Government reports suggest the Fully Vaccinated are developing Acquired Immunodeficiency Syndrome much faster than anticipated</a></strong></p>
                    <p><strong><a href="https://aaronsiri.substack.com/p/whistleblower-fda-and-cdc-ignore-3e2">Whistleblower: FDA and CDC Ignore Damning Report that over 90% of a Hospital’s Admissions were Vaccinated for Covid-19 and No One Was Reporting This to VAERS</a></strong></p>
                    <p><strong><a href="https://aaronsiri.substack.com/p/whistleblower-fda-and-cdc-ignore-3e2">Physician Assistant, Deborah Conrad, bravely reports these harms and is barred from filing VAERS reports</a></strong></p>
                    <p><strong><a href="https://www.eastonspectator.com/2021/09/16/all-vaxxinated-people-must-quarantine-over-the-winter-months-or-risk-serious-illness/">All Vaccinated People Must Quarantine Over the Winter Months or Risk Serious Illness!!</a></strong></p>
                    <p><strong><a href="https://www.science.org/content/article/fights-over-confidentiality-pledge-and-conflicts-interest-tore-apart-covid-19-origin-probe">Fights over confidentiality pledge and conflicts of interest tore apart COVID-19 origin probe&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></strong></p>
                    <p><strong><a href="https://www.bitchute.com/video/WaZTrDEOYbzB/">JABICIDE : MRNA VACCINE BIOWEAPON IS HITTING THE COURTS</a></strong></p>
                    <p><strong><a href="https://rumble.com/vnsu05-horrific-vaccine-mandate-nears-in-the-dominican-republic.html">‘Horrific’ vaccine mandate nears in the Dominican Republic</a>&nbsp;</strong></p>
                    <p><strong><a href="https://rumble.com/vnxbra-honest-data-and-a-team-of-physician-experts-not-just-fauci-alone-are-needed.html">Honest Data, &amp; A Team of Physician Experts, Not Just Fauci Alone, are Needed to End Pandemic</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/vermont-woman-fired-denied-unemployment-for-refusing-vaccine-becomes-homeless-and-flees-to-florida_4030883.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-10-04-3&amp;mktids=4cf0597a1f74e90a0748b61962831c60&amp;est=R7g9LSF4R0gSpNkmT5jbEdzOrQdjp44NDb%2BMuQNQttVOH%2FXuJGWCO8fdsn2UfiKO" target="_blank" rel="nofollow noopener" data-saferedirecturl="https://www.google.com/url?q=https://www.theepochtimes.com/mkt_breakingnews/vermont-woman-fired-denied-unemployment-for-refusing-vaccine-becomes-homeless-and-flees-to-florida_4030883.html?utm_source%3Dnewsnoe%26utm_medium%3Demail2%26utm_campaign%3Dbreaking-2021-10-04-3%26mktids%3D4cf0597a1f74e90a0748b61962831c60%26est%3DR7g9LSF4R0gSpNkmT5jbEdzOrQdjp44NDb%252BMuQNQttVOH%252FXuJGWCO8fdsn2UfiKO&amp;source=gmail&amp;ust=1634719447173000&amp;usg=AFQjCNEjUV86g6HhGI7Ntk0lt82SQTdNBw">Vermont Woman Fired, Denied Unemployment for Refusing Vaccine, Becomes Homeless and Flees to Florida</a><span lang="EN-US">&nbsp;</span></strong></p>
                    <p><strong><a href="https://www.ispsw.com/wp-content/uploads/2020/04/689_Lin.pdf" target="_blank" rel="nofollow noopener" data-saferedirecturl="https://www.google.com/url?q=https://www.ispsw.com/wp-content/uploads/2020/04/689_Lin.pdf&amp;source=gmail&amp;ust=1634719447173000&amp;usg=AFQjCNF2zrqLr_KgtJTRuYC02rhhyJ6tjQ"><span lang="EN-US">Why US outsourced bat virus research to Wuhan</span></a></strong></p>
                    <p><strong><a href="https://ourpatriot.com/fired-nurses-in-new-york-are-burning-their-scrubs-to-protest-vaccine-mandate/" target="_blank" rel="nofollow noopener" data-saferedirecturl="https://www.google.com/url?q=https://ourpatriot.com/fired-nurses-in-new-york-are-burning-their-scrubs-to-protest-vaccine-mandate/&amp;source=gmail&amp;ust=1634719447173000&amp;usg=AFQjCNF7SwGX82ps77dxlFOnvZ4D0Hk3Iw">Fired Nurses in New York Burning Their Scrubs to Protest Vaccine Mandate</a></strong></p>
                    <p><strong><a href="https://www.newsweek.com/china-purchased-mass-quantity-pcr-tests-months-before-first-reported-case-covid-1635505" target="_blank" rel="nofollow noopener" data-saferedirecturl="https://www.google.com/url?q=https://www.newsweek.com/china-purchased-mass-quantity-pcr-tests-months-before-first-reported-case-covid-1635505&amp;source=gmail&amp;ust=1634719447173000&amp;usg=AFQjCNE6lMwbOJZcqb2s6lN2OYCwtjL_4Q">China Purchased Mass Quantity of PCR Tests Months Before First Reported Case of COVID</a></strong></p>
                    <div><strong><a href="https://usawatchdog.com/unvaxed-at-risk-from-vaxed-in-coming-dark-winter-karen-kingston/" target="_blank" rel="nofollow noopener" data-saferedirecturl="https://www.google.com/url?q=https://usawatchdog.com/unvaxed-at-risk-from-vaxed-in-coming-dark-winter-karen-kingston/&amp;source=gmail&amp;ust=1634719447173000&amp;usg=AFQjCNEwYpUqTR0kOINV7rqoMUOuQxPR7w">Unvaxed at Risk from Vaxed in Coming Dark Winter – Karen Kingston</a></strong></div>
                    <p><strong><a href="https://www.sciencedirect.com/science/article/pii/S0146280621002267" target="_blank" rel="nofollow noopener" data-saferedirecturl="https://www.google.com/url?q=https://www.sciencedirect.com/science/article/pii/S0146280621002267&amp;source=gmail&amp;ust=1634719447173000&amp;usg=AFQjCNEhH-8HYHwuRt2p1lMCQfM52al6ag">A Report on Myocarditis Adverse Events in the U.S. Vaccine Adverse Events Reporting System (VAERS) in Association with COVID-19 Injectable Biological Products</a></strong></p>
                    <p><strong><a href="https://dailysceptic.org/2021/10/06/new-lancet-study-confirms-plummeting-vaccine-effectiveness/" target="_blank" rel="nofollow noopener" data-saferedirecturl="https://www.google.com/url?q=https://dailysceptic.org/2021/10/06/new-lancet-study-confirms-plummeting-vaccine-effectiveness/&amp;source=gmail&amp;ust=1634719447173000&amp;usg=AFQjCNGLsa1fl9FReZsqza4y0ZheHG1T4w">New Lancet Study Confirms Plummeting Vaccine Effectiveness</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/10/06/covid-vaccine-booster.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1ReadMore&amp;cid=20211006&amp;mid=DM1011575&amp;rid=1285035058" target="_blank" rel="nofollow noopener" data-saferedirecturl="https://www.google.com/url?q=https://articles.mercola.com/sites/articles/archive/2021/10/06/covid-vaccine-booster.aspx?ui%3Dbfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711%26sd%3D20210227%26cid_source%3Ddnl%26cid_medium%3Demail%26cid_content%3Dart1ReadMore%26cid%3D20211006%26mid%3DDM1011575%26rid%3D1285035058&amp;source=gmail&amp;ust=1634719447173000&amp;usg=AFQjCNEQmBepTqKmPDmWn7yJ3g4Nvjghkg">CDC Director Overrules Expert Panel on Booster Policy</a></strong></p>
                    <p><strong><a href="https://carter-heavy-industries.com/2020/05/28/complete-coronavirus-pandemic-timeline/" target="_blank" rel="noopener">The timeline: if it happened it is probably here</a></strong></p>
                    <p><strong>This link lists all major occurrences, reports, media statements etc. on COVID-19 from the inception in early 2020. “This is a chronological timeline of events leading up to, and including the ‘pandemic’. What It’s is NOT is a regurgitation of the narrative you’ve already been pummeled with, but rather the other side, or what some might call the truth. The focus is how the situation is being used to enact global tyranny, a suspicious vaccination plan, and the World Economic Forum’s ‘Great Reset’, among other agendas. It’s the most comprehensive timeline out there, and is constantly updated. Still much to be added. If you feel there is a relevant event missing, please send us the link”.</strong></p>
                    <p><strong><a href="https://science.sciencemag.org/content/early/2021/04/29/science.abh1282" target="_blank" rel="noopener">Prior SARS-CoV-2</a> infection rescues B and T cell responses to variants after first vaccine dose.</strong></p>
                    <p><strong>“SARS-CoV-2 vaccine rollout has coincided with the spread of variants of concern. We investigated if single dose vaccination, with or without prior infection, confers cross protective immunity to variants. Analyzed T and B cell responses after first dose vaccination with the Pfizer/BioNTech mRNA vaccine BNT162b2 in healthcare workers (HCW) followed longitudinally, with or without prior Wuhan-Hu-1 SARS-CoV-2 infection. After one dose, individuals with prior infection showed enhanced T cell immunity, antibody secreting memory B cell response to spike and neutralizing antibodies effective against B.1.1.7 and B.1.351. By comparison, HCW receiving one vaccine dose without prior infection showed reduced immunity against variants. B.1.1.7 and B.1.351 spike mutations resulted in increased, abrogated or unchanged T cell responses depending on human leukocyte antigen (HLA) polymorphisms. Single dose vaccination with BNT162b2 in the context of prior infection with a heterologous variant substantially enhances neutralizing antibody responses against variants”.</strong></p>
                    <p><strong><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8057721/" target="_blank" rel="noopener">COVID-19 vaccine efficacy</a> and effectiveness—the elephant (not) in the room.</strong></p>
                    <p><strong>“Approximately 96 COVID-19 vaccines are at various stages of clinical development.<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8057721/#bib1">1</a>&nbsp;At present, we have the interim results of four studies published in scientific journals (on the Pfizer–BioNTech BNT162b2 mRNA vaccine,<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8057721/#bib2">2</a>&nbsp;the Moderna–US National Institutes of Health [NIH] mRNA-1273 vaccine,<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8057721/#bib3">3</a>&nbsp;the AstraZeneca–Oxford ChAdOx1 nCov-19 vaccine,<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8057721/#bib4">4</a>&nbsp;and the Gamaleya GamCovidVac [Sputnik V] vaccine)<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8057721/#bib5">5</a>&nbsp;and three studies through the US Food and Drug Administration (FDA) briefing documents (on the Pfizer–BioNTech,<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8057721/#bib6">6</a>&nbsp;Moderna–NIH,<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8057721/#bib7">7</a>&nbsp;and Johnson &amp; Johnson [J&amp;J] Ad26.COV2.S vaccines).<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8057721/#bib8">8</a>&nbsp;Furthermore, excerpts of these results have been widely communicated and debated through press releases and media, sometimes in misleading ways.<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8057721/#bib9">9</a>&nbsp;Although attention has focused on vaccine efficacy and comparing the reduction of the number of symptomatic cases, fully understanding the efficacy and effectiveness of vaccines is less straightforward than it might seem. Depending on how the effect size is expressed, a quite different picture might emerge”.</strong></p>
                    <p><strong><a href="https://link.springer.com/article/10.1186/s40545-021-00326-7" target="_blank" rel="noopener">Potential&nbsp;adverse events in Japanese women</a> who received COVID-19 vaccine (tozinameran).</strong></p>
                    <p><strong>“Reports of cerebral venous sinus thrombosis and intracranial hemorrhage (ICH) following the administration of coronavirus vaccines have raised concerns regarding their safety. Although no regulatory authority has recognized ICH as an adverse event associated with tozinameran COVID-19 vaccine (BNT162b2, Pfizer-BioNTech), fatal and non-fatal cases have been reported. In Japan, 10 fatal cases (five men and women) have been reported to date. Four of the five women died of ICH and the other died of aspiration pneumonia, whereas all five men died of causes other than stroke. This imbalance is incompatible with the mortality data on cardiovascular diseases in the National Statistics, which show no apparent disparity between sexes or between hemorrhagic and ischemic stroke. Cumulatively, our analysis reveals a disproportionately high incidence of death by ICH in Japanese women who received tozinameran, suggesting a potential association of ICH with the vaccine. Although we understand that the benefits of tozinameran still outweigh the risks, we believe that a causal link with the vaccine is not proven but possible and warrants further analysis”.</strong></p>
                    <p><strong><a href="https://indianbarassociation.in/wp-content/uploads/2021/05/Legal-Notice-to-Dr.-Soumya-Swaminathan_Chief-Scientist-WHO-1.pdf" target="_blank" rel="noopener">The Indian Bar Association</a> has served notice on WHO for disparaging early treatments such as ivermectin:</strong></p>
                    <p><strong>Subject: 1. Running a disinformation campaign against Ivermectin by deliberate suppression of effectiveness of drug Ivermectin as prophylaxis and for treatment of COVID-19, despite the existence of large amounts of clinical data compiled and presented by esteemed, highly qualified, experienced medical doctors and scientists.</strong></p>
                    <p><strong>2. Issuing statements in social media and mainstream media, thereby influencing the public against the use of Ivermectin and attacking the credibility of acclaimed bodies/institutes like ICMR and AIIMS, Delhi, which have included ‘Ivermectin’ in the ‘National Guidelines for COVID-19 management’</strong></p>
                    <p><strong><a href="https://pubmed.ncbi.nlm.nih.gov/32556892/" target="_blank" rel="noopener">The Role of Anticoagulation</a> in COVID-19-Induced Hypercoagulability</strong></p>
                    <p><strong>“The incidence of thrombotic disease in individuals affected by COVID-19 is reported as high as 31%. A significant mortality benefit has been observed with the use of therapeutic anticoagulation in high-risk individuals. Literature supports the use of scoring systems, such as the sepsis-induced coagulopathy score, to risk-stratify individuals who might benefit from anticoagulation. COVID-19-induced hypercoagulability has been demonstrated to play a significant role in overall COVID-19 outcomes. Current literature shows promising evidence with the use of therapeutic anticoagulation in high-risk individuals. Further studies are needed to better analyze the risks and benefits of anticoagulation in this specific patient population”.</strong></p>
                    <p><strong><a href="http://www.ronpaulinstitute.org/archives/peace-and-prosperity/2021/may/26/life-insurance-and-covid-19-something-doesn-t-make-sense/" target="_blank" rel="noopener">Life insurance and COVID-19</a>; it does not make sense</strong></p>
                    <p><strong>“You would think that during the worst Pandemic since the 1918 Spanish Flu life insurance companies would be hedging their bets to avoid major losses from Covid-19. I haven’t written a life policy for several years so I was wondering what was going on? I called one of the brokers I deal with that interacts with hundreds of big life insurers to get an inside look into how the Covid crisis has changed their business.</strong></p>
                    <p><strong>Imagine my surprise when she said it was pretty much business as usual! Last year when the hysteria was just getting ramped up she did say the companies temporarily tightened up underwriting and reduced the amount of coverage they would offer. But as time went by and the hard data came rolling in those same companies went back to business as usual.</strong></p>
                    <p><strong>I asked her specifically if life insurers wanted a Covid test as part of the underwriting process and she said none that she was aware of. Hmm, that’s pretty interesting isn’t it? The most lethal pandemic in decades descends on the globe with deadly mutations taking millions of innocent lives and the life insurance companies couldn’t care less.</strong></p>
                    <p><strong>I also asked if the cost per thousand of coverage had increased due to Covid and again she said no. Rates were pretty much the same as they were before the Covid Pandemic ravaged the earth. Life Insurance companies are very risk adverse. They don’t like losing money to unnecessary claims. The fact they’re treating Covid as a nonevent should be an indicator that something is very wrong with the whole narrative”.</strong></p>
                    <p><strong><a href="https://www.newsmax.com/newsfront/vaccines-government-employers-covid/2021/05/28/id/1023159/" target="_blank" rel="noopener">Employers Can Require Vaccinations</a> Under Biden Rule</strong></p>
                    <p><strong><a href="https://www.reuters.com/world/us/health-workers-sue-texas-hospital-over-compulsory-vaccinations-washington-post-2021-05-30/" target="_blank" rel="noopener">Health workers sue Texas hospital</a> over compulsory vaccinations – Washington Post</strong></p>
                    <p><strong>A group of 117 healthcare workers at a Texas hospital filed a lawsuit in state court against their employer’s mandate requiring all staff to get COVID-19 vaccinations, Washington Post&nbsp;<a href="https://www.washingtonpost.com/nation/2021/05/29/texas-hospital-vaccine-lawsuit/?utm_campaign=wp_main&amp;utm_medium=social&amp;utm_source=twitter">reported</a>&nbsp;on Saturday. Employees of Houston Methodist Hospital said in the lawsuit that their employer’s compulsory immunization requirement violated the Nuremberg Code, a set of standards designed after World War Two to prevent experimentation on human subjects without their consent, the Post reported. They also said the hospital presented them with the choice of either getting a vaccine or losing their job, which violated state law, and asked the court to bar Houston Medical from firing unvaccinated staffers, the report said.</strong></p>
                    <p><strong><a href="https://www.independent.ie/world-news/coronavirus/how-new-covid-test-requirements-for-children-will-add-hundreds-of-euro-to-the-cost-of-your-holiday-40489717.html" target="_blank" rel="noopener">How new Covid test requirements for children</a> will add hundreds of euro to the cost of your holiday</strong></p>
                    <p><strong>Parents who take their children abroad on holiday from July face a bill that could run to hundreds of euro&nbsp;for Covid-19 tests. Under European Commission recommendations for the Digital Covid Cert, only children under six should be allowed enter or exit an EU country without a Covid-19 test.</strong></p>
                    <p><strong>The test can be either a PCR or antigen test, depending on the decision of the member state. A PCR test costs up to €185 and an antigen could be up to €89.</strong></p>
                    <p><strong><a href="https://vancouversun-com.cdn.ampproject.org/c/s/vancouversun.com/news/local-news/a-dozen-kids-mistakenly-given-the-wrong-covid-19-vaccine-in-vancouver/wcm/21831fd0-df4d-489e-9d27-aaacabe85e3a/amp/" target="_blank" rel="noopener">COVID-19: A dozen kids mistakenly given the wrong vaccine in Vancouver</a></strong></p>
                    <p><strong>For children ages 12-17, EVERY vaccine is the wrong vaccine.</strong></p>
                    <p><strong>The health authority says the errors happened Friday and Saturday during the first full week that kids aged 12 to 17 could get their first dose.</strong></p>
                    <p><strong>Vancouver Coastal Health is apologizing and says it’s updating its immunization processes after confirming a dozen incidents in which youth were given the wrong COVID-19 vaccine. The health authority says the errors happened Friday and Saturday during the first full week that kids aged 12 to 17 could get their first dose. It says in a statement that 12 youth received doses of Moderna rather than the Pfizer-BioNTech vaccine, which is the only COVID-19 vaccine approved for use in those between 12 and 17 in Canada.</strong></p>
                    <p><strong><a href="https://ca.news.yahoo.com/israel-sees-probable-between-pfizer-223442230.html" target="_blank" rel="noopener">Israel sees probable link between Pfizer vaccine</a> and <a href="https://www.zerohedge.com/covid-19/israel-spots-probable-link-between-pfizer-vaccine-myocarditis" target="_blank" rel="noopener">myocarditis cases</a></strong></p>
                    <p><strong>Israel’s Health Ministry said on Tuesday it found the small number of heart inflammation cases observed mainly in young men who received Pfizer’s COVID-19 vaccine in Israel were likely linked to their vaccination. “So far, the vaccine has been administered to 5 million people in the country and could soon be expanded to teens as young as <a href="https://www.zerohedge.com/covid-19/israel-spots-probable-link-between-pfizer-vaccine-myocarditis" target="_blank" rel="noopener">12-15 years old</a>”.</strong></p>
                    <p><strong>Stephanie Seneff with Mercola: “<a href="https://mercola.fileburst.com/PDF/ExpertInterviewTranscripts/DrMercola-JudyMikovits-StephanieSeneff-COVIDvaccine.pdf" target="_blank" rel="noopener">But then I think maybe the most disturbing thing to me is they actually modified the code</a> so that it doesn’t produce a normal version of the spike protein.&nbsp;It produces a version that has a couple of prolines in it side by side at the critical place where this spike protein normally would fuse with the cell that it’s infecting.&nbsp;So the spike protein binds to the ACE2 receptor once it’s produced by the human cell, according to the vaccine instructions.&nbsp;But it’s a modified version of the spike protein. It has these two prolines that make it very stiff so that it can’t reshape. Normally it would bind to the ACE2 receptor and then it would reshape and go straight into the membrane like a spear.&nbsp;And because of this redesign, it can’t do that so it sits there on the ACE2 receptor exposed.</strong></p>
                    <p><strong>And of course, this makes it much easier for the antibodies to be produced because I mean it can’t hide its underbelly because it’s been engineered to keep itself open. And that&nbsp;allows the immune cells to produce antibodies specific to that place where it should be fusing with the cell, the fusion domain. It messes up the fusion domain, keeps the protein open and prevents the protein from getting in, which means the protein and my guessing, it’ll just stick there on the ACE2 receptor disabling it.&nbsp;And when you disable ACE2 receptors in the heart, you get heart failure.&nbsp;When you disable them in the lungs you get pulmonary hypertension. When you do it in the brain you get stroke. I mean, there are lots of nasty things that happen from disabling ACE2 receptors. So their body’s going to be&nbsp;producing all these spike proteins in the spleen and then shipping them out&nbsp;and then they’re going to get into the circulation and cause lots and lots of trouble, I would predict”.</strong></p>
                    <p><strong><a href="https://tnc.news/2021/05/25/bc-doctor-stripped-of-er-shifts-after-raising-covid-vaccine-side-effect-concerns/" target="_blank" rel="noopener">BC doctor stripped of ER shifts after raising COVID vaccine side effect concerns</a></strong></p>
                    <p><strong>A local BC family doctor is claiming that he is being reprimanded by health officials after speaking out about alleged Moderna vaccine complications when administering the drug to patients.</strong></p>
                    <p><strong>According to Dr. Charles Hoffe from Lytton, BC, he was suspended from the St. Bartholomew’s Health Centre’s emergency shift due to the alleged “vaccine hesitancy” his claims have caused.</strong></p>
                    <p><strong>“On 29th of April, 2021, the Interior Health Authority suspended my clinical privileges, for the crime of causing&nbsp;“vaccine hesitancy”, for speaking out about my vaccine injured patients.&nbsp; So I am no longer allowed to work in the ER,” Dr. Hoffe told True North.</strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/18-connecticut-teens-hospitalized-for-heart-problems-after-covid-vaccines-white-house-says-young-people-should-still-get-the-shots" target="_blank" rel="noopener">18 Connecticut teens hospitalized for heart problems after COVID vaccines</a>, White House says young people should still get the shots</strong></p>
                    <p><strong>The mother of 17-year-old Gregory Hatton, diagnosed with pericarditis within days of his second dose of the vaccine, said her son ‘basically has a heart condition now and it’s terrifying.’</strong></p>
                    <p><strong>All 18 cases resulted in hospitalization — the vast majority for a couple of days,&nbsp;<a href="https://www.nbcconnecticut.com/news/coronavirus/connecticut-confirms-at-least-18-cases-of-apparent-heart-problems-in-young-people-after-covid-19-vaccination/2494534/" target="_blank" rel="noopener">reported NBC Connecticut</a>. The cases were reported to the&nbsp;<a href="https://portal.ct.gov/DPH" target="_blank" rel="noopener">Connecticut Department of Public Health</a>&nbsp;by vaccine providers, said Deirdre Gifford, acting health commissioner.</strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/washington-post-labeling-lab-leak-as-debunked-conspiracy-theory-was-wrong_3840960.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-06-02-1&amp;mktids=99412fbe55cd735c2a3b56082a216eef&amp;est=hyqECPFmrqdbjqtQY22UNB%2BGUKrawrtpDiaO7Rosin2OppqPhVYr2I9GaFLb6agq" target="_blank" rel="noopener">Washington Post: Labeling Lab Leak as ‘Debunked Conspiracy Theory’ Was Wrong</a></strong></p>
                    <p><strong>The&nbsp;<a href="https://www.theepochtimes.com/t-washington-post">Washington Post</a>&nbsp;quietly has walked back its claims regarding the theory that the virus that causes COVID-19 escaped from a laboratory in Wuhan, China. The paper in February 2020 published an article claiming the idea was a “conspiracy theory” that had been “debunked.” The article attacked Sen. Tom Cotton (R-Ark.), who called for an investigation into the origins of the&nbsp;<a href="https://www.theepochtimes.com/giving-the-right-name-to-the-virus-causing-a-worldwide-pandemic-2_3277200.html" target="_blank" rel="noopener">CCP (Chinese Communist Party) virus</a>.</strong></p>
                    <p><strong><a href="https://www.cnbc.com/2021/06/01/covid-vaccine-moderna-applies-for-full-fda-approval.html" target="_blank" rel="noopener">Moderna applies for full FDA approval</a> of its Covid vaccine</strong></p>
                    <p><strong><a href="https://aapsonline.org/covid-19-are-vaccines-amazing-then-why-the-hesitancy/" target="_blank" rel="noopener">COVID-19: Are Vaccines Amazing? Then Why the Hesitancy?</a></strong></p>
                    <p><strong>There are several potential reasons for falling rates of a respiratory disease: (1) springtime warmer temperatures and more sunlight; (2)&nbsp;<a href="https://www.cebm.net/covid-19/covid-19-william-farrs-way-out-of-the-pandemic/" target="_blank" rel="noopener">Farr’s Law</a>&nbsp;(epidemics rise and fall in roughly a bell-shaped curve); (3) herd immunity (a sufficient number of immune persons in the population likely to be exposed); (4) adoption of early effective treatment (mostly outside the U.S. and Western Europe).</strong></p>
                    <p><strong><a href="https://freewestmedia.com/2021/05/26/new-pfizer-study-four-fifths-of-all-vaccinated-children-aged-12-and-over-complain-of-side-effects/" target="_blank" rel="noopener">New Pfizer study</a>: Four fifths of all vaccinated children aged 12 and over complain of side effects. “The new “factsheet” showed that the&nbsp;BioNTech/Pfizer&nbsp;vaccination was tested on 1097 children and adolescents from 12 to 15 years of age. At least 866 out of 1097 children developed some form of unpleasant side effect. In 466 the side effects were described as “mild”, in 393 they were “moderate” and in 7 they were described as “severe”.</strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-9658851/Genome-sequencing-certainly-proves-COVID-deliberately-lab-experts-claim.html" target="_blank" rel="noopener">‘Rare’ genome sequencing almost certainly proves Covid WAS deliberately made in a Chinese lab</a> before it leaked to the world: Another expert study makes bombshell claim</strong></p>
                    <p><strong>Two U.S. experts have penned a damning essay saying that science strongly suggests the novel&nbsp;<a href="http://live-us.andweb.dmgt.net/news/coronavirus/index.html" target="_blank" rel="noopener">coronavirus&nbsp;</a>was manufactured inside a Chinese laboratory.</strong></p>
                    <p><strong>The claim was made by Drs&nbsp;Stephen Quay, CEO of biopharmaceutical company Atossa Therapeutics Inc, and Richard Muller, a physics professor at the University of&nbsp;<a href="https://www.dailymail.co.uk/news/california/index.html" target="_blank" rel="noopener">California</a>&nbsp;Berkeley, in<a href="https://www.wsj.com/articles/the-science-suggests-a-wuhan-lab-leak-11622995184" target="_blank" rel="noopener">&nbsp;The Wall Street Journal</a>&nbsp;on Sunday.</strong></p>
                    <p><strong><a href="https://www.globalresearch.ca/more-than-5000-covid-vaccine-deaths-in-america-25359-serious-injuries-and-almost-300000-reported-adverse-events/5747015" target="_blank" rel="noopener">VAERS: more than 5,000 Covid Vaccine Deaths in America</a>, 25,359 “Serious Injuries” and Almost 300,000 Reported “Adverse Events”. Lates VAERS data released showed 294,801 reports of adverse events following COVID vaccines, including 5,165 deaths and 25,359 serious injuries between Dec. 14, 2020 and May 28, 2021.</strong></p>
                    <p><strong>&nbsp;<a href="https://summit.news/2021/06/04/scientist-at-center-of-lab-leak-controversy-put-in-charge-of-the-lancets-task-force-to-investigate-virus-origin/" target="_blank" rel="noopener">Scientist (Daszak) At Center Of Lab Leak Controversy Put In Charge Of The Lancet’s Task Force To Investigate Virus Origin</a></strong></p>
                    <p><strong>In the wake of renewed scrutiny of the lab leak hypothesis, the&nbsp;<a href="https://covid19commission.org/origins-of-the-pandemic" target="_blank" rel="noopener">Lancet’s task force</a>&nbsp;will reportedly “focus on analyzing data on all of the theories put forward on the origins of COVID, on the reasons why SARS-CoV-2 was able to break out of Wuhan and spread globally, and on the most plausible strategies to prevent future pandemics.”</strong></p>
                    <p><strong>It also states that “The Task Force will review thoroughly and objectively all publicly available evidence, particularly the peer-reviewed literature, and conduct interviews with key leaders in science, medicine, policy and civil society.” Dr Peter Daszak, who is heading up this task force, is perhaps the least suitable scientist on the planet to objectively analyse the data, given his track record.</strong></p>
                    <p><strong><a href="https://greatgameindia.com/british-scientists-coverup-bioweapons-research/" target="_blank" rel="noopener">How Top British Scientists</a> Covered Up COVID-19 Bioweapons Research To Peddle Natural Origin Theory</strong></p>
                    <p><strong>Two of the top scientists leading Britain’s response to the Covid-19 pandemic colluded with Dr Fauci in a&nbsp;<a href="https://greatgameindia.com/british-scientists-coverup-bioweapons-research/" target="_blank" rel="noopener">cover-up of the COVID-19 bioweapons research</a>&nbsp;also known as Gain-of-function experiments to peddle natural origin theory of the coronavirus.</strong></p>
                    <p><strong><a href="https://www.sciencedaily.com/releases/2021/05/210517102624.htm" target="_blank" rel="noopener">COVID-19 vaccination: Thrombosis can be prevented by prompt treatment, researchers report</a>. Efficacy of a potentially life-saving treatment strategy for vaccine-induced thrombosis described for the first time. A rare syndrome has been observed in people following vaccination against COVID-19. This involves thrombosis at unusual sites in the body, associated with a low thrombocyte count and a clotting disorder. In medical jargon, this syndrome is referred to as VITT (vaccine-induced thrombotic thrombocytopenia). Doctors at MedUni Vienna and Vienna General Hospital have now successfully treated an acute instance of this syndrome.</strong></p>
                    <p><strong><a href="https://labblog.uofmhealth.org/lab-report/new-cause-of-covid-19-blood-clots-identified" target="_blank" rel="noopener">New Cause of COVID-19 Blood Clots Identified</a>. A new study reveals the virus triggers production of antibodies circulating through the blood, causing clots in people hospitalized with the disease.</strong></p>
                    <p><strong><a href="https://www.ijidonline.com/action/showPdf?pii=S1201-9712%2821%2900364-7" target="_blank" rel="noopener">First case of postmortem</a> study in a patient vaccinated against SARS-CoV-2</strong></p>
                    <p><strong>Results might suggest that the first vaccination induces immunogenicity but not sterile immunity.</strong></p>
                    <p><strong><a href="https://www.ukcolumn.org/article/banned-paper-doctors-risk-versus-benefit-assessment-of-covid-jabs#ref10" target="_blank" rel="noopener">Banned paper: Doctors’ risk-versus-benefit assessment</a> of Covid jabs COVID-19 vaccine manufacturers have been exempted from legal liability for vaccine-induced harm. It is therefore in the interests of all those authorising, enforcing and administering COVID-19 vaccinations to understand the evidence regarding the risks and benefits of these vaccines, since liability for harm will fall on them. In short, the available evidence and science indicate that COVID-19 vaccines are unnecessary, ineffective and unsafe.</strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-9658235/Chinese-scientist-filed-patent-COVID-vaccine-virus-declared-global-pandemic.html" target="_blank" rel="noopener">Chinese military scientist ‘filed a patent for a COVID-19 vaccine</a> BEFORE the virus was declared a global pandemic and worked closely with ‘bat woman’ at Wuhan institute’</strong></p>
                    <p><strong>No point vaccinating those who’ve had COVID-19: <a href="https://www.news-medical.net/news/20210608/No-point-vaccinating-those-whoe28099ve-had-COVID-19-Findings-of-Cleveland-Clinic-study.aspx" target="_blank" rel="noopener">Findings of Cleveland Clinic</a> study. <a href="https://www.medrxiv.org/content/10.1101/2021.06.01.21258176v2" target="_blank" rel="noopener">The study findings</a> reveal that individuals with previous SARS-CoV-2 infection do not get additional benefits from vaccination, indicating that COVID-19 vaccines should be prioritized to individuals without prior infection. The study is currently available on the&nbsp;<a href="https://www.medrxiv.org/content/10.1101/2021.06.01.21258176v2" target="_blank" rel="noopener">medRxiv</a>* preprint server.</strong></p>
                    <p><strong><a href="https://www.nature.com/articles/nm.3985" target="_blank" rel="noopener">This manuscript in 2015: A SARS-like cluster of circulating bat coronaviruses shows potential for human emergence</a></strong></p>
                    <p><strong>The emergence of severe acute respiratory syndrome coronavirus (SARS-CoV) and Middle East respiratory syndrome (MERS)-CoV underscores the threat of cross-species transmission events leading to outbreaks in humans. Here we examine the disease potential of a SARS-like virus, SHC014-CoV, which is currently circulating in Chinese horseshoe bat populations<a href="https://www.nature.com/articles/nm.3985#ref-CR1">1</a>. Using the SARS-CoV reverse genetics system<a href="https://www.nature.com/articles/nm.3985#ref-CR2">2</a>, we generated and characterized a chimeric virus expressing the spike of bat coronavirus SHC014 in a mouse-adapted SARS-CoV backbone. The results indicate that group 2b viruses encoding the SHC014 spike in a wild-type backbone can efficiently use multiple orthologs of the SARS receptor human angiotensin converting enzyme II (ACE2), replicate efficiently in primary human airway cells and achieve&nbsp;in vitro&nbsp;titers equivalent to epidemic strains of SARS-CoV. Additionally,&nbsp;in vivo&nbsp;experiments demonstrate replication of the chimeric virus in mouse lung with notable pathogenesis. Evaluation of available SARS-based immune-therapeutic and prophylactic modalities revealed poor efficacy; both monoclonal antibody and vaccine approaches failed to neutralize and protect from infection with CoVs using the novel spike protein. On the basis of these findings, we synthetically re-derived an infectious full-length SHC014 recombinant virus and demonstrate robust viral replication both&nbsp;in vitro&nbsp;and&nbsp;in vivo. Our work suggests a potential risk of SARS-CoV re-emergence from viruses currently circulating in bat populations.</strong></p>
                    <p><strong><a href="https://www.vanityfair.com/news/2021/06/the-lab-leak-theory-inside-the-fight-to-uncover-covid-19s-origins?fbclid=IwAR0lc2o-2fRQEIQSZXMPM33LqifTg774ANoHJY0TAOZIUZIXgqs3cKF-7_c#intcid=recommendations_vf-trending-legacy_9e1be85a-6b37-4caf-988d-52a7729af526_popular4-1" target="_blank" rel="noopener">The lab-leak theory:</a> inside the fight to uncover COVID-19’s origins.</strong></p>
                    <p><strong><a href="https://www.naturalnews.com/2021-06-08-houston-methodist-orders-staff-withhold-reactions-vaccines.html" target="_blank" rel="noopener">Houston Methodist Hospital orders staff to withhold adverse reactions</a> caused by covid vaccines from official records</strong></p>
                    <p><strong><a href="https://economictimes.indiatimes.com/industry/healthcare/biotech/healthcare/heart-attack-and-brain-stroke-main-causes-of-death-after-jab/articleshow/81680805.cms?from=mdr" target="_blank" rel="noopener">Heart attacks and strokes</a> are the two main causes of death after COVID vaccination</strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/manitoba-chief-microbiologist-56-of-positive-covid-cases-are-not-infectious?utm_source=LifeSiteNews.com&amp;utm_campaign=d27d756655-Canadian_6_8_21&amp;utm_medium=email&amp;utm_term=0_12387f0e3e-d27d756655-404671401" target="_blank" rel="noopener">Manitoba Canada chief microbiologist</a>: 56% of positive COVID ‘cases’ are not infectious</strong></p>
                    <p><strong>Dr. Jared Bullard, who is the head of Cadham Provincial Laboratory in Winnipeg, admitted that PCR test results do not verify infectiousness for COVID-19, and were never intended to be used to diagnose respiratory illnesses.</strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/new-study-finds-natural-covid-immunity-lasts-almost-a-year-undermining-lockdown-vax-push?utm_source=LifeSiteNews.com&amp;utm_campaign=d27d756655-Canadian_6_8_21&amp;utm_medium=email&amp;utm_term=0_12387f0e3e-d27d756655-404671401" target="_blank" rel="noopener">Another study shows natural COVID-19 immunity lasts for ‘substantial’ period of time</a></strong></p>
                    <p><strong>The latest study adds to a growing body of literature and medical opinion indicating that natural immunity is long-lasting even without vaccination. It found an “encouraging timeline for the development and sustainability of antibodies up to ten months from natural infection.” <a href="https://www.nature.com/articles/s41586-021-03647-4" target="_blank" rel="noopener">One study</a>, published on May 24 in&nbsp;Nature, found that COVID-19 infection “induces a robust antigen-specific, long-lived humoral immune response in humans,” with antibodies “remaining detectable at least 11 months after infection.”&nbsp;<a href="https://www.biorxiv.org/content/10.1101/2021.05.07.443175v2" target="_blank" rel="noopener">Another</a>, published at&nbsp;BioRxiv, found that even without vaccination, antibodies in the infected “remain relatively stable from 6 to 12 months,” while “B cell clones expressing broad and potent antibodies are selectively retained in the repertoire over time and expand dramatically after vaccination.” A&nbsp;<a href="https://www.lifesitenews.com/news/previous-covid-infection-provides-more-immunity-than-jab-new-study-finds" target="_blank" rel="noopener">third study</a>&nbsp;out of Israel found that natural immunity was slightly more effective against reinfection than the Pfizer vaccine, at 94.8% versus 92.8%.</strong></p>
                    <p><strong><a href="https://doctors4covidethics.org/pfizer-vaccine-rubber-stamped-data-sight-unseen/" target="_blank" rel="noopener">Pfizer Vaccine Authorised, Data Sight Unseen</a>. A&nbsp;Freedom of Information request to the Australian drugs regulator that approved the Pfizer vaccine confirms that they have never seen the study data</strong></p>
                    <p><strong><a href="https://www.icandecide.org/nih-officials-profiting-from-covid-19-vaccine/">NIH OFFICIALS</a> stand to earn millions from Moderna vaccine.</strong></p>
                    <p><strong><a href="https://www.mountainhomemag.com/2021/05/01/356270/the-drug-that-cracked-covid" target="_blank" rel="noopener">The Drug that Cracked COVID</a>. </strong></p>
                    <p><strong><a href="https://nationalfile.com/exclusive-bidens-military-puts-west-point-cadets-in-solitary-confinement-if-they-refuse-covid-vaccine/" target="_blank" rel="noopener">Biden’s Military Puts West Point Cadets</a> in Solitary Confinement If They Refuse COVID Vaccine</strong></p>
                    <p><strong>“They’re being treated like criminals,” a whistleblower told National File under condition of anonymity.</strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-9668065/AstraZenecas-Covid-vaccine-linked-bleeding-disorder-cause-purple-dotted-rash.html" target="_blank" rel="noopener">AstraZeneca’s Covid vaccine is linked to another bleeding disorder</a> that can cause a purple-dotted rash.</strong></p>
                    <p><strong><a href="https://www.theblaze.com/op-ed/horowitz-contagious-lies-cdc-claims-hospitalization-rising-among-unvaccinated-teens--contrary-to-its-own-data#toggle-gdpr" target="_blank" rel="noopener">Contagious lies: CDC claims hospitalization rising</a> among unvaccinated teens-contrary to its own data.</strong></p>
                    <p><strong><a href="https://carterheavyindustries.files.wordpress.com/2021/04/covid19-rna-based-vaccines-and-the-risk-of-prion-disease-1503.pdf" target="_blank" rel="noopener">COVID-19 RNA Based Vaccines and the Risk of Prion Disease</a></strong></p>
                    <p><strong><a href="https://www.thelancet.com/journals/ebiom/article/PIIS2352-3964(21)00203-6/fulltext" target="_blank" rel="noopener">SARS-CoV-2 elicits robust adaptive immune</a> responses regardless of disease severity</strong></p>
                    <p><strong><a href="https://www.statnews.com/2021/06/08/fda-expert-panel-resigns-alzheimers-approval/" target="_blank" rel="noopener">Member of FDA’s expert panel resigns</a> over controversial Alzheimer’s therapy approval</strong></p>
                    <p><strong><a href="https://nofrakkingconsensus.com/2021/06/09/cdc-revises-vaccine-screener-9-times-in-6-months/" target="_blank" rel="noopener">CDC revises vaccine screener 9 times in 6 months</a></strong></p>
                    <p><strong><a href="https://noorchashm.medium.com/bidens-covid-19-response-and-the-rise-of-america-s-new-underclass-the-naturally-immune-but-df8434e5caf3" target="_blank" rel="noopener">Biden’s COVID-19 Response And The Rise Of America’s New Underclass</a>: The Naturally Immune, But Unvaccinated Millions of Americans Are Poised To Be Discriminated Against or Subjected To Harm</strong></p>
                    <p><strong><a href="https://www.bmj.com/content/373/bmj.n954" target="_blank" rel="noopener">Covid-19: Rare immune response</a> may cause clots after AstraZeneca vaccine, say researchers</strong></p>
                    <p><strong><a href="https://www.reuters.com/world/europe/german-panel-gives-limited-approval-covid-19-shot-adolescents-2021-06-10/" target="_blank" rel="noopener">German panel gives limited approval for COVID-19 shot for adolescents</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/bombshell-fauci-wrote-in-2012-that-benefits-of-gain-of-function-research-outweigh-the-risks" target="_blank" rel="noopener">Bombshell: Fauci wrote in 2012</a> that benefits of gain-of-function research ‘outweigh the risks’</strong></p>
                    <p><strong><a href="https://ca.yahoo.com/news/cdc-heart-inflammation-cases-ages-140826238.html" target="_blank" rel="noopener">Heart inflammation in young men higher than expected</a> after <a href="https://www.reuters.com/world/us/cdc-heart-inflammation-cases-ages-16-24-higher-than-expected-after-mrna-covid-19-2021-06-10/">Pfizer, Moderna vaccines</a> –<a href="D:\HEALTH%20AND%20SCIENCE">U.S. CDC</a></strong></p>
                    <p><strong><a href="http://www.abortionfreenm.com/news/vaccine-animal-trials-reveal-threat-to-life-in-the-womb" target="_blank" rel="noopener">VACCINE ANIMAL TRIALS REVEAL THREAT TO LIFE IN THE&nbsp;WOMB</a>. As of May 22, 2021, there are a total of 283&nbsp;<a href="https://www.scribd.com/document/509017382/VAERS-Report-Regarding-Spontaneous-Abortion-Fetal-Death">adverse reports</a>&nbsp;in VAERS where the symptom is either “spontaneous abortion” or “fetal death”. Of these, 9.54% are attributed to&nbsp;J&amp;J/Janssen, 36.75% to Moderna and 53.71% to Pfizer BioNTech. These&nbsp;cases can be seen in the chart below based on time from vaccination to pregnancy loss. These events are occurring&nbsp;very close to the time of vaccination, and subsequently falling off as time progresses. This is highly suggestive of a causative link between the vaccination and the adverse event.&nbsp;In fact, nearly 30% of these events occurred&nbsp;within 0-2 days after vaccination.</strong></p>
                    <p><strong><a href="https://www.lewrockwell.com/2020/12/gary-d-barnett/dr-igor-shepherds-talk-about-the-horrors-of-the-covid-vaccine-full-transcript/" target="_blank" rel="noopener">Full transcript</a> <a href="https://www.lewrockwell.com/2020/12/gary-d-barnett/dr-igor-shepherds-talk-about-the-horrors-of-the-covid-vaccine-full-transcript/">Dr. Igor Shepherd’s Talk About the Horrors of the Covid Vaccine: Full Transcript</a></strong></p>
                    <p><strong><a href="https://dailyexpose.co.uk/2021/06/10/dr-tess-lawrie-demands-dr-june-raine-the-chief-exec-of-mhra-halts-the-covid-vaccine-programme-immediately-due-to-severe-adverse-reactions-and-deaths/" target="_blank" rel="noopener">Dr Tess Lawrie</a> demands Dr June Raine the Chief Exec of MHRA halts the Covid Vaccine programme immediately due to severe Adverse Reactions and Deaths</strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/nearly-800-reports-of-heart-inflammation-after-covid-19-vaccination-in-us_3853032.html" target="_blank" rel="noopener">Nearly 800 Reports of Heart Inflammation After COVID-19 Vaccination in US</a></strong></p>
                    <p><strong><a href="https://www.traveldailymedia.com/vaccinated-travellers-wont-be-allowed-to-fly-due-to-blood-clot/" target="_blank" rel="noopener">Vaccinated travellers</a> won’t be allowed to fly due to blood-clot</strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/kids-benefits-covid-vaccine-dont-outweigh-risks/" target="_blank" rel="noopener">For Kids, Benefits of COVID Vaccine ‘Don’t Outweigh Risks</a>,’ Experts Tell FDA</strong></p>
                    <p><strong><a href="https://trialsitenews.com/response-to-argument-against-covid-19-vaccine-absolute-risk-reductions/" target="_blank" rel="noopener">Response to Argument Against COVID-19 Vaccine Absolute Risk Reductions</a></strong></p>
                    <p><strong><a href="https://trialsitenews.com/vaccines-may-increase-brain-vein-clots-in-severe-covid-19/" target="_blank" rel="noopener">Vaccines may increase brain vein clots</a> in severe COVID-19</strong></p>
                    <p><strong><a href="https://www.newsbreak.com/news/2266904484112/can-people-vaccinated-against-covid-19-still-spread-the-coronavirus?s=oldSite&amp;ss=a3" target="_blank" rel="noopener">Can people vaccinated against COVID-19 still spread the coronavirus?</a></strong></p>
                    <p><strong><a href="https://www.npr.org/2021/05/14/996873507/what-to-make-of-the-yankees-outbreak-scientists-say-dont-panic-we-expected-this" target="_blank" rel="noopener">What To Make Of The Yankees Outbreak?</a> Scientists Say: Don’t Panic</strong></p>
                    <p><strong><a href="https://americasfrontlinedoctors.org/frontlinenews/urgent-british-report-calls-for-complete-cessation-of-covid-vaccines-in-humans/" target="_blank" rel="noopener">‘Urgent’ British report calls for complete cessation</a> of COVID vaccines in humans</strong></p>
                    <p><strong><a href="https://americasfrontlinedoctors.org/frontlinenews/dr-zelenko-calls-child-vaccine-mandate-coercive-human-experimentation-crimes-against-humanity/" target="_blank" rel="noopener">Dr Zelenko calls child vaccine mandate ‘coercive human experimentation</a>, crimes against humanity’</strong></p>
                    <p><strong><a href="https://www.armstrongeconomics.com/international-news/disease/vaccinated-people-told-not-to-travel/" target="_blank" rel="noopener">Airlines asking vaccinated persons</a> not to fly due to blood clots</strong></p>
                    <p><strong><a href="https://www.washingtonexaminer.com/opinion/hydroxychloroquine-study-further-erodes-credibility-of-health-experts" target="_blank" rel="noopener">Hydroxychloroquine study</a> further erodes credibility of health ‘experts’</strong></p>
                    <p><strong><a href="https://www.cbc.ca/news/canada/manitoba/national-microbiology-lab-scientist-investigation-china-1.5307424" target="_blank" rel="noopener">Canadian government scientist under investigation</a> trained staff at Level 4 lab in China</strong></p>
                    <p><strong><a href="https://redstate.com/jenvanlaar/2021/06/11/exclusive-defector-provides-evidence-that-the-chinese-military-orchestrated-the-creation-of-covid-19-and-lab-leak-n395384" target="_blank" rel="noopener">EXCLUSIVE: Defector Provides Evidence That the Chinese Military Orchestrated the Creation of COVID-19 and Lab Leak</a></strong></p>
                    <p><strong><a href="https://vitamindstopscovid.info/05-mds/" target="_blank" rel="noopener">What every MD should know about vitamin D and the immune system</a></strong></p>
                    <p><strong><a href="https://mobile.twitter.com/DrTomFrieden/status/1403751159446319107" target="_blank" rel="noopener">CDC’s Tom Frieden</a>: If you get Covid, the virus will spread all over your body, make billions of copies, and stay there for at least a week. In contrast, the vaccine will only be in your body for at most a day or so and then will be gone—but will teach your immune system how to fight the virus.</strong></p>
                    <p><strong><a href="https://healthimpactnews.com/2020/covid-vaccines-biological-weapons-of-mass-destruction-says-wyoming-medical-doctor-and-manager-for-wyomings-state-public-health-department/" target="_blank" rel="noopener">COVID Vaccines “Biological Weapons of Mass Destruction</a>” says Wyoming Medical Doctor and Manager for Wyoming’s State Public Health Department</strong></p>
                    <p><strong><a href="https://employercovidpolicy.com/no-covid-19-vaccine-mandate-for-federal-employees/" target="_blank" rel="noopener">No COVID-19 “Vaccine” Mandate for Federal Employees</a></strong></p>
                    <p><strong><a href="https://www.americanthinker.com/blog/2021/06/cdc_must_come_clean_on_the_covid_vaccine_and_previous_infection.html" target="_blank" rel="noopener">CDC must come clean on the COVID vaccine and previous infection</a></strong></p>
                    <p><strong><a href="https://dailyexpose.co.uk/2021/06/12/official-data-shows-more-people-have-died-because-of-the-covid-vaccines-in-6-months-than-people-who-have-died-of-covid-19-in-15-months/" target="_blank" rel="noopener">Official Data shows more people have died because of the Covid Vaccines in 6 months than people who have died of Covid-19 in 15 months</a></strong></p>
                    <p><strong><a href="https://nationalfile.com/breaking-twitter-suspends-organization-for-announcing-they-will-release-more-fauci-emails/" target="_blank" rel="noopener">BREAKING: Twitter Suspends Organization for Announcing They Will Release More Fauci Emails</a></strong></p>
                    <p><strong><a href="https://www.thetimes.co.uk/article/why-not-giving-children-covid-vaccine-lw5kpn5m5" target="_blank" rel="noopener">Why I will not be giving my children the Covid vaccine</a></strong></p>
                    <p><strong><a href="https://noorchashm.medium.com/a-brief-american-query-to-the-chinese-communist-party-and-president-xi-jinping-a-concerning-2774ec99f58d" target="_blank" rel="noopener">A Brief American Query</a> To The Chinese Communist Party And President Xi Jinping: A Concerning Epidemiological Differential.</strong></p>
                    <p><strong><a href="https://www.collins.senate.gov/newsroom/senator-collins-cdc-director-%E2%80%9Cconflicting-confusing-guidance-your-agency-has-undermined" target="_blank" rel="noopener">Senator Collins to CDC Director</a>: “Conflicting, Confusing Guidance from Your Agency has Undermined Public Confidence”</strong></p>
                    <p><strong><a href="https://nymag.com/intelligencer/2021/05/experts-cdcs-summer-camp-rules-are-cruel-irrational.html" target="_blank" rel="noopener">Experts: CDC’s Summer-Camp Rules Are ‘Cruel’ and ‘Irrational’</a></strong></p>
                    <p><strong><a href="https://americasfrontlinedoctors.org/frontlinenews/urgent-british-report-calls-for-complete-cessation-of-covid-vaccines-in-humans/" target="_blank" rel="noopener">‘Urgent’ British report calls for complete cessation of COVID vaccines in humans</a></strong></p>
                    <p><strong><a href="https://phys.org/news/2021-06-discovery-human-cells-rna-sequences.html" target="_blank" rel="noopener">New discovery shows human cells can write RNA sequences into DNA</a></strong></p>
                    <p><strong><a href="https://trialsitenews.com/should-you-get-vaccinated/" target="_blank" rel="noopener">Should you get vaccinated?</a></strong></p>
                    <p><strong><a href="https://www.newscientist.com/article/2280446-astrazeneca-covid-19-vaccine-may-hinder-blood-clotting-in-rare-cases/" target="_blank" rel="noopener">AstraZeneca covid-19 vaccine may hinder blood clotting in rare cases</a></strong></p>
                    <p><strong><a href="https://principia-scientific.com/breakthrough-ivermectin-inhibits-covid-spike-protein-binding/" target="_blank" rel="noopener">Breakthrough: Ivermectin Inhibits Covid Spike Protein Binding</a></strong></p>
                    <p><strong><a href="https://www.americanthinker.com/blog/2021/06/how_much_money_did_peter_daszaks_nonprofit_get_paid_for_laundering_a_federal_grant_for_gain_of_function_research_in_wuhan_.html" target="_blank" rel="noopener">How much money did Peter Daszak’s nonprofit</a> get paid for laundering a federal grant for gain of function research in Wuhan?</strong></p>
                    <p><strong><a href="https://www.wsj.com/articles/university-vaccine-mandates-violate-medical-ethics-11623689220?st=7z4jl16cskhu698&amp;reflink=desktopwebshare_twitter" target="_blank" rel="noopener">University Vaccine Mandates Violate Medical Ethics</a>. College students aren’t guinea pigs.</strong></p>
                    <p><strong><a href="https://brandnewtube.com/watch/spike-protein-is-very-dangerous-it-039-s-cytotoxic-robert-malone-steve-kirsch-bret-weinstein_uldEFtcMC4tJjvM.html" target="_blank" rel="noopener">Spike protein is very dangerous</a>, it’s cytotoxic (Robert Malone, Steve Kirsch, Bret Weinstein)</strong></p>
                    <p><strong><a href="https://stephanieseneff.net/sars-cov-2-vaccines-and-neurodegenerative-disease/" target="_blank" rel="noopener">SARS-COV-2 VACCINES AND NEURODEGENERATIVE DISEASE</a></strong></p>
                    <p><strong><a href="https://www.nature.com/articles/s41429-021-00430-5" target="_blank" rel="noopener">The mechanisms of action of Ivermectin against SARS-CoV-2</a>: An evidence-based clinical review article</strong></p>
                    <p><strong><a href="https://globalnews.ca/news/7885506/covid-naci-vitt-rate/" target="_blank" rel="noopener">Rate of COVID-19 vaccine-related blood clots may be as high as 1 in 55,000: NACI</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/899-people-given-defective-covid-19-vaccine-doses-in-nycs-times-square-officials_3859533.html" target="_blank" rel="noopener">899 People Given Defective COVID-19 Vaccine Doses in NYC’s Times Square: Officials</a></strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/health/article-9688695/More-evidence-suggests-COVID-19-US-Christmas-2019.html" target="_blank" rel="noopener">NIH study finds more evidence that COVID-19</a> was circulating in the US as early as Christmas 2019, weeks before states reported their first cases</strong></p>
                    <p><strong><a href="https://lockdownsceptics.org/2021/06/15/a-doctor-writes-chris-whittys-slide-show-yesterday-was-a-blatant-exercise-in-biased-data-selection/" target="_blank" rel="noopener">Lockdown skeptics</a></strong></p>
                    <p><strong><a href="https://scitechdaily.com/new-discovery-shows-human-cells-can-write-rna-sequences-into-dna-challenges-central-principle-in-biology/" target="_blank" rel="noopener">New Discovery Shows Human Cells Can Write RNA Sequences Into DNA – Challenges Central Principle in Biology</a></strong></p>
                    <p><strong><a href="https://www.zerohedge.com/covid-19/watch-rand-paul-demands-exclusion-wuhan-lab-funders-investigations" target="_blank" rel="noopener">Rand Paul Demands Exclusion Of Wuhan Lab Funders From Investigations</a></strong></p>
                    <p><strong><a href="https://www.freemalaysiatoday.com/category/world/2021/06/17/hundreds-of-indonesian-doctors-contract-covid-despite-vaccination/" target="_blank" rel="noopener">Hundreds of Indonesian doctors</a> contract Covid despite vaccination</strong></p>
                    <p><strong><a href="https://docs.google.com/document/d/1a499i_wC3FZ5rasK6-L61dyRCWlLHa6ZgmwSdpCe4WQ/edit#heading=h.vkgjb55bmrmg" target="_blank" rel="noopener">Unsafe vaccines resources</a></strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/06/four-healthy-british-airways-pilots-die-one-week-airline-says-no-link-covid-19-vaccine/" target="_blank" rel="noopener">Four Healthy British Airways Pilots Die in One Week</a> – Airline Says No Link to Covid-19 Vaccine</strong></p>
                    <p><strong><a href="https://truthbasedmedia.com/2021/06/17/covid-19-vaccines-lead-to-new-infections-and-mortality-the-evidence-is-overwhelming/" target="_blank" rel="noopener">Covid-19 Vaccines Lead to New Infections and Mortality</a>: The Evidence is Overwhelming</strong></p>
                    <p><strong><a href="https://aapsonline.org/covid-19-is-college-worth-the-risk-of-the-shot/" target="_blank" rel="noopener">COVID-19: Is College Worth the Risk of the Shot?</a></strong></p>
                    <p><strong><a href="https://www.collective-evolution.com/2021/06/17/pfizer-moderna-fail-to-respond-to-british-medical-journal-about-covid-vaccine-safety-concerns/" target="_blank" rel="noopener">Pfizer &amp; Moderna Fail To Respond To British Medical Journal</a> About COVID Vaccine Safety Concerns</strong></p>
                    <p><strong><a href="https://thehill.com/opinion/healthcare/558757-the-ill-advised-push-to-vaccinate-the-young" target="_blank" rel="noopener">The ill-advised push to vaccinate the young</a></strong></p>
                    <p><strong><a href="https://tnc.news/2021/06/17/ns-emergency-head-fired-after-criticizing-public-health-powers/" target="_blank" rel="noopener">NS emergency head fired after criticizing public health powers</a></strong></p>
                    <p><strong><a href="https://www.jennifermargulis.net/covid-vaccine-peer-pressure/" target="_blank" rel="noopener">COVID Vaccine Peer Pressure: A Daughter Feels Pressured, A Mother Laments</a></strong></p>
                    <p><strong><a href="https://breaking911.com/breaking-ariz-gov-signs-executive-order-banning-schools-from-requiring-vaccines-masks-covid-tests/" target="_blank" rel="noopener">Ariz. Gov. Signs Executive Order Banning Schools From Requiring Vaccines, Masks, COVID Tests</a></strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/06/four-healthy-british-airways-pilots-die-one-week-airline-says-no-link-covid-19-vaccine/" target="_blank" rel="noopener">Four young and healthy British Airways pilots</a> recently passed away and the airline is claiming there is no link to the Covid-19 vaccine</strong></p>
                    <p><strong><a href="https://www.aier.org/article/the-origin-of-sars-cov-2/" target="_blank" rel="noopener">The Origin of SARS-CoV-2</a></strong></p>
                    <p><strong><a href="https://www.covidmedicalnetwork.com/media/interviews/asia-pacific-today/government-scaring-and-bullying-citizens-to-vaccinate.aspx" target="_blank" rel="noopener">Australian government scaring and bullying people into vaccinations</a></strong></p>
                    <p><strong><a href="https://app.spectator.com.au/2021/06/covids-warped-vaccines/pugpig_index.html" target="_blank" rel="noopener">Covid’s warped vaccines: Highly credentialled whistle-blowers sound a warning</a></strong></p>
                    <p><strong><a href="https://www.andrewbostom.org/wp-content/uploads/2021/06/Why-Collegiate-Covid-19-Vaccine-Mandates-Are-Lysenkoist.pdf" target="_blank" rel="noopener">Why Collegiate Covid-19 Vaccine Mandates Are Lysenkoist Anti-Science</a></strong></p>
                    <p><strong><a href="https://www.journalofinfection.com/article/S0163-4453(21)00265-6/fulltext" target="_blank" rel="noopener">Performance of the SARS-CoV-2 RT-PCR</a> test as a tool for detecting SARS-CoV-2</strong></p>
                    <p><strong><a href="https://www.wsj.com/articles/why-shutdowns-and-masks-suit-the-elite-11624038950?mod=opinion_lead_pos5" target="_blank" rel="noopener">Why Shutdowns and Masks Suit the Elite</a></strong></p>
                    <p><strong><a href="https://amgreatness.com/2021/06/15/dr-mccullough-covid-vaccines-have-already-killed-up-to-50000-americans-according-to-whistleblowers/" target="_blank" rel="noopener">COVID vaccines may have already killed 50,000 Americans</a></strong></p>
                    <p><strong><a href="https://americaoutloud.com/covid-19-vaccines-not-safe-for-human-use-on-either-side-of-the-atlantic/" target="_blank" rel="noopener">COVID-19 Vaccines Not Safe for Human Use on Either Side of the Atlantic</a></strong></p>
                    <p><strong><a href="https://blog.cardiometabolichealth.org/2021/06/16/myocarditis-rates-up-in-vaccinated-male-adolescents/" target="_blank" rel="noopener">Myocarditis rates up in vaccinated males (COVID)</a></strong></p>
                    <p><strong><a href="https://greatgameindia.com/moderna-vaccine-north-carolina-university/" target="_blank" rel="noopener">Secret Docs Reveal Moderna Sent Coronavirus Vaccine To North Carolina University</a> Weeks Before Pandemic</strong></p>
                    <p><strong><a href="https://www.telegraph.co.uk/news/2021/05/27/vaccine-passports-backfire-case-israel-shows/" target="_blank" rel="noopener">Vaccine passports backfire</a> – the case of Israel shows that</strong></p>
                    <p><strong>As professors in Israel’s medical sphere, we’ve found passes to be irreconcilable with the basic principles of the medical profession</strong></p>
                    <p><strong><a href="https://calgary.ctvnews.ca/mobile/covid-19-death-at-calgary-s-foothills-hospital-confirmed-to-be-a-double-immunized-patient-1.5474001" target="_blank" rel="noopener">COVID-19 death at Calgary’s Foothills hospital</a> confirmed to be a double immunized patient</strong></p>
                    <p><strong><a href="https://www.komu.com/news/covid19/vaccine/american-red-cross-says-vaccinated-donors-can-give-blood-not-convalescent-plasma/article_d137f5c8-7616-11eb-9715-6707fa0d47d6.html" target="_blank" rel="noopener">American Red Cross says vaccinated donors can give blood, not convalescent plasma</a></strong></p>
                    <p><strong><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2588415/#__ffn_sectitle" target="_blank" rel="noopener">Synthetic recombinant bat SARS-like coronavirus is infectious in cultured cells and in mice</a></strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/06/cdc-senior-scientist-whistleblower-trashed-data-showing-vaccine-autism-link-african-american-boys/" target="_blank" rel="noopener">CDC Senior Scientist and Whistleblower: ‘We trashed data showing vaccine-autism link in African-American boys’</a></strong></p>
                    <p><strong><a href="https://journals.lww.com/americantherapeutics/Abstract/9000/Ivermectin_for_Prevention_and_Treatment_of.98040.aspx" target="_blank" rel="noopener">Ivermectin for Prevention and Treatment of COVID-19 Infection</a></strong></p>
                    <p><strong><a href="https://journals.lww.com/americantherapeutics/Abstract/9000/Ivermectin_for_Prevention_and_Treatment_of.98040.aspx" target="_blank" rel="noopener">A Systematic Review, Meta-analysis, and Trial Sequential Analysis to Inform Clinical Guidelines</a></strong></p>
                    <p><strong><a href="https://noqreport.com/2021/06/20/shockingly-strong-correlation-between-delta-variant-rise-and-increased-vaccinations/" target="_blank" rel="noopener">Shockingly Strong Correlation Between ‘Delta Variant’ Rise and Increased Vaccinations</a></strong></p>
                    <p><strong><a href="https://townhall.com/tipsheet/mattvespa/2021/06/18/heres-what-the-chinese-defector-has-reportedly-given-us-about-covid-but-also-o-n2591167" target="_blank" rel="noopener">Here’s What the Chinese Defector Has Reportedly Given Us About COVID…But Also on Joe and Hunter Biden</a></strong></p>
                    <p><strong><a href="https://www.stuff.co.nz/national/health/coronavirus/125497383/thirteen-doctors-under-investigation-after-complaints-about-spread-of-covid19-misinformation" target="_blank" rel="noopener">Thirteen doctors under investigation after complaints about spread of Covid-19 misinformation</a></strong></p>
                    <p><strong><a href="https://www.journalofinfection.com/article/S0163-4453(21)00265-6/fulltext" target="_blank" rel="noopener">The performance of the SARS-CoV-2 RT-PCR test as a tool for detecting SARS-CoV-2 infection in the population</a></strong></p>
                    <p><strong><a href="https://wwwnc.cdc.gov/eid/article/27/8/21-1145_article" target="_blank" rel="noopener">Delayed Antibody and T-Cell Response to BNT162b2 Vaccination in the Elderly, Germany</a></strong></p>
                    <p><strong><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/covid-19-vaccines/advice" target="_blank" rel="noopener">COVID-19 advice for the public: Getting vaccinated</a></strong></p>
                    <p><strong><a href="https://www.andrewbostom.org/2021/06/burgeoning-evidence-of-myopericarditis-after-covid-19-vaccination-in-young-people-a-call-for-acknowledgment-pause-and-serious-study/" target="_blank" rel="noopener">Burgeoning Evidence of Myopericarditis After Covid-19 Vaccination in Young People: A Call For Acknowledgment, Pause, and Serious Study</a></strong></p>
                    <p><strong><a href="https://justthenews.com/politics-policy/coronavirus/heart-problems-vaccinated-students-trigger-medical-legal-scrutiny" target="_blank" rel="noopener">Heart problems in vaccinated students trigger medical, legal scrutiny of campus COVID mandates</a></strong></p>
                    <p><strong><a href="https://humanevents.com/2021/06/21/breaking-dr-peter-daszak-removed-from-covid-19-commission/" target="_blank" rel="noopener">BREAKING: Dr. Peter Daszak Removed from Covid-19 Commission</a></strong></p>
                    <p><strong><a href="https://roundingtheearth.substack.com/p/are-uks-vaccinated-dying-more-from" target="_blank" rel="noopener">Are UK’s Vaccinated Dying More from the Delta Variant?</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/nearly-4000-fully-vaccinated-people-in-massachusetts-test-positive-for-covid-19_3868762.html" target="_blank" rel="noopener">Nearly 4,000 Fully Vaccinated People in Massachusetts Test Positive for COVID-19</a></strong></p>
                    <p><strong><a href="https://www.cnn.com/2021/06/22/health/us-coronavirus-tuesday/index.html" target="_blank" rel="noopener">How the variants are being used to drive fear: There may be trouble ahead as dangerous Covid-19 variant appears to cause hospitalization spike in a Missouri city</a></strong></p>
                    <p><strong><a href="https://www.businesswire.com/news/home/20210621005496/en/%E2%80%9CReplace-bogus-PCR-tests-to-avoid-unnecessary-Coronavirus-lockdowns%E2%80%9D-Urges-Milford-Molecular-Diagnostics-Director-Dr.-Sin-Hang-Lee" target="_blank" rel="noopener">Replace bogus PCR tests to avoid unnecessary Coronavirus lockdowns,” Urges Milford Molecular Diagnostics Director Dr. Sin Hang Lee</a></strong></p>
                    <p><strong><a href="https://drasticresearch.org/2021/05/28/sars-cov-2%e2%80%b2s-claimed-natural-origin-is-undermined-by-issues-with-genome-sequences-of-its-relative-strains/" target="_blank" rel="noopener">SARS-CoV-2′s claimed natural origin is undermined by issues with genome sequences of its relative strains</a></strong></p>
                    <p><strong><a href="https://drasticresearch.org/2021/05/28/an-analysis-of-the-results-of-routine-employee-testing-for-sars-like-infections-within-the-wiv-and-other-wuhan-labs-raises-serious-issues-about-their-validity/" target="_blank" rel="noopener">An analysis of the results of routine employee testing for SARS-like infections within the WIV and other Wuhan labs raises serious issues about their validity</a></strong></p>
                    <p><strong><a href="https://drasticresearch.org/2021/04/16/3-whuan-laboratories-bat-research-and-biosafety/" target="_blank" rel="noopener">Wuhan Laboratories, Bat Research And&nbsp;Biosafety</a></strong></p>
                    <p><strong><a href="https://drasticresearch.org/2021/04/02/understanding-covid-19-and-seasonal-influenza-as-quasispecies-mutant-swarms-reveals-the-quantum-origins-and-cryptic-fates-of-human-pandemics/" target="_blank" rel="noopener">Understanding COVID-19 and Seasonal Influenza as Quasispecies Mutant Swarms Reveals the Quantum Origins and Cryptic Fates of Human Pandemics</a></strong></p>
                    <p><strong><a href="https://drasticresearch.org/2021/04/06/unexpected-novel-merbecovirus-discoveries-in-agricultural-sequencing-datasets-from-wuhan-china/" target="_blank" rel="noopener">Unexpected novel Merbecovirus discoveries in agricultural sequencing datasets from Wuhan, China</a></strong></p>
                    <p><strong><a href="https://drasticresearch.org/2021/03/26/new-drastic-paper-should-we-discount-the-laboratory-origin-of-covid-19/" target="_blank" rel="noopener">Should we discount the laboratory origin of&nbsp;COVID-19?</a></strong></p>
                    <p><strong><a href="https://www.jpost.com/health-science/pfizer-covid-19-vaccine-linked-to-rare-blood-disease-israeli-study-671694" target="_blank" rel="noopener">Pfizer COVID-19 vaccine linked to rare blood disease – Israeli study</a></strong></p>
                    <p><strong><a href="https://pharmaceuticalfraud.com/2021-05-05-ophthalmologists-now-ethically-obligated-denounce-covid-19-vaccines.html" target="_blank" rel="noopener">Ophthalmologists now ethically obligated to denounce covid-19 vaccines, as 20,000 new eye disorders are reported</a></strong></p>
                    <p><strong><a href="https://medium.com/microbial-instincts/concerns-of-lipid-nanoparticle-carrying-mrna-vaccine-into-the-brain-what-to-make-of-it-42b1a98dae27" target="_blank" rel="noopener">Concerns of lipid nanoparticle carrying mRNA vaccine</a></strong></p>
                    <p><strong><a href="https://www.wsj.com/amp/articles/are-covid-vaccines-riskier-than-advertised-11624381749" target="_blank" rel="noopener">Are Covid Vaccines Riskier Than Advertised?</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/06/23/covid-delta-variant-lockdowns.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=19000101&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1ReadMore&amp;cid=20210623&amp;mid=DM917998&amp;rid=1190868065&amp;p4=20210227&amp;p5=" target="_blank" rel="noopener">New Delta Virus Variant Escalates Lockdowns</a></strong></p>
                    <p><strong><a href="https://www.bloomberg.com/news/articles/2021-06-22/parasite-drug-analyzed-as-possible-covid-treatment-in-u-k-trial?utm_campaign=news&amp;utm_medium=bd&amp;utm_source=applenews" target="_blank" rel="noopener">Parasite Drug Analyzed as Possible Covid Treatment in U.K. Trial</a></strong></p>
                    <p><strong><a href="https://news.yahoo.com/israel-faces-virus-surge-vaccinated-082159043.html" target="_blank" rel="noopener">Israel faces Covid surge as virus circulates even among vaccinated</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/cdc-finds-more-cases-of-heart-inflammation-than-expected-connected-to-covid-19-vaccines_3870915.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-06-23-2&amp;mktids=7f956491f467a5a45216b89bbc79149d&amp;est=mAoAMqLEO5Y9dFlGhDutuGSu8I4vixkzcmhR5g6XuJD59v3OxDXvRLDesNQmpbCw" target="_blank" rel="noopener">CDC Finds More Cases of Heart Inflammation Than Expected in Vaccinated Young Males</a></strong></p>
                    <p><strong><a href="https://defendingtherepublic.org/covid/" target="_blank" rel="noopener">Children are 50 times more likely to die from the COVID vaccine than the virus</a></strong></p>
                    <p><strong><a href="https://redpilled.ca/column-florida-bill-banning-vaccine-passports-contains-hidden-clause-allowing-for-mass-forced-vaccinations-mandatory-solitary-confinement-quarantine-of-residents-with-covid-19/" target="_blank" rel="noopener">Possible deception</a>? <a href="https://redpilled.ca/column-florida-bill-banning-vaccine-passports-contains-hidden-clause-allowing-for-mass-forced-vaccinations-mandatory-solitary-confinement-quarantine-of-residents-with-covid-19/" target="_blank" rel="noopener">Florida Bill Banning Vaccine Passports Contains Hidden Clause Allowing for MASS FORCED VACCINATIONS, Mandatory Solitary Confinement Quarantine of Residents With COVID-19</a></strong></p>
                    <p><strong><a href="https://ottawacitizen.com/news/local-news/increased-risk-of-heart-muscle-inflammation-linked-with-mrna-vaccines-seen-in-ottawa" target="_blank" rel="noopener">Increased risk of heart muscle inflammation linked with mRNA vaccines, seen in Ottawa</a></strong></p>
                    <p><strong><a href="https://www.news-medical.net/news/20210608/No-point-vaccinating-those-whoe28099ve-had-COVID-19-Findings-of-Cleveland-Clinic-study.aspx" target="_blank" rel="noopener">No point vaccinating those who’ve had COVID-19: Cleveland Clinic study suggests</a></strong></p>
                    <p><strong><a href="https://science.sciencemag.org/content/372/6543/738?utm_campaign=SciMag&amp;utm_source=JHubbard&amp;utm_medium=Twitter" target="_blank" rel="noopener">Shared B cell memory to coronaviruses and other pathogens varies in human age groups and tissues</a></strong></p>
                    <p><strong><a href="https://trialsitenews.com/should-you-get-vaccinated/" target="_blank" rel="noopener">Should you get vaccinated?</a></strong></p>
                    <p><strong><a href="https://science.sciencemag.org/content/early/2021/06/22/science.abi4506.full" target="_blank" rel="noopener">Chimeric spike mRNA vaccines protect against Sarbecovirus&nbsp;challenge in mice</a></strong></p>
                    <p><strong><a href="https://justthenews.com/government/courts-law/indiana-university-students-compare-covid-vaccine-mandate-tuskegee-experiment" target="_blank" rel="noopener">Indiana University students compare COVID vaccine mandate to Tuskegee experiment in lawsuit</a></strong></p>
                    <p><strong><a href="http://www.stationgossip.com/2021/02/huge-exclusive-us-dr-ralph-baric-was.html" target="_blank" rel="noopener">HUGE EXCLUSIVE: US Dr. Ralph Baric Was Reviewing Moderna and Dr. Fauci’s Coronavirus Vaccine in December 2019! — What’s Going On?</a></strong></p>
                    <p><strong><a href="https://www.reuters.com/world/europe/german-panel-gives-limited-approval-covid-19-shot-adolescents-2021-06-10/" target="_blank" rel="noopener">German panel gives limited approval for COVID-19 shot for adolescents</a></strong></p>
                    <p><strong><a href="https://www.bbc.com/news/health-57496074" target="_blank" rel="noopener">Covid: Children aged 12-17 unlikely to be offered vaccine in UK</a></strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-9719891/Inventor-mRNA-vaccines-says-young-adults-teens-not-forced-COVID-vaccine.html?utm_source=JangoMail&amp;utm_medium=Email&amp;utm_campaign=Kraken+Alert+!!+(342017164)&amp;utm_content=" target="_blank" rel="noopener">‘The government is not being transparent about the risks’: Inventor of MRNA vaccines says people should not be forced to take experimental COVID vaccines because risks aren’t known and under 18s and those who’ve had virus shouldn’t take it</a></strong></p>
                    <p><strong><a href="https://www.jccf.ca/surgeon-fired-by-college-of-medicine-for-voicing-safety-concerns-about-covid-shots-for-children/" target="_blank" rel="noopener">Surgeon fired by College of Medicine for voicing safety concerns about Covid shots for children</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/06/23/covid-delta-variant-lockdowns.aspx?ui=a6e63c82c401e372347c37cdc2f6068f413f4e55ce225c7b6236e44a5f7546f3&amp;sd=19000101&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1HL&amp;cid=20210623&amp;mid=DM917998&amp;rid=1190758844&amp;p4=20200904&amp;p5=" target="_blank" rel="noopener">New Delta Virus Variant Escalates Lockdowns</a></strong></p>
                    <p><strong><a href="https://www.abc12.com/2021/06/23/health-department-13-year-old-saginaw-boys-death-may-be-linked-covid-19-vaccine/" target="_blank" rel="noopener">CDC investigating whether 13-year-old Saginaw boy’s death was linked to COVID-19 vaccine</a></strong></p>
                    <p><strong><a href="https://thenationalpulse.com/exclusive/audio-fauci-funded-researcher-describes-gain-of-function-collaboration-with-wuhan-lab-reveals-nih-was-very-supportive/" target="_blank" rel="noopener">Audio from a podcast unearthed by The National Pulse</a> appears to reveal Dr. Ralph Baric – who conducted bat coronavirus manipulation alongside Chinese researchers – contradicting Anthony Fauci’s claim that such research was never funded by his National Institute of Allergy and Infectious Disease.</strong></p>
                    <p><strong><a href="https://newspunch.com/hancock-suggests-nhs-has-decreased-duty-of-care-for-those-who-chose-not-to-have-vaccine/" target="_blank" rel="noopener">Hancock Suggests NHS Has Decreased Duty Of Care For Those Who Chose Not To Have Vaccine</a></strong></p>
                    <p><strong><a href="https://www.reuters.com/world/middle-east/vaccinated-israelis-may-need-quarantine-because-delta-variant-2021-06-23/" target="_blank" rel="noopener">Vaccinated Israelis may need to quarantine because of Delta variant</a></strong></p>
                    <p><strong><a href="https://thecoloradoherald.com/2021/thousands-of-flights-cancelled-as-vaccinated-pilots-fall-ill-or-die/" target="_blank" rel="noopener">Thousands of flights cancelled as vaccinated pilots fall ill or die</a></strong></p>
                    <p><strong><a href="https://thevaccinereaction.org/2021/06/former-fda-chief-stephen-hahn-joins-venture-capital-firm-behind-moderna/" target="_blank" rel="noopener">Former FDA Chief Stephen Hahn Joins Venture Capital Firm Behind Moderna COVID Vaccine</a></strong></p>
                    <p><strong><a href="https://greatgameindia.com/norway-risk-dying-astrazeneca-covishield/" target="_blank" rel="noopener">Norway Says Risk Of Dying From AstraZeneca CoviShield Vaccine Higher Than Of COVID-19</a></strong></p>
                    <p><strong><a href="https://abcnews.go.com/amp/US/universities-require-vaccines-arizona-governors-executive-order/story?id=78312275&amp;id=78312275&amp;__twitter_impression=true" target="_blank" rel="noopener">Universities can’t require vaccines: Arizona governor’s executive order</a></strong></p>
                    <p><strong><a href="https://academic.oup.com/jid/advance-article/doi/10.1093/infdis/jiab147/6179975" target="_blank" rel="noopener">Human Rhinovirus Infection Blocks Severe Acute Respiratory Syndrome Coronavirus 2 Replication Within the Respiratory Epithelium: Implications for COVID-19 Epidemiology</a></strong></p>
                    <p><strong><a href="https://www.nysna.org/position-statement-covid-19-vaccine#.YNXg9mhKiUn" target="_blank" rel="noopener">New&nbsp; York State Nurses Association Oppose COVID-19 Vaccination:&nbsp; POSITION STATEMENT: ON THE COVID-19 VACCINE&nbsp;</a></strong></p>
                    <p><strong><a href="https://www.nature.com/articles/d41586-021-01731-3" target="_blank" rel="noopener">Deleted coronavirus genome sequences trigger scientific intrigue</a></strong></p>
                    <p><strong><a href="https://www.nature.com/articles/d41586-021-01731-3" target="_blank" rel="noopener">Partial SARS-CoV-2 sequences from early outbreaks in Wuhan were removed from a US government database by the scientists who deposited them.</a></strong></p>
                    <p><strong><a href="https://www.biorxiv.org/content/10.1101/2021.06.20.448993v1" target="_blank" rel="noopener">Selectively expressing SARS-CoV-2 Spike protein S1 subunit in cardiomyocytes induces cardiac hypertrophy in mice.</a></strong></p>
                    <p><strong><a href="https://bsfreemd.libsyn.com/25-follow-the-herd-with-dr-harvey-risch" target="_blank" rel="noopener">The Safety of COVID-19 Vaccinations—We Should Rethink the Policy</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/half-of-adults-infected-in-latest-covid-19-outbreak-were-fully-vaccinated-israeli-officials_3874223.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-06-25-2&amp;mktids=e28a71b000836845a73f1958a989d207&amp;est=kUX6uXflahmNe61%2FgH9gfHWeCFu43BodSOxizp%2FcupKbnlZQSuutVn2ghz9IT0%2F2" target="_blank" rel="noopener">Half of Adults Infected in Latest COVID-19 Outbreak Were Fully Vaccinated: Israeli Official</a></strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/06/indian-bar-association-sues-lying-ivermectin-killing-indians-will-fauci-cdc-next/" target="_blank" rel="noopener">Indian Bar Association Sues WHO for Lying About Ivermectin and Killing Indians — Will Fauci and CDC Be Next?</a></strong></p>
                    <p><strong><a href="https://www.sciencedaily.com/releases/2021/06/210624170833.htm" target="_blank" rel="noopener">Virus that causes COVID-19 can find alternate route to infect cells</a></strong></p>
                    <p><strong><a href="https://www.reuters.com/business/healthcare-pharmaceuticals/us-panel-review-heart-inflammation-cases-after-pfizer-moderna-vaccines-2021-06-23/" target="_blank" rel="noopener">FDA to add warning about rare heart inflammation to Pfizer, Moderna vaccines</a></strong></p>
                    <p><strong><a href="https://www.krisinformation.se/en/hazards-and-risks/disasters-and-incidents/2020/official-information-on-the-new-coronavirus/children-and-parents" target="_blank" rel="noopener">Sweden’s Public Health now recommending children/teens under 18yo not be vaccinated</a></strong></p>
                    <p><strong><a href="https://www.news-medical.net/news/20201012/Suramin-shows-promise-as-COVID-19-treatment.aspx" target="_blank" rel="noopener">Suramin shows promise as COVID-19 treatment</a></strong></p>
                    <p><strong><a href="https://takeactioncanada.ca/suicide-prevention-mental-illness-covid/" target="_blank" rel="noopener">Deaths of Despair in Children in Canada due to COVID1-9 lockdowns</a></strong></p>
                    <p><strong><a href="https://thehill.com/homenews/media/560384-bill-maher-slams-tech-giants-for-limiting-covid-19-info-ivermectin-isnt-a" target="_blank" rel="noopener">Bill Maher slams tech giants for limiting COVID-19 info: ‘Ivermectin isn’t a registered Republican’</a></strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/06/sydney-australia-goes-two-week-hard-lockdown-authorities-confirm-80-new-delta-variant-cases/" target="_blank" rel="noopener">Sydney, Australia Goes Into Two-Week Hard Lockdown After Authorities Confirm 80 New “Delta Variant” Cases</a></strong></p>
                    <p><strong><a href="https://www.fda.gov/media/144245/download" target="_blank" rel="noopener">Vaccines and Related Biological Products Advisory Committee Meeting December 10, 2020</a></strong></p>
                    <p><strong><a href="https://www.wsj.com/articles/covid-19-shots-for-teens-can-hit-legal-snags-and-parental-pushback-11621416603" target="_blank" rel="noopener">Covid-19 Shots for Teens Can Hit Legal Snags and Parental Pushback</a></strong></p>
                    <p><strong><a href="https://www.hartgroup.org/covid-19-is-becoming-more-mild/" target="_blank" rel="noopener">COVID is becoming milder</a>, presenting now as the common cold</strong></p>
                    <p><strong><a href="https://www.cdc.gov/vaccines/covid-19/clinical-considerations/myocarditis.html" target="_blank" rel="noopener">Clinical Considerations: Myocarditis and Pericarditis after Receipt of mRNA COVID-19 Vaccines Among Adolescents and Young Adults</a></strong></p>
                    <p><strong><a href="https://newspunch.com/mask-social-distancing-policies-need-to-continue-indefinitely-says-who/" target="_blank" rel="noopener">Mask &amp; Social Distancing Policies Need To Continue Indefinitely Says WHO</a></strong></p>
                    <p><strong><a href="https://summit.news/2021/06/10/uk-government-adviser-says-mask-mandates-should-continue-forever/" target="_blank" rel="noopener">UK Government Adviser Says Mask Mandates Should Continue “Forever”</a></strong></p>
                    <p><strong><a href="https://insight.jci.org/articles/view/123158" target="_blank" rel="noopener">Anti–spike IgG causes severe acute lung injury by skewing macrophage responses during acute SARS-CoV infection</a></strong></p>
                    <p><strong><a href="https://www.andrewbostom.org/" target="_blank" rel="noopener">Dr. Andrew Bostom</a> <a href="https://www.andrewbostom.org/2021/06/why-collegiate-covid-19-vaccine-mandates-are-lysenkoist-anti-science/" target="_blank" rel="noopener">collection of research</a></strong></p>
                    <p><strong><a href="https://www.pause2think.org/EN/solutionsapp.html#masque" target="_blank" rel="noopener">The failure of applied solutions</a></strong></p>
                    <p><strong><a href="https://healthimpactnews.com/2021/hundreds-of-thousands-take-to-the-streets-in-london-to-protest-and-fight-for-their-children/" target="_blank" rel="noopener">Hundreds of Thousands Take to the Streets in London to Protest And Fight for Their Children</a></strong></p>
                    <p><strong><a href="https://www.bitchute.com/video/rvccR4Tg6fRS/" target="_blank" rel="noopener">PURSUING TRUTH IN COVID DRUG TREATMENT AMID A CENSORED MEDIA LANDSCAPE</a></strong></p>
                    <p><strong><a href="http://www.lawandfreedom.com/wordpress/letter-to-virginia-private-and-public-colleges-universities-demanding-revocation-of-mandatory-covid-19-vaccine-requirement/" target="_blank" rel="noopener">Letter to Virginia Private and Public Colleges &amp; Universities Demanding Revocation of Mandatory COVID-19 Vaccine Requirement</a></strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-9730559/Epidemiologist-warns-Indian-Delta-variant-blown-US.html" target="_blank" rel="noopener">One month to fully vaccinate. Or else’: Epidemiologist warns Indian Delta variant will go ‘full blown’ in the US as Biden falls short of his July 4 vaccine goal and cases rise 60% in the UK</a></strong></p>
                    <p><strong><a href="https://www.mdpi.com/2072-6643/13/7/2216/htm" target="_blank" rel="noopener">Lung-Centric Inflammation of COVID-19: Potential Modulation by Vitamin D</a></strong></p>
                    <p><strong><a href="https://americasfrontlinedoctors.org/frontlinenews/lisbon-court-rules-only-0-9-of-verified-cases-died-of-covid-numbering-152-not-17000-claimed/" target="_blank" rel="noopener">Lisbon court rules only 0.9% of ‘verified cases’ died of COVID, numbering 152, not 17,000 claimed</a></strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/cdc-changes-rules-counting-breakthrough-cases/" target="_blank" rel="noopener">CDC Changes Rules for Counting Breakthrough Cases, as More Fully Vaccinated People Test Positive</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/fda-adds-warning-about-heart-inflammation-to-covid-19-mrna-vaccines_3876245.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-06-27-3&amp;mktids=1a70f5541a0c24ba8174d8738f88db5e&amp;est=GRsJHuDhEF8E%2BJ4iIJ4m4eDvzpZd8PClapW6xlNEwWkbHB%2FzSPY7J5G7CHd%2BUtbP" target="_blank" rel="noopener">FDA Adds Warning About Heart Inflammation to COVID-19 mRNA Vaccines</a></strong></p>
                    <p><strong><a href="https://www.cnbc.com/2021/06/25/delta-who-urges-fully-vaccinated-people-to-continue-to-wear-masks-as-variant-spreads.html" target="_blank" rel="noopener">WHO urges fully vaccinated people to continue to wear masks as delta Covid variant spreads</a></strong></p>
                    <p><strong><a href="https://rumble.com/vh5l59-texas-senate-hearing-covid-vaccines-did-have-animal-trials-all-were-halted-.html" target="_blank" rel="noopener">Texas Senate Hearing; COVID Vaccines DID have Animal Trials, All were halted because they Kept Dying</a></strong></p>
                    <p><strong><a href="https://summit.news/2021/06/28/make-a-wish-foundation-says-it-wont-help-terminally-ill-children-unless-their-entire-family-is-vaccinated/" target="_blank" rel="noopener">Make-a-Wish Foundation Says It Won’t Help Terminally Ill Children Unless Their Entire Family is Vaccinated</a></strong></p>
                    <p><strong><a href="https://www.mcgill.ca/oss/article/covid-19-health/sometimes-you-want-immunity-suppressed?utm_source=OSS+Newsletter&amp;utm_campaign=4b8f1dc23a-EMAIL_CAMPAIGN_5_3_2019_14_30_COPY_01&amp;utm_medium=email&amp;utm_term=0_995459bc2b-4b8f1dc23a-108734303" target="_blank" rel="noopener">Sometimes You Want Immunity Suppressed</a></strong></p>
                    <p><strong><a href="https://www.abc.net.au/news/2021-06-29/australias-new-covid-phase-as-delta-variant-spreads/100249444" target="_blank" rel="noopener">As the Delta variant spreads, Australian experts say maintaining ‘COVID zero’ means lockdowns until vaccination rate improves</a></strong></p>
                    <p><strong><a href="https://dialogue.cpso.on.ca/2021/06/rise-of-infodemics/" target="_blank" rel="noopener">Rise of Infodemics</a></strong></p>
                    <p><strong><a href="https://www.rt.com/news/527740-singapore-vaccine-pause-cdc/" target="_blank" rel="noopener">Singapore doctors call to HALT Covid vaccination of teens as unexplained death of 13yo boy probed in US</a></strong></p>
                    <p><strong><a href="https://breggin.com/fauci-wants-you-scared-anxious-and-compliant-its-scientific/" target="_blank" rel="noopener">Fauci wants you scared, anxious, and compliant-it’s scientific!</a></strong></p>
                    <p><strong><a href="https://web.archive.org/web/20210628115323/https:/www.nytimes.com/2021/05/26/health/coronavirus-immunity-vaccines.html" target="_blank" rel="noopener">Immunity to the Coronavirus May Persist for Years, Scientists Find</a></strong></p>
                    <p><strong><a href="https://www.wodarg.com/english/" target="_blank" rel="noopener">Dangerous side effects of genetically induced production of SARS CoV-2 spike proteins</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_morningbrief/scientists-obfuscated-source-of-covid-19-like-virus-stored-at-wuhan-lab_3878140.html?utm_source=morningbriefnoe&amp;utm_medium=email2&amp;utm_campaign=mb-2021-06-29&amp;mktids=925d161073736aba122448b27d0822e2&amp;est=31t29k7ur9I9TlF4yWePziFL1L45uj1KGZA%2B3rmbbguakshBIgf%2FSSMuLOwd2e%2B4" target="_blank" rel="noopener">Scientists Obfuscated Source of COVID-19-Like Virus Stored at Wuhan Lab</a></strong></p>
                    <p><strong><a href="https://dailyexpose.co.uk/2021/06/28/chris-whitty-gave-the-order-to-give-alleged-covid-19-patients-lethal-doses-of-hydroxychloroquine-to-both-kill-them-and-sabotage-trials/" target="_blank" rel="noopener">Chris Whitty gave the order to give alleged Covid-19 patients lethal doses of Hydroxychloroquine to both kill them and sabotage trials</a></strong></p>
                    <p><strong><a href="https://www.dispatch.com/story/news/politics/2021/06/28/ohio-senate-vote-ban-covid-vaccine-mandates-public-schools-universities/7789828002/" target="_blank" rel="noopener">Ohio lawmakers ban requiring COVID-19 vaccine at public schools, universities</a></strong></p>
                    <p><strong><a href="https://www.eviemagazine.com/post/im-a-healthy-teenage-girl-i-shouldnt-feel-forced-to-get-the-covid-vaccine" target="_blank" rel="noopener">I’m A Healthy Teenage Girl. I Shouldn’t Feel Forced To Get The Covid Vaccine</a></strong></p>
                    <p><strong><a href="https://finance.yahoo.com/news/bringing-back-mask-mandate-is-a-good-idea-doctor-on-delta-variant-135926196.html" target="_blank" rel="noopener">Bringing back mask mandate is a good idea’: doctor on Delta variant</a></strong></p>
                    <p><strong><a href="https://thespectator.info/2021/05/27/our-main-finding-is-that-mask-mandates-and-use-are-not-associated-with-lower-sars-cov-2-spread-among-us-states-twitchy-com/" target="_blank" rel="noopener">‘Our main finding is that mask mandates and use are not associated with lower SARS-CoV-2 spread among US states’ – twitchy.com</a></strong></p>
                    <p><strong><a href="https://townhall.com/tipsheet/scottmorefield/2021/06/15/a-group-of-parents-sent-their-kids-face-masks-to-a-lab-for-analysis-heres-what-they-found-n2591047" target="_blank" rel="noopener">A Group Of Parents Sent Their Kids’ Face Masks to A Lab for Analysis. Here’s What They Found</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/who-stops-recommending-widespread-covid-19-testing-of-asymptomatic-cases_3878708.html?utm_source=pushengage" target="_blank" rel="noopener">WHO Stops Recommending Widespread COVID-19 Testing of Asymptomatic Cases</a></strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-9738819/Vaccine-passports-over.html?ito=push-notification&amp;ci=274667&amp;si=33905649&amp;ai=9738819" target="_blank" rel="noopener">Vaccine passports: It’s all over!</a> Cabinet agrees it’s time to ‘live with Covid’… and you WON’T have to show proof of vaccination to attend mass gatherings</strong></p>
                    <p><strong>Ministers are set to shelve plans for the mandatory use of ‘Covid certification’</strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/opinion/follow-the-science-deadly-delta-variant-registers-a-99.9-recovery-rate" target="_blank" rel="noopener">Follow the science: ‘Deadly’ Delta variant registers a 99.9+% recovery rate</a></strong></p>
                    <p><strong><a href="https://www.sciencedaily.com/releases/2021/06/210629144312.htm" target="_blank" rel="noopener">How a COVID-19 infection changes blood cells in the long run</a></strong></p>
                    <p><strong><a href="https://www-forbes-com.cdn.ampproject.org/c/s/www.forbes.com/sites/brucelee/2021/06/26/cdc-4115-fully-vaccinated-have-been-hospitalized-or-died-with-breakthrough-covid-19-infections/amp/" target="_blank" rel="noopener">CDC: 4,115 Fully Vaccinated Have Been Hospitalized Or Died With Breakthrough Covid-19 Infections</a></strong></p>
                    <p><strong><a href="https://www.who.int/publications/i/item/WHO-2019-nCoV-lab-testing-2021.1-eng" target="_blank" rel="noopener">WHO: no mass testing of asymptomatic persons</a></strong></p>
                    <p><strong><a href="https://noqreport.com/2021/06/29/newest-covid-lie-fear-delta-variant-and-get-vaccinated/" target="_blank" rel="noopener">Newest COVID Lie: Fear Delta Variant and Get Vaccinated</a></strong></p>
                    <p><strong><a href="https://www.usatoday.com/story/news/health/2021/06/26/coronavirus-origins-deleted-gene-sequences-offer-clues-early-days/5330275001/" target="_blank" rel="noopener">Deleted gene sequences confirm coronavirus circulated before Wuhan seafood market</a></strong></p>
                    <p><strong><a href="https://www.thelancet.com/action/showPdf?pii=S2666-5247%2821%2900157-9" target="_blank" rel="noopener">Paucity and discordance of neutralising antibody responses to SARS-CoV-2 VOCs in vaccinated immunodeficient patients and health-care workers in the UK</a></strong></p>
                    <p><strong><a href="https://jamanetwork.com/journals/jamacardiology/fullarticle/2781601" target="_blank" rel="noopener">Myocarditis Following Immunization With mRNA COVID-19 Vaccines in Members of the US Military</a></strong></p>
                    <p><strong><a href="https://www.sciencedirect.com/science/article/pii/S187140212100206X" target="_blank" rel="noopener">Ivermectin and mortality in patients with COVID-19: A systematic review, meta-analysis, and meta-regression of randomized controlled trials</a></strong></p>
                    <p><strong><a href="https://www.bmj.com/content/373/bmj.n1635" target="_blank" rel="noopener">Covid-19: Should we be worried about reports of myocarditis and pericarditis after mRNA vaccines?</a></strong></p>
                    <p><strong><a href="https://www.medpagetoday.com/opinion/second-opinions/93340" target="_blank" rel="noopener">CDC’s All-or-Nothing Approach to Teen COVID Vaccination Is All Wrong</a></strong></p>
                    <p><strong><a href="https://www.medpagetoday.com/opinion/second-opinions/93340" target="_blank" rel="noopener">— The agency should revisit its latest guidance to maximize benefits and minimize risks</a></strong></p>
                    <p><strong><a href="https://jamanetwork.com/journals/jamapediatrics/fullarticle/2781743#pld210019f1" target="_blank" rel="noopener">Experimental Assessment of Carbon Dioxide Content in Inhaled Air With or Without Face Masks in Healthy Children</a></strong></p>
                    <p><strong><a href="https://www.the-scientist.com/news-opinion/the-quest-for-a-universal-coronavirus-vaccine-68934?utm_campaign=TS_DAILY_NEWSLETTER_2021&amp;utm_medium=email&amp;_hsmi=137286506&amp;_hsenc=p2ANqtz-8C7NAb0Wn5GGf_lyWqLItSjhBRhjwTFpQ3fSI3-V2T6sngp5CnmYngnM4oPSGdkwfEUb-xUATA4stzAx4ELXdIyqGrMw&amp;utm_content=137286505&amp;utm_source=hs_email" target="_blank" rel="noopener">The Quest for a Universal Coronavirus Vaccine</a></strong></p>
                    <p><strong><a href="https://www.the-scientist.com/news-opinion/the-quest-for-a-universal-coronavirus-vaccine-68934?utm_campaign=TS_DAILY_NEWSLETTER_2021&amp;utm_medium=email&amp;_hsmi=137286506&amp;_hsenc=p2ANqtz-8C7NAb0Wn5GGf_lyWqLItSjhBRhjwTFpQ3fSI3-V2T6sngp5CnmYngnM4oPSGdkwfEUb-xUATA4stzAx4ELXdIyqGrMw&amp;utm_content=137286505&amp;utm_source=hs_email" target="_blank" rel="noopener">&nbsp;</a></strong></p>
                    <p><strong><a href="https://www.tabletmag.com/sections/news/articles/the-war-on-reality-gutentag" target="_blank" rel="noopener">The War on Reality</a></strong></p>
                    <p><strong><a href="https://www.naturalnews.com/2021-06-30-cdc-fda-to-inject-children-deadly-vaccine.html" target="_blank" rel="noopener">CDC, FDA ready to inject children with deadly six-in-one vaccine</a></strong></p>
                    <p><strong><a href="https://www.mdpi.com/2077-0383/10/13/2954" target="_blank" rel="noopener">Hydroxychloroquine and Azithromycin Treatment of Hospitalized Patients Infected with SARS-CoV-2 in Senegal from March to October 2020</a></strong></p>
                    <p><strong><a href="https://www.mass.gov/news/commonwealth-launches-mass-vaxmillions-vaccine-lottery-program" target="_blank" rel="noopener">Commonwealth Launches “Mass VaxMillions” Vaccine Lottery Program</a></strong></p>
                    <p><strong><a href="https://www.cbc.ca/news/canada/nova-scotia/halifax-family-questions-care-delay-after-19-year-old-son-dies-of-meningitis-1.6068149" target="_blank" rel="noopener">Halifax family questions delay in treatment after son, 19, dies of meningitis</a></strong></p>
                    <p><strong><a href="https://jamanetwork.com/journals/jamacardiology/fullarticle/2781602?utm_campaign=articlePDF&amp;utm_medium=articlePDFlink&amp;utm_source=articlePDF&amp;utm_content=jamacardio.2021.2828" target="_blank" rel="noopener">Patients With Acute Myocarditis Following mRNA COVID-19 Vaccination</a></strong></p>
                    <p><strong><a href="https://www.telegraph.co.uk/news/2021/06/30/letting-children-catch-covid-may-safer-exposing-vaccine-risk/" target="_blank" rel="noopener">Letting children catch Covid may be safer than giving them vaccine, say experts</a></strong></p>
                    <p><strong><a href="https://www.telegraph.co.uk/news/2021/06/30/letting-children-catch-covid-may-safer-exposing-vaccine-risk/" target="_blank" rel="noopener">Rising wave of cases may be better way to build immunity in teenagers than exposing them to potential risks from a jab, says JCVI scientist</a></strong></p>
                    <p><strong><a href="https://medium.com/@wpegden/covid-19-vaccines-in-children-6cdff15b2415" target="_blank" rel="noopener">COVID-19 vaccines in children</a></strong></p>
                    <p><strong><a href="https://collateralglobal.org/article/the-infectious-diseases-we-dont-seem-to-care-about/" target="_blank" rel="noopener">The Infectious Diseases we do not seem to care about</a></strong></p>
                    <p><strong><a href="https://www.conservativewoman.co.uk/covids-dark-winter-did-hidden-banking-crisis-spark-global-lockdown/" target="_blank" rel="noopener">Covid’s dark winter: Did hidden banking crisis spark global lockdown?</a></strong></p>
                    <p><strong><a href="https://ahrp.org/how-a-false-hydroxychloroquine-narrative-was-created/" target="_blank" rel="noopener">How a False Hydroxychloroquine Narrative Was Created</a></strong></p>
                    <p><strong><a href="https://www.pandata.org/" target="_blank" rel="noopener">Declaration for the Protection of Children and Young People from the COVID-19 response</a></strong></p>
                    <p><strong><a href="https://www.pandata.org/about/protocol-for-reopening-society/" target="_blank" rel="noopener">Protocol for re-opening society</a></strong></p>
                    <p><strong><a href="https://vaccineimpact.com/2021/the-delta-variant-of-covid-19-is-harmless-a-scam-for-governments-to-implement-more-lockdowns/" target="_blank" rel="noopener">The Delta Variant of COVID-19 is Harmless – A Scam for Governments to Implement More Lockdowns</a></strong></p>
                    <p><strong><a href="https://www.naturalnews.com/2021-06-28-chinese-billionaire-ccp-release-another-covid-strain.html" target="_blank" rel="noopener">Chinese billionaire says CCP planning to release another covid strain this summer</a></strong></p>
                    <p><strong><a href="https://www.wearetheprey.com/" target="_blank" rel="noopener">COVID-19 AND THE GLOBAL PREDATORS:&nbsp;WE ARE THE PREY</a></strong></p>
                    <p><strong><a href="https://roundingtheearth.substack.com/p/the-meta-analytical-fixers-an-ivermectin" target="_blank" rel="noopener">The Meta-Analytical Fixers: An Ivermectin Tale</a></strong></p>
                    <p><strong><a href="https://www.washingtontimes.com/news/2021/jun/30/covid-19-lockdowns-caused-more-deaths-instead-of-r/" target="_blank" rel="noopener">COVID-19 lockdowns caused more deaths instead of reducing them, study finds</a></strong></p>
                    <p><strong><a href="https://mises.org/wire/experts-said-ending-lockdowns-would-be-worse-economy-lockdowns-themselves-they-were-wrong" target="_blank" rel="noopener">Experts Said Ending Lockdowns Would Be Worse for the Economy than the Lockdowns Themselves. They Were Wrong.</a></strong></p>
                    <p><strong><a href="https://www.icandecide.org/wp-content/uploads/2019/09/ICAN-Reply-1.pdf" target="_blank" rel="noopener">Letter to Department of Human Health Services (Secretary Azar and Acting Director Beckham) from Informed Consent Action Network (Del Bigtree)</a></strong></p>
                    <p><strong><a href="https://www.wsj.com/articles/weighing-pros-and-cons-of-vaccinating-kids-11625154083?mod=opinion_major_pos16" target="_blank" rel="noopener">Weighing Pros and Cons of Vaccinating Kids</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/world-economic-forum-proposes-psychological-plan-to-overcome-vaccine-hesitancy" target="_blank" rel="noopener">World Economic Forum proposes psychological plan to overcome ‘vaccine hesitancy’</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/world-economic-forum-proposes-psychological-plan-to-overcome-vaccine-hesitancy" target="_blank" rel="noopener">The scholars want to use psychology to promote vaccines, noting how customers make decisions in a process of thinking, feeling, and taking action.</a></strong></p>
                    <p><strong><a href="https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD013587.pub2/full" target="_blank" rel="noopener">Chloroquine or hydroxychloroquine for prevention and treatment of COVID‐19</a></strong></p>
                    <p><strong><a href="https://www.cochrane.org/MR000034/METHOD_comparing-effect-estimates-of-randomized-controlled-trials-and-observational-studies" target="_blank" rel="noopener">Comparing effect estimates of randomized controlled trials and observational studies</a></strong></p>
                    <p><strong><a href="https://www.nejm.org/doi/full/10.1056/NEJM200006223422506" target="_blank" rel="noopener">A Comparison of Observational Studies and Randomized, Controlled Trials</a></strong></p>
                    <p><strong><a href="https://www.biznews.com/health/2021/06/28/covid-19-vaccine-immunity" target="_blank" rel="noopener">Natural immunity vs Covid-19 vaccine-induced immunity – Marc Girardot of PANDA</a></strong></p>
                    <p><strong><a href="https://www.newswars.com/covid-19-is-a-man-made-virus-hiv-discoverer-says-could-only-have-been-created-in-a-lab/" target="_blank" rel="noopener">COVID is a mand made virus</a></strong></p>
                    <p><strong><a href="https://www.jennifermargulis.net/unvaccinated-children-are-healthier/" target="_blank" rel="noopener">Unvaccinated Children Are Healthier</a></strong></p>
                    <p><strong><a href="https://www.kusi.com/l-a-county-urges-people-to-wear-masks-indoors-as-delta-variant-spreads/" target="_blank" rel="noopener">L.A. County urges people to wear masks indoors as Delta variant spreads</a></strong></p>
                    <p><strong><a href="https://michaelsavage.com/dr-francis-boyle-creator-of-bioweapons-act-says-coronavirus-is-biological-warfare-weapon/" target="_blank" rel="noopener">Dr. Francis Boyle Creator Of BioWeapons Act Says Coronavirus Is Biological Warfare Weapon</a></strong></p>
                    <p><strong><a href="https://stateofthenation.co/?p=41646" target="_blank" rel="noopener">If you are even considering the remote possibility of taking the COVID-19 vaccine, you had better read this MD opinion first!</a></strong></p>
                    <p><strong><a href="https://lockdownsceptics.org/how-robust-is-covid-immunity/#sdendnote11anc" target="_blank" rel="noopener">How Worried Should We Be About the Variants?</a></strong></p>
                    <p><strong><a href="https://thefederalist.com/2021/07/05/how-college-covid-vaccine-mandates-put-students-in-danger/" target="_blank" rel="noopener">College COVID vaccine mandates put students in danger</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/11-critical-questions-now-that-the-lab-leak-theory-is-politically-correct_3838584.html" target="_blank" rel="noopener">11 Critical Questions Now That the Lab Leak Theory Is ‘Politically Correct’</a></strong></p>
                    <p><strong><a href="https://www.telegraph.co.uk/health-fitness/body/long-does-covid-immunity-really-last/" target="_blank" rel="noopener">How long does COVID immunity really last?</a></strong></p>
                    <p><strong><a href="https://stateofthenation.co/?p=71885" target="_blank" rel="noopener">Urgent Need to Support Petition to Halt FDA Approval of COVID Vaccines</a></strong></p>
                    <p><strong><a href="https://faseb.onlinelibrary.wiley.com/doi/10.1096/fasebj.2021.35.S1.04183" target="_blank" rel="noopener">Single intratracheal exposure to SARS-CoV-2 S1 spike protein induces acute lung injury in K18-hACE2 transgenic mice</a></strong></p>
                    <p><strong><a href="https://www.researchsquare.com/article/rs-362354/v2" target="_blank" rel="noopener">A prothrombotic thrombocytopenic disorder resembling heparin-induced thrombocytopenia following COVID-19 vaccination</a></strong></p>
                    <p><strong><a href="https://onlinelibrary.wiley.com/doi/10.1111/jth.15420" target="_blank" rel="noopener">Acquired Thrombotic Thrombocytopenic Purpura: a rare disease associated Acquired with BNT162b2 vaccine</a></strong></p>
                    <p><strong><a href="https://www.sciencemag.org/news/2021/06/israel-reports-link-between-rare-cases-heart-inflammation-and-covid-19-vaccination" target="_blank" rel="noopener">Israel reports link between rare cases of heart inflammation and COVID-19 vaccination in young men</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/military-members-say-theyll-quit-if-army-mandates-covid-19-vaccine-congressman_3887127.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-07-05-2&amp;mktids=2041a036730298f5219cb80d5330e09d&amp;est=Pvl6cwuXKRfBwGqusMFom7WwNxVVotNGAQlVIcmPDbUAbgDJ1FayW%2Fz05eKrgLx5" target="_blank" rel="noopener">Military Members Say They’ll ‘Quit’ If Army Mandates COVID-19 Vaccine: Congressman</a></strong></p>
                    <p><strong><a href="https://www.linkedin.com/pulse/9-reasons-drop-support-mandates-investigational-peter-mccullough" target="_blank" rel="noopener">9 Reasons to Drop Support and Mandates for Investigational COVID-19 Vaccines</a></strong></p>
                    <p><strong><a href="https://covidcalltohumanity.org/2020/11/25/portugese-court-rules-pcr-tests-as-unreliable-and-unlawful-to-quarantine-people/" target="_blank" rel="noopener">Portuguese court rules PCR tests as unreliable and unlawful to quarantine people</a></strong></p>
                    <p><strong><a href="https://covidcalltohumanity.org/2021/06/30/lisbon-court-rules-only-152-or-0-9-of-17000-verified-deaths-died-of-covid/" target="_blank" rel="noopener">Lisbon court rules only 152 or 0.9% of 17,000 ‘verified deaths’ died of COVID</a></strong></p>
                    <p><strong><a href="https://theeconomicstandard.com/problematic-rcts-of-hydroxychloroquine-vs-covid-19/" target="_blank" rel="noopener">Problematic RCTs of hydroxychloroquine vs. COVID-19</a></strong></p>
                    <p><strong><a href="https://europepmc.org/article/PPR/PPR295537" target="_blank" rel="noopener">COVID-19 Library. Filling the Gaps</a></strong></p>
                    <p><strong><a href="http://www.kathydopp.info/COVIDinfo/Censorship" target="_blank" rel="noopener">Propaganda, Misinformation &amp; Censorship re. COVID-19 Information</a></strong></p>
                    <p><strong><a href="https://americasfrontlinedoctors.org/frontlinenews/the-delta-lie/" target="_blank" rel="noopener">The Delta Lie</a></strong></p>
                    <p><strong><a href="http://www.kathydopp.info/COVIDinfo/Vaccines/VaccineADE" target="_blank" rel="noopener">Scientists and Doctors Warn Against investigational COVID-19 Vaccines</a></strong></p>
                    <p><strong><a href="http://www.kathydopp.info/COVIDinfo/Vaccines/AdverseEvents" target="_blank" rel="noopener">COVID Post-Vaccination Adverse Events &amp; Deaths. Coincidences?</a></strong></p>
                    <p><strong><a href="http://www.quartermoonsaloon.com/forum1/index.php?threads/vaccines-could-be-spurring-variants.53247/" target="_blank" rel="noopener">COVID-19 Vaccines Could Be Spurring Variants, Say Israeli and European Experts</a></strong></p>
                    <p><strong><a href="https://www.nature.com/articles/s41467-020-19818-2.pdf" target="_blank" rel="noopener">No evidence for increased transmissibility from recurrent mutations in SARS-CoV-2</a></strong></p>
                    <p><strong><a href="https://nypost.com/2021/07/05/michigan-boy-dies-in-his-sleep-three-days-after-getting-vaccine/" target="_blank" rel="noopener">Michigan boy dies in his sleep three days after getting vaccine, CDC opens investigation</a></strong></p>
                    <p><strong><a href="https://www.healthaffairs.org/do/10.1377/hblog20201216.328379/full/" target="_blank" rel="noopener">Emergency Use Authorization For COVID-19 Monoclonal Antibodies: Challenges And Lessons Learned</a></strong></p>
                    <p><strong><a href="https://www.nber.org/system/files/working_papers/w28930/w28930.pdf" target="_blank" rel="noopener">THE IMPACT OF THE COVID-19 PANDEMIC AND POLICY RESPONSES ON EXCESS MORTALITY</a></strong></p>
                    <p><strong><a href="https://www.acpjournals.org/doi/10.7326/L21-0244" target="_blank" rel="noopener">Thrombosis With Thrombocytopenia After the Messenger RNA–1273 Vaccine</a></strong></p>
                    <p><strong><a href="https://noqreport.com/2021/07/02/as-adverse-reactions-to-covid-vaccines-reaches-400000-the-truth-must-be-spread-widely/" target="_blank" rel="noopener">As Adverse Reactions to Covid ‘Vaccines’ Reach 400,000, the Truth Must Be Spread Widely</a></strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2020.09.30.20204693v1" target="_blank" rel="noopener">Randomized Controlled Trials of Early Ambulatory Hydroxychloroquine in the Prevention of COVID-19 Infection, Hospitalization, and Death: Meta-Analysis</a></strong></p>
                    <p><strong><a href="https://breggin.com/operation-homebound-is-actually-operation-horror/" target="_blank" rel="noopener">Operation homebound door-to-door vaccination</a></strong></p>
                    <p><strong><a href="http://www.kathydopp.info/COVIDinfo/Vaccines/InformedConsent/SampleLetters" target="_blank" rel="noopener">Letters &amp; Lawyers for Employees and Students Fighting Illegal Mandates (Vaccines, Masks, Tests)</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_morningbrief/biden-admin-announces-door-to-door-outreach-teams-to-get-americans-vaccinated_3889283.html?utm_source=morningbriefnoe&amp;utm_medium=email2&amp;utm_campaign=mb-2021-07-07&amp;mktids=9cbc8689a452f3f5c88f56fc1da9d330&amp;est=tgfc4Afs19wgH9zfvHXm7utWDCmc93d2yANmYwacLBOO%2BaNLW0QOahyGTUdZpX%2Bq" target="_blank" rel="noopener">Biden Admin Announces Door-to-Door ‘Outreach’ Teams to ‘Get Americans Vaccinated’</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/07/07/science-journals-disinformation-campaign.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1ReadMore&amp;cid=20210707&amp;mid=DM929630&amp;rid=1202525368" target="_blank" rel="noopener">Science Journals Engaged in Massive Disinformation Campaign</a> on lab-leak and origins of SARS-2</strong></p>
                    <p><strong><a href="https://www.pandata.org/wp-content/uploads/PANDA_WHO_ReestablishingColonialism.pdf" target="_blank" rel="noopener">The World Health Organization and COVID-19: re-establishing colonialism</a> in public health</strong></p>
                    <p><strong><a href="https://www.who.int/immunization/monitoring_surveillance/resources/milstien.pdf" target="_blank" rel="noopener">Damage from immunization programs from misinformation on contraceptive vaccines</a></strong></p>
                    <p><strong><a href="https://www.irishexaminer.com/news/arid-40328123.html" target="_blank" rel="noopener">Clot risk to 18-39s from AstraZeneca vaccine is twice as high as Covid death risk, Euro study finds</a></strong></p>
                    <p><strong><a href="https://www.freemalaysiatoday.com/category/world/2021/07/05/singapore-launches-probe-into-vaccinated-teens-cardiac-arrest/?__cf_chl_jschl_tk__=1fb4dcfcc495186a2919c62f5b0b8a81156c3306-1625677630-0-AVMfb6rED8ABB8CRw0cBuY4_bdyTXamIp3HfeualRy2Fogq0UqSy4ebf0laaVDJtZV2zZE6wezMtjhDo8a9TLcCqo1oN9wxZVlxYYr88y7yrsZxT4-XWmvsj_vmtCV4R8W10y4GvI5DEibdN6y0V6CFbiPy2X6ADCHnSeXu-xWntDs4jK69In3yU8TZXi9eMIuQZ8gkeXZ2G4jPD-5aM6gD1HglsUpoqgIblz-raBDDwNhO-eSzz_OKGcqDQpOlHk4UHrfurnP5VedilioWAT07Pa42lNx1Hv7rfIP19eKPZdOMZYBZN8mBqYBP4wJp3sBRtHCLckQJW7a6cHWBXZBVmdqK9aewzN2T2quTT0xu36n6mwjjjdL9_eEw3x3cs0fbLT0hRQNkeXLF3zg4-wXguT3iG2W6JnO5qkI7MVXokVfum5hc8b1ifCmOnRTC0Ng9fMAdVEfe4LawdmaBoU0Oglt_gcuiA7KR1_RcHlet7cVJ9q6jM5OXsKYeWnqXE_hsnbhMvj8i6TgN2w5tsJ6-tK2m_fx8Fn54zLw5xVJ3Oj_p-5oz2FCkMT-29mJrYbw" target="_blank" rel="noopener">Singapore launches probe into vaccinated teen’s cardiac arrest</a></strong></p>
                    <p><strong><a href="https://www.thedesertreview.com/opinion/letters_to_editor/the-assault-against-early-treatment-for-covid-19-how-one-congressional-hearing-speaks-volumes-about/article_33425ff2-3593-11eb-b0d2-cf1365831d45.html" target="_blank" rel="noopener">The Assault Against Early Treatment for COVID-19: How One Congressional Hearing Speaks Volumes about America’s Failed Response to the Pandemic</a></strong></p>
                    <p><strong><a href="https://justthenews.com/politics-policy/coronavirus/retraction-paper-vaccine-deaths-spurs-demand-more-scrutiny-reported" target="_blank" rel="noopener">Retraction of paper on vaccine deaths spurs call for more scrutiny of COVID-19 death reports</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/lambda-variants-unusual-mutations-may-make-it-resistant-to-vaccines-researchers-fear_3888600.html" target="_blank" rel="noopener">Lambda Variant’s ‘Unusual’ Mutations May Make It Resistant to Vaccines: Researchers</a></strong></p>
                    <p><strong><a href="https://greatgameindia.com/children-dead-covid-vaccine/" target="_blank" rel="noopener">17 Children Dead, More Than 2000 Suffering From Multi System Inflammatory Syndrome Due To COVID Vaccine</a></strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/07/vaccinated-israeli-student-catches-covid-vaccinated-relative-infects-83-high-school-students-please-take-vaccines/" target="_blank" rel="noopener">Vaccinated Israeli Student Catches COVID from Vaccinated Relative and Then Infects 83 High School Students — But Please Take your Vaccines!</a></strong></p>
                    <p><strong><a href="https://www.sciencedirect.com/science/article/pii/S2052297521000792" target="_blank" rel="noopener">Early COVID-19 Therapy with azithromycin plus nitazoxanide, ivermectin or hydroxychloroquine in Outpatient Settings Significantly Improved COVID-19 outcomes compared to Known outcomes in untreated patients</a></strong></p>
                    <p><strong><a href="https://www.sciencedirect.com/science/article/pii/S2052297521000792" target="_blank" rel="noopener">&nbsp;</a></strong></p>
                    <p><strong><a href="https://ottawacitizen.com/news/canada/are-covid-vaccines-for-children-under-12-in-their-best-interest-or-just-everyone-elses/wcm/205e170a-d5f1-4744-91f0-1c2856bfd1d6" target="_blank" rel="noopener">Are COVID vaccines for children under 12 in their best interest — or just everyone else’s?</a></strong></p>
                    <p><strong><a href="https://thepostmillennial.com/ontarios-top-doctor-wants-schoolchildren-to-remain-masked-because-of-other-viruses" target="_blank" rel="noopener">Ontario’s top doctor says kids may remain masked in schools due to ‘other’ viruses</a></strong></p>
                    <p><strong><a href="https://www.mdpi.com/1660-4601/18/7/3371" target="_blank" rel="noopener">Comparisons between the Neighboring States of Amazonas and Pará in Brazil in the Second Wave of COVID-19 Outbreak and a Possible Role of Early Ambulatory Treatment</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/liberal-author-censored-by-twitter-and-youtube-after-questioning-fauci-considers-suing_3889747.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-07-08-1&amp;mktids=7f7e5ee73434bd8abed1e6834d8ee9aa&amp;est=P1j%2F0qzJBnwBI8C4aXdz%2FuPQvTcoWjPiRMDSC1fBoFWgt8Y8%2FW6Y3zqPIYjJbKDM" target="_blank" rel="noopener">Liberal Author, Censored by Twitter and Youtube After Questioning Fauci, Considers Suing</a></strong></p>
                    <p><strong><a href="https://www.news-medical.net/news/20210705/Scientists-identify-natural-SARS-CoV-2-super-immunity-against-23-variants.aspx" target="_blank" rel="noopener">Scientists identify natural SARS-CoV-2 super immunity against 23 variants</a></strong></p>
                    <p><strong><a href="https://www.aier.org/article/cracks-in-the-great-wall-part-one-the-ccp-at-100-years/" target="_blank" rel="noopener">Cracks in the Great Wall-Part One: The CCP at 100 Years</a></strong></p>
                    <p><strong><a href="https://thebl.tv/politics/french-drug-evaluation-center-concludes-all-4-covid-vaccines-should-be-discontinued.html" target="_blank" rel="noopener">French drug evaluation center concludes: ‘All 4 COVID vaccines should be discontinued’</a></strong></p>
                    <p><strong><a href="https://leohohmann.com/2021/07/01/world-economic-forum-announces-creation-of-orwellian-global-coalition-for-digital-safety/" target="_blank" rel="noopener">World Economic Forum announces creation of Orwellian ‘Global Coalition for Digital&nbsp;Safety’</a></strong></p>
                    <p><strong><a href="https://freewestmedia.com/2021/06/27/surgeon-who-operated-on-young-italian-vaccine-victim-you-have-never-seen-anything-like-this/" target="_blank" rel="noopener">Surgeon who operated on young Italian vaccine victim: ‘You have never seen anything like this’</a></strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.07.06.21259924v1" target="_blank" rel="noopener">Effectiveness of Ivermectin-Based Multidrug Therapy in Severe Hypoxic Ambulatory COVID-19 Patients</a></strong></p>
                    <p><strong><a href="https://www.bmj.com/content/373/bmj.n1372" target="_blank" rel="noopener">Covid-19: Pfizer-BioNTech vaccine is “likely” responsible for deaths of some elderly patients, Norwegian review finds</a></strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.06.28.21259673v1.full.pdf" target="_blank" rel="noopener">Infectivity and immune escape of the new SARS-CoV-2 variant of interest Lambda</a></strong></p>
                    <p><strong>The authors have a tractable line of evidence suggesting this mutation arose as a result of indiscriminate vaccination using the Sinovac whole inactivated virus vaccine.&nbsp; This may be the strongest evidence to date that vaccination is backfiring and driving evolutionary changes in SARS-CoV-2; this is a well-known phenomenon, the basis for the warning to not engage in wide-scale vaccination in the midst of an epidemic, because it drives resistant strains.</strong></p>
                    <p>
                        <strong>
                            <a href="https://www.sanspo.com/article/20210624-IOQJULJCVRMBXMZXIDJG6SDUHA/" target="_blank" rel="noopener">
                                Japanese doctors saying no to the vaccines
                            </a>
                        </strong>
                    </p>
                    <p>
                        <strong>
                            “Japan: Another international group of physicians call for a stop.
                        </strong>
                        <br />
                        <strong>
                            “390 domestic doctors and 60 local council members agreed to the petition, and the founder, Toku Takahashi, Professor Emeritus of the University of Wisconsin Medical School (Director of the Clinic Toku), met in the Diet on the afternoon of the same day.
                        </strong>
                        <br />
                        <strong>
                            “The mortality rate is very low, and it is doubtful that all the people need to be vaccinated with a gene vaccine whose safety is still unknown, even though 80% of infected people are mildly ill.” Other doctors who attended said that “the clinical trial has not been completed” and “at least 356 people have died after the vaccination”.
                        </strong>
                    </p>
                    <p><strong><a href="https://www.forbes.com/sites/graisondangor/2021/07/08/pfizer-and-biontech-claim-a-third-covid-19-booster-shot-is-effective/?sh=3944dfa840ca" target="_blank" rel="noopener">Pfizer Will Ask FDA To Authorize Third Covid-19 Shot As A Booster</a></strong></p>
                    <p><strong><a href="https://www.pandata.org/wp-content/uploads/2020/06/PANDA-Research-Report-Quantifying-Years-of-Lost-Life-PDF_.pdf" target="_blank" rel="noopener">Quantifying Years of Lost Life in South Africa Due to COVID-19 Monday, 11 May 2020 PANDA</a></strong></p>
                    <p><strong><a href="https://www.cnbc.com/2021/07/08/pfizer-says-it-is-developing-a-covid-booster-shot-to-target-the-highly-transmissible-delta-variant.html" target="_blank" rel="noopener">Pfizer says it is developing a Covid booster shot to target the highly transmissible delta variant</a></strong></p>
                    <p><strong><a href="https://collateralglobal.org/article/covid-19-qalys/" target="_blank" rel="noopener">COVID-19 QALYs</a></strong></p>
                    <p><strong><a href="https://collateralglobal.org/article/review-of-the-impact-of-first-wave-restrictions-on-cancer-care/" target="_blank" rel="noopener">Review of the Impact of COVID-19 First Wave Restrictions on Cancer Care</a></strong></p>
                    <p><strong><a href="https://www.ncbi.nlm.nih.gov/research/coronavirus/publication/34232520" target="_blank" rel="noopener">Remdesivir might induce changes in electrocardiogram beyond bradycardia in patients with Coronavirus disease 2019 (COVID-19) – the pilot study.</a></strong></p>
                    <p><strong><a href="https://www.ncbi.nlm.nih.gov/research/coronavirus/publication/33647441" target="_blank" rel="noopener">Serious bradycardia and remdesivir for coronavirus 2019 (COVID-19): a new safety concerns.</a></strong></p>
                    <p><strong><a href="https://www.ncbi.nlm.nih.gov/research/coronavirus/publication/33240723" target="_blank" rel="noopener">Cardiac Adverse Events With Remdesivir in COVID-19 Infection.</a></strong></p>
                    <p><strong><a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-67362032021-3/fulltext" target="_blank" rel="noopener">Remdesivir and COVID-19</a></strong></p>
                    <p><strong><a href="https://www.ncbi.nlm.nih.gov/research/coronavirus/publication/33340409" target="_blank" rel="noopener">Remdesivir and Acute Renal Failure: A Potential Safety Signal From Disproportionality Analysis of the WHO Safety Database.</a></strong></p>
                    <p><strong><a href="https://www.pandata.org/children-and-young-people-declaration/" target="_blank" rel="noopener">DECLARATION FOR THE PROTECTION OF CHILDREN AND YOUNG PEOPLE FROM THE COVID-19 RESPONSE</a></strong></p>
                    <p><strong><a href="https://www.pandata.org/responding-to-covid-19-public-health-or-public-harm/" target="_blank" rel="noopener">Responding to COVID-19: Public Health or Public</a></strong></p>
                    <p><strong>Reconciling estimates of global spread and infection fatality rates</strong></p>
                    <p><strong>of COVID- 19: An overview of systematic evaluations</strong></p>
                    <p><strong><a href="https://onlinelibrary.wiley.com/doi/epdf/10.1111/eci.13554" target="_blank" rel="noopener">Reconciling estimates of global spread and infection fatality rates</a></strong></p>
                    <p><strong><a href="https://www.nejm.org/doi/full/10.1056/NEJMe2002387" target="_blank" rel="noopener">Covid-19 — Navigating the Uncharted</a></strong></p>
                    <p><strong>Fauci: “This suggests that the overall clinical consequences of Covid-19 may ultimately be more akin to those of a severe seasonal influenza (which has a case fatality rate of approximately 0.1%) or a pandemic influenza (similar to those in 1957 and 1968) rather than a disease similar to SARS or MERS, which have had case fatality rates of 9 to 10% and 36%, respectively”.</strong></p>
                    <p><strong><a href="https://www.who.int/director-general/speeches/detail/who-director-general-s-opening-remarks-at-the-media-briefing-on-covid-19---3-march-2020" target="_blank" rel="noopener">WHO Director-General’s opening remarks at the media briefing on COVID-19 – 3 March 2020</a></strong></p>
                    <p><strong><a href="https://www.cebm.net/covid-19/covid-19-what-proportion-are-asymptomatic/" target="_blank" rel="noopener">COVID-19: What proportion are asymptomatic?</a></strong></p>
                    <p><strong><a href="https://www.bmj.com/content/370/bmj.m3563" target="_blank" rel="noopener">Covid-19: Do many people have pre-existing immunity?</a></strong></p>
                    <p><strong><a href="https://aapsonline.org/CovidPatientTreatmentGuide.pdf" target="_blank" rel="noopener">A Guide to Home-Based COVID Treatment</a></strong></p>
                    <p><strong><a href="https://ijirms.in/index.php/ijirms/article/view/1100" target="_blank" rel="noopener">Early Ambulatory Multidrug Therapy Reduces Hospitalization and Death in High-Risk Patients with SARS-CoV-2 (COVID-19)</a></strong></p>
                    <p><strong><a href="https://journals.lww.com/americantherapeutics/Fulltext/2021/08000/Ivermectin_for_Prevention_and_Treatment_of.7.aspx" target="_blank" rel="noopener">Ivermectin for Prevention and Treatment of COVID-19 Infection: A Systematic Review, Meta-analysis, and Trial Sequential Analysis to Inform Clinical Guidelines</a></strong></p>
                    <p><strong><a href="https://cairnsnews.org/2021/06/08/top-nz-lawyer-warns-pm-ardern-of-criminal-charges-if-covid-jabs-continue/" target="_blank" rel="noopener">Top NZ lawyer warns PM Ardern of criminal charges if Covid jabs&nbsp;continue</a></strong></p>
                    <p><strong><a href="https://www.cureus.com/articles/58777-a-case-of-autoimmune-hemolytic-anemia-following-covid-19-messenger-ribonucleic-acid-vaccination" target="_blank" rel="noopener">A Case of Autoimmune Hemolytic Anemia Following COVID-19 Messenger Ribonucleic Acid Vaccination</a></strong></p>
                    <p><strong><a href="https://faculty.utrgv.edu/eleftherios.gkioulekas/zelenko/index.html" target="_blank" rel="noopener">The Zelenko protocol</a></strong></p>
                    <p><strong><a href="https://www.bbc.com/future/article/20210705-how-children-are-spoofing-covid-19-tests-with-soft-drinks?ocid=ww.social.link.email" target="_blank" rel="noopener">Some children have found a devious method to get out of school – using cola to create false positive Covid tests. How does it work?</a></strong></p>
                    <p><strong><a href="https://www.wsj.com/articles/the-science-suggests-a-wuhan-lab-leak-11622995184" target="_blank" rel="noopener">The Science Suggests a Wuhan Lab Leak</a></strong></p>
                    <p><strong><a href="https://www.icandecide.org/" target="_blank" rel="noopener">Fauci’s emails</a></strong></p>
                    <p><strong><a href="https://thehighwire.com/videos/the-fauci-files/" target="_blank" rel="noopener">The Fauci files</a></strong></p>
                    <p><strong><a href="https://aapsonline.org/covid-19-are-there-ethical-issues-with-jabs-or-mandates/" target="_blank" rel="noopener">COVID-19: Are There Ethical Issues with Jabs or Mandates?</a></strong></p>
                    <p><strong><a href="https://www.nature.com/articles/s41429-021-00430-5" target="_blank" rel="noopener">The mechanisms of action of Ivermectin against SARS-CoV-2: An evidence-based clinical review article</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/07/09/niaid-moderna-covid-vaccine-candidate.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1HL&amp;cid=20210709&amp;mid=DM931317&amp;rid=1204163879" target="_blank" rel="noopener">NIAID, Moderna Had COVID Vaccine Candidate in December 2019</a></strong></p>
                    <p><strong><a href="https://www.sciencedirect.com/science/article/pii/S2352396421002036" target="_blank" rel="noopener">SARS-CoV-2 elicits robust adaptive immune responses regardless of disease severity</a> Bhakdi’s reference 1</strong></p>
                    <p><strong><a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0249499" target="_blank" rel="noopener">Human IgG and IgA responses to COVID-19 mRNA vaccines</a> Bhakdi’s reference 2</strong></p>
                    <p><strong><a href="https://academic.oup.com/cid/advance-article/doi/10.1093/cid/ciab465/6279075" target="_blank" rel="noopener">Circulating SARS-CoV-2 Vaccine Antigen Detected in the Plasma of mRNA-1273 Vaccine Recipients</a> Bhakdi’s reference 3</strong></p>
                    <p><strong><a href="https://www.cell.com/cell/fulltext/S0092-8674(21)00706-6?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS0092867421007066%3Fshowall%3Dtrue" target="_blank" rel="noopener">SARS-CoV-2 mRNA vaccination induces functionally diverse antibodies to NTD, RBD, and S2</a> Bhakdi’s reference 4</strong></p>
                    <p><strong><a href="https://www.wsj.com/articles/in-children-risk-of-covid-19-death-or-serious-illness-remain-extremely-low-new-studies-find-11625785260" target="_blank" rel="noopener">In Children, Risk of Covid-19 Death or Serious Illness Remains Extremely Low, New Studies Find</a></strong></p>
                    <p><strong><a href="https://trialsitenews.com/covid-vaccine-approval-by-fda-battle-is-on/" target="_blank" rel="noopener">COVID Vaccine Approval by FDA: Battle is On</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/opinion/full-testimony-of-former-hhs-covid-adviser-asymptomatic-transmission-more-myth-than-reality" target="_blank" rel="noopener">Full testimony of former HHS Covid Adviser: ‘Asymptomatic transmission more myth than reality’</a></strong></p>
                    <p><strong><a href="https://thenationalpulse.com/exclusive/daszak-fauci-email-reveal-coronavirus-research-with-wuhan/" target="_blank" rel="noopener">Stunning Daszak/Fauci Emails Reveal Non-Zoonotic Coronavirus And Attempts To Infect Human Cells.</a></strong></p>
                    <p><strong><a href="https://thenationalpulse.com/breaking/baric-partner-serves-on-lancet-vaccine-committee/" target="_blank" rel="noopener">Gain-Of-Function Advocate’s Partner Serves On Lancet’s COVID-19 Committee.</a></strong></p>
                    <p><strong><a href="https://thenationalpulse.com/exclusive/hunter-biden-invested-in-ecohealth-wuhan-partner/" target="_blank" rel="noopener">Hunter Biden Invested In A Pandemic Firm Collaborating With Daszak’s EcoHealth And The Wuhan Lab</a></strong></p>
                    <p><strong><a href="https://www.westernjournal.com/right-worried-forced-vaccination-feds-forcibly-sterilized-women-past/" target="_blank" rel="noopener">You’re Right to Be Worried About Forced Vaccination – The Feds Forcibly Sterilized Women in the Past</a></strong></p>
                    <p><strong><a href="https://www.cnbc.com/2020/06/08/asymptomatic-coronavirus-patients-arent-spreading-new-infections-who-says.html" target="_blank" rel="noopener">Asymptomatic spread of coronavirus is ‘very rare,’ WHO says</a></strong></p>
                    <p><strong><a href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2774102" target="_blank" rel="noopener">Household Transmission of SARS-CoV-2</a></strong></p>
                    <p><strong><a href="https://www.pandata.org/are-asymptomatics-sick-until-proven-healthy/" target="_blank" rel="noopener">Are Asymptomatics Sick Until Proven Healthy?</a></strong></p>
                    <p><strong><a href="https://www.irishtimes.com/news/ireland/irish-news/outdoor-transmission-accounts-for-0-1-of-state-s-covid-19-cases-1.4529036" target="_blank" rel="noopener">Outdoor transmission accounts for 0.1% of State’s Covid-19 cases</a></strong></p>
                    <p><strong><a href="https://jonathanturley.org/2021/05/11/cdc-admits-that-it-miscalculated-the-risk-of-outdoor-covid-transmission/" target="_blank" rel="noopener">Walensky:</a> <a href="https://jonathanturley.org/2021/05/11/cdc-admits-that-it-miscalculated-the-risk-of-outdoor-covid-transmission/" target="_blank" rel="noopener">CDC Admits That It Miscalculated The Risk Of Outdoor Covid Transmission</a></strong></p>
                    <p><strong>CDC: <a href="https://wwwnc.cdc.gov/eid/article/26/5/19-0994_article" target="_blank" rel="noopener">Nonpharmaceutical Measures for Pandemic Influenza in Nonhealthcare Settings—Personal Protective and Environmental Measures</a></strong></p>
                    <p><strong><a href="https://apps.who.int/iris/bitstream/handle/10665/332293/WHO-2019-nCov-IPC_Masks-2020.4-eng.pdf?sequence=1&amp;isAllowed=y" target="_blank" rel="noopener">Who: Advice on the use of masks in the context of COVID-19</a></strong></p>
                    <p><strong><a href="https://newscolony.com/fauci-covid-19-is-small-enough-to-pass-through-the-material-of-face-masks-email/" target="_blank" rel="noopener">Fauci to Sylvia Burwell on masks</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/07/10/the-deadly-censorship-of-ivermectin.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1HL&amp;cid=20210710_HL2&amp;mid=DM932162&amp;rid=1205088823" target="_blank" rel="noopener">The Deadly Censorship of Ivermectin</a></strong></p>
                    <p><strong><a href="https://www.nature.com/articles/s41421-020-00229-y" target="_blank" rel="noopener">Infection of human sweat glands by SARS-CoV-2</a></strong></p>
                    <p><strong><a href="https://c19hcq.com/" target="_blank" rel="noopener">HCQ for COVID-19 studies most updated listing</a></strong></p>
                    <p><strong><a href="https://www.fda.gov/safety/medical-product-safety-information/hydroxychloroquine-or-chloroquine-covid-19-drug-safety-communication-fda-cautions-against-use" target="_blank" rel="noopener">Hydroxychloroquine or Chloroquine for COVID-19: Drug Safety Communication – FDA Cautions Against Use Outside of the Hospital Setting or a Clinical Trial Due to Risk of Heart Rhythm Problems</a></strong></p>
                    <p><strong><a href="https://www.westernjournal.com/healthy-boy-13-dies-sleep-receiving-second-covid-vaccine-dose/" target="_blank" rel="noopener">Healthy Boy, 13, Dies in His Sleep After Receiving Second COVID Vaccine Dose</a></strong></p>
                    <p><strong><a href="https://breggin.com/did-president-trump-promote-a-killer-drug-by-taking-hydroxychloroquine/" target="_blank" rel="noopener">Did President Trump Promote a Killer Drug by Taking Hydroxychloroquine?</a></strong></p>
                    <p><strong><a href="https://patientprivacyrights.org/" target="_blank" rel="noopener">Patient privacy rights</a></strong></p>
                    <p><strong><a href="https://reclaimthenet.org/front-line-covid-19-critical-care-alliance-is-banned-from-linkedin/" target="_blank" rel="noopener">&nbsp;Front Line COVID-19 Critical Care Alliance is banned from LinkedIn</a></strong></p>
                    <p><strong><a href="https://www.nature.com/articles/s41586-021-03777-9" target="_blank" rel="noopener">Reduced sensitivity of SARS-CoV-2 variant Delta to antibody neutralization</a></strong></p>
                    <p><strong><a href="https://www.jennifermargulis.net/covid-recovered-dont-need-vaccine/" target="_blank" rel="noopener">COVID-Recovered Don’t Need the Vaccine, Says Dr. Peter McCullough</a></strong></p>
                    <p><strong><a href="https://mercola.fileburst.com/PDF/ExpertInterviewTranscripts/DrMercola-JudyMikovits-StephanieSeneff-COVIDvaccine.pdf" target="_blank" rel="noopener">Possible Adverse Biological Reactions From COVID-19 Vaccinations</a></strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/cdc-vaers-deaths-reported-covid-vaccines/?utm_source=salsa&amp;eType=EmailBlastContent&amp;eId=e2b0b7be-4500-498c-aa50-497ff0249cf0" target="_blank" rel="noopener">Number of Deaths Reported After COVID Vaccines Jumps by More Than 2,000 in 1 Week, According to VAERS</a></strong></p>
                    <p><strong><a href="https://welovetrump.com/2021/07/09/americas-frontline-doctors-plan-to-file-lawsuit-for-patients-denied-hydroxychloroquine-or-ivermectin/" target="_blank" rel="noopener">America’s Frontline Doctors Plan to File Lawsuit for Patients Denied Hydroxychloroquine or Ivermectin</a></strong></p>
                    <p><strong><a href="https://www.cbc.ca/amp/1.6092636" target="_blank" rel="noopener">Ontario’s top doctor calls for vaccine push among young people ahead of school return</a></strong></p>
                    <p><strong><a href="https://weareallessential.ca/wp-content/uploads/2021/06/Expert_Report_of_Harvey_Risch_Respondents_Applicants_Adamson_Barbecue.pdf" target="_blank" rel="noopener">Risch: Hydroxychloroquine in Early Treatment of High-Risk COVID-19 Outpatients: Efficacy and Safety Evidence</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/majority-of-physicians-decline-covid-19-shots-according-to-a-new-survey" target="_blank" rel="noopener">Majority of physicians decline COVID-19 shots, according to a new survey</a></strong></p>
                    <p><strong>https://covexit.com/sars-cov-2-vaccination-%e2%80%a8early-ambulatory-treatment-co</strong><br /><strong><a href="https://www.gofundme.com/f/stop-university-vaccine-mandates-in-virginia?viewupdates=1&amp;rcid=r01-162570870193-6374dc7e6ebf441d&amp;utm_medium=email&amp;utm_source=customer&amp;utm_campaign=p_email%2B1137-update-supporters-v5b" target="_blank" rel="noopener">Stop University Vaccine Mandates in Virginiamplete</a>-program</strong></p>
                    <p><strong><a href="https://www.biorxiv.org/content/10.1101/2020.12.21.423721v1" target="_blank" rel="noopener">The SARS-CoV-2 spike protein disrupts the cooperative function of human cardiac pericytes – endothelial cells through CD147 receptor-mediated signalling: a potential non-infective mechanism of COVID-19 microvascular disease</a></strong></p>
                    <p><strong><a href="https://theeconomicstandard.com/cdc-data-collection/" target="_blank" rel="noopener">CDC Should Collect More Data, Not Less</a></strong></p>
                    <p><strong><a href="https://www.businessinsider.com/covid-expert-vaccinated-people-can-spread-the-delta-variant-2021-7" target="_blank" rel="noopener">A leading US disease expert says there’s ‘no doubt in my mind’ that vaccinated people are helping spread Delta</a></strong></p>
                    <p><strong><a href="https://www.guampdn.com/story/news/factcheck/2021/01/07/fact-check-dc-law-allows-minors-to-consent-vaccines/6550518002/" target="_blank" rel="noopener">The DC Council passed a law to allow minors over age 11 to consent to vaccines</a></strong></p>
                    <p><strong><a href="https://www.telegraph.co.uk/politics/2021/07/05/boris-johnson-announcement-lockdown-easing-restrictions-july/" target="_blank" rel="noopener">Boris Johnson says its now or never</a></strong></p>
                    <p><strong><a href="https://blogs.mediapart.fr/laurent-mucchielli/blog/080721/covid-19-vaccins-experimentaux-strategie-vaccinale-entretien-avec-christian-velot" target="_blank" rel="noopener">Covid-19, experimental vaccines, vaccine strategy: interview with Christian Vélot</a></strong></p>
                    <p><strong><a href="https://www.wnd.com/2021/07/dying-post-vaccine-autopsies/?fbclid=IwAR124Us-svSN3LqnAOyMmmzoDAUPgxr8cHMWTne2EYhldsCMTwFxhNBsdq0" target="_blank" rel="noopener">Those dying post-vaccine: Where are the autopsies?</a></strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.07.06.21259924v1" target="_blank" rel="noopener">Effectiveness of Ivermectin-Based Multidrug Therapy in Severe Hypoxic Ambulatory COVID-19 Patients</a></strong></p>
                    <p><strong><a href="https://nymag.com/intelligencer/2021/03/the-problem-with-the-cdcs-six-foot-rule-for-schools.html" target="_blank" rel="noopener">The Problem With the CDC’s Six-Foot Rule for Schools</a></strong></p>
                    <p><strong><a href="https://www.medpagetoday.com/special-reports/exclusives/93485?xid=nl_mpt_DHE_2021-07-09&amp;eun=g875816d0r&amp;utm_source=Sailthru&amp;utm_medium=email&amp;utm_campaign=Daily%20Headlines%20Top%20Cat%20HeC%20%202021-07-09&amp;utm_term=NL_Daily_DHE_dual-gmail-definition" target="_blank" rel="noopener">Awaited Ivermectin Review Is Out</a></strong></p>
                    <p><strong><a href="https://www.medpagetoday.com/special-reports/exclusives/93485?xid=nl_mpt_DHE_2021-07-09&amp;eun=g875816d0r&amp;utm_source=Sailthru&amp;utm_medium=email&amp;utm_campaign=Daily%20Headlines%20Top%20Cat%20HeC%20%202021-07-09&amp;utm_term=NL_Daily_DHE_dual-gmail-definition" target="_blank" rel="noopener">— Findings are positive, but critics still want a randomized controlled trial</a></strong></p>
                    <p><strong><a href="https://jdfor2024.com/2021/07/india-criminal-complaint-filed-against-gavi-bill-gates-fauci/" target="_blank" rel="noopener">India: Criminal complaint filed against GAVI, Bill Gates, Fauci… Death penalty may apply</a></strong></p>
                    <p><strong><a href="https://www.youtube.com/watch?v=GfPkjHhOAuc" target="_blank" rel="noopener">‘Get over it’: Critics blast Fauci for message to unvaccinated people | Brian Kilmeade Show</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/07/12/moderna-vaccine-experiment.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1HL&amp;cid=20210712&amp;mid=DM933888&amp;rid=1206821167" target="_blank" rel="noopener">Moderna Rep Admits Everyone Is Part of Huge Experiment</a></strong></p>
                    <p><strong><a href="https://p.widencdn.net/kvdwlh/COVID-19_Nutraceutical-and-Botanical-Recommendations-for-Patients_v4" target="_blank" rel="noopener">COVID-19: Nutraceutical and Botanical Recommendations for Patients</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/07/09/niaid-moderna-covid-vaccine-candidate.aspx" target="_blank" rel="noopener">NIAID, Moderna Had COVID Vaccine Candidate in December 2019</a></strong></p>
                    <p><strong>Moderna, together with the National Institute of Allergy and Infectious Diseases (NIAID), sent mRNA coronavirus vaccine candidates to the University of North Carolina at Chapel Hill on December 12, 2019 — raising significant red flags</strong></p>
                    <p><strong>The providers agreed to transfer “mRNA coronavirus vaccine candidates developed and jointly-owned by NIAID and Moderna” to the university’s investigator and was signed by Ralph Baric</strong></p>
                    <p><strong><a href="http://www.enterstageright.com/archive/articles/0621/pandemicblunder.html" target="_blank" rel="noopener">Pandemic Blunder</a></strong></p>
                    <p><strong><a href="https://pubmed.ncbi.nlm.nih.gov/32120383/" target="_blank" rel="noopener">The Effect of Influenza Vaccination for the Elderly on Hospitalization and Mortality: An Observational Study With a Regression Discontinuity Design</a></strong></p>
                    <p><strong>Current vaccination strategies prioritizing elderly persons may be less effective than believed at reducing serious morbidity and mortality in this population, which suggests that supplementary strategies may be necessary.</strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.06.28.21258780v1.full#T1" target="_blank" rel="noopener">Transmission event of SARS-CoV-2 Delta variant reveals multiple vaccine breakthrough infections</a></strong></p>
                    <p><strong><a href="https://www-politico-com.cdn.ampproject.org/c/s/www.politico.com/amp/news/2021/07/11/fauci-vaccines-covid-approval-fda-499158" target="_blank" rel="noopener">Vaccines will get full FDA approval, Fauci predicts</a></strong></p>
                    <p><strong><a href="https://www.hartgroup.org/ivermectin-works/?fbclid=IwAR3gt6jtkYg7Bo7v3Q9_3vQQqUyze53GOXpoq8lFnZrj43xYwWuDVrGQ9R0" target="_blank" rel="noopener">New research suggests ivermectin works</a></strong></p>
                    <p><strong><a href="https://humansarefree.com/2021/07/nuremberg-code-crimes-gates-fauci.html" target="_blank" rel="noopener">Nuremberg Code Exposes The Crimes Of Gates And Fauci</a></strong></p>
                    <p><strong><a href="https://www.theburningplatform.com/2021/07/09/a-conspiracy-to-murder-the-government-and-the-big-pharma-dependent-medical-profession-are-hiding-the-facts-about-covid-and-the-vaccine/" target="_blank" rel="noopener">A Conspiracy to Murder – The Government and the Big Pharma-Dependent Medical Profession Are Hiding the Facts About Covid and the Vaccine</a></strong></p>
                    <p><strong><a href="https://www.lewrockwell.com/2021/07/no_author/a-critique-of-mrna-vaccines/" target="_blank" rel="noopener">Cole:</a> <a href="https://www.lewrockwell.com/2021/07/no_author/a-critique-of-mrna-vaccines/" target="_blank" rel="noopener">A Critique of mRNA Vaccines</a></strong></p>
                    <p><strong><a href="https://www.kltv.com/2021/07/08/covid-19-blamed-worst-blood-shortage-decades/" target="_blank" rel="noopener">COVID-19 blamed for worst blood shortage in decades</a></strong></p>
                    <p><strong><a href="https://justthenews.com/politics-policy/coronavirus/wuhan-lab-safety-documents-virus-show" target="_blank" rel="noopener">Emails raise new questions about Wuhan coronavirus lab’s safety protocols prior to pandemic</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/11-critical-questions-now-that-the-lab-leak-theory-is-politically-correct_3838584.html" target="_blank" rel="noopener">11 Critical Questions Now That the Lab Leak Theory Is ‘Politically Correct’</a></strong></p>
                    <p><strong><a href="https://www.ctvnews.ca/health/coronavirus/canada-launches-its-first-national-vaccine-injury-compensation-program-1.5451579" target="_blank" rel="noopener">Canada launches its first national vaccine injury compensation program</a></strong></p>
                    <p><strong><a href="https://www.macaubusiness.com/indonesia-to-give-medics-booster-jab-after-deaths/" target="_blank" rel="noopener">Indonesia to give medics booster jab after deaths</a></strong></p>
                    <p><strong><a href="https://www.acpjournals.org/doi/10.7326/M21-2366" target="_blank" rel="noopener">The Case for Mandating COVID-19 Vaccines for Health Care Workers</a></strong></p>
                    <p><strong><a href="https://www.theglobeandmail.com/opinion/editorials/article-canada-needs-to-vaccinate-90-per-cent-of-adults-and-teens-at-this-rate/" target="_blank" rel="noopener">Canada needs to vaccinate 90 per cent of adults and teens. At this rate, we’ll never get there</a></strong></p>
                    <p><strong><a href="https://jamanetwork.com/journals/jama-health-forum/fullarticle/2763666" target="_blank" rel="noopener">Nursing Homes Are Ground Zero for COVID-19 Pandemic</a></strong></p>
                    <p><strong><a href="https://www.wsj.com/articles/fda-plans-to-warn-j-j-covid-19-vaccine-raises-risk-of-rare-neurological-condition-11626117261" target="_blank" rel="noopener">FDA Warns J&amp;J Covid-19 Vaccine Raises Risk of Guillain-Barré Syndrome Complication</a></strong></p>
                    <p><strong><a href="https://www.wsj.com/articles/fda-plans-to-warn-j-j-covid-19-vaccine-raises-risk-of-rare-neurological-condition-11626117261" target="_blank" rel="noopener">The rare neurological condition is a disorder in which the immune system attacks nerves</a></strong></p>
                    <p><strong><a href="https://www.the-scientist.com/news-opinion/spike-protein-deletions-linked-to-covid-19-surges-preprint-68892?" target="_blank" rel="noopener">Spike Protein Deletions Linked to COVID-19 Surges: Preprint</a></strong></p>
                    <p><strong><a href="https://thediplomat.com/2021/07/malaysias-total-lockdown-failure-plunges-hospitals-into-crisis/" target="_blank" rel="noopener">Malaysia’s ‘Total Lockdown’ Failure Plunges Hospitals Into Crisis</a></strong></p>
                    <p><strong><a href="https://www.zerohedge.com/political/mainstream-media-wrong-vaccine-hesitancy-not-highest-among-republican-men-and-trump-isnt?utm_campaign=&amp;utm_content=Zerohedge%3A+The+Durden+Dispatch&amp;utm_medium=email&amp;utm_source=zh_newsletter" target="_blank" rel="noopener">Mainstream Media Is Wrong: Vaccine Hesitancy Is Not Highest Among Republican Men And Trump Isn’t To Blame</a></strong></p>
                    <p><strong><a href="https://roundingtheearth.substack.com/p/probable-misclassification-of-vaccine" target="_blank" rel="noopener">Probable Misclassification of Vaccine Deaths as COVID-19 Deaths</a></strong></p>
                    <p><strong>A vast amount of COVID ‘deaths’ may be deaths due to the vaccine</strong></p>
                    <p><strong><a href="https://roundingtheearth.substack.com/p/are-uks-vaccinated-dying-more-from" target="_blank" rel="noopener">Are UK’s Vaccinated Dying More from the Delta Variant?</a></strong></p>
                    <p><strong><a href="https://roundingtheearth.substack.com/p/what-risk-benefit-analysis" target="_blank" rel="noopener">What Risk-Benefit Analysis?!</a></strong></p>
                    <p><strong><a href="https://blogs.bmj.com/bmj/2021/07/13/covid-19-vaccines-for-children-hypothetical-benefits-to-adults-do-not-outweigh-risks-to-children/" target="_blank" rel="noopener">Covid-19 vaccines for children: hypothetical benefits to adults do not outweigh risks to children</a></strong></p>
                    <p><strong><a href="https://www.thelancet.com/journals/lanepe/article/PIIS2666-7762(21)00069-7/fulltext" target="_blank" rel="noopener">A cross-sectional and prospective cohort study of the role of schools in the SARS-CoV-2 second wave in Italy</a></strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.05.16.21257255v2" target="_blank" rel="noopener">Long-term symptoms after SARS-CoV-2 infection in school children: population-based cohort with 6-months follow-up</a></strong></p>
                    <p><strong><a href="https://onlinelibrary.wiley.com/doi/full/10.1111/apa.15432" target="_blank" rel="noopener">Paediatric COVID-19 admissions in a region with open schools during the two first months of the pandemic</a></strong></p>
                    <p><strong><a href="https://hosppeds.aappublications.org/content/early/2021/05/18/hpeds.2021-005919" target="_blank" rel="noopener">Characteristics of Hospitalized Children Positive for SARS-CoV-2: Experience of a Large Center</a></strong></p>
                    <p><strong><a href="https://science.sciencemag.org/content/371/6529/eabf4063" target="_blank" rel="noopener">Immunological memory to SARS-CoV-2 assessed for up to 8 months after infection</a></strong></p>
                    <p><strong><a href="https://www.bmj.com/content/373/bmj.n1605" target="_blank" rel="noopener">How long does covid-19 immunity last?</a></strong></p>
                    <p><strong><a href="https://www.nature.com/articles/s41586-021-03647-4" target="_blank" rel="noopener">SARS-CoV-2 infection induces long-lived bone marrow plasma cells in humans</a></strong></p>
                    <p><strong><a href="https://www.biorxiv.org/content/10.1101/2020.12.08.416636v1" target="_blank" rel="noopener">Persistent Cellular Immunity to SARS-CoV-2 Infection</a></strong></p>
                    <p><strong><a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)00675-9/fulltext" target="_blank" rel="noopener">SARS-CoV-2 infection rates of antibody positive compared with antibody-negative health-care workers in England</a></strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.06.01.21258176v2" target="_blank" rel="noopener">Necessity of COVID-19 vaccination in previously infected individuals</a></strong></p>
                    <p><strong>Individuals who have had SARS-CoV-2 infection are unlikely to benefit from COVID-19 vaccination, and vaccines can be safely prioritized to those who have not been infected before.</strong></p>
                    <p><strong><a href="https://americaoutloud.com/dont-fool-with-the-diversity-of-mother-nature/" target="_blank" rel="noopener">Don’t Fool with the Diversity of Mother Nature</a></strong></p>
                    <p><strong><a href="https://freedomfirstnetwork.com/2021/07/astonishing-spike-in-post-vaccine-deaths-gets-no-media-coverage-as-over-2000-reported-this-week-alone" target="_blank" rel="noopener">Astonishing Spike in Post-Vaccine Deaths Gets No Media Coverage as Over 2,000 Reported THIS WEEK Alone</a></strong></p>
                    <p><strong><a href="https://www.cnbc.com/2021/06/25/delta-who-urges-fully-vaccinated-people-to-continue-to-wear-masks-as-variant-spreads.html" target="_blank" rel="noopener">WHO urges fully vaccinated people to continue to wear masks as delta Covid variant spreads</a></strong></p>
                    <p><strong><a href="https://www.cnbctv18.com/healthcare/covid-19-cases-on-the-rise-in-countries-using-chinese-vaccines-9756361.htm" target="_blank" rel="noopener">COVID-19 cases rise in countries using Chinese vaccines: Report</a></strong></p>
                    <p><strong><a href="https://www.bostonglobe.com/2021/07/10/opinion/school-vaccination-requirements-may-lead-other-health-disparities/" target="_blank" rel="noopener">School vaccination requirements may lead to other health disparities</a></strong></p>
                    <p><strong><a href="https://www.bostonglobe.com/2021/07/10/opinion/school-vaccination-requirements-may-lead-other-health-disparities/" target="_blank" rel="noopener">Education improves health and is associated with lower mortality.</a></strong></p>
                    <p><strong><a href="https://pubmed.ncbi.nlm.nih.gov/34197283/" target="_blank" rel="noopener">Underlying Medical Conditions and Severe Illness Among 540,667 Adults Hospitalized With COVID-19, March 2020-March 2021</a></strong></p>
                    <p><strong><a href="https://www.sciencedirect.com/science/article/pii/S2052297521000792" target="_blank" rel="noopener">Early COVID-19 Therapy with azithromycin plus nitazoxanide, ivermectin or hydroxychloroquine in Outpatient Settings Significantly Improved COVID-19 outcomes compared to Known outcomes in untreated patients</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/07/04/covid-vaccine-risks.aspx" target="_blank" rel="noopener">Might COVID Injections Reduce Lifespan?</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/07/11/early-treatment-for-covid.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1HL&amp;cid=20210711&amp;mid=DM932960&amp;rid=1205905678" target="_blank" rel="noopener">What You Need to Know About Early At-Home COVID Treatment</a></strong></p>
                    <p><strong><a href="https://www.medscape.com/viewarticle/954724?src=mkm_covid_update_210713_MSCPEDIT&amp;uac=265557FN&amp;impID=3503429&amp;faf=1" target="_blank" rel="noopener">Medical Coalition Endorses Vaccine Mandates for Healthcare Workers</a></strong></p>
                    <p><strong><a href="https://www.thelancet.com/journals/lanwpc/article/PIIS2666-6065(20)30044-4/fulltext" target="_blank" rel="noopener">Potential lessons from the Taiwan and New Zealand health responses to the COVID-19 pandemic</a></strong></p>
                    <p><strong><a href="https://web.archive.org/web/20161106205851/https:/www.scientificamerican.com/article/how-the-fda-manipulates-the-media/" target="_blank" rel="noopener">How the FDA Manipulates the Media</a></strong></p>
                    <p><strong><a href="https://www.statnews.com/2021/07/12/who-director-general-slams-notion-of-covid-19-vaccine-booster-doses-given-global-health-needs/" target="_blank" rel="noopener">WHO director-general slams notion of Covid-19 vaccine booster doses given global health needs</a></strong></p>
                    <p><strong><a href="https://www.shropshirestar.com/news/uk-news/2021/07/13/mps-back-compulsory-care-worker-covid-vaccinations-without-seeing-key-document/" target="_blank" rel="noopener">MPs back compulsory care worker Covid vaccinations without seeing key document</a></strong></p>
                    <p><strong><a href="https://www.politico.com/news/2021/07/12/biden-covid-vaccination-campaign-499278" target="_blank" rel="noopener">‘Potentially a death sentence’: White House goes off on vaccine fearmongers</a></strong></p>
                    <p><strong><a href="https://www.nytimes.com/2012/07/15/us/fda-surveillance-of-scientists-spread-to-outside-critics.html" target="_blank" rel="noopener">Vast F.D.A. Effort Tracked E-Mails of its scientists</a></strong></p>
                    <p><strong><a href="https://trialsitenews.com/covid-vaccine-approval-by-fda-battle-is-on/#comments" target="_blank" rel="noopener">COVID Vaccine Approval by FDA: Battle is On</a></strong></p>
                    <p><strong><a href="https://americasfrontlinedoctors.org/frontlinenews/urgent-british-report-calls-for-complete-cessation-of-covid-vaccines-in-humans/" target="_blank" rel="noopener">‘Urgent’ British report calls for complete cessation of COVID vaccines in humans</a></strong></p>
                    <p><strong><a href="https://www.nature.com/articles/s41586-021-03792-w" target="_blank" rel="noopener">After the pandemic: perspectives on the future trajectory of COVID-19</a></strong></p>
                    <p><strong><a href="https://science.sciencemag.org/content/early/2021/06/30/science.abi7994/tab-pdf" target="_blank" rel="noopener">SARS-CoV-2 immune evasion by the B.1.427/B.1.429 variant of concern</a></strong></p>
                    <p><strong><a href="https://pubmed.ncbi.nlm.nih.gov/34237773/" target="_blank" rel="noopener">Reduced sensitivity of SARS-CoV-2 variant Delta to antibody neutralization</a></strong></p>
                    <p><strong>laboratory paper showing antibodies from Pfizer narrow spectrum immunity “barely” neutralized SARS-CoV-2 in vitro.&nbsp; Explains the numerous clinical cases including 42% of all Delta cases in the UK arising among those who volunteered for the ill-advised vax.</strong></p>
                    <p><strong><a href="https://www.crowdjustice.com/case/take-back-control/" target="_blank" rel="noopener">Take Back Control</a></strong></p>
                    <p><strong><a href="https://www.aa.com.tr/en/europe/germanys-ethics-council-opposes-mandatory-covid-19-vaccination/2303171" target="_blank" rel="noopener">Germany’s Ethics Council opposes mandatory COVID-19 vaccination</a></strong></p>
                    <p><strong><a href="https://www.nakedcapitalism.com/2021/07/does-the-fate-of-ivermectin-as-a-covid-19-treatment-rest-in-the-hands-of-the-deeply-conflicted-bill-melinda-gates-foundation.html" target="_blank" rel="noopener">Naked capitalism:</a> <a href="https://www.nakedcapitalism.com/2021/07/does-the-fate-of-ivermectin-as-a-covid-19-treatment-rest-in-the-hands-of-the-deeply-conflicted-bill-melinda-gates-foundation.html" target="_blank" rel="noopener">Does the Fate of Ivermectin As a Covid-19 Treatment Rest in the Hands of the Deeply Conflicted Bill &amp; Melinda Gates Foundation?</a></strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/white-house-sms-carriers-monitor-vaccine-misinformation-private-text-messages/" target="_blank" rel="noopener">White House to Ask SMS Carriers to Monitor Vaccine ‘Misinformation’ in Private Text Messages</a></strong></p>
                    <p><strong><a href="https://www.bbc.com/news/health-57766717?fbclid=IwAR0LLBA59jNVuRmyPPhfW2ugWlWeMG3CsNYLcfN9XnsfRgs69L7gvureKuc" target="_blank" rel="noopener">Covid: Children’s extremely low risk confirmed by study</a></strong></p>
                    <p><strong><a href="https://www.wnd.com/2021/07/4930349/?utm_source=Email&amp;utm_medium=wnd-breaking&amp;utm_campaign=breaking&amp;utm_content=breaking&amp;ats_es=%5B-MD5-%5D" target="_blank" rel="noopener">Report: More vaccine deaths last week than COVID-19 deaths</a></strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/medrxiv/early/2021/07/05/2021.07.01.21259833.full.pdf" target="_blank" rel="noopener">COVID-19 vaccines dampen genomic diversity of SARS-CoV-2: Unvaccinated patients exhibit more antigenic mutational variance</a></strong></p>
                    <p><strong><a href="https://dryburgh.com/rhonda-patrick-vs-byram-bridle-coronavirus-vaccination/" target="_blank" rel="noopener">Rhonda Patrick vs Byram Bridle — Coronavirus Vaccination</a></strong></p>
                    <p><strong><a href="https://www.tandfonline.com/doi/pdf/10.1080/22221751.2021.1953403?needAccess=true&amp;" target="_blank" rel="noopener">Antibody titers decline 3-month post-vaccination with BNT162b2</a></strong></p>
                    <p><strong><a href="https://www.bbc.com/news/uk-57830617" target="_blank" rel="noopener">HMS Queen Elizabeth: Covid outbreak on Navy flagship</a></strong></p>
                    <p><strong>Covid outbreak on 100% vaccinated British Navy flagship</strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_morningbrief/nurse-blows-the-whistle-on-the-medical-industry-theyre-not-offering-informed-consent_3894572.html?utm_source=morningbriefnoe&amp;utm_medium=email2&amp;utm_campaign=mb-2021-07-15&amp;mktids=3f54d37550cc4000b6fb9f6d1d3481cd&amp;est=6YyEz%2F9dD4VN%2BeHP%2FCBtauEXJD4Y79oeQ1JuudOYc0bLLPxHW3%2BopwQZSeR2ejUs" target="_blank" rel="noopener">Nurse Blows the Whistle on the Medical Industry: ‘They’re Not Offering Informed Consent’</a></strong></p>
                    <p><strong><a href="https://messaging-custom-newsletters.nytimes.com/template/oakv2?campaign_id=9&amp;emc=edit_nn_20210715&amp;instance_id=35387&amp;nl=the-morning&amp;productCode=NN&amp;regi_id=168705621&amp;segment_id=63517&amp;te=1&amp;uri=nyt%3A%2F%2Fnewsletter%2Fe274d356-51cb-541c-b965-0dab597ec766&amp;user_id=fe73eeeeff29950d7418beedbc2fc2a7" target="_blank" rel="noopener">Good morning. The Delta variant is more contagious. It does not appear to be more severe.</a></strong></p>
                    <p><strong><a href="https://www.jennifermargulis.net/why-are-unvaccinated-children-healthier-than-vaccinated-children/" target="_blank" rel="noopener">Why Are Unvaccinated Children Healthier Than Vaccinated Children?</a></strong></p>
                    <p><strong><a href="https://www.nature.com/articles/s41587-020-0577-1" target="_blank" rel="noopener">Implications of antibody-dependent enhancement of infection for SARS-CoV-2 countermeasures</a></strong></p>
                    <p><strong><a href="https://www.jennifermargulis.net/dont-wash-your-hands-before-dinner-a-review-of-the-dirt-cure-by-maya-shetreat-klein/" target="_blank" rel="noopener">Don’t Wash Your Hands Before Dinner? A Review of The Dirt Cure by Maya Shetreat-Klein</a></strong></p>
                    <p><strong><a href="https://pubmed.ncbi.nlm.nih.gov/33176598/" target="_blank" rel="noopener">PubMed</a>: <a href="https://pubmed.ncbi.nlm.nih.gov/33176598/" target="_blank" rel="noopener">Unexpected detection of SARS-CoV-2 antibodies in the prepandemic period in Italy – PubMed</a></strong></p>
                    <p><strong><a href="https://www.cmadocs.org/newsroom/news/view/ArticleId/49404/CalVaxGrant-providing-physician-practices-up-to-55-000-for-COVID-19-vaccine-administration" target="_blank" rel="noopener">$55,000 grants for vaccine administration</a></strong></p>
                    <p><strong><a href="https://www.zerohedge.com/covid-19/natural-infection-may-offer-better-protection-against-delta-variant-israeli-health" target="_blank" rel="noopener">Natural Infection May Offer Better Protection Against Delta Variant, Israeli Health Ministry Says</a></strong></p>
                    <p><strong><a href="https://www.theblaze.com/op-ed/horowitz-trump-appointed-judge-implies-no-right-to-bodily-autonomy-in-indiana-vaccine-lawsuit" target="_blank" rel="noopener">Horowitz: Trump-appointed judge implies no right to bodily autonomy in Indiana lawsuit</a></strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/moderna-covid-vaccine-clinical-trials-pregnant-women/" target="_blank" rel="noopener">Experts Warn of ‘Huge Risk’ as Moderna Launches COVID Vaccine Trials for Pregnant Women</a></strong></p>
                    <p><strong><a href="https://www.globalresearch.ca/letter-physicians-four-new-scientific-discoveries-regarding-safety-efficacy-covid-19-vaccines/5749946" target="_blank" rel="noopener">Letter to Physicians: Four New Scientific Discoveries Regarding the Safety and Efficacy of COVID-19 Vaccines</a></strong></p>
                    <p><strong><a href="https://vaccineimpact.com/2021/cdc-adds-over-2000-deaths-associated-with-covid-19-shots-in-one-week-917-unborn-baby-deaths/" target="_blank" rel="noopener">CDC Adds Over 2000 Deaths Associated with COVID-19 Shots in One Week – 917 Unborn Baby Deaths</a></strong></p>
                    <p><strong><a href="https://eurekalert.org/pub_releases/2021-05/fccc-lpr050621.php" target="_blank" rel="noopener">Latest peer-reviewed research: Immediate global ivermectin use will end COVID-19 pandemic</a></strong></p>
                    <p><strong><a href="https://zenodo.org/record/4477081#.YPCtOhqYWUl" target="_blank" rel="noopener">A Bayesian analysis concludes beyond a reasonable doubt that SARS-CoV-2 is not a natural zoonosis but instead is laboratory derived</a></strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.06.01.21258176v2" target="_blank" rel="noopener">Necessity of COVID-19 vaccination in previously infected individuals</a></strong></p>
                    <p><strong><a href="https://www.westernjournal.com/right-experts-confirm-covid-deaths-massively-inflated-actual-numbers-dramatically-lower-official-count/" target="_blank" rel="noopener">We Were Right: Experts Confirm COVID Deaths Massively Inflated, Actual Numbers Dramatically Lower Than Official Count</a></strong></p>
                    <p><strong><a href="https://www.greenmedinfo.com/blog/covid-19-restoring-public-trust-during-global-health-crisis" target="_blank" rel="noopener">COVID-19: Restoring Public Trust During A Global Health Crisis</a></strong></p>
                    <p><strong><a href="https://www.ahajournals.org/doi/10.1161/CIRCRESAHA.121.318902" target="_blank" rel="noopener">SARS-CoV-2 Spike Protein Impairs Endothelial Function via Downregulation of ACE 2</a></strong></p>
                    <p><strong><a href="\Simone%20Scott%20heart%20transplant,%20family%20support" target="_blank" rel="noopener">Gofundme</a>: <a href="https://threadreaderapp.com/thread/1404408955149991939.html" target="_blank" rel="noopener">Simone Scott: vaccinated at 19 years old, now dead</a></strong></p>
                    <p><strong><a href="https://humansarefree.com/2021/07/moderna-admits-vaccine-is-experimental.html" target="_blank" rel="noopener">Moderna Rep. ADMITS Vaccine Is Experimental And Everyone Taking It Is Part Of A Clinical Trial With Unknown Consequences</a></strong></p>
                    <p><strong><a href="https://internal-journal.frontiersin.org/articles/10.3389/fphar.2021.652688/full" target="_blank" rel="noopener">Fluvoxamine: A Review of Its Mechanism of Action and Its Role in COVID-19</a></strong></p>
                    <p><strong><a href="https://www.medscape.com/viewarticle/954681?src=mkm_covid_update_210715_MSCPEDIT&amp;uac=17589HT&amp;impID=3507624&amp;faf=1" target="_blank" rel="noopener">Ivermectin for COVID: How Do We Know What to Believe?</a></strong></p>
                    <p><strong><a href="https://www.forbes.com/sites/brucelee/2021/06/26/cdc-4115-fully-vaccinated-have-been-hospitalized-or-died-with-breakthrough-covid-19-infections/?sh=573fbde36993" target="_blank" rel="noopener">CDC: 4,115 Fully Vaccinated Have Been Hospitalized Or Died With Breakthrough Covid-19 Infections</a></strong></p>
                    <p><strong><a href="https://www.washingtonpost.com/world/asia_pacific/covid-wuhan-outbreak-who/2021/07/15/51e7e8a6-e2c6-11eb-88c5-4fd6382c47cb_story.html" target="_blank" rel="noopener">WHO clarifies details of early covid patients in Wuhan after errors in virus report</a></strong></p>
                    <p><strong><a href="https://thewashingtonstandard.com/all-over-france-the-people-clash-with-police-as-they-take-to-the-streets-in-defiance-of-tyrannical-new-mandatory-covid-vaccine-mandates-video/" target="_blank" rel="noopener">All Over France, The People Clash With Police As They Take To The Streets In Defiance Of Tyrannical New Mandatory COVID “Vaccine” Mandates (Video)</a></strong></p>
                    <p><strong><a href="https://www.stopworldcontrol.com/downloads/en/legal/science/COVID19-Dossier.pdf" target="_blank" rel="noopener">The Fauci/COVID-19 Dossier</a></strong></p>
                    <p><strong><a href="https://onlinelibrary.wiley.com/doi/10.1111/ijcp.13795?fbclid=IwAR3UmkB4jtA0lPACSOucFNfLrS2JNv7-A3pxRIDw8eDOH2aG7V6XBUPutnk" target="_blank" rel="noopener">Informed consent disclosure to vaccine trial subjects of risk of COVID-19 vaccines worsening clinical disease</a></strong></p>
                    <p><strong><a href="https://mailchi.mp/aapsonline/covid-adverse-reactions-reporting?e=ee4d505226" target="_blank" rel="noopener">The importance of reporting adverse reaction to COVID-19 shot</a></strong></p>
                    <p><strong><a href="https://www.bmj.com/content/374/bmj.n1687" target="_blank" rel="noopener">Should we delay covid-19 vaccination in children?</a></strong></p>
                    <p><strong><a href="https://www.msn.com/en-us/money/companies/americans-will-need-masks-indoors-as-us-heads-for-dangerous-fall-with-surge-in-delta-covid-cases/ar-AALViq3" target="_blank" rel="noopener">Americans will need masks indoors as U.S. heads for ‘dangerous fall’ with surge in delta Covid cases</a></strong></p>
                    <p><strong><a href="https://noqreport.com/2021/07/16/compelling-case-against-covid-vaccine-approval/" target="_blank" rel="noopener">Compelling Case Against COVID ‘Vaccine’ Approval</a></strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/health/article-9796591/Texas-man-hospitalized-monkeypox-infected-illness-trip-Nigeria.html" target="_blank" rel="noopener">Texas man is hospitalized with monkeypox after being infected with the rare virus during a trip to Nigeria</a></strong></p>
                    <p><strong><a href="https://www.bmj.com/content/374/bmj.n1781?utm_source=etoc&amp;utm_medium=email&amp;utm_campaign=tbmj&amp;utm_content=weekly&amp;utm_term=20210716" target="_blank" rel="noopener">Caution, vaccines, testing: the only way forward</a></strong></p>
                    <p><strong><a href="https://blogs.bmj.com/bmj/2021/07/13/how-government-messaging-is-undermining-the-covid-19-response/" target="_blank" rel="noopener">How government messaging is undermining the covid-19 response</a></strong></p>
                    <p><strong><a href="https://pubmed.ncbi.nlm.nih.gov/34170074/" target="_blank" rel="noopener">Attenuation of clinical and immunological outcomes during SARS-CoV-2 infection by ivermectin</a></strong></p>
                    <p><strong><a href="https://www.theguardian.com/science/2021/jul/16/huge-study-supporting-ivermectin-as-covid-treatment-withdrawn-over-ethical-concerns" target="_blank" rel="noopener">Huge study supporting ivermectin as Covid treatment withdrawn over ethical concerns</a></strong></p>
                    <p><strong><a href="https://humansarefree.com/2021/07/study-clot-risk-from-astrazeneca-vaccine.html" target="_blank" rel="noopener">Euro Study: Clot Risk To 18-39s From AstraZeneca Vaccine Is TWICE As High As Covid Death Risk</a></strong></p>
                    <p><strong><a href="https://www.medpagetoday.com/infectiousdisease/covid19/93609?xid=NL_breakingnewsalert_2021-07-16&amp;eun=g1604228d0r&amp;utm_source=Sailthru&amp;utm_medium=email&amp;utm_campaign=MaskretractAlert_071621&amp;utm_term=NL_Daily_Breaking_News_Active" target="_blank" rel="noopener">JAMA Peds&nbsp;Retracts Much-Hyped Masks Study</a></strong></p>
                    <p><strong><a href="https://www.mdpi.com/1999-4915/13/6/961" target="_blank" rel="noopener">Repeated Exposure to Subinfectious Doses of SARS-CoV-2 May Promote T Cell Immunity and Protection against Severe COVID-19</a></strong></p>
                    <p><strong><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7574725/" target="_blank" rel="noopener">Preventing the development of severe COVID-19 by modifying immunothrombosis</a></strong></p>
                    <p><strong><a href="https://www.nature.com/articles/s41598-021-90189-4" target="_blank" rel="noopener">Impact of daily high dose oral vitamin D therapy on the inflammatory markers in patients with COVID 19 disease</a></strong></p>
                    <p><strong><a href="https://halturnerradioshow.com/index.php/en/news-page/news-nation/ha-ha-fooled-ya-california-re-imposes-mask-mandates-vaccine-was-all-for-nothing" target="_blank" rel="noopener">Ha! Ha! Fooled Ya! California Re-Imposes Mask Mandates – Vaccine was all for nothing!</a></strong></p>
                    <p><strong><a href="https://leohohmann.com/2021/07/16/technocrats-leading-the-world-into-new-dark-age-but-they-cant-take-us-where-we-refuse-to-go/" target="_blank" rel="noopener">Technocrats leading the world into new Dark Age: But they can’t take us where we refuse to&nbsp;go</a></strong></p>
                    <p><strong><a href="https://www.bloomberg.com/news/articles/2021-07-16/pfizer-vaccine-granted-priority-review-for-full-u-s-approval" target="_blank" rel="noopener">Pfizer Vaccine Granted Priority Review for Full U.S. Approval</a></strong></p>
                    <p><strong><a href="https://thehill.com/changing-america/well-being/longevity/561994-top-health-expert-says-vaccinated-people-are-spreading" target="_blank" rel="noopener">Vaccinated people are spreading the Delta variant</a></strong></p>
                    <p><strong><a href="http://edition.cnn.com/TRANSCRIPTS/2107/13/ebo.01.html" target="_blank" rel="noopener">If you don’t choose to get vaccinated, you may not come to work.” – Kathleen Sebelius, former US Health and Human Services Secretary</a></strong></p>
                    <p><strong><a href="https://www.homevaccineeducationnetwork.com/DigIntoTheNumbers" target="_blank" rel="noopener">Dig into the Numbers: Are COVID Vaccinations&nbsp; Causing Increases&nbsp;in COVID Mortality?</a></strong></p>
                    <p><strong><a href="https://theprint.in/opinion/lockdowns-are-a-step-too-far-in-combating-covid-19/523001/" target="_blank" rel="noopener">Lockdowns are a step too far in combating Covid-19</a></strong></p>
                    <p><strong><a href="https://theprint.in/opinion/lockdowns-are-a-step-too-far-in-combating-covid-19/523001/" target="_blank" rel="noopener">It is likely that when the history of this pandemic is told, lockdowns will be viewed as one of the worst mistakes the world made.</a></strong></p>
                    <p><strong><a href="https://252f2edd-1c8b-49f5-9bb2-cb57bb47e4ba.filesusr.com/ugd/f4d9b9_b7cedc0553604720b7137f8663366ee5.pdf" target="_blank" rel="noopener">The disinformation dozen on vaccines</a></strong></p>
                    <p><strong><a href="https://apps.who.int/iris/bitstream/handle/10665/329438/9789241516839-eng.pdf" target="_blank" rel="noopener">WHO: Non-pharmaceutical public health measures for mitigating the risk and impact of epidemic and pandemic influenza</a></strong></p>
                    <p><strong><a href="https://gh.bmj.com/content/6/1/e004614.info" target="_blank" rel="noopener">Precision shielding for COVID-19: metrics of assessment and feasibility of deployment</a></strong></p>
                    <p><strong><a href="https://onlinelibrary.wiley.com/doi/10.1111/eci.13554" target="_blank" rel="noopener">Reconciling estimates of global spread and infection fatality rates of COVID-19: An overview of systematic evaluations</a></strong></p>
                    <p><strong>Acknowledging residual uncertainties, the available evidence suggests average global IFR of ~0.15% and ~1.5-2.0 billion infections by February 2021 with substantial differences in IFR and in infection spread across continents, countries and locations. Ioannidis</strong></p>
                    <p><strong><a href="https://www.sciencedirect.com/science/article/pii/S0013935120307854?via%3Dihub" target="_blank" rel="noopener">Population-level COVID-19 mortality risk for non-elderly individuals overall and for non-elderly individuals without underlying diseases in pandemic epicenters</a> Ioannidis</strong></p>
                    <p><strong><a href="https://www.who.int/bulletin/volumes/99/1/20-265892.pdf" target="_blank" rel="noopener">Infection fatality rate of COVID-19 inferred from seroprevalence data</a></strong></p>
                    <p><strong><a href="https://www.pandata.org/allrisk-zerobenefit" target="_blank" rel="noopener">10 REASONS WHY CHILDREN AND YOUNG PEOPLE SHOULD NOT GET VACCINATED</a> PANDA</strong></p>
                    <p><strong><a href="https://www.pandata.org/responding-to-covid-19-public-health-or-public-harm/" target="_blank" rel="noopener">PANDA: Responding to COVID-19: public health or public harm?</a></strong></p>
                    <p><strong><a href="https://www.liebertpub.com/doi/10.1089/bsp.2006.4.366" target="_blank" rel="noopener">Disease Mitigation Measures in the Control of Pandemic Influenza</a></strong></p>
                    <p><strong><a href="https://humanityattheprecipice.files.wordpress.com/2021/07/letterscottmorrison16-07-2021.pdf" target="_blank" rel="noopener">Emma McArther: Letter to the Australian Prime Minister</a></strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-9797637/UK-coronavirus-cases-stay-high-MONTHS-autumn-say-SAGE.html" target="_blank" rel="noopener">Covid cases will stay high for MONTHS after passing 100,000 in two weeks and a new lockdown may be needed by September, say experts as ‘Zero Covid’ scientists accuse UK of ‘endangering the world’</a></strong></p>
                    <p><strong><a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0254635" target="_blank" rel="noopener">Relation of prior statin and anti-hypertensive use to severity of disease among patients hospitalized with COVID-19: Findings from the American Heart Association’s COVID-19 Cardiovascular Disease Registry</a></strong></p>
                    <p><strong><a href="https://www.theguardian.com/society/2021/jul/17/pressure-builds-on-ministers-to-reach-a-decision-on-covid-vaccines-for-children" target="_blank" rel="noopener">UK: Pressure builds on ministers to reach a decision on Covid vaccines for children</a></strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-9797961/Sajid-Javid-tests-positive-Covid-19-despite-having-jabs.html" target="_blank" rel="noopener">Sajid Javid tests positive for Covid: Double-jabbed Health Secretary, 51, is self-isolating at home despite getting his second dose of AstraZeneca vaccine on May 16th</a></strong></p>
                    <p><strong><a href="https://www.latimes.com/california/story/2021-07-15/l-a-county-will-require-masks-indoors-amid-covid-19-surge?utm_id=33360&amp;sfmc_id=1773978" target="_blank" rel="noopener">July 2021: L.A. County will require masks indoors amid alarming rise in coronavirus cases</a></strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/vaers-deaths-injuries-reported-cdc-covid-vaccines-moderna-pregnant-women/?utm_source=salsa&amp;eType=EmailBlastContent&amp;eId=9c4528c4-637d-4aed-858a-a2383936adf0" target="_blank" rel="noopener">Nearly 11,000 Deaths After COVID Vaccines Reported to CDC, as FDA Adds New Warning to J&amp;J Vaccine</a></strong></p>
                    <p><strong><a href="https://humansarefree.com/2021/07/cdc-12000-deaths-in-7-months-following-covid-19-vaccines.html" target="_blank" rel="noopener">CENSORED: CDC Records Almost 12,000 DEATHS In 7 Months Following COVID-19 Injections</a></strong></p>
                    <p><strong><a href="https://aapsonline.org/covid-shot-home-visits-unconstitutional-and-unethical/" target="_blank" rel="noopener">COVID Shot Home Visits Unconstitutional and Unethical</a></strong></p>
                    <p><strong><a href="https://www.tennessean.com/story/news/health/2021/07/13/tennessee-halts-all-vaccine-outreach-minors-not-just-covid-19/7928701002/" target="_blank" rel="noopener">Tennessee abandons vaccine outreach to minors — not just for COVID-19</a></strong></p>
                    <p><strong><a href="https://www.telegraph.co.uk/politics/2021/07/17/children-will-get-covid-vaccines-vulnerable/" target="_blank" rel="noopener">Children will only get Covid vaccines if vulnerable</a></strong></p>
                    <p><strong><a href="https://www.embopress.org/doi/full/10.15252/emmm.202114122" target="_blank" rel="noopener">Attenuation of clinical and immunological outcomes during SARS-CoV-2 infection by&nbsp;ivermectin</a></strong></p>
                    <p><strong><a href="https://mailchi.mp/aapsonline/covid-adverse-reactions-reporting?e=3c2cb96855" target="_blank" rel="noopener">Importance of reporting adverse reaction to COVID-19 shot</a></strong></p>
                    <p><strong><a href="https://richieallen.co.uk/irish-ice-hockey-star-resigns-in-protest-over-vaccine-passports/?fbclid=IwAR0X7ricI3DGmfRM8jxCXR91cQKhyG8uji-9VCkp7U9oS5cq10ufQ0DMyRQ" target="_blank" rel="noopener">Irish Ice Hockey Star Resigns In Protest Over Vaccine Passports</a></strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.07.08.21260236v1" target="_blank" rel="noopener">Aspirin Use is Associated with Decreased Mortality in Patients with COVID-19: A Systematic Review and Meta-analysis</a></strong></p>
                    <p><strong><a href="https://pjmedia.com/news-and-politics/rick-moran/2021/07/17/mit-study-vaccine-hesitancy-is-highly-informed-scientifically-literate-and-sophisticated-n1462591" target="_blank" rel="noopener">MIT Study: Vaccine Hesitancy Is ‘Highly Informed, Scientifically Literate,’ and ‘Sophisticated’</a></strong></p>
                    <p><strong><a href="https://www.cdc.gov/pcd/issues/2021/21_0123.htm" target="_blank" rel="noopener">Underlying Medical Conditions and Severe Illness Among 540,667 Adults Hospitalized With COVID-19, March 2020–March 2021</a></strong></p>
                    <p><strong><a href="https://www.israelnationalnews.com/News/News.aspx/310003" target="_blank" rel="noopener">CDC study: More than 99% of COVID victims had preexisting conditions</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/07/18/bayesian-analysis-of-sars-cov-2-origin.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1HL&amp;cid=20210718_HL2&amp;mid=DM939135&amp;rid=1211764811" target="_blank" rel="noopener">Analysis Proves SARS-CoV-2 Lab Origin</a></strong></p>
                    <p><strong><a href="https://humansarefree.com/2021/07/cdc-director-lies-pandemic-unvaccinated.html" target="_blank" rel="noopener">CDC Director Embraces Tyranny And Lies To America: This Is A ‘Pandemic Of The Unvaccinated’</a></strong></p>
                    <p><strong><a href="https://www.wreg.com/news/mississippi-state-health-department-updates-k-12-covid-19-guidance/" target="_blank" rel="noopener">Mississippi State Health Department updates K-12 COVID-19 guidance</a></strong></p>
                    <p><strong>Even in the southern states they are abusing children and coercing them to accept the vaccine</strong></p>
                    <p><strong><a href="https://www.euronews.com/2021/07/17/france-tens-of-thousands-protest-against-covid-pass-vaccination" target="_blank" rel="noopener">France: Tens of thousands protest against COVID pass, vaccination</a></strong></p>
                    <p><strong><a href="https://www.cyclingnews.com/news/olympic-games-covid-vaccine-wrecked-my-tour-de-france-says-fuglsang/" target="_blank" rel="noopener">Olympic Games: Fuglsang believes his Tour de France was wrecked by Covid vaccine</a></strong></p>
                    <p><strong><a href="https://www.zerohedge.com/covid-19/worrying-me-quite-bit-mrna-vaccine-inventor-shares-viral-thread-showing-covid-surge-most" target="_blank" rel="noopener">“This Is Worrying Me Quite A Bit”: mRNA Vaccine Inventor Shares Viral Thread Showing COVID Surge In Most-Vaxxed Countries</a></strong></p>
                    <p><strong><a href="https://news.yahoo.com/u-surgeon-general-defends-cdc-164857634.html?soc_src=aolapp" target="_blank" rel="noopener">U.S. surgeon general defends CDC mask change, blames tech companies for COVID deaths </a></strong></p>
                    <p><strong><a href="https://news.yahoo.com/u-surgeon-general-defends-cdc-164857634.html?soc_src=aolapp" target="_blank" rel="noopener">&nbsp;</a></strong></p>
                    <p><strong><a href="https://news.yahoo.com/u-surgeon-general-defends-cdc-164857634.html?soc_src=aolapp" target="_blank" rel="noopener">&nbsp;</a></strong></p>
                    <p><strong><a href="https://www.yahoo.com/news/gottlieb-warns-delta-variant-most-153402398.html" target="_blank" rel="noopener">Former FDA commissioner Scott Gottlieb said the Delta variant is “far more advanced” than other COVID-19 strains, and “for most people who get this Delta variant, it’s going to be the most serious virus they get in their lifetime in terms of risk of putting them in the hospital.”</a></strong></p>
                    <p><strong><a href="https://www.truthforhealth.org/" target="_blank" rel="noopener">Truth for health foundation</a></strong></p>
                    <p><strong><a href="https://dailyexpose.co.uk/2021/07/18/the-covid-19-vaccines-are-not-working-and-the-authorities-know-it-because-the-data-shows-it-just-ask-the-fully-vaccinated-health-secretary-who-now-has-covid-19/?fbclid=IwAR0ONvAEZRQ2Kz2E9oSDcUM4oBRGAaPoa8bj6bKm3TYZZMwNTGcAxGlim98" target="_blank" rel="noopener">The Covid-19 Vaccines are NOT working, and the authorities know it because the data shows it – Just ask the fully vaccinated Health Secretary who now has Covid-19</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/pfizer-covid-19-vaccine-significantly-less-effective-against-delta-variant-israeli-pm_3906825.html?utm_source=pushengage" target="_blank" rel="noopener">Pfizer COVID-19 Vaccine ‘Significantly Less’ Effective Against Delta Variant: Israeli PM</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/five-times-more-children-committed-suicide-than-died-of-covid-19-during-lockdown-uk-study_3903566.html" target="_blank" rel="noopener">5 Times More Children Committed Suicide Than Died of COVID-19 During Lockdown: UK Study</a></strong></p>
                    <p><strong><a href="http://orthomolecular.org/resources/omns/v16n18.shtml" target="_blank" rel="noopener">Successful High-Dose Vitamin C Treatment of Patients with Serious and Critical COVID-19 Infection</a></strong></p>
                    <p><strong><a href="https://tapnewswire.com/2021/06/fda-cover-up-they-knew-about-deadly-vax-side-effects/" target="_blank" rel="noopener">FDA Cover-Up!! They Knew About Deadly Vax Side Effects!</a></strong></p>
                    <p><strong><a href="https://blogs.bmj.com/bmj/2021/06/08/why-we-petitioned-the-fda-to-refrain-from-fully-approving-any-covid-19-vaccine-this-year/" target="_blank" rel="noopener">Why we petitioned the FDA to refrain from fully approving any covid-19 vaccine this year</a></strong></p>
                    <p><strong><a href="https://www.cdc.gov/vaccinesafety/concerns/history/narcolepsy-flu.html" target="_blank" rel="noopener">Narcolepsy Following 2009 Pandemrix Influenza Vaccination in Europe</a></strong></p>
                    <p><strong><a href="https://investor.regeneron.com/news-releases/news-release-details/phase-3-trial-shows-regen-covtm-casirivimab-imdevimab-antibody" target="_blank" rel="noopener">PHASE 3 TRIAL SHOWS REGEN-COV™ (CASIRIVIMAB WITH IMDEVIMAB) ANTIBODY COCKTAIL REDUCED HOSPITALIZATION OR DEATH BY 70% IN NON-HOSPITALIZED COVID-19 PATIENTS</a></strong></p>
                    <p><strong><a href="https://www.adn.com/nation-world/2021/05/18/coronavirus-vaccines-may-not-work-for-some-with-underlying-health-issues/" target="_blank" rel="noopener">Coronavirus vaccines may not work for some with underlying health issues</a></strong></p>
                    <p><strong><a href="https://www.nature.com/articles/s41467-021-23333-3" target="_blank" rel="noopener">Peripheral and lung resident memory T cell responses against SARS-CoV-2</a></strong></p>
                    <p><strong><a href="https://www.jimmunol.org/content/195/1/17" target="_blank" rel="noopener">Tissue-Resident Memory T Cells and Fixed Immune Surveillance in Nonlymphoid Organs</a></strong></p>
                    <p><strong><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3838993" target="_blank" rel="noopener">Discrete Immune Response Signature to SARS-CoV-2 mRNA Vaccination Versus Infection</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/05/28/how-covid-vaccines-can-cause-blood-clots.aspx" target="_blank" rel="noopener">How COVID Vaccines Can Cause Blood Clots and More</a></strong></p>
                    <p><strong>SARS-CoV-2 spike protein binds to the ACE2 receptor on platelets. The subsequent activation of the platelets can lead to disseminated intravascular coagulation (DIC), i.e., a pathological overstimulation of your coagulation system resulting in abnormal blood clotting, thrombocytopenia (low platelet count) and hemorrhaging</strong></p>
                    <p><strong>Research shows deaths are 14.6 times more frequent during the first 14 days after the first COVID injection among people over the age of 60, compared to those who aren’t vaccinated. Other data also show that after COVID-19 vaccines were implemented, overall death rates have, with few exceptions, increased</strong></p>
                    <p><strong><a href="https://www.sciencedirect.com/science/article/pii/S0264410X19313647?via%3Dihub" target="_blank" rel="noopener">Influenza vaccination and respiratory virus interference among Department of Defense personnel during the 2017–2018 influenza season</a></strong></p>
                    <p><strong><a href="https://journals.plos.org/plospathogens/article?id=10.1371/journal.ppat.1004757" target="_blank" rel="noopener">RSV Vaccine-Enhanced Disease Is Orchestrated by the Combined Actions of Distinct CD4 T Cell Subsets</a></strong></p>
                    <p><strong><a href="https://www.bloomberg.com/news/articles/2021-07-08/pfizer-plans-to-request-fda-nod-for-covid-booster-in-august?cmpid=socialflow-twitter-business&amp;utm_medium=social&amp;utm_content=business&amp;utm_campaign=socialflow-organic&amp;utm_source=twitter" target="_blank" rel="noopener">Pfizer Outlines Booster Plans While Regulators Signal Caution</a></strong></p>
                    <p><strong>Mercola: <a href="https://articles.mercola.com/sites/articles/archive/2021/07/19/mrna-flu-vaccines.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1HL&amp;cid=20210719&amp;mid=DM940120&amp;rid=1212651627" target="_blank" rel="noopener">Will mRNA Flu Vaccines Get Emergency Use Authorization Next?</a></strong></p>
                    <p><strong><a href="https://www.cidrap.umn.edu/news-perspective/2010/04/new-canadian-studies-suggest-seasonal-flu-shot-increased-h1n1-risk" target="_blank" rel="noopener">New Canadian studies suggest seasonal flu shot increased H1N1 risk</a></strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/vaers-deaths-injuries-reported-cdc-covid-vaccines-moderna-pregnant-women/" target="_blank" rel="noopener">Nearly 11,000 Deaths After COVID Vaccines Reported to CDC, as FDA Adds New Warning to J&amp;J Vaccine</a></strong></p>
                    <p><strong><a href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/213717/dh_131040.pdf" target="_blank" rel="noopener">UK Influenza Pandemic Preparedness Strategy 2011</a></strong></p>
                    <p><strong><a href="https://www.medpagetoday.com/meetingcoverage/ias/93622?xid=nl_mpt_DHE_2021-07-19&amp;eun=g875816d0r&amp;utm_source=Sailthru&amp;utm_medium=email&amp;utm_campaign=Daily%20Headlines%20Top%20Cat%20HeC%20%202021-07-19&amp;utm_term=NL_Daily_DHE_dual-gmail-definition" target="_blank" rel="noopener">HIV Independently Tied to More Severe COVID-19</a></strong></p>
                    <p><strong><a href="https://ccforum.biomedcentral.com/articles/10.1186/s13054-020-03249-y" target="_blank" rel="noopener">Vitamin C levels in patients with SARS-CoV-2-associated acute respiratory distress syndrome</a></strong></p>
                    <p><strong><a href="https://thefederalist.com/2021/07/14/dr-faucis-emails-tell-the-story-of-panic-lies-and-a-possible-cover-up/" target="_blank" rel="noopener">Federalist:</a> <a href="https://thefederalist.com/2021/07/14/dr-faucis-emails-tell-the-story-of-panic-lies-and-a-possible-cover-up/" target="_blank" rel="noopener">What Did Fauci Know And When? His Emails Point To Panic, Lies, And A Possible Cover-Up</a></strong></p>
                    <p><strong><a href="https://khn.org/news/article/covid-vaccine-novavax-vaccination-effort-from-zero-to-not-quite-warp-speed/" target="_blank" rel="noopener">Novavax’s Effort to Vaccinate the World, From Zero to Not Quite Warp Speed</a></strong></p>
                    <p><strong><a href="https://www.preprints.org/manuscript/202107.0402/v1" target="_blank" rel="noopener">Synthetic mRNAs; Their Analogue Caps and Contribution to Disease</a></strong></p>
                    <p><strong><a href="https://www.theguardian.com/world/2021/jul/08/new-zealand-children-falling-ill-in-high-numbers-due-to-covid-immunity-debt" target="_blank" rel="noopener">New Zealand children falling ill in high numbers due to Covid ‘immunity debt’</a></strong></p>
                    <p><strong><a href="https://www.wsj.com/articles/covid-delta-variant-market-dow-industrial-700-points-11626731103" target="_blank" rel="noopener">We’ll Always Have Covid</a></strong></p>
                    <p><strong><a href="https://humansarefree.com/2021/07/french-police-lay-down-shields-join-100000-protesters-marching-against-vaccine-passport.html" target="_blank" rel="noopener">French Police Lay Down Shields Join 100,000 Protesters Marching Against Vaccine Passport</a></strong></p>
                    <p><strong><a href="https://www.biorxiv.org/content/10.1101/2021.04.30.441968v1.full.pdf" target="_blank" rel="noopener">Influenza viral particles harboring the SARS-CoV-2 spike RBD as a combination respiratory disease vaccine</a></strong></p>
                    <p><strong><a href="https://www.frontiersin.org/articles/10.3389/fmed.2021.668698/full" target="_blank" rel="noopener">Proxalutamide Reduces the Rate of Hospitalization for COVID-19 Male Outpatients: A Randomized Double-Blinded Placebo-Controlled Trial</a></strong></p>
                    <p><strong><a href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2781968" target="_blank" rel="noopener">Exploring the Gap Between Excess Mortality and COVID-19 Deaths in 67 Countries</a></strong></p>
                    <p><strong><a href="https://www.nature.com/articles/s41598-021-90189-4" target="_blank" rel="noopener">Impact of daily high dose oral vitamin D therapy on the inflammatory markers in patients with COVID 19 disease</a></strong></p>
                    <p><strong><a href="https://link.springer.com/article/10.1007/s40618-021-01639-9" target="_blank" rel="noopener">Vitamin D supplementation and COVID-19 risk: a population-based, cohort study</a></strong></p>
                    <p><strong><a href="https://www.acpjournals.org/doi/10.7326/M21-1577" target="_blank" rel="noopener">SARS-CoV-2 Vaccine Effectiveness in a High-Risk National Population in a Real-World Setting</a></strong></p>
                    <p><strong><a href="https://www.nature.com/articles/s41587-021-00980-x" target="_blank" rel="noopener">‘Super-antibodies’ could curb COVID-19 and help avert future pandemics</a></strong></p>
                    <p><strong><a href="https://hotair.com/allahpundit/2021/07/19/american-academy-of-pediatrics-all-kids-should-mask-up-in-school-this-fall-vaccinated-or-not-n403310" target="_blank" rel="noopener">American Academy of Pediatrics: All kids should mask up in school this fall, vaccinated or not</a></strong></p>
                    <p><strong><a href="https://hotair.com/allahpundit/2021/07/19/american-academy-of-pediatrics-all-kids-should-mask-up-in-school-this-fall-vaccinated-or-not-n403310" target="_blank" rel="noopener">&nbsp;</a></strong></p>
                    <p><strong><a href="https://patch.com/new-jersey/middletown-nj/middletown-boe-member-speaks-against-masks-senate-hearing" target="_blank" rel="noopener">Middletown BOE Member Speaks Against Masks At Senate Hearing</a></strong></p>
                    <p><strong><a href="https://www.researchgate.net/publication/352837543_Analysis_of_COVID-19_vaccine_death_reports_from_the_Vaccine_Adverse_Events_Reporting_System_VAERS_Database_Interim_Results_and_Analysis" target="_blank" rel="noopener">Analysis of COVID-19 vaccine death reports from the Vaccine Adverse Events Reporting System (VAERS) Database Interim Results and Analysis</a></strong></p>
                    <p><strong><a href="https://academic.oup.com/ofid/advance-article/doi/10.1093/ofid/ofab369/6324266?login=true" target="_blank" rel="noopener">Transmission of SARS-CoV-2 alpha variant (B.1.1.7) from a BNT162b2-vaccinated individual&nbsp;</a></strong></p>
                    <p><strong><a href="https://www.wsj.com/articles/cdc-covid-19-coronavirus-vaccine-side-effects-hospitalization-kids-11626706868" target="_blank" rel="noopener">The Flimsy Evidence Behind the CDC’s Push to Vaccinate Children</a></strong></p>
                    <p><strong><a href="https://abc7news.com/covid-death-count-alameda-county-deaths-19-cases/10755419/" target="_blank" rel="noopener">Alameda County revises COVID-19 death count by 25%</a></strong></p>
                    <p><strong><a href="https://humansarefree.com/2021/07/public-health-scotland-died-covid-19-vaccine.html" target="_blank" rel="noopener">Public Health Scotland: 5,522 People Died Within 28 Days Of Having A Covid-19 Vaccine In Scotland</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/ontario-premier-says-no-to-mandatory-covid-jabs-and-vaccine-passports" target="_blank" rel="noopener">Ontario Premier says no to mandatory COVID jabs and vaccine passports&nbsp;</a></strong></p>
                    <p><strong><a href="https://www.nature.com/articles/d41586-021-01773-7" target="_blank" rel="noopener">Human genetic variants identified that affect COVID susceptibility and severity</a></strong></p>
                    <p><strong><a href="https://humansarefree.com/2021/07/mrna-vaccines-will-kill-most-people-through-heart-failure.html" target="_blank" rel="noopener">Dr. Charles Hoffe: MRNA Vaccines ‘Will Kill Most People’ Through Heart Failure &amp; 62% Already Have Microscopic Blood Clots</a></strong></p>
                    <p><strong><a href="https://www.the-scientist.com/features/the-surgisphere-scandal-what-went-wrong--67955" target="_blank" rel="noopener">The Surgisphere scandal-what went wrong</a>: case in point, hydroxychloroquine</strong></p>
                    <p><strong><a href="https://www.aier.org/article/study-indicates-lockdowns-have-increased-deaths-of-despair/" target="_blank" rel="noopener">Study Indicates Lockdowns Have Increased Deaths of Despair</a></strong></p>
                    <p><strong><a href="https://seemorerocks.is/luc-montangier-we-must-be-ready-to-incinerate-the-bodies/" target="_blank" rel="noopener">LUC MONTAGNIER: “WE MUST BE READY TO INCINERATE THE BODIES”</a></strong></p>
                    <p><strong><a href="https://dailyexpose.co.uk/2021/07/19/vaers-whistleblower-45000-dead-from-covid-19-vaccines-within-3-days-sparks-lawsuit-against-federal-government/" target="_blank" rel="noopener">VAERS Whistleblower: “45,000 Dead From Covid-19 Vaccines Within 3 Days of Vaccination”, Sparks Lawsuit Against Federal Government</a></strong></p>
                    <p><strong><a href="https://online.anyflip.com/inblw/ufbs/mobile/index.html?s=08&amp;%3B" target="_blank" rel="noopener">Global COVID-19 report: this is no deadly pandemic</a></strong></p>
                    <p><strong><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1232869/" target="_blank" rel="noopener">Chloroquine is a potent inhibitor of SARS coronavirus infection and spread</a></strong></p>
                    <p><strong><a href="https://www.yahoo.com/gma/texas-hospital-reports-1st-case-183000620.html" target="_blank" rel="noopener">Texas hospital reports its 1st case of lambda COVID-19 variant</a></strong></p>
                    <p><strong><a href="https://thefederalist.com/2021/07/21/majority-of-voters-reject-covid-vaccine-mandates-new-poll-finds/" target="_blank" rel="noopener">Majority Of Voters Reject COVID Vaccine Mandates, New Poll Finds</a></strong></p>
                    <p><strong><a href="https://pubmed.ncbi.nlm.nih.gov/33116688/" target="_blank" rel="noopener">Flattening the Risk: Pre-Exposure Prophylaxis for COVID-19</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_app/author-of-retracted-study-on-harm-of-mask-wearing-by-children-says-removal-was-political_3911445.html" target="_blank" rel="noopener">Author of Retracted Study on Harm of Mask-Wearing by Children Says Removal Was ‘Political’</a></strong></p>
                    <p><strong><a href="https://healthimpactnews.com/2021/18928-dead-1-8-million-injured-50-serious-reported-in-european-unions-database-of-adverse-drug-reactions-for-covid-19-shots/" target="_blank" rel="noopener">18,928 DEAD, 1.8 Million Injured (50% SERIOUS) Reported in European Union’s Database of Adverse Drug Reactions for COVID-19 Shots</a></strong></p>
                    <p><strong><a href="https://www.yahoo.com/news/rand-paul-says-fauci-subject-035500670.html" target="_blank" rel="noopener">Rand Paul says Fauci will be subject of criminal referral letter to Justice Department</a></strong></p>
                    <p><strong><a href="https://www.immunize.org/timeline/" target="_blank" rel="noopener">Vaccine Timeline</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/scientists-show-covid-tests-are-useless-are-based-on-flawed-science" target="_blank" rel="noopener">Scientists show COVID tests are ‘useless’, are based on ‘flawed science’</a></strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/scientist-warning-covid-vaccines-parkinson-neurodegenerative-disorders/?utm_source=salsa&amp;eType=EmailBlastContent&amp;eId=1caf2af0-dabd-422e-beca-1bfebdf00bd1" target="_blank" rel="noopener">Scientist Sounds Alarm: COVID Vaccines Producing Symptoms of Parkinson’s, Other Neurodegenerative Disorders</a></strong></p>
                    <p><strong><a href="https://www.infowars.com/posts/mrna-vaccine-inventor-i-risk-being-assassinated-for-speaking-out-against-experimental-covid-shots/" target="_blank" rel="noopener">mRNA Vaccine Inventor: I Risk ‘Being Assassinated’ For Speaking Out Against Experimental COVID Shots</a></strong></p>
                    <p><strong><a href="https://nypost.com/2021/07/21/mitch-mcconnell-urges-covid-19-vaccines-warns-of-lockdowns/" target="_blank" rel="noopener">Mitch McConnell warns of return to 2020 if COVID vaccine rates don’t increase</a></strong></p>
                    <p><strong><a href="https://www.theglobeandmail.com/canada/article-quebec-nursing-home-often-gave-morphine-rather-than-treat-covid-19/" target="_blank" rel="noopener">Quebec nursing home often gave morphine rather than treat COVID-19 patients, inquest told</a></strong></p>
                    <p><strong><a href="https://unglossed.substack.com/p/what-happened-in-singapore" target="_blank" rel="noopener">What Happened in Singapore?</a></strong></p>
                    <p><strong><a href="https://trialsitenews.com/vaccine-truth-cdc/" target="_blank" rel="noopener">The truth about vaccines that the CDC doesn’t want you to know</a></strong></p>
                    <p><strong><a href="http://www.kathydopp.info/node/66" target="_blank" rel="noopener">Israeli &amp; UK Data Show COVID vaccines do Not Reduce COVID Cases, Hospitalizations or Deaths</a></strong></p>
                    <p><strong><a href="https://fos-sa.org/2021/07/20/thomas-renz-and-afld-sue-the-federal-government-vax-deaths-have-been-covered-up/" target="_blank" rel="noopener">Thomas Renz and AFLD sue the Federal Government-Vax deaths have been covered&nbsp;up</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_morningbrief/spike-in-death-reports-following-covid-19-vaccination-an-error-cdc_3911934.html?utm_source=morningbriefnoe&amp;utm_medium=email2&amp;utm_campaign=mb-2021-07-22&amp;mktids=ef5239d8acdfaf3ea5125b5119073175&amp;est=%5bEMAIL_SECURE_LINK%5d" target="_blank" rel="noopener">Spike in Death Reports Following COVID-19 Vaccination Caused by a Mistake: CDC</a></strong></p>
                    <p><strong><a href="https://royalsocietypublishing.org/doi/10.1098/rsos.201912" target="_blank" rel="noopener">Vitamin D and COVID-19: evidence and recommendations for supplementation</a></strong></p>
                    <p><strong><a href="https://www.washingtonpost.com/politics/2021/07/19/vaccine-skeptics-zero-israel-again-some-reason/" target="_blank" rel="noopener">Vaccine doubters’ strange fixation with Israel</a></strong></p>
                    <p><strong><a href="https://www.timesofisrael.com/just-one-serious-covid-patient-in-israel-is-both-vaccinated-and-under-60-tv/" target="_blank" rel="noopener">Just one serious COVID patient in Israel is both vaccinated and under 60 — TV</a></strong></p>
                    <p><strong><a href="https://www.timesofisrael.com/just-one-serious-covid-patient-in-israel-is-both-vaccinated-and-under-60-tv/" target="_blank" rel="noopener">Report indicates more than 60% of those hospitalized with coronavirus are fully vaccinated, but almost all are over age 60</a></strong></p>
                    <p><strong><a href="https://www.zerohedge.com/covid-19/natural-infection-may-offer-better-protection-against-delta-variant-israeli-health" target="_blank" rel="noopener">Natural Infection May Offer Better Protection Against Delta Variant, Israeli Health Ministry Says</a></strong></p>
                    <p><strong><a href="https://wwwnc.cdc.gov/eid/article/27/10/21-1427_article" target="_blank" rel="noopener">Breakthrough Infections of SARS-CoV-2 Gamma Variant in Fully Vaccinated Gold Miners, French Guiana, 2021</a></strong></p>
                    <p><strong><a href="https://medicine.uiowa.edu/content/research-shows-remdesivir-treatment-covid-19-has-little-impact-survival-increases-hospital" target="_blank" rel="noopener">Research shows remdesivir treatment for COVID-19 has little impact on survival, increases hospital stay</a></strong></p>
                    <p><strong><a href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2781959#editorial-comment-tab" target="_blank" rel="noopener">Association of Remdesivir Treatment With Survival and Length of Hospital Stay Among US Veterans Hospitalized With COVID-19</a></strong></p>
                    <p><strong><a href="https://dailyexpose.co.uk/2021/07/16/birth-defects-paralysis-stroke-blindness-uk-gov-release-24th-report-on-adverse-reactions-to-the-covid-19-vaccines/" target="_blank" rel="noopener">Birth Defects, Paralysis, Stroke &amp; Blindness – UK Gov. release 24th report on adverse reactions to the Covid-19 Vaccines</a></strong></p>
                    <p><strong><a href="https://dailyexpose.co.uk/2021/07/16/birth-defects-paralysis-stroke-blindness-uk-gov-release-24th-report-on-adverse-reactions-to-the-covid-19-vaccines/" target="_blank" rel="noopener">&nbsp;</a></strong></p>
                    <p><strong><a href="https://dailyexpose.co.uk/2021/07/16/birth-defects-paralysis-stroke-blindness-uk-gov-release-24th-report-on-adverse-reactions-to-the-covid-19-vaccines/" target="_blank" rel="noopener">Sen. Ron Johnson: Data From Israel Shows 84% Of New COVID Cases Are Vaccinated Individuals</a></strong></p>
                    <p><strong><a href="https://dailyexpose.co.uk/2021/07/16/birth-defects-paralysis-stroke-blindness-uk-gov-release-24th-report-on-adverse-reactions-to-the-covid-19-vaccines/" target="_blank" rel="noopener">&nbsp;</a></strong></p>
                    <p><strong><a href="https://www.msn.com/en-us/health/medical/who-official-urges-world-leaders-to-stop-using-lockdowns-as-primary-virus-control-method/ar-BB19TBUo" target="_blank" rel="noopener">WHO official urges world leaders to stop using lockdowns as primary virus control method</a></strong></p>
                    <p><strong><a href="https://newsrescue.com/delta-variant-natural-immunity-700-greater-protection-than-shot-data-from-israeli-govt-shows/" target="_blank" rel="noopener">Delta Variant: Natural Immunity 700% Greater Protection Than Shot, Data from Israeli Govt. Shows</a></strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/07/cant-rely-honor-system-doctor-cnn-demands-mask-mandates-nationwide-regardless-vaccination-status-video/" target="_blank" rel="noopener">“We Can’t Rely on the Honor System” – Doctor on CNN Demands Mask Mandates Nationwide Regardless of Vaccination Status (VIDEO)</a></strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/07/cdc-quietly-deletes-6000-covid-vaccine-deaths-cdc-website-total-one-day-caught-internet-sleuths-video/" target="_blank" rel="noopener">CDC Quietly Deletes 6,000 COVID Vaccine Deaths From Its CDC Website Total in One Day — Caught by Internet Sleuths (VIDEO)</a></strong></p>
                    <p><strong><a href="https://www.medpagetoday.com/special-reports/exclusives/93707?xid=nl_mpt_DHE_2021-07-23&amp;eun=g1604228d0r&amp;utm_source=Sailthru&amp;utm_medium=email&amp;utm_campaign=Daily%20Headlines%20Top%20Cat%20HeC%20%202021-07-23&amp;utm_term=NL_Daily_DHE_dual-gmail-definition" target="_blank" rel="noopener">American Hospital Association Joins Others in Support of COVID Vax Mandates</a></strong></p>
                    <p><strong><a href="https://www.ucl.ac.uk/news/2021/jul/covid-19-risks-severe-illness-children-shown-be-very-low" target="_blank" rel="noopener">Covid-19: Risks of severe illness in children shown to be very low</a></strong></p>
                    <p><strong><a href="https://www.york.ac.uk/news-and-events/news/2021/research/risk-covid-severe-illness-children/" target="_blank" rel="noopener">Risks of severe illness in children from COVID-19 shown to be very low in largest study yet</a></strong></p>
                    <p><strong><a href="http://www.kathydopp.info/COVIDinfo/Vaccines/Doses1and2" target="_blank" rel="noopener">Adverse Events Reported to VAERS after mRNA COVID-19 injection by age and dose number</a></strong></p>
                    <p><strong><a href="https://merylnassmd.com/here-is-how-you-do-the-big-lie-cnbc-and-the-99-5-of-deaths-in-the-unvaccinated/" target="_blank" rel="noopener">The big lie: CNBC and the 99% of deaths in the unvaccinated</a></strong></p>
                    <p><strong><a href="https://indianexpress.com/article/explained/explained-icmr-covid-fourth-serosurvey-findings-7413949/" target="_blank" rel="noopener">2 of 3 Indians have Covid-19 antibodies: ICMR sero-survey findings explained</a></strong></p>
                    <p><strong><a href="https://www.israelnationalnews.com/News/News.aspx/309762" target="_blank" rel="noopener">Natural infection vs vaccination: Which gives more protection?</a></strong></p>
                    <p><strong><a href="https://www.israelnationalnews.com/News/News.aspx/309762" target="_blank" rel="noopener">Nearly 40% of new COVID patients were vaccinated – compared to just 1% who had been infected previously.</a></strong></p>
                    <p><strong><a href="https://www.cdc.gov/csels/dls/locs/2021/07-21-2021-lab-alert-Changes_CDC_RT-PCR_SARS-CoV-2_Testing_1.html" target="_blank" rel="noopener">07/21/2021: Lab Alert: Changes to CDC RT-PCR for SARS-CoV-2 Testing</a></strong></p>
                    <p><strong><a href="https://www.allisrael.com/even-though-i-was-fully-vaccinated-in-israel-i-was-just-diagnosed-with-delta-variant-of-covid-19-had-to-cancel-speech-meetings-with-pence-pompeo-us-governors" target="_blank" rel="noopener">I was just diagnosed with Delta variant of COVID-19 even though I was fully vaccinated in Israel – had to cancel speech, meetings with Pence, Pompeo, US governors</a></strong></p>
                    <p><strong><a href="https://dailyexpose.co.uk/2021/07/23/fully-vaccinated-people-are-65-more-likely-to-be-hospitalised-1540-more-likely-to-die-due-to-covid-19-than-people-who-are-unvaccinated-according-to-latest-public-health-england-data/?fbclid=IwAR3-U2LoleUc_jb18uM01Bd5eyGiJBdBaxlQuk9DXkr2tIE8yKrdBxUeCfY" target="_blank" rel="noopener">Fully vaccinated people are 65% more likely to be hospitalised &amp; 1540% more likely to die due to Covid-19 than people who are unvaccinated according to latest Public Health England data</a></strong></p>
                    <p><strong><a href="https://dailyexpose.co.uk/2021/07/23/pfizer-covid-vaccines-destroy-every-system-of-the-human-body-warns-israeli-health-experts/" target="_blank" rel="noopener">Pfizer Covid Vaccines “Destroy Every System of the Human Body” Warns Israeli Health Experts</a></strong></p>
                    <p><strong><a href="https://www.nature.com/articles/s41559-020-1254-y" target="_blank" rel="noopener">Self-disseminating vaccines to suppress zoonoses</a></strong></p>
                    <p><strong><a href="https://www.theblaze.com/op-ed/horowitz-instant-karma-after-forcing-students-to-get-vaccinated-indiana-u-president-gets-covid" target="_blank" rel="noopener">Horowitz: Instant karma! After forcing students to get vaccinated, Indiana U president gets COVID</a></strong></p>
                    <p><strong><a href="https://www.medpagetoday.com/special-reports/exclusives/93717?xid=nl_mpt_DHE_2021-07-24&amp;eun=g875816d0r&amp;utm_source=Sailthru&amp;utm_medium=email&amp;utm_campaign=Daily%20Headlines%20Top%20Cat%20HeC%20%202021-07-24&amp;utm_term=NL_Daily_DHE_dual-gmail-definition" target="_blank" rel="noopener">What’s This About Delta Being 1,000 Times More Infectious?</a></strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/sciencetech/article-8506839/SARS-CoV-2-1-000-TIMES-better-infecting-human-cells-closest-relative-bats.html" target="_blank" rel="noopener">Covid-19 is 1,000 TIMES better at infecting humans than its closest relative found in bats because it evolved from several coronaviruses which merged together</a></strong></p>
                    <p><strong><a href="https://www.rt.com/news/530095-hospital-strike-france-mandatory-vaccine/" target="_blank" rel="noopener">French hospital goes on INDEFINITE strike to protest Covid-19 vaccination mandate</a></strong></p>
                    <p><strong><a href="https://swprs.org/covid-vaccines-the-good-the-bad-the-ugly/" target="_blank" rel="noopener">Covid Vaccines: The Good, The Bad, The Ugly</a></strong></p>
                    <p><strong><a href="https://swprs.org/the-latest-on-covid-vaccine-adverse-events/" target="_blank" rel="noopener">The latest on covid vaccine adverse events</a></strong></p>
                    <p><strong><a href="https://swprs.org/the-failure-of-vaccine-passports/" target="_blank" rel="noopener">The failure of “vaccine passports”</a></strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/07/boom-founder-mrna-vaccine-cdc-reporting-editing-adverse-affects-covid-vaccines-govt-suppressing-information/" target="_blank" rel="noopener">BOOM! Founder of mRNA Vaccine: CDC Is UNDER-REPORTING and EDITING Adverse Effects of COVID Vaccines — Govt. Suppressing Information! (VIDEO)</a></strong></p>
                    <p><strong><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7556907/" target="_blank" rel="noopener">Effects of the lockdown on the mental health of the general population during the COVID-19 pandemic in Italy: Results from the COMET collaborative network</a></strong></p>
                    <p><strong>U.S. Court of Appeals for the 11th Circuit&nbsp;<a href="https://bit.ly/FLvBstaydenied" target="_blank" rel="noopener">enjoining the Centers for Disease Control &amp; Prevention from enforcing its illegal Conditional Sailing Order</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/israel-to-impose-vaccine-passports-for-many-events_3916320.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-07-24-2&amp;mktids=f3c8d197320aeb42db57e1fe60c8d9fe&amp;est=wMibaPysr0HmNOCkh6Xtj5wf%2FF7kY2U5mu6vkJENWXEH3D%2F5rT60apjpbYa9yIXz" target="_blank" rel="noopener">Israel to Impose Vaccine Passports for Many Events</a></strong></p>
                    <p><strong><a href="https://humansarefree.com/2021/07/data-shows-84-percent-of-new-covid-cases-are-vaccinated.html" target="_blank" rel="noopener">Sen. Ron Johnson: Data From Israel Shows 84% Of New COVID Cases Are Vaccinated Individuals</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/bombshell-lawsuit-govt-whistleblower-says-coronavirus-vaccine-deaths-at-least-45000" target="_blank" rel="noopener">Bombshell lawsuit: Gov’t whistleblower says coronavirus vaccine deaths at least 45,000</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/bombshell-lawsuit-govt-whistleblower-says-coronavirus-vaccine-deaths-at-least-45000" target="_blank" rel="noopener">‘I queried data … and have assessed that the deaths occurring within 3 days of vaccination are higher than those reported in VAERS by a factor of at least 5. This would indicate the true number of vaccine-related deaths was at least 45,000.’</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/47-studies-confirm-inefectiveness-of-masks-for-covid-and-32-more-confirm-their-negative-health-effects" target="_blank" rel="noopener">47 studies confirm ineffectiveness of masks for Covid and 32 more confirm their negative health effects</a></strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-9820449/NYC-mayor-asks-private-employers-impose-vaccine-mandates-immediately.html" target="_blank" rel="noopener">NYC Mayor Bill de Blasio asks ALL private employers to impose vaccine mandates ‘immediately’ and ‘do the maximum you feel you can do’</a></strong></p>
                    <p><strong><a href="https://academic.oup.com/ofid/advance-article/doi/10.1093/ofid/ofab358/6316214" target="_blank" rel="noopener">Meta-analysis of randomized trials of ivermectin to treat SARS-CoV-2 infection</a></strong></p>
                    <p><strong><a href="https://www.zerohedge.com/political/thousands-join-anti-lockdown-protests-australia-amid-new-restrictions?utm_campaign=&amp;utm_content=Zerohedge%3A+The+Durden+Dispatch&amp;utm_medium=email&amp;utm_source=zh_newsletter" target="_blank" rel="noopener">Protesters Rage Across Europe As Lockdown, Vaccination Mandates Begin</a></strong></p>
                    <p><strong><a href="https://www.israelnationalnews.com/News/News.aspx/310522" target="_blank" rel="noopener">Journalist Oshrat Kotler: As a minority, why should the unvaccinated lack rights?</a></strong></p>
                    <p><strong><a href="https://www.israelnationalnews.com/News/News.aspx/310522" target="_blank" rel="noopener">“There is great controversy among scientists both regarding the vaccines and regarding the method by which coronavirus&nbsp;should be managed.”</a></strong></p>
                    <p><strong><a href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1005517/Technical_Briefing_19.pdf" target="_blank" rel="noopener">SARS-CoV-2 variants of concern and variants under investigation in England Technical briefing 19</a></strong></p>
                    <p><strong><a href="https://dailysceptic.org/2021/07/25/phe-data-shows-vaccine-effectiveness-reduced-to-17-in-over-50s/" target="_blank" rel="noopener">PHE Data Shows Vaccine Effectiveness Reduced to Just 17% In Over-50s</a></strong></p>
                    <p><strong><a href="https://www.halifaxtoday.ca/nova-scotia-news/ns-reports-22-cases-of-heart-inflammation-following-mrna-covid-19-vaccines-3980622" target="_blank" rel="noopener">N.S. reports 22 cases of heart inflammation following mRNA COVID-19 vaccines</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/fauci-cdc-looking-at-changing-mask-guidelines-for-vaccinated-people_3917586.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-07-25-2&amp;mktids=4133784ffa94a5bf8040a14dd50a51ec&amp;est=zeQQ%2BgAL1hL1P%2BPkhGHf32wXFlSx01%2FDE7MmurUUER%2Bqh%2FMpxgFEzJ46coCtIOq3" target="_blank" rel="noopener">Fauci: CDC Looking at Changing Mask Guidelines for Vaccinated People</a></strong></p>
                    <p><strong><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3245366/" target="_blank" rel="noopener">Toxicological considerations when creating nanoparticle based drugs and drug delivery systems?</a></strong></p>
                    <p><strong><a href="https://trialsitenews.com/wp-content/uploads/2021/06/Pfizer-report_Japanese-government.pdf" target="_blank" rel="noopener">Pfizer’s biodistribution study</a></strong></p>
                    <p><strong><a href="https://www.wnd.com/2021/07/top-epidemiologist-cdc-undercounting-vaccinated-covid-cases/" target="_blank" rel="noopener">Top epidemiologist: CDC undercounting vaccinated COVID cases</a></strong></p>
                    <p><strong><a href="https://newsthud.com/breaking-rand-paul-sends-criminal-referral-to-doj-accusing-fauci-of-lying/" target="_blank" rel="noopener">BREAKING: Rand Paul sends criminal referral to DOJ accusing Fauci of lying</a></strong></p>
                    <p><strong><a href="https://www.tribuneindia.com/news/nation/covid-govt-advises-cautious-use-of-remdesivir-flags-potential-harm-to-liver-kidney-111520" target="_blank" rel="noopener">Covid: Govt advises cautious use of Remdesivir; flags potential harm to liver, kidney</a></strong></p>
                    <p><strong><a href="https://www.swoknews.com/opinion/letters_to_editor/letter-to-the-editor-pandemic-based-on-fake-test-results/article_ac31b84b-955e-51b0-b77a-9268ad2d6ddc.html" target="_blank" rel="noopener">LETTER TO THE EDITOR: Pandemic based on fake test results</a></strong></p>
                    <p><strong><a href="https://www.gainesvilletimes.com/opinion/letter-editor/opinion-covid-19-cases-arent-giving-us-a-good-picture-of-whos-contagious/" target="_blank" rel="noopener">Opinion: COVID-19 cases aren’t giving us a good picture of who’s contagious</a></strong></p>
                    <p><strong><a href="https://www.washingtontimes.com/news/2020/jul/16/anthony-fauci-should-be-viewed-skepticism-and-caut/" target="_blank" rel="noopener">Anthony Fauci should be viewed with ‘skepticism and caution’</a></strong></p>
                    <p><strong><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8073853/" target="_blank" rel="noopener">Obesity as a Risk Factor for Severe COVID-19 and Complications: A Review</a></strong></p>
                    <p><strong><a href="https://consultqd.clevelandclinic.org/obesity-may-increase-risk-of-long-term-covid-19-complications/" target="_blank" rel="noopener">Obesity May Increase Risk of Long-Term COVID-19 Complications</a></strong></p>
                    <p><strong><a href="https://jamanetwork.com/journals/jama/fullarticle/2772071" target="_blank" rel="noopener">Large Meta-analysis Digs Into Obesity’s COVID-19 Risks</a></strong></p>
                    <p><strong><a href="https://ijvtpr.com/index.php/IJVTPR/article/view/23" target="_blank" rel="noopener">Worse Than the Disease? Reviewing Some Possible Unintended Consequences of the mRNA Vaccines Against COVID-19</a></strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.07.21.21260223v1" target="_blank" rel="noopener">Early multidrug treatment of SARS-CoV-2 (COVID-19) and decreased case fatality rates in Honduras</a></strong></p>
                    <p><strong><a href="https://nypost.com/2021/01/24/dr-fauci-needs-to-be-held-responsible-for-mistakes-devine/" target="_blank" rel="noopener">Dr. Fauci needs to be held responsible for COVID-19 mistakes: Devine</a></strong></p>
                    <p><strong><a href="https://nypost.com/2021/05/26/enough-of-faucis-lies-devine/" target="_blank" rel="noopener">Enough of Fauci’s lies!: Devine</a></strong></p>
                    <p><strong><a href="https://www.empr.com/home/news/acetylcysteine-treatment-for-acute-liver-failure-associated-with-remdesivir/" target="_blank" rel="noopener">Management of Remdesivir-Associated Acute Liver Failure Examined in Case Series</a></strong></p>
                    <p><strong><a href="https://prometheusshrugged.substack.com/p/who-watches-the-watchmen-faucis-noble" target="_blank" rel="noopener">Who Watches the Watchmen? – Fauci’s ‘noble lie,’ exposed</a></strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/07/megalomaniac-dr-fauci-argues-unvaccinated-people-going-cause-virus-mutate-deadly-new-variant/?utm_source=Gab&amp;utm_medium=PostTopSharingButtons&amp;utm_campaign=websitesharingbuttons" target="_blank" rel="noopener">Megalomaniac Dr. Fauci Argues Unvaccinated People Are Going to Cause the Virus to Mutate into Deadly New Variant</a></strong></p>
                    <p><strong><a href="http://www.kathydopp.info/node/66" target="_blank" rel="noopener">Israeli &amp; UK Data Show COVID vaccines do Not Reduce COVID Cases, Hospitalizations or Deaths</a></strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/health/article-9827467/Pfizer-Moderna-expand-COVID-19-vaccine-clinical-trials-children-aged-5-11.html" target="_blank" rel="noopener">Pfizer and Moderna expand their COVID-19 vaccine clinical trials in children aged 5-11 at urging of FDA</a></strong></p>
                    <p><strong><a href="https://www.americaoutloud.com/swiss-policy-analysis%e2%8f%a4vaccine-failure/" target="_blank" rel="noopener">Swiss Policy Analysis, Vaccine Failure</a></strong></p>
                    <p><strong><a href="https://roundingtheearth.substack.com/p/defining-away-vaccine-safety-signals" target="_blank" rel="noopener">Defining Away Vaccine Safety Signals</a></strong></p>
                    <p><strong><a href="https://www.abc.net.au/news/2021-07-25/nsw-records-141-local-covid-19-cases/100321564" target="_blank" rel="noopener">NSW records 141 new COVID-19 cases and two deaths</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/07/27/covid-vaccine-failure.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1ReadMore&amp;cid=20210727&amp;mid=DM947292&amp;rid=1219424107" target="_blank" rel="noopener">Signs of COVID Injection Failure Mount</a></strong></p>
                    <p><strong><a href="https://www.yahoo.com/news/cdc-says-fully-vaccinated-people-201508057.html" target="_blank" rel="noopener">CDC says fully vaccinated people spread the Delta variant and should wear masks: ‘This new science is worrisome’</a></strong></p>
                    <p><strong><a href="https://threadreaderapp.com/thread/1419713123787808812?refresh=1627326570" target="_blank" rel="noopener">Malone: the vaccine developers did not measure how much spike produced, for how long, where it goes etc.</a> one researcher has now found spike circulates for 5 months post vaccination</strong></p>
                    <p><strong><a href="https://www.wsj.com/articles/covid-treatment-delta-variant-cases-symptoms-11627312440?st=b6so5bz1vvi8jf9&amp;reflink=desktopwebshare_twitter&amp;tesla=y" target="_blank" rel="noopener">Covid Treatment Options Remain Elusive, Despite Months of Effort and Rising Delta Cases</a></strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.01.15.21249731v2.full.pdf" target="_blank" rel="noopener">SARS-CoV-2 reinfection in a cohort of 43,000 anti-body-positive individuals followed for up to 35 weeks</a></strong></p>
                    <p><strong>a large sample size from Qatar showing no benefit of vaccination in the 10% of those who elected to take the vaccine.&nbsp; Convincing support for no vaccination in COVID-19 recovered individuals.</strong></p>
                    <p><strong>We argue there has never been a case of a well-defined infection (symptoms and positive test PCR/Ag/Sequencing) develop a second infection &gt; 90 days later will symptoms and confirmatory testing PCR/Ag/Sequencing.&nbsp; All “reinfections” as in this study either had ambient antibodies positive at baseline or had a false positive PCR on&nbsp;one of the two events.</strong></p>
                    <p><strong><a href="https://www.zerohedge.com/covid-19/majority-hospitalized-covid-patients-uk-only-tested-positive-after-admission-leaked-nih" target="_blank" rel="noopener">Majority Of Hospitalized Covid Patients In UK Only Tested Positive After Admission: Leaked NHS Data</a></strong></p>
                    <p><strong><a href="https://www-aftodioikisi-gr.translate.goog/ygeia/korinthos-35chronos-pethane-mia-evdomada-meta-to-emvolio/amp/?_x_tr_sl=auto&amp;_x_tr_tl=en&amp;_x_tr_hl=en&amp;_x_tr_pto=ajax,nv,elem" target="_blank" rel="noopener">Corinth: A 35-year-old died a week after the vaccine: father wants an explanation as he pressured his son to take the vaccine</a></strong></p>
                    <p><strong><a href="https://www.eeoc.gov/laws/guidance/questions-and-answers-religious-discrimination-workplace?emci=316d83b9-2208-eb11-96f5-00155d03affc&amp;emdi=ea000000-0000-0000-0000-000000000001&amp;ceid=%7B%7BContactsEmailID%7D%7D&amp;fbclid=IwAR3fbp62746zRfMuI8KlQlk0fSoJFcRheooSAaAaVYVoIVtgSeFFJHguHBg" target="_blank" rel="noopener">Questions and Answers: Religious Discrimination in the Workplace</a></strong></p>
                    <p><strong><a href="https://abcnews.go.com/US/symptomatic-breakthrough-covid-19-infections-rare-cdc-data/story?id=79048589" target="_blank" rel="noopener">Symptomatic breakthrough COVID-19 infections rare, CDC data estimates</a></strong></p>
                    <p><strong><a href="https://abcnews.go.com/US/symptomatic-breakthrough-covid-19-infections-rare-cdc-data/story?id=79048589" target="_blank" rel="noopener">No need for mask mandates in the vaccinated</a></strong></p>
                    <p><strong>Breakthroughs are expected and represent about 0.098% of those fully vaccinated.</strong></p>
                    <p><strong><a href="https://aapsonline.org/aaps-supports-the-right-to-decline-covid-19-vaccine/" target="_blank" rel="noopener">AAPS Supports the Right to Decline COVID-19 Vaccine</a></strong></p>
                    <p><strong><a href="https://employercovidpolicy.com/reports-of-covid-19-adverse-vaccine-reactions/" target="_blank" rel="noopener">Reports of COVID-19 Adverse Vaccine Reactions</a></strong></p>
                    <p><strong><a href="http://www.kathydopp.info/COVIDinfo/COVIDSpread" target="_blank" rel="noopener">Is there Asymptomatic Spread of COVID-19?</a></strong></p>
                    <p><strong><a href="https://cf5e727d-d02d-4d71-89ff-9fe2d3ad957f.filesusr.com/ugd/adf864_c39029cd980642e48797cdb2ef965972.pdf" target="_blank" rel="noopener">COVID-19 Data Collection, Comorbidity &amp; Federal Law: A Historical Retrospective</a></strong></p>
                    <p><strong>July 17th 2020</strong></p>
                    <p><strong><a href="https://www.israelnationalnews.com/News/News.aspx/310410" target="_blank" rel="noopener">Health Min: Vaccine much less effective against Delta variant</a> Israel</strong></p>
                    <p><strong><a href="https://www.israelnationalnews.com/News/News.aspx/309762" target="_blank" rel="noopener">Natural infection vs vaccination: Which gives more protection?</a> Israel</strong></p>
                    <p><strong><a href="https://www.zerohedge.com/political/government-adviser-who-warned-200000-covid-cases-day-faces-scrutiny-after-dramatic-fall?utm_campaign=&amp;utm_content=Zerohedge%3A+The+Durden+Dispatch&amp;utm_medium=email&amp;utm_source=zh_newsletter" target="_blank" rel="noopener">Government Adviser Who Warned Of 200,000 COVID Cases A Day Faces Scrutiny After Dramatic Fall In UK Infections</a> Ferguson</strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-9805411/Anthony-Hess-spreads-Delta-Covid-strain-sixty-people-single-weekend-Los-Angeles.html" target="_blank" rel="noopener">EXCLUSIVE: I was a Covid super-spreader and the guilt is killing me: How Australian socialite gave the Delta strain to SIXTY people in a single weekend despite being fully vaccinated</a></strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-9805411/Anthony-Hess-spreads-Delta-Covid-strain-sixty-people-single-weekend-Los-Angeles.html" target="_blank" rel="noopener">This appears to be confirmed</a>&nbsp;as something that&nbsp;does indeed happen&nbsp;by the reported “super-spreading” person who (1) was fully-vaccinated, (2) infected more than 60 other people and&nbsp;(3)&nbsp;most&nbsp;of those whom he gave it to were also vaccinated.&nbsp; He&nbsp;obviously&nbsp;was an extremely-efficient emitter of virus!</strong></p>
                    <p><strong><a href="http://www.kathydopp.info/COVIDinfo/Vaccines/AdverseEvents/COVIDdeathsIncrease" target="_blank" rel="noopener">Dramatic increase in COVID Deaths coincides with COVID vaccine rollouts</a> vaccine ineffectiveness</strong></p>
                    <p><strong><a href="\Israeli,%20UK,%20&amp;%20Iceland%20Data%20Show%20COVID%20vaccines%20do%20Not%20Reduce%20COVID%20Cases,%20Hospitalizations%20or%20Deaths" target="_blank" rel="noopener">Israeli, UK, &amp; Iceland Data Show COVID vaccines do Not Reduce COVID Cases, Hospitalizations or Deaths</a> vaccine ineffectiveness</strong></p>
                    <p><strong><a href="https://www.investmentwatchblog.com/unprecedented-nhs-england-3-2-billion-tender-for-blood-clot-treatment/" target="_blank" rel="noopener">Unprecedented: NHS England £3.2 Billion tender for blood clot treatment… was 200 million a year.</a></strong></p>
                    <p><strong><a href="https://www.ons.gov.uk/peoplepopulationandcommunity/healthandsocialcare/conditionsanddiseases/bulletins/coronaviruscovid19infectionsurveycharacteristicsofpeopletestingpositiveforcovid19uk/28july2021#reinfections-of-covid-19-uk" target="_blank" rel="noopener">Coronavirus infection survey</a></strong></p>
                    <p><strong><a href="https://www.zerohedge.com/covid-19/caught-red-handed-cdc-changes-test-thresholds-virtually-eliminate-new-covid-cases-among" target="_blank" rel="noopener">Caught Red-Handed: CDC Changes Test Thresholds To Virtually Eliminate New COVID Cases Among Vaxx’d</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/07/29/covid-19-in-children.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1ReadMore&amp;cid=20210729_HL2&amp;mid=DM949200&amp;rid=1221089288" target="_blank" rel="noopener">Children Are Safe From COVID-19</a></strong></p>
                    <p><strong><a href="https://thefederalist.com/2020/10/12/cdc-study-finds-overwhelming-majority-of-people-getting-coronavirus-wore-masks/" target="_blank" rel="noopener">CDC study on masks and infection:</a> <a href="https://thefederalist.com/2020/10/12/cdc-study-finds-overwhelming-majority-of-people-getting-coronavirus-wore-masks/" target="_blank" rel="noopener">CDC Study Finds Overwhelming Majority Of People Getting Coronavirus Wore Masks</a></strong></p>
                    <p><strong><a href="https://swprs.org/face-masks-evidence/?fbclid=IwAR1pUMmqImnz5pF2iaDftP7OUx2j6GyU0PflFIkBKPNdtpX397iU7RX8OJk" target="_blank" rel="noopener">Are Face Masks Effective? The Evidence.</a></strong></p>
                    <p><strong><a href="http://anthraxvaccine.blogspot.com/" target="_blank" rel="noopener">Meryl Nass: antivaccine</a></strong></p>
                    <p><strong><a href="https://www.nytimes.com/2021/07/28/health/cdc-covid-testing-vaccine.html?smtyp=cur&amp;amp;smid=tw-nytimes" target="_blank" rel="noopener">The C.D.C. now says fully vaccinated people should get tested after exposure even if they don’t show symptoms.</a></strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/07/vaers-website-currently-offline-number-covid-vaccine-deaths-reaches-11405-listed-website/?utm_source=Email&amp;utm_medium=the-gateway-pundit&amp;utm_campaign=dailypm&amp;utm_content=daily" target="_blank" rel="noopener">OpenVAERS Website Is “Currently Offline” After Number of COVID Vaccine Deaths Reaches 11,405 as Listed on the Website</a></strong></p>
                    <p><strong><a href="https://newtube.app/The_Angry_Albertan/L6LcGgW?__cf_chl_jschl_tk__=pmd_e71920b7025e0f733435c0a49101c3dcad17205a-1627596626-0-gqNtZGzNArijcnBszQfO" target="_blank" rel="noopener">Maxime Bernier, Rodger Hodkinson</a> Truth Liberty and Justice</strong></p>
                    <p><strong><a href="https://greatgameindia.com/fda-extends-vaccine-expiry/" target="_blank" rel="noopener">FDA Extends Expiry Of J&amp;J Vaccine Again For 6 Months Fearing Unused Doses Would Become Useless</a></strong></p>
                    <p><strong><a href="https://pubmed.ncbi.nlm.nih.gov/33720905/" target="_blank" rel="noopener">A majority of uninfected adults show preexisting antibody reactivity against SARS-CoV-2</a></strong></p>
                    <p><strong><a href="https://pubmed.ncbi.nlm.nih.gov/33720905/" target="_blank" rel="noopener">DOJ’s Memo–Can Employers Mandate Vaccinations?</a></strong></p>
                    <p><strong><a href="https://rightsfreedoms.wordpress.com/2021/05/17/the-data-suggest-we-achieved-herd-immunity-before-the-vaccines-were-rolled-out/" target="_blank" rel="noopener">The Data Suggest We Achieved Herd Immunity Before the Vaccines Were Rolled&nbsp;Out</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/07/17/israel-covid-cases-surge-post-vaccination.aspx" target="_blank" rel="noopener">Highly Vaccinated Israel Has a Nagging Coronavirus Problem</a></strong></p>
                    <p><strong><a href="https://www.rollitup.org/t/delta-variant-natural-immunity-700-better-than-the-vaccine.1058953/" target="_blank" rel="noopener">Delta Variant: Natural Immunity 700% Better Than the Vaccine</a></strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.06.01.21258176v2" target="_blank" rel="noopener">Necessity of COVID-19 vaccination in previously infected individuals</a></strong></p>
                    <p><strong><a href="https://www.medpagetoday.com/infectiousdisease/covid19/92836" target="_blank" rel="noopener">Op-Ed: Quit Ignoring Natural COVID Immunity</a></strong></p>
                    <p><strong><a href="https://blog-gerard.maudrux.fr/2021/07/26/le-variant-delta-en-chiffres/" target="_blank" rel="noopener">The delta variant in figures</a></strong></p>
                    <p><strong><a href="https://drtrozzi.com/2021/06/covid-vaccines-how-dangerous-are-they/" target="_blank" rel="noopener">Covid “Vaccines”; How Dangerous are They?</a></strong></p>
                    <p><strong><a href="https://tapnewswire.com/2021/07/fully-vaccinated-people-are-65-more-likely-to-be-hospitalised-1540-more-likely-to-die-due-to-covid-19-than-people-who-are-unvaccinated-according-to-latest-public-health-england-data/" target="_blank" rel="noopener">Fully vaccinated people are 65% more likely to be hospitalised &amp; 1540% more likely to die due to Covid-19 than people who are unvaccinated according to latest Public Health England data</a></strong></p>
                    <p><strong><a href="https://www.jpost.com/health-science/coronavirus-in-israel-what-do-we-know-about-the-143-hospitalized-people-674508" target="_blank" rel="noopener">Coronavirus in Israel: What do we know about the 143 hospitalized people?</a></strong></p>
                    <p><strong><a href="https://news.gab.com/2021/07/29/important-download-covid-vaccine-religious-exemption-documents-here/" target="_blank" rel="noopener">MPORTANT: DOWNLOAD COVID VACCINE RELIGIOUS EXEMPTION DOCUMENTS HERE</a></strong></p>
                    <p><strong><a href="https://vaccinationispolitical.files.wordpress.com/2021/07/reckless-and-grossly-irresponsible-response-to-covid-19-the-uk-in-the-thick-of-it.pdf" target="_blank" rel="noopener">Reckless and grossly irresponsible response to covid-19 – the UK in the thick of it</a></strong></p>
                    <p><strong><a href="https://www.washingtonpost.com/health/2021/07/29/cdc-mask-guidance/" target="_blank" rel="noopener">‘The war has changed’: Internal CDC document urges new messaging, warns delta infections likely more severe</a></strong></p>
                    <p><strong><a href="https://threadreaderapp.com/thread/1419659586936713221.html" target="_blank" rel="noopener">PFIZERLEAK: EXPOSING THE PFIZER MANUFACTURING AND SUPPLY AGREEMENT.</a></strong></p>
                    <p><strong><a href="https://pubmed.ncbi.nlm.nih.gov/32871846/" target="_blank" rel="noopener">Ivermectin Docks to the SARS-CoV-2 Spike Receptor-binding Domain Attached to ACE2</a></strong></p>
                    <p><strong><a href="https://www.fox4news.com/news/baylor-scott-white-sues-dallas-doctor-covid-19-vaccine-skeptic-and-demands-he-stop-using-its-name" target="_blank" rel="noopener">Baylor Scott &amp; White sues COVID-19 vaccine skeptic Dallas doctor, demands he stop using its name</a></strong></p>
                    <p><strong><a href="https://www.fox4news.com/news/baylor-scott-white-sues-dallas-doctor-covid-19-vaccine-skeptic-and-demands-he-stop-using-its-name" target="_blank" rel="noopener">&nbsp;</a></strong></p>
                    <p><strong><a href="https://www.fox4news.com/news/baylor-scott-white-sues-dallas-doctor-covid-19-vaccine-skeptic-and-demands-he-stop-using-its-name" target="_blank" rel="noopener">Redshaw: CDC Says Vaccinated May Be as Likely to Spread COVID as Unvaxxed, as Reports of Serious Injuries After Vaccines Surge</a></strong></p>
                    <p><strong><a href="https://www.fox4news.com/news/baylor-scott-white-sues-dallas-doctor-covid-19-vaccine-skeptic-and-demands-he-stop-using-its-name" target="_blank" rel="noopener">VAERS data released today by the CDC showed a total of 518,770 reports of adverse events from all age groups following COVID vaccines, including 11,940 deaths and 63,102 serious injuries between Dec. 14, 2020 and July 23, 2021.&nbsp; </a></strong></p>
                    <p><strong><a href="https://www.fox4news.com/news/baylor-scott-white-sues-dallas-doctor-covid-19-vaccine-skeptic-and-demands-he-stop-using-its-name" target="_blank" rel="noopener">&nbsp;</a></strong></p>
                    <p><strong><a href="https://www.fox4news.com/news/baylor-scott-white-sues-dallas-doctor-covid-19-vaccine-skeptic-and-demands-he-stop-using-its-name" target="_blank" rel="noopener">Longitudinal analysis shows durable and broad immune memory after SARS-CoV-2 infection with persisting antibody responses and memory B and T&nbsp;cells</a></strong></p>
                    <p><strong><a href="https://www.fox4news.com/news/baylor-scott-white-sues-dallas-doctor-covid-19-vaccine-skeptic-and-demands-he-stop-using-its-name" target="_blank" rel="noopener">Dr. McCullough: 10 Reasons to Drop Vaccine Support or Mandates</a></strong></p>
                    <p><strong><a href="https://www.fox4news.com/news/baylor-scott-white-sues-dallas-doctor-covid-19-vaccine-skeptic-and-demands-he-stop-using-its-name" target="_blank" rel="noopener">In the UK SARS-CoV-2 variants of concern report June 25, 2021, of 92,056 cases of Delta, 42% were vaccinated. Fortunately, among all Delta cases, there was a 0.3% mortality as compared to the Alpha (UK) variant at 1.9%.</a></strong></p>
                    <p><strong><a href="https://www.fox4news.com/news/baylor-scott-white-sues-dallas-doctor-covid-19-vaccine-skeptic-and-demands-he-stop-using-its-name" target="_blank" rel="noopener">&nbsp;</a></strong></p>
                    <p><strong><a href="https://www.fox4news.com/news/baylor-scott-white-sues-dallas-doctor-covid-19-vaccine-skeptic-and-demands-he-stop-using-its-name" target="_blank" rel="noopener">India Delta Data Contradicts Dems’ COVID Fear/Control Campaign</a></strong></p>
                    <p><strong><a href="https://timesofindia.indiatimes.com/india/67-6-population-above-6-yrs-found-to-have-covid-antibodies-in-4th-national-serosurvey-lok-sabha-told/articleshow/84673504.cms?utm_source=LumenNews&amp;utm_medium=email" target="_blank" rel="noopener">India: 67% above 6 years old have COVID antibodies. Additionally, the survey found 85.2 percent of healthcare workers had also developed antibodies against COVID.</a></strong></p>
                    <p><strong><a href="https://timesofindia.indiatimes.com/india/67-6-population-above-6-yrs-found-to-have-covid-antibodies-in-4th-national-serosurvey-lok-sabha-told/articleshow/84673504.cms?utm_source=LumenNews&amp;utm_medium=email" target="_blank" rel="noopener">&nbsp;</a></strong></p>
                    <p><strong><a href="https://pjmedia.com/news-and-politics/victoria-taft/2021/07/29/joe-sacrifices-military-readiness-and-freedom-over-stats-showing-vaxxed-people-are-more-likely-to-die-from-bee-sting-than-covid-n1465668" target="_blank" rel="noopener">Biden Sacrifices Military Readiness Despite Stats Showing Vaxxed People More Likely to Die from Bee Sting Than COVID</a></strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-9847261/Thousands-anti-vaxxers-march-Paris-opposition-compulsory-jabs-vaccine-passports.html" target="_blank" rel="noopener">Thousands of anti-vaxxers march through Paris holding placards saying ‘we are not guinea pigs’ and ‘it is our choice’ in opposition to compulsory jabs and vaccine passports</a></strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/service-members-can-request-religious-exemptions-mandated-vaccines/" target="_blank" rel="noopener">Service Members Can Request Religious Exemptions for Mandated Vaccines. Here’s How</a>.</strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.07.31.21261387v1" target="_blank" rel="noopener">Vaccinated and unvaccinated individuals have similar viral loads in communities with a high prevalence of the SARS-CoV-2 delta variant</a></strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.07.28.21261285v1" target="_blank" rel="noopener">Impact of B.1.351 (beta) SARS-CoV-2 variant on BNT162b2 mRNA vaccine effectiveness in long-term care facilities of eastern France: a retrospective cohort study</a></strong></p>
                    <p><strong>Two B.1.351 outbreaks took place in LTCFs in which more than 70% of residents had received two doses of BNT162b2 mRNA vaccine, which included 11 cases of severe disease and six deaths among those who had received two doses. Vaccine effectiveness (95% CI) seven days after the second dose of vaccine was 49% (14-69) against any infection with B.1.351 and 86% (67-94) against severe forms of COVID-19.</strong></p>
                    <p><strong><a href="https://freedomfirstnetwork.com/2021/07/cdc-fda-faked-covid-testing-protocol-by-using-human-cells-mixed-with-common-cold-virus-fragments" target="_blank" rel="noopener">CDC, FDA Faked ‘Covid’ Testing Protocol by Using Human Cells Mixed With Common Cold Virus Fragments</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/sky-news-australia-suspended-by-youtube_3928004.html?utm_source=pushengage" target="_blank" rel="noopener">Sky News Australia Suspended by YouTube</a></strong></p>
                    <p><strong><a href="https://www.juliusruechel.com/2021/07/the-emperor-has-no-clothes-finding.html" target="_blank" rel="noopener">The Emperor Has No Clothes: Finding the Courage to Break the Spell</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_morningbrief/cdc-397-children-suffered-heart-inflammation-after-covid-19-vaccine_3928019.html?utm_source=morningbriefnoe&amp;utm_medium=email2&amp;utm_campaign=mb-2021-08-02&amp;mktids=68ded2b9354eb2ea2b4a6264ae38ec1b&amp;est=OhnM%2F7ORknkm3CkjOJD9Ndt4s4i8S0ei4vFvRQ2AzKiIvQ7KkWvhzu9eZ%2B2OH0US" target="_blank" rel="noopener">CDC: 397 Children Suffered Heart Inflammation After COVID-19 Vaccine</a></strong></p>
                    <p><strong><a href="https://threadreaderapp.com/thread/1422019735412088834.html" target="_blank" rel="noopener">Thread on how much spike protein is being made, where it is going</a></strong></p>
                    <p><strong><a href="https://www.globalresearch.ca/jaccuse-governments-worldwide-are-lying-to-you-the-people-to-the-populations-they-purportedly-serve/5750650" target="_blank" rel="noopener">’Accuse! The Gene-based “Vaccines” are Killing People. Governments Worldwide Are Lying to You the People, to the Populations They Purportedly Serve</a></strong></p>
                    <p><strong><a href="https://healthjournalism.org/blog/2019/02/breakthrough-research-reveals-parachutes-dont-prevent-death-when-jumping-from-a-plane/" target="_blank" rel="noopener">Breakthrough research reveals parachutes don’t prevent death when jumping from a plane</a></strong></p>
                    <p><strong><a href="https://employercovidpolicy.com/vaccinated-getting-covid-but-delta-cases-less-severe/" target="_blank" rel="noopener">Vaccinated Getting COVID, but Delta Cases less Severe.</a></strong></p>
                    <p><strong>What’s the point to mandating vaccinations when the virus, while more transmissible, is far less deadly, when we have reached population immunity in many areas in the country and when the risks of taking the shot are unknown, but the rewards are waning?</strong></p>
                    <p><strong>Massachusetts. 74% infections in vaccinated individuals.&nbsp;In a moment of clarity, the CDC reported that “74% of people infected in Massachusetts Covid outbreak were fully vaccinated.”&nbsp;<a href="https://www.cnbc.com/2021/07/30/cdc-study-shows-74percent-of-people-infected-in-massachusetts-covid-outbreak-were-fully-vaccinated.html" target="_blank" rel="noopener">CNBC July 30 Massachusetts Report</a></strong></p>
                    <p><strong><a href="https://abc7chicago.com/covid-breakthrough-cdc-data/10923757/" target="_blank" rel="noopener">About 99.999% of fully vaccinated Americans have not had a deadly COVID-19 breakthrough case: CDC</a></strong></p>
                    <p><strong><a href="https://www.zerohedge.com/covid-19/surgeon-fired-college-medicine-voicing-concerns-about-covid-shots-kids" target="_blank" rel="noopener">Surgeon Fired From College Of Medicine For Voicing Concerns About COVID Shots For Kids</a></strong></p>
                    <p><strong><a href="https://nypost.com/2021/07/28/why-are-health-agencies-hiding-deadly-infection-raging-in-hospitals/" target="_blank" rel="noopener">Why are health agencies hiding the deadly infection raging in hospitals?</a></strong></p>
                    <p><strong><a href="https://www.nature.com/articles/s41593-020-00771-8" target="_blank" rel="noopener">The S1 protein of SARS-CoV-2 crosses the blood–brain barrier in mice</a></strong></p>
                    <p><strong><a href="https://www.healthline.com/health-news/how-long-does-immunity-last-after-covid-19-what-we-know" target="_blank" rel="noopener">How Long Does Immunity Last After COVID-19? What We Know</a></strong></p>
                    <p><strong>The components of immunity protection include:</strong></p>
                    <p><strong>Antibodies, which are proteins that circulate in the blood and recognize foreign substances like viruses, and neutralize them.</strong></p>
                    <p><strong>Helper T cells help to recognize pathogens.</strong></p>
                    <p><strong>Killer T cells kill pathogens.</strong></p>
                    <p><strong>B cells make new antibodies when the body needs them.</strong></p>
                    <p><strong>People who recover from COVID-19 have been found to have all four of these components. However, specifics about what this means for the immune response and how long immunity lasts are not clear.</strong></p>
                    <p><strong><a href="https://www.technocracy.news/mercola-moderna-had-specific-covid-19-mrna-shot-ready-in-2019-before-pandemic-was-announced/" target="_blank" rel="noopener">Mercola: Moderna Had Specific COVID-19 mRNA Shot Ready in 2019 BEFORE Pandemic Was Announced</a></strong></p>
                    <p><strong><a href="https://www.breitbart.com/clips/2021/08/01/nih-director-collins-businesses-should-require-vaccine-credentials-for-customers/" target="_blank" rel="noopener">NIH Director Collins: Businesses Should Require Vaccine Credentials for Customers</a></strong></p>
                    <p><strong><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7978140/" target="_blank" rel="noopener">Neurological Complications of COVID-19: Guillain-Barre Syndrome Following Pfizer COVID-19 Vaccine</a></strong></p>
                    <p><strong><a href="https://whyy.org/articles/the-rarest-of-covid-vaccine-reactions-one-womans-story-of-guillain-barre/" target="_blank" rel="noopener">The rarest of COVID vaccine reactions: One woman’s story of Guillain-Barre</a></strong></p>
                    <p><strong><a href="https://joppp.biomedcentral.com/articles/10.1186/s40545-021-00326-7" target="_blank" rel="noopener">Potential&nbsp;adverse events in Japanese women who received tozinameran (BNT162b2, Pfizer-BioNTech)</a></strong></p>
                    <p><strong>In Japan, 10 fatal cases (five men and women) have been reported to date. Four of the five women died of ICH and the other died of aspiration pneumonia, whereas all five men died of causes other than stroke. This imbalance is incompatible with the mortality data on cardiovascular diseases in the National Statistics, which show no apparent disparity between sexes or between hemorrhagic and ischemic stroke. Cumulatively, our analysis reveals a disproportionately high incidence of death by ICH in Japanese women who received tozinameran, suggesting a potential association of ICH with the vaccine.</strong></p>
                    <p><strong><a href="https://www.bitchute.com/video/tAsrdxPgrmGr/" target="_blank" rel="noopener">MEXICO’S PRESIDENT WARNS: “WE MUST NOT SUBMIT TO THE DICTATES OF BIG PHARMA”</a></strong></p>
                    <p><strong><a href="https://www.biorxiv.org/content/10.1101/2021.08.01.454605v1" target="_blank" rel="noopener">The spike protein of SARS-CoV-2 induces endothelial inflammation through integrin α5β1 and NF-κB</a></strong></p>
                    <p><strong><a href="https://www.wsj.com/articles/to-mandate-or-not-to-mandate-vaccines-11627425858" target="_blank" rel="noopener">To Mandate or Not to Mandate Vaccines</a> WSJ</strong></p>
                    <p><strong><a href="https://www.zerohedge.com/geopolitical/brandon-smith-why-are-globalists-and-governments-so-desperate-100-vaccination-rates" target="_blank" rel="noopener">Brandon Smith: Why Are Globalists And Governments So Desperate For 100% Vaccination Rates?</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/08/03/coronavirus-spreading-among-the-vaccinated-in-highly-vaccinated-countries.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1HL&amp;cid=20210803&amp;mid=DM953785&amp;rid=1225419337" target="_blank" rel="noopener">Coronavirus Spreading Among the Vaccinated in Highly Vaccinated Countries</a> Mercola</strong></p>
                    <p><strong><a href="https://www.deseret.com/coronavirus/2021/7/20/22584134/whats-going-on-in-israels-outbreak-among-vaccinated-people" target="_blank" rel="noopener">A look inside Israel’s recent coronavirus outbreak</a></strong></p>
                    <p><strong><a href="https://www.deseret.com/coronavirus/2021/7/20/22584134/whats-going-on-in-israels-outbreak-among-vaccinated-people" target="_blank" rel="noopener">The first country to reach vaccine herd immunity has seen a recent rise in cases among vaccinated people. Here’s what’s going on and how vaccines are making a difference</a></strong></p>
                    <p><strong><a href="https://www.texasgopvote.com/government/rep-roy-leads-effort-get-answers-fauci-discounted-covid-treatments-and-natural-0013736" target="_blank" rel="noopener">Rep. Roy leads effort to get answers from Fauci on discounted COVID treatments and Natural Immunity</a></strong></p>
                    <p><strong><a href="https://www.walesonline.co.uk/news/uk-news/boris-johnson-faces-tory-revolt-21198569" target="_blank" rel="noopener">Boris Johnson faces Tory revolt over Covid vaccine passports</a></strong></p>
                    <p><strong><a href="https://gop-foreignaffairs.house.gov/finalcovid-19pandemicoriginsreport/" target="_blank" rel="noopener">McCaul’s Final Report: The Origins of the Global Pandemic, Including the Roles of the CCP &amp; WHO</a></strong></p>
                    <p><strong>Duke University: <a href="https://www.icandecide.org/wp-content/uploads/2021/05/Duke-Letter_2021_05_03.pdf" target="_blank" rel="noopener">The Ethics and Legality of ANY University Mandating ANY Experimental COVID-19 Vaccine for Students or Faculty</a></strong></p>
                    <p><strong><a href="https://www.thelancet.com/article/S0140-6736(20)32750-1/fulltext" target="_blank" rel="noopener">COVID-19 and the Swedish enigma</a></strong></p>
                    <p><strong><a href="https://www.francesoir.fr/societe-sante/did-gilead-company-hide-true-toxicity-veklury-c-remdesivir" target="_blank" rel="noopener">Did the Gilead company hide the true toxicity of Veklury © (remdesivir)?</a></strong></p>
                    <p><strong><a href="https://swprs.org/covid-vaccines-the-good-the-bad-the-ugly/" target="_blank" rel="noopener">Covid Vaccines: The Good, The Bad, The Ugly</a></strong></p>
                    <p><strong><a href="https://www.frontiersin.org/articles/10.3389/fimmu.2020.611337/full" target="_blank" rel="noopener">Mucosal Immunity in COVID-19: A Neglected but Critical Aspect of SARS-CoV-2 Infection</a></strong></p>
                    <p><strong><a href="https://starkmanapproved.com/the-perilous-censoring-of-dr-peter-mccullough/" target="_blank" rel="noopener">The perilous censoring of Dr. McCullough.</a></strong></p>
                    <p><strong><a href="https://www.cell.com/cell-reports-medicine/fulltext/S2666-3791(21)00203-2" target="_blank" rel="noopener">Longitudinal analysis shows durable and broad immune memory after SARS-CoV-2 infection with persisting antibody responses and memory B and T&nbsp;cells</a></strong></p>
                    <p><strong>Ending the COVID-19 pandemic will require long-lived immunity to SARS-CoV-2. Here, we evaluate 254 COVID-19 patients longitudinally up to 8&nbsp;months and find durable broad-based immune responses. SARS-CoV-2 spike binding and neutralizing antibodies exhibit a bi-phasic decay with an extended half-life of &gt;200&nbsp;days suggesting the generation of longer-lived plasma cells. SARS-CoV-2 infection also boosts antibody titers to SARS-CoV-1 and common betacoronaviruses. In addition, spike-specific IgG+ memory B cells persist, which bodes well for a rapid antibody response upon virus re-exposure or vaccination. Virus-specific CD4+ and CD8+ T&nbsp;cells are polyfunctional and maintained with an estimated half-life of 200&nbsp;days. Interestingly, CD4+ T&nbsp;cell responses equally target several SARS-CoV-2 proteins, whereas the CD8+ T&nbsp;cell responses preferentially target the nucleoprotein, highlighting the potential importance of including the nucleoprotein in future vaccines. Taken together, these results suggest that broad and effective immunity may persist long-term in recovered COVID-19 patients.</strong></p>
                    <p><strong><a href="https://leviquackenboss.substack.com/p/cdc-instructs-americans-to-avoid" target="_blank" rel="noopener">CDC instructs Americans to avoid risky travel to the highest vaccinated countries in the world</a></strong></p>
                    <p><strong><a href="https://sharylattkisson.com/2021/08/covid-19-natural-immunity-compared-to-vaccine-induced-immunity-the-definitive-summary/" target="_blank" rel="noopener">Covid-19 natural immunity compared to vaccine-induced immunity: The definitive summary</a></strong></p>
                    <p><strong><a href="https://www.biorxiv.org/content/10.1101/2021.07.28.454085v1" target="_blank" rel="noopener">SARS-CoV-2 Lambda variant exhibits higher infectivity and immune resistance</a></strong></p>
                    <p><strong><a href="https://www.theautomaticearth.com/2021/08/the-vaccines-dont-work/" target="_blank" rel="noopener">The Vaccines Don’t Work</a></strong></p>
                    <p><strong><a href="https://www.rt.com/usa/530741-cdc-vaccine-delta-study-masks/" target="_blank" rel="noopener">CDC releases study showing 3/4 Delta cases are among the vaccinated, says masks are the answer</a></strong></p>
                    <p><strong><a href="https://www.rt.com/usa/530753-white-house-cdc-guidelines-confusion/" target="_blank" rel="noopener">You’re doing it WRONG! White House Covid-19 spokesman yells at media for quoting CDC documents on Delta variant</a></strong></p>
                    <p><strong><a href="https://www.nature.com/articles/d41586-021-01442-9" target="_blank" rel="noopener">Had COVID? You’ll probably make antibodies for a lifetime</a></strong></p>
                    <p><strong>People who recover from mild COVID-19 have bone-marrow cells that can churn out antibodies for decades, although viral variants could dampen some of the protection they offer.</strong></p>
                    <p><strong><a href="https://populist.press/making-it-a-federal-hate-crime-to-criticize-fauci/?utm_source=Populist&amp;utm_medium=email&amp;utm_content=subscriber_id:254426&amp;utm_campaign=Day%20125%20s3" target="_blank" rel="noopener">Making It A ‘Federal Hate Crime’ To Criticize Fauci</a></strong></p>
                    <p><strong><a href="https://needtoknow.news/2021/08/cdc-says-74-of-delta-cases-are-among-vaccinated-which-means-the-vaccines-dont-work/" target="_blank" rel="noopener">CDC Says 74% of Delta Cases are among Vaccinated, Which Means the ‘Vaccines’ Don’t Work</a></strong></p>
                    <p><strong><a href="https://ghionjournal.com/operation-humanity-freedom/" target="_blank" rel="noopener">Operation Humanity Freedom: an Urgent Appeal to the Men and Women of the US Military to Watch Our Six</a></strong></p>
                    <p><strong><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8297981/" target="_blank" rel="noopener">Antigenic sites in SARS-CoV-2 spike RBD show molecular similarity with pathogenic antigenic determinants and harbors peptides for vaccine development</a></strong></p>
                    <p><strong><a href="https://summit.news/2021/08/03/editor-in-chief-of-germanys-top-newspaper-apologizes-for-fear-driven-covid-coverage/" target="_blank" rel="noopener">Editor-in-Chief of Germany’s Top Newspaper Apologizes For Fear-Driven COVID Coverage</a></strong></p>
                    <p><strong><a href="https://freewestmedia.com/2021/08/03/german-chief-pathologist-sounds-alarm-on-fatal-vaccine-injuries/" target="_blank" rel="noopener">German chief pathologist sounds alarm on fatal vaccine injuries</a></strong></p>
                    <p><strong><a href="https://dailysceptic.org/2021/03/27/the-diamond-princess-told-us-about-pre-existing-immunity-asymptomatic-infection-and-the-infection-fatality-rate-why-were-those-lessons-ignored/" target="_blank" rel="noopener">The Diamond Princess Told Us About Pre-Existing Immunity, Asymptomatic Infection and the Infection Fatality Rate. Why Were Those Lessons Ignored?</a></strong></p>
                    <p><strong><a href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2774102" target="_blank" rel="noopener">Household Transmission of SARS-CoV-2A Systematic Review and Meta-analysis</a></strong></p>
                    <p><strong><a href="https://pediatrics.aappublications.org/content/147/4/e2020048090" target="_blank" rel="noopener">Incidence and Secondary Transmission of SARS-CoV-2 Infections in Schools</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/opinion/735389/" target="_blank" rel="noopener">Is there asymptomatic spread of COVID-19?</a></strong></p>
                    <p><strong><a href="https://www.thelancet.com/article/S2213-2600(21)00160-0/fulltext" target="_blank" rel="noopener">Inhaled budesonide in the treatment of early COVID-19 (STOIC): a phase 2, open-label, randomised controlled trial</a></strong></p>
                    <p><strong><a href="https://www.infowars.com/posts/gibraltar-iceland-see-massive-covid-spike-despite-over-90-of-population-vaccinated/" target="_blank" rel="noopener">Gibraltar, Iceland See MASSIVE Covid Spike Despite Over 90% of Population Vaccinated</a></strong></p>
                    <p><strong><a href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1007566/S1335_Long_term_evolution_of_SARS-CoV-2.pdf" target="_blank" rel="noopener">Can we predict the limits of SARS-CoV-2 variants and their phenotypic consequences?</a></strong></p>
                    <p><strong><a href="https://www.wsj.com/articles/masks-covid-cdc-vaccination-mandate-provincetown-biden-11627940971?mod=hp_opin_pos_2" target="_blank" rel="noopener">Masks Are a Covid Distraction</a></strong></p>
                    <p><strong><a href="https://www.foxnews.com/health/covid-nih-director-parents-masks-home-kids" target="_blank" rel="noopener">NIH director backs away from suggestion that parents wear masks at home to protect kids</a></strong></p>
                    <p><strong><a href="https://www.westernjournal.com/mcdonalds-announces-masks-now-mandatory-customers-staff/" target="_blank" rel="noopener">McDonald’s Announces Masks Are Now Mandatory for All Customers, Staff</a></strong></p>
                    <p><strong><a href="https://populist.press/making-it-a-federal-hate-crime-to-criticize-fauci/?utm_source=Populist&amp;utm_medium=email&amp;utm_content=subscriber_id:254426&amp;utm_campaign=Day%20125%20s3" target="_blank" rel="noopener">Making It A ‘Federal Hate Crime’ To Criticize Fauci</a></strong></p>
                    <p><strong><a href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2780744?guestAccessKey=022ea516-40d5-4867-a099-d9eeefa6aadb&amp;utm_source=silverchair&amp;utm_medium=email&amp;utm_campaign=article_alert-jamainternalmedicine&amp;utm_content=etoc&amp;utm_term=080221" target="_blank" rel="noopener">Are SARS-CoV-2 Human Challenge Trials Ethical?</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/association-of-american-physicians-and-surgeons-dismantles-push-to-mandate-covid-vaccines-for-all/" target="_blank" rel="noopener">Association of American Physicians and Surgeons dismantles push to mandate COVID vaccines for all</a></strong></p>
                    <p><strong><a href="\Japanese%20Study%20Indicates%20Lambda%20Could%20be%20Resistant%20to%20Vaccines" target="_blank" rel="noopener">Delta:</a> <a href="\SARS-CoV-2%20Lambda%20variant%20exhibits%20higher%20infectivity%20and%20immune%20resistance" target="_blank" rel="noopener">Japanese Study Indicates Lambda Could be Resistant to Vaccines</a></strong></p>
                    <p><strong><a href="https://www.statnews.com/2021/07/21/first-opinion-podcast-ezekiel-emanuel-vaccine-mandates/" target="_blank" rel="noopener">Listen: Ezekiel Emanuel on vaccine mandates: ‘Covid might not be done with you’</a></strong></p>
                    <p><strong><a href="https://www.jpost.com/health-science/israeli-scientist-says-covid-19-could-be-treated-for-under-1day-675612" target="_blank" rel="noopener">Israeli scientist says COVID-19 could be treated for under $1/day</a></strong></p>
                    <p><strong><a href="https://www.breitbart.com/clips/2021/08/03/carlson-the-anglo-sphere-committing-suicide-collectively-australia-new-zealand-canada-u-s-u-k-are-allowing-covid-to-defeat-them/" target="_blank" rel="noopener">Carlson: The Anglo-sphere Is Committing Suicide Collectively — Australia, New Zealand, Canada, U.S., U.K. ‘Are Allowing COVID to Defeat Them’</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/white-house-covid-19-response-coordinator-its-time-to-impose-vaccine-requirements_3931439.html?utm_source=pushengage" target="_blank" rel="noopener">White House COVID-19 Response Coordinator: It’s ‘Time to Impose Vaccine Requirements’</a></strong></p>
                    <p><strong><a href="https://combatcovid.hhs.gov/i-have-covid-19-now/monoclonal-antibodies-high-risk-covid-19-positive-patients" target="_blank" rel="noopener">MONOCLONAL ANTIBODIES FOR HIGH-RISK COVID-19 POSITIVE PATIENTS</a></strong></p>
                    <p><strong><a href="https://www.mdpi.com/2227-9067/7/7/69/htm" target="_blank" rel="noopener">Multi-System Inflammatory Syndrome in Children (MIS-C) Following SARS-CoV-2 Infection: Review of Clinical Presentation, Hypothetical Pathogenesis, and Proposed Management</a></strong></p>
                    <p><strong><a href="http://www.kathydopp.info/" target="_blank" rel="noopener">Compilation of Scientific and Medical Research, Data, &amp; Reports.</a></strong></p>
                    <p><strong>“There is no justification for taking away individuals’ freedom in the guise of public safety.” – Thomas Jefferson</strong></p>
                    <p><strong><a href="https://defendingtherepublic.org/covid/" target="_blank" rel="noopener">Push back against Mandatory COVID-19 vaccinations</a></strong></p>
                    <p><strong><a href="https://jonathanturley.org/2021/08/04/baylor-professor-calls-for-prosecution-of-criticism-of-fauci-and-other-scientists-as-hate-crime/" target="_blank" rel="noopener">Baylor Professor Calls for Prosecution of Criticism of Fauci and Other Scientists as Hate Crime</a></strong></p>
                    <p><strong><a href="https://web.archive.org/web/20210803030436/https:/ocla.ca/a-letter-to-the-unvaccinated/" target="_blank" rel="noopener">A Letter to the Unvaccinated</a></strong></p>
                    <p><strong><a href="https://marilynsingletonmdjd.com/2021/08/04/the-graveyard-of-covid-19-missed-information/" target="_blank" rel="noopener">THE GRAVEYARD OF COVID-19 MISSED INFORMATION</a></strong></p>
                    <p><strong><a href="https://academic.oup.com/cid/article/71/10/2663/5842165" target="_blank" rel="noopener">Predicting Infectious Severe Acute Respiratory Syndrome Coronavirus 2 From Diagnostic Samples</a></strong></p>
                    <p><strong>Bullard: over Ct of 24, non-infectious</strong></p>
                    <p><strong><a href="https://www.cdc.gov/pcd/issues/2021/pdf/21_0123.pdf" target="_blank" rel="noopener">Underlying Medical Conditions and Severe Illness Among 540,667 Adults Hospitalized With COVID-19, March 2020–March 2021</a></strong></p>
                    <p><strong><a href="https://wwwnc.cdc.gov/eid/article/27/10/21-1427_article" target="_blank" rel="noopener">Breakthrough Infections of SARS-CoV-2 Gamma Variant in Fully Vaccinated Gold Miners, French Guiana, 2021</a></strong></p>
                    <p><strong>Small study on the gamma variant. None of those previously infected developed infection. Small numbers but impressive results.</strong></p>
                    <p><strong><a href="https://www.yalemedicine.org/news/covid-19-vaccine-comparison" target="_blank" rel="noopener">Comparing the COVID-19 Vaccines: How Are They Different?</a></strong></p>
                    <p><strong><a href="https://www.cdc.gov/mmwr/volumes/70/wr/mm7031e2.htm?s_cid=mm7031e2_w" target="_blank" rel="noopener">Outbreak of SARS-CoV-2 Infections, Including COVID-19 Vaccine Breakthrough Infections, Associated with Large Public Gatherings — Barnstable County, Massachusetts, July 2021</a></strong></p>
                    <p><strong>346 (74%) occurred in fully vaccinated persons. Testing identified the Delta variant in 90% of specimens from 133 patients. Cycle threshold values were similar among specimens from patients who were fully vaccinated and those who were not.</strong></p>
                    <p><strong><a href="https://www.npr.org/2021/07/16/1017002907/u-s-covid-deaths-are-rising-again-experts-call-it-a-pandemic-of-the-unvaccinated" target="_blank" rel="noopener">U.S. COVID Deaths Are Rising Again. Experts Call It A ‘Pandemic Of The Unvaccinated’</a></strong></p>
                    <p><strong>Recent&nbsp;<a href="https://www.cdc.gov/mmwr/volumes/70/wr/mm7031e2.htm?s_cid=mm7031e2_w" target="_blank" rel="noopener">CDC data</a>&nbsp;found that 74% of those who tested positive for Covid-19 in a Massachusetts analysis had been fully-vaccinated. Equally as troubling for those advocating vaccination-for-all: four out of five people hospitalized with Covid were fully-vaccinated. And CDC said “viral load” — indicating how able the human host is to spread Covid-19 — is about the same among the vaccinated and unvaccinated. Contrary to the&nbsp;<a href="https://www.businessinsider.com/cdc-director-data-vaccinated-people-do-not-carry-covid-19-2021-3" target="_blank" rel="noopener">infamous</a>&nbsp;misinformation by CDC Director Rochelle Walensky last May, vaccinated people can— and are— spreading Covid. (CDC officials later&nbsp;<a href="https://www.businessinsider.com/cdc-vaccination-comments-director-rochelle-walensky-2021-4" target="_blank" rel="noopener">corrected</a>&nbsp;Walensky’s false claim.)</strong></p>
                    <p><strong><a href="https://trialsitenews.com/why-so-many-americans-are-refusing-to-get-vaccinated/" target="_blank" rel="noopener">Why so many Americans are refusing to get vaccinated</a> Harvey Risch</strong></p>
                    <p><strong><a href="https://pjmedia.com/news-and-politics/rick-moran/2021/07/17/mit-study-vaccine-hesitancy-is-highly-informed-scientifically-literate-and-sophisticated-n1462591" target="_blank" rel="noopener">MIT Study: Vaccine Hesitancy Is ‘Highly Informed, Scientifically Literate,’ and ‘Sophisticated’</a></strong></p>
                    <p><strong><a href="https://www.nature.com/articles/s41598-021-95025-3#Sec2" target="_blank" rel="noopener">Rates of SARS-CoV-2 transmission and vaccination impact the fate of vaccine-resistant strains</a></strong></p>
                    <p><strong>According to research&nbsp;<a href="https://www.nature.com/articles/s41598-021-95025-3#Sec2" target="_blank" rel="noopener">published</a>&nbsp;last week in Scientific Reports, the highest risk for establishing a vaccine-resistant virus strain occurs when a large fraction of the population has already been vaccinated but the transmission is not controlled.</strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/question-everything_3892808.html" target="_blank" rel="noopener">Question everything</a> Ballan</strong></p>
                    <p><strong><a href="https://vaccinationispolitical.files.wordpress.com/2021/03/covid-19-vaccines-can-they-facilitate-the-evolution-of-more-virulent-variants.pdf" target="_blank" rel="noopener">If Covid-19 vaccines don’t prevent transmission, can they facilitate the evolution of more virulent variants?</a></strong></p>
                    <p><strong><a href="https://www.armstrongeconomics.com/wp-content/uploads/2021/07/UK-Technical_Briefing_19.pdf" target="_blank" rel="noopener">SARS-CoV-2 variants of concern and variants under investigation in England </a></strong></p>
                    <p><strong><a href="https://www.armstrongeconomics.com/wp-content/uploads/2021/07/UK-Technical_Briefing_19.pdf" target="_blank" rel="noopener">Technical briefing 19</a></strong></p>
                    <p><strong><a href="https://ghionjournal.com/fauci-nih-knew-covid-19-vaccines-could-lead-antibody-dependent-enhancement/" target="_blank" rel="noopener">The Smoking Jab: Fauci and the NIH Knew Covid-19 “Vaccines” Could Lead to Antibody-Dependent Enhancement</a></strong></p>
                    <p><strong><a href="https://sharylattkisson.com/2021/08/alert-study-heart-disorders-after-covid-19-more-common-than-cdc-reported/?utm_source=ActiveCampaign&amp;utm_medium=email&amp;utm_content=Sharyl+Attkisson+Daily+Newsletter&amp;utm_campaign=Daily+Newsletter" target="_blank" rel="noopener">(ALERT) Study: Heart disorders after Covid-19 vaccines more common than CDC reported</a></strong></p>
                    <p><strong><a href="https://www.cebm.net/covid-19/sars-cov-2-orofecal-transmission/" target="_blank" rel="noopener">SARS-CoV-2 and the Role of Orofecal Transmission: Evidence Brief</a></strong></p>
                    <p><strong><a href="https://vaccinationispolitical.files.wordpress.com/2021/08/neil-ferguson-and-andrew-pollard-sharing-a-taxi...-1.pdf" target="_blank" rel="noopener">Neil Ferguson and Andrew Pollard sharing a taxi…?</a></strong></p>
                    <p><strong><a href="https://www.americanthinker.com/blog/2021/08/timing_exposes_chinas_weaponization_of_virus.html" target="_blank" rel="noopener">Timing exposes China’s weaponization of virus</a></strong></p>
                    <p><strong><a href="https://report24.news/prof-bhakdi-korrigiert-sich-covid-19-impfreaktionen-gravierender-als-gedacht/" target="_blank" rel="noopener">Prof. Bhakdi corrects himself: COVID-19 vaccination reactions more serious than expected</a></strong></p>
                    <p><strong><a href="https://report24.news/pfizer-studie-79-geimpfter-kinder-ueber-12-jahre-entwickelten-nebenwirkungen/?fbclid=IwAR3dA02MzAP4A1DTSrNLjzILzcO1jr2jqFTqcicFg76GRkraSr7JgkABnH8" target="_blank" rel="noopener">Pfizer study: 79% of vaccinated children over 12 years of age developed side effects</a></strong></p>
                    <p><strong><a href="https://www.thepowershift.ca/open-letter?fbclid=IwAR12_IGlA-XG6ZOPfrJY9swj4GH1dV17_V-HFq30qOi1E4Ynm8Tq9qo_Rvo" target="_blank" rel="noopener">SARS-CoV-2 Criminal Malfeasance</a></strong></p>
                    <p><strong><a href="https://www.thepowershift.ca/open-letter?fbclid=IwAR12_IGlA-XG6ZOPfrJY9swj4GH1dV17_V-HFq30qOi1E4Ynm8Tq9qo_Rvo" target="_blank" rel="noopener">BY Our Public Health officials “Health Scare by Health Care” and Our Canadian Federal, Provincial and Municipal Governments</a></strong></p>
                    <p><strong><a href="https://www.theburningplatform.com/2021/08/05/media-blackout-renowned-german-pathologists-vaccine-autopsy-data-is-shocking-and-being-censored/" target="_blank" rel="noopener">Media Blackout: Renowned German Pathologist’s Vaccine Autopsy Data is Shocking… and Being Censored</a></strong></p>
                    <p><strong><a href="https://alt-market.us/why-are-globalists-and-governments-so-desperate-for-100-vaccination-rates/" target="_blank" rel="noopener">Why Are Globalists And Governments So Desperate For 100% Vaccination Rates?</a></strong></p>
                    <p><strong><a href="https://www.nature.com/articles/s41598-021-95025-3#Sec2" target="_blank" rel="noopener">Rates of SARS-CoV-2 transmission and vaccination impact the fate of vaccine-resistant strains</a></strong></p>
                    <p><strong><a href="https://academic.oup.com/ofid/article/8/7/ofab268/6282447" target="_blank" rel="noopener">Monoclonal Antibodies for Early Treatment of COVID-19 in a World of Evolving SARS-CoV-2 Mutations and Variants</a></strong></p>
                    <p><strong><a href="https://survivaldan101.com/cdc-study-three-quarters-of-new-covid-cases-are-in-vaccinated-people/" target="_blank" rel="noopener">CDC Study——Three-Quarters Of New COVID Cases Are In Vaccinated People</a></strong></p>
                    <p><strong><a href="https://defendingtherepublic.org/covid/" target="_blank" rel="noopener">Push back against Mandatory COVID-19 vaccinations</a></strong></p>
                    <p><strong><a href="https://sharylattkisson.com/2021/08/report-israel-vaccination-provides-far-less-protection-than-previous-covid-infection/?utm_source=ActiveCampaign&amp;utm_medium=email&amp;utm_content=Sharyl+Attkisson+Daily+Newsletter&amp;utm_campaign=Daily+Newsletter" target="_blank" rel="noopener">(Report) Israel: Vaccination provides ‘far less’ protection than previous Covid infection</a></strong></p>
                    <p><strong><a href="https://environicsindia.in/2021/07/09/jaipur-17-children-dead-more-than-2000-suffering-from-multi-system-inflammatory-syndrome-due-to-covid-vaccine/" target="_blank" rel="noopener">Jaipur- 17 Children Dead, More Than 2000 Suffering From Multi System Inflammatory Syndrome Due To COVID Vaccine</a> India</strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/08/09/what-will-segregated-society-look-like-for-the-unvaxxed.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1ReadMore&amp;cid=20210809Z1_NB&amp;mid=DM956106&amp;rid=1230889435" target="_blank" rel="noopener">What Will Segregated Society Look Like for the Unvaxxed?</a></strong></p>
                    <p><strong><a href="https://amp-washingtontimes-com.cdn.ampproject.org/c/s/amp.washingtontimes.com/news/2021/aug/5/biden-teams-misguided-and-deadly-covid-19-vaccine-/" target="_blank" rel="noopener">Vaccine inventor questions mandatory shot push, Biden’s Covid-19 strategy</a> Malone</strong></p>
                    <p><strong><a href="https://www.timesofisrael.com/liveblog_entry/report-14-israelis-have-caught-covid-19-despite-receiving-booster-shot/" target="_blank" rel="noopener">Report: 14 Israelis have caught COVID-19 despite receiving booster shot</a> booster</strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/08/uk-researchers-cholesterol-drug-reduces-covid-19-infection-70/" target="_blank" rel="noopener">UK Researchers: Cheap Cholesterol Drug Reduces Covid-19 Infection by 70%</a></strong></p>
                    <p><strong><a href="https://sharylattkisson.com/2021/08/exclusive-summary-covid-19-vaccine-concerns/?utm_source=ActiveCampaign&amp;utm_medium=email&amp;utm_content=Sharyl+Attkisson+Daily+Newsletter&amp;utm_campaign=Daily+Newsletter" target="_blank" rel="noopener">(UPDATED) Exclusive Summary: Covid-19 Vaccine Concerns</a> Atkinson</strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-9876581/Husband-73-wife-71-die-Covid-12-hours-other.html" target="_blank" rel="noopener">Double-vaccinated husband, 73, and wife, 71, who had been married for 50 years die of Covid within 12 hours of each other – after they spent 18 months shielding through pandemic because they both had underlying health conditions</a></strong></p>
                    <p><strong><a href="https://www.zerohedge.com/covid-19/pentagon-pulls-trigger-all-troops-ordered-get-covid-vaccine-sept15" target="_blank" rel="noopener">Pentagon Pulls Trigger: Will Order All Troops To Get COVID Vaccine By Sept.15</a></strong></p>
                    <p><strong><a href="https://trialsitenews.com/why-so-many-americans-are-refusing-to-get-vaccinated/" target="_blank" rel="noopener">Why so many Americans are refusing to get vaccinated</a></strong></p>
                    <p><strong><a href="https://www.businessinsider.com/israel-50-of-delta-variant-cases-vaccinated-severe-2021-6?op=1" target="_blank" rel="noopener">Israel says the Delta variant is infecting vaccinated people, representing as many as 50% of new cases. But they’re less severe.</a> Delta</strong></p>
                    <p><strong><a href="https://newsweek365.com/2021/07/31/233-staff-at-2-san-francisco-hospitals-test-positive-in-july/" target="_blank" rel="noopener">233 Staff at 2 San Francisco Hospitals Test Positive in July</a></strong></p>
                    <p><strong><a href="https://jamanetwork.com/journals/jama/fullarticle/2782900?utm_source=silverchair&amp;utm_campaign=jama_network&amp;utm_content=covid_weekly_highlights&amp;utm_medium=email" target="_blank" rel="noopener">Myocarditis and Pericarditis After Vaccination for COVID-19</a> Myocarditis</strong></p>
                    <p><strong><a href="https://www.cdc.gov/coronavirus/2019-ncov/global-covid-19/shielding-approach-humanitarian.html" target="_blank" rel="noopener">Interim Operational Considerations for Implementing the Shielding Approach to Prevent COVID-19 Infections in Humanitarian Settings</a></strong></p>
                    <p><strong><a href="https://pmj.bmj.com/content/early/2020/11/12/postgradmedj-2020-139065" target="_blank" rel="noopener">Short term, high-dose vitamin D supplementation for COVID-19 disease: a randomised, placebo-controlled, study (SHADE study)</a></strong></p>
                    <p><strong><a href="https://pubmed.ncbi.nlm.nih.gov/33948610/" target="_blank" rel="noopener">Longitudinal analysis shows durable and broad immune memory after SARS-CoV-2 infection with persisting antibody responses and memory B and T cells</a></strong></p>
                    <p><strong><a href="https://empowr.us/covid-19-origins-timeline/" target="_blank" rel="noopener">COVID-19 ORIGINS TIMELINE</a></strong></p>
                    <p><strong><a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2109072" target="_blank" rel="noopener">Covid-19 Breakthrough Infections in Vaccinated Health Care Workers</a> Israel</strong></p>
                    <p><strong><a href="https://hancockcountypatriots.blogspot.com/2021/08/dr-dan-stocks-presentation-to-mt-vernon.html?fbclid=IwAR1h1rV963nBsZPpk_gXWdrKrlBBpGwWZL4SeiIAu2xD6H3VkkKnRQlAlcA" target="_blank" rel="noopener">Dr. Dan Stock’s Presentation to the Mt. Vernon School Board in Indiana Over The Futility of Mask Mandates and Covid-19 Protocols</a></strong></p>
                    <p><strong><a href="https://alexberenson.substack.com/p/some-actual-news" target="_blank" rel="noopener">Berenson 300,000 adverse events from vaccine Moderna</a></strong></p>
                    <p><strong>Covid vaccine maker Moderna received 300,000 reports of side effects after vaccinations over a three-month period following the launch of its shot, according to an internal report from a company that helps Moderna manage the reports.</strong></p>
                    <p><strong><a href="https://www.covid-datascience.com/post/what-do-the-uk-data-tell-us-about-the-delta-variant-are-the-vaccines-working" target="_blank" rel="noopener">What do the UK data tell us about the Delta variant? Are the vaccines working?</a></strong></p>
                    <p><strong><a href="https://www.cdc.gov/mmwr/volumes/70/wr/mm7021e3.htm" target="_blank" rel="noopener">COVID-19 Vaccine Breakthrough Infections Reported to CDC — United States, January 1–April 30, 2021</a></strong></p>
                    <p><strong><a href="https://norwaytoday.info/news/norwegian-medicines-agency-links-13-deaths-to-vaccine-side-effects-those-who-died-were-frail-and-old/" target="_blank" rel="noopener">Norwegian Medicines Agency links 13 deaths to vaccine side effects. Those who died were frail and old</a></strong></p>
                    <p><strong><a href="https://roundingtheearth.substack.com/p/estimating-vaccine-induced-mortality-e07" target="_blank" rel="noopener">Estimating Vaccine-Induced Mortality, Part II: Isolating the Variable</a></strong></p>
                    <p><strong><a href="https://www.naturalnews.com/2021-08-08-hhs-documents-admit-the-cdc-has-never-isolated-any-covid-19-virus-global-hoax.html" target="_blank" rel="noopener">BOMBSHELL: HHS documents admit the CDC has never isolated any “covid-19 virus” … PCR tests nothing but instrument NOISE … the global HOAX is rapidly unraveling</a></strong></p>
                    <p><strong><a href="https://dailysceptic.org/2021/08/10/delta-variant-means-we-wont-reach-herd-immunity-so-lets-stop-mass-testing-experts-tell-mps/" target="_blank" rel="noopener">Vaccines Don’t Stop Transmission and Won’t Give Us Herd Immunity, So Let’s Stop Mass Testing, Experts Tell MPs</a></strong></p>
                    <p><strong><a href="https://www.ahajournals.org/doi/10.1161/CIRCRESAHA.121.318902" target="_blank" rel="noopener">SARS-CoV-2 Spike Protein Impairs Endothelial Function via Downregulation of ACE 2</a></strong></p>
                    <p><strong><a href="https://web.archive.org/web/20210810202432/https:/www.oregonlive.com/coronavirus/2021/08/health-officials-say-10-fully-vaccinated-oregonians-died-of-covid-19-in-july-correcting-previously-reported-data.html" target="_blank" rel="noopener">Health officials say 10 fully vaccinated Oregonians died of COVID-19 in July, correcting previously reported data</a></strong></p>
                    <p><strong><a href="https://www.telegraph.co.uk/news/2021/08/10/delta-variant-has-wrecked-hopes-herd-immunity-warn-scientists/" target="_blank" rel="noopener">Delta variant wrecked hopes of herd immunity</a></strong></p>
                    <p><strong><a href="https://www.naturalnews.com/2021-08-06-doctors-share-vaccine-injury-horror-stories-devastating.html" target="_blank" rel="noopener">Doctors share THEIR OWN vaccine injury horror stories, revealing that vaccines are devastating the medical profession</a></strong></p>
                    <p><strong><a href="https://www.thedesertreview.com/news/national/doctors-story-of-light-and-life-the-covid-19-darkness-overcome-part-v/article_9730fcca-f6ff-11eb-9057-d3a2e99f7a0b.htm" target="_blank" rel="noopener">Doctors’ story of Light and Life: The Covid-19 Darkness Overcome: Part V</a></strong></p>
                    <p><strong><a href="https://www.newindianexpress.com/nation/2020/may/29/icmr-writes-to-who-disagreeing-with-hcq-assessment-officials-say-international-trial-dosage-four-ti-2149702.html" target="_blank" rel="noopener">ICMR writes to WHO disagreeing with HCQ assessment, officials say international trial dosage four times higher than India</a></strong></p>
                    <p><strong><a href="https://www.foxnews.com/politics/pentagon-releases-religious-exemption-guidelines-for-bypassing-mandatory-vaccine" target="_blank" rel="noopener">Pentagon releases religious exemption guidelines for bypassing mandatory vaccine</a></strong></p>
                    <p><strong><a href="https://blog.nomorefakenews.com/2021/08/11/fda-knew-there-would-be-many-covid-cases-among-the-fully-vaccinated/" target="_blank" rel="noopener">Bombshell: FDA knew all along there would be many COVID cases among the fully vaccinated—and buried that knowledge</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/hhs-becomes-latest-federal-agency-to-mandate-covid-19-vaccines-for-workers_3945676.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-08-12-1&amp;mktids=b624d57146f719012bd749ade62569b3&amp;est=V7j%2BrofppA0crNUNG0lyVFmyMCNPS9AY%2BUPIc4f4kmFZKhfy%2FCFTEGq3De%2Fhlxpc" target="_blank" rel="noopener">HHS Becomes Latest Federal Agency to Mandate COVID-19 Vaccines for Workers</a></strong></p>
                    <p><strong><a href="https://nymag.com/intelligencer/2021/08/breakthrough-covid-19-cases-may-be-a-bigger-problem.html" target="_blank" rel="noopener">Don’t Panic, But Breakthrough Cases May Be a Bigger Problem Than You’ve Been Told</a></strong></p>
                    <p><strong><a href="https://nymag.com/intelligencer/2021/08/breakthrough-covid-19-cases-may-be-a-bigger-problem.html" target="_blank" rel="noopener">Current public-health messaging may understate the scale and risk.</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/08/12/covid-shots-drive-mutations.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1HL&amp;cid=20210812_HL2&amp;mid=DM962608&amp;rid=1233427898" target="_blank" rel="noopener">Are COVID Shots Fueling More Dangerous Mutations? Mercola</a></strong></p>
                    <p><strong><a href="https://dailysceptic.org/2021/08/06/devastating-new-data-from-phe-shows-vaccine-effectiveness-down-to-17-and-no-reduction-in-infectiousness-but-mortality-cut-by-77/" target="_blank" rel="noopener">Devastating New Data From PHE Shows Vaccine Effectiveness Down to 17% and No Reduction in Infectiousness – But Mortality Cut by 77%</a></strong></p>
                    <p><strong><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4516275/" target="_blank" rel="noopener">Imperfect Vaccination Can Enhance the Transmission of Highly Virulent Pathogens</a> Leaky</strong></p>
                    <p><strong><a href="https://www.journalofinfection.com/article/S0163-4453(21)00392-3/fulltext" target="_blank" rel="noopener">Infection-enhancing anti-SARS-CoV-2 antibodies recognize both the original Wuhan/D614G strain and Delta variants. A potential risk for mass vaccination?</a></strong></p>
                    <p><strong><a href="https://www.hiqa.ie/sites/default/files/2021-04/Advice-to-NPHET-on-face-mask-use-in-children-8-April-21.pdf" target="_blank" rel="noopener">Advice to the National Public Health Emergency Team Reduction of the minimum age for the application of mask wearing requirements and recommendations – Update to advice submitted 3 March 2021</a> Masks Ireland</strong></p>
                    <p><strong><a href="https://www.who.int/news-room/q-a-detail/q-a-children-and-masks-related-to-covid-19" target="_blank" rel="noopener">Coronavirus disease (COVID-19): Children and masks</a> World Health Organization</strong></p>
                    <p><strong><a href="https://web.archive.org/web/20210811152250/https:/www.telegraph.co.uk/global-health/science-and-disease/picture-shifting-vaccines-transmission-re-shaping-learn-live/" target="_blank" rel="noopener">The picture is shifting on vaccines and transmission, re-shaping how we ‘learn to live’ with Covid</a></strong></p>
                    <p><strong><a href="https://web.archive.org/web/20210811152250/https:/www.telegraph.co.uk/global-health/science-and-disease/picture-shifting-vaccines-transmission-re-shaping-learn-live/" target="_blank" rel="noopener">Without a vaccine that completely blocks infection and transmission, the prospect of herd immunity goes out the window</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/under-no-circumstances-should-a-recovered-patient-get-a-covid-jab-expert-md-tells-lifesite/#comment-5483597356" target="_blank" rel="noopener">‘Under no circumstances’ should a recovered patient get a COVID jab, expert MD tells LifeSite</a> McCullough</strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/harvard-epidemiologist-martin-kulldorff-on-vaccine-passports-the-delta-variant-and-the-covid-public-health-fiasco_3942556.html?utm_source=pushengage" target="_blank" rel="noopener">Harvard Epidemiologist Martin Kulldorff on Vaccine Passports, the Delta Variant, and the COVID ‘Public Health Fiasco’</a></strong></p>
                    <p><strong><a href="https://www.breitbart.com/politics/2021/08/12/report-confidential-documents-reveal-pfizer-does-not-mandate-vaccines-for-employees/" target="_blank" rel="noopener">Report: ‘Confidential’ Documents Reveal Pfizer Does Not Mandate Vaccines for Employees</a></strong></p>
                    <p><strong><a href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1009243/Technical_Briefing_20.pdf" target="_blank" rel="noopener">SARS-CoV-2 variants of concern and variants under investigation in England Technical briefing 20</a> (Public Health England)</strong></p>
                    <p><strong><a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0240287" target="_blank" rel="noopener">Facemask against viral respiratory infections among Hajj pilgrims: A challenging cluster-randomized trial</a></strong></p>
                    <p><strong><a href="https://www.journalofinfection.com/action/showPdf?pii=S0163-4453%2821%2900392-3" target="_blank" rel="noopener">Infection-enhancing anti-SARS-CoV-2 antibodies recognize both the original Wuhan/D614G strain and Delta variants. A potential risk for mass vaccination?</a></strong></p>
                    <p><strong><a href="https://www.thetimes.co.uk/article/golden-jabs-how-the-vaccine-giants-are-cashing-in-on-covid-93qgvmq0w" target="_blank" rel="noopener">Golden jabs: how the vaccine giants are cashing in on Covid</a></strong></p>
                    <p><strong><a href="https://www.thetimes.co.uk/article/golden-jabs-how-the-vaccine-giants-are-cashing-in-on-covid-93qgvmq0w" target="_blank" rel="noopener">Pharmaceutical groups have already made billions from the pandemic. Now they’re hiking prices</a></strong></p>
                    <p><strong><a href="https://www.medpagetoday.com/special-reports/exclusives/93955" target="_blank" rel="noopener">Why the U.S. Delta Wave Could Be Far Less Deadly</a></strong></p>
                    <p><strong><a href="https://www.medpagetoday.com/special-reports/exclusives/93955" target="_blank" rel="noopener">— We may see a decoupling between cases and deaths in the fourth COVID wave, experts say</a></strong></p>
                    <p><strong><a href="https://humansarefree.com/2021/08/head-of-who-admits-cchina-ordered-them-what-to-write-in-report.html" target="_blank" rel="noopener">BOOM! Head Of WHO Origin Investigation Team Admits Communist China Ordered Them What To Write In Report</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/08/15/awareness-foundation-covid-19-roundtable.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1HL&amp;cid=20210815&amp;mid=DM965361&amp;rid=1236115569" target="_blank" rel="noopener">Awareness Foundation COVID-19 Roundtable</a> Mercola</strong></p>
                    <p><strong><a href="https://www.zerohedge.com/covid-19/do-masks-work-review-evidence" target="_blank" rel="noopener">Do Masks Work? A Review Of The Evidence</a></strong></p>
                    <p><strong><a href="https://www.israelnationalnews.com/News/News.aspx/311617" target="_blank" rel="noopener">Secret agreement: Silence in exchange for additional staff</a></strong></p>
                    <p><strong><a href="https://www.israelnationalnews.com/News/News.aspx/311617" target="_blank" rel="noopener">The government promised to provide hospitals with additional staff – in exchange for complete silence, no matter what.</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/fauci-suggests-he-doesnt-trust-major-new-covid-19-vaccine-study_3949753.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-08-15-3&amp;mktids=2b6fc3429f3697c293d346372713eade&amp;est=2QbI4Z1syxxTzyKv40uXz3cA5nsnaHgFIJ8%2B15onhpeWVNbTABWW0HxoBC3FL1Ra" target="_blank" rel="noopener">Fauci Downplays New COVID-19 Vaccine Study</a></strong></p>
                    <p><strong><a href="https://vaccinedeaths.com/2021-08-13-most-patients-in-serious-condition-fully-vaccinated.html" target="_blank" rel="noopener">VACCINE FAIL: 64% of Israel’s COVID-19 patients in serious condition are fully vaccinated</a></strong></p>
                    <p><strong><a href="https://www.theblaze.com/op-ed/horowitz-are-children-in-the-hospital-for-rsv-not-covid-because-of-lockdowns" target="_blank" rel="noopener">Children getting RSV, not COVID</a>: Howorwitz</strong></p>
                    <p><strong><a href="https://www.the-scientist.com/news-opinion/scientists-reverse-engineer-mrna-sequence-of-moderna-vaccine-68640" target="_blank" rel="noopener">Scientists Reverse Engineer mRNA Sequence of Moderna Vaccine</a></strong></p>
                    <p><strong><a href="https://www.theburningplatform.com/2021/08/15/message-from-france/" target="_blank" rel="noopener">MESSAGE FROM FRANCE</a></strong></p>
                    <p><strong><a href="https://truthusa.us/world-news/majority-of-hospitalized-covid-19-patients-are-fully-vaccinated-at-israel-hospital-doctor/" target="_blank" rel="noopener">Majority of Hospitalized COVID-19 Patients are Fully Vaccinated at Israel Hospital: Doctor</a></strong></p>
                    <p><strong><a href="https://noqreport.com/2021/08/07/from-shots-to-clots-science-shows-covid-vaccines-cause-blood-clots/" target="_blank" rel="noopener">From Shots to Clots: Science Shows COVID Vaccines Cause Blood Clots</a></strong></p>
                    <p><strong><a href="https://journals.physiology.org/doi/full/10.1152/ajpcell.00224.2020" target="_blank" rel="noopener">Decoding SARS-CoV-2 hijacking of host mitochondria in COVID-19 pathogenesis</a></strong></p>
                    <p><strong><a href="https://pubmed.ncbi.nlm.nih.gov/33360731/" target="_blank" rel="noopener">Endothelial cell damage is the central part of COVID-19 and a mouse model induced by injection of the S1 subunit of the spike protein</a></strong></p>
                    <p><strong>In 13/13 brains from fatal COVID-19, pseudovirions (spike, envelope, and membrane proteins without viral RNA) were present in the endothelia of microvessels</strong></p>
                    <p><strong><a href="https://www.revolver.news/2021/08/navy-commander-warns-national-security-threat-from-mandatory-vaccination/" target="_blank" rel="noopener">Revolver Exclusive: Navy Commander Warns of National Security Threat from Mandatory Vaccination</a></strong></p>
                    <p><strong><a href="https://www.cdc.gov/vaccinesafety/concerns/concerns-history.html" target="_blank" rel="noopener">Historical Vaccine Safety Concerns</a> CDC</strong></p>
                    <p><strong><a href="https://larrysanger.org/2021/08/the-astonishing-hubris-of-a-global-experimental-vaccine/" target="_blank" rel="noopener">The Astonishing Hubris of a Global Experimental Vaccine</a></strong></p>
                    <p><strong><a href="https://www.weforum.org/agenda/2020/06/vaccine-development-barriers-coronavirus/" target="_blank" rel="noopener">5 charts that tell the story of vaccines today</a></strong></p>
                    <p><strong><a href="https://www.cnn.com/2020/09/01/health/eua-coronavirus-vaccine-history/index.html" target="_blank" rel="noopener">Past vaccine disasters show why rushing a coronavirus vaccine now would be ‘colossally stupid’</a></strong></p>
                    <p><strong><a href="https://www.timesofisrael.com/health-officials-predict-thousands-of-seriously-ill-covid-patients-within-month/" target="_blank" rel="noopener">Health officials predict thousands of seriously ill COVID patients within month</a></strong></p>
                    <p><strong><a href="https://www.news18.com/news/india/at-17-uttar-pradesh-logs-lowest-ever-daily-covid-figure-active-caseload-drops-to-419-4093550.html" target="_blank" rel="noopener">At 17, Uttar Pradesh Logs Lowest Ever Daily Covid Figure, Active Caseload Drops to 419</a></strong></p>
                    <p><strong><a href="https://www.seattletimes.com/nation-world/the-world-may-never-reach-herd-immunity-against-covid-19/" target="_blank" rel="noopener">The world may never reach herd immunity against COVID-19</a></strong></p>
                    <p><strong><a href="https://www.israelnationalnews.com/News/News.aspx/310833" target="_blank" rel="noopener">Feiglin: Those who listened to instructions are not healthier</a></strong></p>
                    <p><strong><a href="https://www.israelnationalnews.com/News/News.aspx/310833" target="_blank" rel="noopener">Former MK says he has ‘completely lost faith in the health care system,’ calls on parents not to allow their children to receive COVID shot.</a> Israel</strong></p>
                    <p><strong><a href="https://www.ahajournals.org/doi/full/10.1161/JAHA.120.019259" target="_blank" rel="noopener">Coronavirus Disease 2019 Hospitalizations Attributable to Cardiometabolic Conditions in the United States: A Comparative Risk Assessment Analysis</a></strong></p>
                    <p><strong><a href="https://drtrozzi.com/2021/08/an-open-letter-to-the-unvaccinated/" target="_blank" rel="noopener">An Open Letter Supporting the Un-injected</a> Trozzi</strong></p>
                    <p><strong><a href="https://www.intechopen.com/online-first/76246" target="_blank" rel="noopener">Vitamin D and Its Relationship with the Pathways Related to Thrombosis and Various Diseases</a></strong></p>
                    <p><strong><a href="https://www.sciencedaily.com/releases/2021/08/210816125717.htm" target="_blank" rel="noopener">Blood clotting may be the root cause of Long COVID syndrome, research shows</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/cardinal-burke-in-critical-condition-with-covid-19/?utm_source=top_news&amp;utm_campaign=usa" target="_blank" rel="noopener">Cardinal Burke in critical condition with COVID-19</a></strong></p>
                    <p><strong><a href="https://ottawacitizen.com/news/local-news/province-looking-at-mandatory-vaccine-reporting-in-health-care-not-mandatory-vaccines" target="_blank" rel="noopener">Ontario to mandate vaccine reporting in health care, schools and high-risk settings; third dose to be offered to LTC residents </a></strong></p>
                    <p><strong><a href="https://ottawacitizen.com/news/local-news/province-looking-at-mandatory-vaccine-reporting-in-health-care-not-mandatory-vaccines" target="_blank" rel="noopener">“A third dose will help to provide individuals in these groups with an improved immune response,” the Ministry of Health said in a statement.</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/08/18/covid-19-natural-immunity.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1HL&amp;cid=20210818&amp;mid=DM968326&amp;rid=1238870706" target="_blank" rel="noopener">Is Natural Immunity More Effective Than the COVID Shot?</a></strong></p>
                    <p><strong>COVID-19 gene modification injections were granted emergency use authorization at the end of December 2020, and by February 21, only 5.9% of American adults had been fully injected with two doses. Despite such a low injection rate, new “cases” had declined by 82%</strong></p>
                    <p><strong>The best explanation for a declining COVID-19 case rate appears to be natural immunity from previous infections. A study by the National Institutes of Health suggests COVID-19 prevalence was 4.8 times higher than previously thought, thanks to undiagnosed infection</strong></p>
                    <p><strong><a href="https://www.thedesertreview.com/opinion/columnists/indias-ivermectin-blackout/article_e3db8f46-f942-11eb-9eea-77d5e2519364.html" target="_blank" rel="noopener">Ivermectin Wins in India</a></strong></p>
                    <p><strong><a href="https://www.nytimes.com/live/2021/08/18/world/covid-delta-variant-vaccine?campaign_id=154&amp;emc=edit_cb_20210818&amp;instance_id=38256&amp;nl=coronavirus-briefing&amp;regi_id=29881208&amp;segment_id=66614&amp;te=1&amp;user_id=c10f93f28d8f59674159781d25af40de#israel-once-the-model-for-beating-covid-faces-a-new-surge-of-infections" target="_blank" rel="noopener">Israel, once the model for beating Covid, faces a new surge of infections.</a></strong></p>
                    <p><strong><a href="https://www.cdc.gov/vaccines/covid-19/health-departments/breakthrough-cases.html" target="_blank" rel="noopener">COVID-19 Vaccine Breakthrough Case Investigation and Reporting</a></strong></p>
                    <p><strong><a href="https://www.cdc.gov/vaccines/covid-19/health-departments/breakthrough-cases.html" target="_blank" rel="noopener">“As of May 1, 2021, CDC transitioned from monitoring all reported vaccine breakthrough cases to focus on identifying and investigating only hospitalized or fatal cases due to any cause.”</a></strong></p>
                    <p><strong><a href="https://www.cnbc.com/2021/08/18/covid-booster-shots-us-to-begin-wide-distribution-of-third-vaccine-doses-next-month.html" target="_blank" rel="noopener">U.S. will begin wide distribution of Covid booster shots next month, saying vaccine protection wanes over time</a></strong></p>
                    <p><strong><a href="https://www.johndayblog.com/2021/08/in-crosshairs.html" target="_blank" rel="noopener">In The Crosshairs</a></strong></p>
                    <p><strong><a href="https://www.johndayblog.com/2021/08/vaccines-help-delta.html" target="_blank" rel="noopener">Vaccines Help Delta</a></strong></p>
                    <p><strong><a href="https://dailyexpose.co.uk/2021/08/17/lawyers-send-open-letter-to-uk-gov-hancock-whitty-vallance-demanding-answers-on-alleged-mass-murder-in-care-homes-through-the-use-of-midazolam/" target="_blank" rel="noopener">Lawyers send open letter to UK Gov., Hancock, Whitty, &amp; Vallance demanding answers on alleged mass murder in care homes through the use of Midazolam</a></strong></p>
                    <p><strong><a href="https://www.nature.com/articles/s41564-020-00789-5.pdf" target="_blank" rel="noopener">Antibody-dependent enhancement and SARS-CoV-2 vaccines and therapies</a></strong></p>
                    <p><strong><a href="https://www.geertvandenbossche.org/post/c-19-pandemia-quo-vadis-homo-sapiens" target="_blank" rel="noopener">C-19 Pandemia: Quo vadis, homo sapiens?</a></strong></p>
                    <p><strong><a href="https://www.washingtonpost.com/nation/2021/08/19/covid-delta-variant-live-updates/#link-2LO7GM77O5FGDAYTBCKKH33CTI" target="_blank" rel="noopener">About 60 percent of those hospitalized with covid-19 in Israel are fully vaccinated, report finds</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/doctor-covid-vaccination-program-most-deadly-in-history/" target="_blank" rel="noopener">Top doctor:&nbsp;Mass&nbsp;vaccination&nbsp;program&nbsp;for COVID&nbsp;will be&nbsp;‘one of the&nbsp;most deadly’ in history&nbsp;</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/doctor-covid-vaccination-program-most-deadly-in-history/" target="_blank" rel="noopener">&nbsp;</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/doctor-covid-vaccination-program-most-deadly-in-history/" target="_blank" rel="noopener">Pre-activated antiviral innate immunity in the upper airways controls early SARS-CoV-2 infection in children</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/doctor-covid-vaccination-program-most-deadly-in-history/" target="_blank" rel="noopener">&nbsp;</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/doctor-covid-vaccination-program-most-deadly-in-history/" target="_blank" rel="noopener">Mandatory vaccination has no place in a free society – PANDA Abir </a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/doctor-covid-vaccination-program-most-deadly-in-history/" target="_blank" rel="noopener">&nbsp;</a></strong></p>
                    <p><strong><a href="https://boriquagato.substack.com/p/leaky-vaccines-super-spreads-and" target="_blank" rel="noopener">&nbsp;Leaky vaccines, super-spreads, and variant acceleration</a> Ramin</strong></p>
                    <p><strong><a href="https://www.ndm.ox.ac.uk/files/coronavirus/covid-19-infection-survey/finalfinalcombinedve20210816.pdf?ftag=YHF4eb9d17" target="_blank" rel="noopener">Impact of Delta on viral burden and vaccine effectiveness against new SARS-CoV-2 infections in the UK</a></strong></p>
                    <p><strong><a href="https://www.jhsph.edu/covid-19/articles/covid-19-vaccines-and-immunocompromised-people-fully-vaccinated-and-not-protected.html" target="_blank" rel="noopener">COVID-19 Vaccines and Immunocompromised People: Fully Vaccinated and Not&nbsp;Protected</a></strong></p>
                    <p><strong><a href="https://mynorthwest.com/3094868/rantz-uw-medicine-transplant-covid-vaccine/?" target="_blank" rel="noopener">Rantz: UW Medicine pulls heart transplant patient from list after refusing COVID vaccine</a></strong></p>
                    <p><strong><a href="https://www.timesofisrael.com/tv-14-israelis-who-got-3rd-shot-later-infected-with-covid-19/" target="_blank" rel="noopener">TV: 14 Israelis who got 3rd shot later infected with COVID-19</a></strong></p>
                    <p><strong><a href="https://finance.yahoo.com/news/1-u-probing-moderna-vaccine-033943339.html" target="_blank" rel="noopener">UPDATE 2-U.S. reviewing if Moderna shot tied to higher heart inflammation risk – Washington Post</a></strong></p>
                    <p><strong><a href="https://www.technocracy.news/will-americans-accept-no-fly-list-for-unvaccinated/" target="_blank" rel="noopener">Will Americans Accept No-Fly List For Unvaccinated?</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/judge-blocks-louisiana-medical-schools-covid-19-vaccine-mandate_3955920.html" target="_blank" rel="noopener">Judge Blocks Louisiana Medical School’s COVID-19 Vaccine Mandate</a></strong></p>
                    <p><strong><a href="https://www.reuters.com/world/us/us-probing-moderna-vaccine-increased-heart-inflammation-risk-washington-post-2021-08-20/" target="_blank" rel="noopener">U.S. reviewing if Moderna shot tied to higher heart inflammation risk – Washington Post</a></strong></p>
                    <p><strong><a href="https://www.breitbart.com/politics/2021/08/07/white-house-refuses-endorse-vaccine-mandate-migrants-released-us/" target="_blank" rel="noopener">White House Refuses to Endorse Vaccine Mandate for Migrants Released into U.S.</a></strong></p>
                    <p><strong><a href="https://www.zerohedge.com/markets/hes-pathological-liar-cornell-chemistry-professor-dave-collum-destroys-dr-fauci-lockdowns" target="_blank" rel="noopener">“He’s A Pathological Liar”: Cornell Chemistry Professor Dave Collum Unloads On Dr. Fauci And Covid Hysteria</a></strong></p>
                    <p><strong><a href="https://www.americaoutloud.com/did-the-fda-cdc-withhold-evidence-based-treatments-from-americans/" target="_blank" rel="noopener">Did the FDA &amp; CDC Withhold Evidence-based Treatments from Americans?</a></strong></p>
                    <p><strong><a href="https://www.americaoutloud.com/stop-calling-it-vaccine-hesitancy/" target="_blank" rel="noopener">Stop Calling it “Vaccine Hesitancy!”</a></strong></p>
                    <p><strong><a href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1012644/Technical_Briefing_21.pdf" target="_blank" rel="noopener">SARS-CoV-2 variants of concern and variants under investigation in England Technical briefing 21 20 August 2021</a> PHE</strong></p>
                    <p><strong><a href="https://www.americaoutloud.com/a-crisis-of-the-vaccinated-or-unvaccinated-you-decide/" target="_blank" rel="noopener">A Crisis of the Vaccinated or Unvaccinated – You Decide!</a></strong></p>
                    <p><strong><a href="https://www.wnd.com/2021/08/realities-dangers-vaccine-induced-blood-clots/" target="_blank" rel="noopener">The realities and dangers of vaccine-induced blood clots</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/08/21/breakthrough-cases-and-vaccine-passports.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1HL&amp;cid=20210821_HL2&amp;mid=DM971080&amp;rid=1241609088" target="_blank" rel="noopener">Joe Rogan on Breakthrough Cases and Vaccine Passports</a></strong></p>
                    <p><strong><a href="https://www.spectator.co.uk/article/The-Covid-vaccines-may-affect-periods.-Are-we-allowed-to-talk-about-this" target="_blank" rel="noopener">The Covid vaccines may affect periods. Are we allowed to talk&nbsp;about this?</a></strong></p>
                    <p><strong><a href="https://covidcalltohumanity.org/2021/08/19/indias-uttar-pradesh-moving-towards-being-covid-free-ivermectin-central-to-virus-control/" target="_blank" rel="noopener">India’s Uttar Pradesh moving towards being covid-free, Ivermectin central to virus control</a></strong></p>
                    <p><strong><a href="https://roundingtheearth.substack.com/p/arguments-against-vaccine-induced" target="_blank" rel="noopener">Arguments Against Vaccine-Induced Mortality: Wrong Answers Only</a></strong></p>
                    <p><strong><a href="https://www.watchdognews.org/healthcare-providers-less-eager-to-institute-covid-vaccine-mandates/" target="_blank" rel="noopener">Healthcare Providers Less Eager to Institute COVID Vaccine Mandates</a></strong></p>
                    <p><strong><a href="https://www.globalresearch.ca/15472-dead-1-5-million-injured-50-serious-reported-european-union-database-adverse-drug-reactions-covid-19-shots/5748346" target="_blank" rel="noopener">15,472 Dead 1.5 Million Injured (50% Serious) Reported in European Union’s Database of Adverse Drug Reactions for COVID-19 Shots</a> Europe EudraVigilance June 2021</strong></p>
                    <p><strong><a href="https://www.fda.gov/media/144434/download" target="_blank" rel="noopener">Vaccines and Related Biological Products Advisory Committee Meeting December 17, 2020 FDA Briefing Document Moderna COVID-19 Vaccine</a> EUA Moderna</strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/08/22/microbiologist-explains-covid-jab-effects.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1HL&amp;cid=20210822_HL2&amp;mid=DM971940&amp;rid=1242502362" target="_blank" rel="noopener">Microbiologist Explains COVID Jab Effects</a> Mercola</strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.08.19.21262111v1.full.pdf" target="_blank" rel="noopener">Large-scale study of antibody titer decay following BNT162b2 mRNA vaccine or SARS-CoV-2 infection</a></strong></p>
                    <p><strong>This study demonstrates individuals who received the Pfizer-BioNTech mRNA vaccine have different kinetics of antibody levels compared to patients who had been infected with the SARS-CoV-2 virus, with higher initial levels but a much faster exponential decreases in the first group.</strong></p>
                    <p><strong>In vaccinated subjects, antibody titers decreased by up to 40% each subsequent month while in convalescents they decreased by less than 5% per month. Six months after BNT162b2 vaccination 16.1% subjects had antibody levels below the seropositivity threshold of &lt;50 AU/mL, while only 10.8% of convalescent patients were below &lt;50 AU/mL threshold after 9 months from SARS-CoV-2 infection.</strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/rev-jesse-jackson-hospitalized-with-covid-19-after-being-fully-vaccinated_3959705.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-08-22-1&amp;est=fP4MjVpnHoF9gL0AqR7TwSd6smQDr4n4CEGx8tHAW5Q4U3HPXMQyZ79B7hnQ76Lx" target="_blank" rel="noopener">Rev. Jesse Jackson Hospitalized With COVID-19 After Being Fully Vaccinated</a></strong></p>
                    <p><strong><a href="https://noqreport.com/2021/08/21/two-top-virologists-frightening-warnings-about-covid-injections-ignored-by-government-and-big-media/" target="_blank" rel="noopener">Two Top Virologists’ Frightening Warnings About Covid Injections Ignored by Government and Big Media</a></strong></p>
                    <p><strong><a href="https://www.utsouthwestern.edu/newsroom/articles/year-2021/anticoagulants-help-ill-covid-19-patients.html" target="_blank" rel="noopener">NEJM: Anticoagulants help moderately ill COVID-19 patients</a></strong></p>
                    <p><strong><a href="https://www.technocracy.news/google-and-oracle-will-track-the-vaccinated-with-incredibly-precise-tech/" target="_blank" rel="noopener">Google And Oracle Will Track The Vaccinated With ‘Incredibly Precise’ Tech</a></strong></p>
                    <p><strong><a href="https://www.studyfinds.org/face-masks-wont-stop-covid-indoors/" target="_blank" rel="noopener">Most face masks won’t stop COVID-19 indoors, study warns</a></strong></p>
                    <p><strong><a href="https://www.washingtontimes.com/news/2021/aug/22/ron-johnson-warns-fda-covid-19-vaccine-approval-sh/" target="_blank" rel="noopener">EXCLUSIVE: ‘No need to rush’: Senator warns of FDA’s shortcuts to full approval of COVID-19 vaccine</a> Senator Johnson</strong></p>
                    <p><strong><a href="https://www.westernjournal.com/cdc-releases-school-covid-transmission-study-buries-one-damning-parts/" target="_blank" rel="noopener">CDC Releases School COVID Transmission Study but Buries One of the Most Damning Parts</a></strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-9914969/Popular-blue-surgical-face-masks-NOT-stop-people-infected-COVID-19.html" target="_blank" rel="noopener">Blue surgical face masks are only 10% effective in preventing COVID infection, new study finds</a></strong></p>
                    <p><strong><a href="https://leohohmann.com/2021/08/22/trump-the-populist-is-losing-his-base-over-this-one-issue-that-increasingly-defines-the-times/#more-7238" target="_blank" rel="noopener">Trump the populist is losing his base over this one issue that increasingly defines the&nbsp;times</a></strong></p>
                    <p><strong><a href="https://drtrozzi.com/2021/06/covid-vaccines-how-dangerous-are-they/" target="_blank" rel="noopener">Covid “Vaccines”; How Dangerous are They?</a></strong></p>
                    <p><strong><a href="https://drmalcolmkendrick.org/2021/06/28/covid19-the-final-nail-in-coffin-of-medical-research/" target="_blank" rel="noopener">Covid19 – the final nail in coffin of medical&nbsp;research</a></strong></p>
                    <p><strong><a href="https://www.breitbart.com/politics/2021/08/20/nyt-masks-a-great-opportunity-for-kids-to-learn-in-school-help-conquer-nose-picking-nail-biting/" target="_blank" rel="noopener">NYT: Masks a ‘Great Opportunity’ to Help Kids Learn in School, Help Conquer Nose-Picking, Nail-Biting</a></strong></p>
                    <p><strong><a href="https://www.breitbart.com/politics/2021/08/20/nyt-masks-a-great-opportunity-for-kids-to-learn-in-school-help-conquer-nose-picking-nail-biting/" target="_blank" rel="noopener">&nbsp;</a></strong></p>
                    <p><strong><a href="https://www.thedesertreview.com/opinion/columnists/indian-bar-association-sues-who-scientist-over-ivermectin/article_f90599f8-c7be-11eb-a8dc-0b3cbb3b4dfa.html?fbclid=IwAR2D46WYsPL5o2-Us0AuhV1ocm4R7d-zxv52hWArzT5YtnEeS7BD6JY5TLM" target="_blank" rel="noopener">Indian Bar Association sues WHO scientist over Ivermectin</a></strong></p>
                    <p><strong><a href="https://ebm.bmj.com/content/early/2021/08/08/bmjebm-2021-111735" target="_blank" rel="noopener">Transparency of COVID-19 vaccine trials: decisions without data</a></strong></p>
                    <p><strong><a href="https://blogs.bmj.com/bmj/2021/06/08/why-we-petitioned-the-fda-to-refrain-from-fully-approving-any-covid-19-vaccine-this-year/" target="_blank" rel="noopener">Why we petitioned the FDA to refrain from fully approving any covid-19 vaccine this year</a></strong></p>
                    <p><strong><a href="https://www.msn.com/en-us/news/politics/donald-trump-booed-at-alabama-rally-after-encouraging-crowd-to-get-covid-19-vaccine/ar-AANArLu?ocid=uxbndlbing&amp;fbclid=IwAR1J-gm4JPnbUnESp3sWgA1Eab2TYRc4l1DMlrER1Yf82WhZ3Nmu9y7K4o0" target="_blank" rel="noopener">Donald Trump Booed at Alabama Rally After Encouraging Crowd to Get COVID-19 Vaccine</a></strong></p>
                    <p><strong><a href="https://www.sciencedirect.com/science/article/pii/S2052297521000883?via%3Dihub" target="_blank" rel="noopener">Ivermectin: a multifaceted drug of Nobel prize-honoured distinction with indicated efficacy against a new global scourge, COVID-19</a></strong></p>
                    <p><strong><a href="https://www.propublica.org/article/the-cdc-only-tracks-a-fraction-of-breakthrough-covid-19-infections-even-as-cases-surge" target="_blank" rel="noopener">The CDC Only Tracks a Fraction of Breakthrough COVID-19 Infections, Even as Cases Surge</a></strong></p>
                    <p><strong><a href="https://www.mdlinx.com/news/scientists-question-evidence-behind-u-s-covid-19-booster-shot-drive/1U3XaDZS9JKHChg6gsYAUH?show_order=1&amp;utm_campaign=malert_082321_commercial&amp;tag=Morning&amp;utm_source=iPost&amp;utm_medium=email&amp;ipost_environment=m3usainc&amp;iqs=9z2z3e497sjlqknrodc5ngm5mnd1djvn9h0sgcl2em8" target="_blank" rel="noopener">Scientists question evidence behind U.S. COVID-19 booster shot drive</a></strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/vaccinated-healthcare-workers-threat-unvaccinated-patients-co-workers/" target="_blank" rel="noopener">Study: Fully Vaccinated Healthcare Workers Carry 251 Times Viral Load, Pose Threat to Unvaccinated Patients, Co-Workers</a></strong></p>
                    <p><strong><a href="https://www.sun-sentinel.com/coronavirus/fl-ne-vaccine-linked-reactions-20210129-a354jtwy5je3tafbgvsil4a77q-story.html" target="_blank" rel="noopener">COVID vaccine reactions: People report what happens when they get the shot, from mild to major adverse effects</a></strong></p>
                    <p><strong><a href="https://www.rasmussenreports.com/public_content/lifestyle/coronavirus/nearly_a_third_of_americans_think_public_health_officials_are_lying_about_vaccine_safety" target="_blank" rel="noopener">Nearly a Third of Americans Think Public Health Officials Are Lying About Vaccine Safety</a></strong></p>
                    <p><strong><a href="https://leohohmann.com/2021/08/23/the-fascist-takeover-of-america-is-now-almost-complete/" target="_blank" rel="noopener">The fascist takeover of America is now almost&nbsp;complete</a></strong></p>
                    <p><strong><a href="https://zeroanthropology.net/2021/08/20/statement-of-non-compliance-with-mandatory-vaccination-in-canadian-universities/" target="_blank" rel="noopener">Statement of Non-Compliance with Mandatory Vaccination in Canadian&nbsp;Universities</a></strong></p>
                    <p><strong><a href="https://www.acc.org/latest-in-cardiology/articles/2021/04/01/01/42/vaccine-induced-thrombotic-thrombocytopenia-vitt-and-covid-19-vaccines" target="_blank" rel="noopener">Vaccine-induced Thrombotic Thrombocytopenia (VITT) and COVID-19 Vaccines: What Cardiovascular Clinicians Need to Know</a></strong></p>
                    <p><strong><a href="https://www.biorxiv.org/content/10.1101/2021.08.22.457114v1.full.pdf" target="_blank" rel="noopener">The SARS-CoV-2 Delta variant is poised to acquire complete resistance to wild-type spike vaccines</a></strong></p>
                    <p><strong><a href="https://trialsitenews.com/a-new-low-for-the-fda/" target="_blank" rel="noopener">A New Low for the FDA</a></strong></p>
                    <p><strong><a href="https://www.researchsquare.com/article/rs-612103/v1" target="_blank" rel="noopener">Pathogenic antibodies induced by spike proteins of COVID-19 and SARS-CoV viruses</a> Spike</strong></p>
                    <p><strong><a href="http://www.kathydopp.info/COVIDinfo/FaceMasks" target="_blank" rel="noopener">Face masks are ineffective and harmful</a></strong></p>
                    <p><strong><a href="https://www.zerohedge.com/covid-19/it-finally-peaked-delta-delta-turns-negative?utm_campaign=&amp;utm_content=Zerohedge%3A+The+Durden+Dispatch&amp;utm_medium=email&amp;utm_source=zh_newsletter" target="_blank" rel="noopener">It Finally Peaked: The Delta Of Delta Turns Negative</a></strong></p>
                    <p><strong><a href="https://townhall.com/columnists/jennybethmartin/2021/08/25/mask-mandates-n2594713" target="_blank" rel="noopener">Say ‘No’ to Covid Authoritarianism and ‘Yes’ to Freedom</a></strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.08.24.21262415v1.full.pdf" target="_blank" rel="noopener">Comparing SARS-CoV-2 natural immunity to vaccine-induced immunity: reinfections versus breakthrough infections</a> Seminal paper vaccinated vs unvaccinated Delta</strong></p>
                    <p><strong><a href="https://www.jci.org/articles/view/149236" target="_blank" rel="noopener">Group IIA secreted phospholipase A2 is associated with the pathobiology leading to COVID-19 mortality</a></strong></p>
                    <p><strong><a href="https://www.thedesertreview.com/opinion/columnists/gaslighting-ivermectin-vaccines-and-the-pandemic-for-profit/article_19f42a96-05c5-11ec-8172-d776656bad51.html" target="_blank" rel="noopener">Gaslighting Ivermectin, vaccines and the pandemic for profit</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/08/26/why-do-public-health-agencies-reject-natural-immunity.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1HL&amp;cid=20210826_HL2&amp;mid=DM975830&amp;rid=1246189328" target="_blank" rel="noopener">Why Do Public Health Agencies Reject Natural Immunity?</a> Mercola Israeli data</strong></p>
                    <p><strong><a href="https://www.newsweek.com/israel-covid-case-breakthrough-data-shows-vaccines-not-pandemic-silver-bullet-1622465" target="_blank" rel="noopener">Israel’s Grim COVID Data Suggests Vaccines Alone Won’t Stop Pandemic</a></strong></p>
                    <p><strong><a href="https://www.realclearscience.com/articles/2021/08/23/lets_stop_pretending_about_the_covid-19_vaccines_791050.html" target="_blank" rel="noopener">Let’s Stop Pretending About the Covid-19 Vaccines</a></strong></p>
                    <p><strong><a href="https://www.marketwatch.com/story/cdc-overdoses-of-ivermectin-are-rising-2021-08-26?mod=mw_latestnews&amp;mod=article_inline" target="_blank" rel="noopener">CDC: Overdoses of ivermectin are rising</a></strong></p>
                    <p><strong><a href="https://www.msn.com/en-us/health/medical/fda-urges-people-to-stop-taking-ivermectin-to-treat-covid-as-overdoses-continue-to-rise/ar-AANEbkf?ocid=msedgntp" target="_blank" rel="noopener">FDA urges people to stop taking ivermectin to treat COVID as overdoses continue to rise</a></strong></p>
                    <p><strong><a href="https://www.redvoicemedia.com/2021/08/australian-parliament-member-begs-america-to-fight-new-world-order-imminent/?fbclid=IwAR2KzOrGaNQhgbQkLPifcqkB4MgAfb_lIJYKGfIC4bxX7apggha1J0R6gEM" target="_blank" rel="noopener">Australian Parliament Member Begs America to Fight the new world order </a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/pfizer-covid-19-vaccine-linked-to-heart-inflammation-risk-in-real-world-study_3966793.html?utm_source=pushengage" target="_blank" rel="noopener">Pfizer COVID-19 Vaccine Linked to Heart Inflammation Risk in Real-World Study</a></strong></p>
                    <p><strong><a href="https://www.tga.gov.au/sites/default/files/covid-19-vaccine-pfizer-australia-comirnaty-bnt162b2-mrna-pi.pdf" target="_blank" rel="noopener">AUSTRALIAN PRODUCT INFORMATION – COMIRNATY™ (BNT162b2 [mRNA]) COVID-19 VACCINE</a></strong></p>
                    <p><strong><a href="https://academic.oup.com/cid/advance-article/doi/10.1093/cid/ciab707/6353927" target="_blank" rel="noopener">Intravenous injection of COVID-19 mRNA vaccine can induce acute myopericarditis in mouse model</a> myocarditis</strong></p>
                    <p><strong><a href="https://www.express.co.uk/news/weird/1253778/coronavirus-chinese-lab-leak-bioweapon-wuhan-institute-virolgy-francis-boyle-spt" target="_blank" rel="noopener">Coronavirus shock claim: ‘Smoking gun of Chinese lab leak’ exposed by bioweapons expert</a></strong></p>
                    <p><strong><a href="https://www.zerohedge.com/covid-19/ends-debate-israeli-study-shows-natural-immunity-13x-more-effective-vaccines-stopping" target="_blank" rel="noopener">‘This Ends The Debate’ – Israeli Study Shows Natural Immunity 13x More Effective Than Vaccines At Stopping Delta</a></strong></p>
                    <p><strong><a href="https://news.yahoo.com/calls-grow-discipline-doctors-spreading-125211081.html" target="_blank" rel="noopener">Calls Grow to Discipline Doctors Spreading Virus Misinformation</a></strong></p>
                    <p><strong><a href="https://www.sciencemag.org/news/2021/08/having-sars-cov-2-once-confers-much-greater-immunity-vaccine-no-infection-parties" target="_blank" rel="noopener">Having SARS-CoV-2 once confers much greater immunity than a vaccine—but no infection parties, please</a></strong></p>
                    <p><strong><a href="https://www.theblaze.com/op-ed/horowitz-are-pregnant-women-given-enough-informed-consent-in-the-risk-benefit-analysis-of-the-vaccine-vs-the-virus" target="_blank" rel="noopener">Are pregnant women given enough informed consent in the risk-benefit analysis of the vaccine vs. the virus.</a> Horowitz</strong></p>
                    <p><strong><a href="https://www.acpjournals.org/doi/10.7326/M21-0974" target="_blank" rel="noopener">In-Hospital Mortality in a Cohort of Hospitalized Pregnant and Nonpregnant Patients With COVID-19</a></strong></p>
                    <p><strong><a href="https://trialsitenews.com/chairman-of-tokyo-metropolitan-medical-association-declares-during-surge-time-for-ivermectin-is-now/" target="_blank" rel="noopener">Chairman of Tokyo Metropolitan Medical Association Declares During Surge, Time for Ivermectin is Now</a></strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/rfk-jr-podcast-dr-peter-mccullough-vaccines-are-failing/" target="_blank" rel="noopener">Dr. Peter McCullough Tells RFK, Jr.: ‘The Vaccines Are Failing’</a></strong></p>
                    <p><strong><a href="https://www.globalresearch.ca/soldiers-fight-back-against-military-upcoming-vaccine-mandate-filing-lawsuit-against-pentagon/5753783" target="_blank" rel="noopener">Soldiers Fight Back Against Military’s Upcoming Vaccine Mandate by Filing Lawsuit Against Pentagon</a></strong></p>
                    <p><strong><a href="https://freedomfirstnetwork.com/2021/07/cdc-fda-faked-covid-testing-protocol-by-using-human-cells-mixed-with-common-cold-virus-fragments" target="_blank" rel="noopener">CDC, FDA Faked ‘Covid’ Testing Protocol by Using Human Cells Mixed With Common Cold Virus Fragments</a></strong></p>
                    <p><strong><a href="https://www.theblaze.com/news/mother-parental-rights-custody-vaccination?utm_source=theblaze-breaking&amp;utm_medium=email&amp;utm_campaign=New-Trending-Story_WEEKEND%202021-08-28&amp;utm_term=ACTIVE%20LIST%20-%20TheBlaze%20Breaking%20News&amp;fbclid=IwAR2YWpLp6Jj-P9BaYUBZRsZliApDug1AU0DU6iw9NTFIVTR76kEb6eXHJo0" target="_blank" rel="noopener">Judge reportedly stripped mother of parental rights because she’s not vaccinated: ‘I miss my son more than anything’</a></strong></p>
                    <p><strong><a href="https://www.zerohedge.com/geopolitical/spains-supreme-court-rules-against-using-vaccine-passports-restrict-access-public?s=08" target="_blank" rel="noopener">Spain’s Supreme Court Rules Against Using Vaccine Passports To Restrict Access To Public Spaces</a></strong></p>
                    <p><strong><a href="https://www.aei.org/articles/lockdowns-dont-work/" target="_blank" rel="noopener">Lockdowns don’t work</a></strong></p>
                    <p><strong><a href="https://www.thesun.ie/news/7391228/mask-free-sweden-zero-daily-covid-deaths-delta/" target="_blank" rel="noopener">LIFE GOES ON&nbsp;</a></strong></p>
                    <p><strong><a href="https://www.thesun.ie/news/7391228/mask-free-sweden-zero-daily-covid-deaths-delta/" target="_blank" rel="noopener">Mask-free Sweden is close to ZERO daily Covid deaths as chief epidemiologist plays down fears over Delta variant</a></strong></p>
                    <p><strong><a href="https://torontosun.com/news/local-news/levy-three-prominent-docs-call-lockdowns-a-waste-of-time" target="_blank" rel="noopener">LEVY: Three prominent docs call lockdowns a waste of time</a></strong></p>
                    <p><strong><a href="https://principia-scientific.com/covid-deaths-plunge-after-mexico-city-introduces-ivermectin/" target="_blank" rel="noopener">COVID Deaths Plunge After Mexico City Introduces Ivermectin</a></strong></p>
                    <p><strong><a href="https://www.infolibre.es/noticias/politica/2021/08/14/las_garantias_constitucionales_alta_tasa_inmunizados_frenan_espana_pasaporte_covid_vacunacion_obligatoria_123562_1012.html" target="_blank" rel="noopener">The covid passport and mandatory vaccination do not penetrate in Spain due to massive punctures and the judicial brake</a></strong></p>
                    <p><strong><a href="https://www.wsj.com/articles/cdc-covid-19-coronavirus-vaccine-side-effects-hospitalization-kids-11626706868?reflink=desktopwebshare_twitter" target="_blank" rel="noopener">The Flimsy Evidence Behind the CDC’s Push to Vaccinate Children</a> Makary</strong></p>
                    <p><strong>My research team at Johns Hopkins worked with the nonprofit FAIR Health to analyze approximately 48,000 children under 18 diagnosed with Covid in health-insurance data from April to August 2020. Our report found a mortality rate of zero among children without a pre-existing medical condition such as leukemia.</strong></p>
                    <p><strong><a href="https://www.lewrockwell.com/2021/08/no_author/mrna-vaccines-the-silent-weapon/" target="_blank" rel="noopener">mRNA Vaccines: The Silent Weapon</a> Igor</strong></p>
                    <p><strong><a href="https://starkmanapproved.com/the-political-defiance-of-dr-marty-makary/" target="_blank" rel="noopener">The political defiance of Dr. Makary Johns Hopkins</a></strong></p>
                    <p><strong><a href="https://www.theblaze.com/op-ed/horowitz-15-studies-that-indicate-natural-immunity-from-prior-infection-is-more-robust-than-the-covid-vaccines" target="_blank" rel="noopener">Horowitz: 15 studies that indicate natural immunity from prior infection is more robust than the COVID vaccines</a></strong></p>
                    <p><strong><a href="https://content.blubrry.com/crusade/Pfizer_Jab_Not_FDA_Approved_218025.mp3" target="_blank" rel="noopener">THE MIKE CHURCH SHOW-THE PFIZER JAB IS NOT FDA “APPROVED” BUT NEW COVID PREVENTIONS WORK FINE! WITH DR. PETER MCCULLOUGH</a></strong></p>
                    <p><strong><a href="https://www.cnsnews.com/article/national/melanie-arter/dr-marty-makary-those-who-are-unvaccinated-pose-no-risk-vaccinated" target="_blank" rel="noopener">Dr. Marty Makary: ‘Those Who Are Unvaccinated Pose No Risk to the Vaccinated Beyond That of a Common Cold’</a></strong></p>
                    <p><strong><a href="https://www.zerohedge.com/covid-19/even-mainstream-media-now-asking-big-questions-about-covid-vaccines" target="_blank" rel="noopener">Even Mainstream Media Is Now Asking Big Questions About Covid Vaccines</a></strong></p>
                    <p><strong><a href="https://www.pandata.org/mandatory-vaccination-the-greater-evil-of-society/" target="_blank" rel="noopener">Ten reasons&nbsp;why COVID-19 vaccination should never be mandatory Ballan</a></strong></p>
                    <p><strong><a href="https://dailyexpose.co.uk/2021/08/31/2-new-york-judges-ordered-defendants-to-get-covid-19-vaccine/" target="_blank" rel="noopener">2 New York Judges Ordered Defendants to Get Covid-19 Vaccine</a></strong></p>
                    <p><strong><a href="https://bmjopen.bmj.com/content/bmjopen/11/7/e051316.full.pdf" target="_blank" rel="noopener">Fitness, strength and severity of COVID-19: a prospective register study of 1 559 187 Swedish conscripts</a></strong></p>
                    <p><strong><a href="https://www.conservativewoman.co.uk/covid-jabs-and-the-case-of-the-collapsing-athletes/" target="_blank" rel="noopener">Covid jabs and the case of the collapsing athletes</a></strong></p>
                    <p><strong><a href="https://www.zerohedge.com/covid-19/pfizer-board-member-warns-policymakers-natural-immunity-needs-be-included-covid-mandate" target="_blank" rel="noopener">Pfizer Board Member Warns Policymakers: “Natural Immunity” Needs to Be Included In COVID Mandate Plans</a></strong></p>
                    <p><strong><a href="https://www.frontiersin.org/articles/10.3389/fmed.2021.737007/full" target="_blank" rel="noopener">Severe SARS-CoV-2 Breakthrough Reinfection With Delta Variant After Recovery From Breakthrough Infection by Alpha Variant in a Fully Vaccinated Health Worker | Medicine</a></strong></p>
                    <p><strong><a href="https://www.biopharmadive.com/news/marion-gruber-phil-krause-leaving-fda/605859/" target="_blank" rel="noopener">Top FDA vaccine officials to leave agency as decision on COVID-19 boosters looms</a></strong></p>
                    <p><strong><a href="https://blog.nomorefakenews.com/2021/08/31/catherine-austin-fitts-approach-for-dealing-with-vaccine-mandates/" target="_blank" rel="noopener">Catherine Austin Fitts’ approach for dealing with vaccine mandates</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/09/01/bill-gates-vaccine-heist.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1HL&amp;cid=20210901&amp;mid=DM981436&amp;rid=1252134489" target="_blank" rel="noopener">Bill Gates and the Vaccine Heist</a></strong></p>
                    <p><strong><a href="https://www.mdpi.com/1648-9144/57/3/199/htm#B11-medicina-57-00199" target="_blank" rel="noopener">Outcome Reporting Bias in COVID-19 mRNA Vaccine Clinical Trials</a></strong></p>
                    <p><strong><a href="https://dailysceptic.org/2021/09/01/victoria-paygrounds-were-closed-to-stop-parents-meeting-not-to-stop-covid-spreading-among-children/" target="_blank" rel="noopener">Victoria Playgrounds Were Closed to Stop Parents Meeting, Not to Stop Covid Spreading Among Children</a></strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/no-one-can-force-you-pfizers-comirnaty-vaccine/" target="_blank" rel="noopener">Here’s Why No One Can Force You to Take Pfizer’s Newly ‘Approved’ Comirnaty Vaccine</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/denmark-says-it-will-remove-all-covid-19-restrictions-including-vaccine-passports_3968494.html?utm_source=pushengage" target="_blank" rel="noopener">Denmark Says It Will Remove All COVID-19 Restrictions, Including Vaccine Passports</a></strong></p>
                    <p><strong><a href="https://www.theblaze.com/op-ed/horowitz-cdc-now-admits-23-of-hospitalizations-in-june-pre-leakage-were-vaccinated" target="_blank" rel="noopener">Horowitz: CDC now admits 23% of hospitalizations in June — pre-leakage — were vaccinated</a></strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-9934397/Delta-Covid-variant-TWICE-likely-land-patients-hospital.html" target="_blank" rel="noopener">Delta Covid variant is TWICE as likely to land patients in hospital as well as being more infectious, study shows</a></strong></p>
                    <p><strong><a href="https://visionlaunch.com/more-than-a-dozen-credible-medical-studies-prove-face-masks-do-not-work-even-in-hospitals/" target="_blank" rel="noopener">More Than a Dozen Credible Medical Studies Prove Face Masks Do Not Work Even In Hospitals!</a></strong></p>
                    <p><strong><a href="https://dailyexpose.co.uk/2021/08/04/serving-notices-liability-vaccinators-criminal-trials/" target="_blank" rel="noopener">Senior UK Lawyer discusses serving notices of liability on vaccinators and potential criminal trials for Crimes against Humanity</a></strong></p>
                    <p><strong><a href="https://www.naturalnews.com/2021-08-31-arkansas-board-investigates-doctor-saving-lives-ivermectin.html" target="_blank" rel="noopener">Arkansas Medical Board investigates doctor for SAVING thousands of lives with ivermectin… because only VACCINES and ventilators are allowed</a></strong></p>
                    <p><strong><a href="https://thefederalist.com/2021/09/01/dr-scott-atlas-science-killed-itself-over-covid-19/" target="_blank" rel="noopener">Dr. Scott Atlas: Science Killed Itself Over COVID-19</a> Atlas</strong></p>
                    <p><strong><a href="https://www.foxnews.com/media/twitter-thread-fauci-cdc-contradictions" target="_blank" rel="noopener">Contradictions from Fauci, CDC throughout COVID pandemic outlined in viral Twitter thread</a></strong></p>
                    <p><strong><a href="https://fortune.com/2021/08/30/health-care-hospital-worker-shortage-vaccine-mandates-staff-retention/" target="_blank" rel="noopener">Some hospitals are foregoing vaccine mandates to avert staffing shortages</a></strong></p>
                    <p><strong><a href="https://www.cell.com/cell-reports-medicine/fulltext/S2666-3791(21)00041-0" target="_blank" rel="noopener">Serotypic evolution of measles virus is constrained by multiple co-dominant B cell epitopes on its surface glycoproteins</a></strong></p>
                    <p><strong>The data presented in the manuscript show that, to escape immunity, a disease-causing, or pathogenic, measles virus would need to generate a large set of mutations — simultaneously — affecting multiple parts of the surface proteins. Simultaneous disruption of at least five antibody targets is required before the virus starts developing resistance to the diversity of neutralizing antibodies in the bloodstream. The authors have characterized the probability of this occurrence as “vanishingly small.” Further, they found that even if a measles virus were to mutate extraordinarily and escape neutralizing antibodies in the blood of a vaccinated person, the resulting strain could not cause disease.&nbsp;&nbsp;The same is not true for Covid-19.</strong></p>
                    <p><strong><a href="https://www.ktsm.com/local/el-paso-doctors-stress-covid-19-vaccine-despite-breakthrough-cases/" target="_blank" rel="noopener">El Paso doctors stress COVID-19 vaccine despite breakthrough cases</a></strong></p>
                    <p><strong><a href="https://jamanetwork.com/journals/jama/fullarticle/2783797?guestAccessKey=6ead80fe-bf08-4d53-8c5c-607249932480" target="_blank" rel="noopener">Comparison of SARS-CoV-2 Antibody Response Following Vaccination With BNT162b2 and mRNA-1273</a></strong></p>
                    <p><strong>A study comparing individual immune responses to two major COVID-19 vaccines has shown that Moderna’s created more than double the antibodies than that of Pfizer and BioNTech.</strong></p>
                    <p><strong><a href="https://www.theguardian.com/us-news/2021/aug/31/ivermectin-covid-ohio-judge-orders-hospital?fbclid=IwAR10EIWrCn6M86remYfQhaMHpqAWTOWcaWFxF2kMCdd45CLGgfz3zi15-rk" target="_blank" rel="noopener">Judge orders hospital to treat Ohio Covid patient with ivermectin</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/why-is-covid-so-severe_3970589.html" target="_blank" rel="noopener">Why Is COVID-19 Severe for Some?</a></strong></p>
                    <p><strong><a href="https://www.washingtontimes.com/news/2021/sep/1/sorry-facebook-forced-universal-vaccinations-are-n/" target="_blank" rel="noopener">Sorry Facebook, forced universal vaccinations are not the answer</a> Malone Navarro</strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_morningbrief/whos-really-being-hospitalized_3963392.html?utm_source=morningbriefnoe&amp;utm_medium=email2&amp;utm_campaign=mb-2021-09-02&amp;mktids=103e4a8a3568d4bc6067c7183d607118&amp;est=up7EFrrrxj1JCMKGB8IOlUuFVGLHYeTxRAJkjYU80Ho9yWuK7G%2F8BICoMaVyQmKa" target="_blank" rel="noopener">Who’s Really Being Hospitalized?</a></strong></p>
                    <p><strong><a href="https://www.medpagetoday.com/infectiousdisease/covid19/86967" target="_blank" rel="noopener">Nursing Homes Shocked at ‘Insanely Wrong’ CMS Data on COVID-19</a></strong></p>
                    <p><strong><a href="https://www.wnd.com/2021/09/vaccine-passports-must-give-credit-natural-immunity/" target="_blank" rel="noopener">Vaccine ‘passports’ must give credit for natural immunity</a></strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.08.27.21262356v1.full.pdf" target="_blank" rel="noopener">COVID-19-associated hospitalizations among vaccinated and unvaccinated adults ≥18 years – COVID2 NET, 13 states, January 1 – July 24, 2021</a></strong></p>
                    <p><strong><a href="https://www.globalresearch.ca/two-top-virologists-frightening-warnings-about-covid-injections-ignored-government-big-media/5753731" target="_blank" rel="noopener">Two Top Virologists’ Frightening Warnings About COVID Injections: Ignored by Government and Big Media</a> Bossche Montagnier</strong></p>
                    <p><strong><a href="https://thelibertydaily.com/deaths-in-80-vaccinated-uk-up-tenfold-from-this-time-last-year-when-zero-were-vaccinated/" target="_blank" rel="noopener">Deaths in 80%-Vaccinated UK Up TENFOLD From This Time Last Year When Zero Were Vaccinated PHE</a></strong></p>
                    <p><strong><a href="https://www.intechopen.com/online-first/76246" target="_blank" rel="noopener">Vitamin D and Its Relationship with the Pathways Related to Thrombosis and Various Diseases</a></strong></p>
                    <p><strong><a href="https://dailysceptic.org/2021/09/02/booster-jabs-risk-permanent-state-of-lockdown-says-professor-sunetra-gupta/" target="_blank" rel="noopener">Booster Jabs Risk Permanent State of Lockdown, Says Professor Sunetra Gupta</a></strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.06.01.21258176v3" target="_blank" rel="noopener">Necessity of COVID-19 vaccination in previously infected individuals</a></strong></p>
                    <p><strong>Individuals who have had SARS-CoV-2 infection are unlikely to benefit from COVID-19 vaccination, and vaccines can be safely prioritized to those who have not been infected before.</strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-9955325/JCVI-WONT-recommend-giving-Covid-vaccine-healthy-children-aged-12-15.html" target="_blank" rel="noopener">Government health regulators WON’T recommend giving Covid vaccine to healthy children aged 12 to 15 because the virus poses such a low risk to them</a></strong></p>
                    <p><strong><a href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1014926/Technical_Briefing_22_21_09_02.pdf" target="_blank" rel="noopener">Update</a>: PHE SARS-CoV-2 variants of concern and variants under investigation in England Technical briefing # 22, published 3 September 2021, shows that 69% of deaths are in the vaccinated infected with Delta variant. <a href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1014926/Technical_Briefing_22_21_09_02.pdf" target="_blank" rel="noopener">Public Health England (PHE)</a> #22</strong></p>
                    <p><strong><a href="https://www.teaparty.org/alert-pfizer-developing-a-twice-per-day-pill-that-must-be-taken-alongside-vaccine-469109/" target="_blank" rel="noopener">ALERT: Pfizer Developing A Twice-Per-Day Pill That Must Be Taken Alongside Vaccine</a></strong></p>
                    <p><strong><a href="https://www.youtube.com/watch?v=u9B_WfI-_io" target="_blank" rel="noopener">‘Natural Immunity’ Lawsuit Over COVID-19 Vaccine Mandate Ends in Surprising Result</a></strong></p>
                    <p><strong><a href="https://dryburgh.com/wp-content/uploads/2020/12/Wodarg_Yeadon_EMA_Petition_Pfizer_Trial_FINAL_01DEC2020_signed_with_Exhibits_geschwarzt.pdf" target="_blank" rel="noopener">PETITIONER, Yeadon on COVID vaccines and pregnancy</a></strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-9951117/Israel-worlds-Covid-hotspot-0-2-population-catching-yesterday.html?ito=social-twitter_mailonline" target="_blank" rel="noopener">Israel is now the world’s Covid hotspot: Cases soar despite country’s trail-blazing vaccine roll-out – sparking fears other highly-vaccinated countries will be hit by another wave due to jabs’ waning immunity</a></strong></p>
                    <p><strong><a href="https://www.naturalnews.com/2021-09-02-former-pfizer-vp-warns-booster-shot-extermination-weapon.html" target="_blank" rel="noopener">Former Pfizer VP warns booster shot is an extermination weapon to mass murder human beings</a></strong></p>
                    <p><strong><a href="https://noqreport.com/2021/09/03/delta-variant-death-rate-among-vaccinated-over-5-times-higher-than-the-unvaccinated-in-england/" target="_blank" rel="noopener">Delta Variant Death Rate Among Vaccinated Over 5 Times HIGHER Than the Unvaccinated in England</a></strong></p>
                    <p><strong><a href="https://torontosun.com/news/provincial/over-100-ontario-youth-have-been-sent-to-hospital-for-vaccine-related-heart-problems" target="_blank" rel="noopener">More than 100 Ontario youth sent to hospital for vaccine-related heart problems: Report</a></strong></p>
                    <p><strong><a href="https://founders.org/2021/08/13/vaccine-mandates-and-the-christians-liberty-of-conscience-from-2021-to-1721-and-back-again/" target="_blank" rel="noopener">Vaccine Mandates and the Christian’s Liberty of Conscience: From 2021 to 1721 and Back Again</a></strong></p>
                    <p><strong><a href="https://dailyexpose.co.uk/2021/09/04/gps-to-be-paid-22-pound-for-every-child-they-inject-with-a-covid-19-vaccine/" target="_blank" rel="noopener">NHS document shows GP’s to be paid an additional £10 for every child they inject with a Covid-19 Vaccine on top of the £12.58 already received – &amp; Google are trying to hide it</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/09/04/why-the-who-is-a-corrupt-unhealthy-organization.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1ReadMore&amp;cid=20210904_HL2&amp;mid=DM984003&amp;rid=1255044687" target="_blank" rel="noopener">Why the WHO Is a Corrupt, Unhealthy Organization</a></strong></p>
                    <p><strong><a href="https://journals.physiology.org/doi/full/10.1152/ajplung.00223.2021" target="_blank" rel="noopener">The SARS-CoV-2 spike protein subunit S1 induces COVID-19-like acute lung injury in Κ18-hACE2 transgenic mice and barrier dysfunction in human endothelial cells</a></strong></p>
                    <p><strong><a href="https://www.nature.com/articles/d41586-021-02259-2" target="_blank" rel="noopener">Delta’s rise is fuelled by rampant spread from people who feel fine</a></strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-9955493/Lords-daughter-25-died-suddenly-falling-ill-home-headache-heatwave.html" target="_blank" rel="noopener">Toby Young’s half sister, 25, dies suddenly after complaining of a headache and falling ill at home during heatwave in London</a></strong></p>
                    <p><strong><a href="https://www.standard.co.uk/news/uk/gaia-young-lord-young-labour-dies-25-headache-cycle-b953543.html" target="_blank" rel="noopener">Tragedy as lord’s daughter, 25, dies suddenly after freak headache</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/oregon-police-and-firefighters-sue-governor-over-covid-19-vaccine-mandate_3981727.html?utm_source=newsnoe&amp;utm_medium=email&amp;utm_campaign=breaking-2021-09-04-2&amp;mktids=e6d186cc5d5c5a3aaf8981451334f09b&amp;est=n%2F0eGm0tDJoL4NGV0GJQKHtb9%2BUAX8cSsMe2hyU4Ia%2BVsYEk%2FRtNQvzBGwLx" target="_blank" rel="noopener">Oregon Police and Firefighters Sue Governor Over COVID-19 Vaccine Mandate</a></strong></p>
                    <p><strong><a href="https://www.city-journal.org/australias-crazy-covid-response" target="_blank" rel="noopener">No Liberty? No Problem</a></strong></p>
                    <p><strong><a href="https://www.city-journal.org/australias-crazy-covid-response" target="_blank" rel="noopener">Australians shrug at their government’s draconian pandemic response.</a></strong></p>
                    <p><strong><a href="https://www.city-journal.org/australias-crazy-covid-response" target="_blank" rel="noopener">&nbsp;</a></strong></p>
                    <p><strong><a href="https://www.city-journal.org/australias-crazy-covid-response" target="_blank" rel="noopener">Children and COVID: 5 Essential Points for Parents to Weigh</a></strong></p>
                    <p><strong><a href="https://www.city-journal.org/australias-crazy-covid-response" target="_blank" rel="noopener">September 3, 2021|CDC, COVID-19, Delta variant, Dr. Elizabeth Lee Vliet, Dr. Michelle Cretella, Dr. Paul Alexander, Dr. Peter McCullough, early treatment, immunity, K-12 education, masks, vaccination, vaccine</a></strong></p>
                    <p><strong><a href="https://www.city-journal.org/australias-crazy-covid-response" target="_blank" rel="noopener">&nbsp;</a></strong></p>
                    <p><strong><a href="https://www.city-journal.org/australias-crazy-covid-response" target="_blank" rel="noopener">SARS-CoV-2 variants of concern exhibit reduced sensitivity to live-virus neutralization in sera from CoronaVac vaccinees and naturally infected COVID-19 patients</a></strong></p>
                    <p><strong><a href="https://www.city-journal.org/australias-crazy-covid-response" target="_blank" rel="noopener">&nbsp;</a></strong></p>
                    <p><strong><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7907730/" target="_blank" rel="noopener">Kidney disorders as serious adverse drug reactions of remdesivir in coronavirus disease 2019: a retrospective case–noncase study</a></strong></p>
                    <p><strong><a href="https://www.gov.uk/government/news/jcvi-issues-updated-advice-on-covid-19-vaccination-of-children-aged-12-to-15" target="_blank" rel="noopener">JCVI issues updated advice on COVID-19 vaccination of children aged 12 to 15</a></strong></p>
                    <p><strong><a href="https://off-guardian.org/2020/10/05/pcr-inventor-it-doesnt-tell-you-that-you-are-sick/" target="_blank" rel="noopener">PCR Inventor: “It doesn’t tell you that you are sick”The MSM have been going all out trying to pretend this never happened, turns out it did</a></strong></p>
                    <p><strong><a href="https://jermwarfare.com/blog/mattias-desmet" target="_blank" rel="noopener">THE COVID NARRATIVE IS MASS HYPNOSIS</a></strong></p>
                    <p><strong><a href="https://noqreport.com/2021/09/04/covid-solutions-pushed-by-fauci-et-al-are-responsible-for-uncountable-deaths-and-untold-misery/" target="_blank" rel="noopener">Covid Solutions Pushed by Fauci et al Are Responsible for Uncountable Deaths and Untold Misery</a></strong></p>
                    <p><strong><a href="https://english.alarabiya.net/coronavirus/2021/09/05/Israel-s-COVID-19-adviser-calls-country-to-prepare-for-a-fourth-booster-vaccine-shot" target="_blank" rel="noopener">Israel’s COVID-19 adviser calls country to prepare for a fourth booster vaccine shot</a></strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.02.26.21252096v1" target="_blank" rel="noopener">Self-reported real-world safety and reactogenicity of COVID-19 vaccines: An international vaccine-recipient survey</a> side effects from vaccine Mathioudakis</strong></p>
                    <p><strong><a href="https://cienciaysaludnatural.com/12249-casos-de-jovenes-de-12-a-17-anos-lesionados-por-la-inyeccion-k0-b1t-en-ee-uu/" target="_blank" rel="noopener">12,249 cases of 12 to 17-year-olds injured by K0 B1T injection in the United States. Vaccine injuries</a></strong></p>
                    <p><strong><a href="https://www.americanthinker.com/articles/2021/09/floundering_fauci_demands_simple_answers_to_complex_problems.html" target="_blank" rel="noopener">Floundering Fauci Demands Simple Answers to Complex Problems</a></strong></p>
                    <p><strong><a href="https://www.medmastery.com/guide/covid-19-clinical-guide/covid-19-disease-progression" target="_blank" rel="noopener">COVID-19 disease progression</a></strong></p>
                    <p><strong><a href="https://www.theblaze.com/op-ed/horowitz-the-unmistakable-ivermectin-miracle-in-the-indian-state-of-uttar-pradesh" target="_blank" rel="noopener">Horowitz: The unmistakable ivermectin miracle in the Indian state of Uttar Pradesh</a></strong></p>
                    <p><strong><a href="https://newspunch.com/australian-state-premier-declares-all-non-vaccinated-citizens-will-be-locked-out-of-economy-freedom-only-for-vaccinated/" target="_blank" rel="noopener">Australian State Premier Declares ALL Non-Vaccinated Citizens Will Be Locked Out of Economy: “Freedom Only for Vaccinated”</a></strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.07.07.21260122v2" target="_blank" rel="noopener">Viral infection and transmission in a large, well-traced outbreak caused by the SARS-CoV-2 Delta variant</a> Li viral loads of Delta infections, when they first become PCR+, were on average ∼1000 times greater compared to A/B lineage infections during initial epidemic wave in China</strong></p>
                    <p><strong><a href="https://halturnerradioshow.com/index.php/en/news-page/world/red-cross-warning-for-those-who-got-the-covid-vax-cannot-donate" target="_blank" rel="noopener">Red Cross Warning For Those Who GOT the COVID Vax – CANNOT DONATE</a></strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.06.07.21258447v2" target="_blank" rel="noopener">Breakthrough infection with SARS-CoV-2 and its predictors among healthcare workers </a></strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.06.07.21258447v2" target="_blank" rel="noopener">in a medical college and hospital complex in Delhi, India</a> Breakthrough India vaccine</strong></p>
                    <p><strong><a href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2780557?utm_campaign=articlePDF&amp;utm_medium=articlePDFlink&amp;utm_source=articlePDF&amp;utm_content=jamainternmed.2021.2959" target="_blank" rel="noopener">Assessment of SARS-CoV-2 Reinfection 1 Year After Primary Infection in a Population in Lombardy, Italy</a></strong></p>
                    <p><strong><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4516275/" target="_blank" rel="noopener">Imperfect Vaccination Can Enhance the Transmission of Highly Virulent Pathogens</a></strong></p>
                    <p><strong><a href="https://stop-genocide.co.uk/" target="_blank" rel="noopener">COVID19 is a hoax.</a></strong></p>
                    <p><strong><a href="https://stop-genocide.co.uk/" target="_blank" rel="noopener">The vaccines will kill you. The plan is depopulation!</a></strong></p>
                    <p><strong><a href="https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(21)00475-8/fulltext" target="_blank" rel="noopener">Hospital admission and emergency care attendance risk for SARS-CoV-2 delta (B.1.617.2) compared with alpha (B.1.1.7) variants of concern: a cohort study</a></strong></p>
                    <p><strong><a href="https://www.infowars.com/posts/pfizer-is-now-developing-a-twice-per-day-covid-pill-that-must-be-taken-alongside-vaccines/" target="_blank" rel="noopener">Pfizer Is Now Developing A Twice-Per-Day COVID Pill That Must Be Taken Alongside Vaccines</a></strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.06.01.21258176v2" target="_blank" rel="noopener">Necessity of COVID-19 vaccination in previously infected individuals</a> Shrestha</strong></p>
                    <p><strong>Not one of the 1359 previously infected subjects who remained unvaccinated had a SARS-CoV-2 infection over the duration of the study.</strong></p>
                    <p><strong><a href="https://townhall.com/tipsheet/scottmorefield/2021/08/12/untitled-n2594079" target="_blank" rel="noopener">Dr. Nicole Saphier Blasts ‘Myopic’ CDC For Ignoring Natural Immunity: ‘Not Following The Science’</a> Saphier CDC</strong></p>
                    <p><strong><a href="https://citizenfreepress.com/breaking/pfizers-new-pill-to-fight-covid-utilizes-a-protease-inhibitor-ivermectin-is-also-a-protease-inhibitor/" target="_blank" rel="noopener">Pfizer’s new ‘daily pill’ to fight Covid utilizes a protease inhibitor… Ivermectin is also a protease inhibitor…</a></strong></p>
                    <p><strong><a href="https://www.theatlantic.com/ideas/archive/2021/09/school-mask-mandates-downside/619952/" target="_blank" rel="noopener">The Downsides of Masking Young Students Are Real</a></strong></p>
                    <p><strong><a href="https://www.theatlantic.com/ideas/archive/2021/09/school-mask-mandates-downside/619952/" target="_blank" rel="noopener">The educational cost of face coverings is far better established than the benefits of mandates.</a></strong></p>
                    <p><strong><a href="https://eugyppius.substack.com/p/vaccine-failure-and-the-way-out" target="_blank" rel="noopener">Vaccine Failure and the Way Out</a></strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-9959811/Israel-planning-administer-FOURTH-Covid-vaccine-adjusted-fight-new-variants.html" target="_blank" rel="noopener">Israel is planning to administer FOURTH Covid shot which could be adjusted to fight new variants as country battles wave of infections despite hugely successful vaccine roll-out</a></strong></p>
                    <p><strong><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3897733" target="_blank" rel="noopener">Transmission of SARS-CoV-2 Delta Variant Among Vaccinated Healthcare Workers, Vietnam</a></strong></p>
                    <p><strong><a href="https://theintercept.com/2021/09/06/new-details-emerge-about-coronavirus-research-at-chinese-lab/" target="_blank" rel="noopener">NEW DETAILS EMERGE ABOUT CORONAVIRUS RESEARCH AT CHINESE LAB</a></strong></p>
                    <p><strong><a href="https://www.rebelnews.com/qantas_pilot_risks_everything_to_speak_out_against_mandatory_vaccination?utm_campaign=rb_9_8_21&amp;utm_medium=email&amp;utm_source=therebel" target="_blank" rel="noopener">Qantas pilot risks everything to speak out against their new mandatory vaccination policy</a></strong></p>
                    <p><strong><a href="https://rumble.com/vm4p8h-1976-swine-flu-scandal-the-cdcs-history-of-lying-about-vaccine-dangers-and-.html" target="_blank" rel="noopener">1976 Swine Flu Scandal: The CDC’s History of Lying About Vaccine Dangers and Effectiveness</a></strong></p>
                    <p><strong><a href="https://theexpose.uk/2021/09/05/latest-phe-report-reveals-the-vaccinated-account-for-70-percent-of-covid-19-deaths-since-february/" target="_blank" rel="noopener">Pandemic of the Vaccinated – Latest PHE Report reveals the vaccinated account for 70% of Covid-19 deaths since February</a></strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/childrens-health-defense-sues-fda-pfizer-comirnaty-covid-vaccine/" target="_blank" rel="noopener">Children’s Health Defense Sues FDA Over Approval of Pfizer Comirnaty Vaccine</a></strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/childrens-health-defense-sues-fda-pfizer-comirnaty-covid-vaccine/" target="_blank" rel="noopener">The lawsuit, filed Aug. 31, alleges the U.S. Food and Drug Administration violated federal law when the agency simultaneously licensed Pfizer’s Comirnaty COVID vaccine and extended Emergency Use Authorization for the Pfizer-BioNTech vaccine.</a></strong></p>
                    <p><strong><a href="https://research-information.bris.ac.uk/ws/portalfiles/portal/260509476/2020.12.21.423721v1.full.pdf" target="_blank" rel="noopener">The SARS-CoV-2 spike protein disrupts the cooperative function of human cardiac pericytes – endothelial cells through CD147 receptor-mediated signalling: a potential non-infective mechanism of COVID-19 microvascular disease</a></strong></p>
                    <p><strong><a href="https://www.telegraph.co.uk/global-health/science-and-disease/pfizer-aims-submit-trial-data-children-aged-five-11-month/" target="_blank" rel="noopener">Pfizer aims to submit trial data for children aged five to 11 ‘this month’</a></strong></p>
                    <p><strong><a href="https://www.telegraph.co.uk/global-health/science-and-disease/pfizer-aims-submit-trial-data-children-aged-five-11-month/" target="_blank" rel="noopener">The pharma giant’s chief executive added that the jab works ‘very well’ in children, amid mounting debates in the UK around vaccinating kids</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/tucson-pauses-covid-19-vaccine-mandate-after-arizona-attorney-general-deems-it-illegal_3987020.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-09-08-1&amp;mktids=6a808784163d3a35b971009606838462&amp;est=QY3FABMBx86GlIDB80S2bKZ266UkgRaUkhUT8wf52zXhHcFXHjdM8e3uEbmRPB96xA%3D%3D" target="_blank" rel="noopener">Tucson Pauses COVID-19 Vaccine Mandate After Arizona Attorney General Deems It Illegal</a></strong></p>
                    <p><strong><a href="https://nypost.com/2021/08/27/biden-and-fauci-discuss-covid-19-booster-shots-every-5-months/" target="_blank" rel="noopener">Biden, Fauci discuss requiring COVID booster shots every 5 months</a></strong></p>
                    <p><strong><a href="https://www.businessinsider.com/pfizer-lower-dose-moderna-covid-19-vaccine-fewer-side-effects-2021-9?r=US&amp;IR=T" target="_blank" rel="noopener">Pfizer picked a COVID-19 vaccine dose far lower than Moderna’s to minimize side effects, its top scientist says</a></strong></p>
                    <p><strong><a href="https://nypost.com/2021/09/08/jimmy-kimmel-says-unvaxxed-americans-dont-deserve-icu-beds/" target="_blank" rel="noopener">‘Pan-dimwits’: Jimmy Kimmel says the unvaxxed don’t deserve ICU beds</a></strong></p>
                    <p><strong><a href="https://www.conservativewoman.co.uk/sixty-doctors-plead-with-chief-medical-officers-to-reject-child-vaccination/" target="_blank" rel="noopener">Sixty doctors plead with chief medical officers to reject child vaccination</a></strong></p>
                    <p><strong><a href="https://www.globalresearch.ca/what-not-said-pfizer-coronavirus-vaccine/5729461" target="_blank" rel="noopener">What’s Not Being Said About the Pfizer Coronavirus Vaccine. “Human Guinea Pigs”?</a></strong></p>
                    <p><strong><a href="https://www.frontiersin.org/articles/10.3389/fimmu.2020.581807/full" target="_blank" rel="noopener">An Effective COVID-19 Vaccine Needs to Engage T Cells</a></strong></p>
                    <p><strong><a href="https://swprs.org/israel-highest-infection-rate-in-the-world/" target="_blank" rel="noopener">Israel: Highest infection rate in the world</a></strong></p>
                    <p><strong><a href="https://www.haaretz.com/israel-news/israel-may-deny-green-passports-to-people-who-have-not-received-covid-booster-1.10147312" target="_blank" rel="noopener">Israel May Deny Green Passports to People Who Have Not Received COVID Booster</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/how-to-resist-covid-jab-mandates-in-canada/" target="_blank" rel="noopener">How to resist COVID jab mandates in Canada — a comprehensive guide</a></strong></p>
                    <p><strong><a href="https://alexberenson.substack.com/p/a-chart-of-covid-deaths-in-britain?r=n8j4a&amp;utm_campaign=post&amp;utm_medium=email&amp;utm_source=copy" target="_blank" rel="noopener">A chart of Covid deaths in Britain since June</a></strong></p>
                    <p><strong><a href="https://dailysceptic.org/2021/09/10/children-should-be-vaccinated-to-benefit-their-mental-health-chris-whitty-to-say/#comments" target="_blank" rel="noopener">Children Should Be Vaccinated to Benefit Their Mental Health, Chris Whitty to Say</a></strong></p>
                    <p><strong><a href="https://www.bhf.org.uk/what-we-do/news-from-the-bhf/news-archive/2021/august/covid-19-spike-protein-binds-to-and-changes-cells-in-the-heart" target="_blank" rel="noopener">Covid-19 spike protein binds to and changes cells in the heart</a></strong></p>
                    <p><strong><a href="https://dailysceptic.org/2021/09/10/vaccines-have-negative-effectiveness-in-the-over-40s-as-low-as-minus-38-shows-new-phe-report/" target="_blank" rel="noopener">Vaccines Have NEGATIVE Effectiveness in the Over-40s, as Low as MINUS 38%, Shows New PHE Report</a></strong></p>
                    <p><strong><a href="https://www.biorxiv.org/content/10.1101/2021.07.30.454520v1.full" target="_blank" rel="noopener">Spike protein multiorgan tropism suppressed by antibodies targeting SARS-CoV-2</a></strong></p>
                    <p><strong><a href="https://www.newsweek.com/vaccine-children-covid-england-deaths-1627885" target="_blank" rel="noopener">Unvaccinated Children Less Likely to Die of COVID Than Vaccinated Adults, Data Suggests</a></strong></p>
                    <p><strong><a href="https://brownstone.org/articles/the-infuriating-habit-of-ignoring-natural-immunity/" target="_blank" rel="noopener">The Infuriating Habit of Ignoring Natural Immunity</a> Jeff</strong></p>
                    <p><strong><a href="https://www.israelnationalnews.com/News/News.aspx/309762" target="_blank" rel="noopener">Natural infection vs vaccination: Which gives more protection?</a></strong></p>
                    <p><strong><a href="https://www.israelnationalnews.com/News/News.aspx/309762" target="_blank" rel="noopener">Nearly 40% of new COVID patients were vaccinated – compared to just 1% who had been infected previously</a>. Israel natural immunity</strong></p>
                    <p><strong><a href="http://web.archive.org/web/20210911004309/https:/www.telegraph.co.uk/news/2021/09/10/revealed-scientists-dismissed-wuhan-lab-theory-linked-chinese/" target="_blank" rel="noopener">Revealed: How scientists who dismissed Wuhan lab theory are linked to Chinese researchers</a></strong></p>
                    <p><strong><a href="https://thetexan.news/texas-health-agency-issues-ivermectin-warning-while-treating-doctors-attribute-covid-19-recoveries-to-drug/" target="_blank" rel="noopener">Texas Health Agency Issues Ivermectin Warning While Treating Doctors Attribute COVID-19 Recoveries to Drug</a></strong></p>
                    <p><strong><a href="https://thetexan.news/texas-health-agency-issues-ivermectin-warning-while-treating-doctors-attribute-covid-19-recoveries-to-drug/" target="_blank" rel="noopener">While the Texas Department of State Health Services is issuing poison warnings about ivermectin products, treating physicians are continuing to promote the FDA-approved pharmaceutical product.</a></strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/vaers-injuries-deaths-covid-vaccines-new-highs-biden-mandates/" target="_blank" rel="noopener">Reports of Injuries, Deaths After COVID Vaccines Hit New Highs, as Biden Rolls Out Plan to Force 100 Million More Americans to Get Vaccinated</a></strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/vaers-injuries-deaths-covid-vaccines-new-highs-biden-mandates/" target="_blank" rel="noopener">VAERS data released Friday by the CDC showed a total of 675,593 reports of adverse events from all age groups following COVID vaccines, including 14,506 deaths and 88,171 serious injuries between Dec. 14, 2020 and Sept. 3, 2021.</a></strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/defender/vaers-injuries-deaths-covid-vaccines-new-highs-biden-mandates/" target="_blank" rel="noopener">&nbsp;</a></strong></p>
                    <p><strong><a href="https://www.theguardian.com/world/2021/sep/10/boys-more-at-risk-from-pfizer-jab-side-effect-than-covid-suggests-study" target="_blank" rel="noopener">Boys more at risk from Pfizer jab side-effect than Covid, suggests study</a> myocarditis</strong></p>
                    <p><strong><a href="https://redstate.com/alexparker/2021/09/06/cdc-releases-the-death-rate-of-children-hospitalized-for-covid-19-over-the-last-year-n438581" target="_blank" rel="noopener">COVID SCAM: CDC Finally Releases Death Rate of Kids Hospitalized for COVID</a></strong></p>
                    <p><strong><a href="https://www.webmd.com/lung/news/20210716/delta-variant-rising-covid-case-counts-every-state" target="_blank" rel="noopener">CDC: COVID-19 Is a ‘Pandemic of the Unvaccinated’</a> Walensky</strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-9980015/26-Lancet-scientists-trashed-theory-Covid-leaked-Chinese-lab-links-Wuhan.html?ito=social-twitter_mailonline" target="_blank" rel="noopener">REVEALED: 26 out of the 27 Lancet scientists who trashed theory that Covid leaked from a Chinese lab have links to Wuhan researchers</a></strong></p>
                    <p><strong><a href="https://trialsitenews.com/string-of-deaths-of-young-people-after-pfizer-covid-19-vaccine-spook-families-but-government-assures-no-real-risk/" target="_blank" rel="noopener">String of Deaths of Young People After Pfizer COVID-19 Vaccine Spook Families But Government Assures No Real Risk</a> South Korea</strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/health/article-9973855/More-68-000-COVID-19-cases-nursing-homes-went-UNREPORTED-federal-data.html" target="_blank" rel="noopener">More than 68,000 COVID-19 cases and 16,000 deaths that occurred in nursing homes went UNREPORTED in federal data, study suggests</a> CDC</strong></p>
                    <p><strong>More than 68,000 COVID-19 cases and 16,000 deaths among nursing home residents are unaccounted for in federal data, a new study suggests</strong></p>
                    <p><strong>Harvard University researchers compared federal data to state data for 20 states with nursing home numbers going back to the start of the pandemic</strong></p>
                    <p><strong>The federal government didn’t require nursing homes to report Covid cases and deaths until late May, 2020 – after outbreaks had already raged</strong></p>
                    <p><strong>The researchers found 44% of cases and 40% of deaths counted by the states before late May were not included in the federal dataset</strong></p>
                    <p><strong>Researchers say the findings indicate that ‘the true toll of COVID-19 on nursing home residents may never be known’</strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.08.30.21262866v1" target="_blank" rel="noopener">SARS-CoV-2 mRNA Vaccination-Associated Myocarditis in Children Ages 12-17: A Stratified National Database Analysis</a></strong></p>
                    <p><strong><a href="https://www.bbc.com/news/uk-58535258" target="_blank" rel="noopener">England vaccine passport plans ditched, Sajid Javid says</a></strong></p>
                    <p><strong><a href="https://trialsitenews.com/the-smoking-syringe-was-evidence-withheld-from-acip-when-they-recommended-the-pfizer-vaccine/" target="_blank" rel="noopener">The Smoking Syringe: Was evidence withheld from ACIP when they recommended the Pfizer-Vaccine?</a></strong></p>
                    <p><strong><a href="https://dailysceptic.org/assembling-covid-jigsaw-pieces-into-a-complete-pandemic-picture/" target="_blank" rel="noopener">Assembling Covid Jigsaw Pieces Into a Complete Pandemic Picture</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/fda-leaders-other-scientists-say-most-people-dont-need-vaccine-boosters_3994852.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-09-13-1&amp;mktids=483ffd4cf91fb1b78188af645bc262f6&amp;est=r4lpKXTJ1y2F7iBd5X09vaUPMyAMWRR5bRAgeSPlG1UkyBrWRUumuwWCN%2B0EWOcg" target="_blank" rel="noopener">FDA Leaders, Other Scientists Say Most People Don’t Need Vaccine Boosters</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/canadian-professors-pen-open-letters-stop-vaccine-mandates-on-campus/" target="_blank" rel="noopener">Canadian professors ask for an end to COVID-19 vaccine mandates on campus</a></strong></p>
                    <p><strong><a href="https://twitter.com/andrewbostom/status/1437466647154003972" target="_blank" rel="noopener">Israel: “The Minister of Health admits in a recording that was revealed tonight that the green label [C19 vax passport] has no epidemiologic effect at all. It is designed to put psychological pressure on you, to make your life difficult until you get vaccinated”</a></strong></p>
                    <p><strong><a href="https://www.andrewbostom.org/2021/09/mandatory-covid-19-vaccination-for-previously-sars-cov-2-infected-rhode-island-healthcare-workers-yields-an-unacceptable-risk-benefit-ratio-of-eighty-to-one-a-published-evidence/" target="_blank" rel="noopener">Mandatory Covid-19 Vaccination for Previously SARS-CoV-2 Infected Rhode Island Healthcare Workers Yields an (Unacceptable) Risk / “Benefit” Ratio of Eighty to One: A Published Evidence-Based Estimate, Confirmed by Rhode Island Department of Health July, 2021 Data</a> Bostom</strong></p>
                    <p><strong><a href="https://www.pressreader.com/uk/the-scottish-mail-on-sunday/20210829/282183654147043" target="_blank" rel="noopener">Majority in Scotland double vaccinated dying</a></strong></p>
                    <p><strong><a href="https://nationalfile.com/australia-new-south-wales-government-confiscates-alcohol-from-quarantined-residents-for-health-reasons/" target="_blank" rel="noopener">AUSTRALIA: New South Wales Government Confiscates Alcohol from Quarantined Residents for “Health” Reasons</a></strong></p>
                    <p><strong>Packages from friends of residents of locked-down buildings are searched and any excess booze is seized by authorities</strong></p>
                    <p><strong><a href="https://riotimesonline.com/brazil-news/modern-day-censorship/80-of-covid-deaths-in-scotland-during-august-were-people-who-had-been-vaccinated/amp/" target="_blank" rel="noopener">80% of Covid deaths in Scotland during August were people who had been vaccinated</a></strong></p>
                    <p><strong><a href="https://www.westernjournal.com/fauci-calls-many-many-vaccine-mandates/" target="_blank" rel="noopener">Fauci Calls for ‘Many, Many More’ Vaccine Mandates</a></strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-9985343/All-12s-Covid-vaccines-Chris-Whitty-approves-jabs-3million-youngsters.html" target="_blank" rel="noopener">‘Unvaxxed pupils being bullied, rows tearing families apart… and only 30,000 infections stopped’: Fury as minister CONFIRMS plans to vaccinate all over-12s from next week but gives CHILDREN the final say on whether they get the jab, NOT their parents</a></strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-9985343/All-12s-Covid-vaccines-Chris-Whitty-approves-jabs-3million-youngsters.html" target="_blank" rel="noopener">Recommendation is for healthy children aged 12 to 15 across UK to be vaccinated against Covid this winter</a></strong></p>
                    <p><strong>If accepted by ministers, will mean 3million more youngsters will be offered jab from as early as next week; Will only be given single dose of Pfizer for now with a decision on a second dose not due until the next year</strong></p>
                    <p><strong><a href="https://www.independentsentinel.com/nih-niaid-are-funding-gain-of-function-for-mers-it-kills-50/" target="_blank" rel="noopener">NIH &amp; NIAID are funding gain-of-function for MERS &amp; it kills 50%</a></strong></p>
                    <p><strong><a href="https://www.americanthinker.com/articles/2021/09/medical_experimentation_and_collective_punishment_are_war_crimes.html" target="_blank" rel="noopener">Medical Experimentation and Collective Punishment Are War Crimes</a></strong></p>
                    <p><strong><a href="https://www.timesofisrael.com/more-than-10-of-israeli-kids-who-got-virus-now-suffer-from-long-covid-study/" target="_blank" rel="noopener">11% of Israeli kids who got virus now suffer from ‘long COVID’ – study</a></strong></p>
                    <p><strong><a href="https://www.timesofisrael.com/israel-offers-covid-booster-shot-to-all-eligible-for-vaccine/" target="_blank" rel="noopener">Israel widens 3rd COVID booster shot to those aged 12 and over</a> Aug 1st roll out</strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-9984397/Fauci-says-support-vaccinate-mandates-air-travel-public-schools.html" target="_blank" rel="noopener">‘If you travel on a plane you should be vaccinated’: Fauci demands vaccine mandate for air travel and public schools in bid to reach herd immunity</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/resources-for-americans-pushing-back-against-mandated-coronavirus-vaccines/" target="_blank" rel="noopener">How Americans can resist coronavirus shot mandates – a comprehensive guide</a></strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-9993523/American-BABIES-given-low-dose-Pfizers-jab-winter.html" target="_blank" rel="noopener">Babies could be given Pfizer’s Covid vaccine in the US this winter: Company plans to seek approval for jabbing six-month-olds in November</a></strong></p>
                    <p><strong><a href="https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(21)00485-0/fulltext" target="_blank" rel="noopener">Remdesivir plus standard of care versus standard of care alone for the treatment of patients admitted to hospital with COVID-19 (DisCoVeRy): a phase 3, randomised, controlled, open-label trial</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/texas-hospital-faces-closure-over-covid-19-vaccine-mandate-ceo_3998746.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-09-15-1&amp;mktids=be66563e30c3eb091863dbd237d7910a&amp;est=8Hswngrx0mXEOmOZ%2FBFa99Je9zwrOhDOJZ6J%2B54V6KpVGR%2Bnadloy77CwIQZ8GpFLw%3D%3D" target="_blank" rel="noopener">Texas Hospital Faces Closure Over COVID-19 Vaccine Mandate: CEO</a></strong></p>
                    <p><strong><a href="https://greatgameindia.com/delta-variant-resistant-vaccines/" target="_blank" rel="noopener">COVID Delta Variant May Become Completely Resistant To Vaccines Says Japanese Study</a></strong></p>
                    <p><strong><a href="https://www.biorxiv.org/content/10.1101/2021.08.22.457114v1" target="_blank" rel="noopener">The SARS-CoV-2 Delta variant is poised to acquire complete resistance to wild-type spike vaccines</a></strong></p>
                    <p><strong><a href="https://www.worldtribune.com/unexpected-and-heartbreaking-thousands-flood-abc-affiliates-facebook-page-with-vaccination-horror-stories/" target="_blank" rel="noopener">Unexpected and heartbreaking: Thousands flood ABC affiliate’s Facebook page with vaccination horror stories</a></strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/09/huge-uttar-pradesh-india-announces-state-covid-19-free-proving-effectiveness-deworming-drug-ivermectin/" target="_blank" rel="noopener">HUGE: Uttar Pradesh, India Announces State Is COVID-19 Free Proving the Effectiveness of “Deworming Drug” IVERMECTIN</a></strong></p>
                    <p><strong><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8383101/" target="_blank" rel="noopener">Ivermectin: a multifaceted drug of Nobel prize-honoured distinction with indicated efficacy against a new global scourge, COVID-19</a></strong></p>
                    <p><strong><a href="https://www.demandthetruth.xyz/" target="_blank" rel="noopener">“Primum non nocere (First, do no harm) – Hippocrates</a></strong></p>
                    <p><strong><a href="https://www.science.org/doi/full/10.1126/science.abj2258" target="_blank" rel="noopener">Hybrid immunity</a> natural and vaccine Crotty</strong></p>
                    <p><strong><a href="https://www.bbc.com/news/health-58573593" target="_blank" rel="noopener">Call for investigation of menstrual changes after Covid jabs</a></strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-9993693/More-30-000-women-reported-period-disruption-getting-Covid-vaccine.html" target="_blank" rel="noopener">Are painful periods a side effect of the Covid vaccines? Demands for more investigations into links after nearly 35,000 women in Britain report irregular menstrual cycles or period pain after getting a jab</a></strong></p>
                    <p><strong><a href="https://www.healthnewsreview.org/toolkit/tips-for-understanding-studies/absolute-vs-relative-risk/" target="_blank" rel="noopener">Reporting the findings: Absolute vs relative risk</a></strong></p>
                    <p><strong><a href="https://www.unz.com/mwhitney/the-conspiracy-theorists-were-right-it-is-a-poison-death-shot/" target="_blank" rel="noopener">The Conspiracy Theorists Were Right; It IS a “Poison-Death Shot”</a></strong></p>
                    <p><strong>Ultrasound Imaging Findings of Acute</strong></p>
                    <p><strong>Testicular Infection in Patients With</strong></p>
                    <p><strong>Coronavirus Disease 2019</strong></p>
                    <p><strong>Ultrasound Imaging Findings of Acute</strong></p>
                    <p><strong>Testicular Infection in Patients With</strong></p>
                    <p><strong>Coronavirus Disease 2019</strong></p>
                    <p><strong>Ultrasound Imaging Findings of Acute</strong></p>
                    <p><strong>Testicular Infection in Patients With</strong></p>
                    <p><strong>Coronavirus Disease 2019</strong></p>
                    <p><strong><a href="https://onlinelibrary.wiley.com/doi/epdf/10.1002/jum.15558" target="_blank" rel="noopener">Testicular infection COVID-19</a></strong></p>
                    <p><strong><a href="https://freeworldnews.tv/watch?id=6144d5dbd0af0008a410e252" target="_blank" rel="noopener">All Vaxxinated People Must Quarantine Over the Winter Months or Risk Serious Illness!!</a> Israel pandemic of the vaccinated</strong></p>
                    <p><strong><a href="https://thedeplorablepatriot.com/2021/09/07/india-charges-who-scientist-soumya-swaminathan-with-mass-murder/" target="_blank" rel="noopener">India charges WHO scientist with mass murder</a></strong></p>
                    <p><strong><a href="https://www.biorxiv.org/content/10.1101/2021.03.22.436441v1" target="_blank" rel="noopener">Differential effects of the second SARS-CoV-2 mRNA vaccine dose on T cell immunity in naïve and COVID-19 recovered individuals</a> vaccine 2nd dose</strong></p>
                    <p><strong><a href="https://www.chronicle.com/article/morale-is-in-the-ditch-distressed-by-light-covid-precautions-georgia-faculty-members-take-action" target="_blank" rel="noopener">‘Morale Is in the Ditch’: Distressed by Light Covid Precautions, Georgia Faculty Members Take Action</a></strong></p>
                    <p><strong><a href="https://www.biorxiv.org/content/10.1101/2021.06.25.449905v3" target="_blank" rel="noopener">Persistence of SARS CoV-2 S1 Protein in CD16+ Monocytes in Post-Acute Sequelae of COVID-19 (PASC) Up to 15 Months Post-Infection</a></strong></p>
                    <p><strong>Dr. Patterson describing Spike protein S1 in monocytes of patients after SARS CoV2 infection 15 months later with no evidence of reverse transcription.&nbsp; These data imply that COVID-19 infection deposits Spike protein intracellularly that must be conserved in monocytes and could explain long term symptoms with COVID-19 long hauler syndrome as well has enhanced risk with ill-advised vaccination in COVID-19 survivors.</strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/hospital-hits-breaking-point-after-firing-150-unvaccinated-workers/" target="_blank" rel="noopener">Hospital ‘hits breaking point’ after firing 150 unvaccinated workers</a></strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.08.30.21262866v1" target="_blank" rel="noopener">SARS-CoV-2 mRNA Vaccination-Associated Myocarditis in Children Ages 12-17: A Stratified National Database Analysis</a></strong></p>
                    <p><strong><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8383101/" target="_blank" rel="noopener">Ivermectin: a multifaceted drug of Nobel prize-honoured distinction with indicated efficacy against a new global scourge, COVID-19</a></strong></p>
                    <p><strong><a href="https://namelyliberty.com/they-could-have-done-this-on-any-cold-virus-kevin-mckernan-on-pcr-deception/" target="_blank" rel="noopener">“They could have done this on any cold virus” – Kevin McKernan on PCR deception</a></strong></p>
                    <p><strong><a href="https://lumen-news.com/f/doctors-challenge-ama%E2%80%99s-attempt-to-crush-ivermectin-covid-use" target="_blank" rel="noopener">Doctors Challenge AMA’s Attempt to Crush Ivermectin COVID Use</a></strong></p>
                    <p><strong><a href="https://www.bizpacreview.com/2021/09/15/ncaa-golfer-speaks-from-hospital-about-severe-heart-condition-from-covid-vaccine-blasts-mandates-1134698/" target="_blank" rel="noopener">NCAA golfer speaks from hospital about severe heart condition from COVID Vaccine, blasts mandates</a></strong></p>
                    <p><strong><a href="https://www.thegatewaypundit.com/2021/09/former-vice-president-european-advisory-group-vaccinated-people-put-quarantine-isolated-society/" target="_blank" rel="noopener">Former Vice-President WHO European Advisory Group: “Unvaccinated people are not dangerous; vaccinated people are dangerous – Should be Quarantined” (Video)</a></strong></p>
                    <p><strong><a href="https://www.npr.org/sections/coronavirus-live-updates/2021/09/17/1038211236/weight-gain-obesity-children-teens-pandemic" target="_blank" rel="noopener">Children And Teens Gained Weight At An Alarming Rate During The Pandemic, The CDC Says</a></strong></p>
                    <p><strong><a href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1018547/Technical_Briefing_23_21_09_16.pdf" target="_blank" rel="noopener">SARS-CoV-2 variants of concern and variants under investigation in England Technical briefing 23 PHE</a> PHE</strong></p>
                    <p><strong><a href="https://www.biorxiv.org/content/10.1101/2021.08.22.457114v1.full.pdf" target="_blank" rel="noopener">The SARS-CoV-2 Delta variant is poised to acquire complete resistance to wild-type spike vaccines</a></strong></p>
                    <p><strong>Vaccine resistance complete</strong></p>
                    <p><strong><a href="https://www.nbcboston.com/news/local/breakthrough-covid-cases-in-mass-now-approaching-30000/2492577/" target="_blank" rel="noopener">Breakthrough COVID Cases in Mass. Now Approaching 30,000</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/idaho-doctor-reports-a-20-times-increase-of-cancer-in-vaccinated-patients/" target="_blank" rel="noopener">Idaho doctor reports a ‘20 times increase’ of cancer in vaccinated patients&nbsp;</a>Cole</strong></p>
                    <p><strong><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7801810/" target="_blank" rel="noopener">COVID-19 Death and BCG Vaccination Programs Worldwide</a></strong></p>
                    <p><strong><a href="https://www.thedesertreview.com/opinion/columnists/indias-ivermectin-blackout/article_e3db8f46-f942-11eb-9eea-77d5e2519364.html" target="_blank" rel="noopener">India’s ivermectin blackout</a></strong></p>
                    <p><strong><a href="https://www.infowars.com/posts/india-province-of-241-million-people-declared-covid-free-after-government-promotes-ivermectin/" target="_blank" rel="noopener">India State of 241 MILLION People Declared COVID-Free After Government Promotes Ivermectin</a></strong></p>
                    <p><strong><a href="https://www.cdc.gov/pcd/issues/2021/pdf/21_0123.pdf" target="_blank" rel="noopener">Underlying Medical Conditions and Severe Illness Among 540,667 Adults Hospitalized With COVID-19, March 2020–March 2021</a></strong></p>
                    <p><strong><a href="https://www.foxnews.com/politics/desantis-biden-florida-monoclonal-antibodies-coronavirus" target="_blank" rel="noopener">DeSantis hammers Biden admin for limiting Florida’s use of monoclonal antibodies: ‘Very, very problematic’</a></strong></p>
                    <p><strong><a href="https://www.foxnews.com/politics/desantis-biden-florida-monoclonal-antibodies-coronavirus" target="_blank" rel="noopener">&nbsp;</a></strong></p>
                    <p><strong><a href="https://www.foxnews.com/politics/desantis-biden-florida-monoclonal-antibodies-coronavirus" target="_blank" rel="noopener">Shrestha: Vaccinating people who have had covid-19: why doesn’t natural immunity count in the US?</a></strong></p>
                    <p><strong><a href="https://www.foxnews.com/politics/desantis-biden-florida-monoclonal-antibodies-coronavirus" target="_blank" rel="noopener">Cleveland Clinic surveyed its more than 50 000 employees to compare four groups based on history of SARS-CoV-2 infection and vaccination status. Not one of over 1300 unvaccinated employees who had been previously infected tested positive during the five months of the study.&nbsp;</a></strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.04.20.21255670v1?ijkey=b0e3732aa2b24a4e88b5d8e60dd1d88d09cdbc98&amp;keytype2=tf_ipsecsha" target="_blank" rel="noopener">Protection of previous SARS-CoV-2 infection is similar to that of BNT162b2 vaccine protection: A three-month nationwide experience from Israel</a> Goldberg</strong></p>
                    <p><strong><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5378080/?fbclid=IwAR2IikGIJfFFq1DGsvOD0_3Uz41hb0MU62X5mVmY0bb1GwCXT6xm23T2k38#s4title" target="_blank" rel="noopener">Why does drug resistance readily evolve but vaccine resistance does not?</a></strong></p>
                    <p><strong><a href="https://childrenshealthdefense.org/wp-content/uploads/Pierpont-Why-mandated-vaccines-are-pointless-final-1.pdf" target="_blank" rel="noopener">Covid-19 Vaccine Mandates Are Now Pointless: Covid-19 vaccines do not keep people from catching the prevailing Delta variant and passing it to others</a></strong></p>
                    <p><strong><a href="https://apnews.com/article/fda-panel-rejects-widespread-pfizer-booster-shots-1cd1cf6a5c5c02b63f8a7324807a59f1?utm_medium=AP&amp;utm_source=Twitter&amp;utm_campaign=SocialFlow" target="_blank" rel="noopener">US panel backs COVID-19 boosters only for seniors, high-risk</a></strong></p>
                    <p><strong><a href="https://www.sciencedirect.com/science/article/pii/S221475002100161X" target="_blank" rel="noopener">Why are we vaccinating children against COVID-19?</a></strong></p>
                    <p><strong><a href="https://www.nature.com/articles/d41586-021-02261-8#ref-CR1" target="_blank" rel="noopener">COVID vaccines protect against Delta, but their effectiveness wanes</a></strong></p>
                    <p><strong><a href="https://www.nature.com/articles/d41586-021-02261-8#ref-CR1" target="_blank" rel="noopener">Massive UK study of COVID-19 cases shows that people who are jabbed have good immunity at first, but quickly become more vulnerable to the fast-spreading Delta variant.</a></strong></p>
                    <p><strong><a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)02046-8/fulltext" target="_blank" rel="noopener">Considerations in boosting COVID-19 vaccine immune responses</a></strong></p>
                    <p><strong><a href="https://www.medpagetoday.com/infectiousdisease/covid19/92836" target="_blank" rel="noopener">Op-Ed: Quit Ignoring Natural COVID Immunity</a></strong></p>
                    <p><strong><a href="https://www.theblaze.com/op-ed/horowitz-15-studies-that-indicate-natural-immunity-from-prior-infection-is-more-robust-than-the-covid-vaccines" target="_blank" rel="noopener">Horowitz: 15 studies that indicate natural immunity from prior infection is more robust than the COVID vaccines</a> Natural immunity</strong></p>
                    <p><strong><a href="https://www.bioresearchcommunications.com/index.php/brc/article/view/176/159" target="_blank" rel="noopener">Effect of 1% Povidone Iodine Mouthwash/Gargle, Nasal and Eye Drop in COVID-19 patient</a> Mouthwash povidine iodine</strong></p>
                    <p><strong><a href="https://trialsitenews.com/get-sicker-anatomy-of-a-failed-policy/" target="_blank" rel="noopener">‘Get Sicker’: Anatomy Of A Failed Policy</a></strong></p>
                    <p><strong><a href="https://www.westernjournal.com/weatherman-fired-33-years-job-refusing-vaccine-goes-legendary-final-words/" target="_blank" rel="noopener">Weatherman Fired After 33 Years on the Job for Refusing Vaccine, Goes Out with Legendary Final Words</a></strong></p>
                    <p><strong><a href="https://www.breitbart.com/faith/2021/09/20/vatican-closes-its-doors-to-those-without-a-green-pass/" target="_blank" rel="noopener">Vatican Closes Its Doors to Those Without a ‘Green Pass’</a></strong></p>
                    <p><strong><a href="https://www.theblaze.com/op-ed/horowitz-now-that-vaccinated-people-need-the-monoclonal-treatments-biden-admin-and-media-attack-the-treatment?utm_source=theblaze-breaking&amp;utm_medium=email&amp;utm_campaign=20210920Trending-HorowitzMonoclonalAntibodies&amp;utm_term=ACTIVE%20LIST%20-%20TheBlaze%20Breaking%20News" target="_blank" rel="noopener">Horowitz: Now that vaccinated people need the monoclonal treatments, Biden admin and media attack the treatment</a></strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.08.30.21262866v1" target="_blank" rel="noopener">SARS-CoV-2 mRNA Vaccination-Associated Myocarditis in Children Ages 12-17: A Stratified National Database Analysis</a></strong></p>
                    <p><strong><a href="https://twitter.com/MonicaGandhi9/status/1391139927442690048" target="_blank" rel="noopener">Gandhi</a> natural infection Gandhi</strong></p>
                    <p><strong><a href="https://nypost.com/2021/09/12/pfizer-vaccine-may-be-authorized-for-kids-5-to-11-in-october/" target="_blank" rel="noopener">Pfizer vaccine could be authorized for kids ages 5 to 11 in October: former FDA head</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/09/21/israel-pfizer-vaccine.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1ReadMore&amp;cid=20210921_HL2&amp;mid=DM998973&amp;rid=1270882499" target="_blank" rel="noopener">Pfizer Admits Israel Is the Great COVID-19 Vaccine Experiment</a></strong></p>
                    <p><strong><a href="https://amgreatness.com/2021/09/20/hhs-whistleblower-calls-federal-governments-covid-policies-evil-at-the-highest-level/" target="_blank" rel="noopener">HHS whistleblower</a></strong></p>
                    <p><strong><a href="https://ivmmeta.com/" target="_blank" rel="noopener">Ivermectin for COVID-19: real-time meta analysis of 64 studies</a></strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.09.13.21262182v1.full" target="_blank" rel="noopener">mRNA COVID-19 Vaccination and Development of CMR-confirmed Myopericarditis</a></strong></p>
                    <p><strong>New Study Shows 1 in 1000 (average age 33 years, 93% male) Develop Heart Inflammation After Covid Vaccination; Myocarditis and Other Related Heart Conditions Have Increased Death Rate Within 5 Years; In other words, the chances that covid will kill you if you are under 50 are almost 6x lower than the chances you will develop a debilitating (and often fatal in the long run) heart condition.</strong></p>
                    <p><strong><a href="https://vaccineimpact.com/2021/study-governments-own-data-reveals-that-at-least-150000-probably-dead-in-u-s-following-covid-19-vaccines/" target="_blank" rel="noopener">STUDY: Government’s Own Data Reveals that at Least 150,000 Probably DEAD in U.S. Following COVID-19 Vaccines</a></strong></p>
                    <p><strong><a href="https://www.yahoo.com/news/wuhan-scientists-planned-release-skin-145326380.html" target="_blank" rel="noopener">Wuhan scientists planned to release coronavirus particles into cave bats, leaked papers reveal</a></strong></p>
                    <p><strong><a href="https://www.bloomberg.com/news/articles/2021-09-12/israel-preparing-for-possible-fourth-covid-vaccine-dose" target="_blank" rel="noopener">Israel Is Preparing for Possible Fourth Covid Vaccine Dose</a></strong></p>
                    <p><strong><a href="https://www.americanthinker.com/articles/2021/09/how_smart_are_the_vaxxed.html" target="_blank" rel="noopener">How Smart Are The Vaxxed?</a></strong></p>
                    <p><strong><a href="https://amgreatness.com/2020/07/10/fauci-is-a-deep-state-fraud/" target="_blank" rel="noopener">Fauci Is a Deep State Fraud</a></strong></p>
                    <p><strong><a href="https://noqreport.com/2021/09/22/new-movement-by-physicians-to-fight-medical-tyranny/" target="_blank" rel="noopener">New Movement Launched by Physicians, Including Dr. Robert Malone, to Fight Medical Tyranny</a></strong></p>
                    <p><strong><a href="https://www.nature.com/articles/s41586-021-03647-4" target="_blank" rel="noopener">SARS-CoV-2 infection induces long-lived bone marrow plasma cells in humans</a></strong></p>
                    <p><strong><a href="https://theexpose.uk/2021/09/20/covid-19-vaccines-have-killed-at-least-150000-people-in-the-usa/" target="_blank" rel="noopener">BREAKING – The Covid-19 Vaccines have killed at least 150,000 people in the USA including 574 children according to new Scientific Study</a></strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/mkt_breakingnews/10000-unnecessary-cancer-deaths-linked-to-covid-19-pandemic-lockdown-in-uk-report_4011430.html?utm_source=newsnoe&amp;utm_medium=email2&amp;utm_campaign=breaking-2021-09-22-3&amp;mktids=6d3b7f2c796520903aa41ea24afb8998&amp;est=DeHJStqfIlGWhfOrxSpVzjxqMeM9qrPjkm9Wvj53NbjUVs38m8M9nda4db7CTQUP" target="_blank" rel="noopener">10,000 Unnecessary Cancer Deaths Linked to COVID-19 Pandemic, Lockdown in UK: Report</a></strong></p>
                    <p><strong><a href="https://www.sciencedirect.com/science/article/pii/S0870255121004297" target="_blank" rel="noopener">Protocol-based cardiotoxicity monitoring in hydroxychloroquine medicated COVID-19 pediatric patients</a></strong></p>
                    <p><strong><a href="https://www.news.com.au/world/coronavirus/australia/queensland-police-officers-mount-legal-challenge-to-covid19-vaccine-mandate/news-story/819192aaf033248b6ded767f7edbf634" target="_blank" rel="noopener">Queensland police officers mount legal challenge to Covid-19 vaccine mandate</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/09/23/ama-instructs-doctors-to-deceive.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1HL&amp;cid=20210923&amp;mid=DM1000701&amp;rid=1272742716" target="_blank" rel="noopener">American Medical Association Instructs Doctors to Deceive</a></strong></p>
                    <p><strong><a href="https://theexpose.uk/2021/09/23/covid-19-deaths-are-over-3000-percent-higher-80-percent-vaccinated/" target="_blank" rel="noopener">BREAKING – Covid-19 deaths are over 3,000% higher than this time last year and 80% of those dying had the Covid-19 vaccine according to the latest Public Health data</a></strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.04.15.21252192v1.full.pdf" target="_blank" rel="noopener">Previous COVID-19 infection but not Long-COVID is associated with increased adverse events following BNT162b2/Pfizer vaccination</a>. Adverse events vaccine Raw Gazit</strong></p>
                    <p><strong><a href="https://aaronkheriaty.substack.com/p/on-vaccinating-those-with-natural?r=76kom&amp;utm_campaign=post&amp;utm_medium=web&amp;utm_source=email" target="_blank" rel="noopener">On Vaccinating Covid Recovered Individuals, Part 1</a> Raw Gazit</strong></p>
                    <p><strong><a href="https://onlinelibrary.wiley.com/doi/10.1111/ijcp.13795?fbclid=IwAR3UmkB4jtA0lPACSOucFNfLrS2JNv7-A3pxRIDw8eDOH2aG7V6XBUPutnk" target="_blank" rel="noopener">Informed consent disclosure to vaccine trial subjects of risk of COVID-19 vaccines worsening clinical disease</a></strong></p>
                    <p><strong><a href="https://www.bbc.com/news/newsbeat-58624295" target="_blank" rel="noopener">Is ‘the worst cold ever’ going around?</a> ADE</strong></p>
                    <p><strong><a href="https://www.theepochtimes.com/theres-no-mild-in-myocarditis_3952940.html" target="_blank" rel="noopener">There’s No Mild in Myocarditis</a></strong></p>
                    <p><strong><a href="https://www.naturalnews.com/2021-09-22-wuhan-scientists-skin-nanoparticles-chimeric-covid-spike-protein.html" target="_blank" rel="noopener">EXPOSED: Wuhan scientists planned to use “skin-penetrating nanoparticles” to unleash “chimeric covid spike proteins” into bats in China</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/opinion/swiss-bishop-pope-bishops-have-become-health-experts-instead-of-witnesses-to-the-faith/" target="_blank" rel="noopener">Swiss bishop: Pope, bishops ‘have become health experts instead of witnesses to the faith’: the vaccines are deadly</a></strong></p>
                    <p><strong><a href="https://www.newsweek.com/members-congress-staff-exempt-biden-covid-vaccine-mandate-1627859" target="_blank" rel="noopener">Members of Congress and Their Staff Are Exempt From Biden’s Vaccine Mandate</a></strong></p>
                    <p><strong><a href="https://www.wsj.com/articles/university-vaccine-mandates-violate-medical-ethics-11623689220" target="_blank" rel="noopener">University Vaccine Mandates Violate Medical Ethics</a></strong></p>
                    <p><strong><a href="https://aaronkheriaty.substack.com/p/why-i-am-challenging-in-court-the" target="_blank" rel="noopener">Why I am Challenging in Court the University of California’s Vaccine Mandate</a> Aaron</strong></p>
                    <p><strong><a href="https://thenationalpulse.com/exclusive/exc-fauci-authored-article-for-wuhan-lab-collaborator-peter-daszak/" target="_blank" rel="noopener">EXC: Fauci Authored Article For Wuhan Lab Collaborator Peter Daszak</a></strong></p>
                    <p><strong><a href="https://history.nih.gov/display/history/Nuremberg%2BCode" target="_blank" rel="noopener">The&nbsp;Nuremberg Code</a> NIH</strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.07.07.21260122v2" target="_blank" rel="noopener">Viral infection and transmission in a large, well-traced outbreak caused by the SARS-CoV-2 Delta variant</a></strong></p>
                    <p><strong>Daily sequential PCR testing of the quarantined subjects indicated that the viral loads of Delta infections, when they first become PCR+, were on average ∼1000 times greater compared to A/B lineage infections during initial epidemic wave in China in early 2020, suggesting potentially faster viral replication and greater infectiousness of Delta during early infection.</strong></p>
                    <p><strong><a href="http://probabilityandlaw.blogspot.com/" target="_blank" rel="noopener">Probability and Risk</a> <a href="http://probabilityandlaw.blogspot.com/2021/09/all-cause-mortality-rates-in-england.html" target="_blank" rel="noopener">vaccinated vs unvaccinated UK</a> PHE</strong></p>
                    <p><strong><a href="http://probabilityandlaw.blogspot.com/2021/09/all-cause-mortality-rates-in-england.html" target="_blank" rel="noopener">Improving public understanding of probability and risk with special emphasis on its application to the law. Why Bayes theorem and Bayesian networks are needed</a></strong></p>
                    <p><strong><a href="https://trialsitenews.com/msn-showcases-the-amazing-uttar-pradesh-turnaround-the-ivermectin-based-home-medicine-kits/" target="_blank" rel="noopener">MSN Showcases the Amazing Uttar Pradesh Turnaround—The Ivermectin-based Home Medicine Kits</a></strong></p>
                    <p><strong><a href="https://journals.plos.org/plosbiology/article/info:doi/10.1371/journal.pbio.1002198" target="_blank" rel="noopener">Imperfect Vaccination Can Enhance the Transmission of Highly Virulent Pathogens</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/reproductive-immunologist-identifies-over-30000-reports-of-irregular-periods-bleeding-post-jab/" target="_blank" rel="noopener">Reproductive immunologist identifies over 30,000 reports of irregular periods, bleeding post-jab</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/09/25/what-really-happened-in-wuhan.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1HL&amp;cid=20210925&amp;mid=DM1002260&amp;rid=1274617111" target="_blank" rel="noopener">‘Sky News’ Documentary: What Really Happened in Wuhan?</a></strong></p>
                    <p><strong><a href="https://jamanetwork.com/journals/jama/fullarticle/2782900" target="_blank" rel="noopener">Myocarditis and Pericarditis After Vaccination for COVID-19</a> Myocarditis</strong></p>
                    <p><strong><a href="https://maryannedemasi.com/blog/f/covid-19-vaccinating-kids-%E2%80%93-the-debate-heats-up" target="_blank" rel="noopener">COVID-19: Vaccinating kids – the debate heats up</a></strong></p>
                    <p><strong><a href="https://covidcalltohumanity.org/2021/08/19/indias-uttar-pradesh-moving-towards-being-covid-free-ivermectin-central-to-virus-control/" target="_blank" rel="noopener">India’s Uttar Pradesh moving towards being covid-free, Ivermectin central to virus control</a></strong></p>
                    <p><strong>More Than 726,000 COVID Vaccine Injuries Reported to VAERS as CDC, FDA Overrule Advisory Committees’ Recommendations on Third Pfizer Shot</strong></p>
                    <p><strong><a href="https://unherd.com/thepost/anders-tegnell-sweden-won-the-argument-on-covid/" target="_blank" rel="noopener">Anders Tegnell: Sweden won the argument on Covid</a> Sweden</strong></p>
                    <p><strong><a href="https://eugyppius.substack.com/p/we-are-all-cattle-now?r=8sun7&amp;utm_campaign=post&amp;utm_medium=email&amp;utm_source=" target="_blank" rel="noopener">We Are All Cattle Now</a></strong></p>
                    <p><strong><a href="https://www.deepcapture.com/2021/09/affidavit-of-ltc-theresa-long-m-d-in-support-of-a-motion-for-a-preliminary-injunction-order/" target="_blank" rel="noopener">AFFIDAVIT OF LTC. THERESA LONG M.D. IN SUPPORT OF A MOTION FOR A PRELIMINARY INJUNCTION ORDER</a></strong></p>
                    <p><strong><a href="https://swprs.org/covid-vaccines-and-cancer/" target="_blank" rel="noopener">Covid Vaccines and Cancer</a></strong></p>
                    <p><strong><a href="https://straightlinelogic.com/2021/08/17/revolver-exclusive-navy-commander-warns-of-national-security-threat-from-mandatory-vaccination/" target="_blank" rel="noopener">Revolver Exclusive: Navy Commander Warns of National Security Threat from Mandatory&nbsp;Vaccination</a></strong></p>
                    <p><strong><a href="https://www.theguardian.com/us-news/2021/sep/25/new-york-city-schools-teacher-covid-vaccine-mandate-federal-appeals-judge" target="_blank" rel="noopener">New York City’s Covid vaccine mandate for school staff blocked by judge</a></strong></p>
                    <p><strong><a href="https://eugyppius.substack.com/" target="_blank" rel="noopener">Eugyppius</a> Marek</strong></p>
                    <p><strong><a href="https://www.dailymail.co.uk/news/article-10028443/Lancets-COVID-origins-panel-disbands-ties-Peter-Daszaks-EcoHealth-Alliance.html" target="_blank" rel="noopener">Lancet taskforce investigating origins of Covid is DISBANDED over ties to discredited Peter Daszak – just days after bombshell documents revealed his 2018 proposal to help Wuhan lab engineer more deadly bat coronaviruses</a></strong></p>
                    <p><strong><a href="https://www.lifesitenews.com/news/alberta-er-doctor-says-hospital-capacity-crisis-was-created-has-nothing-to-do-with-covid-19/" target="_blank" rel="noopener">Alberta ER doctor says hospital capacity crisis was ‘created,’ has nothing to do with COVID-19</a></strong></p>
                    <p><strong><a href="https://www.straitstimes.com/singapore/health/dine-in-social-group-sizes-cut-to-2-from-sept-27-with-covid-19-cases-possibly" target="_blank" rel="noopener">Dine-in, social group sizes cut to 2 from Sept 27 with Covid-19 cases possibly hitting 3,200 next week</a></strong></p>
                    <p><strong><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8119195/" target="_blank" rel="noopener">A majority of uninfected adults show preexisting antibody reactivity against SARS-CoV-2 Pellech </a></strong></p>
                    <p><strong>Diamond Princess</strong></p>
                    <p><strong><a href="https://www.familyfreedomalliance.org/" target="_blank" rel="noopener">Family Freedom Alliance</a></strong></p>
                    <p><strong><a href="https://articles.mercola.com/sites/articles/archive/2021/09/26/vaccine-awareness-week-update-2021.aspx?ui=bfc1c13ff0a7c87e739817a1bb545e8bbfeabf6cdf974ce1f250a1fedb794711&amp;sd=20210227&amp;cid_source=dnl&amp;cid_medium=email&amp;cid_content=art1HL&amp;cid=20210926&amp;mid=DM1002984&amp;rid=1275494672" target="_blank" rel="noopener">Vaccine Awareness Week Update 2021</a></strong></p>
                    <p><strong><a href="https://dryburgh.com/james-lyons-weiler-coronavirus-vaccine-safety-warning/" target="_blank" rel="noopener">James Lyons-Weiler — Pathogenic Priming: Coronavirus Vaccine Safety Warning</a></strong></p>
                    <p><strong><a href="https://trialsitenews.com/why-are-the-fda-and-cdc-advisory-panel-members-so-afraid-to-debate-covid-vaccine-safety/" target="_blank" rel="noopener">Why are the FDA and CDC advisory panel members so afraid to debate COVID Vaccine Safety?</a></strong></p>
                    <p><strong><a href="https://www.medrxiv.org/content/10.1101/2021.09.22.21263977v1" target="_blank" rel="noopener">COVID-19 mortality risk correlates inversely with vitamin D3 status, and a mortality rate close to zero could theoretically be achieved at 50 ng/ml 25(OH)D3: Results of a systematic review and meta-analysis</a> Vitamin D: 50 ng/ml 25 (OH) D3</strong></p>
                    <p><strong><a href="https://pathologie-konferenz.de/en/" target="_blank" rel="noopener">CAUSE OF DEATH AFTER COVID-19 VACCINATION<br />UNDECLARED COMPONENTS OF THE COVID-19 VACCINES</a></strong></p>
                    <p><strong><a href="https://freewestmedia.com/2021/09/23/norway-reclassifies-covid-19-no-more-dangerous-than-ordinary-flu/" target="_blank" rel="noopener">Norway reclassifies Covid-19: No more dangerous than ordinary flu</a></strong></p>
                </div>
            </div >
        </Col >
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PrintedArchives);
