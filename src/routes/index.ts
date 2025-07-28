const RoutesEl: Map<string, Map<string, string>> = {
    "/loic-dornel": {
        "": AboutMeLD,
        "/cv": Resume,
        "/portfolio": Portfolio,
        "/socials": SocialsLD,
    },
    "/creeperstone72": {
        "": AboutMeCS,
        "/blog": Blog,
        "/socials": SocialsCS,
    },
    "/rooted-dm": {
        "": AboutMeRD,
        "/experience": Experience,
        "/journey-of-the-marked": JourneyOfTheMarked,
        "/socials": SocialsRD,
    },
};

export default RoutesEl;