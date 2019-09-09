import { TweenMax, Sine } from 'gsap';

// SVG MAIN WOMAN

function svgMain() {

    const svgMasterTml = new TimelineMax({ paused: true });
    const leafTimeLine = new TimelineMax({});
    const circleTimeLine = new TimelineMax({});
    const squareTimeLine = new TimelineMax({});


    leafTimeLine
        .to('.svg--main--plant__coral__front', 2.5, { rotation: -5, scale: .95, transformOrigin: "50% 100%", repeat: -1, yoyo: true, ease: Sine.easeOut }, 'leaf')
        .to('.svg--main--plant__coral__front-2', 2.5, { rotation: -5, scale: .95, transformOrigin: "50% 100%", repeat: -1, yoyo: true, ease: Sine.easeOut }, 'leaf')
        .to('.svg--main--plant__coral__front', 2.5, { rotation: 3, scale: .95, transformOrigin: "50% 100%", repeat: -1, yoyo: true, ease: Sine.easeOut }, 'leafBack')
        .to('.svg--main--plant__coral__front-2', 2.5, { rotation: 3, scale: .95, transformOrigin: "50% 100%", repeat: -1, yoyo: true, ease: Sine.easeOut }, 'leafBack')
        .to('.svg--main--plant__dark', 2, { skewX: -4, transformOrigin: "0% 100%", repeat: -1, yoyo: true, ease: Sine.easeInOut }, 'leaf')
        .to('.svg--main--plant__coral__back', 2, { skewX: 2, transformOrigin: "0% 100%", repeat: -1, yoyo: true, ease: Sine.easeInOut }, 'leaf')
        .to('.svg--main--plant__outline', 2.5, { skewX: 3, transformOrigin: "0% 100%", repeat: -1, yoyo: true, ease: Sine.easeInOut }, 'leaf');

    circleTimeLine
        .to('.svg--main__items__circle__outline__two', 6.5, { rotation: -360, transformOrigin: "50% 40px", repeat: -1, ease: Sine.easeInOut }, 'circle')
        .to('.svg--main__items__circle__outline__one', 7.5, { rotation: 360, transformOrigin: "10px 30px", repeat: -1, ease: Sine.easeInOut }, 'circle')
        .to('.svg--main__items__circle__outline__three', 7.5, { rotation: 180, transformOrigin: "120% 120%", repeat: -1, yoyo: true, ease: Sine.easeInOut }, 'circle')
        .to('.svg--main__items__circle__outline__four', 7.5, { x: 50, rotation: 360, transformOrigin: "10px 30px", repeat: -1, yoyo: true, ease: Sine.easeInOut }, 'circle')
        .to('.svg--main__items__circle__coral', 2.5, { y: 25, rotation: 45, transformOrigin: "15px 20px", repeat: -1, yoyo: true, ease: Sine.easeInOut }, 'circle')
        .to('.svg--main__items__circle__filled__one', 7.5, { y: 100, rotation: 360, transformOrigin: "10px 30px", repeat: -1, yoyo: true, ease: Sine.easeInOut }, 'circle')
        .to('.svg--main__bg__circle', 5.5, { rotation: 360, x: 20, scale: .6, transformOrigin: "55% 60%", repeat: -1, yoyo: true, ease: Sine.easeInOut }, 'circle')
        .to('.svg--main__woman__item', 1.5, { scale: 1.15, transformOrigin: "50% 50%", repeat: -1, yoyo: true, ease: Sine.easeInOut }, 'circle');

    squareTimeLine
        .to('.svg--main__bg__rect', 2, { rotation: 5, scale: .95, transformOrigin: "50% 50%", repeat: -1, yoyo: true }, 'square')
        .to('.svg--main__items__rect', 20, { rotation: 360, transformOrigin: '50% 50%', repeat: -1 }, 'square');

    svgMasterTml
        .to('.svg--main__woman__check', 2.25, { rotation: -45, scale: .8, transformOrigin: "50% 50%", repeat: -1, yoyo: true, ease: Sine.easeInOut }, 'masterTime')
        .add(leafTimeLine, 'masterTime')
        .to('.svg--main__flower', 3, { rotation: 5, transformOrigin: "70% 100%", ease: Back.easeInOut.config(2), yoyo: true, repeat: -1 }, 'masterTime')
        .add(circleTimeLine, 'masterTime')
        .add(squareTimeLine, 'masterTime')
        .to('.svg--main__woman__hair', 2, { rotation: -20, transformOrigin: "80% 80%", repeat: -1, ease: Back.easeInOut.config(1.7), yoyo: true }, 'masterTime');

    return svgMasterTml;
};

