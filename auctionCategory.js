function HeaderCategoryT(Id, name, type) {
  this.ID = Id;
  this.Name = name;
  this.Type = type;
}

var cateGroupList = [];
var cateLcodeGroupByGroupIdHash = {};
var categoryByLcodeGroupIdHash = {};
var childCategoryHash = {};
var brandLCategoryList = [];
var sohoLCategoryList = [];
var lotteLCategoryList = [];

function HeaderCategory() {}

HeaderCategory.GetGroups = function () {
  return cateGroupList;
};
HeaderCategory.GetLcodeGroupsByGroupId = function (groupId) {
  return cateLcodeGroupByGroupIdHash[groupId];
};
HeaderCategory.GetCategoriesByLcodeGroupId = function (lcodeGroupId) {
  return categoryByLcodeGroupIdHash[lcodeGroupId];
};
HeaderCategory.GetChildCategories = function (categoryId) {
  return childCategoryHash[categoryId];
};
HeaderCategory.GetBrandLCategories = function (categoryId) {
  return brandLCategoryList;
};
HeaderCategory.GetSohoLCategories = function (categoryId) {
  return sohoLCategoryList;
};
HeaderCategory.GetLotteLCategories = function (categoryId) {
  return lotteLCategoryList;
};

cateGroupList[0] = new HeaderCategoryT("8", "브랜드 패션", "A");

cateGroupList[1] = new HeaderCategoryT("1", "의류", "A");

cateGroupList[2] = new HeaderCategoryT("2", "뷰티/잡화", "A");

cateGroupList[3] = new HeaderCategoryT("3", "식품/마트/유아", "A");

cateGroupList[4] = new HeaderCategoryT("4", "가구/생활/건강/렌탈", "A");

cateGroupList[5] = new HeaderCategoryT("5", "가전/디지털/컴퓨터", "A");

cateGroupList[6] = new HeaderCategoryT("6", "스포츠/자동차/공구", "A");

cateGroupList[7] = new HeaderCategoryT("7", "도서/티켓/여행/e쿠폰", "A");

cateLcodeGroupByGroupIdHash["8"] = new Array(
  new HeaderCategoryT("80001", "브랜드 의류", "A"),

  new HeaderCategoryT("80002", "브랜드 잡화", "A")
);

cateLcodeGroupByGroupIdHash["1"] = new Array(
  new HeaderCategoryT("10001", "의류/언더웨어", "A")
);

cateLcodeGroupByGroupIdHash["2"] = new Array(
  new HeaderCategoryT("20001", "뷰티", "A"),

  new HeaderCategoryT("20002", "잡화", "A")
);

cateLcodeGroupByGroupIdHash["3"] = new Array(
  new HeaderCategoryT("30001", "식품", "A"),

  new HeaderCategoryT("30002", "마트", "A"),

  new HeaderCategoryT("30003", "유아용품", "A")
);

cateLcodeGroupByGroupIdHash["4"] = new Array(
  new HeaderCategoryT("40001", "가구/침구/수납", "A"),

  new HeaderCategoryT("40002", "생활/취미", "A")
);

cateLcodeGroupByGroupIdHash["5"] = new Array(
  new HeaderCategoryT("50001", "가전", "A"),

  new HeaderCategoryT("50002", "디지털", "A"),

  new HeaderCategoryT("50003", "컴퓨터", "A")
);

cateLcodeGroupByGroupIdHash["6"] = new Array(
  new HeaderCategoryT("60001", "스포츠/레저", "A"),

  new HeaderCategoryT("60002", "자동차/공구", "A")
);

cateLcodeGroupByGroupIdHash["7"] = new Array(
  new HeaderCategoryT("70001", "도서", "A"),

  new HeaderCategoryT("70002", "상품권", "A"),

  new HeaderCategoryT("70003", "e쿠폰 컨텐츠 여행", "A")
);

categoryByLcodeGroupIdHash["80001"] = new Array(
  new HeaderCategoryT("66000000", "브랜드 여성의류", "A"),

  new HeaderCategoryT("67000000", "브랜드 남성의류", "A"),

  new HeaderCategoryT("68000000", "브랜드 캐주얼의류", "A")
);

categoryByLcodeGroupIdHash["80002"] = new Array(
  new HeaderCategoryT("69000000", "브랜드 신발/가방/잡화", "A"),

  new HeaderCategoryT("70000000", "브랜드 시계/쥬얼리", "A"),

  new HeaderCategoryT("52000000", "수입명품", "A")
);

categoryByLcodeGroupIdHash["10001"] = new Array(
  new HeaderCategoryT("12000000", "여성의류", "A"),

  new HeaderCategoryT("13000000", "남성의류", "A"),

  new HeaderCategoryT("40000000", "언더웨어", "A")
);

categoryByLcodeGroupIdHash["20001"] = new Array(
  new HeaderCategoryT("18000000", "화장품/향수", "A"),

  new HeaderCategoryT("05000000", "바디/헤어", "A")
);

categoryByLcodeGroupIdHash["20002"] = new Array(
  new HeaderCategoryT("30000000", "신발", "A"),

  new HeaderCategoryT("16000000", "가방/패션잡화", "A"),

  new HeaderCategoryT("17000000", "쥬얼리/시계/선글라스", "A")
);

categoryByLcodeGroupIdHash["30001"] = new Array(
  new HeaderCategoryT("51000000", "신선식품", "A"),

  new HeaderCategoryT("19000000", "건강식품", "A"),

  new HeaderCategoryT("38000000", "커피/음료", "A"),

  new HeaderCategoryT("64000000", "가공식품", "A")
);

categoryByLcodeGroupIdHash["30002"] = new Array(
  new HeaderCategoryT("39000000", "생필품", "A")
);

categoryByLcodeGroupIdHash["30003"] = new Array(
  new HeaderCategoryT("31000000", "출산/육아", "A"),

  new HeaderCategoryT("20000000", "장난감/완구", "A"),

  new HeaderCategoryT("32000000", "유아동의류", "A"),

  new HeaderCategoryT("49000000", "유아동신발/잡화", "A")
);

categoryByLcodeGroupIdHash["40001"] = new Array(
  new HeaderCategoryT("27000000", "가구/DIY", "A"),

  new HeaderCategoryT("23000000", "조명/인테리어", "A"),

  new HeaderCategoryT("28000000", "생활용품", "A"),

  new HeaderCategoryT("44000000", "주방용품", "A"),

  new HeaderCategoryT("75000000", "침구/커튼", "A")
);

categoryByLcodeGroupIdHash["40002"] = new Array(
  new HeaderCategoryT("33000000", "건강/의료용품", "A"),

  new HeaderCategoryT("45000000", "반려동물용품", "A"),

  new HeaderCategoryT("46000000", "악기/취미", "A"),

  new HeaderCategoryT("10000000", "문구/사무용품", "A"),

  new HeaderCategoryT("99000000", "꽃/이벤트용품", "A"),

  new HeaderCategoryT("77000000", "렌탈 서비스", "A")
);

categoryByLcodeGroupIdHash["50001"] = new Array(
  new HeaderCategoryT("29000000", "영상가전", "A"),

  new HeaderCategoryT("34000000", "계절가전", "A"),

  new HeaderCategoryT("03000000", "주방가전", "A"),

  new HeaderCategoryT("71000000", "생활/미용가전", "A")
);

categoryByLcodeGroupIdHash["50002"] = new Array(
  new HeaderCategoryT("02000000", "카메라", "A"),

  new HeaderCategoryT("14000000", "음향기기", "A"),

  new HeaderCategoryT("15000000", "게임", "A"),

  new HeaderCategoryT("07000000", "모바일/태블릿", "A")
);

categoryByLcodeGroupIdHash["50003"] = new Array(
  new HeaderCategoryT("22000000", "노트북/PC", "A"),

  new HeaderCategoryT("01000000", "모니터/프린터", "A"),

  new HeaderCategoryT("50000000", "PC주변기기", "A"),

  new HeaderCategoryT("43000000", "저장장치", "A")
);

categoryByLcodeGroupIdHash["60001"] = new Array(
  new HeaderCategoryT("21000000", "휘트니스/수영", "A"),

  new HeaderCategoryT("37000000", "스포츠의류/운동화", "A"),

  new HeaderCategoryT("08000000", "골프", "A"),

  new HeaderCategoryT("48000000", "등산/아웃도어", "A"),

  new HeaderCategoryT("72000000", "캠핑/낚시", "A"),

  new HeaderCategoryT("73000000", "구기/라켓", "A"),

  new HeaderCategoryT("76000000", "자전거/보드/기타레저", "A")
);

categoryByLcodeGroupIdHash["60002"] = new Array(
  new HeaderCategoryT("04000000", "자동차용품", "A"),

  new HeaderCategoryT("55000000", "공구/안전/산업용품", "A")
);

categoryByLcodeGroupIdHash["70001"] = new Array(
  new HeaderCategoryT("36000000", "도서/교육/음반", "A")
);

categoryByLcodeGroupIdHash["70002"] = new Array(
  new HeaderCategoryT("41000000", "백화점/제화상품권", "A")
);

categoryByLcodeGroupIdHash["70003"] = new Array(
  new HeaderCategoryT("24000000", "여행/항공권", "A"),

  new HeaderCategoryT("86000000", "e쿠폰/모바일상품권", "A")
);

