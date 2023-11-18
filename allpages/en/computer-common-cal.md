---
layout: appscms-home
lang: en
permalink: /computer-common-cal
nointernationalization: true
---

<style>
    a:hover {
        text-decoration: underline;
    }
</style>
<div class="row m-0" style="padding-top: 3rem;">
    <div class="col-md-12">
        <h1 class="home-top-h1" style="text-align: center;">List of all computer related calculators</h1>
    </div>
</div>
<div class="row m-0 mb-5">
    {% for item in site.data.computer.en %}
    <li class="col-md-3 py-2 conver-list" style="list-style: none;">
        <a href="/{{item[0]}}" style="color:#0d6efd !important;">
            {{ item[0] | replace: "-"," " |capitalize}}
        </a>
    </li>
    {% endfor %}
</div>