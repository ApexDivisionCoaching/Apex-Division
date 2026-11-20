/* Apex Division: sales promos + partner perks.
   One file controls the site banner, enrollment tagging and the welcome page.
   Promos switch on and off by date automatically (Central time).
   Preview any promo: add ?promo=founding | bf | ny to a page URL (?promo=none hides it). */

window.APEX_PROMOS = [
  {
    id: 'founding',
    start: '2026-11-19T00:00:00-06:00',
    end:   '2026-11-26T23:59:59-06:00',
    tag:   'Founding Member Launch',
    title: 'Lock your rate. <span>For good.</span>',
    text:  'Start any coaching plan or in-person pack before Thanksgiving and your monthly rate never goes up for as long as you stay. Plus a free bonus: an extra Zoom call for online clients, or a free partner session for in-person clients ($25 value). Limited to our first 25 members.',
    short: 'Lock your rate for good + a free $25 bonus. First 25 members, ends Nov 26.',
    bonus: 'Founding Member rate lock + free bonus (extra Zoom call online / free partner session in person)',
    prog:  ''
  },
  {
    id: 'bf',
    start: '2026-11-27T00:00:00-06:00',
    end:   '2026-11-30T23:59:59-06:00',
    tag:   'Black Friday · Cyber Monday',
    title: 'Get fit. <span>Gift fit.</span>',
    text:  'Start any coaching plan or in-person pack this weekend and gift a friend a free 4-Week Custom Program ($65 value). Founding Member rate lock included. Self-guided programs are buy one, get one free.',
    short: 'Start coaching, gift a friend a free Custom Program ($65 value). Programs are buy one, get one free.',
    bonus: 'Black Friday: free Custom Program gifted to a friend + Founding Member rate lock',
    prog:  'Buy any of our 3 ready-made programs and get a second one free. Pick it on your download page after checkout.'
  },
  {
    id: 'ny',
    start: '2026-12-26T00:00:00-06:00',
    end:   '2027-01-15T23:59:59-06:00',
    tag:   'New Year Kickstart',
    title: 'Start the year <span>with a coach.</span>',
    text:  'Join coaching or an in-person pack by January 15 and you\'re in the 6-Week Kickstart Challenge: a free starting assessment, a re-test at week 6, and the best transformation wins a free month. Your rate is locked for as long as you stay.',
    short: 'Join by Jan 15 for the free 6-Week Challenge. Best transformation wins a free month.',
    bonus: 'New Year Kickstart Challenge (assessment + week-6 re-test, free-month prize) + rate lock',
    prog:  ''
  }
];

/* Partner perks. Leave code or url empty and the perk stays hidden everywhere. */
window.APEX_PERKS = [
  {
    id: 'absorption',
    name: 'The Absorption Company',
    what: 'High-absorption supplements',
    off: '10% off',
    code: '',          // e.g. 'APEX10' once confirmed
    url: ''            // e.g. 'https://...' store link
  }
];

window.apexPromo = function () {
  var q = new URLSearchParams(location.search).get('promo');
  if (q === 'none') return null;
  if (q) { for (var i = 0; i < APEX_PROMOS.length; i++) if (APEX_PROMOS[i].id === q) return APEX_PROMOS[i]; }
  var now = Date.now();
  for (var j = 0; j < APEX_PROMOS.length; j++) {
    var p = APEX_PROMOS[j];
    if (now >= Date.parse(p.start) && now <= Date.parse(p.end)) return p;
  }
  return null;
};
window.apexPerks = function () {
  return APEX_PERKS.filter(function (p) { return p.code && p.url; });
};
