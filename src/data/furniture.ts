import {
  filterMemberIdsById,
  getCombinationsByUnitId,
  getMembersByUnitId,
} from "@/lib/util"
import { Furniture, Tag } from "@/types"
import { units } from "./members"

// 家具のデータを作成する関数
const createFurniture = (
  id: string,
  name: string,
  reactions: string[][],
): Furniture => ({
  id,
  name,
  reactions,
})

// タグのデータを作成する関数
const createTag = (
  id: string,
  name: string,
  furnitureList: Furniture[],
): Tag => ({
  id,
  name,
  furnitureList,
})

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

// データの定義
const tags: Tag[] = []

// ゲート
tags.push(
  createTag("gate", "ゲート", [
    createFurniture("gate", "ゲート", [
      ...leoneedMembers,
      ...mmjMembers,
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
    ]),
  ]),
)

// きらめく流星ルーム
tags.push(
  createTag("unitRoom", "きらめく流星ルーム", [
    createFurniture("chest", "きらめく流星のチェスト", [...leoneedMembers]),
    createFurniture("bed", "きらめく流星のベッド", [...leoneedMembers]),
    createFurniture("table", "きらめく流星のテーブル", [...leoneedMembers]),
    createFurniture("rug", "きらめく流星のラグ", [...leoneedMembers]),
    createFurniture("sofa", "きらめく流星のソファ", [
      ...leoneedCombinations.filter((members) => members.length === 2),
    ]),
    createFurniture("unitKeyItem", "あの日のジャングルジム", [
      ...leoneedCombinations.filter((members) => members.length !== 2),
    ]),
  ]),
)

// かがやくクローバールーム
tags.push(
  createTag("unitRoom", "かがやくクローバールーム", [
    createFurniture("chest", "かがやくクローバーのチェスト", [...mmjMembers]),
    createFurniture("bed", "かがやくクローバーのベッド", [...mmjMembers]),
    createFurniture("table", "かがやくクローバーのテーブル", [...mmjMembers]),
    createFurniture("rug", "かがやくクローバーのラグ", [...mmjMembers]),
    createFurniture("sofa", "かがやくクローバーのソファ", [
      ...mmjCombinations.filter((members) => members.length === 2),
    ]),
    createFurniture("unitKeyItem", "配信用カメラ", [
      ...mmjCombinations.filter((members) => members.length !== 2),
    ]),
  ]),
)

// 鮮やかなユニゾンルーム
tags.push(
  createTag("unitRoom", "鮮やかなユニゾンルーム", [
    createFurniture("chest", "鮮やかなユニゾンのチェスト", [...vbsMembers]),
    createFurniture("bed", "鮮やかなユニゾンのベッド", [...vbsMembers]),
    createFurniture("table", "鮮やかなユニゾンのテーブル", [...vbsMembers]),
    createFurniture("rug", "鮮やかなユニゾンのラグ", [...vbsMembers]),
    createFurniture("sofa", "鮮やかなユニゾンのソファ", [
      ...vbsCombinations.filter((members) => members.length === 2),
    ]),
    createFurniture("unitKeyItem", "ぷよぷよ通", [
      ...vbsCombinations.filter((members) => members.length !== 2),
    ]),
  ]),
)

// はじけるクラウンルーム
tags.push(
  createTag("unitRoom", "はじけるクラウンルーム", [
    createFurniture("chest", "はじけるクラウンのチェスト", [...wsMembers]),
    createFurniture("bed", "はじけるクラウンのベッド", [...wsMembers]),
    createFurniture("table", "はじけるクラウンのテーブル", [...wsMembers]),
    createFurniture("rug", "はじけるクラウンのラグ", [...wsMembers]),
    createFurniture("sofa", "はじけるクラウンのソファ", [
      ...wsCombinations.filter((members) => members.length === 2),
    ]),
    createFurniture("unitKeyItem", "ネネロボのオブジェ", [
      ...wsCombinations.filter((members) => members.length !== 2),
    ]),
  ]),
)

// ひび割れたハートルーム
tags.push(
  createTag("unitRoom", "ひび割れたハートルーム", [
    createFurniture("chest", "ひび割れたハートのチェスト", [...oclockMembers]),
    createFurniture("bed", "ひび割れたハートのベッド", [...oclockMembers]),
    createFurniture("table", "ひび割れたハートのテーブル", [...oclockMembers]),
    createFurniture("rug", "ひび割れたハートのラグ", [...oclockMembers]),
    createFurniture("sofa", "ひび割れたハートのソファ", [
      ...oclockCombinations.filter((members) => members.length === 2),
    ]),
    createFurniture("unitKeyItem", "いつものファミレス席", [
      ...oclockCombinations.filter((members) => members.length !== 2),
    ]),
  ]),
)