childCategoryHash["12000000"] = new Array(
  new HeaderCategoryT("12080000", "티셔츠", "A"),

  new HeaderCategoryT("12050000", "셔츠/블라우스", "A"),

  new HeaderCategoryT("12060000", "가디건", "A"),

  new HeaderCategoryT("12090000", "니트", "A"),

  new HeaderCategoryT("12070000", "원피스", "A"),

  new HeaderCategoryT("12130000", "스커트", "A"),

  new HeaderCategoryT("12140000", "바지", "A"),

  new HeaderCategoryT("12220000", "청바지", "A"),

  new HeaderCategoryT("12380000", "레깅스", "A"),

  new HeaderCategoryT("12230000", "자켓/코트", "A"),

  new HeaderCategoryT("12370000", "점퍼/야상/패딩", "A"),

  new HeaderCategoryT("12320000", "조끼", "A"),

  new HeaderCategoryT("12150000", "트레이닝복", "A"),

  new HeaderCategoryT("12390000", "정장", "A"),

  new HeaderCategoryT("12340000", "수영복/비치웨어", "A"),

  new HeaderCategoryT("12200000", "테마의류", "A"),

  new HeaderCategoryT("12240000", "클럽의상", "A"),

  new HeaderCategoryT("12410000", "교복", "A"),

  new HeaderCategoryT("12420000", "마담의류", "A"),

  new HeaderCategoryT("12430000", "한복", "A")
);

childCategoryHash["13000000"] = new Array(
  new HeaderCategoryT("13290000", "반팔티셔츠", "A"),

  new HeaderCategoryT("13050000", "긴팔티셔츠", "A"),

  new HeaderCategoryT("13060000", "캐주얼셔츠", "A"),

  new HeaderCategoryT("13040000", "드레스셔츠", "A"),

  new HeaderCategoryT("13330000", "정장", "A"),

  new HeaderCategoryT("13250000", "반바지", "A"),

  new HeaderCategoryT("13260000", "청바지", "A"),

  new HeaderCategoryT("13240000", "캐주얼바지", "A"),

  new HeaderCategoryT("13120000", "트레이닝복", "A"),

  new HeaderCategoryT("13070000", "니트", "A"),

  new HeaderCategoryT("13180000", "가디건", "A"),

  new HeaderCategoryT("13230000", "조끼", "A"),

  new HeaderCategoryT("13100000", "캐주얼자켓", "A"),

  new HeaderCategoryT("13090000", "점퍼/야상/패딩", "A"),

  new HeaderCategoryT("13130000", "코트", "A"),

  new HeaderCategoryT("13310000", "비치웨어/수영복", "A"),

  new HeaderCategoryT("13170000", "테마의류", "A"),

  new HeaderCategoryT("13380000", "교복", "A"),

  new HeaderCategoryT("13340000", "빅사이즈", "A")
);

childCategoryHash["40000000"] = new Array(
  new HeaderCategoryT("40010000", "여성 브라", "A"),

  new HeaderCategoryT("40020000", "여성 팬티", "A"),

  new HeaderCategoryT("40030000", "브라팬티세트", "A"),

  new HeaderCategoryT("40120000", "브라탑/런닝/속바지", "A"),

  new HeaderCategoryT("40040000", "남성 런닝", "A"),

  new HeaderCategoryT("40050000", "남성 팬티", "A"),

  new HeaderCategoryT("40100000", "남성 런닝/팬티세트", "A"),

  new HeaderCategoryT("40060000", "잠옷/홈웨어", "A"),

  new HeaderCategoryT("40080000", "보정 속옷", "A"),

  new HeaderCategoryT("40130000", "주니어 속옷", "A"),

  new HeaderCategoryT("40070000", "내의", "A"),

  new HeaderCategoryT("40090000", "속옷 소품", "A")
);

childCategoryHash["18000000"] = new Array(
  new HeaderCategoryT("18540000", "스킨케어", "A"),

  new HeaderCategoryT("18410000", "선케어", "A"),

  new HeaderCategoryT("18320000", "팩/마스크", "A"),

  new HeaderCategoryT("18340000", "베이스메이크업", "A"),

  new HeaderCategoryT("18350000", "색조메이크업", "A"),

  new HeaderCategoryT("18370000", "클렌징/필링", "A"),

  new HeaderCategoryT("18360000", "남성화장품", "A"),

  new HeaderCategoryT("18580000", "네일케어", "A"),

  new HeaderCategoryT("18640000", "향수", "A"),

  new HeaderCategoryT("18650000", "이미용소품", "A")
);

childCategoryHash["05000000"] = new Array(
  new HeaderCategoryT("05300000", "헤어케어", "A"),

  new HeaderCategoryT("05480000", "바디케어", "A"),

  new HeaderCategoryT("05460000", "헤어스타일링", "A"),

  new HeaderCategoryT("05490000", "핸드케어/풋케어", "A"),

  new HeaderCategoryT("05510000", "제모용품", "A"),

  new HeaderCategoryT("05570000", "구강케어", "A"),

  new HeaderCategoryT("05580000", "면도용품", "A")
);

childCategoryHash["30000000"] = new Array(
  new HeaderCategoryT("30010000", "펌프스/오픈슈즈", "A"),

  new HeaderCategoryT("30040000", "단화/플랫슈즈", "A"),

  new HeaderCategoryT("30020000", "여성부츠/워커", "A"),

  new HeaderCategoryT("30030000", "여성샌들/쪼리", "A"),

  new HeaderCategoryT("30070000", "남성정장구두", "A"),

  new HeaderCategoryT("30290000", "남성캐주얼화", "A"),

  new HeaderCategoryT("30090000", "남성샌들", "A"),

  new HeaderCategoryT("30110000", "실내화/슬리퍼", "A"),

  new HeaderCategoryT("30130000", "빅사이즈신발", "A"),

  new HeaderCategoryT("30100000", "기능화", "A"),

  new HeaderCategoryT("30120000", "깔창/운동화끈/소품", "A"),

  new HeaderCategoryT("30360000", "슬립온/스니커즈", "A"),

  new HeaderCategoryT("30370000", "컴포트화", "A"),

  new HeaderCategoryT("30380000", "패션운동화", "A")
);

childCategoryHash["16000000"] = new Array(
  new HeaderCategoryT("16390000", "여성가방", "A"),

  new HeaderCategoryT("16410000", "남성가방", "A"),

  new HeaderCategoryT("16420000", "백팩/캐주얼가방", "A"),

  new HeaderCategoryT("16430000", "여행가방", "A"),

  new HeaderCategoryT("16460000", "지갑", "A"),

  new HeaderCategoryT("16660000", "벨트", "A"),

  new HeaderCategoryT("16680000", "양말/스타킹", "A"),

  new HeaderCategoryT("16490000", "넥타이/손수건", "A"),

  new HeaderCategoryT("16590000", "모자", "A"),

  new HeaderCategoryT("16670000", "우산/양산/소품", "A"),

  new HeaderCategoryT("16690000", "머플러/스카프/숄", "A"),

  new HeaderCategoryT("16770000", "장갑", "A"),

  new HeaderCategoryT("16860000", "여행소품", "A"),

  new HeaderCategoryT("16870000", "키링/가방액세서리", "A")
);

childCategoryHash["17000000"] = new Array(
  new HeaderCategoryT("17450000", "순금/골드바/돌반지", "A"),

  new HeaderCategoryT("17490000", "스포츠/캐릭터시계", "A"),

  new HeaderCategoryT("17550000", "패션시계", "A"),

  new HeaderCategoryT("17660000", "선글라스", "A"),

  new HeaderCategoryT("17610000", "예물/다이아몬드", "A"),

  new HeaderCategoryT("17600000", "14K/18K쥬얼리", "A"),

  new HeaderCategoryT("17270000", "목걸이/펜던트", "A"),

  new HeaderCategoryT("17280000", "귀걸이", "A"),

  new HeaderCategoryT("17440000", "쥬얼리소품", "A"),

  new HeaderCategoryT("17260000", "반지", "A"),

  new HeaderCategoryT("17290000", "팔찌/발찌", "A"),

  new HeaderCategoryT("17300000", "쥬얼리세트", "A"),

  new HeaderCategoryT("17240000", "커플링/커플목걸이", "A"),

  new HeaderCategoryT("17530000", "남성용쥬얼리", "A"),

  new HeaderCategoryT("17520000", "아동용쥬얼리", "A"),

  new HeaderCategoryT("17540000", "헤어액세서리", "A"),

  new HeaderCategoryT("17620000", "브로치/배지", "A"),

  new HeaderCategoryT("17580000", "가발", "A"),

  new HeaderCategoryT("17640000", "안경테", "A"),

  new HeaderCategoryT("17680000", "안경/선글라스소품", "A")
);

childCategoryHash["51000000"] = new Array(
  new HeaderCategoryT("51120000", "쌀", "A"),

  new HeaderCategoryT("51380000", "잡곡/혼합곡", "A"),

  new HeaderCategoryT("51190000", "과일", "A"),

  new HeaderCategoryT("51400000", "견과류", "A"),

  new HeaderCategoryT("51410000", "냉동/건과일", "A"),

  new HeaderCategoryT("51220000", "뿌리채소", "A"),

  new HeaderCategoryT("51520000", "열매채소", "A"),

  new HeaderCategoryT("51230000", "잎줄기채소", "A"),

  new HeaderCategoryT("51530000", "버섯/나물류", "A"),

  new HeaderCategoryT("51330000", "김치", "A"),

  new HeaderCategoryT("51340000", "반찬", "A"),

  new HeaderCategoryT("51480000", "젓갈류/액젓", "A"),

  new HeaderCategoryT("51270000", "소고기", "A"),

  new HeaderCategoryT("51500000", "돼지고기", "A"),

  new HeaderCategoryT("51440000", "닭고기/계란", "A"),

  new HeaderCategoryT("51450000", "기타축산물", "A"),

  new HeaderCategoryT("51260000", "생선", "A"),

  new HeaderCategoryT("51250000", "해산물/어패류", "A"),

  new HeaderCategoryT("51240000", "건어물", "A"),

  new HeaderCategoryT("51420000", "김/해조류", "A")
);

