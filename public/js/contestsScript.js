let allContestsList = [
  {
    duration: 7200,
    end: '2022-05-06T14:20:00',
    event: 'yukicoder contest',
    href: 'https://yukicoder.me/contests/381',
    id: 33868636,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/yukicoder_me.ico',
      id: 109,
      name: 'yukicoder.me'
    },
    start: '2022-05-06T12:20:00'
  },
  {
    duration: 194100,
    end: '2022-05-08T18:25:00',
    event: '(Campus) CTRL + HACK + INSERT Sustainability. Hackathon. Round 1 Coding Challenge. Online',
    href: 'https://www.hackerearth.com/challenges/hackathon/accenture-campus-students/',
    id: 34464015,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/hackerearth_com.png',
      id: 73,
      name: 'hackerearth.com'
    },
    start: '2022-05-06T12:30:00'
  },
  {
    duration: 798900,
    end: '2022-05-15T18:25:00',
    event: 'Amazon Ads – Women’s Coding Challenge. Competitive',
    href: 'https://www.hackerearth.com/challenges/competitive/amazon-ads-womens-coding-challenge/',
    id: 34348741,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/hackerearth_com.png',
      id: 73,
      name: 'hackerearth.com'
    },
    start: '2022-05-06T12:30:00'
  },
  {
    duration: 798900,
    end: '2022-05-15T18:25:00',
    event: 'CTRL + HACK + INSERT Sustainability. Hackathon. Round 1 Coding Challenge. Online',
    href: 'https://www.hackerearth.com/challenges/hackathon/accenture-laterals-2/',
    id: 34419624,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/hackerearth_com.png',
      id: 73,
      name: 'hackerearth.com'
    },
    start: '2022-05-06T12:30:00'
  },
  {
    duration: 7200,
    end: '2022-05-06T16:35:00',
    event: 'Codeforces Round #788 (Div. 2)',
    href: 'http://codeforces.com/contests/1670',
    id: 34356776,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/codeforces_com.png',
      id: 1,
      name: 'codeforces.com'
    },
    start: '2022-05-06T14:35:00'
  },
  {
    duration: 259200,
    end: '2022-05-09T15:30:00',
    event: 'Data Sprint 73 - Airline Passenger Satisfaction',
    href: 'https://dphi.tech/challenges/data-sprint-73-airline-passenger-satisfaction/230/',
    id: 34792462,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/dphi_tech.ico',
      id: 124,
      name: 'dphi.tech'
    },
    start: '2022-05-06T15:30:00'
  },
  {
    duration: 86400,
    end: '2022-05-07T16:00:00',
    event: 'EZ CTF | Beginner Friendly',
    href: 'https://ctftime.org/event/1655/',
    id: 34821056,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/ctftime_org.ico',
      id: 70,
      name: 'ctftime.org'
    },
    start: '2022-05-06T16:00:00'
  },
  {
    duration: 172800,
    end: '2022-05-09T00:00:00',
    event: 'San Diego CTF 2022',
    href: 'https://ctftime.org/event/1495/',
    id: 32092328,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/ctftime_org.ico',
      id: 70,
      name: 'ctftime.org'
    },
    start: '2022-05-07T00:00:00'
  },
  {
    duration: 10800,
    end: '2022-05-07T13:00:00',
    event: 'Олимпиада ФПМИ-2022 (отбор, 6-9 класс)',
    href: 'https://acm.bsu.by/contests/175/standings/',
    id: 34884338,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/acm_bsu_by.png',
      id: 97,
      name: 'acm.bsu.by'
    },
    start: '2022-05-07T10:00:00'
  },
  {
    duration: 10800,
    end: '2022-05-07T13:00:00',
    event: 'Олимпиада ФПМИ-2022 (отбор, 10-11 класс)',
    href: 'https://acm.bsu.by/contests/176/standings/',
    id: 34884339,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/acm_bsu_by.png',
      id: 97,
      name: 'acm.bsu.by'
    },
    start: '2022-05-07T10:00:00'
  },
  {
    duration: 9000,
    end: '2022-05-07T14:30:00',
    event: 'AtCoder Grand Contest 057',
    href: 'https://atcoder.jp/contests/agc057',
    id: 34464195,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/atcoder_jp.png',
      id: 93,
      name: 'atcoder.jp'
    },
    start: '2022-05-07T12:00:00'
  },
  {
    duration: 9000,
    end: '2022-05-07T16:00:00',
    event: 'CodeNite May 2022 x Mercor',
    href: 'https://www.codechef.com/MRCR2022',
    id: 34883134,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/codechef_com.png',
      id: 2,
      name: 'codechef.com'
    },
    start: '2022-05-07T13:30:00'
  },
  {
    duration: 86400,
    end: '2022-05-08T17:00:00',
    event: 'Bug Wars: The Last Hope',
    href: 'https://app.codility.com/programmers/challenges/bug_wars2022/',
    id: 34916015,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/codility_com.png',
      id: 113,
      name: 'codility.com'
    },
    start: '2022-05-07T17:00:00'
  },
  {
    duration: 18000,
    end: '2022-05-07T23:00:00',
    event: '2022 NAC Practice Contest 3',
    href: 'https://open.kattis.com/contests/nac22practice3',
    id: 34355508,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/open_kattis_com.png',
      id: 91,
      name: 'open.kattis.com'
    },
    start: '2022-05-07T18:00:00'
  },
  {
    duration: 0,
    end: '2022-05-07T19:00:00',
    event: 'Problem 797',
    href: 'https://projecteuler.net/news',
    id: 34191437,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/projecteuler_net.ico',
      id: 65,
      name: 'projecteuler.net'
    },
    start: '2022-05-07T19:00:00'
  },
  {
    duration: 5400,
    end: '2022-05-08T04:00:00',
    event: 'Weekly Contest 292',
    href: 'https://leetcode.com/contest/weekly-contest-292',
    id: 34849657,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/leetcode_com.png',
      id: 102,
      name: 'leetcode.com'
    },
    start: '2022-05-08T02:30:00'
  },
  {
    duration: 18000,
    end: '2022-05-08T11:00:00',
    event: 'Программирование - профессионалы (ком. 2022)',
    href: 'http://dl.gsu.by/LC.jsp?Type=-1&lng=ru',
    id: 33359735,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/dl_gsu_by.gif',
      id: 4,
      name: 'dl.gsu.by'
    },
    start: '2022-05-08T06:00:00'
  },
  {
    duration: 18000,
    end: '2022-05-08T13:00:00',
    event: 'Седьмая командная олимпиада',
    href: 'https://acmp.ru/asp/champ/index.asp?main=stage_info&id_stage=42351',
    id: 34036967,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/acmp_ru.png',
      id: 5,
      name: 'acmp.ru'
    },
    start: '2022-05-08T08:00:00'
  },
  {
    duration: 6000,
    end: '2022-05-08T13:40:00',
    event: 'AtCoder Beginner Contest 250',
    href: 'https://atcoder.jp/contests/abc250',
    id: 34486935,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/atcoder_jp.png',
      id: 93,
      name: 'atcoder.jp'
    },
    start: '2022-05-08T12:00:00'
  },
  {
    duration: 5400,
    end: '2022-05-08T15:00:00',
    event: 'Interview Series #49',
    href: 'https://practice.geeksforgeeks.org/contest/interview-series-49-1853/',
    id: 34771547,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/geeksforgeeks_org.png',
      id: 126,
      name: 'geeksforgeeks.org'
    },
    start: '2022-05-08T13:30:00'
  },
  {
    duration: 7200,
    end: '2022-05-08T16:35:00',
    event: 'Codeforces Round #789 (Div. 2)',
    href: 'http://codeforces.com/contests/1678',
    id: 34893665,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/codeforces_com.png',
      id: 1,
      name: 'codeforces.com'
    },
    start: '2022-05-08T14:35:00'
  },
  {
    duration: 7200,
    end: '2022-05-08T16:35:00',
    event: 'Codeforces Round #789 (Div. 1)',
    href: 'http://codeforces.com/contests/1677',
    id: 34893664,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/codeforces_com.png',
      id: 1,
      name: 'codeforces.com'
    },
    start: '2022-05-08T14:35:00'
  },
  {
    duration: 7200,
    end: '2022-05-10T16:35:00',
    event: 'Codeforces Round #790 (Div. 4)',
    href: 'http://codeforces.com/contests/1676',
    id: 34738204,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/codeforces_com.png',
      id: 1,
      name: 'codeforces.com'
    },
    start: '2022-05-10T14:35:00'
  },
  {
    duration: 10800,
    end: '2022-05-11T17:30:00',
    event: 'CodeChef Starters 38',
    href: 'https://www.codechef.com/START38',
    id: 34605461,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/codechef_com.png',
      id: 2,
      name: 'codechef.com'
    },
    start: '2022-05-11T14:30:00'
  },
  {
    duration: 7200,
    end: '2022-05-12T03:00:00',
    event: 'SRM 829',
    href: 'https://topcoder.com/community/events/',
    id: 33648698,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/topcoder_com.ico',
      id: 12,
      name: 'topcoder.com'
    },
    start: '2022-05-12T01:00:00'
  },
  {
    duration: 7200,
    end: '2022-05-12T17:00:00',
    event: 'Sort Me Round №6',
    href: 'https://sort-me.org/contest/15',
    id: 34907224,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/sort-me_org.ico',
      id: 134,
      name: 'sort-me.org'
    },
    start: '2022-05-12T15:00:00'
  },
  {
    duration: 7200,
    end: '2022-05-13T14:20:00',
    event: 'yukicoder contest',
    href: 'https://yukicoder.me/contests/380',
    id: 33450795,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/yukicoder_me.ico',
      id: 109,
      name: 'yukicoder.me'
    },
    start: '2022-05-13T12:20:00'
  },
  {
    duration: 194100,
    end: '2022-05-15T18:25:00',
    event: '(Campus) CTRL + HACK + INSERT Sustainability. Hackathon. Round 2 Coding Challenge. Online',
    href: 'https://www.hackerearth.com/challenges/hackathon/accenture-campus-students/',
    id: 34464016,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/hackerearth_com.png',
      id: 73,
      name: 'hackerearth.com'
    },
    start: '2022-05-13T12:30:00'
  },
  {
    duration: 259200,
    end: '2022-05-16T15:30:00',
    event: 'Data Sprint 74',
    href: 'https://dphi.tech/challenges/data-sprint-74/227/',
    id: 34474763,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/dphi_tech.ico',
      id: 124,
      name: 'dphi.tech'
    },
    start: '2022-05-13T15:30:00'
  },
  {
    duration: 86400,
    end: '2022-05-14T17:00:00',
    event: 'm0leCon CTF 2022 Teaser',
    href: 'https://ctftime.org/event/1615/',
    id: 34186683,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/ctftime_org.ico',
      id: 70,
      name: 'ctftime.org'
    },
    start: '2022-05-13T17:00:00'
  },
  {
    duration: 864000,
    end: '2022-05-23T18:30:00',
    event: 'May 2022 Coding Marathon - 10 Days Competitive coding challenge. Rated',
    href: 'https://mycode.prepbytes.com/contest/MARATHONMAY22',
    id: 34223061,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/mycode_prepbytes_com.ico',
      id: 125,
      name: 'mycode.prepbytes.com'
    },
    start: '2022-05-13T18:30:00'
  },
  {
    duration: 172800,
    end: '2022-05-15T23:00:00',
    event: 'TJCTF 2022',
    href: 'https://ctftime.org/event/1599/',
    id: 33793215,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/ctftime_org.ico',
      id: 70,
      name: 'ctftime.org'
    },
    start: '2022-05-13T23:00:00'
  },
  {
    duration: 28800,
    end: '2022-05-14T16:00:00',
    event: 'CTF InterIUT 2022',
    href: 'https://ctftime.org/event/1642/',
    id: 34821055,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/ctftime_org.ico',
      id: 70,
      name: 'ctftime.org'
    },
    start: '2022-05-14T08:00:00'
  },
  {
    duration: 7200,
    end: '2022-05-14T11:35:00',
    event: 'Codeforces Round #791 (Div. 2)',
    href: 'http://codeforces.com/contests/1679',
    id: 34900060,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/codeforces_com.png',
      id: 1,
      name: 'codeforces.com'
    },
    start: '2022-05-14T09:35:00'
  },
  {
    duration: 86400,
    end: '2022-05-15T10:00:00',
    event: '@HackDay Final 2022',
    href: 'https://ctftime.org/event/1607/',
    id: 33868696,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/ctftime_org.ico',
      id: 70,
      name: 'ctftime.org'
    },
    start: '2022-05-14T10:00:00'
  },
  {
    duration: 21600,
    end: '2022-05-14T17:00:00',
    event: 'Challenge the Cyber - Cyber Express',
    href: 'https://ctftime.org/event/1640/',
    id: 34821054,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/ctftime_org.ico',
      id: 70,
      name: 'ctftime.org'
    },
    start: '2022-05-14T11:00:00'
  },
  {
    duration: 6000,
    end: '2022-05-14T13:40:00',
    event: 'Panasonic Programming Contest 2022(AtCoder Beginner Contest 251)',
    href: 'https://atcoder.jp/contests/abc251',
    id: 34790583,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/atcoder_jp.png',
      id: 93,
      name: 'atcoder.jp'
    },
    start: '2022-05-14T12:00:00'
  },
  {
    duration: 9000,
    end: '2022-05-14T16:30:00',
    event: 'Code Jam Round 2',
    href: 'https://codingcompetitions.withgoogle.com/codejam/round/00000000008778ec',
    id: 31261735,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/codingcompetitions_withgoogle_com.ico',
      id: 35,
      name: 'codingcompetitions.withgoogle.com'
    },
    start: '2022-05-14T14:00:00'
  },
  {
    duration: 5400,
    end: '2022-05-14T16:00:00',
    event: 'Biweekly Contest 78',
    href: 'https://leetcode.com/contest/biweekly-contest-78',
    id: 34838544,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/leetcode_com.png',
      id: 102,
      name: 'leetcode.com'
    },
    start: '2022-05-14T14:30:00'
  },
  {
    duration: 0,
    end: '2022-05-14T22:00:00',
    event: 'Problem 798',
    href: 'https://projecteuler.net/news',
    id: 34191438,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/projecteuler_net.ico',
      id: 65,
      name: 'projecteuler.net'
    },
    start: '2022-05-14T22:00:00'
  },
  {
    duration: 18000,
    end: '2022-05-15T11:00:00',
    event: 'Программирование - профессионалы (ком. 2022)',
    href: 'http://dl.gsu.by/LC.jsp?Type=-1&lng=ru',
    id: 33359736,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/dl_gsu_by.gif',
      id: 4,
      name: 'dl.gsu.by'
    },
    start: '2022-05-15T06:00:00'
  },
  {
    duration: 7200,
    end: '2022-05-15T14:00:00',
    event: 'AtCoder Regular Contest 140',
    href: 'https://atcoder.jp/contests/arc140',
    id: 34770456,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/atcoder_jp.png',
      id: 93,
      name: 'atcoder.jp'
    },
    start: '2022-05-15T12:00:00'
  },
  {
    duration: 10800,
    end: '2022-05-15T17:30:00',
    event: 'May Lunchtime 2022 (Rated for All)',
    href: 'https://www.codechef.com/LTIME108',
    id: 34606095,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/codechef_com.png',
      id: 2,
      name: 'codechef.com'
    },
    start: '2022-05-15T14:30:00'
  },
  {
    duration: 7200,
    end: '2022-05-18T03:00:00',
    event: 'ROOKIE SRM 13',
    href: 'https://topcoder.com/community/events/',
    id: 33649106,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/topcoder_com.ico',
      id: 12,
      name: 'topcoder.com'
    },
    start: '2022-05-18T01:00:00'
  },
  {
    duration: 10800,
    end: '2022-05-18T17:30:00',
    event: 'CodeChef Starters 39',
    href: 'https://www.codechef.com/START39',
    id: 34605460,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/codechef_com.png',
      id: 2,
      name: 'codechef.com'
    },
    start: '2022-05-18T14:30:00'
  },
  {
    duration: 604800,
    end: '2022-05-25T17:00:00',
    event: 'Marathon Match 136',
    href: 'https://topcoder.com/community/events/',
    id: 33501636,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/topcoder_com.ico',
      id: 12,
      name: 'topcoder.com'
    },
    start: '2022-05-18T17:00:00'
  },
  {
    duration: 259200,
    end: '2022-05-23T09:30:00',
    event: 'May Long Two 2022 (Rated for Div 3 & 4)',
    href: 'https://www.codechef.com/MAY222',
    id: 34605768,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/codechef_com.png',
      id: 2,
      name: 'codechef.com'
    },
    start: '2022-05-20T09:30:00'
  },
  {
    duration: 9000,
    end: '2022-05-20T14:50:00',
    event: 'yukicoder contest',
    href: 'https://yukicoder.me/contests/382',
    id: 33945143,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/yukicoder_me.ico',
      id: 109,
      name: 'yukicoder.me'
    },
    start: '2022-05-20T12:20:00'
  },
  {
    duration: 32400,
    end: '2022-05-20T23:00:00',
    event: 'saarCTF 2022',
    href: 'https://ctftime.org/event/1611/',
    id: 33976315,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/ctftime_org.ico',
      id: 70,
      name: 'ctftime.org'
    },
    start: '2022-05-20T14:00:00'
  },
  {
    duration: 0,
    end: '2022-05-21T12:00:00',
    event: 'hackrocks & HackArmour CTF',
    href: 'https://ctftime.org/event/1622/',
    id: 34240440,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/ctftime_org.ico',
      id: 70,
      name: 'ctftime.org'
    },
    start: '2022-05-21T12:00:00'
  },
  {
    duration: 6000,
    end: '2022-05-21T13:40:00',
    event: 'AtCoder Beginner Contest 252',
    href: 'https://atcoder.jp/contests/abc252',
    id: 34791742,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/atcoder_jp.png',
      id: 93,
      name: 'atcoder.jp'
    },
    start: '2022-05-21T12:00:00'
  },
  {
    duration: 108000,
    end: '2022-05-22T20:00:00',
    event: 'Hack-A-Sat 3 Qualifiers',
    href: 'https://ctftime.org/event/1562/',
    id: 32827526,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/ctftime_org.ico',
      id: 70,
      name: 'ctftime.org'
    },
    start: '2022-05-21T14:00:00'
  },
  {
    duration: 9000,
    end: '2022-05-21T17:00:00',
    event: 'Job-A-Thon 9: Hiring Challenge',
    href: 'https://practice.geeksforgeeks.org/contest/job-a-thon-9-hiring-challenge/',
    id: 34744961,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/geeksforgeeks_org.png',
      id: 126,
      name: 'geeksforgeeks.org'
    },
    start: '2022-05-21T14:30:00'
  },
  {
    duration: 7200,
    end: '2022-05-21T18:00:00',
    event: 'TCO22 Algorithm Round 2A',
    href: 'https://topcoder.com/community/events/',
    id: 28117996,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/topcoder_com.ico',
      id: 12,
      name: 'topcoder.com'
    },
    start: '2022-05-21T16:00:00'
  },
  {
    duration: 18000,
    end: '2022-05-22T11:00:00',
    event: 'Программирование - профессионалы (ком. 2022)',
    href: 'http://dl.gsu.by/LC.jsp?Type=-1&lng=ru',
    id: 33359737,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/dl_gsu_by.gif',
      id: 4,
      name: 'dl.gsu.by'
    },
    start: '2022-05-22T06:00:00'
  },
  {
    duration: 10800,
    end: '2022-05-22T14:00:00',
    event: 'Kick Start Round C',
    href: 'https://codingcompetitions.withgoogle.com/kickstart/round/00000000008cb4d1',
    id: 31261740,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/codingcompetitions_withgoogle_com.ico',
      id: 35,
      name: 'codingcompetitions.withgoogle.com'
    },
    start: '2022-05-22T11:00:00'
  },
  {
    duration: 10800,
    end: '2022-05-25T17:30:00',
    event: 'CodeChef Starters 40',
    href: 'https://www.codechef.com/START40',
    id: 34605459,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/codechef_com.png',
      id: 2,
      name: 'codechef.com'
    },
    start: '2022-05-25T14:30:00'
  },
  {
    duration: 14400,
    end: '2022-06-05T12:00:00',
    event: 'Training Camp',
    href: 'http://usaco.org/',
    id: 33401593,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/usaco_org.ico',
      id: 25,
      name: 'usaco.org'
    },
    start: '2022-05-26T12:00:00'
  },
  {
    duration: 25200,
    end: '2022-05-27T17:00:00',
    event: "Hacktrick CTF'22",
    href: 'https://ctftime.org/event/1650/',
    id: 34821052,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/ctftime_org.ico',
      id: 70,
      name: 'ctftime.org'
    },
    start: '2022-05-27T10:00:00'
  },
  {
    duration: 7200,
    end: '2022-05-27T14:20:00',
    event: 'yukicoder contest',
    href: 'https://yukicoder.me/contests/384',
    id: 34085002,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/yukicoder_me.ico',
      id: 109,
      name: 'yukicoder.me'
    },
    start: '2022-05-27T12:20:00'
  },
  {
    duration: 9000,
    end: '2022-05-27T18:00:00',
    event: "Newton's coding challenge May 2022",
    href: 'https://my.newtonschool.co/course/tjqfc9rll444/assignment/gze7vl2parjq/dashboard/',
    id: 34819930,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/my_newtonschool_co.ico',
      id: 130,
      name: 'my.newtonschool.co'
    },
    start: '2022-05-27T15:30:00'
  },
  {
    duration: 9000,
    end: '2022-05-27T18:30:00',
    event: 'May 2022 Prime Time Coding Challenge - Competitive Programming. Rated',
    href: 'https://mycode.prepbytes.com/contest/PRIMETIMEMAY22',
    id: 34223062,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/mycode_prepbytes_com.ico',
      id: 125,
      name: 'mycode.prepbytes.com'
    },
    start: '2022-05-27T16:00:00'
  },
  {
    duration: 129600,
    end: '2022-05-29T04:00:00',
    event: 'BYUCTF 2022',
    href: 'https://ctftime.org/event/1660/',
    id: 34916136,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/ctftime_org.ico',
      id: 70,
      name: 'ctftime.org'
    },
    start: '2022-05-27T16:00:00'
  },
  {
    duration: 716400,
    end: '2022-06-05T10:00:00',
    event: 'AtCoder Heuristic Contest 011',
    href: 'https://atcoder.jp/contests/ahc011',
    id: 34749744,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/atcoder_jp.png',
      id: 93,
      name: 'atcoder.jp'
    },
    start: '2022-05-28T03:00:00'
  },
  {
    duration: 7200,
    end: '2022-05-28T18:00:00',
    event: 'SRM 830',
    href: 'https://topcoder.com/community/events/',
    id: 33648699,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/topcoder_com.ico',
      id: 12,
      name: 'topcoder.com'
    },
    start: '2022-05-28T16:00:00'
  },
  {
    duration: 431999,
    end: '2022-06-02T18:59:59',
    event: 'HSCTF 9',
    href: 'https://ctftime.org/event/1627/',
    id: 34430425,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/ctftime_org.ico',
      id: 70,
      name: 'ctftime.org'
    },
    start: '2022-05-28T19:00:00'
  },
  {
    duration: 18000,
    end: '2022-05-29T11:00:00',
    event: 'Программирование - профессионалы (ком. 2022)',
    href: 'http://dl.gsu.by/LC.jsp?Type=-1&lng=ru',
    id: 33359738,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/dl_gsu_by.gif',
      id: 4,
      name: 'dl.gsu.by'
    },
    start: '2022-05-29T06:00:00'
  },
  {
    duration: 7200,
    end: '2022-06-01T13:00:00',
    event: 'TCO22 Algorithm Round 2B',
    href: 'https://topcoder.com/community/events/',
    id: 28117997,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/topcoder_com.ico',
      id: 12,
      name: 'topcoder.com'
    },
    start: '2022-06-01T11:00:00'
  },
  {
    duration: 10800,
    end: '2022-06-01T17:30:00',
    event: 'CodeChef Starters 41',
    href: 'https://www.codechef.com/START41',
    id: 34606091,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/codechef_com.png',
      id: 2,
      name: 'codechef.com'
    },
    start: '2022-06-01T14:30:00'
  },
  {
    duration: 7200,
    end: '2022-06-03T14:20:00',
    event: 'yukicoder contest（オムニバス 問題募集）',
    href: 'https://yukicoder.me/contests/383',
    id: 33946200,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/yukicoder_me.ico',
      id: 109,
      name: 'yukicoder.me'
    },
    start: '2022-06-03T12:20:00'
  },
  {
    duration: 172800,
    end: '2022-06-05T16:00:00',
    event: 'SEETF 2022',
    href: 'https://ctftime.org/event/1543/',
    id: 32205784,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/ctftime_org.ico',
      id: 70,
      name: 'ctftime.org'
    },
    start: '2022-06-03T16:00:00'
  },
  {
    duration: 259200,
    end: '2022-06-07T00:00:00',
    event: 'BCACTF 3.0',
    href: 'https://ctftime.org/event/1602/',
    id: 33793214,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/ctftime_org.ico',
      id: 70,
      name: 'ctftime.org'
    },
    start: '2022-06-04T00:00:00'
  },
  {
    duration: 172800,
    end: '2022-06-06T13:00:00',
    event: 'n00bzCTF',
    href: 'https://ctftime.org/event/1657/',
    id: 34853203,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/ctftime_org.ico',
      id: 70,
      name: 'ctftime.org'
    },
    start: '2022-06-04T13:00:00'
  },
  {
    duration: 9000,
    end: '2022-06-04T16:30:00',
    event: 'Code Jam Round 3',
    href: 'https://codingcompetitions.withgoogle.com/codejam/round/00000000008779b4',
    id: 31261736,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/codingcompetitions_withgoogle_com.ico',
      id: 35,
      name: 'codingcompetitions.withgoogle.com'
    },
    start: '2022-06-04T14:00:00'
  },
  {
    duration: 86400,
    end: '2022-06-05T15:00:00',
    event: 'SunshineCTF 2022',
    href: 'https://ctftime.org/event/1629/',
    id: 34324435,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/ctftime_org.ico',
      id: 70,
      name: 'ctftime.org'
    },
    start: '2022-06-04T15:00:00'
  },
  {
    duration: 18000,
    end: '2022-06-05T11:00:00',
    event: 'Программирование - профессионалы (ком. 2022)',
    href: 'http://dl.gsu.by/LC.jsp?Type=-1&lng=ru',
    id: 33359739,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/dl_gsu_by.gif',
      id: 4,
      name: 'dl.gsu.by'
    },
    start: '2022-06-05T06:00:00'
  },
  {
    duration: 9000,
    end: '2022-06-05T17:00:00',
    event: 'June Cook-Off 2022 (Rated for All)',
    href: 'https://www.codechef.com/COOK142',
    id: 34606090,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/codechef_com.png',
      id: 2,
      name: 'codechef.com'
    },
    start: '2022-06-05T14:30:00'
  },
  {
    duration: 345600,
    end: '2022-06-10T12:00:00',
    event: 'Grey Cat The Flag',
    href: 'https://ctftime.org/event/1643/',
    id: 34821051,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/ctftime_org.ico',
      id: 70,
      name: 'ctftime.org'
    },
    start: '2022-06-06T12:00:00'
  },
  {
    duration: 7200,
    end: '2022-06-08T13:00:00',
    event: 'SRM 831',
    href: 'https://topcoder.com/community/events/',
    id: 33648700,
    resource: {
      icon: '/imagefit/static_resize/64x64/img/resources/topcoder_com.ico',
      id: 12,
      name: 'topcoder.com'
    },
    start: '2022-06-08T11:00:00'
  }
]
// let allContestsList = [{
//   duration: 5400,
//   end: '2022-03-05T16:00:00',
//   event: 'Biweekly Contest 73',
//   href: 'https://leetcode.com/contest/biweekly-contest-73',
//   id: 33276095,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/leetcode_com.png',
//     id: 102,
//     name: 'leetcode.com'
//   },
//   start: '2022-03-05T14:30:00'
// },
// {
//   duration: 9000,
//   end: '2022-03-05T17:00:00',
//   event: 'March Cook-Off 2022',
//   href: 'https://www.codechef.com/COOK139',
//   id: 33389191,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/codechef_com.png',
//     id: 2,
//     name: 'codechef.com'
//   },
//   start: '2022-03-05T14:30:00'
// },
// {
//   duration: 8940,
//   end: '2022-03-05T17:59:00',
//   event: 'Airwrk | Coding Test [public, icpc, individual]',
//   href: 'https://lightoj.com/contest/airwrk',
//   id: 33590414,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/lightoj_com.png',
//     id: 122,
//     name: 'lightoj.com'
//   },
//   start: '2022-03-05T15:30:00'
// },
// {
//   duration: 0,
//   end: '2022-03-05T16:00:00',
//   event: 'Problem 788. Dominating Numbers',
//   href: 'https://projecteuler.net/problem=788',
//   id: 33217209,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/projecteuler_net.ico',
//     id: 65,
//     name: 'projecteuler.net'
//   },
//   start: '2022-03-05T16:00:00'
// },
// {
//   duration: 8100,
//   end: '2022-03-05T18:30:00',
//   event: '2021 Southeast USA Regional Contest — Division 2 — Practice',
//   href: 'https://open.kattis.com/contests/seusa21d2practice',
//   id: 33594389,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/open_kattis_com.png',
//     id: 91,
//     name: 'open.kattis.com'
//   },
//   start: '2022-03-05T16:15:00'
// },
// {
//   duration: 8100,
//   end: '2022-03-05T18:30:00',
//   event: '2021 Southeast USA Regional Contest — Division 1 — Practice',
//   href: 'https://open.kattis.com/contests/seusa21d1practice',
//   id: 33594388,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/open_kattis_com.png',
//     id: 91,
//     name: 'open.kattis.com'
//   },
//   start: '2022-03-05T16:15:00'
// },
// {
//   duration: 86400,
//   end: '2022-03-06T18:30:00',
//   event: 'Code India Code: Qualification Round',
//   href: 'https://practice.geeksforgeeks.org/contest/gfg-mega-contest-qualification-round/',
//   id: 33149261,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/geeksforgeeks_org.png',
//     id: 126,
//     name: 'geeksforgeeks.org'
//   },
//   start: '2022-03-05T18:30:00'
// },
// {
//   duration: 0,
//   end: '2022-03-05T21:00:00',
//   event: 'Заключительный очный этап. XVI Открытая олимпиада школьников по программированию',
//   href: 'https://olympiads.ru/zaoch/',
//   id: 33087876,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/olympiads_ru.ico',
//     id: 85,
//     name: 'olympiads.ru/zaoch'
//   },
//   start: '2022-03-05T21:00:00'
// },
// {
//   duration: 32400,
//   end: '2022-03-06T09:00:00',
//   event: 'IDEH v3 CTF',
//   href: 'https://ctftime.org/event/1596/',
//   id: 33541985,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/ctftime_org.ico',
//     id: 70,
//     name: 'ctftime.org'
//   },
//   start: '2022-03-06T00:00:00'
// },
// {
//   duration: 640800,
//   end: '2022-03-13T11:00:00',
//   event: '8th Asprova Programming Contest',
//   href: 'https://atcoder.jp/contests/asprocon8',
//   id: 32954437,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/atcoder_jp.png',
//     id: 93,
//     name: 'atcoder.jp'
//   },
//   start: '2022-03-06T01:00:00'
// },
// {
//   duration: 5400,
//   end: '2022-03-06T04:00:00',
//   event: 'Weekly Contest 283',
//   href: 'https://leetcode.com/contest/weekly-contest-283',
//   id: 33444506,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/leetcode_com.png',
//     id: 102,
//     name: 'leetcode.com'
//   },
//   start: '2022-03-06T02:30:00'
// },
// {
//   duration: 18000,
//   end: '2022-03-06T11:00:00',
//   event: 'Программирование - профессионалы (лич. 2021-2022)',
//   href: 'http://dl.gsu.by/LC.jsp?Type=-1&lng=ru',
//   id: 32619348,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/dl_gsu_by.gif',
//     id: 4,
//     name: 'dl.gsu.by'
//   },
//   start: '2022-03-06T06:00:00'
// },
// {
//   duration: 8100,
//   end: '2022-03-06T12:10:00',
//   event: 'Codeforces Round #775 (Div. 2, based on Moscow Open Olympiad in Informatics)',
//   href: 'http://codeforces.com/contests/1649',
//   id: 33509011,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/codeforces_com.png',
//     id: 1,
//     name: 'codeforces.com'
//   },
//   start: '2022-03-06T09:55:00'
// },
// {
//   duration: 8100,
//   end: '2022-03-06T12:10:00',
//   event: 'Codeforces Round #775 (Div. 1, based on Moscow Open Olympiad in Informatics)',
//   href: 'http://codeforces.com/contests/1648',
//   id: 33509010,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/codeforces_com.png',
//     id: 1,
//     name: 'codeforces.com'
//   },
//   start: '2022-03-06T09:55:00'
// },
// {
//   duration: 9000,
//   end: '2022-03-06T14:00:00',
//   event: 'CP Titans 2.0',
//   href: 'https://www.codechef.com/CPTI2O22',
//   id: 33932969,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/codechef_com.png',
//     id: 2,
//     name: 'codechef.com'
//   },
//   start: '2022-03-06T11:30:00'
// },
// {
//   duration: 18000,
//   end: '2022-03-06T18:00:00',
//   event: 'AGM 2022 Qualification Round. LucaSeri',
//   href: 'http://codeforces.com/gym/103604',
//   id: 33806456,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/codeforces_com_gyms.png',
//     id: 64,
//     name: 'codeforces.com/gyms'
//   },
//   start: '2022-03-06T13:00:00'
// },
// {
//   duration: 3600,
//   end: '2022-03-06T14:30:00',
//   event: 'Interview Series: Atlassian',
//   href: 'https://practice.geeksforgeeks.org/contest/interview-series-atlassian-4644/',
//   id: 33312844,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/geeksforgeeks_org.png',
//     id: 126,
//     name: 'geeksforgeeks.org'
//   },
//   start: '2022-03-06T13:30:00'
// },
// {
//   duration: 10800,
//   end: '2022-03-06T17:30:14',
//   event: 'Code Arena 2',
//   href: 'https://www.codechef.com/COAR2022',
//   id: 33932968,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/codechef_com.png',
//     id: 2,
//     name: 'codechef.com'
//   },
//   start: '2022-03-06T14:30:14'
// },
// {
//   duration: 7200,
//   end: '2022-03-06T17:30:00',
//   event: 'DECATHLON',
//   href: 'https://www.codechef.com/DCTL2022',
//   id: 33932967,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/codechef_com.png',
//     id: 2,
//     name: 'codechef.com'
//   },
//   start: '2022-03-06T15:30:00'
// },
// {
//   duration: 7200,
//   end: '2022-03-07T16:30:00',
//   event: 'Clash Wildcard',
//   href: 'https://www.codechef.com/CLWC2022',
//   id: 33932966,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/codechef_com.png',
//     id: 2,
//     name: 'codechef.com'
//   },
//   start: '2022-03-07T14:30:00'
// },
// {
//   duration: 10800,
//   end: '2022-03-14T04:00:00',
//   event: "COCI '21 Contest 5 Unofficial Mirror",
//   href: 'https://dmoj.ca/contest/coci21c5',
//   id: 33638309,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/dmoj_ca.png',
//     id: 77,
//     name: 'dmoj.ca'
//   },
//   start: '2022-03-07T19:00:00'
// },
// {
//   duration: 8100,
//   end: '2022-03-08T16:50:00',
//   event: 'Codeforces Round #776 (Div. 3)',
//   href: 'http://codeforces.com/contests/1650',
//   id: 33528211,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/codeforces_com.png',
//     id: 1,
//     name: 'codeforces.com'
//   },
//   start: '2022-03-08T14:35:00'
// },
// {
//   duration: 10800,
//   end: '2022-03-09T17:30:00',
//   event: 'CodeChef Starters 29 (Rated for Div 2, 3, & 4)',
//   href: 'https://www.codechef.com/START29',
//   id: 33388216,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/codechef_com.png',
//     id: 2,
//     name: 'codechef.com'
//   },
//   start: '2022-03-09T14:30:00'
// },
// {
//   duration: 7200,
//   end: '2022-03-09T18:00:00',
//   event: 'SRM 825',
//   href: 'https://topcoder.com/community/events/',
//   id: 31632274,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/topcoder_com.ico',
//     id: 12,
//     name: 'topcoder.com'
//   },
//   start: '2022-03-09T16:00:00'
// },
// {
//   duration: 9000,
//   end: '2022-03-10T16:30:00',
//   event: 'Code India Code: Final Round',
//   href: 'https://practice.geeksforgeeks.org/contest/gfg-mega-contest-finale/',
//   id: 33669439,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/geeksforgeeks_org.png',
//     id: 126,
//     name: 'geeksforgeeks.org'
//   },
//   start: '2022-03-10T14:00:00'
// },
// {
//   duration: 7200,
//   end: '2022-03-10T16:35:00',
//   event: 'Educational Codeforces Round 124 (Rated for Div. 2)',
//   href: 'http://codeforces.com/contests/1651',
//   id: 33528523,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/codeforces_com.png',
//     id: 1,
//     name: 'codeforces.com'
//   },
//   start: '2022-03-10T14:35:00'
// },
// {
//   duration: 7200,
//   end: '2022-03-10T17:00:00',
//   event: 'Sort Me Round №5',
//   href: 'https://sort-me.org/contest/10',
//   id: 33592314,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/sort-me_org.ico',
//     id: 134,
//     name: 'sort-me.org'
//   },
//   start: '2022-03-10T15:00:00'
// },
// {
//   duration: 14400,
//   end: '2022-03-10T19:30:00',
//   event: 'Coding Teen. Code Challenge 2022',
//   href: 'https://challenges.reply.com/tamtamy/challenge/97/detail',
//   id: 33701857,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/challenges_reply_com.ico',
//     id: 121,
//     name: 'challenges.reply.com'
//   },
//   start: '2022-03-10T15:30:00'
// },
// {
//   duration: 14400,
//   end: '2022-03-10T19:30:00',
//   event: 'Coding. Code Challenge 2022',
//   href: 'https://challenges.reply.com/tamtamy/challenge/96/detail',
//   id: 33701856,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/challenges_reply_com.ico',
//     id: 121,
//     name: 'challenges.reply.com'
//   },
//   start: '2022-03-10T15:30:00'
// },
// {
//   duration: 7200,
//   end: '2022-03-14T04:00:00',
//   event: "SAC '22 Code Challenge 4 Junior",
//   href: 'https://dmoj.ca/contest/sac22cc4j',
//   id: 33658765,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/dmoj_ca.png',
//     id: 77,
//     name: 'dmoj.ca'
//   },
//   start: '2022-03-11T05:00:00'
// },
// {
//   duration: 7200,
//   end: '2022-03-14T04:00:00',
//   event: "SAC '22 Code Challenge 4",
//   href: 'https://dmoj.ca/contest/sac22cc4',
//   id: 33658767,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/dmoj_ca.png',
//     id: 77,
//     name: 'dmoj.ca'
//   },
//   start: '2022-03-11T05:00:00'
// },
// {
//   duration: 259200,
//   end: '2022-03-14T09:30:00',
//   event: 'March Long One 2022 (Rated for Div 3 & 4)',
//   href: 'https://www.codechef.com/MARCH221',
//   id: 33387580,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/codechef_com.png',
//     id: 2,
//     name: 'codechef.com'
//   },
//   start: '2022-03-11T09:30:00'
// },
// {
//   duration: 7200,
//   end: '2022-03-11T14:20:00',
//   event: 'yukicoder contest 335',
//   href: 'https://yukicoder.me/contests/372',
//   id: 32340464,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/yukicoder_me.ico',
//     id: 109,
//     name: 'yukicoder.me'
//   },
//   start: '2022-03-11T12:20:00'
// },
// {
//   duration: 10800,
//   end: '2022-03-11T16:30:00',
//   event: 'BIG (O)',
//   href: 'https://www.codechef.com/BIGO2022',
//   id: 33932963,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/codechef_com.png',
//     id: 2,
//     name: 'codechef.com'
//   },
//   start: '2022-03-11T13:30:00'
// },
// {
//   duration: 7200,
//   end: '2022-03-11T16:35:00',
//   event: 'Codeforces Round #777 (Div. 2)',
//   href: 'http://codeforces.com/contests/1647',
//   id: 33427334,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/codeforces_com.png',
//     id: 1,
//     name: 'codeforces.com'
//   },
//   start: '2022-03-11T14:35:00'
// },
// {
//   duration: 86400,
//   end: '2022-03-12T15:00:00',
//   event: '1337UP LIVE CTF',
//   href: 'https://ctftime.org/event/1597/',
//   id: 33541984,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/ctftime_org.ico',
//     id: 70,
//     name: 'ctftime.org'
//   },
//   start: '2022-03-11T15:00:00'
// },
// {
//   duration: 259200,
//   end: '2022-03-14T15:30:00',
//   event: 'Data Sprint 67 - Probability of Language Extinction',
//   href: 'https://dphi.tech/challenges/data-sprint-67-probability-of-language-extinction/196/',
//   id: 33172027,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/dphi_tech.ico',
//     id: 124,
//     name: 'dphi.tech'
//   },
//   start: '2022-03-11T15:30:00'
// },
// {
//   duration: 172800,
//   end: '2022-03-13T16:00:00',
//   event: 'DaVinciCTF 2022',
//   href: 'https://ctftime.org/event/1559/',
//   id: 32827529,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/ctftime_org.ico',
//     id: 70,
//     name: 'ctftime.org'
//   },
//   start: '2022-03-11T16:00:00'
// },
// {
//   duration: 864000,
//   end: '2022-03-21T18:30:00',
//   event: 'March 2022 Coding Marathon - 10 Days Competitive coding challenge. Rated',
//   href: 'https://mycode.prepbytes.com/contest/MARATHONMAR22',
//   id: 33083659,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/mycode_prepbytes_com.ico',
//     id: 125,
//     name: 'mycode.prepbytes.com'
//   },
//   start: '2022-03-11T18:30:00'
// },
// {
//   duration: 3600,
//   end: '2022-03-11T20:00:00',
//   event: "aspiranek's contest [public, icpc, individual]",
//   href: 'https://lightoj.com/contest/aspiranekscontest',
//   id: 33729459,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/lightoj_com.png',
//     id: 122,
//     name: 'lightoj.com'
//   },
//   start: '2022-03-11T19:00:00'
// },
// {
//   duration: 172800,
//   end: '2022-03-14T00:00:00',
//   event: 'UTCTF 2022',
//   href: 'https://ctftime.org/event/1582/',
//   id: 33228811,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/ctftime_org.ico',
//     id: 70,
//     name: 'ctftime.org'
//   },
//   start: '2022-03-12T00:00:00'
// },
// {
//   duration: 7200,
//   end: '2022-03-12T04:00:00',
//   event: '2021 Rocky Mountain Regional Contest — Practice',
//   href: 'https://open.kattis.com/contests/rmc21practice',
//   id: 33751337,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/open_kattis_com.png',
//     id: 91,
//     name: 'open.kattis.com'
//   },
//   start: '2022-03-12T02:00:00'
// },
// {
//   duration: 6000,
//   end: '2022-03-12T13:40:00',
//   event: 'AtCoder Beginner Contest 243',
//   href: 'https://atcoder.jp/contests/abc243',
//   id: 33398598,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/atcoder_jp.png',
//     id: 93,
//     name: 'atcoder.jp'
//   },
//   start: '2022-03-12T12:00:00'
// },
// {
//   duration: 18000,
//   end: '2022-03-12T17:00:00',
//   event: 'Интернет-олимпиада',
//   href: 'https://neerc.ifmo.ru/school/io/',
//   id: 32674358,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/neerc_ifmo_ru_school.ico',
//     id: 11,
//     name: 'neerc.ifmo.ru/school'
//   },
//   start: '2022-03-12T12:00:00'
// },
// {
//   duration: 7200,
//   end: '2022-03-12T17:30:00',
//   event: 'Decode 2022',
//   href: 'https://www.codechef.com/DECO2022',
//   id: 33932962,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/codechef_com.png',
//     id: 2,
//     name: 'codechef.com'
//   },
//   start: '2022-03-12T15:30:00'
// },
// {
//   duration: 0,
//   end: '2022-03-12T19:00:00',
//   event: 'Problem 789. Minimal pairing modulo $p$',
//   href: 'https://projecteuler.net/problem=789',
//   id: 33217210,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/projecteuler_net.ico',
//     id: 65,
//     name: 'projecteuler.net'
//   },
//   start: '2022-03-12T19:00:00'
// },
// {
//   duration: 5400,
//   end: '2022-03-13T04:00:00',
//   event: 'Weekly Contest 284',
//   href: 'https://leetcode.com/contest/weekly-contest-284',
//   id: 33602724,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/leetcode_com.png',
//     id: 102,
//     name: 'leetcode.com'
//   },
//   start: '2022-03-13T02:30:00'
// },
// {
//   duration: 43200,
//   end: '2022-03-13T17:30:00',
//   event: 'Codeathon',
//   href: 'https://www.codechef.com/CDTN2022',
//   id: 33932961,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/codechef_com.png',
//     id: 2,
//     name: 'codechef.com'
//   },
//   start: '2022-03-13T05:30:00'
// },
// {
//   duration: 18000,
//   end: '2022-03-13T11:00:00',
//   event: 'Программирование - профессионалы (лич. 2021-2022)',
//   href: 'http://dl.gsu.by/LC.jsp?Type=-1&lng=ru',
//   id: 32619349,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/dl_gsu_by.gif',
//     id: 4,
//     name: 'dl.gsu.by'
//   },
//   start: '2022-03-13T06:00:00'
// },
// {
//   duration: 14400,
//   end: '2022-03-13T16:00:00',
//   event: 'Replay of Intra BUET Junior Programming Contest 2022',
//   href: 'https://toph.co/c/intra-buet-junior-2022-r',
//   id: 33702932,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/toph_co.ico',
//     id: 110,
//     name: 'toph.co'
//   },
//   start: '2022-03-13T12:00:00'
// },
// {
//   duration: 3600,
//   end: '2022-03-13T14:30:00',
//   event: 'Interview Series: Microsoft',
//   href: 'https://practice.geeksforgeeks.org/contest/interview-series-microsoft-4413/',
//   id: 33615859,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/geeksforgeeks_org.png',
//     id: 126,
//     name: 'geeksforgeeks.org'
//   },
//   start: '2022-03-13T13:30:00'
// },
// {
//   duration: 10800,
//   end: '2022-03-14T10:00:00',
//   event: 'МультиОлимпиада «Математика и технологии программирования»',
//   href: 'http://dl.gsu.by/LC.jsp?Type=-1&lng=ru',
//   id: 33185216,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/dl_gsu_by.gif',
//     id: 4,
//     name: 'dl.gsu.by'
//   },
//   start: '2022-03-14T07:00:00'
// },
// {
//   duration: 225000,
//   end: '2022-03-17T01:30:00',
//   event: 'Citi Dev Challenge – Robot Uprising!. Hackathon. Hackathon. Online',
//   href: 'https://www.hackerearth.com/challenges/hackathon/citi-dev-challenge-robot-uprising-el-levantamiento-de-los-robots/',
//   id: 33211461,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/hackerearth_com.png',
//     id: 73,
//     name: 'hackerearth.com'
//   },
//   start: '2022-03-14T11:00:00'
// },
// {
//   duration: 10800,
//   end: '2022-03-14T17:30:00',
//   event: 'ComPI 3.0 BY SIAM VIT',
//   href: 'https://mycode.prepbytes.com/contest/COMPI2022',
//   id: 33651262,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/mycode_prepbytes_com.ico',
//     id: 125,
//     name: 'mycode.prepbytes.com'
//   },
//   start: '2022-03-14T14:30:00'
// },
// {
//   duration: 86400,
//   end: '2022-03-15T18:30:00',
//   event: 'GATE 2023 Subjective Mock 1 | Computer Networks',
//   href: 'https://practice.geeksforgeeks.org/contest/gate-2023-subjective-mock-1-computer-networks/',
//   id: 33560568,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/geeksforgeeks_org.png',
//     id: 126,
//     name: 'geeksforgeeks.org'
//   },
//   start: '2022-03-14T18:30:00'
// },
// {
//   duration: 25200,
//   end: '2022-03-15T20:30:00',
//   event: 'Code Blooded 2.0',
//   href: 'https://www.codechef.com/CBLD2022',
//   id: 33932960,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/codechef_com.png',
//     id: 2,
//     name: 'codechef.com'
//   },
//   start: '2022-03-15T13:30:00'
// },
// {
//   duration: 10800,
//   end: '2022-03-16T17:30:00',
//   event: 'CodeChef Starters 30 (Rated for Div 2, 3, & 4)',
//   href: 'https://www.codechef.com/START30',
//   id: 33389192,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/codechef_com.png',
//     id: 2,
//     name: 'codechef.com'
//   },
//   start: '2022-03-16T14:30:00'
// },
// {
//   duration: 0,
//   end: '2022-03-17T00:00:00',
//   event: '2022 HF Qual',
//   href: 'https://www.topcoder.com/stat?module=MatchList&c=round_overview&er=5&rd=19074',
//   id: 33875645,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/topcoder_com.ico',
//     id: 12,
//     name: 'topcoder.com'
//   },
//   start: '2022-03-17T00:00:00'
// },
// {
//   duration: 18000,
//   end: '2022-03-17T11:00:00',
//   event: 'Гомельская областная интернет-олимпиада 1-4 кл - 2022',
//   href: 'http://dl.gsu.by/LC.jsp?Type=-1&lng=ru',
//   id: 33538142,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/dl_gsu_by.gif',
//     id: 4,
//     name: 'dl.gsu.by'
//   },
//   start: '2022-03-17T06:00:00'
// },
// {
//   duration: 18000,
//   end: '2022-03-17T11:00:00',
//   event: 'Гомельская областная интернет-олимпиада 5-8 кл - 2022',
//   href: 'http://dl.gsu.by/LC.jsp?Type=-1&lng=ru',
//   id: 33538141,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/dl_gsu_by.gif',
//     id: 4,
//     name: 'dl.gsu.by'
//   },
//   start: '2022-03-17T06:00:00'
// },
// {
//   duration: 10800,
//   end: '2022-03-22T04:00:00',
//   event: 'An Animal Contest 6. Rated',
//   href: 'https://dmoj.ca/contest/aac6',
//   id: 33879574,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/dmoj_ca.png',
//     id: 77,
//     name: 'dmoj.ca'
//   },
//   start: '2022-03-18T04:00:00'
// },
// {
//   duration: 7200,
//   end: '2022-03-18T14:20:00',
//   event: 'yukicoder contest 336',
//   href: 'https://yukicoder.me/contests/373',
//   id: 32744735,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/yukicoder_me.ico',
//     id: 109,
//     name: 'yukicoder.me'
//   },
//   start: '2022-03-18T12:20:00'
// },
// {
//   duration: 860400,
//   end: '2022-03-28T17:00:00',
//   event: 'Data Sprint 68 - World Data League External Competition',
//   href: 'https://dphi.tech/challenges/data-sprint-68-world-data-league-external-competition/200/',
//   id: 33637518,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/dphi_tech.ico',
//     id: 124,
//     name: 'dphi.tech'
//   },
//   start: '2022-03-18T18:00:00'
// },
// {
//   duration: 129600,
//   end: '2022-03-20T12:00:00',
//   event: 'zer0pts CTF 2022',
//   href: 'https://ctftime.org/event/1555/',
//   id: 32661491,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/ctftime_org.ico',
//     id: 70,
//     name: 'ctftime.org'
//   },
//   start: '2022-03-19T00:00:00'
// },
// {
//   duration: 25200,
//   end: '2022-03-19T16:00:00',
//   event: 'Hack In Tangerang Kota Capture the Flag 2022 Quals',
//   href: 'https://ctftime.org/event/1601/',
//   id: 33793219,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/ctftime_org.ico',
//     id: 70,
//     name: 'ctftime.org'
//   },
//   start: '2022-03-19T09:00:00'
// },
// {
//   duration: 7200,
//   end: '2022-03-19T11:30:00',
//   event: 'Coding Ka Gulaal',
//   href: 'https://www.codechef.com/CKGU2022',
//   id: 33932958,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/codechef_com.png',
//     id: 2,
//     name: 'codechef.com'
//   },
//   start: '2022-03-19T09:30:00'
// },
// {
//   duration: 9000,
//   end: '2022-03-19T13:00:00',
//   event: 'Code Uncode 5.0',
//   href: 'https://www.codechef.com/CDUN2022',
//   id: 33932957,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/codechef_com.png',
//     id: 2,
//     name: 'codechef.com'
//   },
//   start: '2022-03-19T10:30:00'
// },
// {
//   duration: 172800,
//   end: '2022-03-21T10:30:00',
//   event: 'VishwaCTF 2022',
//   href: 'https://ctftime.org/event/1548/',
//   id: 32603507,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/ctftime_org.ico',
//     id: 70,
//     name: 'ctftime.org'
//   },
//   start: '2022-03-19T10:30:00'
// },
// {
//   duration: 7200,
//   end: '2022-03-19T14:00:00',
//   event: 'AtCoder Regular Contest 137',
//   href: 'https://atcoder.jp/contests/arc137',
//   id: 33730768,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/atcoder_jp.png',
//     id: 93,
//     name: 'atcoder.jp'
//   },
//   start: '2022-03-19T12:00:00'
// },
// {
//   duration: 10800,
//   end: '2022-03-19T17:30:00',
//   event: 'March Lunchtime 2022',
//   href: 'https://www.codechef.com/LTIME106',
//   id: 33389836,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/codechef_com.png',
//     id: 2,
//     name: 'codechef.com'
//   },
//   start: '2022-03-19T14:30:00'
// },
// {
//   duration: 5400,
//   end: '2022-03-19T16:00:00',
//   event: 'Biweekly Contest 74',
//   href: 'https://leetcode.com/contest/biweekly-contest-74',
//   id: 33591642,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/leetcode_com.png',
//     id: 102,
//     name: 'leetcode.com'
//   },
//   start: '2022-03-19T14:30:00'
// },
// {
//   duration: 86400,
//   end: '2022-03-20T15:00:00',
//   event: 'VolgaCTF 2022 Qualifier',
//   href: 'https://ctftime.org/event/1551/',
//   id: 32661490,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/ctftime_org.ico',
//     id: 70,
//     name: 'ctftime.org'
//   },
//   start: '2022-03-19T15:00:00'
// },
// {
//   duration: 10740,
//   end: '2022-03-19T18:29:00',
//   event: 'Cook-a-Code',
//   href: 'https://www.codechef.com/CKCD2022',
//   id: 33932956,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/codechef_com.png',
//     id: 2,
//     name: 'codechef.com'
//   },
//   start: '2022-03-19T15:30:00'
// },
// {
//   duration: 0,
//   end: '2022-03-19T22:00:00',
//   event: 'Problem 790. Clock Grid',
//   href: 'https://projecteuler.net/problem=790',
//   id: 33217211,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/projecteuler_net.ico',
//     id: 65,
//     name: 'projecteuler.net'
//   },
//   start: '2022-03-19T22:00:00'
// },
// {
//   duration: 0,
//   end: '2022-03-20T00:00:00',
//   event: 'JOI 2021/2022 春合宿 過去問',
//   href: 'https://atcoder.jp/contests/joisc2022',
//   id: 34213612,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/atcoder_jp.png',
//     id: 93,
//     name: 'atcoder.jp'
//   },
//   start: '2022-03-20T00:00:00'
// },
// {
//   duration: 0,
//   end: '2022-03-20T00:00:00',
//   event: 'JOIG 2021/2022 春合宿 過去問',
//   href: 'https://atcoder.jp/contests/joigsc2022',
//   id: 34223600,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/atcoder_jp.png',
//     id: 93,
//     name: 'atcoder.jp'
//   },
//   start: '2022-03-20T00:00:00'
// },
// {
//   duration: 5400,
//   end: '2022-03-20T04:00:00',
//   event: 'Weekly Contest 285',
//   href: 'https://leetcode.com/contest/weekly-contest-285',
//   id: 33764288,
//   resource: {
//     icon: '/imagefit/static_resize/64x64/img/resources/leetcode_com.png',
//     id: 102,
//     name: 'leetcode.com'
//   },
//   start: '2022-03-20T02:30:00'
// }
// ];

