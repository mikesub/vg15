#!/usr/bin/env python3
# coding=utf8

import json
import sys
import os
import math

import requests
from lxml import html

DATA_PATH = './vg15.json'

if os.path.exists(DATA_PATH):
    sys.exit('{} exists'.format(DATA_PATH))

url = 'http://data.3sport.org/vg-2015/events/426/results?page={}'
results = []

for i in range(39):
    page = html.fromstring(requests.get(url.format(i)).text)
    rows = page.xpath('//section[@id="meet-results"]//tbody/tr')
    for row in rows:

        places = row.xpath('td[1][@class="text-center"]/text()')[0]

        if 'DN' in places:
            continue

        _abs, sex, cat = map(str.strip, places.split('/'))

        category = ''
        try:
            category = row.xpath('td/a[contains(@href,"category/")]/text()')[0]
        except:
            pass

        time_str = row.xpath('td[@class="result"]/text()')[0]
        h, m, s = time_str.split(':')
        time_secs = int(h)*60*60 + int(m)*60 + math.floor(float(s))

        results.append(dict(
            name=row.xpath('td[@class="name"]/a/text()')[0],
            number=row.xpath('td/span[@class="badge"]/text()')[0],
            time=time_str,
            time_secs=time_secs,
            category=category,
            abs=_abs,
            sex=sex,
            cat=cat,
        ))

with open(DATA_PATH, 'w') as f:
    json.dump(results, f, ensure_ascii=False)