childCategoryHash["19000000"] = new Array(
  new HeaderCategoryT("19010000", "홍삼/인삼", "A"),

  new HeaderCategoryT("19310000", "한방재료", "A"),

  new HeaderCategoryT("19040000", "영양제", "A"),

  new HeaderCategoryT("19250000", "건강즙", "A"),

  new HeaderCategoryT("19190000", "꿀", "A"),

  new HeaderCategoryT("19200000", "건강환/건강분말", "A"),

  new HeaderCategoryT("19370000", "다이어트식품", "A")
);

childCategoryHash["38000000"] = new Array(
  new HeaderCategoryT("38240000", "생수/탄산수", "A"),

  new HeaderCategoryT("38170000", "탄산/청량음료", "A"),

  new HeaderCategoryT("38390000", "기능성음료", "A"),

  new HeaderCategoryT("38180000", "주스/과즙음료", "A"),

  new HeaderCategoryT("38250000", "커피", "A"),

  new HeaderCategoryT("38200000", "차음료/전통음료", "A"),

  new HeaderCategoryT("38220000", "차류", "A"),

  new HeaderCategoryT("38190000", "우유/두유", "A"),

  new HeaderCategoryT("38440000", "전통주", "A")
);

childCategoryHash["64000000"] = new Array(
  new HeaderCategoryT("64020000", "축산가공식품", "A"),

  new HeaderCategoryT("64030000", "즉석밥", "A"),

  new HeaderCategoryT("64040000", "라면", "A"),

  new HeaderCategoryT("64050000", "면류", "A"),

  new HeaderCategoryT("64060000", "통조림/캔", "A"),

  new HeaderCategoryT("64070000", "빵/케이크", "A"),

  new HeaderCategoryT("64080000", "떡", "A"),

  new HeaderCategoryT("64090000", "한과/전통과자", "A"),

  new HeaderCategoryT("64100000", "과자/간식", "A"),

  new HeaderCategoryT("64220000", "빙과류", "A"),

  new HeaderCategoryT("64130000", "치즈/버터/크림", "A"),

  new HeaderCategoryT("64150000", "잼/시럽", "A"),

  new HeaderCategoryT("64160000", "식용유/오일", "A"),

  new HeaderCategoryT("64170000", "장류", "A"),

  new HeaderCategoryT("64190000", "조미료/양념", "A"),

  new HeaderCategoryT("64200000", "소스/드레싱", "A"),

  new HeaderCategoryT("64210000", "밀가루/믹스류", "A"),

  new HeaderCategoryT("64240000", "냉동/간편조리식품", "A"),

  new HeaderCategoryT("64250000", "수산가공식품", "A")
);

childCategoryHash["39000000"] = new Array(
  new HeaderCategoryT("39310000", "일회용품", "A"),

  new HeaderCategoryT("39170000", "세제/세정제", "A"),

  new HeaderCategoryT("39180000", "살충제/방충제", "A"),

  new HeaderCategoryT("39260000", "탈취/방향/제습", "A"),

  new HeaderCategoryT("39320000", "화장지/물티슈", "A"),

  new HeaderCategoryT("39330000", "생리대/성인기저귀", "A")
);

childCategoryHash["31000000"] = new Array(
  new HeaderCategoryT("31260000", "유모차/카시트", "A"),

  new HeaderCategoryT("31130000", "유아외출용품", "A"),

  new HeaderCategoryT("31290000", "놀이방매트", "A"),

  new HeaderCategoryT("31120000", "유아발육용품", "A"),

  new HeaderCategoryT("31140000", "유아안전용품", "A"),

  new HeaderCategoryT("31250000", "유아가구", "A"),

  new HeaderCategoryT("31230000", "수유용품", "A"),

  new HeaderCategoryT("31410000", "이유식용품", "A"),

  new HeaderCategoryT("31310000", "소독/세정용품", "A"),

  new HeaderCategoryT("31330000", "유아스킨/바디케어", "A"),

  new HeaderCategoryT("31460000", "유아구강용품", "A"),

  new HeaderCategoryT("31400000", "유아위생용품", "A"),

  new HeaderCategoryT("31180000", "유아목욕용품", "A"),

  new HeaderCategoryT("31390000", "유아세탁용품", "A"),

  new HeaderCategoryT("31520000", "임부복", "A"),

  new HeaderCategoryT("31190000", "임산부용품", "A"),

  new HeaderCategoryT("31430000", "출산/돌기념품", "A"),

  new HeaderCategoryT("31590000", "분유", "A"),

  new HeaderCategoryT("31600000", "기저귀", "A"),

  new HeaderCategoryT("31620000", "이유식/유아간식", "A")
);

childCategoryHash["20000000"] = new Array(
  new HeaderCategoryT("20010000", "신생아/영유아완구", "A"),

  new HeaderCategoryT("20140000", "감각발달완구", "A"),

  new HeaderCategoryT("20040000", "블록", "A"),

  new HeaderCategoryT("20020000", "승용완구", "A"),

  new HeaderCategoryT("20030000", "공간놀이완구", "A"),

  new HeaderCategoryT("20110000", "스포츠완구", "A"),

  new HeaderCategoryT("20230000", "로봇/캐릭터완구", "A"),

  new HeaderCategoryT("20080000", "작동완구", "A"),

  new HeaderCategoryT("20070000", "역할놀이완구", "A"),

  new HeaderCategoryT("20060000", "인형", "A"),

  new HeaderCategoryT("20270000", "미술/공작놀이", "A"),

  new HeaderCategoryT("20260000", "음악/악기놀이", "A"),

  new HeaderCategoryT("20120000", "자연/과학완구", "A"),

  new HeaderCategoryT("20170000", "언어/학습완구", "A"),

  new HeaderCategoryT("20150000", "원목교구/가베", "A"),

  new HeaderCategoryT("20160000", "유아동퍼즐", "A"),

  new HeaderCategoryT("20220000", "물놀이완구", "A"),

  new HeaderCategoryT("20310000", "RC완구", "A")
);

childCategoryHash["32000000"] = new Array(
  new HeaderCategoryT("32010000", "신생아의류", "A"),

  new HeaderCategoryT("32230000", "여아의류", "A"),

  new HeaderCategoryT("32050000", "남아의류", "A"),

  new HeaderCategoryT("32040000", "유아동공용의류", "A"),

  new HeaderCategoryT("32100000", "유아동내의/잠옷", "A"),

  new HeaderCategoryT("32120000", "유아동테마의류", "A"),

  new HeaderCategoryT("32250000", "유아동스포츠의류", "A")
);

childCategoryHash["49000000"] = new Array(
  new HeaderCategoryT("49010000", "유아동신발", "A"),

  new HeaderCategoryT("49080000", "유아동가방", "A"),

  new HeaderCategoryT("49110000", "유아동잡화", "A")
);

childCategoryHash["27000000"] = new Array(
  new HeaderCategoryT("27190000", "침대/매트리스", "A"),

  new HeaderCategoryT("27310000", "옷장/붙박이장", "A"),

  new HeaderCategoryT("27300000", "화장대/거울", "A"),

  new HeaderCategoryT("27240000", "수납가구", "A"),

  new HeaderCategoryT("27210000", "소파", "A"),

  new HeaderCategoryT("27220000", "거실장/장식장", "A"),

  new HeaderCategoryT("27260000", "식탁/테이블", "A"),

  new HeaderCategoryT("27160000", "의자", "A"),

  new HeaderCategoryT("27150000", "책상/책장", "A"),

  new HeaderCategoryT("27110000", "아동가구", "A"),

  new HeaderCategoryT("27180000", "사무/업소용가구", "A"),

  new HeaderCategoryT("27330000", "시공인테리어", "A"),

  new HeaderCategoryT("27320000", "DIY가구용품", "A"),

  new HeaderCategoryT("27280000", "야외용가구", "A")
);

childCategoryHash["23000000"] = new Array(
  new HeaderCategoryT("23060000", "전구/형광등", "A"),

  new HeaderCategoryT("23200000", "조명기구", "A"),

  new HeaderCategoryT("23190000", "스탠드조명", "A"),

  new HeaderCategoryT("23240000", "시트지", "A"),

  new HeaderCategoryT("23140000", "벽지", "A"),

  new HeaderCategoryT("23020000", "인테리어시계", "A"),

  new HeaderCategoryT("23030000", "홈갤러리/액자", "A"),

  new HeaderCategoryT("23010000", "인테리어소품", "A"),

  new HeaderCategoryT("23270000", "아로마/캔들용품", "A"),

  new HeaderCategoryT("23280000", "타일/바닥재", "A"),

  new HeaderCategoryT("23310000", "페인트", "A")
);

childCategoryHash["28000000"] = new Array(
  new HeaderCategoryT("28640000", "수납/정리용품", "A"),

  new HeaderCategoryT("28330000", "선반/행거/진열대", "A"),

  new HeaderCategoryT("28480000", "세탁용품", "A"),

  new HeaderCategoryT("28470000", "청소용품", "A"),

  new HeaderCategoryT("28610000", "생활서비스", "A"),

  new HeaderCategoryT("28560000", "샤워기/수전용품", "A"),

  new HeaderCategoryT("28350000", "욕실인테리어", "A"),

  new HeaderCategoryT("28680000", "욕실용품", "A"),

  new HeaderCategoryT("28540000", "욕실보수용품", "A"),

  new HeaderCategoryT("28340000", "시즌용품", "A"),

  new HeaderCategoryT("28440000", "해충퇴치용품", "A"),

  new HeaderCategoryT("28600000", "생활안전용품", "A"),

  new HeaderCategoryT("28140000", "생활잡화", "A")
);