// let url = 'https://clist.by/api/v1/contest/?username=ashishkamathi&api_key=03432ebf540ae8ced0bf78518b92d8a5a787e788&resource__id=2&start__lt=2022-05-01%2006:00:00.000000&end__gt=2022-03-01%2006:00:00.000000&order_by=start&duration__lt=999999';
// let url1 = 'https://clist.by/api/v2/json/contest/?username=ashishkamathi&api_key=03432ebf540ae8ced0bf78518b92d8a5a787e788';
// // let url = 'https://puzzle.mead.io/puzzle';
let urlValue = 'https://clist.by/api/v2/json/contest/?username=ashishkamathi&api_key=03432ebf540ae8ced0bf78518b92d8a5a787e788';

// fetch(urlValue).then((response) => {
//   response.json().then((data) => {
//     if (data.error) {
//       console.log('error found');
//       console.log(data.error);
//     }
//     else {
//       console.log(data);
//     }
//   })
// })

// let corefunctionCaller = function() {
//   var cors_api_host = 'rahulsinghrs20-bit-bucket.herokuapp.com';
//   var cors_api_url = 'https://' + cors_api_host + '/';
//   var slice = [].slice;
//   var origin = window.location.protocol + '//' + window.location.host;
//   var open = XMLHttpRequest.prototype.open;
//   console.log(cors_api_url);
  
