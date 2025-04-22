import {
  addWithItemNamesToReactions,
  convertToReactions,
  createFurniture,
  createTag,
  filterMemberIdsById,
  getCombinationsByUnitId,
  getMembersByUnitId,
} from "@/lib/util"
import { Tag } from "@/types"
import { units } from "./members"

const leoneedMembers = getMembersByUnitId("leoneed", units)
const leoneedCombinations = getCombinationsByUnitId("leoneed", units)
const mmjMembers = getMembersByUnitId("mmj", units)
const mmjCombinations = getCombinationsByUnitId("mmj", units)
const vbsMembers = getMembersByUnitId("vbs", units)
const vbsCombinations = getCombinationsByUnitId("vbs", units)
const wsMembers = getMembersByUnitId("ws", units)
const wsCombinations = getCombinationsByUnitId("ws", units)
const oclockMembers = getMembersByUnitId("25oclock", units)
const oclockCombinations = getCombinationsByUnitId("25oclock", units)

const leoneedReactions = convertToReactions(leoneedMembers)
const mmjReactions = convertToReactions(mmjMembers)
const vbsReactions = convertToReactions(vbsMembers)
const wsReactions = convertToReactions(wsMembers)
const oclockReactions = convertToReactions(oclockMembers)
const leoneedCombinationsReactions = convertToReactions(leoneedCombinations)
const mmjCombinationsReactions = convertToReactions(mmjCombinations)
const vbsCombinationsReactions = convertToReactions(vbsCombinations)
const wsCombinationsReactions = convertToReactions(wsCombinations)
const oclockCombinationsReactions = convertToReactions(oclockCombinations)

const leoneedPairs = leoneedCombinationsReactions.filter(
  (reaction) => reaction.memberIds.length === 2,
)
const mmjPairs = mmjCombinationsReactions.filter(
  (reaction) => reaction.memberIds.length === 2,
)
const vbsPairs = vbsCombinationsReactions.filter(
  (reaction) => reaction.memberIds.length === 2,
)
const wsPairs = wsCombinationsReactions.filter(
  (reaction) => reaction.memberIds.length === 2,
)
const oclockPairs = oclockCombinationsReactions.filter(
  (reaction) => reaction.memberIds.length === 2,
)

// どれか1つリアクションみればいい家具の組み合わせ
const sofas = [
  "きらめく流星のソファ",
  "かがやくクローバーのソファ",
  "鮮やかなユニゾンのソファ",
  "はじけるクラウンのソファ",
  "ひび割れたハートのソファ",
  "ナチュラルな2人掛けソファ",
  "フレンチスタイルのソファ",
]
const musicPlayer = ["コンポーネントオーディオ", "レコードプレイヤー", "蓄音機"]
const flowerBeds = [
  "ガーデンの素朴な花壇",
  "ガーデンの素朴な花壇/ポピー",
  "ガーデンの素朴な花壇/コスモス",
  "ガーデンの素朴な花壇/ラベンダー",
]
const latticePlanters = [
  "ガーデンのラティスプランター",
  "ガーデンのラティスプランター/ポピー",
  "ガーデンのラティスプランター/コスモス",
  "ガーデンのラティスプランター/ラベンダー",
]
const gardenCarts = [
  "ガーデンカート",
  "ガーデンカート/ポピー",
  "ガーデンカート/コスモス",
  "ガーデンカート/ラベンダー",
]
const foxStatues = ["雷神祭の狐像/右向き", "雷神祭の狐像/左向き"]

// データの定義
const tags: Tag[] = []

// きらめく流星ルーム
tags.push(
  createTag("unitRoom", "きらめく流星ルーム", [
    createFurniture("chest", "きらめく流星のチェスト", [...leoneedReactions]),
    createFurniture("bed", "きらめく流星のベッド", [...leoneedReactions]),
    createFurniture("table", "きらめく流星のテーブル", [...leoneedReactions]),
    createFurniture("rug", "きらめく流星のラグ", [...leoneedReactions]),
    createFurniture("sofa", "きらめく流星のソファ", [
      ...addWithItemNamesToReactions(
        leoneedPairs,
        leoneedPairs.map((reaction) => ({
          ...reaction,
          withItemNames: sofas,
        })),
      ),
    ]),
    createFurniture("unitKeyItem", "あの日のジャングルジム", [
      ...leoneedCombinationsReactions.filter(
        (reaction) => reaction.memberIds.length !== 2,
      ),
    ]),
  ]),
)

// かがやくクローバールーム
tags.push(
  createTag("unitRoom", "かがやくクローバールーム", [
    createFurniture("chest", "かがやくクローバーのチェスト", [...mmjReactions]),
    createFurniture("bed", "かがやくクローバーのベッド", [...mmjReactions]),
    createFurniture("table", "かがやくクローバーのテーブル", [...mmjReactions]),
    createFurniture("rug", "かがやくクローバーのラグ", [...mmjReactions]),
    createFurniture("sofa", "かがやくクローバーのソファ", [
      ...addWithItemNamesToReactions(
        mmjPairs,
        mmjPairs.map((reaction) => ({
          ...reaction,
          withItemNames: sofas,
        })),
      ),
    ]),
    createFurniture("unitKeyItem", "配信用カメラ", [
      ...mmjCombinationsReactions.filter(
        (reaction) => reaction.memberIds.length !== 2,
      ),
    ]),
  ]),
)

// 鮮やかなユニゾンルーム
tags.push(
  createTag("unitRoom", "鮮やかなユニゾンルーム", [
    createFurniture("chest", "鮮やかなユニゾンのチェスト", [...vbsReactions]),
    createFurniture("bed", "鮮やかなユニゾンのベッド", [...vbsReactions]),
    createFurniture("table", "鮮やかなユニゾンのテーブル", [...vbsReactions]),
    createFurniture("rug", "鮮やかなユニゾンのラグ", [...vbsReactions]),
    createFurniture("sofa", "鮮やかなユニゾンのソファ", [
      ...addWithItemNamesToReactions(
        vbsPairs,
        vbsPairs.map((reaction) => ({
          ...reaction,
          withItemNames: sofas,
        })),
      ),
    ]),
    createFurniture("unitKeyItem", "ぷよぷよ通", [
      ...vbsCombinationsReactions.filter(
        (reaction) => reaction.memberIds.length !== 2,
      ),
    ]),
  ]),
)

// はじけるクラウンルーム
tags.push(
  createTag("unitRoom", "はじけるクラウンルーム", [
    createFurniture("chest", "はじけるクラウンのチェスト", [...wsReactions]),
    createFurniture("bed", "はじけるクラウンのベッド", [...wsReactions]),
    createFurniture("table", "はじけるクラウンのテーブル", [...wsReactions]),
    createFurniture("rug", "はじけるクラウンのラグ", [...wsReactions]),
    createFurniture("sofa", "はじけるクラウンのソファ", [
      ...addWithItemNamesToReactions(
        wsPairs,
        wsPairs.map((reaction) => ({
          ...reaction,
          withItemNames: sofas,
        })),
      ),
    ]),
    createFurniture("unitKeyItem", "ネネロボのオブジェ", [
      ...wsCombinationsReactions.filter(
        (reaction) => reaction.memberIds.length !== 2,
      ),
    ]),
  ]),
)

// ひび割れたハートルーム
tags.push(
  createTag("unitRoom", "ひび割れたハートルーム", [
    createFurniture("chest", "ひび割れたハートのチェスト", [
      ...oclockReactions,
    ]),
    createFurniture("bed", "ひび割れたハートのベッド", [...oclockReactions]),
    createFurniture("table", "ひび割れたハートのテーブル", [
      ...oclockReactions,
    ]),
    createFurniture("rug", "ひび割れたハートのラグ", [...oclockReactions]),
    createFurniture("sofa", "ひび割れたハートのソファ", [
      ...addWithItemNamesToReactions(
        oclockPairs,
        oclockPairs.map((reaction) => ({
          ...reaction,
          withItemNames: sofas,
        })),
      ),
    ]),
    createFurniture("unitKeyItem", "いつものファミレス席", [
      ...oclockCombinationsReactions.filter(
        (reaction) => reaction.memberIds.length !== 2,
      ),
    ]),
  ]),
)