childCategoryHash["44000000"] = new Array(
  new HeaderCategoryT("44010000", "냄비/솥", "A"),

  new HeaderCategoryT("44020000", "프라이팬", "A"),

  new HeaderCategoryT("44150000", "주전자/티포트", "A"),

  new HeaderCategoryT("44030000", "식기", "A"),

  new HeaderCategoryT("44050000", "컵/잔", "A"),

  new HeaderCategoryT("44090000", "조리도구", "A"),

  new HeaderCategoryT("44210000", "수저/포크", "A"),

  new HeaderCategoryT("44180000", "주방정리용품", "A"),

  new HeaderCategoryT("44190000", "주방잡화", "A"),

  new HeaderCategoryT("44110000", "커피용품", "A"),

  new HeaderCategoryT("44120000", "와인용품", "A"),

  new HeaderCategoryT("44220000", "제과/제빵도구", "A"),

  new HeaderCategoryT("44100000", "제수용품", "A"),

  new HeaderCategoryT("44240000", "보관/밀폐용기", "A"),

  new HeaderCategoryT("44310000", "칼/커팅기구", "A"),

  new HeaderCategoryT("44360000", "주방소모품", "A")
);

childCategoryHash["75000000"] = new Array(
  new HeaderCategoryT("75010000", "침구세트", "A"),

  new HeaderCategoryT("75020000", "토퍼/패드", "A"),

  new HeaderCategoryT("75030000", "솜", "A"),

  new HeaderCategoryT("75040000", "이불", "A"),

  new HeaderCategoryT("75050000", "베개/베개커버", "A"),

  new HeaderCategoryT("75060000", "아동침구", "A"),

  new HeaderCategoryT("75070000", "침대/매트커버", "A"),

  new HeaderCategoryT("75080000", "커튼", "A"),

  new HeaderCategoryT("75090000", "블라인드", "A"),

  new HeaderCategoryT("75100000", "카페트/러그", "A"),

  new HeaderCategoryT("75110000", "수예용품", "A"),

  new HeaderCategoryT("75130000", "방석/쿠션", "A"),

  new HeaderCategoryT("75140000", "커버류", "A")
);

childCategoryHash["33000000"] = new Array(
  new HeaderCategoryT("33520000", "눈건강용품", "A"),

  new HeaderCategoryT("33210000", "호흡/수면건강용품", "A"),

  new HeaderCategoryT("33010000", "손/발건강용품", "A"),

  new HeaderCategoryT("33530000", "기타건강관리용품", "A"),

  new HeaderCategoryT("33040000", "건강측정용품", "A"),

  new HeaderCategoryT("33320000", "당뇨관리용품", "A"),

  new HeaderCategoryT("33420000", "일반의료용품", "A"),

  new HeaderCategoryT("33480000", "찜질용품", "A"),

  new HeaderCategoryT("33290000", "저주파/적외선용품", "A"),

  new HeaderCategoryT("33430000", "재활운동용품", "A"),

  new HeaderCategoryT("33020000", "안마용품", "A"),

  new HeaderCategoryT("33580000", "정수기", "A"),

  new HeaderCategoryT("33410000", "실버용품", "A"),

  new HeaderCategoryT("33440000", "전문의료용품", "A"),

  new HeaderCategoryT("33450000", "금연보조용품", "A"),

  new HeaderCategoryT("33340000", "비데", "A"),

  new HeaderCategoryT("33230000", "성인용품", "A"),

  new HeaderCategoryT("33590000", "연수기/이온수기", "A")
);

childCategoryHash["45000000"] = new Array(
  new HeaderCategoryT("45010000", "강아지사료", "A"),

  new HeaderCategoryT("45020000", "강아지간식", "A"),

  new HeaderCategoryT("45030000", "반려동물영양제", "A"),

  new HeaderCategoryT("45070000", "강아지위생용품", "A"),

  new HeaderCategoryT("45080000", "강아지미용용품", "A"),

  new HeaderCategoryT("45100000", "강아지패션용품", "A"),

  new HeaderCategoryT("45090000", "하우스/안전용품", "A"),

  new HeaderCategoryT("45040000", "식기/급수기", "A"),

  new HeaderCategoryT("45050000", "장난감/훈련용품", "A"),

  new HeaderCategoryT("45270000", "외출용품", "A"),

  new HeaderCategoryT("45110000", "고양이사료", "A"),

  new HeaderCategoryT("45260000", "고양이간식", "A"),

  new HeaderCategoryT("45250000", "고양이위생용품", "A"),

  new HeaderCategoryT("45240000", "고양이미용/패션용품", "A"),

  new HeaderCategoryT("45180000", "곤충용품", "A"),

  new HeaderCategoryT("45210000", "관상어용품", "A"),

  new HeaderCategoryT("45220000", "조류용품", "A"),

  new HeaderCategoryT("45370000", "햄스터/토끼용품", "A"),

  new HeaderCategoryT("45230000", "기타반려동물용품", "A")
);

childCategoryHash["46000000"] = new Array(
  new HeaderCategoryT("46350000", "피아노/건반악기", "A"),

  new HeaderCategoryT("46420000", "기타(Guitar)", "A"),

  new HeaderCategoryT("46150000", "게임/퍼즐", "A"),

  new HeaderCategoryT("46330000", "무선/RC", "A"),

  new HeaderCategoryT("46100000", "모형/프라모델/피규어", "A"),

  new HeaderCategoryT("46170000", "수집용품", "A"),

  new HeaderCategoryT("46080000", "공예용품", "A"),

  new HeaderCategoryT("46220000", "종교용품", "A"),

  new HeaderCategoryT("46390000", "광학기기", "A"),

  new HeaderCategoryT("46440000", "타악기", "A"),

  new HeaderCategoryT("46450000", "관악기", "A"),

  new HeaderCategoryT("46480000", "기타악기/교본", "A"),

  new HeaderCategoryT("46550000", "국악기", "A"),

  new HeaderCategoryT("46490000", "악기용품", "A"),

  new HeaderCategoryT("46580000", "현악기", "A")
);

childCategoryHash["10000000"] = new Array(
  new HeaderCategoryT("10230000", "보드/게시판", "A"),

  new HeaderCategoryT("10050000", "오피스용품", "A"),

  new HeaderCategoryT("10250000", "책상정리용품", "A"),

  new HeaderCategoryT("10090000", "사무용지", "A"),

  new HeaderCategoryT("10030000", "앨범", "A"),

  new HeaderCategoryT("10180000", "다이어리/플래너", "A"),

  new HeaderCategoryT("10170000", "파일/바인더", "A"),

  new HeaderCategoryT("10110000", "노트/수첩/메모지", "A"),

  new HeaderCategoryT("10120000", "물감/포스터칼라", "A"),

  new HeaderCategoryT("10160000", "제도용품", "A"),

  new HeaderCategoryT("10270000", "필기용품", "A"),

  new HeaderCategoryT("10320000", "드로잉용품", "A"),

  new HeaderCategoryT("10330000", "팬시용품", "A"),

  new HeaderCategoryT("10340000", "미술보조용품", "A"),

  new HeaderCategoryT("10350000", "붓", "A"),

  new HeaderCategoryT("10360000", "동양화/서예용품", "A"),

  new HeaderCategoryT("10390000", "과목별학용품", "A"),

  new HeaderCategoryT("10450000", "판화/조소용품", "A"),

  new HeaderCategoryT("10480000", "포장용품", "A"),

  new HeaderCategoryT("10530000", "홍보/안내/기념용품", "A"),

  new HeaderCategoryT("10560000", "도장/스탬프", "A"),

  new HeaderCategoryT("10580000", "화방지류", "A")
);

childCategoryHash["99000000"] = new Array(
  new HeaderCategoryT("99090000", "원예/식물", "A"),

  new HeaderCategoryT("99260000", "정원/원예용품", "A"),

  new HeaderCategoryT("99280000", "씨앗/모종/묘목", "A"),

  new HeaderCategoryT("99300000", "선물용꽃/조화", "A"),

  new HeaderCategoryT("99080000", "꽃배달서비스", "A"),

  new HeaderCategoryT("99290000", "크리스마스용품", "A"),

  new HeaderCategoryT("99190000", "이벤트/파티용품", "A")
);

childCategoryHash["77000000"] = new Array(
  new HeaderCategoryT("77010000", "정수기 렌탈", "A"),

  new HeaderCategoryT("77020000", "공기청정기 렌탈", "A"),

  new HeaderCategoryT("77030000", "비데 렌탈", "A"),

  new HeaderCategoryT("77040000", "안마의자 렌탈", "A"),

  new HeaderCategoryT("77050000", "의류건조기 렌탈", "A"),

  new HeaderCategoryT("77060000", "전기레인지 렌탈", "A"),

  new HeaderCategoryT("77070000", "매트리스 렌탈", "A"),

  new HeaderCategoryT("77080000", "자동차 렌탈", "A"),

  new HeaderCategoryT("77090000", "기타 렌탈", "A")
);

childCategoryHash["29000000"] = new Array(
  new HeaderCategoryT("29610000", "TV", "A"),

  new HeaderCategoryT("29100000", "TV용품", "A"),

  new HeaderCategoryT("29510000", "프로젝터/스크린", "A"),

  new HeaderCategoryT("29670000", "프로젝터용품", "A"),

  new HeaderCategoryT("29070000", "영상플레이어", "A"),

  new HeaderCategoryT("29830000", "디지털액자", "A")
);

