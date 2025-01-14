export const ukRegions = {
    "England": [
      "Accrington", "Altofts", "Arley", "Ashington", "Ashton in Makerfield",
      "Ashton under Lyne", "Aveley", "Barnsley", "Barrow in Furness", "Barwick in Elmet",
      "Batley", "Bedworth", "Bickerstaffe", "Biddulph", "Bideford", "Birstall",
      "Blackpool", "Bletchley", "Brampton Bierlow", "Burnham", "Burton upon Stather",
      "Burtonwood", "Cannock", "Carlisle", "Chapel-en-le-Frith", "Chilton", "Choppington",
      "Cleethorpes", "Clifton", "Colyton", "Corby", "Cottingham", "Coulby Newham",
      "Cudworth", "Dalton-in-Furness", "Dereham", "Dewsbury", "Dipton", "Doddington",
      "Enfield", "Esholt", "Feltwell", "Fleetwood", "Foulridge", "Friskney", "Garforth",
      "Garstang", "Goldthorpe", "Greenford", "Grimsby", "Hartlepool", "Haslingden",
      "Heddon on the Wall", "Hedon", "Hemsworth", "Hessle", "High Legh", "Hindley",
      "Holywell Green", "Horwich", "Hucknall", "Hull", "Hyde", "Irlam", "Jarrow",
      "Kibworth Harcourt", "Leicester", "Leigh", "Lichfield", "Littleport", "Liversedge",
      "Mansfield Woodhouse", "Marshfield", "Meopham", "Middlesbrough", "Minster on Sea",
      "Monkton", "Morley", "Nazeing", "New Edlington", "New Ollerton", "Northallerton",
      "Oadby", "Oldham", "Ormesby", "Partington", "Perton", "Poulton-le-Fylde", "Preston",
      "Rackheath", "Radcliffe on Trent", "Radlett", "Ripon", "Rochester", "Rothwell",
      "Rotherham", "Royton", "Rubery", "Saint Leonards", "Scarcroft", "Scholes", "Scunthorpe",
      "Seaton", "Selsey", "Sherborne Saint John", "Shirebrook", "Silverdale", "Skegness",
      "Skelton-in-Cleveland", "Smethwick", "South Kirkby", "South Normanton", "Spixworth",
      "Stanley", "Staveley", "Stourport-on-Severn", "Sutton Bridge", "Sutton on Trent",
      "Sutton-in-Ashfield", "Swadlincote", "Swanley", "Swinton", "Tanfield Lea", "Thornaby",
      "Thorne", "Tingley", "Tipton", "Two Mile Ash", "Up Holland", "Walton", "Wellingborough",
      "West Drayton", "Westham", "Westhoughton", "Wickersley", "Wigan", "Willington",
      "Willenhall", "Wilnecote", "Winterton-on-Sea", "Wisbech", "Wombourne", "Wyke"
    ],
    "Scotland": [
      "Banff", "Bannockburn", "Barrhead", "Brechin", "Bridge of Don", "Bridge of Weir",
      "Cullen", "Falkirk", "Glenboig", "Glenmavis", "Glenrothes", "Greenock", "Hurlford",
      "Inverkip", "Kilsyth", "Kilwinning", "Kilmarnock", "Largs", "Lennoxtown", "Letham",
      "Lhanbryde", "Moodiesburn", "Oldmeldrum", "Paisley", "Peterhead", "Polmont",
      "Rutherglen", "Saltcoats", "Stonehaven", "Troon"
    ],
    "Wales": [
      "Bodelwyddan", "Cwmbran", "Kerry", "Neath", "Porth", "Risca", "Rumney",
      "Tonyrefail", "Tredegar", "Wrexham"
    ],
    "Northern Ireland": [
      "Ballyclare", "Ballycastle", "Ballymena", "Carrickfergus", "Dunmurry",
      "Garvagh", "Larne", "Lurgan", "Randalstown"
    ]
  };

  export function slugify(text: string): string {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[\s-]+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-")
      .trim();
  }