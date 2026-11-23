/* Apex Division: sales promos.
   Controls the site banner and enrollment tagging. Promos turn on and off by date (Central time).
   Preview: add ?promo=bf to a page URL (?promo=none hides it).
   Codes live in Stripe (Products > Coupons): BLACKFRIDAY15 and BLACKFRIDAY10, both expire Dec 1, 11:59 pm CT. */

window.APEX_PROMOS = [
  {
    id: 'bf',
    start: '2026-11-23T00:00:00-06:00',
    end:   '2026-12-01T23:59:59-06:00',
    tag:   'Black Friday · Cyber Monday',
    title: '15% off. <span>Every month.</span>',
    text:  'Start any monthly coaching plan or in-person pack and save 15% for as long as you stay with code <b>BLACKFRIDAY15</b>. Self-guided programs and the Custom Program are 10% off with code <b>BLACKFRIDAY10</b>. Your code is applied automatically at checkout.',
    short: '15% off every month you stay with code BLACKFRIDAY15, applied automatically at checkout. Ends Dec 1.',
    prog:  '10% off any program, including the Custom Program, with code BLACKFRIDAY10, applied automatically at checkout. Ends Dec 1.',
    stripText: '15% off monthly training · 10% off programs',
    codes: { monthly: 'BLACKFRIDAY15', programs: 'BLACKFRIDAY10' },
    bonus: 'Black Friday: BLACKFRIDAY15 (15% off monthly, every month) / BLACKFRIDAY10 (10% off programs)'
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