childCategoryHash["34000000"] = new Array(
  new HeaderCategoryT("34390000", "에어컨", "A"),

  new HeaderCategoryT("34410000", "에어컨용품", "A"),

  new HeaderCategoryT("34470000", "냉방기기", "A"),

  new HeaderCategoryT("34110000", "난방기기", "A"),

  new HeaderCategoryT("34290000", "난방매트", "A"),

  new HeaderCategoryT("34070000", "습도조절기기", "A"),

  new HeaderCategoryT("34080000", "공기정화기기", "A"),

  new HeaderCategoryT("34240000", "모기/해충퇴치기", "A")
);

childCategoryHash["03000000"] = new Array(
  new HeaderCategoryT("03960000", "냉장고/냉동고", "A"),

  new HeaderCategoryT("03850000", "레인지", "A"),

  new HeaderCategoryT("03700000", "오븐", "A"),

  new HeaderCategoryT("03610000", "믹서기/원액기", "A"),

  new HeaderCategoryT("03820000", "전기밥솥", "A"),

  new HeaderCategoryT("03970000", "전기쿠커", "A"),

  new HeaderCategoryT("03650000", "전기그릴/전기팬", "A"),

  new HeaderCategoryT("03880000", "전기포트", "A"),

  new HeaderCategoryT("03930000", "중탕기/약탕기", "A"),

  new HeaderCategoryT("03890000", "커피메이커", "A"),

  new HeaderCategoryT("03670000", "토스터기", "A"),

  new HeaderCategoryT("03920000", "튀김기", "A"),

  new HeaderCategoryT("03640000", "빙과기기", "A"),

  new HeaderCategoryT("03910000", "간식메이커", "A"),

  new HeaderCategoryT("03760000", "식품제조기", "A"),

  new HeaderCategoryT("03900000", "계량측정기기", "A"),

  new HeaderCategoryT("03870000", "식기세척건조기", "A"),

  new HeaderCategoryT("03660000", "주방보조기기", "A")
);

childCategoryHash["71000000"] = new Array(
  new HeaderCategoryT("71310000", "세탁기", "A"),

  new HeaderCategoryT("71320000", "의류건조기/의류관리기", "A"),

  new HeaderCategoryT("71240000", "청소기", "A"),

  new HeaderCategoryT("71250000", "청소기용품", "A"),

  new HeaderCategoryT("71020000", "다리미", "A"),

  new HeaderCategoryT("71110000", "구강청정기기", "A"),

  new HeaderCategoryT("71140000", "피부관리기기", "A"),

  new HeaderCategoryT("71030000", "헤어스타일러", "A"),

  new HeaderCategoryT("71180000", "제모기기", "A"),

  new HeaderCategoryT("71290000", "살균소독기기", "A"),

  new HeaderCategoryT("71120000", "전화기/통신기기", "A"),

  new HeaderCategoryT("71080000", "보풀제거기/재봉틀", "A"),

  new HeaderCategoryT("71280000", "사무가전", "A"),

  new HeaderCategoryT("71100000", "전기용품", "A")
);

childCategoryHash["02000000"] = new Array(
  new HeaderCategoryT("02340000", "디지털카메라", "A"),

  new HeaderCategoryT("02770000", "캠코더/액션캠", "A"),

  new HeaderCategoryT("02750000", "헬리캠/드론", "A"),

  new HeaderCategoryT("02270000", "카메라렌즈", "A"),

  new HeaderCategoryT("02480000", "렌즈용품", "A"),

  new HeaderCategoryT("02550000", "필름카메라", "A"),

  new HeaderCategoryT("02360000", "즉석카메라", "A"),

  new HeaderCategoryT("02630000", "카메라용품", "A"),

  new HeaderCategoryT("02460000", "카메라조명용품", "A"),

  new HeaderCategoryT("02730000", "카메라액정용품", "A"),

  new HeaderCategoryT("02660000", "촬영용품", "A"),

  new HeaderCategoryT("02520000", "삼각대용품", "A"),

  new HeaderCategoryT("02600000", "CCTV", "A"),

  new HeaderCategoryT("02830000", "사진인화", "A")
);

childCategoryHash["14000000"] = new Array(
  new HeaderCategoryT("14380000", "오디오/라디오", "A"),

  new HeaderCategoryT("14210000", "이어폰/헤드폰", "A"),

  new HeaderCategoryT("14350000", "이어폰/헤드폰용품", "A"),

  new HeaderCategoryT("14340000", "스피커/사운드바", "A"),

  new HeaderCategoryT("14460000", "스피커용품", "A"),

  new HeaderCategoryT("14370000", "홈시어터", "A"),

  new HeaderCategoryT("14480000", "음향재생기기", "A"),

  new HeaderCategoryT("14410000", "마이크", "A"),

  new HeaderCategoryT("14400000", "노래방기기", "A"),

  new HeaderCategoryT("14440000", "리시버/앰프/튜너", "A"),

  new HeaderCategoryT("14520000", "상업/특수음향", "A")
);

childCategoryHash["15000000"] = new Array(
  new HeaderCategoryT("15200000", "게임기", "A"),

  new HeaderCategoryT("15190000", "게임용품", "A"),

  new HeaderCategoryT("15340000", "게임타이틀", "A")
);

childCategoryHash["07000000"] = new Array(
  new HeaderCategoryT("07880000", "휴대폰", "A"),

  new HeaderCategoryT("07860000", "휴대폰일반용품", "A"),

  new HeaderCategoryT("07900000", "휴대폰보호용품", "A"),

  new HeaderCategoryT("07910000", "휴대폰충전용품", "A"),

  new HeaderCategoryT("07200000", "휴대폰촬영용품", "A"),

  new HeaderCategoryT("07730000", "태블릿", "A"),

  new HeaderCategoryT("07840000", "태블릿용품", "A"),

  new HeaderCategoryT("07800000", "충전케이블/젠더", "A"),

  new HeaderCategoryT("07830000", "웨어러블/스마트기기", "A"),

  new HeaderCategoryT("07810000", "디지털학습기기", "A"),

  new HeaderCategoryT("07890000", "통신상품", "A"),

  new HeaderCategoryT("07970000", "기기일시불약정가입", "A"),

  new HeaderCategoryT("07850000", "기기할부약정가입", "A")
);

childCategoryHash["22000000"] = new Array(
  new HeaderCategoryT("22310000", "PC", "A"),

  new HeaderCategoryT("22160000", "노트북", "A"),

  new HeaderCategoryT("22180000", "노트북용품", "A")
);

childCategoryHash["01000000"] = new Array(
  new HeaderCategoryT("01920000", "모니터", "A"),

  new HeaderCategoryT("01960000", "모니터용품", "A"),

  new HeaderCategoryT("01940000", "프린터", "A"),

  new HeaderCategoryT("01850000", "프린터용품", "A"),

  new HeaderCategoryT("01620000", "스캐너", "A"),

  new HeaderCategoryT("01810000", "복합기", "A"),

  new HeaderCategoryT("01710000", "잉크/토너", "A")
);

childCategoryHash["50000000"] = new Array(
  new HeaderCategoryT("50040000", "PC주변용품", "A"),

  new HeaderCategoryT("50240000", "PC부품", "A"),

  new HeaderCategoryT("50030000", "PC입력장치", "A"),

  new HeaderCategoryT("50150000", "PC영상/음향기기", "A"),

  new HeaderCategoryT("50430000", "ODD", "A"),

  new HeaderCategoryT("50140000", "네트워크장비", "A"),

  new HeaderCategoryT("50110000", "소프트웨어", "A"),

  new HeaderCategoryT("50350000", "영상/음향케이블", "A"),

  new HeaderCategoryT("50360000", "데이터/통신케이블", "A"),

  new HeaderCategoryT("50370000", "변환/전원케이블", "A")
);

childCategoryHash["43000000"] = new Array(
  new HeaderCategoryT("43100000", "이동식메모리", "A"),

  new HeaderCategoryT("43150000", "PC저장장치", "A"),

  new HeaderCategoryT("43240000", "공미디어", "A"),

  new HeaderCategoryT("43140000", "저장장치용품", "A")
);

childCategoryHash["21000000"] = new Array(
  new HeaderCategoryT("21400000", "헬스기구", "A"),

  new HeaderCategoryT("21820000", "웨이트기구", "A"),

  new HeaderCategoryT("21410000", "헬스용품", "A"),

  new HeaderCategoryT("21520000", "헬스보충제", "A"),

  new HeaderCategoryT("21660000", "에어로빅/댄스복", "A"),

  new HeaderCategoryT("21860000", "요가/필라테스", "A"),

  new HeaderCategoryT("21870000", "요가복/필라테스복", "A"),

  new HeaderCategoryT("21770000", "여성수영복", "A"),

  new HeaderCategoryT("21880000", "수상/수중스포츠복", "A"),

  new HeaderCategoryT("21460000", "수영용품", "A"),

  new HeaderCategoryT("21890000", "물놀이용품", "A"),

  new HeaderCategoryT("21910000", "남성수영복", "A"),

  new HeaderCategoryT("21930000", "권투/격투기", "A"),

  new HeaderCategoryT("21950000", "검도", "A"),

  new HeaderCategoryT("21960000", "마라톤/육상", "A"),

  new HeaderCategoryT("21970000", "스킨스쿠버", "A")
);