//   XMLHttpRequest.prototype.open = function() {
//       var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
//       if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
//           targetOrigin[1] !== cors_api_host) {
//           args[1] = cors_api_url + args[1];
//       }
//       console.log(open.apply(this, args));
//       return open.apply(this, args);
//   };
// };

// corefunctionCaller();

// Div Containers
let contestDivContainer = document.querySelector("#contestMainDiv");
let contestTableContainer = document.querySelector("#contestMainTable");

// Table Contests
let sortByContestName = document.querySelector('#sortByContestName');
let sortByDate = document.querySelector('#sortByDate');
let sortByDuration = document.querySelector('#sortByDuration');
let sortByOrganizerName = document.querySelector('#sortByOrganizerName');

// Check Buttons For Duration:
let durationChkBox1 = document.querySelector('#less_than_1hr');
let durationChkBox2 = document.querySelector('#less_than_2hr');
let durationChkBox3 = document.querySelector('#less_than_3hr');
let durationChkBox4 = document.querySelector('#greater_than_3hr');
durationCheckBoxList = [durationChkBox1, durationChkBox2, durationChkBox3, durationChkBox4];

let organizerCodeForcesCB = document.querySelector('#codeforces');
let organizerAtCoderCB = document.querySelector('#atcoder');
let organizerCodeChefCB = document.querySelector('#codechef');
let organizerLeetCodeCB = document.querySelector('#leetCode');
organizerCheckBoxList = [organizerCodeForcesCB, organizerAtCoderCB, organizerCodeChefCB, organizerLeetCodeCB];