// ミュージックプレイヤー
tags.push(
  createTag("musicPlayer", "ミュージックプレイヤー", [
    createFurniture("componentAudio", "コンポーネントオーディオ", [
      ...addWithItemNamesToReactions(
        filterMemberIdsById(leoneedMembers, ["ichika", "ln_miku"]),
        [
          {
            memberIds: ["ln_miku"],
            withItemNames: musicPlayer,
          },
        ],
      ),
      ...addWithItemNamesToReactions(
        filterMemberIdsById(mmjMembers, ["mmj_rin"], true),
        [
          {
            memberIds: ["mmj_miku"],
            withItemNames: musicPlayer,
          },
        ],
      ),
      ...filterMemberIdsById(vbsMembers, ["vbs_miku", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["rui", "ws_miku", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["25_miku"]),
    ]),
    createFurniture("recordPlayer", "レコードプレイヤー", [
      ...addWithItemNamesToReactions(leoneedReactions, [
        {
          memberIds: ["ln_miku"],
          withItemNames: musicPlayer,
        },
      ]),
      ...addWithItemNamesToReactions(mmjReactions, [
        {
          memberIds: ["mmj_miku"],
          withItemNames: musicPlayer,
        },
      ]),
      ...filterMemberIdsById(vbsMembers, ["vbs_miku"], true),
      ...filterMemberIdsById(wsMembers, ["ws_miku", "ws_kaito"], true),
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
    ]),
    createFurniture("gramophone", "蓄音機", [
      ...addWithItemNamesToReactions(leoneedReactions, [
        {
          memberIds: ["ln_miku"],
          withItemNames: musicPlayer,
        },
      ]),
      ...addWithItemNamesToReactions(mmjReactions, [
        {
          memberIds: ["mmj_miku"],
          withItemNames: musicPlayer,
        },
      ]),
      ...filterMemberIdsById(vbsMembers, ["vbs_miku", "vbs_meiko"], true),
      ...filterMemberIdsById(wsMembers, ["ws_miku"], true),
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
    ]),
  ]),
)

// ひみつのおみせ
tags.push(
  createTag("shop", "ひみつのおみせ", [
    createFurniture("simpleNotepComputer", "シンプルなノートパソコン", [
      ...filterMemberIdsById(mmjMembers, ["minori", "shizuku"]),
      ...filterMemberIdsById(oclockMembers, ["kanade"]),
    ]),
    createFurniture("simpleDesktopComputer", "シンプルなデスクトップパソコン", [
      ...filterMemberIdsById(leoneedMembers, ["ln_luka"]),
      ...filterMemberIdsById(vbsMembers, ["vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["nene", "rui", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["kanade"]),
    ]),
  ]),
)

// ゲート
tags.push(
  createTag("gate", "ゲート", [
    createFurniture("gate", "ゲート", [
      ...leoneedReactions,
      ...mmjReactions,
      ...vbsReactions,
      ...wsReactions,
      ...oclockReactions,
    ]),
  ]),
)

// ナチュラル
tags.push(
  createTag("natural", "ナチュラル", [
    createFurniture("chest", "ナチュラルなチェスト", [
      ...leoneedReactions,
      ...filterMemberIdsById(mmjMembers, ["shizuku", "mmj_miku", "mmj_rin"]),
      ...vbsReactions,
      ...wsReactions,
      ...oclockReactions,
    ]),
    createFurniture("bed", "ナチュラルなベッド", [
      ...leoneedReactions,
      ...mmjReactions,
      ...vbsReactions,
      ...wsReactions,
      ...oclockReactions,
    ]),
    createFurniture("diningTable", "ナチュラルなダイニングテーブル", [
      ...leoneedReactions,
      ...mmjReactions,
      ...vbsReactions,
      ...wsReactions,
      ...oclockReactions,
    ]),
    createFurniture("bookshelf", "ナチュラルな本棚", [
      ...leoneedReactions,
      ...mmjReactions,
      ...vbsReactions,
      ...wsReactions,
      ...oclockReactions,
    ]),
    createFurniture("closet", "ナチュラルなクローゼット", [
      ...leoneedReactions,
      ...mmjReactions,
      ...vbsReactions,
      ...wsReactions,
      ...oclockReactions,
    ]),
    createFurniture("dresser", "ナチュラルなドレッサー", [
      ...filterMemberIdsById(leoneedMembers, ["ln_miku", "ln_luka"], true),
      ...filterMemberIdsById(mmjMembers, ["mmj_miku", "mmj_rin"], true),
      ...filterMemberIdsById(
        vbsMembers,
        ["vbs_miku", "vbs_len", "vbs_meiko"],
        true,
      ),
      ...filterMemberIdsById(oclockMembers, ["25_miku"]),
    ]),
    createFurniture("lowTable", "ナチュラルなローテーブル", [
      ...filterMemberIdsById(leoneedMembers, ["honami"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "ena", "mizuki"]),
    ]),
    createFurniture("sofa", "ナチュラルな2人掛けソファ", [
      ...filterMemberIdsById(mmjMembers, ["mmj_miku", "mmj_rin"], true),
      ...filterMemberIdsById(oclockMembers, ["mizuki"]),
      ...addWithItemNamesToReactions(
        leoneedPairs,
        leoneedPairs.map((reaction) => ({
          ...reaction,
          withItemNames: sofas,
        })),
      ),
      ...addWithItemNamesToReactions(
        mmjPairs,
        mmjPairs.map((reaction) => ({
          ...reaction,
          withItemNames: sofas,
        })),
      ),
      ...addWithItemNamesToReactions(
        vbsPairs,
        vbsPairs.map((reaction) => ({
          ...reaction,
          withItemNames: sofas,
        })),
      ),
      ...addWithItemNamesToReactions(
        wsPairs,
        wsPairs.map((reaction) => ({
          ...reaction,
          withItemNames: sofas,
        })),
      ),
      ...addWithItemNamesToReactions(
        oclockPairs,
        oclockPairs.map((reaction) => ({
          ...reaction,
          withItemNames: sofas,
        })),
      ),
    ]),
    createFurniture("1SeaterSofa", "ナチュラルな1人掛けソファ", [
      ...filterMemberIdsById(leoneedMembers, ["ln_luka"], true),
      ...filterMemberIdsById(mmjMembers, ["mmj_rin"], true),
      ...filterMemberIdsById(vbsMembers, ["vbs_miku"]),
      ...filterMemberIdsById(wsMembers, ["ws_miku"]),
      ...oclockReactions,
    ]),
    createFurniture("tv", "ナチュラルな液晶テレビ", [
      ...filterMemberIdsById(leoneedMembers, ["ln_luka"], true),
      ...filterMemberIdsById(mmjMembers, ["mmj_miku"], true),
      ...filterMemberIdsById(vbsMembers, ["toya"], true),
      ...filterMemberIdsById(wsMembers, ["ws_miku", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["mafuyu"], true),
      ...convertToReactions([["haruka", "shizuku"]]),
    ]),
  ]),
)

// シンプルポップキッチン
tags.push(
  createTag("simplePopKitchen", "シンプルポップキッチン", [
    createFurniture("stove", "コンロ", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "honami", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "mmj_miku"], true),
      ...filterMemberIdsById(vbsMembers, ["vbs_len"], true),
      ...filterMemberIdsById(wsMembers, ["emu", "rui", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["mafuyu"]),
      ...convertToReactions([
        ["an", "akito"],
        ["vbs_miku", "vbs_meiko"],
      ]),
    ]),
    createFurniture("sink", "シンク", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["airi"]),
      ...filterMemberIdsById(vbsMembers, ["an", "akito", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["rui"]),
      ...filterMemberIdsById(oclockMembers, ["ena"]),
    ]),
    createFurniture("refrigerator", "冷蔵庫", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "honami", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["haruka", "airi", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["vbs_len"], true),
      ...filterMemberIdsById(wsMembers, ["emu", "rui", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "mafuyu", "ena"]),
    ]),
    createFurniture("cuttingBoard", "カッティングボード", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "ln_miku"], true),
      ...filterMemberIdsById(mmjMembers, ["mmj_miku"], true),
      ...filterMemberIdsById(vbsMembers, ["vbs_len"], true),
      ...filterMemberIdsById(wsMembers, ["emu", "rui", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "mafuyu", "ena"]),
      ...convertToReactions([
        ["an", "toya"],
        ["rui", "ws_miku"],
      ]),
    ]),
    createFurniture("spiceRack", "調味料ラック", [
      ...filterMemberIdsById(leoneedMembers, ["ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "shizuku"]),
      ...filterMemberIdsById(vbsMembers, ["vbs_miku", "vbs_meiko"]),
    ]),
    createFurniture("stackedDishes", "積み重なった食器", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "honami", "shiho"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "haruka", "shizuku"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "akito", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["emu"]),
      ...filterMemberIdsById(oclockMembers, ["kanade"]),
    ]),
    createFurniture("coffeeMaker", "コーヒーメーカー", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "ln_miku"], true),
      ...filterMemberIdsById(mmjMembers, ["airi", "mmj_miku"], true),
      ...filterMemberIdsById(vbsMembers, ["vbs_len"], true),
      ...filterMemberIdsById(wsMembers, ["emu", "rui", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "mafuyu", "ena"]),
      ...convertToReactions([["akito", "toya"]]),
    ]),
    createFurniture("toaster", "ポップアップトースター", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "ln_miku"], true),
      ...filterMemberIdsById(mmjMembers, ["mmj_miku"], true),
      ...filterMemberIdsById(vbsMembers, ["vbs_len"], true),
      ...filterMemberIdsById(wsMembers, ["emu", "rui", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "mafuyu", "ena"]),
      ...convertToReactions([["ichika", "ln_miku"]]),
    ]),
    createFurniture("ovenRange", "オーブンレンジ", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "shiho"]),
      ...filterMemberIdsById(mmjMembers, ["mmj_miku"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane", "vbs_miku", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["emu", "rui"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "ena"]),
      ...convertToReactions([["ichika", "honami"]]),
    ]),
    createFurniture("vegetableBasket", "野菜バスケット", [
      ...filterMemberIdsById(leoneedMembers, ["honami"], true),
      ...filterMemberIdsById(mmjMembers, ["airi", "mmj_miku"], true),
      ...filterMemberIdsById(
        vbsMembers,
        ["kohane", "vbs_miku", "vbs_len"],
        true,
      ),
      ...filterMemberIdsById(wsMembers, ["nene", "ws_miku"], true),
      ...filterMemberIdsById(oclockMembers, ["mizuki", "25_miku"], true),
    ]),
  ]),
)