childCategoryHash["37000000"] = new Array(
  new HeaderCategoryT("37500000", "스포츠화", "A"),

  new HeaderCategoryT("37380000", "스포츠남성의류", "A"),

  new HeaderCategoryT("37390000", "스포츠여성의류", "A"),

  new HeaderCategoryT("37150000", "스포츠이너웨어", "A"),

  new HeaderCategoryT("37420000", "스포츠가방", "A"),

  new HeaderCategoryT("37440000", "스포츠모자", "A"),

  new HeaderCategoryT("37350000", "스포츠잡화", "A"),

  new HeaderCategoryT("37540000", "스포츠보호용품", "A"),

  new HeaderCategoryT("37590000", "스포츠기타용품", "A")
);

childCategoryHash["08000000"] = new Array(
  new HeaderCategoryT("08270000", "골프클럽", "A"),

  new HeaderCategoryT("08010000", "남성골프의류", "A"),

  new HeaderCategoryT("08020000", "여성골프의류", "A"),

  new HeaderCategoryT("08320000", "골프잡화", "A"),

  new HeaderCategoryT("08090000", "골프화", "A"),

  new HeaderCategoryT("08110000", "골프백", "A"),

  new HeaderCategoryT("08120000", "골프연습용품", "A"),

  new HeaderCategoryT("08260000", "골프공", "A"),

  new HeaderCategoryT("08130000", "필드용품", "A"),

  new HeaderCategoryT("08250000", "골프피팅", "A")
);

childCategoryHash["48000000"] = new Array(
  new HeaderCategoryT("48070000", "남성등산의류", "A"),

  new HeaderCategoryT("48080000", "여성등산의류", "A"),

  new HeaderCategoryT("48090000", "등산화/트레킹화", "A"),

  new HeaderCategoryT("48100000", "등산잡화/배낭", "A"),

  new HeaderCategoryT("48110000", "등산장비", "A")
);

childCategoryHash["72000000"] = new Array(
  new HeaderCategoryT("72020000", "텐트/타프", "A"),

  new HeaderCategoryT("72100000", "취사용품", "A"),

  new HeaderCategoryT("72120000", "캠핑조명용품", "A"),

  new HeaderCategoryT("72140000", "야외보온/난방용품", "A"),

  new HeaderCategoryT("72130000", "캠핑일반용품", "A"),

  new HeaderCategoryT("72200000", "야외보냉용품", "A"),

  new HeaderCategoryT("72080000", "낚시의류/잡화", "A"),

  new HeaderCategoryT("72210000", "루어낚시용품", "A"),

  new HeaderCategoryT("72220000", "민물낚시용품", "A"),

  new HeaderCategoryT("72230000", "바다낚시용품", "A"),

  new HeaderCategoryT("72240000", "낚시릴", "A"),

  new HeaderCategoryT("72250000", "낚시공구", "A"),

  new HeaderCategoryT("72260000", "낚싯대", "A"),

  new HeaderCategoryT("72290000", "낚시찌", "A"),

  new HeaderCategoryT("72300000", "보트/카약", "A"),

  new HeaderCategoryT("72310000", "낚시일반용품", "A")
);

childCategoryHash["73000000"] = new Array(
  new HeaderCategoryT("73010000", "축구용품", "A"),

  new HeaderCategoryT("73030000", "야구용품", "A"),

  new HeaderCategoryT("73040000", "야구의류/잡화", "A"),

  new HeaderCategoryT("73050000", "농구용품", "A"),

  new HeaderCategoryT("73060000", "배구용품", "A"),

  new HeaderCategoryT("73070000", "배드민턴용품", "A"),

  new HeaderCategoryT("73080000", "테니스용품", "A"),

  new HeaderCategoryT("73090000", "탁구용품", "A"),

  new HeaderCategoryT("73100000", "당구용품", "A"),

  new HeaderCategoryT("73110000", "볼링용품", "A"),

  new HeaderCategoryT("73150000", "기타구기/라켓용품", "A"),

  new HeaderCategoryT("73220000", "족구용품", "A"),

  new HeaderCategoryT("73230000", "스쿼시용품", "A")
);

childCategoryHash["76000000"] = new Array(
  new HeaderCategoryT("76010000", "전동/전기레저", "A"),

  new HeaderCategoryT("76020000", "스케이트/보드", "A"),

  new HeaderCategoryT("76050000", "서바이벌게임", "A"),

  new HeaderCategoryT("76100000", "자전거", "A"),

  new HeaderCategoryT("76120000", "자전거용품", "A"),

  new HeaderCategoryT("76160000", "자전거의류/잡화", "A"),

  new HeaderCategoryT("76210000", "자전거부품", "A"),

  new HeaderCategoryT("76240000", "스키/스노보드장비", "A"),

  new HeaderCategoryT("76250000", "스키/스노보드의류", "A"),

  new HeaderCategoryT("76290000", "스키/스노보드용품", "A"),

  new HeaderCategoryT("76310000", "기타레저스포츠", "A")
);

childCategoryHash["04000000"] = new Array(
  new HeaderCategoryT("04430000", "내비게이션/블랙박스", "A"),

  new HeaderCategoryT("04210000", "하이패스/GPS", "A"),

  new HeaderCategoryT("04180000", "카오디오/카AV", "A"),

  new HeaderCategoryT("04410000", "자동차카메라/감지기", "A"),

  new HeaderCategoryT("04450000", "자동차공기청정용품", "A"),

  new HeaderCategoryT("04460000", "자동차필터/소모품", "A"),

  new HeaderCategoryT("04470000", "자동차매트/시트/쿠션", "A"),

  new HeaderCategoryT("04500000", "자동차모바일용품", "A"),

  new HeaderCategoryT("04520000", "자동차수납용품", "A"),

  new HeaderCategoryT("04510000", "자동차DIY용품", "A"),

  new HeaderCategoryT("04540000", "카익스테리어용품", "A"),

  new HeaderCategoryT("04570000", "자동차키용품", "A"),

  new HeaderCategoryT("04580000", "카인테리어용품", "A"),

  new HeaderCategoryT("04590000", "세차용품", "A"),

  new HeaderCategoryT("04600000", "자동차안전/편의용품", "A"),

  new HeaderCategoryT("04620000", "모터바이크", "A"),

  new HeaderCategoryT("04630000", "모터바이크용품", "A"),

  new HeaderCategoryT("04640000", "모터바이크의류", "A"),

  new HeaderCategoryT("04660000", "자동차전기/장치", "A"),

  new HeaderCategoryT("04670000", "자동차부품/튜닝용품", "A"),

  new HeaderCategoryT("04680000", "타이어/휠", "A"),

  new HeaderCategoryT("04690000", "자동차램프", "A"),

  new HeaderCategoryT("04700000", "자동차오일/첨가제", "A"),

  new HeaderCategoryT("04710000", "자동차배터리", "A"),

  new HeaderCategoryT("04720000", "자동차관리용품", "A")
);

childCategoryHash["55000000"] = new Array(
  new HeaderCategoryT("55090000", "전동공구", "A"),

  new HeaderCategoryT("55440000", "수공구", "A"),

  new HeaderCategoryT("55380000", "절삭공구", "A"),

  new HeaderCategoryT("55120000", "측정공구", "A"),

  new HeaderCategoryT("55110000", "에어/유압공구", "A"),

  new HeaderCategoryT("55320000", "용접공구", "A"),

  new HeaderCategoryT("55280000", "보수용품", "A"),

  new HeaderCategoryT("55160000", "안전보호구", "A"),

  new HeaderCategoryT("55390000", "전기용품", "A"),

  new HeaderCategoryT("55410000", "운반용품", "A"),

  new HeaderCategoryT("55300000", "산업용자재", "A"),

  new HeaderCategoryT("55470000", "농기계/농기구", "A"),

  new HeaderCategoryT("55020000", "펌프/발전기", "A"),

  new HeaderCategoryT("55450000", "예초기", "A"),

  new HeaderCategoryT("55240000", "보험잔존물", "A"),

  new HeaderCategoryT("55480000", "건축자재", "A"),

  new HeaderCategoryT("55490000", "산업기기", "A"),

  new HeaderCategoryT("55500000", "철물용품", "A"),

  new HeaderCategoryT("55510000", "안전용품", "A"),

  new HeaderCategoryT("55520000", "건전지/충전지", "A")
);

childCategoryHash["36000000"] = new Array(
  new HeaderCategoryT("36440000", "외국도서", "A"),

  new HeaderCategoryT("36140000", "유아", "A"),

  new HeaderCategoryT("36160000", "아동", "A"),

  new HeaderCategoryT("36180000", "초등참고서", "A"),

  new HeaderCategoryT("36730000", "중고음반/영화", "A"),

  new HeaderCategoryT("36700000", "중고등참고서", "A"),

  new HeaderCategoryT("36720000", "중고책", "A"),

  new HeaderCategoryT("36170000", "청소년", "A"),

  new HeaderCategoryT("36230000", "대학교재", "A"),

  new HeaderCategoryT("36740000", "사전/연감", "A"),

  new HeaderCategoryT("36190000", "수험서/자격증", "A"),

  new HeaderCategoryT("36710000", "컴퓨터/인터넷", "A"),

  new HeaderCategoryT("36750000", "교육", "A"),

  new HeaderCategoryT("36060000", "문학", "A"),

  new HeaderCategoryT("36760000", "국어/외국어", "A"),

  new HeaderCategoryT("36540000", "가정/육아/요리", "A"),

  new HeaderCategoryT("36580000", "건강/뷰티", "A"),

  new HeaderCategoryT("36590000", "여가생활", "A"),

  new HeaderCategoryT("36600000", "만화", "A"),

  new HeaderCategoryT("36610000", "잡지/매거진", "A"),

  new HeaderCategoryT("36620000", "경제/경영", "A"),

  new HeaderCategoryT("36630000", "자기계발", "A"),

  new HeaderCategoryT("36640000", "인문", "A"),

  new HeaderCategoryT("36650000", "사회과학", "A"),

  new HeaderCategoryT("36660000", "역사", "A"),

  new HeaderCategoryT("36670000", "예술/대중문화", "A"),

  new HeaderCategoryT("36680000", "자연/과학", "A"),

  new HeaderCategoryT("36690000", "종교/역학", "A"),

  new HeaderCategoryT("36280000", "음반", "A"),

  new HeaderCategoryT("36290000", "DVD", "A"),

  new HeaderCategoryT("36770000", "전자책", "A")
);

