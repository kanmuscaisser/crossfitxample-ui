const eventsMock = [
    {
      id: '28c36110-91ed-4408-aaff-213982a03cd9',
      name: 'Limnocorax flavirostra',
      discipline: 'Abrasion, unspecified foot, subsequent encounter',
      country: 'Indonesia',
      address: '9 Emmet Alley',
      date: '28/03/2021',
      director: 'Sidonnie Longo',
      photo: 'http://dummyimage.com/179x100.png/5fa2dd/ffffff',
    },
    {
      id: 'ca47d473-e208-4bd4-aedb-2cb62a95265f',
      name: 'Creagrus furcatus',
      discipline: 'Spastic ectropion of right eye, unspecified eyelid',
      country: 'Greece',
      address: '324 Prentice Parkway',
      date: '08/06/2021',
      director: 'Dominique Dollen',
      photo: 'http://dummyimage.com/201x100.png/dddddd/000000',
    },
    {
      id: '9d7553d8-f164-4d4f-b155-7999f4427d8f',
      name: 'Ctenophorus ornatus',
      discipline: 'Striking against sports equipment w subsequent fall, init',
      country: 'China',
      address: '9528 Mccormick Alley',
      date: '04/09/2021',
      director: 'Neil Richards',
      photo: 'http://dummyimage.com/112x100.png/dddddd/000000',
    },
    {
      id: 'e87f329b-1845-45ad-b39d-3dbc3c044a8a',
      name: 'Mazama gouazoubira',
      discipline: 'Herpesviral [herpes simplex] infections',
      country: 'China',
      address: '165 Sunfield Plaza',
      date: '24/10/2021',
      director: 'Stanleigh Shewen',
      photo: 'http://dummyimage.com/187x100.png/ff4444/ffffff',
    },
    {
      id: '2a777b5e-45ec-43ce-896a-d3b499a1483b',
      name: 'Eudyptula minor',
      discipline: 'Blister (nonthermal), unspecified lesser toe(s), subs encntr',
      country: 'Russia',
      address: '26071 Village Green Trail',
      date: '28/01/2021',
      director: 'Athene Isacke',
      photo: 'http://dummyimage.com/246x100.png/ff4444/ffffff',
    },
    {
      id: 'd4aa7fed-47d7-4959-86de-a3dc93e13e73',
      name: 'unavailable',
      discipline: 'Unspecified subluxation of right thumb',
      country: 'Poland',
      address: '9582 Mariners Cove Terrace',
      date: '21/12/2021',
      director: 'Jill Cooch',
      photo: 'http://dummyimage.com/232x100.png/cc0000/ffffff',
    },
    {
      id: 'dc045145-4172-4e8b-a33c-af3901ae1ba1',
      name: 'Alces alces',
      discipline: "Brown's sheath syndrome, right eye",
      country: 'China',
      address: '79 Corben Pass',
      date: '08/09/2021',
      director: 'Gav Westrey',
      photo: 'http://dummyimage.com/166x100.png/5fa2dd/ffffff',
    },
    {
      id: '4bd5eb4e-477e-481d-be52-b02545531169',
      name: 'Bubo sp.',
      discipline: 'Chronic or unspecified duodenal ulcer with hemorrhage',
      country: 'China',
      address: '5 Magdeline Way',
      date: '07/07/2021',
      director: 'Addison Maron',
      photo: 'http://dummyimage.com/173x100.png/dddddd/000000',
    },
    {
      id: '20afe505-f721-4159-8b13-50dfcb3628ac',
      name: 'unavailable',
      discipline: 'Abn results of function studies of ear and oth sp senses',
      country: 'Brazil',
      address: '91651 Walton Center',
      date: '17/12/2021',
      director: 'Arnaldo Stemp',
      photo: 'http://dummyimage.com/238x100.png/ff4444/ffffff',
    },
    {
      id: 'cdad3a31-6b16-41f4-aa34-e1032857b2c9',
      name: 'Phalacrocorax carbo',
      discipline: 'Localized salmonella infection, unspecified',
      country: 'China',
      address: '20 Main Alley',
      date: '21/12/2021',
      director: 'Riccardo Dornin',
      photo: 'http://dummyimage.com/233x100.png/dddddd/000000',
    },
    {
      id: '04039d87-d166-4b00-9a57-6576c0dea6f5',
      name: 'Coendou prehensilis',
      discipline: 'Unsp inj extn musc/fasc/tend l idx fngr at forarm lv, init',
      country: 'Palestinian Territory',
      address: '8964 Randy Crossing',
      date: '18/09/2021',
      director: 'Jolyn Wrack',
      photo: 'http://dummyimage.com/233x100.png/cc0000/ffffff',
    },
    {
      id: '68f05919-6169-4d8f-bbec-46c9fd1925e2',
      name: 'Bucephala clangula',
      discipline: 'Poisoning by oth antieplptc and sed-hypntc drugs, acc, subs',
      country: 'Colombia',
      address: '1787 David Park',
      date: '29/01/2021',
      director: 'Sarita Woolsey',
      photo: 'http://dummyimage.com/218x100.png/5fa2dd/ffffff',
    },
    {
      id: 'a6ae2548-5507-46bc-a0b1-89fd47bc0ce3',
      name: 'Marmota flaviventris',
      discipline: 'Unspecified firearm discharge, undetermined intent, sequela',
      country: 'Peru',
      address: '3 Service Pass',
      date: '07/09/2021',
      director: 'Wright Simonnin',
      photo: 'http://dummyimage.com/147x100.png/ff4444/ffffff',
    },
    {
      id: '6efc922e-b845-4cdf-abfa-92d6539cfe55',
      name: 'Cebus albifrons',
      discipline: 'Driver of bus injured in clsn w nonmtr vehicle in traf, subs',
      country: 'China',
      address: '90427 Harper Way',
      date: '12/11/2021',
      director: 'Scotty Whisson',
      photo: 'http://dummyimage.com/158x100.png/dddddd/000000',
    },
    {
      id: 'cff161d5-731d-4404-b9fe-9aa0e3d4776e',
      name: 'Ctenophorus ornatus',
      discipline: 'Toxic effect of coral snake venom, accidental, sequela',
      country: 'Thailand',
      address: '53 Oneill Avenue',
      date: '22/11/2021',
      director: 'Izaak McCaw',
      photo: 'http://dummyimage.com/151x100.png/dddddd/000000',
    },
    {
      id: '107089e0-6c16-462f-9575-0ae26f4be146',
      name: 'Mazama gouazoubira',
      discipline: 'Contact with garden tool, initial encounter',
      country: 'France',
      state: 'Île-de-France',
      address: '17 Loomis Point',
      date: '26/10/2021',
      director: 'Glennie Siege',
      photo: 'http://dummyimage.com/126x100.png/5fa2dd/ffffff',
    },
    {
      id: '94d39429-fa80-4a1b-bf6e-4fd1e2549342',
      name: 'Procyon lotor',
      discipline: "Asphyx due to smothr under another person's body, acc, sqla",
      country: 'Japan',
      address: '51 Caliangt Avenue',
      date: '29/03/2021',
      director: 'Dallas Garriock',
      photo: 'http://dummyimage.com/172x100.png/ff4444/ffffff',
    },
    {
      id: '04d16125-af20-4341-9924-553075ded750',
      name: 'Suricata suricatta',
      discipline: 'Underdosing of methadone, sequela',
      country: 'Uzbekistan',
      address: '193 Garrison Alley',
      date: '29/06/2021',
      director: 'Benji Disbury',
      photo: 'http://dummyimage.com/233x100.png/dddddd/000000',
    },
    {
      id: 'b22c741e-78b8-4fa1-9012-a5a608aa5329',
      name: 'Tapirus terrestris',
      discipline: 'Acute eczematoid otitis externa, right ear',
      country: 'France',
      state: 'Nord-Pas-de-Calais',
      address: '98 Schurz Circle',
      date: '12/03/2021',
      director: 'Ludovika Delepine',
      photo: 'http://dummyimage.com/166x100.png/dddddd/000000',
    },
    {
      id: '1a7b9810-151a-4178-8402-642d2fd7ae2e',
      name: 'Sciurus vulgaris',
      discipline: 'Abrasion of unspecified finger, subsequent encounter',
      country: 'Philippines',
      address: '26858 Lighthouse Bay Plaza',
      date: '31/01/2021',
      director: 'Philippa Lockie',
      photo: 'http://dummyimage.com/109x100.png/ff4444/ffffff',
    },
  ];
  
  export { eventsMock };