// SVG OUR TEAM

function svgTeam() {

    const svgTeamTml = new TimelineMax({ paused: true });
    const leafTimeLine = new TimelineMax({});
    const bgShape = new TimelineMax({ repeat: -1, yoyo: true });
    const circleTimeLine = new TimelineMax({});


    const smallPlants = document.querySelectorAll('.svg--team--leafs_plant--small');

    leafTimeLine
        .to('#svg--team--leafs_plant--big_leaf--middle', 4.5, { skewX: -15, scaleX: .5, transformOrigin: "89% 100%", repeat: -1, yoyo: true, ease: Sine.easeInOut }, 'leaf')
        .to('#svg--team--leafs_plant--big_leaf--left', 3, { skewX: 15, transformOrigin: "100% 100%", repeat: -1, yoyo: true, ease: Sine.easeInOut }, 'leaf')
        .to('#svg--team--leafs_plant--big_leaf--right', 2.8, { skewX: -17, transformOrigin: "0% 100%", repeat: -1, yoyo: true, ease: Sine.easeInOut }, 'leaf')
        .staggerTo(smallPlants, 1.5, { skewX: 20, rotation: 5, scale: .95, transformOrigin: "50% 100%", repeat: -1, yoyo: true, ease: Sine.easeInOut }, 'leaf');

    bgShape
        .to('#svg--team--bg_main', 2, {
            attr: {
                d: "M325.3,228.2c-62.7-20.4-148.7-11.9-196,43.7c-22.3,26.2-4.5,70.9-14,102.5 c-12,40-32.5,58.4-50.9,95.2c-38,75.9,1.2,122.5,81.3,123.1c81,0.6,118.9-20.6,199.9-7.1c75.1,12.6,128.1,34.7,209.6,8.4 c58.1-18.7,137-91.3, 132.5-155.7c-6.1-87.4-71.2-102.4-135.4-115c-40.9-8.1-64.2-35.9-121.4-39.5C386.3,281, 367.8,242,325.3,228.2z"
            }
        })
        .to('#svg--team--bg_main', 3, {
            attr: {
                d: "M321.2,254.9c-62.7-20.4-181.8-75.7-218.1,19.7 c-12.3,32.2,20,65.3-20.9,108.6c-28.7,30.4-54.1,88.4-41.6,127.7c25.7,80.9,86.1,63.9,166.1,64.5c81,0.6,97.8-23.6,178.8-10 c75.1,12.6,141,63.3,222.6,37c58.1-18.7,94.7-147.6,90.2-212.1c-6.1-87.4-91.9-47-156.1-59.6c-40.9-8.1-17.8-64.4-74.9-68 C422.6,260,363.7,268.7,321.2,254.9z"
            }
        });

    circleTimeLine
        .to('#svg--team--bg_circle--one', 6.5, { rotation: -360, transformOrigin: "50% 40px", repeat: -1, ease: Sine.easeInOut }, 'circle')
        .to('#svg--team--bg_circle--two', 3.5, { rotation: 180, transformOrigin: "120% 120%", repeat: -1, yoyo: true, ease: Sine.easeInOut }, 'circle')
        .to('#svg--team--bg_circle--three', 6.5, { rotation: -360, transformOrigin: "50% 40px", repeat: -1, ease: Sine.easeInOut }, 'circle')
        .to('#svg--team--bg_circle--four', 9.5, { rotation: 360, transformOrigin: "120% 50%", repeat: -1, ease: Sine.easeInOut }, 'circle')
        .to('#svg--team--bg_circle--five', 3.5, { rotation: 180, scale: 1.15, transformOrigin: "50% 40px", repeat: -1, yoyo: true, ease: Sine.easeInOut }, 'circle')
        .to('#svg--team--bg_circle--six', 6.5, { rotation: -360, transformOrigin: "50% 40px", repeat: -1, ease: Sine.easeInOut }, 'circle');

    svgTeamTml
        .add(circleTimeLine, 'masterTime')
        .add(leafTimeLine, 'masterTime')
        .add(bgShape, 'masterTime')
        .from('#svg--team--phone_item--coral', 2.5, { x: 30, y: 30, scale: ".65", transformOrigin: "50% 50%", opacity: 0, repeat: -1, yoyo: true }, 'masterTime');

    return svgTeamTml;
};