childCategoryHash["41000000"] = new Array(
  new HeaderCategoryT("41200000", "롯데백화점", "A"),

  new HeaderCategoryT("41190000", "신세계백화점", "A"),

  new HeaderCategoryT("41210000", "현대백화점", "A"),

  new HeaderCategoryT("41260000", "마트/기프트 상품권", "A"),

  new HeaderCategoryT("41170000", "외식/여행 상품권", "A"),

  new HeaderCategoryT("41160000", "문화/도서 상품권", "A"),

  new HeaderCategoryT("41150000", "주유 상품권", "A"),

  new HeaderCategoryT("41290000", "POSA 기프트 카드", "A"),

  new HeaderCategoryT("41230000", "금강제화", "A"),

  new HeaderCategoryT("41240000", "제화/패션 상품권", "A"),

  new HeaderCategoryT("41250000", "영화예매권", "A"),

  new HeaderCategoryT("41180000", "전화/교통카드", "A")
);

childCategoryHash["24000000"] = new Array(
  new HeaderCategoryT("24440000", "해외항공권", "A"),

  new HeaderCategoryT("24490000", "국내항공권", "A"),

  new HeaderCategoryT("24460000", "해외호텔", "A"),

  new HeaderCategoryT("24470000", "해외교통패스", "A"),

  new HeaderCategoryT("24520000", "해외현지입장권", "A"),

  new HeaderCategoryT("24530000", "해외현지투어", "A"),

  new HeaderCategoryT("24390000", "해외여행", "A"),

  new HeaderCategoryT("24010000", "국내숙박", "A"),

  new HeaderCategoryT("24020000", "국내여행", "A"),

  new HeaderCategoryT("24150000", "제주여행", "A"),

  new HeaderCategoryT("24080000", "워터파크/스파", "A"),

  new HeaderCategoryT("24060000", "테마파크/체험", "A"),

  new HeaderCategoryT("24480000", "스키/레포츠/골프", "A"),

  new HeaderCategoryT("24270000", "여행필수품", "A"),

  new HeaderCategoryT("24540000", "[패키지] 일본", "A"),

  new HeaderCategoryT("24550000", "[패키지] 홍콩/마카오", "A"),

  new HeaderCategoryT("24560000", "[패키지] 중국/대만", "A"),

  new HeaderCategoryT("24570000", "[패키지] 동남아", "A"),

  new HeaderCategoryT("24580000", "[패키지] 괌/사이판/팔라우", "A"),

  new HeaderCategoryT("24590000", "[패키지] 호주/뉴질랜드", "A"),

  new HeaderCategoryT("24600000", "[패키지] 유럽", "A"),

  new HeaderCategoryT("24610000", "[패키지] 미국/캐나다", "A"),

  new HeaderCategoryT("24620000", "[패키지] 중남미/아프리카", "A"),

  new HeaderCategoryT("24630000", "[패키지] 인도/서남아/기타", "A"),

  new HeaderCategoryT("24640000", "[패키지] 허니문/크루즈/골프", "A"),

  new HeaderCategoryT("24650000", "[패키지] 지방출발", "A"),

  new HeaderCategoryT("24660000", "[에어텔] 일본", "A"),

  new HeaderCategoryT("24670000", "[에어텔] 홍콩/마카오", "A"),

  new HeaderCategoryT("24680000", "[에어텔] 중국/대만", "A"),

  new HeaderCategoryT("24690000", "[에어텔] 동남아", "A"),

  new HeaderCategoryT("24700000", "[에어텔] 괌/사이판/팔라우", "A"),

  new HeaderCategoryT("24710000", "[에어텔] 호주/뉴질랜드", "A"),

  new HeaderCategoryT("24720000", "[에어텔] 유럽", "A"),

  new HeaderCategoryT("24730000", "[에어텔] 미국/캐나다", "A"),

  new HeaderCategoryT("24740000", "[에어텔] 중남미/아프리카", "A"),

  new HeaderCategoryT("24750000", "[에어텔] 인도/서남아/기타", "A"),

  new HeaderCategoryT("24760000", "[에어텔] 지방출발", "A")
);

childCategoryHash["86000000"] = new Array(
  new HeaderCategoryT("86050000", "백화점/문화 상품권", "A"),

  new HeaderCategoryT("86040000", "뷔페/레스토랑/외식", "A"),

  new HeaderCategoryT("86030000", "커피/음료", "A"),

  new HeaderCategoryT("86020000", "햄버거/베이커리", "A"),

  new HeaderCategoryT("86090000", "도넛/아이스크림/분식", "A"),

  new HeaderCategoryT("86010000", "피자/치킨/족발", "A"),

  new HeaderCategoryT("86080000", "편의점", "A"),

  new HeaderCategoryT("86140000", "영화예매권", "A"),

  new HeaderCategoryT("86100000", "미용/뷰티/스파", "A"),

  new HeaderCategoryT("86060000", "생활/키즈/자동차", "A"),

  new HeaderCategoryT("86070000", "기타 상품권", "A"),

  new HeaderCategoryT("86190000", "모바일금액권", "A"),

  new HeaderCategoryT("86200000", "레저/엑티비티", "A"),

  new HeaderCategoryT("86210000", "교육/어학이용권", "A"),

  new HeaderCategoryT("86220000", "프로모션/이벤트", "A")
);

childCategoryHash["66000000"] = new Array(
  new HeaderCategoryT("66010000", "티셔츠", "A"),

  new HeaderCategoryT("66020000", "원피스", "A"),

  new HeaderCategoryT("66110000", "블라우스/셔츠", "A"),

  new HeaderCategoryT("66030000", "팬츠", "A"),

  new HeaderCategoryT("66040000", "스커트", "A"),

  new HeaderCategoryT("66050000", "자켓/베스트", "A"),

  new HeaderCategoryT("66070000", "야상/점퍼/패딩", "A"),

  new HeaderCategoryT("66060000", "코트", "A"),

  new HeaderCategoryT("66100000", "니트/가디건", "A"),

  new HeaderCategoryT("66130000", "수영복/트레이닝", "A")
);

childCategoryHash["67000000"] = new Array(
  new HeaderCategoryT("67070000", "남성정장", "A"),

  new HeaderCategoryT("67020000", "자켓/블레이져", "A"),

  new HeaderCategoryT("67050000", "드레스셔츠/남방", "A"),

  new HeaderCategoryT("67060000", "팬츠", "A"),

  new HeaderCategoryT("67040000", "티셔츠", "A"),

  new HeaderCategoryT("67030000", "니트/가디건/베스트", "A"),

  new HeaderCategoryT("67010000", "점퍼/코트", "A")
);

childCategoryHash["68000000"] = new Array(
  new HeaderCategoryT("68010000", "티셔츠/셔츠", "A"),

  new HeaderCategoryT("68070000", "팬츠", "A"),

  new HeaderCategoryT("68050000", "원피스/스커트", "A"),

  new HeaderCategoryT("68040000", "니트/가디건", "A"),

  new HeaderCategoryT("68090000", "자켓/점퍼/코트", "A")
);

childCategoryHash["52000000"] = new Array(
  new HeaderCategoryT("52010000", "명품 여성가방", "A"),

  new HeaderCategoryT("52020000", "명품 남성가방", "A"),

  new HeaderCategoryT("52030000", "명품 지갑/벨트", "A"),

  new HeaderCategoryT("52040000", "명품 신발", "A"),

  new HeaderCategoryT("52070000", "명품 시계", "A"),

  new HeaderCategoryT("52050000", "명품 패션소품", "A"),

  new HeaderCategoryT("52080000", "명품 의류", "A"),

  new HeaderCategoryT("52060000", "중고명품", "A")
);

childCategoryHash["69000000"] = new Array(
  new HeaderCategoryT("69010000", "여성가방", "A"),

  new HeaderCategoryT("69020000", "남성가방", "A"),

  new HeaderCategoryT("69030000", "캐쥬얼가방", "A"),

  new HeaderCategoryT("69040000", "여행가방", "A"),

  new HeaderCategoryT("69050000", "지갑/벨트", "A"),

  new HeaderCategoryT("69080000", "패션잡화", "A"),

  new HeaderCategoryT("69090000", "여성화", "A"),

  new HeaderCategoryT("69100000", "남성화", "A"),

  new HeaderCategoryT("69110000", "캐쥬얼화", "A")
);

childCategoryHash["70000000"] = new Array(
  new HeaderCategoryT("70020000", "시계", "A"),

  new HeaderCategoryT("70040000", "쥬얼리", "A"),

  new HeaderCategoryT("70050000", "헤어악세사리", "A"),

  new HeaderCategoryT("70060000", "선글라스/안경테", "A")
);

brandLCategoryList[0] = new HeaderCategoryT("010000", "캐주얼의류", "B");

brandLCategoryList[1] = new HeaderCategoryT("020000", "여성의류", "B");

brandLCategoryList[2] = new HeaderCategoryT("030000", "남성의류", "B");

brandLCategoryList[3] = new HeaderCategoryT("040000", "언더웨어", "B");

brandLCategoryList[4] = new HeaderCategoryT("060000", "가방잡화", "B");