// クリーンパウダールーム
tags.push(
  createTag("cleanPowderRoom", "クリーンパウダールーム", [
    createFurniture("washBasin", "洗面台", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "airi"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane", "akito", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["emu", "nene"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "ena", "25_miku"]),
    ]),
    createFurniture("washingMachine", "洗濯機", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "haruka"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane", "akito", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["emu", "nene"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "ena", "25_miku"]),
    ]),
    createFurniture("handyVacuumCleaner", "ハンディ掃除機", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["minori"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane", "akito", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "ena", "25_miku"]),
      ...convertToReactions([["haruka", "mmj_rin"]]),
    ]),
    createFurniture("toothbrushAndCup", "歯ブラシとコップ", [
      ...filterMemberIdsById(mmjMembers, ["airi", "mmj_miku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "akito"]),
      ...filterMemberIdsById(wsMembers, ["emu"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "ena", "25_miku"]),
      ...convertToReactions([["tsukasa", "ws_miku"]]),
    ]),
    createFurniture("dryer", "ドライヤー", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["minori"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane", "akito", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "ena", "25_miku"]),
      ...convertToReactions([["shiho", "ln_luka"]]),
    ]),
  ]),
)

// ガーデン
const flowerBedReactions = [
  ...filterMemberIdsById(leoneedMembers, ["saki", "shiho"], true),
  ...filterMemberIdsById(mmjMembers, ["minori", "airi", "shizuku"], true),
  ...filterMemberIdsById(vbsMembers, ["an"], true),
  ...wsReactions,
  ...filterMemberIdsById(oclockMembers, ["mafuyu", "25_miku"]),
]

const latticePlanterReactions = [
  ...filterMemberIdsById(leoneedMembers, ["saki", "shiho"], true),
  ...filterMemberIdsById(mmjMembers, ["minori", "airi"], true),
  ...filterMemberIdsById(vbsMembers, ["an"], true),
  ...wsReactions,
  ...filterMemberIdsById(oclockMembers, ["mafuyu", "25_miku"]),
]

const gardenCartReactions = [
  ...filterMemberIdsById(leoneedMembers, ["ichika", "honami", "ln_luka"]),
  ...filterMemberIdsById(mmjMembers, ["haruka", "shizuku", "mmj_rin"]),
  ...filterMemberIdsById(vbsMembers, ["an", "vbs_miku"], true),
  ...filterMemberIdsById(wsMembers, ["rui"], true),
  ...filterMemberIdsById(oclockMembers, ["mafuyu", "25_miku"]),
]
tags.push(
  createTag("garden", "ガーデン", [
    createFurniture("flowerBed", "ガーデンの素朴な花壇", [
      ...addWithItemNamesToReactions(
        flowerBedReactions,
        flowerBedReactions.map((reaction) => ({
          ...reaction,
          withItemNames: flowerBeds,
        })),
      ),
      ...convertToReactions([["emu", "rui"]]),
    ]),
    createFurniture("flowerBedPoppy", "ガーデンの素朴な花壇/ポピー", [
      ...addWithItemNamesToReactions(
        flowerBedReactions,
        flowerBedReactions.map((reaction) => ({
          ...reaction,
          withItemNames: flowerBeds,
        })),
      ),
    ]),
    createFurniture("flowerBedCosmos", "ガーデンの素朴な花壇/コスモス", [
      ...addWithItemNamesToReactions(
        flowerBedReactions,
        flowerBedReactions.map((reaction) => ({
          ...reaction,
          withItemNames: flowerBeds,
        })),
      ),
    ]),
    createFurniture("flowerBedLavender", "ガーデンの素朴な花壇/ラベンダー", [
      ...addWithItemNamesToReactions(
        flowerBedReactions,
        flowerBedReactions.map((reaction) => ({
          ...reaction,
          withItemNames: flowerBeds,
        })),
      ),
    ]),
    createFurniture("parasolTable", "ガーデンのパラソルテーブル", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "shiho"], true),
      ...filterMemberIdsById(mmjMembers, ["haruka", "mmj_miku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["an"], true),
      ...filterMemberIdsById(wsMembers, ["emu", "rui"], true),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "25_miku"]),
      ...convertToReactions([["ws_miku", "ws_kaito"]]),
    ]),
    createFurniture("bench", "ガーデンのベンチ", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "ln_miku", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["mmj_miku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, [
        "toya",
        "vbs_miku",
        "vbs_len",
        "vbs_meiko",
      ]),
      ...filterMemberIdsById(wsMembers, ["rui"], true),
      ...filterMemberIdsById(oclockMembers, ["25_miku"]),
    ]),
    createFurniture("ironChair", "ガーデンのアイアンチェア", [
      ...filterMemberIdsById(mmjMembers, ["shizuku"]),
    ]),
    createFurniture("latticePlanter", "ガーデンのラティスプランター", [
      ...addWithItemNamesToReactions(
        latticePlanterReactions,
        latticePlanterReactions.map((reaction) => ({
          ...reaction,
          withItemNames: latticePlanters,
        })),
      ),
      ...convertToReactions([["haruka", "mmj_miku"]]),
    ]),
    createFurniture(
      "latticePlanterPoppy",
      "ガーデンのラティスプランター/ポピー",
      [
        ...addWithItemNamesToReactions(
          latticePlanterReactions,
          latticePlanterReactions.map((reaction) => ({
            ...reaction,
            withItemNames: latticePlanters,
          })),
        ),
      ],
    ),
    createFurniture(
      "latticePlanterCosmos",
      "ガーデンのラティスプランター/コスモス",
      [
        ...addWithItemNamesToReactions(
          latticePlanterReactions,
          latticePlanterReactions.map((reaction) => ({
            ...reaction,
            withItemNames: latticePlanters,
          })),
        ),
      ],
    ),
    createFurniture(
      "latticePlanterLavender",
      "ガーデンのラティスプランター/ラベンダー",
      [
        ...addWithItemNamesToReactions(
          latticePlanterReactions,
          latticePlanterReactions.map((reaction) => ({
            ...reaction,
            withItemNames: latticePlanters,
          })),
        ),
      ],
    ),
    createFurniture("stepLadder", "ガーデンのステップラダー", [
      ...filterMemberIdsById(leoneedMembers, ["ln_miku"]),
      ...filterMemberIdsById(mmjMembers, ["shizuku"]),
      ...filterMemberIdsById(vbsMembers, ["toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["nene", "ws_miku"], true),
      ...filterMemberIdsById(oclockMembers, ["25_miku"]),
    ]),
    createFurniture("toolShelf", "ガーデンツールシェルフ", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "ln_miku", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["shizuku"]),
      ...filterMemberIdsById(vbsMembers, ["an", "akito"], true),
      ...wsReactions,
      ...filterMemberIdsById(oclockMembers, ["25_miku"]),
    ]),
    createFurniture("gardenCart", "ガーデンカート", [
      ...addWithItemNamesToReactions(
        gardenCartReactions,
        gardenCartReactions.map((reaction) => ({
          ...reaction,
          withItemNames: gardenCarts,
        })),
      ),
    ]),
    createFurniture("gardenCartPoppy", "ガーデンカート/ポピー", [
      ...addWithItemNamesToReactions(
        gardenCartReactions,
        gardenCartReactions.map((reaction) => ({
          ...reaction,
          withItemNames: gardenCarts,
        })),
      ),
    ]),
    createFurniture("gardenCartCosmos", "ガーデンカート/コスモス", [
      ...addWithItemNamesToReactions(
        gardenCartReactions,
        gardenCartReactions.map((reaction) => ({
          ...reaction,
          withItemNames: gardenCarts,
        })),
      ),
    ]),
    createFurniture("gardenCartLavender", "ガーデンカート/ラベンダー", [
      ...addWithItemNamesToReactions(
        gardenCartReactions,
        gardenCartReactions.map((reaction) => ({
          ...reaction,
          withItemNames: gardenCarts,
        })),
      ),
    ]),
    createFurniture("tinWateringCan", "ガーデンのブリキじょうろ", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "shiho"], true),
      ...filterMemberIdsById(mmjMembers, ["minori", "airi"], true),
      ...filterMemberIdsById(vbsMembers, ["an"], true),
      ...wsReactions,
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "25_miku"]),
    ]),
  ]),
)