function svgContact() {

    const svgMasterTml = new TimelineMax({ paused: true });
    const marker = new TimelineMax({});
    const cloud = new TimelineMax({});

    marker
        .to('#svg--contact--marker', 1.5, { y: 10, scale: .75, transformOrigin: "50% 100%", ease: Sine.easeInOut, repeat: -1, yoyo: true });

    cloud
        .to('#svg--contact--bg_cloud--one', 5.5, { x: -125, repeat: -1, yoyo: true, ease: Sine.easeInOut }, 'cloud')
        .to('#svg--contact--bg_cloud--two', 3.5, { x: 20, repeat: -1, yoyo: true, ease: Sine.easeInOut }, 'cloud')
        .to('#svg--contact--bg_cloud--three', 5.5, { x: 80, repeat: -1, yoyo: true, ease: Sine.easeInOut }, 'cloud');

    svgMasterTml
        .add(marker, 'masterTime')
        .add(cloud, 'masterTime');

    return svgMasterTml;
};

function svgOffer() {

    const svgMasterTml = new TimelineMax({ paused: true });
    const chatOne = new TimelineMax({});
    const chatTwo = new TimelineMax({});
    const chatMaster = new TimelineMax({ repeat: -1 });
    const bgTml = new TimelineMax({});

    chatOne
        .from('#svg--offer--chat--one__bg', 1.5, { opacity: 0, scale: .0, transformOrigin: "0% 100%", ease: Sine.easeOut })
        .from('#svg--offer--chat--one__circle', .5, { scale: 0, transformOrigin: "50% 50%", ease: Sine.easeOut }, 'info')
        .from('#svg--offer--chat--one__line--one', .85, { scaleX: 0, transformOrigin: "0% 50%", ease: Sine.easeOut }, 'info')
        .from('#svg--offer--chat--one__line--two', .85, { scaleX: 0, transformOrigin: "0% 50%", delay: .3, ease: Sine.easeOut }, 'info');

    chatTwo
        .from('#svg--offer--chat--two__bg', 1.5, { opacity: 0, scale: .0, transformOrigin: "0% 100%", ease: Sine.easeOut })
        .from('#svg--offer--chat--two__circle', .5, { scale: 0, transformOrigin: "50% 50%", ease: Sine.easeOut }, 'info')
        .from('#svg--offer--chat--two__line--one', .85, { scaleX: 0, transformOrigin: "0% 50%", ease: Sine.easeOut }, 'info')
        .from('#svg--offer--chat--two__line--two', .85, { scaleX: 0, transformOrigin: "0% 50%", delay: .3, ease: Sine.easeOut }, 'info');

    chatMaster
        .add(chatOne, 'chatMaster')
        .add(chatTwo, 'chatMaster' + '+=.35')
        .to('#svg--offer--chat--one', .5, { opacity: 0, y: -30, ease: Sine.easeIn })
        .to('#svg--offer--chat--two', .5, { opacity: 0, y: -30, ease: Sine.easeIn })
        .timeScale(.7);

    bgTml
        .fromTo('#svg--offer--sun', 7.5, { rotation: -20, transformOrigin: "-200% 400%", repeat: -1, yoyo: true, ease: Sine.easeInOut }, { rotation: 20, transformOrigin: "-200% 400%", repeat: -1, yoyo: true, ease: Sine.easeInOut })
        .timeScale(.7);

    svgMasterTml
        .add(chatMaster, 'masterTime')
        .add(bgTml, 'masterTime')
        .to('#svg--offer--tree--two', 3, { rotation: 10, transformOrigin: "50% 100%", ease: Sine.easeInOut, repeat: -1, yoyo: true }, 'masterTime')
        .to('#svg--offer--tree--one', 3, { rotation: -6, transformOrigin: "50% 100%", ease: Sine.easeInOut, repeat: -1, yoyo: true }, 'masterTime')
        .fromTo('#svg--offer--bg', 7, {
            attr: {
                d: "M566,367.4c-51.6,43.1-83.9,87.2-109.3,126.2C410.9,564,387.5,618,313.3,620 c-79.1,2.2-179.2-43.6-234.3-104C37,470,21.1,415.5,60.7,367.4c91.5-111.2,113.1-252.6,252.6-252.6S673.1,278,566,367.4z"
            }, repeat: -1, yoyo: true, ease: Sine.easeInOut
        }, {
            attr: {
                d: "M566,367.4c-23.7,62.9-83.9,87.2-109.3,126.2C410.9,564,387.5,618,313.3,620 c-79.1,2.2-179.2-43.6-234.3-104C37,470,103,431.9,79,374.3c-55.3-133,3.7-245.8,143.2-245.8S615.1,236.8,566,367.4z"
            }, repeat: -1, yoyo: true, ease: Sine.easeInOut
        }, 'masterTime');

    return svgMasterTml;
};