// 公園
tags.push(
  createTag("park", "公園", [
    createFurniture("clayPipe", "土管", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "shiho"]),
      ...filterMemberIdsById(mmjMembers, ["mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["vbs_miku", "vbs_meiko"], true),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
      ["tsukasa", "rui"],
    ]),
    createFurniture("bucketShovel", "バケツとスコップ", [
      ...filterMemberIdsById(
        leoneedMembers,
        ["saki", "ln_miku", "ln_luka"],
        true,
      ),
      ...filterMemberIdsById(mmjMembers, ["mmj_rin"]),
      ...filterMemberIdsById(
        vbsMembers,
        ["akito", "vbs_miku", "vbs_meiko"],
        true,
      ),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
      ["nene", "rui"],
    ]),
    createFurniture("classicStreetLamp", "クラシックな街灯", [
      ...filterMemberIdsById(mmjMembers, ["minori"]),
      ...filterMemberIdsById(vbsMembers, ["vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "emu"]),
    ]),
    createFurniture("rotatingJungleGym", "回転ジャングルジム", [
      ...leoneedMembers,
      ...filterMemberIdsById(mmjMembers, ["mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["vbs_miku", "vbs_meiko"], true),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
    ]),
    createFurniture("tire", "公園のタイヤ", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "ln_miku"], true),
      ...filterMemberIdsById(mmjMembers, ["minori", "shizuku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["vbs_miku", "vbs_meiko"], true),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
    ]),
    createFurniture("bars", "鉄棒", [
      ...leoneedMembers,
      ...filterMemberIdsById(mmjMembers, ["minori", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["vbs_miku", "vbs_meiko"], true),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
      ["nene", "ws_miku"],
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
      ["emu", "ws_miku"],
    ]),
    createFurniture("clock", "公園の時計", [
      ...filterMemberIdsById(leoneedMembers, ["saki"]),
      ...filterMemberIdsById(mmjMembers, ["shizuku", "mmj_rin"]),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "emu"]),
      ...filterMemberIdsById(oclockMembers, ["25_miku"]),
    ]),
    createFurniture("bench", "公園のベンチ", [
      ...filterMemberIdsById(vbsMembers, ["an", "toya"]),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "emu"]),
      ...filterMemberIdsById(oclockMembers, ["kanade"]),
    ]),
    createFurniture("sandbox", "砂場", [
      ...leoneedMembers,
      ...filterMemberIdsById(mmjMembers, ["minori", "shizuku", "mmj_rin"]),
      ...filterMemberIdsById(
        vbsMembers,
        ["akito", "vbs_miku", "vbs_meiko"],
        true,
      ),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
      ["ichika", "ln_luka"],
    ]),
    createFurniture("springPlay", "くまのスプリング遊具", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "saki", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["an", "toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
      ["airi", "mmj_rin"],
    ]),
    createFurniture("swing", "ブランコ", [
      ...leoneedMembers,
      ...filterMemberIdsById(mmjMembers, ["minori", "shizuku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["vbs_miku", "vbs_meiko"], true),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
      ["shiho", "ln_miku"],
      ["emu", "nene"],
    ]),
  ]),
)

// ガーデン
tags.push(
  createTag("garden", "ガーデン", [
    createFurniture("cartLavender", "ガーデンカート/ラベンダー", [
      ...filterMemberIdsById(
        leoneedMembers,
        ["saki", "shiho", "ln_miku"],
        true,
      ),
      ...filterMemberIdsById(mmjMembers, ["haruka", "shizuku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["an", "vbs_miku"], true),
      ...filterMemberIdsById(wsMembers, ["rui"], true),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "25_miku"]),
    ]),
    createFurniture("cart", "ガーデンカート", [
      ...filterMemberIdsById(
        leoneedMembers,
        ["saki", "shiho", "ln_miku"],
        true,
      ),
      ...filterMemberIdsById(mmjMembers, ["haruka", "shizuku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["an", "vbs_miku"], true),
      ...filterMemberIdsById(wsMembers, ["rui"], true),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "25_miku"]),
    ]),
    createFurniture("stepLadder", "ガーデンのステップラダー", [
      ...filterMemberIdsById(leoneedMembers, ["ln_miku"]),
      ...filterMemberIdsById(mmjMembers, ["shizuku"]),
      ...filterMemberIdsById(vbsMembers, ["toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["nene", "ws_miku"], true),
      ...filterMemberIdsById(oclockMembers, ["25_miku"]),
    ]),
    createFurniture("latticePlanter", "ガーデンのラティスプランター", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "shiho"], true),
      ...filterMemberIdsById(mmjMembers, ["minori", "airi"], true),
      ...filterMemberIdsById(vbsMembers, ["an"], true),
      ...wsMembers,
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "25_miku"]),
      ["haruka", "mmj_miku"],
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
    createFurniture("parasolTable", "ガーデンのパラソルテーブル", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "shiho"], true),
      ...filterMemberIdsById(mmjMembers, ["haruka", "mmj_miku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["an"], true),
      ...filterMemberIdsById(wsMembers, ["emu", "rui"], true),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "25_miku"]),
      ["ws_miku", "ws_kaito"],
    ]),
    createFurniture("flowerBed", "ガーデンの素朴な花壇", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "shiho"], true),
      ...filterMemberIdsById(mmjMembers, ["minori", "airi", "shizuku"], true),
      ...filterMemberIdsById(vbsMembers, ["an"], true),
      ...wsMembers,
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "25_miku"]),
      ["emu", "rui"],
    ]),
  ]),
)

