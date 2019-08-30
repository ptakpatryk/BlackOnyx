import { TweenMax, TimelineMax, Expo } from 'gsap';

function svgMain() {
    const mainCheck = document.querySelector('.svg--main__woman__check');
    if (!mainCheck) return;

    const tml = new TimelineMax({});
    const tmlTwo = new TimelineMax({});
    const frontCoralLeaf = document.querySelector('.svg--main--plant__coral__front');
    const frontLeafLine = document.querySelector('.svg--main--plant__coral__front-2');


    console.log(mainCheck)
    TweenMax.to(mainCheck, 2.25, { rotation: -45, scale: .8, transformOrigin: "50% 50%", repeat: -1, yoyo: true, ease: Sine.easeInOut });

    // Front coral leaf
    tml.to(frontCoralLeaf, 2.5, { rotation: -5, scale: .95, transformOrigin: "50% 100%", repeat: -1, yoyo: true, ease: Sine.easeOut }, 'leaf')
        .to(frontLeafLine, 2.5, { rotation: -5, scale: .95, transformOrigin: "50% 100%", repeat: -1, yoyo: true, ease: Sine.easeOut }, 'leaf')
        .to(frontCoralLeaf, 2.5, { rotation: 3, scale: .95, transformOrigin: "50% 100%", repeat: -1, yoyo: true, ease: Sine.easeOut }, 'leafBack')
        .to(frontLeafLine, 2.5, { rotation: 3, scale: .95, transformOrigin: "50% 100%", repeat: -1, yoyo: true, ease: Sine.easeOut }, 'leafBack');

    tml.pause();
    // Dark back leaf

    tmlTwo.to
}

export default svgMain;