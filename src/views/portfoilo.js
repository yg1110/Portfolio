class portfolio extends HTMLElement {
  constructor() {
    super();
  }
  static get observedAttributes() {
    // 모니터링 할 속성 이름
  }
  connectedCallback() {
    // DOM에 추가되면 실행되는 method;
    this.innerHTML = this.htmlparser();
    this.script();
  }
  disconnectedCallback() {
    // DOM에서 제거면 실행되는 method
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    // 속성이 추가/제거/변경되면 실행되는 method
  }
  adoptedCallback(oldDoc, newDoc) {
    // 다른 Document에서 옮겨지면 실행되는 method
  }

  script() {
    const props = document.querySelectorAll("modal-content");
    const imageContent = document.querySelectorAll("image-content-mobile");
    const data = [
      {
        title: "Ssafy-Shopper",
        subTitle: "알레르기가 있는 사람들을 위한 건강먹거리 쇼핑몰",
        video: "video/Ssafy-Shopper.mp4",
        date: "2019.12.10. ~ 2019.12.16. (1주)",
        work: [
          "로그인, 회원가입 UI / UX 구현",
          "장바구니 UI / UX 구현",
          "Q&A 게시판 UI / UX 구현",
          "식품 안전나라 식품 영양 공공데이터 파싱",
          "식품 리스트 출력",
          "알레르기, 품절에 따른 이미지 처리",
          "식품별 영양정보 차트 출력"
        ],
        tag: [
          ["2인", "blue"],
          ["Front-End", "red"],
          ["Spring", "green"],
          ["Vue.js", "light-green"],
          ["HTML", "orange"],
          ["CSS", "blue"],
          ["JavaScript", "purple"],
          ["BootStrap", "dark-blue"],
          ["SQL", "yellow"]
        ]
      },
      {
        title: "Newspace",
        subTitle: "관심 키워드의 뉴스만 모아볼수 있는 사이트",
        video: "video/Newspace.mp4",
        date: "2020.01. ~ 2020.02. (6주)",
        work: [
          "로그인, 회원가입 UI / UX 구현",
          "JWT를 이용한 데이터 암호화 구현",
          "Vuex를 이용한 실시간 상태관리",
          "소셜로그인 구현 (Firebase이용)",
          "STOMP를 이용한 메일링시스템 구현 및 UI / UX 구현",
          "STMP를 이용한 채팅시스템 구현 및 UI / UX 구현"
        ],
        tag: [
          ["4인", "blue"],
          ["Full-Stack", "red"],
          ["Spring", "green"],
          ["Vue.js", "light-green"],
          ["HTML", "orange"],
          ["CSS", "blue"],
          ["JavaScript", "purple"],
          ["Vuetify", "dark-blue"],
          ["SQL", "yellow"]
        ]
      },
      {
        title: "냉장고를 부탁해",
        subTitle:
          "AI로 냉장고에 있는 식재료를 식별하고 레시피를 추천해주는 서비스",
        video: "video/냉장고를부탁해.mp4",
        date: "2020.03. ~ 2020.04. (5주)",
        work: [
          "레시피 목록 UI / UX 구현",
          "레시피 재료선택 UI / UX 구현",
          "레시피 상세페이지 UI / UX 구현",
          "자신의 강점, 틀린문제 분석 차트 출력",
          "인식률에 따른 재료 아이콘 색깔조정",
          "Vuex를 이용한 실시간 상태관리",
          "PWA 적용"
        ],
        tag: [
          ["6인", "blue"],
          ["Front-End", "red"],
          ["Vue.js", "light-green"],
          ["HTML", "orange"],
          ["CSS", "blue"],
          ["JavaScript", "purple"]
        ]
      },
      {
        title: "IT FOR YOU",
        subTitle: "CS지식과 면접대비를 도와주는 사이트",
        video: "video/ITFORYOU.mov",
        date: "2020.05. ~ 2020.06. (5주)",
        work: [
          "메인화면 UI / UX 구현",
          "네비게이션 UI / UX 구현",
          "단어장 UI / UX 구현",
          "오답노트 UI / UX 구현",
          "문제풀이 알고리즘 구현",
          "transform 애니메이션 적용",
          "Vuex를 이용한 상태관리",
          "PWA 적용"
        ],
        tag: [
          ["5인", "blue"],
          ["Front-End", "red"],
          ["Vue.js", "light-green"],
          ["HTML", "orange"],
          ["CSS", "blue"],
          ["JavaScript", "purple"]
        ]
      }
    ];
    imageContent[0].setAttribute("data-props", JSON.stringify(data[0]));
    imageContent[1].setAttribute("data-props", JSON.stringify(data[1]));
    imageContent[2].setAttribute("data-props", JSON.stringify(data[2]));
    imageContent[3].setAttribute("data-props", JSON.stringify(data[3]));

    props[0].setAttribute("data-props", JSON.stringify(data[0]));
    props[1].setAttribute("data-props", JSON.stringify(data[1]));
    props[2].setAttribute("data-props", JSON.stringify(data[2]));
    props[3].setAttribute("data-props", JSON.stringify(data[3]));
  }
  htmlparser() {
    return `
        <section class="gallery">
            <image-content-pc class="image-content-pc"></image-content-pc>
            <image-content-mobile class="image-content-mobile"></image-content-mobile>
            <image-content-mobile class="image-content-mobile"></image-content-mobile>
            <image-content-mobile class="image-content-mobile"></image-content-mobile>
            <image-content-mobile class="image-content-mobile"></image-content-mobile>
        </section>

        <section class="modal-section">
            <modal-content class="modal-content"></modal-content>
            <modal-content class="modal-content"></modal-content>
            <modal-content class="modal-content"></modal-content>
            <modal-content class="modal-content"></modal-content>
        </section>
  `;
  }
}

export default portfolio;

// customElements.get("router-view") ||
//   customElements.define("router-view", portfolio);