// ナチュラル
tags.push(
  createTag("natural", "ナチュラル", [
    createFurniture("tv", "ナチュラルな液晶テレビ", [
      ...filterMemberIdsById(leoneedMembers, ["ln_luka"], true),
      ...filterMemberIdsById(mmjMembers, ["mmj_miku"], true),
      ...filterMemberIdsById(vbsMembers, ["toya"], true),
      ...filterMemberIdsById(wsMembers, ["ws_miku", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["mafuyu"], true),
      ["haruka", "shizuku"],
    ]),
    createFurniture("sofa", "ナチュラルな2人掛けソファ", [
      ...filterMemberIdsById(mmjMembers, ["mmj_miku", "mmj_rin"], true),
      ...filterMemberIdsById(oclockMembers, ["mizuki"]),
      ...leoneedCombinations.filter((members) => members.length === 2),
      ...mmjCombinations.filter((members) => members.length === 2),
      ...vbsCombinations.filter((members) => members.length === 2),
      ...wsCombinations.filter((members) => members.length === 2),
      ...oclockCombinations.filter((members) => members.length === 2),
    ]),
    createFurniture("lowTable", "ナチュラルなローテーブル", [
      ...filterMemberIdsById(leoneedMembers, ["honami"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "ena", "mizuki"]),
    ]),
    createFurniture("dresser", "ナチュラルなドレッサー", [
      ...filterMemberIdsById(leoneedMembers, ["ln_miku", "ln_luka"], true),
      ...filterMemberIdsById(mmjMembers, ["mmj_miku", "mmj_rin"], true),
      ...filterMemberIdsById(
        vbsMembers,
        ["vbs_miku", "vbs_len", "vbs_meiko"],
        true,
      ),
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
    ]),
    createFurniture("closet", "ナチュラルなクローゼット", [
      ...leoneedMembers,
      ...mmjMembers,
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
    ]),
    createFurniture("diningTable", "ナチュラルなダイニングテーブル", [
      ...leoneedMembers,
      ...mmjMembers,
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
    ]),
    createFurniture("bed", "ナチュラルなベッド", [
      ...leoneedMembers,
      ...mmjMembers,
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
    ]),
    createFurniture("chest", "ナチュラルなチェスト", [
      ...leoneedMembers,
      ...filterMemberIdsById(mmjMembers, ["shizuku", "mmj_miku", "mmj_rin"]),
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
    ]),
  ]),
)

// シンプルポップキッチン
tags.push(
  createTag("simplePopKitchen", "シンプルポップキッチン", [
    createFurniture("ovenRange", "オーブンレンジ", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "shiho"]),
      ...filterMemberIdsById(mmjMembers, ["mmj_miku"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane", "vbs_miku", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["emu", "rui"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "ena"]),
      ["ichika", "honami"],
    ]),
    createFurniture("toaster", "ポップアップトースター", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "ln_miku"], true),
      ...filterMemberIdsById(mmjMembers, ["mmj_miku"], true),
      ...filterMemberIdsById(vbsMembers, ["vbs_len"], true),
      ...filterMemberIdsById(wsMembers, ["emu", "rui", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "mafuyu", "ena"]),
      ["ichika", "ln_miku"],
    ]),
    createFurniture("coffeeMaker", "コーヒーメーカー", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "ln_miku"], true),
      ...filterMemberIdsById(mmjMembers, ["airi", "mmj_miku"], true),
      ...filterMemberIdsById(vbsMembers, ["vbs_len"], true),
      ...filterMemberIdsById(wsMembers, ["emu", "rui", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "mafuyu", "ena"]),
      ["akito", "toya"],
    ]),
    createFurniture("spiceRack", "調味料ラック", [
      ...filterMemberIdsById(leoneedMembers, ["ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "shizuku"]),
      ...filterMemberIdsById(vbsMembers, ["vbs_miku", "vbs_meiko"]),
    ]),
    createFurniture("cuttingBoard", "カッティングボード", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "ln_miku"], true),
      ...filterMemberIdsById(mmjMembers, ["mmj_miku"], true),
      ...filterMemberIdsById(vbsMembers, ["vbs_len"], true),
      ...filterMemberIdsById(wsMembers, ["emu", "rui", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "mafuyu", "ena"]),
      ["an", "toya"],
      ["rui", "ws_miku"],
    ]),
    createFurniture("refrigerator", "冷蔵庫", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "honami", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["haruka", "airi", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["vbs_len"], true),
      ...filterMemberIdsById(wsMembers, ["emu", "rui", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "mafuyu", "ena"]),
    ]),
    createFurniture("sink", "シンク", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["airi"]),
      ...filterMemberIdsById(vbsMembers, ["an", "akito", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["rui"]),
      ...filterMemberIdsById(oclockMembers, ["ena"]),
    ]),
  ]),
)

