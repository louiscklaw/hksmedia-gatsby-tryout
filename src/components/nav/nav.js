import React from 'react'

import {Link} from 'gatsby'

import '../../scss/styles.scss'

function Nav() {
  return(

    <nav class="navbar navbar-flex fix-top-bar" role="navigation" aria-label="main navigation">
      <div class="navbar-upper-deck">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img class="company-logo" src="/xlogo.png.pagespeed.ic.M7OcTo5TJW.png" />
          </a>
          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
            data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="indcies">
          <img src="/2020-06-05_18-12.png" />
          <img src="/2020-06-05_18-12.png" />
          <img src="/2020-06-05_18-12.png" />
        </div>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <Link to="/" className="navbar-item">
          主頁
        </Link>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            即時報價
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item">異動掃瞄器</a>
            <a class="navbar-item">輪證搜尋器</a>
            <a class="navbar-item">互動圖表</a>
            <a class="navbar-item">熱門行業</a>
            <a class="navbar-item">新股時間表</a>
            <a class="navbar-item">AFE即市提示</a>
            <a class="navbar-item">行業選股</a>
            <a class="navbar-item">排行榜</a>
            <a class="navbar-item">公司資訊</a>
            <a class="navbar-item">市場概況</a>
          </div>
        </div>
        <a class="navbar-item">
          財經快訊
        </a>
        <a class="navbar-item">
          名家專欄
        </a>
        <a class="navbar-item">
          策略王電視
        </a>
        <a class="navbar-item">
          專題視頻
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            關於我們
          </a>
          <div class="navbar-dropdown">
            <Link to='/contact-us/' className="navbar-item">聯絡我們</Link>
            <a class="navbar-item">刊登廣告</a>
            <a class="navbar-item">私隱聲明</a>
            <a class="navbar-item">服務條款</a>
            <Link to="/recruit/" className="navbar-item">
              人才招聘
            </Link>
            <Link to="/terms-and-conditions/" className="navbar-item">
              免責聲明
            </Link>
          </div>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="day-string">2020年06月05日 星期五</div>
        </div>
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-light" href="register.html">
              <i class="fas fa-sign-in-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    </nav>

)
}

export default Nav