function svgProject() {

    const svgProjectTml = new TimelineMax({ paused: true });
    const chatOne = new TimelineMax({});
    const chatTwo = new TimelineMax({});
    const chatThree = new TimelineMax({});
    const chatMaster = new TimelineMax({ repeat: -1 });
    const palette = new TimelineMax({ repeat: -1 });
    
    const paletteColors = Array.from(document.querySelectorAll('.svg--project--palette__color'));

    chatOne
        .from('#svg--project--chat--one__avatar', .75, { scale: 0, transformOrigin: "50% 50%", ease: Sine.easeOut }, 'chat')
        .from('#svg--project--chat--one__line--one', .75, { scaleX: 0, transformOrigin: "0% 50%", ease: Sine.easeOut }, 'chat' + '+=.35')
        .from('#svg--project--chat--one__line--two', .75, { scaleX: 0, transformOrigin: "0% 50%", ease: Sine.easeOut }, 'chat' + '+=.35');

    chatTwo
        .from('#svg--project--chat--two__avatar', .75, { scale: 0, transformOrigin: "50% 50%", ease: Sine.easeOut }, 'chat')
        .from('#svg--project--chat--two__line--one', .75, { scaleX: 0, transformOrigin: "0% 50%", ease: Sine.easeOut }, 'chat' + '+=.35')
        .from('#svg--project--chat--two__line--two', .75, { scaleX: 0, transformOrigin: "0% 50%", ease: Sine.easeOut }, 'chat' + '+=.35');

    chatThree
        .from('#svg--project--chat--three__avatar', .75, { scale: 0, transformOrigin: "50% 50%", ease: Sine.easeOut }, 'chat')
        .from('#svg--project--chat--three__line--one', .75, { scaleX: 0, transformOrigin: "0% 50%", ease: Sine.easeOut }, 'chat' + '+=.35')
        .from('#svg--project--chat--three__line--two', .75, { scaleX: 0, transformOrigin: "0% 50%", ease: Sine.easeOut }, 'chat' + '+=.35');

    chatMaster
        .add(chatOne, 'chatMaster')
        .add(chatTwo, 'chatMaster' + '+=.35')
        .add(chatThree, 'chatMaster' + '+=.65')
        .to('#svg--project--chat--one', .45, { y: -15, opacity: 0, ease: Sine.easeIn }, 'chatGone')
        .to('#svg--project--chat--two', .45, { y: -15, opacity: 0, ease: Sine.easeIn }, 'chatGone' + '+=.2')
        .to('#svg--project--chat--three', .45, { y: -15, opacity: 0, ease: Sine.easeIn }, 'chatGone' + '+=.4')
        .timeScale(.7);

    palette
        .from('#svg--project--palette--main', 2, { scale: 0, rotation: 360, ease: Sine.easeOut, transformOrigin: "50% 50%" }, 'palette')
        .staggerFrom(paletteColors, .5, { y: 10, opacity: 0, delay: .75, ease: Sine.easeOut }, .25, 'palette')
        .staggerTo(paletteColors, .75, { y: -20, opacity: 0, ease: Sine.easeIn }, 'paletteFade')
        .to('#svg--project--palette--main', 2, { y: -20, opacity: 0, ease: Sine.easeIn }, 'paletteFade');


    svgProjectTml
        .add(chatMaster, 'masterTime')
        .add(palette, 'masterTime')
        .to('#svg--project--bgcircle--one', 5.5, { rotation: 360, transformOrigin: "53% 50%", ease: Sine.easeInOut, repeat: -1 }, 'masterTime')
        .to('#svg--project--bgcircle--two', 4.5, { rotation: -360, transformOrigin: "47% 50%", ease: Sine.easeInOut, repeat: -1 }, 'masterTime')
        .to('#svg--project__tree--one', 2, { rotation: 10, transformOrigin: "50% 100%", ease: Sine.easeInOut, repeat: -1, yoyo: true }, 'masterTime')
        .to('#svg--project__tree--two', 2.5, { rotation: -13, transformOrigin: "50% 100%", ease: Sine.easeInOut, repeat: -1, yoyo: true }, 'masterTime');

    svgProjectTml.timeScale(.8);

    return svgProjectTml
};