// クリーンパウダールーム
tags.push(
  createTag("cleanPowderRoom", "クリーンパウダールーム", [
    createFurniture("dryer", "ドライヤー", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["minori"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane", "akito", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "ena", "25_miku"]),
      ["shiho", "ln_luka"],
    ]),
    createFurniture("toothbrushAndCup", "歯ブラシとコップ", [
      ...filterMemberIdsById(mmjMembers, ["airi", "mmj_miku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "akito"]),
      ...filterMemberIdsById(wsMembers, ["emu"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "ena", "25_miku"]),
      ["tsukasa", "ws_miku"],
    ]),
    createFurniture("handyVacuumCleaner", "ハンディ掃除機", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["minori"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane", "akito", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "ena", "25_miku"]),
      ["haruka", "mmj_rin"],
    ]),
    createFurniture("washingMachine", "洗濯機", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "haruka"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane", "akito", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["emu", "nene"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "ena", "25_miku"]),
    ]),
    createFurniture("washBasin", "洗面台", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "airi"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane", "akito", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["emu", "nene"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "ena", "25_miku"]),
    ]),
  ]),
)

// 素朴な和室
tags.push(
  createTag("simpleJapaneseStyleRoom", "素朴な和室", [
    createFurniture("beckoningCat", "和風の素朴な招き猫", [
      ...leoneedMembers,
      ...mmjMembers,
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
      ["akito", "vbs_miku"],
    ]),
    createFurniture("teapot", "和風の素朴な急須", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "ln_miku"], true),
      ...mmjMembers,
      ...filterMemberIdsById(vbsMembers, ["kohane"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "emu", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["mizuki"], true),
      ["kanade", "mafuyu"],
    ]),
    createFurniture("kettle", "和風の素朴なやかん", [
      ...filterMemberIdsById(leoneedMembers, ["saki"], true),
      ...filterMemberIdsById(mmjMembers, ["shizuku"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "ws_miku"], true),
      ...filterMemberIdsById(oclockMembers, ["mizuki"], true),
      ["saki", "ln_miku"],
    ]),
    createFurniture("cupboard", "和風の素朴な戸棚", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "ln_miku"], true),
      ...filterMemberIdsById(mmjMembers, ["mmj_miku", "mmj_rin"], true),
      ...filterMemberIdsById(vbsMembers, ["vbs_miku"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "nene", "rui"]),
      ...oclockMembers,
    ]),
    createFurniture("lowTable", "和風の素朴なちゃぶ台", [
      ...leoneedMembers,
      ...mmjMembers,
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
      ["saki", "ln_luka"],
    ]),
    createFurniture("dressingTable", "和風の素朴な鏡台", [
      ...filterMemberIdsById(leoneedMembers, ["shiho", "ln_miku", "ln_luka"]),
      ...mmjMembers,
      ...filterMemberIdsById(vbsMembers, ["an", "vbs_len"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "emu", "ws_miku"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "ena"]),
    ]),
  ]),
)

// キッズルーム
tags.push(
  createTag("kidsRoom", "キッズルーム", [
    createFurniture("buildingBlocks", "キッズルームの積み木", [
      ...filterMemberIdsById(mmjMembers, ["minori", "airi"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "toya"]),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["25_miku"]),
    ]),
    createFurniture("surpriseBox", "キッズルームのびっくり箱", [
      ...filterMemberIdsById(leoneedMembers, ["saki"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "airi"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an", "toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["mizuki", "25_miku"]),
      ["mafuyu", "mizuki"],
    ]),
    createFurniture("miniCar", "キッズルームのミニカー", [
      ...filterMemberIdsById(leoneedMembers, ["saki"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "airi"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an", "toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["mizuki", "25_miku"]),
      ["tsukasa", "ws_kaito"],
    ]),
    createFurniture("train", "キッズルームの汽車のおもちゃ", [
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
      ["kohane", "vbs_len"],
    ]),
    createFurniture("toyBox", "キッズルームのおもちゃ箱", [
      ...filterMemberIdsById(leoneedMembers, ["saki"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "airi"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an", "toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["mizuki", "25_miku"]),
    ]),
    createFurniture("table", "キッズルームのテーブル", [
      ...filterMemberIdsById(mmjMembers, ["airi"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an", "toya"]),
      ...filterMemberIdsById(wsMembers, ["emu"]),
      ...filterMemberIdsById(oclockMembers, ["25_miku"]),
    ]),
    createFurniture("chest", "キッズルームのカラフルチェスト", [
      ...filterMemberIdsById(leoneedMembers, ["saki"]),
      ...filterMemberIdsById(mmjMembers, ["airi"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an", "toya", "vbs_len"]),
    ]),
  ]),
)

// カジュアル
tags.push(
  createTag("casual", "カジュアル", [
    createFurniture("hangerRack", "カジュアルなハンガーラック", [
      ...filterMemberIdsById(vbsMembers, ["akito", "toya", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "rui", "ws_kaito"]),
      ["kohane", "akito"],
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
      ["honami", "shiho"],
    ]),
    createFurniture("rcCars", "カジュアルなRCカー", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "ln_miku"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "haruka"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "rui", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "mizuki"]),
      ["emu", "kaito"],
    ]),
    createFurniture("handheldGameConsoles", "カジュアルな携帯ゲーム機", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "shiho", "ln_miku"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "haruka"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "rui", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "mizuki"]),
    ]),
    createFurniture("rug", "カジュアルなチェッカー柄ラグ", [
      ...filterMemberIdsById(vbsMembers, ["vbs_len"]),
    ]),
    createFurniture("bookshelf", "カジュアルな本棚", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "shiho", "ln_miku"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "haruka"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "rui", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "mizuki"]),
      ["kohane", "toya"],
    ]),
    createFurniture("bed", "カジュアルなベッド", [
      ...filterMemberIdsById(leoneedMembers, ["shiho"]),
      ...filterMemberIdsById(vbsMembers, ["akito"]),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "rui"]),
    ]),
    createFurniture("chest", "カジュアルなチェスト", [
      ...filterMemberIdsById(leoneedMembers, ["shiho"]),
      ...filterMemberIdsById(mmjMembers, ["minori"]),
      ...filterMemberIdsById(vbsMembers, ["akito", "toya"]),
      ...filterMemberIdsById(wsMembers, ["rui"]),
    ]),
  ]),
)

