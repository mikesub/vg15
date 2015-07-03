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

_url = 'http://data.3sport.org/vg-2015/events/426/results?page={}'
results = []
numbers = []

for i in range(1, 39):
    url = _url.format(i)
    print(url)
    page = html.fromstring(requests.get(url).text)
    rows = page.xpath('//section[@id="meet-results"]//tbody/tr')
    for row in rows:

        if 'DN' in row.xpath('td[1][@class="text-center"]/text()')[0]:
            continue

        category = ''
        try:
            category = row.xpath('td/a[contains(@href,"category/")]/text()')[0]
        except:
            pass

        h, m, s = row.xpath('td[@class="result"]/text()')[0].split(':')
        _time = int((int(h)*60*60 + int(m)*60 + float(s))*1000)

        number = int(row.xpath('td/span[@class="badge"]/text()')[0])

        if number not in numbers:
            results.append(dict(
                name=row.xpath('td[@class="name"]/a/text()')[0],
                number=number,
                time=_time,
                category=category,
                cats=row.xpath('td[1][@class="text-center"]/text()')[0].strip().replace(' ',''),
            ))
            numbers.append(number)
        else:
          print(number)

with open(DATA_PATH, 'w') as f:
    json.dump(results, f, ensure_ascii=False)