// 公園
tags.push(
  createTag("park", "公園", [
    createFurniture("swing", "ブランコ", [
      ...leoneedReactions,
      ...filterMemberIdsById(mmjMembers, ["minori", "shizuku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["vbs_miku", "vbs_meiko"], true),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
      ...convertToReactions([
        ["shiho", "ln_miku"],
        ["emu", "nene"],
      ]),
    ]),
    createFurniture("slide", "滑り台", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "shiho"], true),
      ...filterMemberIdsById(mmjMembers, ["minori", "shizuku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an", "toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
    ]),
    createFurniture("springPlay", "くまのスプリング遊具", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "saki", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["an", "toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
      ...convertToReactions([["airi", "mmj_rin"]]),
    ]),
    createFurniture("sandbox", "砂場", [
      ...leoneedReactions,
      ...filterMemberIdsById(mmjMembers, ["minori", "shizuku", "mmj_rin"]),
      ...filterMemberIdsById(
        vbsMembers,
        ["akito", "vbs_miku", "vbs_meiko"],
        true,
      ),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
      ...convertToReactions([["ichika", "ln_luka"]]),
    ]),
    createFurniture("seesaw", "シーソー", [
      ...leoneedReactions,
      ...filterMemberIdsById(mmjMembers, ["shizuku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["vbs_miku", "vbs_meiko"], true),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
    ]),
    createFurniture("bench", "公園のベンチ", [
      ...filterMemberIdsById(vbsMembers, ["an", "toya"]),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "emu"]),
      ...filterMemberIdsById(oclockMembers, ["kanade"]),
    ]),
    createFurniture("clock", "公園の時計", [
      ...filterMemberIdsById(leoneedMembers, ["saki"]),
      ...filterMemberIdsById(mmjMembers, ["shizuku", "mmj_rin"]),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "emu"]),
      ...filterMemberIdsById(oclockMembers, ["25_miku"]),
    ]),
    createFurniture("fountain", "公園の噴水", [
      ...filterMemberIdsById(leoneedMembers, ["ln_miku"], true),
      ...filterMemberIdsById(mmjMembers, ["minori", "shizuku", "mmj_rin"]),
      ...filterMemberIdsById(
        vbsMembers,
        ["akito", "vbs_miku", "vbs_meiko"],
        true,
      ),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
      ...convertToReactions([["emu", "ws_miku"]]),
    ]),
    createFurniture("bars", "鉄棒", [
      ...leoneedReactions,
      ...filterMemberIdsById(mmjMembers, ["minori", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["vbs_miku", "vbs_meiko"], true),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
      ...convertToReactions([["nene", "ws_miku"]]),
    ]),
    createFurniture("tire", "公園のタイヤ", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "ln_miku"], true),
      ...filterMemberIdsById(mmjMembers, ["minori", "shizuku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["vbs_miku", "vbs_meiko"], true),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
    ]),
    createFurniture("rotatingJungleGym", "回転ジャングルジム", [
      ...leoneedReactions,
      ...filterMemberIdsById(mmjMembers, ["mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["vbs_miku", "vbs_meiko"], true),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
    ]),
    createFurniture("classicStreetLamp", "クラシックな街灯", [
      ...filterMemberIdsById(mmjMembers, ["minori"]),
      ...filterMemberIdsById(vbsMembers, ["vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "emu"]),
    ]),
    createFurniture("bucketShovel", "バケツとスコップ", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "honami", "shiho"]),
      ...filterMemberIdsById(mmjMembers, ["mmj_rin"]),
      ...filterMemberIdsById(
        vbsMembers,
        ["akito", "vbs_miku", "vbs_meiko"],
        true,
      ),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "ena"], true),
      ...convertToReactions([["nene", "rui"]]),
    ]),
    createFurniture("clayPipe", "土管", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "shiho"]),
      ...filterMemberIdsById(mmjMembers, ["mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["vbs_miku", "vbs_meiko"], true),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
      ...convertToReactions([["tsukasa", "rui"]]),
    ]),
  ]),
)

// 素朴な和室
tags.push(
  createTag("simpleJapaneseStyleRoom", "素朴な和室", [
    createFurniture("dressingTable", "和風の素朴な鏡台", [
      ...filterMemberIdsById(leoneedMembers, ["shiho", "ln_miku", "ln_luka"]),
      ...mmjReactions,
      ...filterMemberIdsById(vbsMembers, ["an", "vbs_len"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "emu", "ws_miku"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "ena"]),
    ]),
    createFurniture("lowTable", "和風の素朴なちゃぶ台", [
      ...leoneedReactions,
      ...mmjReactions,
      ...vbsReactions,
      ...wsReactions,
      ...oclockReactions,
      ...convertToReactions([["saki", "ln_luka"]]),
    ]),
    createFurniture("tv", "和風の素朴なテレビ", [
      ...leoneedReactions,
      ...mmjReactions,
      ...vbsReactions,
      ...wsReactions,
      ...oclockReactions,
      ...convertToReactions([["an", "vbs_len"]]),
    ]),
    createFurniture("cupboard", "和風の素朴な戸棚", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "ln_miku"], true),
      ...filterMemberIdsById(mmjMembers, ["mmj_miku", "mmj_rin"], true),
      ...filterMemberIdsById(vbsMembers, ["vbs_miku"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "nene", "rui"]),
      ...oclockReactions,
    ]),
    createFurniture("kettle", "和風の素朴なやかん", [
      ...filterMemberIdsById(leoneedMembers, ["saki"], true),
      ...filterMemberIdsById(mmjMembers, ["shizuku"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "ws_miku"], true),
      ...filterMemberIdsById(oclockMembers, ["mizuki"], true),
      ...convertToReactions([["saki", "ln_miku"]]),
    ]),
    createFurniture("teapot", "和風の素朴な急須", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "ln_miku"], true),
      ...mmjReactions,
      ...filterMemberIdsById(vbsMembers, ["kohane"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "emu", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["mizuki"], true),
      ...convertToReactions([["kanade", "mafuyu"]]),
    ]),
    createFurniture("phone", "和風の素朴な黒電話", [
      ...leoneedReactions,
      ...mmjReactions,
      ...vbsReactions,
      ...wsReactions,
      ...oclockReactions,
      ...convertToReactions([["rui", "ws_kaito"]]),
    ]),
    createFurniture("beckoningCat", "和風の素朴な招き猫", [
      ...leoneedReactions,
      ...mmjReactions,
      ...vbsReactions,
      ...wsReactions,
      ...oclockReactions,
      ...convertToReactions([["akito", "vbs_miku"]]),
    ]),
  ]),
)

// キッズルーム
tags.push(
  createTag("kidsRoom", "キッズルーム", [
    createFurniture("chest", "キッズルームのカラフルチェスト", [
      ...filterMemberIdsById(leoneedMembers, ["saki"]),
      ...filterMemberIdsById(mmjMembers, ["airi"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an", "toya", "vbs_len"]),
    ]),
    createFurniture("bed", "キッズルームのくまさんベッド", [
      ...filterMemberIdsById(mmjMembers, ["minori", "airi"]),
      ...filterMemberIdsById(vbsMembers, ["an", "toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "emu", "rui"]),
    ]),
    createFurniture("table", "キッズルームのテーブル", [
      ...filterMemberIdsById(mmjMembers, ["airi"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an", "toya"]),
      ...filterMemberIdsById(wsMembers, ["emu"]),
      ...filterMemberIdsById(oclockMembers, ["25_miku"]),
    ]),
    createFurniture("pictureBookShelf", "キッズルームの絵本棚", [
      ...filterMemberIdsById(leoneedMembers, ["saki"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "airi"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an", "toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["mizuki", "25_miku"]),
      ...convertToReactions([["toya", "vbs_miku"]]),
    ]),
    createFurniture("toyBox", "キッズルームのおもちゃ箱", [
      ...filterMemberIdsById(leoneedMembers, ["saki"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "airi"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an", "toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["mizuki", "25_miku"]),
    ]),
    createFurniture("woodenHorse", "キッズルームの木馬", [
      ...filterMemberIdsById(leoneedMembers, ["saki"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "airi"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an", "toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["25_miku"]),
      ...convertToReactions([["kohane", "vbs_len"]]),
    ]),
    createFurniture("train", "キッズルームの汽車のおもちゃ", [
      ...filterMemberIdsById(leoneedMembers, ["saki"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "airi"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an", "toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["mizuki", "25_miku"]),
    ]),
    createFurniture("miniCar", "キッズルームのミニカー", [
      ...filterMemberIdsById(leoneedMembers, ["saki"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "airi"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an", "toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["mizuki", "25_miku"]),
      ...convertToReactions([["tsukasa", "ws_kaito"]]),
    ]),
    createFurniture("stuffedElephant", "キッズルームのぞうのぬいぐるみ", [
      ...filterMemberIdsById(leoneedMembers, ["saki"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "airi"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an", "toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["25_miku"]),
    ]),
    createFurniture("surpriseBox", "キッズルームのびっくり箱", [
      ...filterMemberIdsById(leoneedMembers, ["saki"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "airi"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an", "toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["mizuki", "25_miku"]),
      ...convertToReactions([["mafuyu", "mizuki"]]),
    ]),
    createFurniture("buildingBlocks", "キッズルームの積み木", [
      ...filterMemberIdsById(mmjMembers, ["minori", "airi"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "toya"]),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["25_miku"]),
    ]),
  ]),
)

// カジュアル
tags.push(
  createTag("casual", "カジュアル", [
    createFurniture("chest", "カジュアルなチェスト", [
      ...filterMemberIdsById(leoneedMembers, ["shiho"]),
      ...filterMemberIdsById(mmjMembers, ["minori"]),
      ...filterMemberIdsById(vbsMembers, ["akito", "toya"]),
      ...filterMemberIdsById(wsMembers, ["rui"]),
    ]),
    createFurniture("tabletopMirror", "カジュアルな卓上鏡", [
      ...filterMemberIdsById(vbsMembers, ["toya"]),
      ...filterMemberIdsById(wsMembers, ["tsukasa"]),
    ]),
    createFurniture("bed", "カジュアルなベッド", [
      ...filterMemberIdsById(leoneedMembers, ["shiho"]),
      ...filterMemberIdsById(vbsMembers, ["akito"]),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "rui"]),
    ]),
    createFurniture("studyDesk", "カジュアルな学習机", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "ln_miku"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "haruka"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "rui", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["mafuyu"]),
    ]),
    createFurniture("bookshelf", "カジュアルな本棚", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "shiho", "ln_miku"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "haruka"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "rui", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "mizuki"]),
      ...convertToReactions([["kohane", "toya"]]),
    ]),
    createFurniture("rug", "カジュアルなチェッカー柄ラグ", [
      ...filterMemberIdsById(vbsMembers, ["vbs_len"]),
    ]),
    createFurniture("deskLamp", "カジュアルなデスクライト", [
      ...filterMemberIdsById(vbsMembers, ["toya"]),
      ...filterMemberIdsById(wsMembers, ["tsukasa"]),
    ]),
    createFurniture("comics", "カジュアルな読みかけの漫画", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "shiho", "ln_miku"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "haruka"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "rui", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "mizuki"]),
      ...convertToReactions([["mizuki", "25_miku"]]),
    ]),
    createFurniture("handheldGameConsoles", "カジュアルな携帯ゲーム機", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "shiho", "ln_miku"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "haruka"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "rui", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "mizuki"]),
    ]),
    createFurniture("rcCars", "カジュアルなRCカー", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "ln_miku"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "haruka"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "rui", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "mizuki"]),
      ...convertToReactions([["emu", "ws_kaito"]]),
    ]),
    createFurniture("alarmClock", "カジュアルな目覚まし時計", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "ln_miku"]),
      ...filterMemberIdsById(mmjMembers, ["minori"]),
      ...filterMemberIdsById(vbsMembers, ["toya", "vbs_len", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["mizuki"]),
      ...convertToReactions([["vbs_miku", "vbs_len"]]),
    ]),
    createFurniture("stuffedDog", "カジュアルなビーグル犬のぬいぐるみ", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "shiho", "ln_miku"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "haruka"]),
      ...filterMemberIdsById(vbsMembers, [
        "akito",
        "toya",
        "vbs_len",
        "vbs_meiko",
      ]),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "rui", "ws_kaito"]),
      ...convertToReactions([["honami", "shiho"]]),
    ]),
    createFurniture("hangerRack", "カジュアルなハンガーラック", [
      ...filterMemberIdsById(vbsMembers, ["akito", "toya", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "rui", "ws_kaito"]),
      ...convertToReactions([["kohane", "akito"]]),
    ]),
  ]),
)

