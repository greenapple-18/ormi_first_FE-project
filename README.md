# HODU 랜딩 페이지

## 🎯 목표

-   피그마 링크와 요구사항 명세를 참고하여 랜딩페이지를 만들기
-   **모바일 화면**도 고려하여 과제를 수행

## ⚙️ 개발 환경 및 배포 URL

### 개발 환경

-   **IDE**
    -   Visual Studio Code 1.92.2
-   **언어**
    -   HTML, CSS, JavaScript
-   **서비스 배포 환경**
    -   GitHub Pages

### 배포 URL

-   https://greenapple-18.github.io/ormi_first_FE-project/

## 📝 요구사항 명세

-   피그마를 참고하여 페이지 구현을 합니다.
-   **모바일 화면**도 고려하여 페이지 구현을 합니다.
-   스크롤시 **헤더가 고정**되게 합니다. (단, 처음에는 고정된 상태가 아닙니다.)
-   스크롤 탑 버튼을 구현합니다.
    -   스크롤 탑 버튼은 *스크롤*시 나타납니다.
    -   스크롤 탑 버튼은 _푸터 아래로 내려가지 않습니다._
    -   스크롤 탑 버튼을 누르면 스크롤이 최상단으로 올라갑니다. (단, 부드럽게 올라가야 합니다.)
-   구독하기 모달창
    -   이메일을 입력하고 `Subscribe` 버튼을 클릭하면 모달창이 나타납니다.
    -   **이메일 유효성 검사**를 진행해야 합니다. (값이 들어가지 않거나 이메일 형식이 유효하지 않으면 alert 창으로 경고 문구가 떠야합니다.)
    -   이메일이 잘 입력되었다면 모달창이 뜹니다. 이때 모달창의 `OK! I love HODU` 버튼을 클릭하면 form이 제출되고 모달창이 닫힙니다.

## 🔗 피그마 링크

<br/>

> https://www.figma.com/design/s9RCnA6dSi3QHHeMDFHKE6/EST-오르미(BE)_HTML%2FCSS%2FJS?node-id=28501-4177&t=gpv3t28WAalztcGv-1

## 🛠️ 프로젝트 구조

```
🗂️ /project-root
│
├── 📑 index.html
│
├── 🗂️ css/
│ ├── 🖥️ reset.css
│ ├── 🖥️ default-css-setting.css
│ ├── 🖥️ hodu-main-css.css
│ ├── 📱 mobile-default-css-setting.css
│ └── 📱 mobile-hodu-main-css.css
│
├── js/
│ ├── 🖥️ default_JS_setting.js
│ └── 🖥️ HODU_main_JS.js
│
├── images/
│ ├── 🖼️ Logo.png
│ ├── 🖼️ Logo_cat.png
│ ├── 🖼️ First_section_cat.png
│ ├── 🖼️ Second_section_cat_1.png
│ ├── 🖼️ Second_section_cat_2.png
│ ├── 🖼️ Second_section_cat_3.png
│ ├── 🖼️ Second_section_cat_4.png
│ ├── 🖼️ Second_section_cat_5.png
│ ├── 🖼️ Second_section_cat_6.png
│ ├── 🖼️ Modal_background.png
│ ├── 🖼️ Third_section_cat.png
│ ├── 🖼️ mail.png
│ ├── 🖼️ keyboard_arrow_down.png
│ ├── 🖼️ keyboard_arrow_up.png
│ ├── 🖼️ blog.png
│ ├── 🖼️ facebook.png
│ ├── 🖼️ instagram.png
│ ├── 🖼️ youtube.png
│ ├── 🖼️ facebook.png
│ ├── 🖼️ menu_open.png
│ └── 🖼️ menu_close.png
│
└── 📑 README.md
```

## 📅 개발 일정

```mermaid
gantt
    dateFormat  YYYY-MM-DD
    axisFormat  %m/%d

    section HTML 구현
    HTML 구현          :html1, 2024-08-19, 2024-08-21

    section CSS 구현
    Main CSS 구현      :css1, 2024-08-19, 2024-08-20
    Default CSS 구현   :css2, 2024-08-20, 2024-08-22
    Mobile CSS 구현    :css3, 2024-08-22, 2024-08-26

    section JS 구현
    JS 구현            :js1, 2024-08-21, 2024-08-22

    section 리팩토링
    Refactoring        :refac, 2024-08-26, 2024-08-29
```

## 🖥️ 화면 설계

<table border="1" cellpadding="10">
    <tbody>
        <!-- 제목 행 -->
        <tr>
            <td><strong>HTML 화면</strong></td>
            <td><strong>모바일 화면</strong></td>
        </tr>
        <tr>
            <td>
                <img src="html.png" width="100%" alt="HTML 화면">
            </td>
            <td>
                <img src="mobile.png" width="100%" alt="모바일 화면">
            </td>
        </tr>
        <tr>
            <td><strong>HTML 모달창</strong></td>
            <td><strong>모바일 모달창</strong></td>
        </tr>
        <tr>
            <td>
                <img src="modal.png" width="100%" alt="HTML 모달창">
            </td>
            <td>
                <img src="mobile modal.png" width="100%" alt="모바일 모달창">
            </td>
        </tr>
        <tr>
            <td><strong>메뉴 항목 (모바일)</strong></td>
        </tr>
        <td>
            <img src="menu-tab.png" width="100%" alt="모바일 메뉴 항목">
        </td>
    </tbody>
</table>