// Buttons
let filterButton = document.querySelector('#applyFilterButton');






let contestName = "sdkfa;lskdnf";
let contestDate = "hvjhvj";
let contestDuration = "hvkhvj";
let contestOrganizer = "njhvjh";
let contestStartInLeft = "bjhvjh";
let contestDivision = "";
let contestCalender = "";
let contestLink = "";

let tableRowContest = `
    <tr>
    <td>${contestName}</td>
    <td>${contestDate}</td>
    <td>${contestDuration}</td>
    <td>${contestOrganizer}</td>
    <td>${contestStartInLeft}</td>
    <td>${contestDivision}</td>
    <td>${contestCalender}</td>
    <td><a href="${contestLink}"></a></td>
    </tr>
`;

// let rowNew = contestTableContainer.insertRow(0);
// rowNew.innerHTML = tableRowContest;

let copyOfAllContestsList = [];

let getDuration = function(timeInSec) {
  let days = Math.floor(timeInSec/(3600*24));
  let hrs = Math.floor(timeInSec/3600);
  let min = (timeInSec - (hrs*3600))/60;

  if (days === 0) {
    if (min == 0) {
      return `${hrs}hr`;
    }
    let timeVal = `${hrs}hr ${min}min`;
    return timeVal;
  }
  else {
    hrs = (timeInSec%(3600*24))/3600;
    if (Math.floor(hrs) == 0) {
      return `${days} days`;
    }
    return `${days} day \n${Math.floor(hrs)} hr`;
  }
  
}

