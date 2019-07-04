<template>
  <div>
    <loading-component />

    <div class="kv-container">
      <div class="KV">
        <div class="kv-note">
          <img
            src="@/assets/img/home_top_source.png"
            alt=""
          >
        </div>

        <div id="kv-user">
          親愛的<span class="username">訪客</span>，歡迎來到
        </div>

        <div class="kv-title">
          <img
            src="@/assets/img/title.png"
            alt=""
          >
        </div>
        <a
          id="goToLoginBtn"
          class="ishidden"
        >
          <div class="kv-login">Log in<br>登入</div>
        </a>
        <a
          id="logoutBtn"
          class="ishidden"
        >
          <div class="kv-login">Log out<br>登出</div>
        </a>
        <h3>登錄集點抽 / 換獎時間至<br>108 / 07 / 31(三)23:59止</h3>
        <div class="circle">
          <img
            src="@/assets/img/circle.png"
            alt=""
          >
        </div>
        <div class="kv-jolin">
          <img
            src="@/assets/img/jolin.png"
            alt=""
          >
        </div>
        <div class="cloud">
          <img
            src="@/assets/img/cloud2.png"
            alt=""
          >
          <div class="phone">
            <img
              src="@/assets/img/iPhoneXRRRR.png"
              alt=""
            >
          </div>
          <div class="watch">
            <img
              src="@/assets/img/AW.png"
              alt=""
            >
          </div>
          <div class="earbud">
            <img
              src="@/assets/img/airpod.png"
              alt=""
            >
          </div>
          <div class="ticket">
            <img
              src="@/assets/img/ticket.png"
              alt=""
            >
          </div>
        </div>
        <div class="arrow">
          <img
            class="arrow1"
            src="@/assets/img/arrow_R.png"
            alt=""
          >
          <img
            class="arrow2"
            src="@/assets/img/arrow_B.png"
            alt=""
          >
        </div>
      </div>
      <div id="activity">
        <div class="grey-frame">
          <div class="activity-note">
            <img
              src="@/assets/img/home_min_source.png"
              alt=""
            >
          </div>
          <div class="act1">
            <div class="act1-title">
              <img
                src="@/assets/img/act1-title.png"
                alt=""
              >
            </div>
            <p>
              108年5月22日（三）至108年7月31日（三）活動期間內購買【金牌音樂趴 夏到禮】四入/六入活動包裝產品，並掃描盒內QR code完成登錄，有機會獲得金牌音樂趴門票、iPhone、Apple Watch、AirPods多項金喜好禮！
            </p>
          </div>
          <div class="act2">
            <div class="act2-title">
              <img
                src="@/assets/img/act2-title.png"
                alt=""
              >
            </div>
            <p>
              本活動參加者須年滿18歲。每1碼QR code為1點，每1點限用1次。可選擇1點抽獎1次，或累積10點直接兌換【金牌音樂趴雙人套票】1組(共2張)，每人限換2組，數量有限，兌完為止。
            </p>
            <h3>
              *活動點數須於108年7月31日前使用完畢。
            </h3>
            <div class="act3-title">
              <img
                src="@/assets/img/act3-title.png"
                alt=""
              >
            </div>
          </div>
          <div class="prize">
            <source
              srcset="@/assets/img/prize_645.png"
              media="(min-width:768px)"
            >
            <img
              src="@/assets/img/prize_645.png"
              alt=""
            >
          </div>
        </div>
        <div class="team">
          <img
            src="@/assets/img/team.png"
            alt=""
          >
          <p>客服專線：(02)2656-1106 傳真：(02)2656-1285<br>（服務時間週一至週五10：00～18：30，不含例假日)<br>電子信箱：2019goldmedal.sp@gmail.com</p>
        </div>
        <div class="trade">
          <img
            src="@/assets/img/trade.png"
            alt=""
          >
          <p>
            成功獲獎後系統會自動發送中獎確認函到電子信箱，完整填寫後可選擇下列任一種方式寄回：<br>
            (1)紙本郵件掛號：寄回中獎確認函至「台北市內湖區陽光街321巷56號6樓（金牌音樂趴 夏到禮 活動小組收）」<br>
            (2)傳真：中獎確認函傳真至 (02)2656-1285<br>
            (3)電子郵件：完整填寫(含親筆簽名)後掃描寄回中獎確認函至2019goldmedal.sp@gmail.com<br>
            注意：得獎者須於指定時間前提供填妥的中獎確認函，方能完成兌獎程序，逾期視同自動放棄權利。
          </p>
        </div>
        <div class="notice">
          <img
            src="@/assets/img/notice.png"
            alt=""
          >
          <p>
            1. 兌獎說明<br>
            第一類獎項（金牌音樂趴雙人套票、Apple Watch series 4、Apple AirPods），依所得稅法規定，中獎獎項單價價值累計NT$1,001～20,001元：依法需申報收入，請兌獎者／中獎者須將中獎確認函（附上身分證正反面影本）填妥後，金牌音樂趴雙人套票於108年08月05日（一）前，Apple Watch、Apple AirPods於108年08月12日（一）前，以掛號郵寄、傳真或掃描Email方式擇一，提供至「金牌音樂趴  夏到禮  活動小組」，方可完成領獎手續（以郵戳／傳送時間為憑），逾期視同自動放棄權利。<br>

            第二類獎項（iPhone XR），依所得稅法規定，中獎獎項單價價值累計NT$20,001元以上：依法需預繳10％稅金，請中獎者須將中獎確認函（附上預繳稅金之憑證、身分證正反面影本）填妥後於108年08月12日（一）前以掛號郵寄、掃描Email或傳真等方式擇一，提供至「金牌音樂趴  夏到禮  活動小組」，方可完成領獎手續（以郵戳／傳送時間為憑），逾期視同自動放棄權利。<br>

            「中獎確認函」將會出現於兌獎／確認中獎步驟之後寄至註冊電子信箱，須自行下載、列印，並填妥後於指定時間內以掛號郵寄、掃描Email或傳真等方式擇一，寄回至「金牌音樂趴  夏到禮  活動小組」。<br>
          </p>
          <p>2. 本次活動主辦單位為臺灣菸酒股份有限公司，委由聯眾廣告公司（金牌音樂趴  夏到禮  活動小組）執行本次活動。</p>
          <p>3. 本活動須購買印有【金牌音樂趴 夏到禮】活動圖像之6入(300ml)及4入(500ml)裝的金牌台啤方能參加，各通路配貨數量有限，售完為止。</p>
          <p>4. 參加活動者須年滿18歲；得獎者若未滿20歲，除得獎者之身分證正反面影本外，需另附法定代理人之身分證正反面影本協同辦理領獎及一切相關手續方能領獎。</p>
          <p>5. 兌獎資料逾期繳交、資料不符或不齊全者，均視同放棄得獎權利。</p>
          <p>6. 中獎確認函上所填寫之身分資料需和參加本活動之資料相同，如有不同，主辦單位有權取消其參加或得獎資格，並恕不另行通知。</p>
          <p>7. 參加活動者同意活動期間內，所有留存或產生之任何參與活動的資料及記錄，皆以主辦單位的電腦系統與時間的記錄為主。如有任何因電腦、網路、電話、技術或不可歸責於主辦單位之事由，而使參加者送出之資料有延遲、遺失、錯誤、無法辨識之情況，主辦單位不負責任何法律責任，參加活動者不得因此異議。</p>
          <p>8. 本活動屬競技競賽及機會中獎所得，依所得稅法之規定，年度累積中獎價值若超過NT$1,000整，應列入得獎人年度綜合所得，主辦單位依所得稅法第94-1條之規定，得免填發各類所得扣繳暨免扣繳憑單予得獎人，若得獎人有需求時請另行提出申請。中獎價值在NT$20,001元以上者，依法需繳交 10％稅金。得獎者若非中華民國國境內設籍之國人(即在中華民國境內居住未達 183 天之本國人及外國人)不論得獎者所得之金額，須就中獎所得扣繳 20% 機會中獎稅。若得獎者不願先行繳納本項稅金，視同放棄中獎資格，且不得異議。得獎者需於隔年5月底前完成申報。</p>
          <p>9. 參加活動者應保證所有填寫或提出之資料，均為真實且正確，並未冒用或盜用他人資料，如有不實或不正確資訊，主辦單位將取消其獲獎資格，並就其損害主辦單位或任何第三人權益，保留一切民、刑事訴追之責。</p>
        </div>
        <div class="notice2">
          <p>10. 以任何駭客或其它非法行為破壞活動規則者，兌獎或中獎皆無效，主辦單位並對其參加者或得獎者保留法律追訴權。</p>
          <p>11. 本活動之所有獎項不得轉換或折換現金。</p>
          <p>12. 贈品圖片僅供示意參考，實際規格以獎項的文字說明及注意事項說明為主，恕不挑選顏色。獎項以公佈於本網站上的資料為準，如遇不可抗力之因素，主辦單位保留修改活動與獎項細節的權利，無須事前通知，並有權對本活動所有事宜作出解釋或裁決。如本活動因不可抗力之特殊原因無法執行時，主辦單位有權決定取消、終止、修改或暫停本活動，如有任何未盡事宜均以主辦單位依中華民國法律解釋之。</p>
          <p>13. 獎品寄送地區僅限為台灣、金門、澎湖、馬祖地區，主辦單位恕不處理郵寄獎項至海外地區之事宜。</p>
          <p>14. 本活動網頁之所有內容由主辦單位擁有所有著作權，未經許可，不得抄襲、拷貝與複製相關圖片與文字，主辦單位保留所有侵權事宜之法律追訴權利。</p>
          <p>15. 參加活動者參與本活動時，視為同意接受本活動所有內容及細則之規範；倘有違反本活動相關注意規範，主辦單位得取消其獲獎資格，並對於任何破壞本活動之行為保留法律追訴權。</p>
          <p>16. 主辦單位僅使用參加者所提供之個人資料於此次活動用途，且遵守【個人資料保護法】相關規定，以維護參加者權益。參加活動者同意中獎相關個人資訊由主辦單位於活動範圍內進行蒐集、電腦處理及利用，但不做其他用途，成功兌換商品者或得獎者授權主辦單位公開公佈姓名。</p>
          <p>
            17. 活動相關疑問請洽詢活動小組專線：(02)2656-1106<br>(服務時間週一～週五10：00～18：30，不含例假日)。
          </p>
        </div>
        <div class="foot" />
      </div>
      <div class="top">
        <img
          src="@/assets/img/top.png"
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script>
import LoadingComponent from '../components/LoadingComponent'

export default {
  components: {
    LoadingComponent
  }
}
</script>