// キュート
tags.push(
  createTag("cute", "キュート", [
    createFurniture("perfume", "キュートな香水", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "honami"]),
      ...filterMemberIdsById(mmjMembers, ["haruka"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["ena", "mizuki", "25_miku"]),
      ["ena", "mizuki"],
    ]),
    createFurniture("floorLight", "キュートなフロアライト", [
      ...filterMemberIdsById(mmjMembers, ["mmj_miku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["an"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["ena", "25_miku"]),
    ]),
    createFurniture("wardrobe", "キュートなワードローブ", [
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["ena", "mizuki"]),
    ]),
    createFurniture("cushion", "キュートなクッション", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "honami"]),
      ...filterMemberIdsById(mmjMembers, ["haruka"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["ena", "mizuki", "25_miku"]),
      ["an", "vbs_meiko"],
    ]),
    createFurniture("lowTable", "キュートなローテブル", [
      ...filterMemberIdsById(mmjMembers, ["minori"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
    ]),
    createFurniture("dresser", "キュートなドレッサー", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "honami"]),
      ...filterMemberIdsById(mmjMembers, ["haruka"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["ena", "mizuki", "25_miku"]),
      ["an", "vbs_miku"],
    ]),
    createFurniture("chest", "キュートなチェスト", [
      ...filterMemberIdsById(leoneedMembers, ["honami"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "airi", "shizuku"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["ena", "mizuki"]),
    ]),
  ]),
)

// フレンチスタイル
tags.push(
  createTag("frenchStyle", "フレンチスタイル", [
    createFurniture("flowerVase", "フレンチスタイルのフラワーベース", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "ln_miku", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["minori"], true),
      ...filterMemberIdsById(vbsMembers, ["an", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "ena"]),
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
      ["kohane", "vbs_meiko"],
    ]),
    createFurniture("rug", "フレンチスタイルのハートラグ", [
      ...filterMemberIdsById(mmjMembers, ["mmj_miku"]),
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
    createFurniture("shelf", "フレンチスタイルのシェルフ", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "ln_miku", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["haruka", "shizuku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"]),
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
    createFurniture("bookshelf", "フレンチスタイルの本棚", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "shiho"], true),
      ...filterMemberIdsById(mmjMembers, ["minori"], true),
      ...filterMemberIdsById(vbsMembers, ["akito", "toya", "vbs_len"], true),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
    ]),
    createFurniture("sofa", "フレンチスタイルのソファ", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "honami"], true),
      ...filterMemberIdsById(mmjMembers, ["minori", "mmj_rin"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "25_miku"], true),
      ...leoneedCombinations.filter((members) => members.length === 2),
      ...mmjCombinations.filter((members) => members.length === 2),
      ...vbsCombinations.filter((members) => members.length === 2),
      ...wsCombinations.filter((members) => members.length === 2),
      ...oclockCombinations.filter((members) => members.length === 2),
    ]),
    createFurniture("bed", "フレンチスタイルのベッド", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "honami", "shiho"]),
      ...filterMemberIdsById(mmjMembers, ["haruka", "airi"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
    ]),
    createFurniture("chest", "フレンチスタイルのチェスト", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "honami", "shiho"]),
      ...filterMemberIdsById(mmjMembers, ["haruka", "airi"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "25_miku"], true),
    ]),
  ]),
)

