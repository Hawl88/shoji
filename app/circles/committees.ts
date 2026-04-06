console.log("committee file loaded");
export interface CommitteeInfo {
  committeeName: string;
  shortDescription: string;
  imgSrc: string;
}

export const committeeInfos: CommitteeInfo[] = [
  {
    committeeName: "学生会執行委員会",
    shortDescription: "学校改革運動",
    imgSrc: "https://celclipmaterialprod.s3-ap-northeast-1.amazonaws.com/83/81/1858183/thumbnail?1628559112",
  },
  {
    committeeName: "稜輝祭実行委員会",
    shortDescription: "盛り上げるぞー！",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5P_GyML88ItyRREawarpM9wtm5gNiOaFqMA&s",
  },
];