let calendarLink = 'https://calendar.google.com/';

let deleteRowsOfTheTable = function() {
  let lgt = allContestsList.length;
  for (let i = 0; i < lgt; i++) {
    contestTableContainer.deleteRow(1);
  }
}

let showingAllContests = function() {
  allContestsList.forEach(function(element, index) {
    let rowNew = contestTableContainer.insertRow(index+1);
    
    rowNew.innerHTML = `
      <tr>
        <td>${element.event}</td>
        <td>${element.start.slice(0, 10)}</td>
        <td>${getDuration(element.duration)}</td>
        <td>${element.resource.name.split(".")[0]}</td>
        <td>${element.start.split("T")[1]}</td>
        <td><a href="${calendarLink}" target="_blank">Clip</a></td>
        <td><a href="${element.href}" target="_blank">Link</a></td>
        <td></td>
      </tr>
    `;
  })
}

// Sort the List By the Contest Name

let clickOnContestName = 1;
function compareByContestName( obj1, obj2 ) {
  if ( obj1.event < obj2.event ){
    return -1 * (Math.floor(Math.pow(-1, clickOnContestName)));
  }
  if ( obj1.event > obj2.event ){
    return 1 * (Math.floor(Math.pow(-1, clickOnContestName)));
  }
  return 0;
}