// キュート
tags.push(
  createTag("cute", "キュート", [
    createFurniture("chest", "キュートなチェスト", [
      ...filterMemberIdsById(leoneedMembers, ["honami"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "airi", "shizuku"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["ena", "mizuki"]),
    ]),
    createFurniture("dresser", "キュートなドレッサー", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "honami"]),
      ...filterMemberIdsById(mmjMembers, ["haruka"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["ena", "mizuki", "25_miku"]),
      ...convertToReactions([["an", "vbs_miku"]]),
    ]),
    createFurniture("bed", "キュートなベッド", [
      ...filterMemberIdsById(leoneedMembers, ["saki"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "airi", "shizuku"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["ena", "25_miku"]),
    ]),
    createFurniture("lowTable", "キュートなローテブル", [
      ...filterMemberIdsById(mmjMembers, ["minori"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
    ]),
    createFurniture("cushion", "キュートなクッション", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "honami"]),
      ...filterMemberIdsById(mmjMembers, ["haruka"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["ena", "mizuki", "25_miku"]),
      ...convertToReactions([["an", "vbs_meiko"]]),
    ]),
    createFurniture("wardrobe", "キュートなワードローブ", [
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["ena", "mizuki"]),
    ]),
    createFurniture("floorLight", "キュートなフロアライト", [
      ...filterMemberIdsById(mmjMembers, ["mmj_miku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["an"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["ena", "25_miku"]),
    ]),
    createFurniture("ribbonChair", "キュートなリボンチェア", [
      ...filterMemberIdsById(mmjMembers, ["mmj_rin"]),
      ...filterMemberIdsById(oclockMembers, ["25_miku"]),
    ]),
    createFurniture("rug", "キュートなラグ", [
      ...filterMemberIdsById(oclockMembers, ["ena"]),
    ]),
    createFurniture("stuffedRabbit", "キュートなうさぎのぬいぐるみ", [
      ...filterMemberIdsById(leoneedMembers, ["saki"]),
      ...filterMemberIdsById(mmjMembers, ["haruka"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["ena", "25_miku"]),
      ...convertToReactions([["saki", "shiho"]]),
    ]),
    createFurniture("makeupBox", "キュートなメイクボックス", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "honami"]),
      ...filterMemberIdsById(mmjMembers, ["haruka"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "mafuyu"], true),
      ...convertToReactions([["mafuyu", "ena"]]),
    ]),
    createFurniture("perfume", "キュートな香水", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "honami"]),
      ...filterMemberIdsById(mmjMembers, ["haruka"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["ena", "mizuki", "25_miku"]),
      ...convertToReactions([["ena", "mizuki"]]),
    ]),
  ]),
)

// フレンチスタイル
tags.push(
  createTag("frenchStyle", "フレンチスタイル", [
    createFurniture("chest", "フレンチスタイルのチェスト", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "honami", "shiho"]),
      ...filterMemberIdsById(mmjMembers, ["haruka", "airi"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "25_miku"], true),
    ]),
    createFurniture("fullLengthMirror", "フレンチスタイルの姿見", [
      ...filterMemberIdsById(leoneedMembers, ["ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "haruka"], true),
      ...filterMemberIdsById(vbsMembers, ["vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["ena", "mizuki"]),
      ...convertToReactions([["minori", "shizuku"]]),
    ]),
    createFurniture("bed", "フレンチスタイルのベッド", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "honami", "shiho"]),
      ...filterMemberIdsById(mmjMembers, ["haruka", "airi"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
    ]),
    createFurniture("roundTable", "フレンチスタイルのラウンドテーブル", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["haruka", "airi", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["ena", "mizuki"]),
    ]),
    createFurniture("sofa", "フレンチスタイルのソファ", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "honami"], true),
      ...filterMemberIdsById(mmjMembers, ["minori", "mmj_rin"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "25_miku"], true),
      ...addWithItemNamesToReactions(
        leoneedPairs,
        leoneedPairs.map((reaction) => ({
          ...reaction,
          withItemNames: sofas,
        })),
      ),
      ...addWithItemNamesToReactions(
        mmjPairs,
        mmjPairs.map((reaction) => ({
          ...reaction,
          withItemNames: sofas,
        })),
      ),
      ...addWithItemNamesToReactions(
        vbsPairs,
        vbsPairs.map((reaction) => ({
          ...reaction,
          withItemNames: sofas,
        })),
      ),
      ...addWithItemNamesToReactions(
        wsPairs,
        wsPairs.map((reaction) => ({
          ...reaction,
          withItemNames: sofas,
        })),
      ),
      ...addWithItemNamesToReactions(
        oclockPairs,
        oclockPairs.map((reaction) => ({
          ...reaction,
          withItemNames: sofas,
        })),
      ),
    ]),
    createFurniture("bookshelf", "フレンチスタイルの本棚", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "shiho"], true),
      ...filterMemberIdsById(mmjMembers, ["minori"], true),
      ...filterMemberIdsById(vbsMembers, ["akito", "toya", "vbs_len"], true),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
    ]),
    createFurniture("tableLight", "フレンチスタイルのテーブルライト", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["haruka", "mmj_miku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "ena"]),
    ]),
    createFurniture("shelf", "フレンチスタイルのシェルフ", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "ln_miku", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["haruka", "shizuku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
    ]),
    createFurniture("poleHanger", "フレンチスタイルのポールハンガー", [
      ...filterMemberIdsById(leoneedMembers, ["ichika"], true),
      ...filterMemberIdsById(mmjMembers, ["minori"], true),
      ...filterMemberIdsById(vbsMembers, [
        "kohane",
        "an",
        "vbs_miku",
        "vbs_meiko",
      ]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
    ]),
    createFurniture("rug", "フレンチスタイルのハートラグ", [
      ...filterMemberIdsById(mmjMembers, ["mmj_miku"]),
    ]),
    createFurniture("fashionMagazine", "フレンチスタイルのファッション誌", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "shiho"], true),
      ...filterMemberIdsById(mmjMembers, ["minori"], true),
      ...filterMemberIdsById(vbsMembers, [
        "kohane",
        "an",
        "vbs_miku",
        "vbs_meiko",
      ]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
      ...convertToReactions([["kohane", "vbs_meiko"]]),
    ]),
    createFurniture("flowerVase", "フレンチスタイルのフラワーベース", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "ln_miku", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["minori"], true),
      ...filterMemberIdsById(vbsMembers, ["an", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "ena"]),
    ]),
    createFurniture(
      "aromatherapyCandles",
      "フレンチスタイルのアロマキャンドル",
      [
        ...filterMemberIdsById(leoneedMembers, ["ichika"], true),
        ...filterMemberIdsById(mmjMembers, ["minori"], true),
        ...filterMemberIdsById(vbsMembers, [
          "kohane",
          "an",
          "vbs_miku",
          "vbs_meiko",
        ]),
        ...filterMemberIdsById(wsMembers, ["nene"]),
        ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
        ...convertToReactions([["nene", "ws_kaito"]]),
      ],
    ),
    createFurniture("teddyBear", "フレンチスタイルのくまのぬいぐるみ", [
      ...filterMemberIdsById(leoneedMembers, ["ichika"], true),
      ...filterMemberIdsById(mmjMembers, ["minori"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["ena", "mizuki"]),
      ...convertToReactions([["kanade", "ena"]]),
    ]),
    createFurniture("teaSet", "フレンチスタイルのティーセット", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "saki"], true),
      ...filterMemberIdsById(mmjMembers, ["minori", "mmj_miku"], true),
      ...filterMemberIdsById(vbsMembers, [
        "kohane",
        "an",
        "vbs_miku",
        "vbs_meiko",
      ]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
      ...convertToReactions([
        ["honami", "ln_luka"],
        ["kohane", "an"],
      ]),
    ]),
  ]),
)