function svgFormat() {

    const svgMasterTml = new TimelineMax({ paused: true });
    const circles = new TimelineMax({});
    const rings = new TimelineMax({ repeat: -1 });

    const ringsStack = Array.from(document.querySelectorAll('.svg--format--ring'));

    circles
        .to('#svg--format--circle--one', 4, { rotation: 360, transformOrigin: "50% 70%", ease: Linear.easeNone, repeat: -1 }, 'circle')
        .to('#svg--format--circle--two', 9.5, { rotation: 360, transformOrigin: "80% 140%", ease: Sine.easeInOut, repeat: -1, yoyo: true }, 'circle')
        .to('#svg--format--circle--three', 5, { rotation: 360, transformOrigin: "30% 100%", ease: Linear.easeNone, repeat: -1 }, 'circle')
        .to('#svg--format--circle--four', 4, { rotation: -180, transformOrigin: "50% 70%", ease: Sine.easeInOut, repeat: -1, yoyo: true }, 'circle')
        .to('#svg--format--circle--five', 8, { rotation: -360, transformOrigin: "150% 150%", ease: Linear.easeNone, repeat: -1 }, 'circle')
        .to('#svg--format--circle--six', 9, { rotation: 360, transformOrigin: "200% 50%", ease: Sine.easeInOut, repeat: -1, yoyo: true }, 'circle')
        .to('#svg--format--circle--seven', 7, { rotation: 300, transformOrigin: "50% 170%", ease: Sine.easeInOut, repeat: -1, yoyo: true }, 'circle')
        .to('#svg--format--circle--eight', 14, { rotation: -360, transformOrigin: "200% 200%", ease: Linear.easeNone, repeat: -1 }, 'circle');

    rings
        .from('#svg--format--ring--one', 1.5, { scale: 0, opacity: 0, transformOrigin: "50% 50%", ease: Sine.easeOut }, 'ring')
        .from('#svg--format--ring--two', 1.5, { scale: 0, opacity: 0, transformOrigin: "50% 50%", ease: Sine.easeOut }, 'ring' + '+=.35')
        .from('#svg--format--ring--three', 2, { scale: 0, opacity: 0, transformOrigin: "50% 50%", ease: Sine.easeOut }, 'ring' + '+=.75')
        .from('#svg--format--ring--four', 1.5, { scale: 0, opacity: 0, transformOrigin: "50% 50%", ease: Sine.easeOut }, 'ring' + '+=.5')
        .staggerTo(ringsStack, .75, { y: 10, opacity: 0, ease: Sine.easeIn }, .25);


    svgMasterTml
        .add(circles, 'masterTime')
        .add(rings, 'masterTime');


    return svgMasterTml
};

