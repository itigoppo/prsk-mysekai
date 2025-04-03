import { pagesPath } from "@/lib/$path"
import { Member, Unit } from "@/types"

const data = [
  {
    color: "#4355DD",
    id: "leoneed",
    name: "Leo/need",
    pathname: pagesPath.leoneed.$url().pathname,
    short: "L/n",
    url: pagesPath.leoneed.$url(),
    members: [
      {
        color: "#31AAEE",
        firstName: "一歌",
        id: "ichika",
        lastName: "星乃",
      },
      {
        color: "#FEDD44",
        firstName: "咲希",
        id: "saki",
        lastName: "天馬",
      },
      {
        color: "#EE6565",
        firstName: "穂波",
        id: "honami",
        lastName: "望月",
      },
      {
        color: "#BBDD23",
        firstName: "志歩",
        id: "shiho",
        lastName: "日野森",
      },
      {
        color: "#34CCBB",
        firstName: "ミク",
        id: "ln_miku",
        lastName: "初音",
      },
      {
        color: "#FFBBCC",
        firstName: "ルカ",
        id: "ln_luka",
        lastName: "巡音",
      },
    ],
  },
  {
    color: "#88DD44",
    id: "mmj",
    name: "MORE MORE JUMP！",
    pathname: pagesPath.mmj.$url().pathname,
    short: "MMJ",
    url: pagesPath.mmj.$url(),
    members: [
      {
        color: "#FFCCAA",
        firstName: "みのり",
        id: "minori",
        lastName: "花里",
      },
      {
        color: "#99CCFE",
        firstName: "遥",
        id: "haruka",
        lastName: "桐谷",
      },
      {
        color: "#FFAACC",
        firstName: "愛莉",
        id: "airi",
        lastName: "桃井",
      },
      {
        color: "#98EEDC",
        firstName: "雫",
        id: "shizuku",
        lastName: "日野森",
      },
      {
        color: "#34CCBB",
        firstName: "ミク",
        id: "mmj_miku",
        lastName: "初音",
      },
      {
        color: "#FFCC12",
        firstName: "リン",
        id: "mmj_rin",
        lastName: "鏡音",
      },
    ],
  },
  {
    color: "#ED1266",
    id: "vbs",
    name: "Vivid BAD SQUAD",
    pathname: pagesPath.vbs.$url().pathname,
    short: "VBS",
    url: pagesPath.vbs.$url(),
    members: [
      {
        color: "#FF6699",
        firstName: "こはね",
        id: "kohane",
        lastName: "小豆沢",
      },
      {
        color: "#01BBDD",
        firstName: "杏",
        id: "an",
        lastName: "白石",
      },
      {
        color: "#FF7722",
        firstName: "彰人",
        id: "akito",
        lastName: "東雲",
      },
      {
        color: "#31AAEE",
        firstName: "冬弥",
        id: "toya",
        lastName: "青柳",
      },
      {
        color: "#34CCBB",
        firstName: "ミク",
        id: "vbs_miku",
        lastName: "初音",
      },
      {
        color: "#FFEE10",
        firstName: "レン",
        id: "vbs_len",
        lastName: "鏡音",
      },
      {
        color: "#DD4443",
        firstName: "MEIKO",
        id: "vbs_meiko",
        lastName: null,
      },
    ],
  },
  {
    color: "#FF9900",
    id: "ws",
    name: "ワンダーランズ×ショウタイム",
    pathname: pagesPath.ws.$url().pathname,
    short: "WxS",
    url: pagesPath.ws.$url(),
    members: [
      {
        color: "#FFBB00",
        firstName: "司",
        id: "tsukasa",
        lastName: "天馬",
      },
      {
        color: "#FF66BB",
        firstName: "えむ",
        id: "emu",
        lastName: "鳳",
      },
      {
        color: "#33DD99",
        firstName: "寧々",
        id: "nene",
        lastName: "草薙",
      },
      {
        color: "#BA88EE",
        firstName: "類",
        id: "rui",
        lastName: "神代",
      },
      {
        color: "#34CCBB",
        firstName: "ミク",
        id: "ws_miku",
        lastName: "初音",
      },
      {
        color: "#3366CC",
        firstName: "KAITO",
        id: "ws_kaito",
        lastName: null,
      },
    ],
  },
  {
    color: "#884499",
    id: "25oclock",
    name: "25時、ナイトコードで。",
    pathname: pagesPath.oclock.$url().pathname,
    short: "25",
    url: pagesPath.oclock.$url(),
    members: [
      {
        color: "#BB6588",
        firstName: "奏",
        id: "kanade",
        lastName: "宵崎",
      },
      {
        color: "#8888CC",
        firstName: "まふゆ",
        id: "mafuyu",
        lastName: "朝比奈",
      },
      {
        color: "#CCA987",
        firstName: "絵名",
        id: "ena",
        lastName: "東雲",
      },
      {
        color: "#DDAACC",
        firstName: "瑞希",
        id: "mizuki",
        lastName: "暁山",
      },
      {
        color: "#34CCBB",
        firstName: "ミク",
        id: "25_miku",
        lastName: "初音",
      },
    ],
  },
]

const units: Unit[] = data.map((unitData) => {
  const members: Member[] = unitData.members.map((memberData) => ({
    color: memberData.color,
    firstName: memberData.firstName,
    id: memberData.id,
    lastName: memberData.lastName,
  }))

  return {
    color: unitData.color,
    id: unitData.id,
    members: members,
    name: unitData.name,
    pathname: unitData.pathname,
    short: unitData.short,
    url: unitData.url,
  }
})

export { units }