// トレーニングルーム
tags.push(
  createTag("trainingRoom", "トレーニングルーム", [
    createFurniture("waterServer", "ウォーターサーバー", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "shiho"]),
      ...filterMemberIdsById(mmjMembers, ["minori"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane"], true),
      ...filterMemberIdsById(wsMembers, ["ws_miku"], true),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "25_miku"], true),
      ...convertToReactions([["kanade", "25_miku"]]),
    ]),
    createFurniture("yogaMat", "ヨガマット", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "honami", "shiho"]),
      ...mmjReactions,
      ...filterMemberIdsById(vbsMembers, ["kohane"], true),
      ...filterMemberIdsById(wsMembers, ["rui"], true),
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
    ]),
    createFurniture("absRoller", "腹筋ローラー", [
      ...filterMemberIdsById(leoneedMembers, ["ln_miku", "ln_luka"], true),
      ...mmjReactions,
      ...filterMemberIdsById(vbsMembers, ["kohane"], true),
      ...wsReactions,
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
    ]),
    createFurniture("balanceBall", "バランスボール", [
      ...filterMemberIdsById(leoneedMembers, ["ln_miku", "ln_luka"], true),
      ...mmjReactions,
      ...filterMemberIdsById(vbsMembers, ["kohane"], true),
      ...wsReactions,
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
      ...convertToReactions([["minori", "airi"]]),
    ]),
    createFurniture("runningMachine", "ランニングマシン", [
      ...filterMemberIdsById(leoneedMembers, ["ln_miku", "ln_luka"], true),
      ...mmjReactions,
      ...filterMemberIdsById(vbsMembers, ["kohane"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa"], true),
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
    ]),
    createFurniture("twoPersonRunningMachine", "2人用ランニングマシン", [
      ...filterMemberIdsById(wsMembers, ["tsukasa", "nene"]),
      ...filterMemberIdsById(oclockMembers, ["mizuki"]),
      ...convertToReactions([["haruka", "airi"]]),
    ]),
    createFurniture("fitnessBike", "フィットネスバイク", [
      ...filterMemberIdsById(leoneedMembers, ["ln_miku", "ln_luka"], true),
      ...mmjReactions,
      ...filterMemberIdsById(vbsMembers, ["kohane"], true),
      ...wsReactions,
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
      ...convertToReactions([["tsukasa", "emu"]]),
    ]),
    createFurniture("dumbbell", "ダンベル", [
      ...filterMemberIdsById(leoneedMembers, ["ln_miku", "ln_luka"], true),
      ...mmjReactions,
      ...filterMemberIdsById(vbsMembers, ["kohane"], true),
      ...wsReactions,
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
      ...convertToReactions([["minori", "haruka"]]),
    ]),
  ]),
)

// 音楽スタジオ
tags.push(
  createTag("musicStudio", "音楽スタジオ", [
    createFurniture("synthesizer", "シンセサイザー", [
      ...leoneedReactions,
      ...filterMemberIdsById(mmjMembers, ["haruka"]),
      ...filterMemberIdsById(vbsMembers, ["toya", "vbs_len"]),
      ...filterMemberIdsById(oclockMembers, ["ena", "mizuki"], true),
      ...convertToReactions([["kanade", "mizuki"]]),
    ]),
    createFurniture("electricGuitar", "エレキギター", [
      ...leoneedReactions,
      ...filterMemberIdsById(mmjMembers, ["haruka"]),
      ...filterMemberIdsById(vbsMembers, ["toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["ena", "mizuki"], true),
    ]),
    createFurniture("electricBass", "エレキベース", [
      ...leoneedReactions,
      ...filterMemberIdsById(mmjMembers, ["haruka", "shizuku"]),
      ...filterMemberIdsById(vbsMembers, ["toya", "vbs_len"]),
      ...filterMemberIdsById(oclockMembers, ["25_miku"]),
    ]),
    createFurniture("drumSet", "ドラムセット", [
      ...leoneedReactions,
      ...filterMemberIdsById(mmjMembers, ["haruka"]),
      ...filterMemberIdsById(vbsMembers, ["toya", "vbs_len"]),
      ...filterMemberIdsById(oclockMembers, ["ena", "mizuki"], true),
      ...convertToReactions([["ena", "25_miku"]]),
    ]),
    createFurniture("amplifier", "アンプ", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "honami"], true),
      ...filterMemberIdsById(vbsMembers, ["toya"]),
      ...convertToReactions([["ichika", "shiho"]]),
    ]),
    createFurniture("headphone", "ヘッドホン", [
      ...filterMemberIdsById(leoneedMembers, ["saki"], true),
      ...filterMemberIdsById(mmjMembers, ["haruka"]),
      ...filterMemberIdsById(vbsMembers, ["toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
    ]),
    createFurniture("standMicrophone", "スタンドマイク", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "honami"], true),
      ...filterMemberIdsById(vbsMembers, ["toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["mizuki"]),
    ]),
    createFurniture("cd", "山積みのCD", [
      ...leoneedReactions,
      ...filterMemberIdsById(mmjMembers, ["haruka"]),
      ...filterMemberIdsById(vbsMembers, ["toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
      ...convertToReactions([["akito", "vbs_len"]]),
    ]),
  ]),
)

// イベント会場
tags.push(
  createTag("eventVenue", "イベント会場", [
    createFurniture("table", "折りたたみ会議テーブル", [
      ...filterMemberIdsById(leoneedMembers, ["honami"]),
      ...filterMemberIdsById(wsMembers, ["rui"]),
    ]),
    createFurniture("whiteboard", "ホワイトボード", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "honami"]),
      ...filterMemberIdsById(mmjMembers, ["airi"]),
      ...filterMemberIdsById(wsMembers, ["rui"]),
      ...filterMemberIdsById(oclockMembers, ["mizuki"]),
      ...convertToReactions([["saki", "honami"]]),
    ]),
  ]),
)

// ゲームセンター
tags.push(
  createTag("gameCenter", "ゲームセンター", [
    createFurniture("craneGame", "クレーンゲーム", [
      ...filterMemberIdsById(leoneedMembers, ["honami"], true),
      ...filterMemberIdsById(mmjMembers, ["shizuku"], true),
      ...vbsReactions,
      ...wsReactions,
      ...oclockReactions,
    ]),
    createFurniture("puyopuyo", "ぷよぷよeスポーツ", [
      ...filterMemberIdsById(leoneedMembers, ["honami"], true),
      ...filterMemberIdsById(mmjMembers, ["shizuku"], true),
      ...vbsReactions,
      ...wsReactions,
      ...oclockReactions,
      ...convertToReactions([["airi", "mmj_miku"]]),
    ]),
    createFurniture("printSticker", "プリシ", [
      ...filterMemberIdsById(leoneedMembers, ["honami"], true),
      ...filterMemberIdsById(mmjMembers, ["shizuku"], true),
      ...vbsReactions,
      ...wsReactions,
      ...oclockReactions,
      ...convertToReactions([["minori", "mmj_rin"]]),
    ]),
    createFurniture("chunithm", "CHUNITHM", [
      ...filterMemberIdsById(leoneedMembers, ["honami"], true),
      ...filterMemberIdsById(mmjMembers, ["shizuku"], true),
      ...vbsReactions,
      ...wsReactions,
      ...oclockReactions,
      ...convertToReactions([["tsukasa", "nene"]]),
    ]),
  ]),
)

// グリーン
tags.push(
  createTag("green", "グリーン", [
    createFurniture("anthurium", "アンスリウム", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "honami", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["haruka"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "akito", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["rui"]),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "ena"], true),
    ]),
    createFurniture("monstera", "モンステラ", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "honami", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["airi"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "akito", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["rui"]),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "ena"], true),
    ]),
    createFurniture("yucca", "ユッカ", [
      ...filterMemberIdsById(leoneedMembers, ["ichika"]),
      ...filterMemberIdsById(mmjMembers, ["haruka", "airi"]),
      ...filterMemberIdsById(wsMembers, ["rui"]),
      ...filterMemberIdsById(oclockMembers, ["mizuki", "25_miku"]),
    ]),
    createFurniture("echeveria", "エケベリア", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "honami", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["haruka", "airi"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "akito", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["rui"]),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "ena"], true),
      ...convertToReactions([["akito", "vbs_meiko"]]),
    ]),
  ]),
)

