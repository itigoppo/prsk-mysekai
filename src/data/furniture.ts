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

// ミュージックプレイヤー
tags.push(
  createTag("musicPlayer", "ミュージックプレイヤー", [
    createFurniture("componentAudio", "コンポーネントオーディオ", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "ln_miku"]),
      ...filterMemberIdsById(mmjMembers, ["mmj_rin"], true),
      ...filterMemberIdsById(vbsMembers, ["vbs_miku", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["rui", "ws_miku", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["25_miku"]),
    ]),
    createFurniture("recordPlayer", "レコードプレイヤー", [
      ...leoneedMembers,
      ...mmjMembers,
      ...filterMemberIdsById(vbsMembers, ["vbs_miku"], true),
      ...filterMemberIdsById(wsMembers, ["ws_miku", "ws_kaito"], true),
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
    ]),
    createFurniture("gramophone", "蓄音機", [
      ...leoneedMembers,
      ...mmjMembers,
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

// ナチュラル
tags.push(
  createTag("natural", "ナチュラル", [
    createFurniture("chest", "ナチュラルなチェスト", [
      ...leoneedMembers,
      ...filterMemberIdsById(mmjMembers, ["shizuku", "mmj_miku", "mmj_rin"]),
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
    createFurniture("diningTable", "ナチュラルなダイニングテーブル", [
      ...leoneedMembers,
      ...mmjMembers,
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
    ]),
    createFurniture("bookshelf", "ナチュラルな本棚", []),
    createFurniture("closet", "ナチュラルなクローゼット", [
      ...leoneedMembers,
      ...mmjMembers,
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
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
    createFurniture("1SeaterSofa", "ナチュラルな1人掛けソファ", []),
    createFurniture("lowTable", "ナチュラルなローテーブル", [
      ...filterMemberIdsById(leoneedMembers, ["honami"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "ena", "mizuki"]),
    ]),
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
  ]),
)

// シンプルポップキッチン
tags.push(
  createTag("simplePopKitchen", "シンプルポップキッチン", [
    createFurniture("stove", "コンロ", []),
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
      ["an", "toya"],
      ["rui", "ws_miku"],
    ]),
    createFurniture("spiceRack", "調味料ラック", [
      ...filterMemberIdsById(leoneedMembers, ["ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "shizuku"]),
      ...filterMemberIdsById(vbsMembers, ["vbs_miku", "vbs_meiko"]),
    ]),
    createFurniture("stackedDishes", "積み重なった食器", []),
    createFurniture("coffeeMaker", "コーヒーメーカー", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "ln_miku"], true),
      ...filterMemberIdsById(mmjMembers, ["airi", "mmj_miku"], true),
      ...filterMemberIdsById(vbsMembers, ["vbs_len"], true),
      ...filterMemberIdsById(wsMembers, ["emu", "rui", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "mafuyu", "ena"]),
      ["akito", "toya"],
    ]),
    createFurniture("toaster", "ポップアップトースター", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "ln_miku"], true),
      ...filterMemberIdsById(mmjMembers, ["mmj_miku"], true),
      ...filterMemberIdsById(vbsMembers, ["vbs_len"], true),
      ...filterMemberIdsById(wsMembers, ["emu", "rui", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "mafuyu", "ena"]),
      ["ichika", "ln_miku"],
    ]),
    createFurniture("ovenRange", "オーブンレンジ", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "shiho"]),
      ...filterMemberIdsById(mmjMembers, ["mmj_miku"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane", "vbs_miku", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["emu", "rui"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "ena"]),
      ["ichika", "honami"],
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
      ["haruka", "mmj_rin"],
    ]),
    createFurniture("toothbrushAndCup", "歯ブラシとコップ", [
      ...filterMemberIdsById(mmjMembers, ["airi", "mmj_miku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "akito"]),
      ...filterMemberIdsById(wsMembers, ["emu"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "ena", "25_miku"]),
      ["tsukasa", "ws_miku"],
    ]),
    createFurniture("dryer", "ドライヤー", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["minori"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane", "akito", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "ena", "25_miku"]),
      ["shiho", "ln_luka"],
    ]),
  ]),
)

// ガーデン
tags.push(
  createTag("garden", "ガーデン", [
    createFurniture(
      "flowerBed",
      "ガーデンの素朴な花壇(ポピー/コスモス/ラベンダー)",
      [
        ...filterMemberIdsById(leoneedMembers, ["saki", "shiho"], true),
        ...filterMemberIdsById(mmjMembers, ["minori", "airi", "shizuku"], true),
        ...filterMemberIdsById(vbsMembers, ["an"], true),
        ...wsMembers,
        ...filterMemberIdsById(oclockMembers, ["mafuyu", "25_miku"]),
        ["emu", "rui"],
      ],
    ),
    createFurniture("parasolTable", "ガーデンのパラソルテーブル", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "shiho"], true),
      ...filterMemberIdsById(mmjMembers, ["haruka", "mmj_miku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["an"], true),
      ...filterMemberIdsById(wsMembers, ["emu", "rui"], true),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "25_miku"]),
      ["ws_miku", "ws_kaito"],
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
    createFurniture(
      "latticePlanter",
      "ガーデンのラティスプランター(ポピー/コスモス/ラベンダー)",
      [
        ...filterMemberIdsById(leoneedMembers, ["saki", "shiho"], true),
        ...filterMemberIdsById(mmjMembers, ["minori", "airi"], true),
        ...filterMemberIdsById(vbsMembers, ["an"], true),
        ...wsMembers,
        ...filterMemberIdsById(oclockMembers, ["mafuyu", "25_miku"]),
        ["haruka", "mmj_miku"],
      ],
    ),
    createFurniture("stepLadder", "ガーデンのステップラダー", [
      ...filterMemberIdsById(leoneedMembers, ["ln_miku"]),
      ...filterMemberIdsById(mmjMembers, ["shizuku"]),
      ...filterMemberIdsById(vbsMembers, ["toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["nene", "ws_miku"], true),
      ...filterMemberIdsById(oclockMembers, ["25_miku"]),
    ]),
    createFurniture("toolShelf", "ガーデンツールシェルフ", []),
    createFurniture("cart", "ガーデンカート(ポピー/コスモス/ラベンダー)", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "honami", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["haruka", "shizuku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["an", "vbs_miku"], true),
      ...filterMemberIdsById(wsMembers, ["rui"], true),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "25_miku"]),
    ]),
    createFurniture("tinWateringCan", "ガーデンのブリキじょうろ", []),
  ]),
)

// 公園
tags.push(
  createTag("park", "公園", [
    createFurniture("swing", "ブランコ", [
      ...leoneedMembers,
      ...filterMemberIdsById(mmjMembers, ["minori", "shizuku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["vbs_miku", "vbs_meiko"], true),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
      ["shiho", "ln_miku"],
      ["emu", "nene"],
    ]),
    createFurniture("slide", "滑り台", []),
    createFurniture("springPlay", "くまのスプリング遊具", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "saki", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["an", "toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
      ["airi", "mmj_rin"],
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
    createFurniture("seesaw", "シーソー", []),
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
      ["emu", "ws_miku"],
    ]),
    createFurniture("bars", "鉄棒", [
      ...leoneedMembers,
      ...filterMemberIdsById(mmjMembers, ["minori", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["vbs_miku", "vbs_meiko"], true),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
      ["nene", "ws_miku"],
    ]),
    createFurniture("tire", "公園のタイヤ", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "ln_miku"], true),
      ...filterMemberIdsById(mmjMembers, ["minori", "shizuku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["vbs_miku", "vbs_meiko"], true),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
    ]),
    createFurniture("rotatingJungleGym", "回転ジャングルジム", [
      ...leoneedMembers,
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
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
      ["nene", "rui"],
    ]),
    createFurniture("clayPipe", "土管", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "shiho"]),
      ...filterMemberIdsById(mmjMembers, ["mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["vbs_miku", "vbs_meiko"], true),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
      ["tsukasa", "rui"],
    ]),
  ]),
)

// 素朴な和室
tags.push(
  createTag("simpleJapaneseStyleRoom", "素朴な和室", [
    createFurniture("dressingTable", "和風の素朴な鏡台", [
      ...filterMemberIdsById(leoneedMembers, ["shiho", "ln_miku", "ln_luka"]),
      ...mmjMembers,
      ...filterMemberIdsById(vbsMembers, ["an", "vbs_len"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "emu", "ws_miku"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "ena"]),
    ]),
    createFurniture("lowTable", "和風の素朴なちゃぶ台", [
      ...leoneedMembers,
      ...mmjMembers,
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
      ["saki", "ln_luka"],
    ]),
    createFurniture("cupboard", "和風の素朴な戸棚", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "ln_miku"], true),
      ...filterMemberIdsById(mmjMembers, ["mmj_miku", "mmj_rin"], true),
      ...filterMemberIdsById(vbsMembers, ["vbs_miku"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "nene", "rui"]),
      ...oclockMembers,
    ]),
    createFurniture("kettle", "和風の素朴なやかん", [
      ...filterMemberIdsById(leoneedMembers, ["saki"], true),
      ...filterMemberIdsById(mmjMembers, ["shizuku"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "ws_miku"], true),
      ...filterMemberIdsById(oclockMembers, ["mizuki"], true),
      ["saki", "ln_miku"],
    ]),
    createFurniture("teapot", "和風の素朴な急須", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "ln_miku"], true),
      ...mmjMembers,
      ...filterMemberIdsById(vbsMembers, ["kohane"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "emu", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["mizuki"], true),
      ["kanade", "mafuyu"],
    ]),
    createFurniture("beckoningCat", "和風の素朴な招き猫", [
      ...leoneedMembers,
      ...mmjMembers,
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
      ["akito", "vbs_miku"],
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
    createFurniture("pictureBookShelf", "キッズルームの絵本棚", []),
    createFurniture("table", "キッズルームのテーブル", [
      ...filterMemberIdsById(mmjMembers, ["airi"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an", "toya"]),
      ...filterMemberIdsById(wsMembers, ["emu"]),
      ...filterMemberIdsById(oclockMembers, ["25_miku"]),
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
      ["kohane", "vbs_len"],
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
      ["tsukasa", "ws_kaito"],
    ]),
    createFurniture("stuffedElephant", "キッズルームのぞうのぬいぐるみ", []),
    createFurniture("surpriseBox", "キッズルームのびっくり箱", [
      ...filterMemberIdsById(leoneedMembers, ["saki"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "airi"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an", "toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["nene"], true),
      ...filterMemberIdsById(oclockMembers, ["mizuki", "25_miku"]),
      ["mafuyu", "mizuki"],
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
    createFurniture("bed", "カジュアルなベッド", [
      ...filterMemberIdsById(leoneedMembers, ["shiho"]),
      ...filterMemberIdsById(vbsMembers, ["akito"]),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "rui"]),
    ]),
    createFurniture("studyDesk", "カジュアルな学習机", []),
    createFurniture("bookshelf", "カジュアルな本棚", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "shiho", "ln_miku"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "haruka"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "rui", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "mizuki"]),
      ["kohane", "toya"],
    ]),
    createFurniture("rug", "カジュアルなチェッカー柄ラグ", [
      ...filterMemberIdsById(vbsMembers, ["vbs_len"]),
    ]),
    createFurniture("comics", "カジュアルな読みかけの漫画", []),
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
      ["emu", "kaito"],
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
    createFurniture("hangerRack", "カジュアルなハンガーラック", [
      ...filterMemberIdsById(vbsMembers, ["akito", "toya", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "rui", "ws_kaito"]),
      ["kohane", "akito"],
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
      ["an", "vbs_miku"],
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
      ["an", "vbs_meiko"],
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
    createFurniture("perfume", "キュートな香水", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "honami"]),
      ...filterMemberIdsById(mmjMembers, ["haruka"], true),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["ena", "mizuki", "25_miku"]),
      ["ena", "mizuki"],
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
    createFurniture("bed", "フレンチスタイルのベッド", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "honami", "shiho"]),
      ...filterMemberIdsById(mmjMembers, ["haruka", "airi"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
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
      ["kohane", "vbs_meiko"],
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
      [],
    ),
    createFurniture("teddyBear", "フレンチスタイルのくまのぬいぐるみ", []),
    createFurniture("teaSet", "フレンチスタイルのティーセット", []),
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
      ["kanade", "25_miku"],
    ]),
    createFurniture("yogaMat", "ヨガマット", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "honami", "shiho"]),
      ...mmjMembers,
      ...filterMemberIdsById(vbsMembers, ["kohane"], true),
      ...wsMembers,
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
    ]),
    createFurniture("absRoller", "腹筋ローラー", [
      ...filterMemberIdsById(leoneedMembers, ["ln_miku", "ln_luka"], true),
      ...mmjMembers,
      ...filterMemberIdsById(vbsMembers, ["kohane"], true),
      ...wsMembers,
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
    ]),
    createFurniture("balanceBall", "バランスボール", []),
    createFurniture("runningMachine", "ランニングマシン", []),
    createFurniture("fitnessBike", "フィットネスバイク", [
      ...filterMemberIdsById(leoneedMembers, ["ln_miku", "ln_luka"], true),
      ...mmjMembers,
      ...filterMemberIdsById(vbsMembers, ["kohane"], true),
      ...wsMembers,
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
      ["tsukasa", "emu"],
    ]),
    createFurniture("dumbbell", "ダンベル", [
      ...filterMemberIdsById(leoneedMembers, ["ln_miku", "ln_luka"], true),
      ...mmjMembers,
      ...filterMemberIdsById(vbsMembers, ["kohane"], true),
      ...wsMembers,
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
      ["haruka", "minori"],
    ]),
  ]),
)