let callSortByContestName = function() {
  console.log('name sort');
  clickOnContestName ^= 1;

  allContestsList.sort(compareByContestName);
  
  deleteRowsOfTheTable();
  showingAllContests();
}

sortByContestName.addEventListener('click', callSortByContestName);

//////////////////////////////////////////////////////////////

// // Sort By Date:

let clickOnContestDate = 1;
function compareByContestBegins( obj1, obj2 ) {
  if ( obj1.start < obj2.start ){
    return -1 * (Math.floor(Math.pow(-1, clickOnContestDate)));
  }
  if ( obj1.start > obj2.start ){
    return 1 * (Math.floor(Math.pow(-1, clickOnContestDate)));
  }
  return 0;
}

let callSortByContestBegins = function() {
  console.log('date sort');
  clickOnContestDate ^= 1;

  allContestsList.sort(compareByContestBegins);

  deleteRowsOfTheTable();
  showingAllContests();
}

sortByDate.addEventListener('click', callSortByContestBegins);

//////////////////////////////////////////////////////////////

// // Sort By Contst Duration:

let clickOnContestDuration = 1;
function compareByContestDuration( obj1, obj2 ) {
  if ( obj1.duration < obj2.duration ){
    return -1 * (Math.floor(Math.pow(-1, clickOnContestDuration)));
  }
  if ( obj1.duration > obj2.duration ){
    return 1 * (Math.floor(Math.pow(-1, clickOnContestDuration)));
  }
  return 0;
}