// ぽかぽかなピクニック
tags.push(
  createTag("warmPicnic", "ぽかぽかなピクニック", [
    createFurniture("leisureSeat", "ぽかぽかなピクニックのレジャーシート", [
      ...filterMemberIdsById(leoneedMembers, ["shiho"], true),
      ...filterMemberIdsById(mmjMembers, ["haruka", "shizuku"], true),
      ...vbsReactions,
      ...filterMemberIdsById(wsMembers, ["tsukasa"], true),
      ...oclockReactions,
    ]),
    createFurniture("woodenBoxTable", "ぽかぽかなピクニックの木の箱テーブル", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "ln_miku"], true),
      ...filterMemberIdsById(mmjMembers, ["mmj_miku"], true),
      ...filterMemberIdsById(
        vbsMembers,
        ["kohane", "vbs_miku", "vbs_len"],
        true,
      ),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "ws_miku"], true),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "mizuki"]),
    ]),
    createFurniture("bicycle", "ぽかぽかなピクニックの自転車", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "ln_miku"], true),
      ...mmjReactions,
      ...filterMemberIdsById(
        vbsMembers,
        ["kohane", "vbs_miku", "vbs_meiko"],
        true,
      ),
      ...filterMemberIdsById(wsMembers, ["ws_miku"], true),
      ...oclockReactions,
      ...convertToReactions([["vbs_len", "vbs_meiko"]]),
    ]),
    createFurniture("stump", "ぽかぽかなピクニックの切り株", [
      ...leoneedReactions,
      ...mmjReactions,
      ...filterMemberIdsById(vbsMembers, ["vbs_miku"], true),
      ...wsReactions,
      ...oclockReactions,
    ]),
    createFurniture(
      "sandwichBox",
      "ぽかぽかなピクニックのサンドイッチボックス",
      [
        ...leoneedReactions,
        ...mmjReactions,
        ...vbsReactions,
        ...wsReactions,
        ...oclockReactions,
        ...convertToReactions([["mafuyu", "25_miku"]]),
      ],
    ),
    createFurniture(
      "fruitJuiceBottle",
      "ぽかぽかなピクニックのフルーツジュース瓶",
      [
        ...leoneedReactions,
        ...filterMemberIdsById(mmjMembers, ["haruka"], true),
        ...vbsReactions,
        ...wsReactions,
        ...oclockReactions,
        ...convertToReactions([["minori", "mmj_miku"]]),
      ],
    ),
    createFurniture("basket", "ぽかぽかなピクニックのバスケット", [
      ...leoneedReactions,
      ...filterMemberIdsById(mmjMembers, ["haruka"], true),
      ...vbsReactions,
      ...wsReactions,
      ...oclockReactions,
    ]),
    createFurniture("flowerBasket", "ぽかぽかなピクニックの花かご", [
      ...leoneedReactions,
      ...filterMemberIdsById(mmjMembers, ["airi"], true),
      ...vbsReactions,
      ...wsReactions,
      ...oclockReactions,
      ...convertToReactions([["shizuku", "mmj_miku"]]),
    ]),
    createFurniture("lunchBox", "ぽかぽかなピクニックのお弁当箱", [
      ...leoneedReactions,
      ...mmjReactions,
      ...vbsReactions,
      ...wsReactions,
      ...oclockReactions,
      ...convertToReactions([["kohane", "vbs_miku"]]),
    ]),
    createFurniture("waterBottle", "ぽかぽかなピクニックの水筒", [
      ...filterMemberIdsById(leoneedMembers, ["saki"]),
      ...filterMemberIdsById(mmjMembers, ["haruka", "airi"], true),
      ...filterMemberIdsById(vbsMembers, ["an", "vbs_len"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "emu", "nene"]),
      ...filterMemberIdsById(oclockMembers, ["kanade"], true),
      ...convertToReactions([["airi", "shizuku"]]),
    ]),
    createFurniture("chair", "ぽかぽかなピクニックのチェア", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "honami"]),
      ...filterMemberIdsById(mmjMembers, ["haruka"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"]),
      ...filterMemberIdsById(wsMembers, ["nene", "rui"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "ena"]),
    ]),
    createFurniture("tree", "ぽかぽかなピクニックのツリー", [
      ...leoneedReactions,
      ...mmjReactions,
      ...vbsReactions,
      ...wsReactions,
      ...oclockReactions,
    ]),
  ]),
)

// 月が見える旅館
tags.push(
  createTag("moonRyokan", "月が見える旅館", [
    createFurniture("chestOfDrawers", "月が見える旅館の用箪笥", [
      ...filterMemberIdsById(leoneedMembers, ["ln_miku"], true),
      ...filterMemberIdsById(mmjMembers, ["mmj_miku"], true),
      ...filterMemberIdsById(vbsMembers, ["toya", "vbs_miku"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "emu", "nene"]),
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
    ]),
    createFurniture("lowTable", "月が見える旅館の座卓", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "honami", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["haruka", "airi"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "akito"]),
      ...filterMemberIdsById(wsMembers, ["nene", "rui", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
    ]),
    createFurniture("chair", "月が見える旅館の座椅子", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["minori"]),
      ...filterMemberIdsById(vbsMembers, ["toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["nene", "rui"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "mizuki"], true),
    ]),
    createFurniture("futon", "月が見える旅館の布団", [
      ...filterMemberIdsById(leoneedMembers, ["ln_miku", "ln_luka"], true),
      ...filterMemberIdsById(mmjMembers, ["minori", "airi", "shizuku"]),
      ...filterMemberIdsById(vbsMembers, ["an", "akito", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["rui", "ws_miku"], true),
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
    ]),
    createFurniture("chest", "月が見える旅館の茶箪笥", [
      ...filterMemberIdsById(leoneedMembers, ["ln_miku"], true),
      ...filterMemberIdsById(mmjMembers, ["mmj_miku"], true),
      ...filterMemberIdsById(vbsMembers, ["vbs_len", "vbs_meiko"], true),
      ...filterMemberIdsById(wsMembers, ["rui"], true),
      ...oclockReactions,
    ]),
    createFurniture("lantern", "月が見える旅館の行灯", [
      ...leoneedReactions,
      ...mmjReactions,
      ...filterMemberIdsById(vbsMembers, ["vbs_miku"], true),
      ...filterMemberIdsById(wsMembers, ["ws_miku"], true),
      ...oclockReactions,
      ...convertToReactions([["toya", "vbs_len"]]),
    ]),
    createFurniture("foldingScreen", "月が見える旅館の屏風", [
      ...leoneedReactions,
      ...mmjReactions,
      ...vbsReactions,
      ...wsReactions,
      ...oclockReactions,
      ...convertToReactions([["ichika", "saki"]]),
    ]),
    createFurniture("bonsai", "月が見える旅館の盆栽", [
      ...leoneedReactions,
      ...mmjReactions,
      ...vbsReactions,
      ...wsReactions,
      ...oclockReactions,
      ...convertToReactions([["shizuku", "mmj_rin"]]),
    ]),
    createFurniture("vase", "月が見える旅館の花瓶", [
      ...leoneedReactions,
      ...filterMemberIdsById(mmjMembers, ["mmj_miku"], true),
      ...vbsReactions,
      ...wsReactions,
      ...oclockReactions,
    ]),
  ]),
)

// 雷神祭
const foxStatueReactions = [
  ...filterMemberIdsById(leoneedMembers, ["ln_miku"], true),
  ...filterMemberIdsById(mmjMembers, ["airi", "shizuku"], true),
  ...filterMemberIdsById(vbsMembers, ["kohane", "akito", "vbs_len"]),
  ...filterMemberIdsById(wsMembers, ["rui", "ws_miku"]),
  ...filterMemberIdsById(oclockMembers, ["ena"], true),
]
tags.push(
  createTag("raijinFestival", "雷神祭", [
    createFurniture("japaneseDrums", "雷神祭の和太鼓", [
      ...leoneedReactions,
      ...mmjReactions,
      ...vbsReactions,
      ...wsReactions,
      ...oclockReactions,
    ]),
    createFurniture("paperLantern", "雷神祭の提灯", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "shiho"]),
      ...filterMemberIdsById(mmjMembers, ["shizuku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["an", "toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "emu", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "ena"]),
    ]),
    createFurniture("omenYatai", "雷神祭のおめん屋台", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "saki", "shiho"]),
      ...filterMemberIdsById(mmjMembers, ["mmj_miku", "mmj_rin"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an", "akito", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "ws_miku", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "ena"], true),
    ]),
    createFurniture("cottonCandyStand", "雷神祭のわたがし屋台", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "honami", "ln_miku"]),
      ...filterMemberIdsById(mmjMembers, ["airi", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an", "vbs_len"], true),
      ...filterMemberIdsById(wsMembers, ["nene", "rui", "ws_miku"]),
      ...filterMemberIdsById(oclockMembers, ["mizuki", "25_miku"], true),
    ]),
    createFurniture("lantern", "雷神祭の灯籠", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["haruka", "mmj_miku"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "toya", "vbs_meiko"], true),
      ...filterMemberIdsById(wsMembers, ["nene", "ws_miku"], true),
      ...filterMemberIdsById(oclockMembers, ["mizuki", "25_miku"]),
    ]),
    createFurniture("pond", "雷神祭の池", [
      ...leoneedReactions,
      ...mmjReactions,
      ...vbsReactions,
      ...wsReactions,
      ...oclockReactions,
    ]),
    createFurniture("foxStatueRight", "雷神祭の狐像/右向き", [
      ...addWithItemNamesToReactions(
        foxStatueReactions,
        foxStatueReactions.map((reaction) => ({
          ...reaction,
          withItemNames: foxStatues,
        })),
      ),
    ]),
    createFurniture("foxStatueLeft", "雷神祭の狐像/左向き", [
      ...addWithItemNamesToReactions(
        foxStatueReactions,
        foxStatueReactions.map((reaction) => ({
          ...reaction,
          withItemNames: foxStatues,
        })),
      ),
    ]),
    createFurniture("torii", "雷神祭の鳥居", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "ln_miku", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "shizuku", "mmj_miku"]),
      ...filterMemberIdsById(vbsMembers, ["an", "akito", "vbs_miku"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "nene"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "mafuyu"], true),
    ]),
    createFurniture("bench", "雷神祭の縁台", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "shiho", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "mmj_miku"], true),
      ...filterMemberIdsById(vbsMembers, ["an", "vbs_miku", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["emu", "nene", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "ena"]),
    ]),
  ]),
)