function svgPrinting() {

    const svgMasterTml = new TimelineMax({ paused: true });
    const paper = new TimelineMax({ repeat: -1 });

    paper
        .to('#svg--printing__card--one', 4.5, { scaleY: 0, transformOrigin: "50% 100%", ease: Sine.easeInOut }, 'print')
        .from('#svg--printing__card--two', 4.5, { scaleY: 0, transformOrigin: "50% 0%", ease: Sine.easeInOut }, 'print')
        .to('#svg--printing__card--one', .75, { opacity: 0, ease: Sine.easeInOut }, 'print' + '+=4')
        .to('#svg--printing__card--two', .75, { opacity: 0, ease: Sine.easeInOut }, 'print' + '+=4');

    svgMasterTml
        .add(paper, 'masterTime')
        .to('#svg--printing__leaf', 3, { rotation: 15, transformOrigin: "20% 100%", ease: Sine.easeInOut, repeat: -1, yoyo: true }, 'masterTime')
        .to('#svg--printing__printer__btn--green', 1.25, { opacity: 0, ease: Sine.easeInOut, repeat: -1, yoyo: true }, 'masterTime')
        .to('#svg--printing__bg', 3, { skewX: 3, ease: Sine.easeInOut, repeat: -1, yoyo: true }, 'masterTime');

    return svgMasterTml;
};

function svgOutdoor() {

    const svgMasterTml = new TimelineMax({ paused: true });
    const treeOne = new TimelineMax({ repeat: -1 });
    const treeTwo = new TimelineMax({ repeat: -1 });
    const treeThree = new TimelineMax({ repeat: -1 });
    const rollingMan = new TimelineMax({ repeat: -1 });
    const runningDog = new TimelineMax({ repeat: -1 });
    const flyingBall = new TimelineMax({ repeat: -1 });
    const sun = new TimelineMax({ repeat: -1 });

    const treeOneLeafs = document.querySelectorAll('.svg--outdoor__tree--one__leaf');
    const treeTwoLeafs = document.querySelectorAll('.svg--outdoor__tree--two__leaf');
    const treeThreeLeafs = document.querySelectorAll('.svg--outdoor__tree--three__leaf');

    treeOne
        .staggerTo(treeOneLeafs, 3, { rotation: 360, transformOrigin: "60% 60%", ease: Linear.easeNone });

    treeTwo
        .staggerTo(treeTwoLeafs, 3.5, { rotation: -360, transformOrigin: "65% 65%", ease: Linear.easeNone });

    treeThree
        .staggerTo(treeThreeLeafs, 4.5, { rotation: 360, transformOrigin: "70% 60%", ease: Linear.easeNone });

    rollingMan
        .from('#svg--outdoor__man', 3, { x: -150, opacity: .0, ease: Sine.easeOut })
        .to('#svg--outdoor__man', .5, { opacity: 0 });

    runningDog
        .from('#svg--outdoor__dog', 3, { x: 140, opacity: .0, ease: Sine.easeOut })
        .to('#svg--outdoor__dog', .5, { opacity: 0 });

    flyingBall
        .from('#svg--outdoor__ball', 1.5, { x: 100, y: -20, opacity: .0, ease: Linear.easeNone }, '+= .5')
        .to('#svg--outdoor__ball', 1.5, { x: -60, y: 20, opacity: .0, ease: Sine.easeOut });

    sun
        .from('#svg--outdoor__sun', 2.5, { x: -80, y: -55, opacity: 0, ease: Linear.easeNone })
        .to('#svg--outdoor__sun', 2.5, { x: 80, y: 55, ease: Linear.easeNone })

    svgMasterTml
        .add(treeOne, 'masterTime')
        .add(treeTwo, 'masterTime')
        .add(treeThree, 'masterTime')
        .add(rollingMan, 'masterTime')
        .add(runningDog, 'masterTime')
        .add(flyingBall, 'masterTime')
        .add(sun, 'masterTime')
        .to('#svg--outdoor__cloud--one', 7.5, { x: 150, ease: Sine.easeInOut, yoyo: true, repeat: -1 }, 'masterTime')
        .to('#svg--outdoor__cloud--two', 5.5, { x: 100, ease: Sine.easeInOut, yoyo: true, repeat: -1 }, 'masterTime')
        .to('#svg--outdoor__cloud--three', 6, { x: -100, ease: Sine.easeInOut, yoyo: true, repeat: -1 }, 'masterTime');


    return svgMasterTml;
};

