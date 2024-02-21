import { Recipe } from "@/common/types"

export const recipes: Recipe[] = [
  {
    id: "kefirova-buchta",
    category: "dessert",
    language: "Czech",
    time: 50,
    totalKcal: 2589,
    nutrients: {
      protein: 61.4,
      carbohydrates: 316.8,
      fat: 115.9,
    },
    amount: { count: 8, type: "piece" },
    title: "Kefírová buchta",
    ingredients: [
      { amount: "2", ingredient: "vejce", unitType: "count", unit: "piece" },
      { amount: "120", ingredient: "cukr", unitType: "weight", unit: "grams" },
      { amount: "100", ingredient: "řepkový olej", unitType: "weight", unit: "grams" },
      { amount: "380", ingredient: "kefír", unitType: "weight", unit: "grams" },
      { amount: "135", ingredient: "hrubá mouka", unitType: "weight", unit: "grams" },
      {
        amount: "130",
        ingredient: "celozrnná hladká ječná mouka",
        unitType: "weight",
        unit: "grams",
      },
      { amount: "2", ingredient: "kakao", unitType: "volume", unit: "tablespoon" },
      { amount: "1", ingredient: "jedlá soda", unitType: "volume", unit: "teaspoon" },
      { amount: "1", ingredient: "sůl", unitType: "count", unit: "pinch" },
    ],
    extraIngredients: [
      "moučkový cukr na posypání",
      "máslo na vymazání formy, strouhanka nebo hrubá mouka na vysypání",
    ],
    instructions: [
      "Troubu rozehřejte na 200 °C, kulatou formu vymažte máslem a vysypte hrubou moukou nebo strouhankou.",
      "Vejce dobře prošlehejte s cukrem (můžete šlehat ručně kuchyňskou metlou), přilijte olej nebo máslo a nakonec i kefír. Důkladně prošlehejte, aby se všechny suroviny dobře spojily. Aby byl výsledek perfektní, pro jistotu si všechny studené suroviny vyndejte z lednice 30 minut předem.",
      "V jiné misce si smíchejte obě mouky, kakao, jedlou sodu a špetku soli. Sypké suroviny můžete prosít, budou vzdušnější.Pokud jste na prosívání líní, alespoň je dobře promíchejte suchou metlou. Ta vás alespoň částečně zbaví hrudek a mouku provzdušní.",
      "Nyní vešlehejte „suché“ ingredience po částech do těch „mokrých“. Míchejte jen tak dlouho, aby se spojily v hladké těsto.Pracujete se sodou, proto neztrácejte čas a nevymíchávejte těsto příliš dlouho, připravíte se tak o bublinky.",
      "Těsto nalijte do připravené koláčové formy, vložte do předehřáté trouby a teplotu pečení snižte na 180 °C. Pečte přibližně 30-35 minut, ke konci pečení zkontrolujte dřevěnou špejlí nebo párátkem. Vyjde-li z těsta čisté a bez drobečků, máte hotovo.",
    ],
    credit: "https://karolinafour.cz/recepty/rychla-kefirova-buchta/",
  },
  {
    id: "pancakes-batter",
    category: "dessert",
    language: "English",
    totalKcal: 1675,
    nutrients: {
      protein: 59.8,
      carbohydrates: 199.5,
      fat: 69,
    },
    amount: { count: 9, type: "piece" },
    title: "Pancakes batter",
    ingredients: [
      { amount: "3", ingredient: "eggs", unitType: "count", unit: "piece" },
      { amount: "25", ingredient: "sugar", unitType: "weight", unit: "grams" },
      { amount: "500", ingredient: "milk", unitType: "volume", unit: "millilitre" },
      { amount: "50", ingredient: "butter", unitType: "weight", unit: "grams" },
      { amount: "200", ingredient: "flour", unitType: "weight", unit: "grams" },
    ],
    instructions: [
      "Sift the dry ingredients together.",
      "Make a well, then add the wet ingredients. Stir to combine.",
      "Scoop the batter onto a hot griddle or pan.",
      "Cook for two to three minutes, then flip.",
      "Continue cooking until brown on both sides.",
    ],
    notes: ["55g eggs", "semi-skimmed milk"],
  },

  {
    id: "housky",
    category: "bread",
    language: "Czech",
    totalKcal: 1864,
    nutrients: {
      protein: 47.9,
      carbohydrates: 302.6,
      fat: 46.7,
    },
    amount: { count: 8, type: "piece" },
    title: "Housky",
    ingredients: [
      { amount: "400", ingredient: "hladká mouka", unitType: "weight", unit: "grams" },
      { amount: "200", ingredient: "voda", unitType: "weight", unit: "grams" },
      { amount: "50", ingredient: "řepkový olej/máslo", unitType: "weight", unit: "grams" },
      { amount: "1", ingredient: "cukr", unitType: "volume", unit: "teaspoon" },
      { amount: "1", ingredient: "sůl", unitType: "volume", unit: "teaspoon" },
      { amount: "25", ingredient: "droždí", unitType: "weight", unit: "grams" },
    ],
    instructions: [
      "Vše dáme do mixéru s hákem a vypracujeme těsto.",
      "Přendáme na vál, lehce pomoučníme.",
      "Rozdělíme na 8 dílů a z každého vytvarujeme housky.",
      "Troubu předehřejeme na 230 stupňů a než se trouba předehřeje jsou pletýnky nakynuté",
      "Pečeme cca 12 minut dozlatova",
    ],
  },
]
