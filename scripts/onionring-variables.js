// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
//this file contains the stuff you edit to set up your specific webring

//the full URLs of all the sites in the ring
var sites = [
'https://wolwebring.neocities.org/',
'https://key404.neocities.org/',
'https://wormworld.neocities.org/',
'https://lovesick.cafe/',
'https://crystalleoi.neocities.org/',
'https://butt0n-z.neocities.org/',
'https://arunyi.art/',
'https://thatoddhaystack.neocities.org/',
'https://pomelo.lol/',
'https://makoenergy.neocities.org/',
'https://femboyfinder.neocities.org/',
'https://2seaters.neocities.org/',
'https://spotofmummery.com/',
'https://lucard.neocities.org/',
'https://vonfriedhof.neocities.org/',
'https://moogleboogles.neocities.org/',
'http://chicchicboom.atwebpages.com/games/ffxiv.php',
'https://inkcaps.neocities.org/',
'https://adilene.net/',
'https://ratsinthehouseofthedead.neocities.org/',
'https://cherrysoda.nu/',
'https://eggie.neocities.org/ffxiv/',
'https://bohemiansultriness.nekoweb.org/',
'https://k9id3n.neocities.org/',
'http://chassylicious.com/',
'https://sneerful.neocities.org/',
'https://cherie.nekoweb.org/',
'https://aquamiki.neocities.org/',
'https://dreamvalley.neocities.org/',
'https://blackmagegaming.com/',
'https://tre.praze.net/',
'https://sionique.neocities.org/',
'https://mossypawprints.neocities.org/',
'https://sleepycove.neocities.org/',
'https://finalfantasyix.neocities.org/',
'https://zestpunk.nekoweb.org/',
'https://fae.works/',
];

//the name of the ring
var ringName = 'Warriors of Light';

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = 'wolwebring';

//should the widget include a link to an index page?
var useIndex = true;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = 'https://wolwebring.neocities.org/';

//should the widget include a random button?
var useRandom = false;