// 音楽スタジオ
tags.push(
  createTag("musicStudio", "音楽スタジオ", [
    createFurniture("synthesizer", "シンセサイザー", [
      ...leoneedMembers,
      ...filterMemberIdsById(mmjMembers, ["haruka"]),
      ...filterMemberIdsById(vbsMembers, ["toya", "vbs_len"]),
      ...filterMemberIdsById(oclockMembers, ["ena", "mizuki"], true),
      ["kanade", "mizuki"],
    ]),
    createFurniture("electricGuitar", "エレキギター", [
      ...leoneedMembers,
      ...filterMemberIdsById(mmjMembers, ["haruka"]),
      ...filterMemberIdsById(vbsMembers, ["toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["ena", "mizuki"], true),
    ]),
    createFurniture("electricBass", "エレキベース", []),
    createFurniture("drumSet", "ドラムセット", [
      ...leoneedMembers,
      ...filterMemberIdsById(mmjMembers, ["haruka"]),
      ...filterMemberIdsById(vbsMembers, ["toya", "vbs_len"]),
      ...filterMemberIdsById(oclockMembers, ["ena", "mizuki"], true),
      ["ena", "25_miku"],
    ]),
    createFurniture("amplifier", "アンプ", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "honami"], true),
      ...filterMemberIdsById(vbsMembers, ["toya"]),
      ["ichika", "shiho"],
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
      ...leoneedMembers,
      ...filterMemberIdsById(mmjMembers, ["haruka"]),
      ...filterMemberIdsById(vbsMembers, ["toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["nene"]),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
      ["akito", "vbs_len"],
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
    createFurniture("whiteboard", "ホワイトボード", []),
  ]),
)

// ゲームセンター
tags.push(
  createTag("gameCenter", "ゲームセンター", [
    createFurniture("craneGame", "クレーンゲーム", [
      ...filterMemberIdsById(leoneedMembers, ["honami"], true),
      ...filterMemberIdsById(mmjMembers, ["shizuku"], true),
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
    ]),
    createFurniture("puyopuyo", "ぷよぷよeスポーツ", [
      ...filterMemberIdsById(leoneedMembers, ["honami"], true),
      ...filterMemberIdsById(mmjMembers, ["shizuku"], true),
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
      ["airi", "mmj_miku"],
    ]),
    createFurniture("printSticker", "プリシ", [
      ...filterMemberIdsById(leoneedMembers, ["honami"], true),
      ...filterMemberIdsById(mmjMembers, ["shizuku"], true),
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
      ["minori", "mmj_rin"],
    ]),
    createFurniture("chunithm", "CHUNITHM", [
      ...filterMemberIdsById(leoneedMembers, ["honami"], true),
      ...filterMemberIdsById(mmjMembers, ["shizuku"], true),
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
      ["tsukasa", "nene"],
    ]),
  ]),
)

// グリーン
tags.push(
  createTag("green", "グリーン", [
    createFurniture("monstera", "アンスリウム", [
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
      ["akito", "vbs_meiko"],
    ]),
  ]),
)

// ぽかぽかなピクニック
tags.push(
  createTag("warmPicnic", "ぽかぽかなピクニック", [
    createFurniture("leisureSeat", "ぽかぽかなピクニックのレジャーシート", [
      ...filterMemberIdsById(leoneedMembers, ["shiho"], true),
      ...filterMemberIdsById(mmjMembers, ["haruka", "shizuku"], true),
      ...vbsMembers,
      ...filterMemberIdsById(wsMembers, ["tsukasa"], true),
      ...oclockMembers,
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
    createFurniture("stump", "ぽかぽかなピクニックの切り株", [
      ...leoneedMembers,
      ...mmjMembers,
      ...filterMemberIdsById(vbsMembers, ["vbs_miku"], true),
      ...wsMembers,
      ...oclockMembers,
    ]),
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
    createFurniture("basket", "ぽかぽかなピクニックのバスケット", []),
    createFurniture("flowerBasket", "ぽかぽかなピクニックの花かご", [
      ...leoneedMembers,
      ...filterMemberIdsById(mmjMembers, ["airi"], true),
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
      ["shizuku", "mmj_miku"],
    ]),
    createFurniture("lunchBox", "ぽかぽかなピクニックのお弁当箱", [
      ...leoneedMembers,
      ...mmjMembers,
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
      ["kohane", "vbs_miku"],
    ]),
    createFurniture("waterBottle", "ぽかぽかなピクニックの水筒", [
      ...filterMemberIdsById(leoneedMembers, ["saki"]),
      ...filterMemberIdsById(mmjMembers, ["haruka", "airi"], true),
      ...filterMemberIdsById(vbsMembers, ["an", "vbs_len"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "emu", "nene"]),
      ...filterMemberIdsById(oclockMembers, ["kanade"], true),
      ["airi", "shizuku"],
    ]),
    createFurniture("tree", "ぽかぽかなピクニックのツリー", [
      ...leoneedMembers,
      ...mmjMembers,
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
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
    createFurniture("chair", "月が見える旅館の座椅子", []),
    createFurniture("futon", "月が見える旅館の布団", [
      ...filterMemberIdsById(leoneedMembers, ["ln_miku", "ln_luka"], true),
      ...filterMemberIdsById(mmjMembers, ["minori", "airi", "shizuku"]),
      ...filterMemberIdsById(vbsMembers, ["an", "akito", "vbs_meiko"]),
      ...filterMemberIdsById(wsMembers, ["rui", "ws_miku"], true),
      ...filterMemberIdsById(oclockMembers, ["25_miku"], true),
    ]),
    createFurniture("chest", "月が見える旅館の茶箪笥", []),
    createFurniture("lantern", "月が見える旅館の行灯", [
      ...leoneedMembers,
      ...mmjMembers,
      ...filterMemberIdsById(vbsMembers, ["vbs_miku"], true),
      ...filterMemberIdsById(wsMembers, ["ws_miku"], true),
      ...oclockMembers,
      ["toya", "vbs_len"],
    ]),
    createFurniture("foldingScreen", "月が見える旅館の屏風", [
      ...leoneedMembers,
      ...mmjMembers,
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
      ["shizuku", "mmj_rin"],
    ]),
    createFurniture("bonsai", "月が見える旅館の盆栽", [
      ...leoneedMembers,
      ...mmjMembers,
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
      ["shizuku", "mmj_rin"],
    ]),
    createFurniture("vase", "月が見える旅館の花瓶", []),
  ]),
)

// 雷神祭
tags.push(
  createTag("raijinFestival", "雷神祭", [
    createFurniture("japaneseDrums", "雷神祭の和太鼓", []),
    createFurniture("paperLantern", "雷神祭の提灯", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "shiho"]),
      ...filterMemberIdsById(mmjMembers, ["shizuku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["an", "toya", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "emu", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["mafuyu", "ena"]),
    ]),
    createFurniture("omenYatai", "雷神祭のおめん屋台", []),
    createFurniture("cottonCandyStand", "雷神祭のわたがし屋台", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "honami", "ln_miku"]),
      ...filterMemberIdsById(mmjMembers, ["airi", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "an", "vbs_len"], true),
      ...filterMemberIdsById(wsMembers, ["nene", "rui", "ws_miku"]),
      ...filterMemberIdsById(oclockMembers, ["mizuki", "25_miku"], true),
    ]),
    createFurniture("pond", "雷神祭の池", []),
    createFurniture("foxStatue", "雷神祭の狐像(右向き/左向き)", []),
    createFurniture("lantern", "雷神祭の灯籠", [
      ...filterMemberIdsById(leoneedMembers, ["honami", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["haruka", "mmj_miku"]),
      ...filterMemberIdsById(vbsMembers, ["kohane", "toya", "vbs_meiko"], true),
      ...filterMemberIdsById(wsMembers, ["nene", "ws_miku"], true),
      ...filterMemberIdsById(oclockMembers, ["mizuki", "25_miku"]),
    ]),
    createFurniture("torii", "雷神祭の鳥居", [
      ...filterMemberIdsById(leoneedMembers, ["ichika", "ln_miku", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "shizuku", "mmj_miku"]),
      ...filterMemberIdsById(vbsMembers, ["an", "akito", "vbs_miku"], true),
      ...filterMemberIdsById(wsMembers, ["tsukasa", "nene"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "mafuyu"], true),
    ]),
    createFurniture("bench", "雷神祭の縁台", []),
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
      ...leoneedMembers,
      ...mmjMembers,
      ...vbsMembers,
      ...filterMemberIdsById(wsMembers, ["ws_miku"], true),
      ...oclockMembers,
      ["honami", "ln_miku"],
    ]),
    createFurniture("canopyBed", "天文学者の研究室の天蓋つきベッド", []),
    createFurniture("bookshelf", "天文学者の研究室の本棚", [
      ...filterMemberIdsById(leoneedMembers, ["saki"], true),
      ...mmjMembers,
      ...filterMemberIdsById(vbsMembers, ["vbs_miku"], true),
      ...filterMemberIdsById(wsMembers, ["ws_miku"], true),
      ...oclockMembers,
      ["toya", "vbs_meiko"],
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
      ...leoneedMembers,
      ...filterMemberIdsById(mmjMembers, ["haruka", "shizuku", "mmj_rin"]),
      ...vbsMembers,
      ...filterMemberIdsById(wsMembers, ["nene", "rui", "ws_kaito"]),
      ...filterMemberIdsById(oclockMembers, ["ena"], true),
      ["ln_miku", "ln_luka"],
    ]),
    createFurniture("stackedBooks", "天文学者の研究室の積み重なった本", [
      ...leoneedMembers,
      ...mmjMembers,
      ...vbsMembers,
      ...filterMemberIdsById(wsMembers, ["ws_miku"], true),
      ...oclockMembers,
    ]),
    createFurniture("tableLight", "天文学者の研究室のテーブルライト", []),
  ]),
)

// 旅人のキャンプ
tags.push(
  createTag("travelersCamp", "旅人のキャンプ", [
    createFurniture("tent", "旅人のキャンプのテント", [
      ...leoneedMembers,
      ...mmjMembers,
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
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
      ...wsMembers,
      ...filterMemberIdsById(oclockMembers, ["kanade", "mizuki"], true),
    ]),
    createFurniture("bonfireCooking", "旅人のキャンプの焚き火料理", [
      ...leoneedMembers,
      ...mmjMembers,
      ...filterMemberIdsById(vbsMembers, ["kohane"], true),
      ...wsMembers,
      ...oclockMembers,
    ]),
    createFurniture("snowMan", "旅人のキャンプの雪だるま", []),
    createFurniture("backpack", "旅人のキャンプのリュック", [
      ...leoneedMembers,
      ...filterMemberIdsById(mmjMembers, ["minori", "haruka"], true),
      ...vbsMembers,
      ...wsMembers,
      ...oclockMembers,
    ]),
    createFurniture("lanthanum", "旅人のキャンプのランタン", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "ln_luka"]),
      ...filterMemberIdsById(mmjMembers, ["mmj_miku", "mmj_rin"], true),
      ...filterMemberIdsById(vbsMembers, ["toya", "vbs_miku", "vbs_len"], true),
      ...wsMembers,
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
    createFurniture("snowMan", "バスケットボール", []),
    createFurniture("snowMan", "サッカーボール", []),
    createFurniture("snowMan", "テニスラケットバッグ", []),
    createFurniture("snowMan", "バドミントンラケット", []),
    createFurniture("baseballBatAndGlove", "野球バットとグローブ", [
      ...filterMemberIdsById(leoneedMembers, ["saki", "honami", "ln_miku"]),
      ...filterMemberIdsById(mmjMembers, ["minori", "mmj_miku", "mmj_rin"]),
      ...filterMemberIdsById(vbsMembers, ["akito", "vbs_miku", "vbs_len"]),
      ...filterMemberIdsById(wsMembers, ["ws_miku"]),
      ...filterMemberIdsById(oclockMembers, ["kanade", "mizuki"]),
      ["tsukasa", "rui"],
    ]),
    createFurniture("snowMan", "卓球台", []),
  ]),
)

export { tags }