// 天文学者の研究室
tags.push(
  createTag("astronomerLab", "天文学者の研究室", [
    createFurniture("chest", "天文学者の研究室のチェスト", [
      ...filterMemberIdsById(leoneedMembers, ["ln_miku", "ln_luka"], true),
      ...filterMemberIdsById(mmjMembers, ["haruka"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"]),
      ...filterMemberIdsById(wsMembers, ["emu", "nene"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "mizuki"], true),
    ]),
    createFurniture("mirror", "天文学者の研究室の鏡", [
      ...filterMemberIdsById(mmjMembers, ["minori", "airi"]),
      ...filterMemberIdsById(wsMembers, ["tsukasa"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "mizuki"]),
    ]),
    createFurniture("telescope", "天文学者の研究室の天体望遠鏡", [
      ...leoneedReactions,
      ...mmjReactions,
      ...vbsReactions,
      ...filterMemberIdsById(wsMembers, ["ws_miku"], true),
      ...oclockReactions,
      ...convertToReactions([["honami", "ln_miku"]]),
    ]),
    createFurniture("canopyBed", "天文学者の研究室の天蓋つきベッド", [
      ...filterMemberIdsById(leoneedMembers, ["ln_miku"], true),
      ...filterMemberIdsById(mmjMembers, ["mmj_rin"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "emu", "nene"]),
      ...oclockReactions,
      ...convertToReactions([["mmj_miku", "mmj_rin"]]),
    ]),
    createFurniture("bookshelf", "天文学者の研究室の本棚", [
      ...filterMemberIdsById(leoneedMembers, ["saki"], true),
      ...mmjReactions,
      ...filterMemberIdsById(vbsMembers, ["vbs_miku"], true),
      ...filterMemberIdsById(wsMembers, ["ws_miku"], true),
      ...oclockReactions,
      ...convertToReactions([["toya", "vbs_meiko"]]),
    ]),
    createFurniture("desk", "天文学者の研究室の机", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "honami"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "airi"]),
      ...filterMemberIdsById(vbsMembers, ["toya"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
    ]),
    createFurniture("chair", "天文学者の研究室の椅子", [
      ...filterMemberIdsById(wsMembers, ["rui"]),
      ...filterMemberIdsById(oclockMembers, ["ena", "mizuki"]),
    ]),
    createFurniture("boxOfRollingPapers", "天文学者の研究室の巻紙入りの箱", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "haruka", "shizuku"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "toya", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["nene", "ws_miku"], true),
      ...filterMemberIdsById(oclockMembers, ["ena", "mizuki"]),
    ]),
    createFurniture("celestialGlobe", "天文学者の研究室の天球儀", [
      ...leoneedReactions,
      ...filterMemberIdsById(mmjMembers, ["haruka", "shizuku", "mmj_rin"]),
      ...vbsReactions,
      ...filterMemberIdsById(wsMembers, ["nene", "rui", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
      ...convertToReactions([["ln_miku", "ln_luka"]]),
    ]),
    createFurniture("stackedBooks", "天文学者の研究室の積み重なった本", [
      ...leoneedReactions,
      ...mmjReactions,
      ...vbsReactions,
      ...filterMemberIdsById(wsMembers, ["ws_miku"], true),
      ...oclockReactions,
    ]),
    createFurniture("tableLight", "天文学者の研究室のテーブルライト", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "shiho"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "airi"]),
      ...filterMemberIdsById(vbsMembers, ["an", "vbs_len"], true),
      ...filterMemberIdsById(wsMembers, ["emu", "nene", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["mizuki"], true),
    ]),
  ]),
)

// 旅人のキャンプ
tags.push(
  createTag("travelersCamp", "旅人のキャンプ", [
    createFurniture("tent", "旅人のキャンプのテント", [
      ...leoneedReactions,
      ...mmjReactions,
      ...vbsReactions,
      ...wsReactions,
      ...oclockReactions,
    ]),
    createFurniture("outdoorChair", "旅人のキャンプのアウトドアチェア", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "shiho", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "haruka"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane", "toya"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "emu"], true),
      ...filterMemberIdsById(oclockMembers, ["mafuyu"], true),
    ]),
    createFurniture("outdoorTable", "旅人のキャンプのアウトドアテーブル", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "shiho", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "airi", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["akito", "vbs_len", "vbs_meiko"]),
      ...wsReactions,
      ...filterMemberIdsById(oclockMembers, ["kanade", "mizuki"], true),
    ]),
    createFurniture("bonfireCooking", "旅人のキャンプの焚き火料理", [
      ...leoneedReactions,
      ...mmjReactions,
      ...filterMemberIdsById(vbsMembers, ["kohane"], true),
      ...wsReactions,
      ...oclockReactions,
    ]),
    createFurniture("firewood", "旅人のキャンプの薪", [
      ...filterMemberIdsById(leoneedMembers, ["ichika"]),
      ...filterMemberIdsById(mmjMembers, ["airi", "shizuku"]),
      ...filterMemberIdsById(vbsMembers, ["akito", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["ws_miku"], true),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "25_miku"]),
    ]),
    createFurniture("snowMan", "旅人のキャンプの雪だるま", [
      ...leoneedReactions,
      ...mmjReactions,
      ...vbsReactions,
      ...wsReactions,
      ...oclockReactions,
    ]),
    createFurniture("backpack", "旅人のキャンプのリュック", [
      ...leoneedReactions,
      ...filterMemberIdsById(mmjMembers, ["minori", "haruka"], true),
      ...vbsReactions,
      ...wsReactions,
      ...oclockReactions,
    ]),
    createFurniture("outdoorBox", "旅人のキャンプのアウトドアボックス", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "shiho"]),
      ...filterMemberIdsById(mmjMembers, ["haruka", "mmj_miku"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an", "toya"], true),
      ...wsReactions,
      ...filterMemberIdsById(oclockMembers, ["kanade", "mizuki"], true),
    ]),
    createFurniture("lanthanum", "旅人のキャンプのランタン", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["mmj_miku", "mmj_rin"], true),
      ...filterMemberIdsById(vbsMembers, ["toya", "vbs_miku", "vbs_len"], true),
      ...wsReactions,
      ...filterMemberIdsById(oclockMembers, ["kanade", "mizuki"], true),
    ]),
    createFurniture("kettle", "旅人のキャンプのケトル", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "honami", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "shizuku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["akito", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["ws_kaito"], true),
      ...filterMemberIdsById(oclockMembers, ["mizuki"], true),
    ]),
  ]),
)

// スポーツ
tags.push(
  createTag("sports", "スポーツ", [
    createFurniture("basketball", "バスケットボール", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "shiho", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["haruka", "mmj_miku"]),
      ...filterMemberIdsById(vbsMembers, ["vbs_miku", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["nene", "rui"]),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "mizuki"]),
      ...convertToReactions([
        ["kohane", "an"],
        ["toya", "vbs_len"],
        ["kanade", "25_miku"],
      ]),
    ]),
    createFurniture("soccerBall", "サッカーボール", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "honami"]),
      ...filterMemberIdsById(mmjMembers, ["airi", "shizuku"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "akito", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["tsukasa"]),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "mizuki"], true),
      ...convertToReactions([
        ["minori", "haruka"],
        ["ws_miku", "ws_kaito"],
      ]),
    ]),
    createFurniture("badmintonRacket", "バドミントンラケット", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "shiho", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["haruka", "shizuku"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an", "toya"]),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "emu", "rui"]),
      ...convertToReactions([["kanade", "ena"]]),
    ]),
    createFurniture("tennisRacketBag", "テニスラケットバッグ", [
      ...filterMemberIdsById(leoneedMembers, ["ln_miku"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "airi", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["an", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["emu", "nene", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "mizuki"], true),
      ...convertToReactions([["saki", "honami"]]),
    ]),
    createFurniture("baseballBatAndGlove", "野球バットとグローブ", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "honami", "ln_miku"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "mmj_miku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["akito", "vbs_miku", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["ws_miku"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "mizuki"]),
      ...convertToReactions([["tsukasa", "rui"]]),
    ]),
    createFurniture("tableTennisTable", "卓球台", [
      ...convertToReactions([
        ["ichika", "shiho"],
        ["ln_miku", "ln_luka"],
        ["airi", "shizuku"],
        ["mmj_miku", "mmj_rin"],
        ["akito", "toya"],
        ["vbs_miku", "vbs_meiko"],
        ["tsukasa", "ws_kaito"],
        ["emu", "nene"],
        ["mafuyu", "mizuki"],
      ]),
    ]),
  ]),
)

// 虹色アトリエルーム
tags.push(
  createTag("rainbow", "虹色アトリエルーム", [
    createFurniture("chest", "虹色アトリエルームのチェスト", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "saki", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["haruka", "mmj_miku"]),
      ...filterMemberIdsById(vbsMembers, ["akito", "toya"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "nene", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "mizuki"]),
    ]),
    createFurniture("stool", "虹色アトリエルームのスツール", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "ln_miku"], true),
      ...filterMemberIdsById(mmjMembers, ["haruka", "shizuku"]),
      ...filterMemberIdsById(vbsMembers, ["an", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["nene", "rui", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "mafuyu"]),
    ]),
    createFurniture("easel", "虹色アトリエルームのイーゼル", [
      ...leoneedReactions,
      ...filterMemberIdsById(mmjMembers, ["haruka", "shizuku"], true),
      ...filterMemberIdsById(vbsMembers, ["vbs_miku", "vbs_meiko"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "nene"], true),
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
    ]),
    createFurniture("desk", "虹色アトリエルームの机", [
      ...leoneedReactions,
      ...mmjReactions,
      ...vbsReactions,
      ...wsReactions,
      ...oclockReactions,
    ]),
    createFurniture("shelf", "虹色アトリエルームのシェルフ", [
      ...filterMemberIdsById(leoneedMembers, ["ichika"], true),
      ...filterMemberIdsById(mmjMembers, ["minori", "airi"], true),
      ...filterMemberIdsById(vbsMembers, ["toya", "vbs_miku"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "emu", "ws_kaito"]),
      ...oclockReactions,
    ]),
    createFurniture("palette", "虹色アトリエルームのパレット", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "shiho"], true),
      ...filterMemberIdsById(mmjMembers, ["shizuku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["an", "akito"]),
      ...filterMemberIdsById(wsMembers, ["ws_miku"], true),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "ena"]),
    ]),
  ]),
)

export { tags }