function svgInternet() {

    const svgMasterTml = new TimelineMax({ paused: true });
    const devices = new TimelineMax({ repeat: -1 });

    devices
        .from('#svg--internet__device--one', 4.5, { scale: 0, transformOrigin: "100% 100%", ease: Sine.easeOut}, 'device')
        .from('#svg--internet__device--two', 3, { scale: 0, transformOrigin: "100% 100%", ease: Sine.easeOut}, 'device' + '+=1.5')
        .from('#svg--internet__device--three', 2.5, { scale: 0, transformOrigin: "100% 100%", ease: Sine.easeOut}, 'device' + '+=2.5')
        .to('#svg--internet__devices', .75, {opacity: 0, ease: Sine.easeIn});


    svgMasterTml
        .add(devices, 'masterTime')
        .to('#svg--internet__leafs-one', 3.5, {rotation: 10, transformOrigin: "0% 100%", ease: Sine.easeInOut, repeat: -1, yoyo: true}, 'masterTime')
        .to('#svg--internet__leafs--two', 2, {rotation: -8, transformOrigin: "0% 100%", ease: Sine.easeInOut, repeat: -1, yoyo: true}, 'masterTime')
        .to('#svg--internet__plant', 3, {rotation: -10, transformOrigin: "48% 100%", ease: Sine.easeInOut, repeat: -1, yoyo: true}, 'masterTime');

    return svgMasterTml;
};

function svgGadgets() {

    const svgMasterTml = new TimelineMax({ paused: true });
    const boxes = new TimelineMax({ repeat: -1 });

    boxes
        .from('#svg--gadgets__box--four', 2.5, { opacity: 0, ease: Sine.easeInOut }, 'box')
        .from('#svg--gadgets__box--two', 2.5, { opacity: 0, ease: Sine.easeInOut }, 'box' + '+=1')
        .from('#svg--gadgets__box--one', 2, { opacity: 0, ease: Sine.easeInOut }, 'box' + '+=2')
        .to('#svg--gadgets__box--four', .5, { opacity: 0, ease: Sine.easeIn }, 'boxFade')
        .to('#svg--gadgets__box--two', .5, { opacity: 0, ease: Sine.easeIn }, 'boxFade')
        .to('#svg--gadgets__box--one', .5, { opacity: 0, ease: Sine.easeIn }, 'boxFade');



    svgMasterTml
        .add(boxes, 'masterTime')
        .to('#svg--gadgets__plant--one', 6, { rotation: 20, transformOrigin: "100% 100%", ease: Sine.easeInOut, repeat: -1, yoyo: true}, 'masterTime')
        .from('#svg--gadgets__plant--two', 7.5, { rotation: -30, transformOrigin: "10% 100%", ease: Sine.easeInOut, repeat: -1, yoyo: true}, 'masterTime')
        .to('#svg--gadgets__plant--bg', 4, { rotation: -5, transformOrigin: "10% 100%", ease: Sine.easeInOut, repeat: -1, yoyo: true}, 'masterTime');

    return svgMasterTml;
};