brandLCategoryList[5] = new HeaderCategoryT("050000", "슈즈/운동화", "B");

brandLCategoryList[6] = new HeaderCategoryT("070000", "쥬얼리/시계", "B");

brandLCategoryList[7] = new HeaderCategoryT("090000", "수입명품", "B");

brandLCategoryList[8] = new HeaderCategoryT("110000", "화장품/향수", "B");

brandLCategoryList[9] = new HeaderCategoryT("120000", "유아동패션", "B");

brandLCategoryList[10] = new HeaderCategoryT("080000", "스포츠", "B");

brandLCategoryList[11] = new HeaderCategoryT("130000", "등산/레져", "B");

brandLCategoryList[12] = new HeaderCategoryT("140000", "골프", "B");

brandLCategoryList[13] = new HeaderCategoryT("150000", "주방", "B");

brandLCategoryList[14] = new HeaderCategoryT("160000", "가구", "B");

brandLCategoryList[15] = new HeaderCategoryT("170000", "침구", "B");

sohoLCategoryList[0] = new HeaderCategoryT("1000000", "TOP", "S");

sohoLCategoryList[1] = new HeaderCategoryT("1000004", "OUTWEAR", "S");

sohoLCategoryList[2] = new HeaderCategoryT("1000009", "PANTS", "S");

sohoLCategoryList[3] = new HeaderCategoryT("1000013", "SKIRT&DRESS", "S");

sohoLCategoryList[4] = new HeaderCategoryT("1000019", "SHOES", "S");

sohoLCategoryList[5] = new HeaderCategoryT("1000025", "BAG & ACC", "S");

sohoLCategoryList[6] = new HeaderCategoryT("1000030", "MEN", "S");

sohoLCategoryList[7] = new HeaderCategoryT("1000073", "DESIGNER", "S");

lotteLCategoryList[0] = new HeaderCategoryT("5431659", "명품화장품", "L");

lotteLCategoryList[1] = new HeaderCategoryT(
  "5035109",
  "여성의류/언더웨어",
  "L"
);

lotteLCategoryList[2] = new HeaderCategoryT("5035110", "남성패션", "L");

lotteLCategoryList[3] = new HeaderCategoryT("5035111", "스포츠/레저", "L");

lotteLCategoryList[4] = new HeaderCategoryT("5035195", "패션잡화/슈즈", "L");

lotteLCategoryList[5] = new HeaderCategoryT("5035112", "아동/유아", "L");

lotteLCategoryList[6] = new HeaderCategoryT("5035113", "가정/식품", "L");

lotteLCategoryList[7] = new HeaderCategoryT("5035114", "영플라자", "L");

// var BrandEvent = (function () {
//   var defaultData = { isBrandSale: 0, groupID: 8 };
//   var fn = {};
//   var locationProtocol = document.location.protocol + "//";
//   fn.GetImgTagSaleEvent = function (groupID) {
//     if (defaultData.isBrandSale == 1)
//       return defaultData.groupID == groupID
//         ? "<img src='" +
//             locationProtocol +
//             "pics.auction.co.kr/common/icon_sale.gif' alt='SALE' class='brand_sale' />"
//         : "";
//     else return "";
//   };
//   fn.GetHtmlTagSaleEvent = function (groupID) {
//     var matchedHTML = "";
//     if (defaultData.isBrandSale == 1 && defaultData.groupID == groupID) {
//       for (var i = 1; i < 6; i++)
//         matchedHTML +=
//           "<img src='" +
//           locationProtocol +
//           "pics.auction.co.kr/common/icon_sale2.png' alt='SALE' class='brand_sale v" +
//           i +
//           "' />";
//     }
//     return matchedHTML;
//   };
//   return fn;
// })();

var brandByLcodeGroupIdHash = {};

HeaderCategory.GetBrandByLcodeGroupId = function (groupId) {
  return brandByLcodeGroupIdHash[groupId];
};
brandByLcodeGroupIdHash["1"] = new Array(
  new HeaderCategoryT("020000", "여성의류", "B"),
  new HeaderCategoryT("030000", "남성의류", "B"),
  new HeaderCategoryT("010000", "캐주얼의류", "B"),
  new HeaderCategoryT("040000", "언더웨어", "B")
);
brandByLcodeGroupIdHash["2"] = new Array(
  new HeaderCategoryT("050000", "슈즈/운동화", "B"),
  new HeaderCategoryT("060000", "가방/잡화", "B"),
  new HeaderCategoryT("070000", "쥬얼리/시계", "B"),
  new HeaderCategoryT("090000", "수입명품", "B"),
  new HeaderCategoryT("110000", "화장품/향수", "B")
);
brandByLcodeGroupIdHash["6"] = new Array(
  new HeaderCategoryT("080000", "스포츠", "B"),
  new HeaderCategoryT("130000", "등산/레져", "B"),
  new HeaderCategoryT("140000", "골프", "B")
);

// 그룹별 Fcc 정의
function HeaderCategoryFccT(Id, Fcc, aFcc, groupId, Index, tabId) {
  this.ID = Id;
  this.FCC = Fcc;
  this.AFcc = aFcc;
  this.GroupId = groupId;
  this.Index = Index;
}
var cateFccList = [];

HeaderCategory.GetCategoryFccList = function () {
  return cateFccList;
};

cateFccList[0] = new HeaderCategoryFccT("10001", "0D38", "0D18");
cateFccList[1] = new HeaderCategoryFccT("20001", "0D40", "0D1C");
cateFccList[2] = new HeaderCategoryFccT("20002", "0D41", "0D1D");
cateFccList[3] = new HeaderCategoryFccT("30001", "0D48", "0D1F");
cateFccList[4] = new HeaderCategoryFccT("30002", "0D49", "0D20");
cateFccList[5] = new HeaderCategoryFccT("30003", "0D4A", "0D21");
cateFccList[6] = new HeaderCategoryFccT("40001", "0D50", "0D23");
cateFccList[7] = new HeaderCategoryFccT("40002", "0D51", "0D24");
cateFccList[8] = new HeaderCategoryFccT("50001", "0DAC", "0D25");
cateFccList[9] = new HeaderCategoryFccT("50002", "0D56", "0D26");
cateFccList[10] = new HeaderCategoryFccT("50003", "0D57", "0D27");
cateFccList[11] = new HeaderCategoryFccT("60001", "0D5D", "0D28");
cateFccList[12] = new HeaderCategoryFccT("60002", "0D5F", "0D2A");

cateFccList[13] = new HeaderCategoryFccT("", "0D3D", "", "1", "0");
cateFccList[14] = new HeaderCategoryFccT("", "0D3E", "", "1", "1");
cateFccList[15] = new HeaderCategoryFccT("", "0D3F", "", "1", "2");
cateFccList[16] = new HeaderCategoryFccT("", "0D45", "", "2", "0");
cateFccList[17] = new HeaderCategoryFccT("", "0D46", "", "2", "1");
cateFccList[18] = new HeaderCategoryFccT("", "0D47", "", "2", "2");
cateFccList[19] = new HeaderCategoryFccT("", "0D4D", "", "3", "0");
cateFccList[20] = new HeaderCategoryFccT("", "0D4E", "", "3", "1");
cateFccList[21] = new HeaderCategoryFccT("", "0D4F", "", "3", "2");
cateFccList[22] = new HeaderCategoryFccT("", "0D54", "", "4", "0");
cateFccList[23] = new HeaderCategoryFccT("", "0D55", "", "4", "1");
cateFccList[24] = new HeaderCategoryFccT("", "0D5A", "", "5", "0");
cateFccList[25] = new HeaderCategoryFccT("", "0D5B", "", "5", "1");
cateFccList[26] = new HeaderCategoryFccT("", "0D5C", "", "5", "2");
cateFccList[27] = new HeaderCategoryFccT("", "0DAD", "", "6", "0");
cateFccList[28] = new HeaderCategoryFccT("", "0DAE", "", "6", "1");
cateFccList[29] = new HeaderCategoryFccT("", "0DAF", "", "6", "2");
cateFccList[30] = new HeaderCategoryFccT("", "0D65", "", "8", "0");

var bannerFccList = [];

HeaderCategory.GetTabBannerFccList = function () {
  return bannerFccList;
};

bannerFccList[0] = new HeaderCategoryFccT("", "0D3B", "", "1");
bannerFccList[1] = new HeaderCategoryFccT("", "0D43", "", "2");
bannerFccList[2] = new HeaderCategoryFccT("", "0D4B", "", "3");
bannerFccList[3] = new HeaderCategoryFccT("", "0D52", "", "4");
bannerFccList[4] = new HeaderCategoryFccT("", "0D58", "", "5");
bannerFccList[5] = new HeaderCategoryFccT("", "0D60", "", "6");
bannerFccList[6] = new HeaderCategoryFccT("", "0D63", "", "8");
bannerFccList[7] = new HeaderCategoryFccT("", "0E90", "", "7");

var specialShopFccList = [];

HeaderCategory.GetTabBottomFccList = function () {
  return specialShopFccList;
};
specialShopFccList[0] = new HeaderCategoryFccT("", "", "0D31", "1");
specialShopFccList[1] = new HeaderCategoryFccT("", "", "0D32", "2");
specialShopFccList[2] = new HeaderCategoryFccT("", "", "0D33", "3");
specialShopFccList[3] = new HeaderCategoryFccT("", "", "0D34", "4");
specialShopFccList[4] = new HeaderCategoryFccT("", "", "0D35", "5");
specialShopFccList[5] = new HeaderCategoryFccT("", "", "0D36", "6");
specialShopFccList[6] = new HeaderCategoryFccT("", "", "0D37", "7");