// トレーニングルーム
tags.push(
  createTag("trainingRoom", "トレーニングルーム", [
    createFurniture("dumbbell", "ダンベル", [
      ...filterMemberIdsById(leoneedMembers, ["ln_miku", "ln_luka"], true),
      ...mmjMembers,
      ...filterMemberIdsById(vbsMembers, ["kohane"], true),
      ...wsMembers,
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
      ["haruka", "minori"],
    ]),
    createFurniture("fitnessBike", "フィットネスバイク", [
      ...filterMemberIdsById(leoneedMembers, ["ln_miku", "ln_luka"], true),
      ...mmjMembers,
      ...filterMemberIdsById(vbsMembers, ["kohane"], true),
      ...wsMembers,
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
      ["tsukasa", "emu"],
    ]),
    createFurniture("absRoller", "腹筋ローラー", [
      ...filterMemberIdsById(leoneedMembers, ["ln_miku", "ln_luka"], true),
      ...mmjMembers,
      ...filterMemberIdsById(vbsMembers, ["kohane"], true),
      ...wsMembers,
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
    ]),
    createFurniture("yogaMat", "ヨガマット", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "honami", "shiho"]),
      ...mmjMembers,
      ...filterMemberIdsById(vbsMembers, ["kohane"], true),
      ...wsMembers,
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
    ]),
    createFurniture("waterServer", "ウォーターサーバー", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "shiho"]),
      ...filterMemberIdsById(mmjMembers, ["minori"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane"], true),
      ...filterMemberIdsById(wsMembers, ["ws_miku"], true),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "25_miku"], true),
      ["kanade", "25_miku"],
    ]),
  ]),
)