let callSortByContestDuration = function() {
  console.log('duration sort');
  clickOnContestDuration ^= 1;
  
  allContestsList.sort(compareByContestDuration);

  deleteRowsOfTheTable();
  showingAllContests();
}

sortByDuration.addEventListener('click', callSortByContestDuration);

/////////////////////////////////////////////////////////////////////////

// // Sort the List By the Contest Organizer

let clickOnContestOrganizer = 1;
function compareByContestOrganizer( obj1, obj2 ) {
  if ( obj1.resource.name < obj2.resource.name ){
    return -1 * (Math.floor(Math.pow(-1, clickOnContestOrganizer)));
  }
  if ( obj1.resource.name > obj2.resource.name ){
    return 1 * (Math.floor(Math.pow(-1, clickOnContestOrganizer)));
  }
  return 0;
}

let callSortByContestOrganizer = function() {
  console.log('organizer sort');
  clickOnContestOrganizer ^= 1;

  allContestsList.sort(compareByContestOrganizer);
  
  deleteRowsOfTheTable();
  showingAllContests();
  console.log(allContestsList.length);
}

sortByOrganizerName.addEventListener('click', callSortByContestOrganizer);

/////////////////////////////////////////////////////////////////////////////

// // Filter Application

let durationCheckBoxSetter = function(durationIdx) {
  for (let i = 0; i < 4; i++) {
    if (i != durationIdx) {
      durationCheckBoxList[i].checked = false;
    }
  }
}

