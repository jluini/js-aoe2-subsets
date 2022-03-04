(function(exp) {
  
  function allThese(civs, which) {
    return listOf(civs, which, false);
  }

  function allBut(civs, which) {
    return listOf(civs, which, true);
  }

  function listOf(civs, which, negate) {
    for(var i = 0; i < which.length; i++) {
      if(!civs.includes(which[i])) {
        throw "Unknown element '" + which[i] + "'"
      }
    }
    
    var s = [];

    for(var i = 0; i < civs.length; i++) {
      var value = which.includes(civs[i]);
      s.push(negate ? !value : value);
    }
    
    return new BinaryVector(s);
  }

  var civs = [
    "aztecs",      // 0
    "berbers",     // 1
    "bohemians",   // 2
    "britons",     // 3
    "bulgarians",  // 4
    "burgundians", // 5
    "burmese",     // 6
    "byzantines",  // 7
    "celts",       // 8
    "chinese",     // 9
    "cumans",      // 10
    "ethiopians",  // 11
    "franks",      // 12
    "goths",       // 13
    "huns",        // 14
    "incas",       // 15
    "indians",     // 16
    "italians",    // 17
    "japanese",    // 18
    "khmer",       // 19
    "koreans",     // 20
    "lithuanians", // 21
    "malay",       // 22
    "malians",     // 23
    "magyars",     // 24
    "mayans",      // 25
    "mongols",     // 26
    "persians",    // 27
    "poles",       // 28
    "portuguese",  // 29
    "saracens",    // 30
    "sicilians",   // 31
    "slavs",       // 32
    "spanish",     // 33
    "tatars",      // 34
    "teutons",     // 35
    "turks",       // 36
    "vietnamese",  // 37
    "vikings"      // 38
  ];

  var config = {
    // numElements: 39,
    elementKeywords: civs,
    
    propertyValues: [
      // barracks
       
      ["ths",                 allBut(civs, ["persians"])],
      ["champion",            allBut(civs, ["bulgarians", "ethiopians", "huns", "khmer", "malay", "mayans", "persians", "tatars"])],
      
      ["pikeman",             allBut(civs, ["turks"])],
      ["halberdier",          allBut(civs, ["aztecs", "berbers", "italians", "malians", "mongols", "poles", "saracens", "turks", "vikings"])],
      
      ["ew",                  allThese(civs, ["aztecs", "incas", "mayans"])],
      
      ["squires",             allBut(civs, ["celts", "khmer", "magyars", "portuguese"])],
      ["supplies",            allBut(civs, ["burgundians", "chinese", "cumans", "goths", "huns", "khmer", "lithuanians", "mayans", "mongols", "tatars"])],
      ["arson",               allBut(civs, ["goths"])],
      
      
      // range
      
      ["crossbowman",         allBut(civs, ["bulgarians", "spanish"])],
      ["arbalester",          allBut(civs, ["berbers", "bulgarians", "burgundians", "burmese", "celts", "cumans", "franks", "goths", "huns", "indians", "lithuanians", "persians", "slavs", "spanish", "tatars", "teutons", "turks"])],
      
      ["elite skirmisher",    allBut(civs, ["turks"])],
      
      ["ca",                  allBut(civs, ["aztecs", "bohemians", "incas", "mayans"])],
      ["hca",                 allBut(civs, ["aztecs", "bohemians", "burgundians", "incas", "italians", "malay", "mayans", "portuguese", "sicilians", "teutons", "vikings"])],
      
      ["hc",                  allThese(civs, ["berbers", "bohemians", "burgundians", "byzantines", "franks", "goths", "indians", "italians", "japanese", "khmer", "koreans", "lithuanians", "malians", "persians", "portuguese", "saracens", "spanish", "tatars", "teutons", "turks"])],
      
      ["thumb ring",          allBut(civs, ["aztecs", "bohemians", "britons", "burgundians", "burmese", "celts", "franks", "goths", "khmer", "sicilians", "slavs", "teutons", "vikings"])],
      ["parthian tactics",    allThese(civs, ["bulgarians", "burmese", "cumans", "huns", "indians", "japanese", "khmer", "magyars", "mongols", "persians", "saracens", "tatars", "turks"])],
      
      
      // stable
      
      ["sc",                  allBut(civs, ["aztecs", "incas", "mayans"])],
      ["lc",                  allBut(civs, ["aztecs", "incas", "mayans", "teutons"])],
      ["hussar",              allBut(civs, ["aztecs", "bohemians", "britons", "chinese", "franks",  "incas", "japanese", "lithuanians", "malay", "malians", "mayans", "poles", "portuguese", "sicilians", "teutons", "vietnamese", "vikings"])],
      ["winged hussar",       allThese(civs, ["lithuanians", "poles"])],
      
      ["kt",                  allBut(civs, ["aztecs", "incas", "indians", "mayans"])],
      ["cavalier",            allBut(civs, ["aztecs", "incas", "indians", "mayans", "saracens"])],
      ["paladin",             allThese(civs, ["burgundians", "byzantines", "celts", "cumans", "franks", "huns", "lithuanians", "magyars", "persians", "spanish", "teutons"])],
       
      ["camel",               allThese(civs, ["berbers", "byzantines", "chinese", "cumans", "ethiopians", "indians", "malians", "mongols", "persians", "saracens", "tatars", "turks"])],
      ["heavy camel",         allThese(civs, ["berbers", "byzantines", "chinese", "ethiopians", "indians", "malians", "mongols", "persians", "saracens", "tatars", "turks"])],
      
      ["battle elephant",     allThese(civs, ["burmese", "khmer", "malay", "vietnamese"])],
      
      ["bloodlines",          allBut(civs, ["aztecs", "bohemians", "britons", "burgundians", "byzantines", "celts", "ethiopians", "franks", "incas", "koreans", "malay", "mayans", "vikings"])],
      ["husbandry",           allBut(civs, ["aztecs", "cumans", "incas", "mayans", "teutons", "vikings"])],
      
      ["steppe lancer",       allThese(civs, ["cumans", "mongols", "tatars"])],
      
      
      // blacksmith
      
      ["leather archer armor", allBut(civs, ["burmese"])],
      ["ring archer armor",   allBut(civs, ["aztecs", "bulgarians", "burgundians", "burmese", "celts", "franks", "huns", "mongols", "poles", "sicilians"])],
      ["bracer",              allBut(civs, ["celts", "cumans", "franks", "malians", "persians", "slavs", "teutons"])],
      
      ["blast furnace",       allBut(civs, ["byzantines", "koreans", "lithuanians", "malians", "vietnamese"])],
      ["chain mail armor",    allBut(civs, ["tatars"])],
      ["plate mail armor",    allBut(civs, ["goths", "huns", "indians", "khmer", "lithuanians", "magyars", "tatars"])],
      
      ["scale barding armor", allBut(civs, ["aztecs", "incas", "mayans"])],
      ["chain barding armor", allBut(civs, ["aztecs", "incas", "malay", "mayans"])],
      ["plate barding armor", allBut(civs, ["aztecs", "bohemians", "celts", "ethiopians", "goths", "incas", "indians", "japanese", "koreans", "malay", "mayans", "mongols", "poles", "vikings"])],
      
      
      // siege workshop
      
      ["siege ram",           allBut(civs, ["berbers", "bohemians", "britons", "burgundians", "burmese", "franks", "goths", "indians", "italians", "japanese", "koreans", "lithuanians", "magyars", "malay", "malians", "portuguese", "teutons", "vietnamese"])],
      
      ["onager",              allBut(civs, ["huns", "turks"])],
      ["siege onager",        allThese(civs, ["aztecs", "bulgarians", "celts", "cumans", "ethiopians", "koreans", "malians", "mongols", "saracens", "sicilians", "slavs", "teutons"])],
      
      ["heavy scorpion",      allBut(civs, ["aztecs", "burgundians", "byzantines", "cumans", "huns", "indians", "italians", "koreans", "lithuanians", "malians", "poles", "portuguese", "saracens", "spanish", "vietnamese"])],
      
      ["bbc",                 allBut(civs, ["aztecs", "britons", "bulgarians", "celts", "chinese", "cumans", "huns", "incas", "japanese", "khmer", "magyars", "mayans", "mongols", "sicilians", "slavs", "tatars", "vikings"])],
      
      // monastery
       
      ["redemption",          allBut(civs, ["britons", "celts", "chinese", "cumans", "ethiopians", "franks", "goths", "huns", "koreans", "magyars", "mayans", "mongols", "persians", "sicilians", "tatars", "vietnamese", "vikings"])],
      ["atonement",           allBut(civs, ["britons", "bulgarians", "celts", "franks", "goths", "incas", "indians", "khmer", "koreans", "magyars", "persians", "poles", "sicilians"])],
      ["herbal medicine",     allBut(civs, ["byzantines", "huns", "turks", "vikings"])],
      
      ["heresy",              allBut(civs, ["britons", "burmese", "burgundians", "chinese", "goths", "indians", "italians", "japanese", "khmer", "koreans", "persians", "poles", "sicilians", "slavs", "tatars", "vietnamese"])],
      ["sanctity",            allBut(civs, ["berbers", "bulgarians", "mongols", "persians", "tatars", "vikings"])],
      ["fervor",              allBut(civs, ["incas", "malay", "vietnamese"])],
      ["faith",               allBut(civs, ["bulgarians", "magyars", "tatars"])],
      
      ["illumination",        allBut(civs, ["celts", "cumans", "koreans", "malians", "mayans", "mongols", "persians", "poles", "portuguese", "turks", "vikings"])],
      ["block printing",      allBut(civs, ["berbers", "bulgarians", "celts", "cumans", "ethiopians", "goths", "huns", "khmer", "mongols", "sicilians", "turks"])],
      ["theocracy",           allBut(civs, ["burgundians", "celts", "cumans", "huns", "malay", "mongols", "sicilians", "tatars", "vikings"])],
      
      
      // university
      
      ["masonry",             allBut(civs, ["aztecs", "byzantines", "vietnamese"])],
      ["architecture",        allBut(civs, ["aztecs", "berbers", "byzantines", "celts", "cumans", "huns", "incas", "indians", "japanese", "magyars", "malay", "mongols", "poles", "saracens", "sicilians", "slavs", "tatars", "teutons", "vietnamese"])],
      ["fortified wall",      allBut(civs, ["bulgarians", "cumans", "goths", "huns", "magyars", "malay", "persians", "sicilians"])],
      ["bbt",                 allThese(civs, ["bohemians", "burgundians", "byzantines", "chinese", "italians", "koreans", "lithuanians", "malay", "poles", "portuguese", "spanish", "tatars", "teutons", "turks", "vietnamese"])],
      ["siege engineers",     allBut(civs, ["burgundians", "byzantines", "chinese", "cumans", "goths", "huns", "italians", "lithuanians", "malians", "mayans", "persians", "spanish", "turks"])],
      
      ["guard tower",         allBut(civs, ["cumans", "goths", "huns", "sicilians"])],
      ["keep",                allBut(civs, ["aztecs", "berbers", "cumans", "franks", "goths", "huns", "indians", "magyars", "mongols", "persians", "sicilians", "slavs", "tatars", "vikings"])],
      ["heated shot",         allBut(civs, ["bohemians", "burgundians", "byzantines", "franks", "huns", "japanese", "mongols", "poles", "saracens", "slavs", "spanish"])],
      ["arrowslits",          allBut(civs, ["bulgarians", "burmese", "cumans", "ethiopians", "goths", "huns", "indians", "khmer", "lithuanians", "magyars", "malay", "malians", "mayans", "mongols", "persians", "portuguese", "slavs", "tatars"])],
      ["treadmill crane",     allBut(civs, ["britons", "bulgarians", "byzantines", "chinese", "cumans", "ethiopians", "franks", "goths", "huns", "indians", "khmer", "malay", "mongols", "persians", "slavs", "spanish"])],
      
      
      // dock
      
      ["galleon",             allBut(civs, ["aztecs", "malians"])],
      ["fire galley",         allBut(civs, ["vikings"])],
      ["fire ship",           allBut(civs, ["vikings"])],
      ["fast fire ship",      allBut(civs, ["bohemians", "bulgarians", "burmese", "celts", "chinese", "ethiopians", "huns", "indians", "portuguese", "saracens", "turks", "vietnamese", "vikings"])],
      ["demo",                allBut(civs, ["koreans"])],
      ["heavy demo",          allBut(civs, ["aztecs", "bohemians", "bulgarians", "burgundians", "burmese", "cumans", "ethiopians", "incas", "italians", "japanese", "khmer", "koreans", "lithuanians", "magyars", "malay", "poles", "slavs", "tatars"])],
      ["cannon galleon",      allBut(civs, ["aztecs", "huns", "incas", "mayans", "cumans"])],
      ["elite cannon galleon", allBut(civs, ["aztecs", "britons", "bulgarians", "celts", "chinese", "cumans", "ethiopians", "franks", "goths", "huns", "incas", "magyars", "malians", "mayans", "mongols", "poles", "sicilians", "slavs", "teutons"])],
      ["dry dock",            allBut(civs, ["bulgarians", "burgundians", "bohemians", "cumans", "goths", "mongols", "poles", "teutons"])],
      ["shipwright",          allThese(civs, ["aztecs", "britons", "byzantines", "celts", "chinese", "ethiopians", "goths", "incas", "italians", "japanese", "koreans", "magyars", "malay", "mayans", "mongols", "sicilians", "spanish", "turks"])],


      // castle
      
      ["hoardings",           allBut(civs, ["aztecs", "bohemians", "bulgarians", "burmese", "chinese", "ethiopians", "goths", "huns", "japanese", "koreans", "malay", "portuguese", "tatars"])],
      ["sappers",             allBut(civs, ["berbers", "bulgarians", "burmese", "byzantines", "franks", "indians", "italians", "japanese", "koreans", "lithuanians", "saracens"])],
      
      
      // economic
      
      ["two man saw",         allBut(civs, ["aztecs", "berbers", "bulgarians", "celts", "franks", "incas", "khmer", "malay", "malians", "mongols", "poles", "sicilians", "tatars"])],
      ["crop rotation",       allBut(civs, ["bohemians", "britons", "celts", "chinese", "ethiopians", "huns", "indians", "japanese", "koreans", "mongols", "saracens", "spanish", "turks"])],
      ["gold shaft mining",   allBut(civs, ["goths", "italians", "lithuanians", "mayans", "poles", "portuguese", "spanish", "teutons", "vietnamese"])],
      ["stone shaft mining",  allBut(civs, ["britons", "burmese", "cumans", "franks", "huns", "japanese", "magyars", "saracens", "slavs", "tatars", "turks", "vikings"])],
      
      
      //
      
      ["stone wall",          allBut(civs, ["goths", "cumans"])],
      ["watch tower",         allBut(civs, ["sicilians"])],
      
      
      // market
      
      ["guilts",              allBut(civs, ["aztecs", "bulgarians", "chinese", "franks", "japanese", "khmer", "magyars", "mongols", "saracens", "slavs", "vikings"])],
      
      // ...
    ],
  };
  
  var properties = [];
  var values = [];
  
  for(var e = 0; e < config.propertyValues.length; e++) {
    var propertyValue = config.propertyValues[e];
    var property = propertyValue[0];
    var value = propertyValue[1];
    
    properties.push(property);
    values.push(value);
  }
  
  exp.Aoe2Data = {
    data: {
      rowLabels: civs,
      colLabels: properties,
      colValues: values
    }
  };
  
})(window);
