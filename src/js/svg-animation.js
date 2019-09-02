import { TweenMax, Sine } from 'gsap';


function svgMain() {

    const svgMainTml = new TimelineMax({ paused: true });
    const leafTimeLine = new TimelineMax({});
    const circleTimeLine = new TimelineMax({});
    const squareTimeLine = new TimelineMax({});

    
    leafTimeLine
        .to('.svg--main--plant__coral__front', 2.5, { rotation: -5, scale: .95, transformOrigin: "50% 100%", repeat: -1, yoyo: true, ease: Sine.easeOut }, 'leaf')
        .to('.svg--main--plant__coral__front-2', 2.5, { rotation: -5, scale: .95, transformOrigin: "50% 100%", repeat: -1, yoyo: true, ease: Sine.easeOut }, 'leaf')
        .to('.svg--main--plant__coral__front', 2.5, { rotation: 3, scale: .95, transformOrigin: "50% 100%", repeat: -1, yoyo: true, ease: Sine.easeOut }, 'leafBack')
        .to('.svg--main--plant__coral__front-2', 2.5, { rotation: 3, scale: .95, transformOrigin: "50% 100%", repeat: -1, yoyo: true, ease: Sine.easeOut }, 'leafBack');


    circleTimeLine
        .to('.svg--main__items__circle__outline__two', 6.5, {rotation: -360, transformOrigin: "50% 40px", repeat: -1, ease: Sine.easeInOut}, 'circle')
        .to('.svg--main__items__circle__outline__one', 7.5, {rotation: 360, transformOrigin: "10px 30px", repeat: -1, ease: Sine.easeInOut}, 'circle')
        .to('.svg--main__items__circle__outline__three', 7.5, {rotation: 180, transformOrigin: "120% 120%", repeat: -1, yoyo: true, ease: Sine.easeInOut}, 'circle')
        .to('.svg--main__items__circle__outline__four', 7.5, {x: 50, rotation: 360, transformOrigin: "10px 30px", repeat: -1, yoyo: true, ease: Sine.easeInOut}, 'circle')
        .to('.svg--main__items__circle__coral', 2.5, {y: 25, rotation: 45, transformOrigin: "15px 20px", repeat: -1, yoyo: true, ease: Sine.easeInOut}, 'circle')
        .to('.svg--main__items__circle__filled__one', 7.5, {y: 100, rotation: 360, transformOrigin: "10px 30px", repeat: -1, yoyo: true, ease: Sine.easeInOut}, 'circle')
        .to('.svg--main__bg__circle', 5.5, {rotation: 360, x: 20, scale: .6, transformOrigin: "55% 60%", repeat: -1, yoyo: true, ease: Sine.easeInOut}, 'circle')
        .to('.svg--main__woman__item', 1.5, {scale: 1.15, transformOrigin: "50% 50%", repeat: -1, yoyo: true,  ease: Sine.easeInOut}, 'circle' );

    squareTimeLine
        .to('.svg--main__bg__rect', 2, { rotation: 5, scale: .95, transformOrigin: "50% 50%", repeat: -1, yoyo: true}, 'square')
        .to('.svg--main__items__rect', 30, { rotation: 360, transformOrigin: '50% 50%', repeat: -1}, 'square');

    svgMainTml
        .to('.svg--main__woman__check', 2.25, { rotation: -45, scale: .8, transformOrigin: "50% 50%", repeat: -1, yoyo: true, ease: Sine.easeInOut }, 'masterTime')
        // LEAFS
        .add(leafTimeLine, 'masterTime')
        .to('.svg--main__flower', 3, { rotation: 5, transformOrigin: "70% 100%", ease: Back.easeInOut.config(2), yoyo: true, repeat: -1}, 'masterTime')
        .add(circleTimeLine, 'masterTime')
        .add(squareTimeLine, 'masterTime')
        .to('.svg--main__woman__hair', 2, {rotation: -20, transformOrigin: "80% 80%", repeat: -1, ease: Back.easeInOut.config(1.7), yoyo: true}, 'masterTime');

        return svgMainTml;
};

export default svgMain;