// 音楽スタジオ
tags.push(
  createTag("musicStudio", "音楽スタジオ", [
    createFurniture("cd", "山積みのCD", [
      ...leoneedMembers,
      ...filterMemberIdsById(mmjMembers, ["haruka"]),
      ...filterMemberIdsById(vbsMembers, ["toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
      ["akito", "vbs_len"],
    ]),
    createFurniture("standMicrophone", "スタンドマイク", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "honami"], true),
      ...filterMemberIdsById(vbsMembers, ["toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["mizuki"]),
    ]),
    createFurniture("headphone", "ヘッドホン", [
      ...filterMemberIdsById(leoneedMembers, ["saki"], true),
      ...filterMemberIdsById(mmjMembers, ["haruka"]),
      ...filterMemberIdsById(vbsMembers, ["toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
    ]),
    createFurniture("amplifier", "アンプ", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "honami"], true),
      ...filterMemberIdsById(vbsMembers, ["toya"]),
      ["ichika", "shiho"],
    ]),
    createFurniture("drumSet", "ドラムセット", [
      ...leoneedMembers,
      ...filterMemberIdsById(mmjMembers, ["haruka"]),
      ...filterMemberIdsById(vbsMembers, ["toya", "vbs_len"]),
      ...filterMemberIdsById(oclockMembers, ["ena", "mizuki"], true),
      ["ena", "25_miku"],
    ]),
    createFurniture("electricGuitar", "エレキギター", [
      ...leoneedMembers,
      ...filterMemberIdsById(mmjMembers, ["haruka"]),
      ...filterMemberIdsById(vbsMembers, ["toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["ena", "mizuki"], true),
    ]),
    createFurniture("synthesizer", "シンセサイザー", [
      ...leoneedMembers,
      ...filterMemberIdsById(mmjMembers, ["haruka"]),
      ...filterMemberIdsById(vbsMembers, ["toya", "vbs_len"]),
      ...filterMemberIdsById(oclockMembers, ["ena", "mizuki"], true),
      ["kanade", "mizuki"],
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
  ]),
)

// ゲームセンター
tags.push(
  createTag("gameCenter", "ゲームセンター", [
    createFurniture("chunithm", "CHUNITHM", [
      ...filterMemberIdsById(leoneedMembers, ["honami"], true),
      ...filterMemberIdsById(mmjMembers, ["shizuku"], true),
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
      ["tsukasa", "nene"],
    ]),
    createFurniture("printSticker", "プリシ", [
      ...filterMemberIdsById(leoneedMembers, ["honami"], true),
      ...filterMemberIdsById(mmjMembers, ["shizuku"], true),
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
      ["minori", "mmj_rin"],
    ]),
    createFurniture("puyopuyo", "ぷよぷよeスポーツ", [
      ...filterMemberIdsById(leoneedMembers, ["honami"], true),
      ...filterMemberIdsById(mmjMembers, ["shizuku"], true),
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
      ["airi", "mmj_miku"],
    ]),
    createFurniture("craneGame", "クレーンゲーム", [
      ...filterMemberIdsById(leoneedMembers, ["honami"], true),
      ...filterMemberIdsById(mmjMembers, ["shizuku"], true),
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
    ]),
  ]),
)

// ぽかぽかなピクニック
tags.push(
  createTag("warmPicnic", "ぽかぽかなピクニック", [
    createFurniture("tree", "ぽかぽかなピクニックのツリー", [
      ...leoneedMembers,
      ...mmjMembers,
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
    ]),
    createFurniture("waterBottle", "ぽかぽかなピクニックの水筒", [
      ...filterMemberIdsById(leoneedMembers, ["saki"]),
      ...filterMemberIdsById(mmjMembers, ["haruka", "airi"], true),
      ...filterMemberIdsById(vbsMembers, ["an", "vbs_len"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "emu", "nene"]),
      ...filterMemberIdsById(oclockMembers, ["kanade"], true),
      ["airi", "shizuku"],
    ]),
    createFurniture("lunchBox", "ぽかぽかなピクニックのお弁当箱", [
      ...leoneedMembers,
      ...mmjMembers,
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
      ["kohane", "vbs_miku"],
    ]),
    createFurniture("flowerBasket", "ぽかぽかなピクニックの花かご", [
      ...leoneedMembers,
      ...filterMemberIdsById(mmjMembers, ["airi"], true),
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
      ["shizuku", "mmj_miku"],
    ]),
    createFurniture(
      "fruitJuiceBottle",
      "ぽかぽかなピクニックのフルーツジュース瓶",
      [
        ...leoneedMembers,
        ...filterMemberIdsById(mmjMembers, ["haruka"], true),
        ...vbsMembers,
        ...wsMembers,
        ...oclockMembers,
        ["minori", "mmj_miku"],
      ],
    ),
    createFurniture(
      "sandwichBox",
      "ぽかぽかなピクニックのサンドイッチボックス",
      [
        ...leoneedMembers,
        ...mmjMembers,
        ...vbsMembers,
        ...wsMembers,
        ...oclockMembers,
        ["mafuyu", "25_miku"],
      ],
    ),
    createFurniture("stump", "ぽかぽかなピクニックの切り株", [
      ...leoneedMembers,
      ...mmjMembers,
      ...filterMemberIdsById(vbsMembers, ["vbs_miku"], true),
      ...wsMembers,
      ...oclockMembers,
    ]),
    createFurniture("bicycle", "ぽかぽかなピクニックの自転車", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "ln_miku"], true),
      ...mmjMembers,
      ...filterMemberIdsById(
        vbsMembers,
        ["kohane", "vbs_miku", "vbs_meiko"],
        true,
      ),
      ...filterMemberIdsById(wsMembers, ["ws_miku"], true),
      ...oclockMembers,
      ["vbs_len", "vbs_meiko"],
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
    createFurniture("leisureSeat", "ぽかぽかなピクニックのレジャーシート", [
      ...filterMemberIdsById(leoneedMembers, ["shiho"], true),
      ...filterMemberIdsById(mmjMembers, ["haruka", "shizuku"], true),
      ...vbsMembers,
      ...filterMemberIdsById(wsMembers, ["tsukasa"], true),
      ...oclockMembers,
    ]),
  ]),
)

// 天文学者の研究室
tags.push(
  createTag("astronomerLab", "天文学者の研究室", [
    createFurniture("stackedBooks", "天文学者の研究室の積み重なった本", [
      ...leoneedMembers,
      ...mmjMembers,
      ...vbsMembers,
      ...filterMemberIdsById(wsMembers, ["ws_miku"], true),
      ...oclockMembers,
    ]),
    createFurniture("celestialGlobe", "天文学者の研究室の天球儀", [
      ...leoneedMembers,
      ...filterMemberIdsById(mmjMembers, ["haruka", "shizuku", "mmj_rin"]),
      ...vbsMembers,
      ...filterMemberIdsById(wsMembers, ["nene", "rui", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
      ["ln_miku", "ln_luka"],
    ]),
    createFurniture("boxOfRollingPapers", "天文学者の研究室の巻紙入りの箱", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "haruka", "shizuku"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "toya", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["nene", "ws_miku"], true),
      ...filterMemberIdsById(oclockMembers, ["ena", "mizuki"]),
    ]),
    createFurniture("chair", "天文学者の研究室の椅子", [
      ...filterMemberIdsById(wsMembers, ["rui"]),
      ...filterMemberIdsById(oclockMembers, ["ena", "mizuki"]),
    ]),
    createFurniture("desk", "天文学者の研究室の机", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "honami"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "airi"]),
      ...filterMemberIdsById(vbsMembers, ["toya"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
    ]),
    createFurniture("bookshelf", "天文学者の研究室の本棚", [
      ...filterMemberIdsById(leoneedMembers, ["saki"], true),
      ...mmjMembers,
      ...filterMemberIdsById(vbsMembers, ["vbs_miku"], true),
      ...filterMemberIdsById(wsMembers, ["ws_miku"], true),
      ...oclockMembers,
      ["toya", "vbs_meiko"],
    ]),
    createFurniture("telescope", "天文学者の研究室の天体望遠鏡", [
      ...leoneedMembers,
      ...mmjMembers,
      ...vbsMembers,
      ...filterMemberIdsById(wsMembers, ["ws_miku"], true),
      ...oclockMembers,
      ["honami", "ln_miku"],
    ]),
    createFurniture("mirror", "天文学者の研究室の鏡", [
      ...filterMemberIdsById(mmjMembers, ["minori", "airi"]),
      ...filterMemberIdsById(wsMembers, ["tsukasa"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "mizuki"]),
    ]),
    createFurniture("chest", "天文学者の研究室のチェスト", [
      ...filterMemberIdsById(leoneedMembers, ["ln_miku", "ln_luka"], true),
      ...filterMemberIdsById(mmjMembers, ["haruka"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"]),
      ...filterMemberIdsById(wsMembers, ["emu", "nene"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "mizuki"], true),
    ]),
  ]),
)

// 月が見える旅館
tags.push(
  createTag("moonRyokan", "月が見える旅館", [
    createFurniture("bonsai", "月が見える旅館の盆栽", [
      ...leoneedMembers,
      ...mmjMembers,
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
      ["shizuku", "mmj_rin"],
    ]),
    createFurniture("foldingScreen", "月が見える旅館の屏風", [
      ...leoneedMembers,
      ...mmjMembers,
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
      ["shizuku", "mmj_rin"],
    ]),
    createFurniture("streetLight", "月が見える旅館の街灯", [
      ...leoneedMembers,
      ...mmjMembers,
      ...filterMemberIdsById(vbsMembers, ["vbs_miku"], true),
      ...filterMemberIdsById(wsMembers, ["ws_miku"], true),
      ...oclockMembers,
      ["toya", "vbs_len"],
    ]),
    createFurniture("futon", "月が見える旅館の布団", [
      ...filterMemberIdsById(leoneedMembers, ["ln_miku", "ln_luka"], true),
      ...filterMemberIdsById(mmjMembers, ["minori", "airi", "shizuku"]),
      ...filterMemberIdsById(vbsMembers, ["an", "akito", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["rui", "ws_miku"], true),
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
    ]),
    createFurniture("lowTable", "月が見える旅館の座卓", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "honami", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["haruka", "airi"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "akito"]),
      ...filterMemberIdsById(wsMembers, ["nene", "rui", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
    ]),
    createFurniture("chestOfDrawers", "月が見える旅館の用箪笥", [
      ...filterMemberIdsById(leoneedMembers, ["ln_miku"], true),
      ...filterMemberIdsById(mmjMembers, ["mmj_miku"], true),
      ...filterMemberIdsById(vbsMembers, ["toya", "vbs_miku"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "emu", "nene"]),
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
    ]),
  ]),
)

// 旅人のキャンプ
tags.push(
  createTag("travelersCamp", "旅人のキャンプ", [
    createFurniture("kettle", "旅人のキャンプのケトル", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "honami", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "shizuku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["akito", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["ws_kaito"], true),
      ...filterMemberIdsById(oclockMembers, ["mizuki"], true),
    ]),
    createFurniture("lanthanum", "旅人のキャンプのランタン", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["mmj_miku", "mmj_rin"], true),
      ...filterMemberIdsById(vbsMembers, ["toya", "vbs_miku", "vbs_len"], true),
      ...wsMembers,
      ...filterMemberIdsById(oclockMembers, ["kanade", "mizuki"], true),
    ]),
    createFurniture("backpack", "旅人のキャンプのリュック", [
      ...leoneedMembers,
      ...filterMemberIdsById(mmjMembers, ["minori", "haruka"], true),
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
    ]),
    createFurniture("bonfireCooking", "旅人のキャンプの焚き火料理", [
      ...leoneedMembers,
      ...mmjMembers,
      ...filterMemberIdsById(vbsMembers, ["kohane"], true),
      ...wsMembers,
      ...oclockMembers,
    ]),
    createFurniture("outdoorTable", "旅人のキャンプのアウトドアテーブル", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "shiho", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "airi", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["akito", "vbs_len", "vbs_meiko"]),
      ...wsMembers,
      ...filterMemberIdsById(oclockMembers, ["kanade", "mizuki"], true),
    ]),
    createFurniture("outdoorChair", "旅人のキャンプのアウトドアチェア", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "shiho", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "haruka"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane", "toya"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "emu"], true),
      ...filterMemberIdsById(oclockMembers, ["mafuyu"], true),
    ]),
    createFurniture("tent", "旅人のキャンプのテント", [
      ...leoneedMembers,
      ...mmjMembers,
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
    ]),
  ]),
)