durationCheckBoxList[0].addEventListener('click', function() {
  durationCheckBoxSetter(0);
});
durationCheckBoxList[1].addEventListener('click', function() {
  durationCheckBoxSetter(1);
});
durationCheckBoxList[2].addEventListener('click', function() {
  durationCheckBoxSetter(2);
});
durationCheckBoxList[3].addEventListener('click', function() {
  durationCheckBoxSetter(3);
});

let organizerCheckBoxSetter = function(organizerIdx) {
  for (let i = 0; i < 4; i++) {
    if (i != organizerIdx) {
      organizerCheckBoxList[i].checked = false;
    }
  }
}

organizerCheckBoxList[0].addEventListener('click', function() {
  organizerCheckBoxSetter(0);
});
organizerCheckBoxList[1].addEventListener('click', function() {
  organizerCheckBoxSetter(1);
});
organizerCheckBoxList[2].addEventListener('click', function() {
  organizerCheckBoxSetter(2);
});
organizerCheckBoxList[3].addEventListener('click', function() {
  organizerCheckBoxSetter(3);
});


let organizerMap = {0: "CodeForces", 1: "AtCoder", 2: "CodeChef", 3: "LeetCode"};
let durationMap = {0: 7200, 1: 10800, 2: 86400, 3: 172800}

let showingContestsByFiltering = function(byDuration, byOrganizer) {
  allContestsList.forEach(function(element, index) {
    // deleteRowsOfTheTable();
    console.log(allContestsList.length);
    console.log(contestTableContainer.rows.length);
    let rowNew = contestTableContainer.insertRow(index+1);
    if (byDuration != null && byOrganizer != null) {
      if (element.resource.name.split(".")[0].toLowerCase() == organizerMap[byOrganizer].toLowerCase() && element.duration <= durationMap[byDuration]) {
        rowNew.insertAdjacentHTML('beforeend', `
          <tr>
            <td>${element.event}</td>
            <td>${element.start.slice(0, 10)}</td>
            <td>${getDuration(element.duration)}</td>
            <td>${element.resource.name.split(".")[0]}</td>
            <td>${element.start.split("T")[1]}</td>
            <td><a href="${calendarLink}" target="_blank">Clip</a></td>
            <td><a href="${element.href}" target="_blank">Link</a></td>
            <td></td>
          </tr>
        `);
      }
    }
    else if (byDuration == null && byOrganizer != null) {
      if (element.resource.name.split(".")[0].toLowerCase() == organizerMap[byOrganizer].toLowerCase()) {
        rowNew.insertAdjacentHTML('beforeend', `
          <tr>
            <td>${element.event}</td>
            <td>${element.start.slice(0, 10)}</td>
            <td>${getDuration(element.duration)}</td>
            <td>${element.resource.name.split(".")[0]}</td>
            <td>${element.start.split("T")[1]}</td>
            <td><a href="${calendarLink}" target="_blank">Clip</a></td>
            <td><a href="${element.href}" target="_blank">Link</a></td>
            <td></td>
          </tr>
        `);
      }
    }
    else if (byDuration != null && byOrganizer == null) {
      if (element.duration <= durationMap[byDuration]) {
        rowNew.insertAdjacentHTML('beforeend', `
          <tr>
            <td>${element.event}</td>
            <td>${element.start.slice(0, 10)}</td>
            <td>${getDuration(element.duration)}</td>
            <td>${element.resource.name.split(".")[0]}</td>
            <td>${element.start.split("T")[1]}</td>
            <td><a href="${calendarLink}" target="_blank">Clip</a></td>
            <td><a href="${element.href}" target="_blank">Link</a></td>
            <td></td>
          </tr>
        `);
      }
    }
    else {
      showingAllContests();
    }
  })
}


let applyFilterOptions = function() {
  let durationIdx;
  let organizerIdx;

  for (let i = 0; i < 4; i++) {
    if (durationCheckBoxList[i].checked == true) {
      durationIdx = i;
      break;
    }
  }
  for (let i = 0; i < 4; i++) {
    if (organizerCheckBoxList[i].checked == true) {
      organizerIdx = i;
      break;
    }
  }

  if (durationIdx == null && organizerIdx == null) {
    deleteRowsOfTheTable();
    showingAllContests();
  }
  else if (durationIdx != null && organizerIdx == null) {
    deleteRowsOfTheTable();
    showingContestsByFiltering(durationIdx, null);
  }
  else if (durationIdx == null && organizerIdx != null) {
    deleteRowsOfTheTable();
    showingContestsByFiltering(null, organizerIdx);
  }
  else {
    deleteRowsOfTheTable();
    showingContestsByFiltering(durationIdx, organizerIdx);
  }
}

filterButton.addEventListener('click', applyFilterOptions);




let button = document.getElementsByClassName("dropbtn");
button[0].addEventListener("click", displayBlock);
let isClicked = 0;

function displayBlock() {
  isClicked ^= 1;
  if (isClicked == 1)
    document.getElementsByClassName("dropdown-content")[0].style.display =
      "block";
  else
    document.getElementsByClassName("dropdown-content")[0].style.display =
      "none";
}


showingAllContests();