function svgPortfolio() {

    const svgMasterTml = new TimelineMax({ paused: true });
    const palette = new TimelineMax({ repeat: -1 });
    const cards = new TimelineMax({ repeat: -1, yoyo: true });
    const circles = new TimelineMax({});
    const stars = new TimelineMax({});

    palette
        .from('#svg--portfolio__pallette--four', 1.3, { opacity: 0, rotation: 15, transformOrigin: "-10% 100%", ease: Sine.easeOut}, 'pallete')
        .from('#svg--portfolio__pallette--three', 2, { opacity: 0, rotation: 25, transformOrigin: "40% 100%", ease: Sine.easeOut}, 'pallete' + '+=.4')
        .from('#svg--portfolio__pallette--two', 2, { opacity: 0, rotation: 25, transformOrigin: "50% 100%", ease: Sine.easeOut}, 'pallete' + '+=.8')
        .from('#svg--portfolio__pallette--one', 1.6, { opacity: 0, rotation: 20, transformOrigin: "60% 100%", ease: Sine.easeOut}, 'pallete' + '+=1.2')
        .to('#svg--portfolio__palette', .85, {opacity: 0, delay: .5, ease: Sine.easeIn});

    cards
        .from('#svg--portfolio__card--one', 3, { rotation: -5, transformOrigin: "30% 85%", ease: Sine.easeInOut}, 'card')
        .from('#svg--portfolio__card--two', 3, { rotation: 8, transformOrigin: "50% 50%", ease: Sine.easeInOut}, 'card')

    circles
        .to('#svg--portfolio__circle--one', 9, { rotation: 360, transformOrigin: "140% 150%", ease: Linear.easeNone, repeat: -1}, 'circle')
        .to('#svg--portfolio__circle--two', 9, { rotation: -360, transformOrigin: "200% 200%", ease: Linear.easeNone, repeat: -1}, 'circle')
        .to('#svg--portfolio__circle--three', 4, { rotation: 360, transformOrigin: "120% 50%", ease: Linear.easeNone, repeat: -1}, 'circle');

    stars
        .to('#svg--portfolio__star--one', 9, { rotation: 360, transformOrigin: "140% 150%", ease: Linear.easeNone, repeat: -1}, 'star')
        .to('#svg--portfolio__star--two', 14, { rotation: -360, transformOrigin: "-200% -200%", ease: Linear.easeNone, repeat: -1}, 'star')
        .to('#svg--portfolio__star--three', 9, { rotation: 360, transformOrigin: "140% 150%", ease: Linear.easeNone, repeat: -1}, 'star')
        .to('#svg--portfolio__star--four', 8, { rotation: 360, transformOrigin: "100% 130%", ease: Linear.easeNone, repeat: -1}, 'star')

    svgMasterTml
        .add(palette, 'masterTime')
        .add(cards, 'masterTime')
        .add(stars, 'masterTime');

    return svgMasterTml;
}

function svgContactPage() {

    const svgMasterTml = new TimelineMax({ paused: true });
    const circles = new TimelineMax({ repeat: -1 });
    const plants = new TimelineMax({});
    const clouds = new TimelineMax({});

    circles
        .from('#svg--contact--page__circle--phone', 2, {y: -15, opacity: 0, ease: Sine.easeOut}, 'circle')
        .from('#svg--contact--page__circle--nav', 2, {y: -15, opacity: 0, ease: Sine.easeOut}, 'circle' + '+=.5')
        .from('#svg--contact--page__circle--msg', 2, {y: -15, opacity: 0, ease: Sine.easeOut}, 'circle' + '+=1')
        .to('#svg--contact--page__circle--phone', .85, {opacity: 0, ease: Sine.easeIn, delay: .5}, 'circleFade')
        .to('#svg--contact--page__circle--nav', .85, {opacity: 0, ease: Sine.easeIn, delay: .5}, 'circleFade')
        .to('#svg--contact--page__circle--msg', .85, {opacity: 0, ease: Sine.easeIn, delay: .5}, 'circleFade')

    plants
        .to('#svg--contact--page__plant--one', 5, { rotation: 10, transformOrigin: "50% 100%", ease: Sine.easeInOut, repeat: -1, yoyo: true}, 'plant')
        .to('#svg--contact--page__plant--two', 4, { rotation: -8, transformOrigin: "40% 100%", ease: Sine.easeInOut, repeat: -1, yoyo: true}, 'plant')
        .to('#svg--contact--page_plant--three', 4.5, { rotation: 10, transformOrigin: "40% 100%", ease: Sine.easeInOut, repeat: -1, yoyo: true}, 'plant')
        .to('#svg--contact--page_plant--four', 3, { rotation: 10, transformOrigin: "40% 100%", ease: Sine.easeInOut, repeat: -1, yoyo: true}, 'plant');

    svgMasterTml
        .add(circles, 'masterTime')
        .add(plants, 'masterTime')
        .add(clouds, 'masterTime');


    return svgMasterTml;
};

export { svgMain, svgTeam, svgContact, svgOffer, svgProject, svgFormat, svgPrinting, svgOutdoor, svgInternet, svgGadgets, svgPortfolio, svgContactPage };