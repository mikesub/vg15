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

for i in range(1, 39):
  url = _url.format(i)
  print(url)
  page = html.fromstring(requests.get(url).text)
  rows = page.xpath('//section[@id="meet-results"]//tbody/tr')
  for row in rows:

    number = int(row.xpath('td/span[@class="badge"]/text()')[0])
    name = row.xpath('td[@class="name"]/a/text()')[0]

    try:
      category = row.xpath('td/a[contains(@href,"category/")]/text()')[0]
    except:
      category = None

    _time = None
    fail_reason = None

    if 'DN' not in row.xpath('td[1][@class="text-center"]/text()')[0]:
      h, m, s = row.xpath('td[@class="result"]/text()')[0].split(':')
      _time = int((int(h)*60*60 + int(m)*60 + float(s))*1000)
    else:
      fail_reason = row.xpath('td[1][@class="text-center"]/text()')[0].strip()

    results.append(dict(
      name=name,
      number=number,
      time=_time,
      category=category,
      fail_reason=fail_reason,
    ))

with open(DATA_PATH, 'w') as f:
  json.dump(results, f, ensure_ascii=False)