// 雷神祭
tags.push(
  createTag("raijinFestival", "雷神祭", [
    createFurniture("torii", "雷神祭の鳥居", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "ln_miku", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "shizuku", "mmj_miku"]),
      ...filterMemberIdsById(vbsMembers, ["an", "akito", "vbs_miku"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "nene"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "mafuyu"], true),
    ]),
    createFurniture("lantern", "雷神祭の灯籠", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["haruka", "mmj_miku"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "toya", "vbs_meiko"], true),
      ...filterMemberIdsById(wsMembers, ["nene", "ws_miku"], true),
      ...filterMemberIdsById(oclockMembers, ["mizuki", "25_miku"]),
    ]),
    createFurniture("cottonCandyStand", "雷神祭のわたがし屋台", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "honami", "ln_miku"]),
      ...filterMemberIdsById(mmjMembers, ["airi", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an", "vbs_len"], true),
      ...filterMemberIdsById(wsMembers, ["nene", "rui", "ws_miku"]),
      ...filterMemberIdsById(oclockMembers, ["mizuki", "25_miku"], true),
    ]),
    createFurniture("paperLantern", "雷神祭の提灯", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "shiho"]),
      ...filterMemberIdsById(mmjMembers, ["shizuku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["an", "toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "emu", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "ena"]),
    ]),
  ]),
)

// スポーツ
tags.push(
  createTag("sports", "スポーツ", [
    createFurniture("baseballBatAndGlove", "野球バットとグローブ", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "honami", "ln_miku"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "mmj_miku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["akito", "vbs_miku", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["ws_miku"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "mizuki"]),
      ["tsukasa", "rui"],
    ]),
  ]),
)

export { tags }
