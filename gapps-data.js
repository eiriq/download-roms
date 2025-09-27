/*
 * =================================================================================
 * ARQUIVO DE DADOS DOS GAPPS - MOTO G34
 * =================================================================================
 * 
 * COMO ADICIONAR UM NOVO GAPP:
 * 
 * 1. Escolha um dos modelos abaixo (de 1 a 10)
 * 2. Preencha as informações entre ASPAS, como 'name, version', etc, os que não tiverem essas info, deixe em branco
 * 3. Após preencher, remova o '/*' do início e final de cada modelo.
 * 4. Pronto!
 * 5. Salve o arquivo e envie para o GitHub
 * 
 * EXEMPLO: name: "COLOQUE O NOME AQUI",
 * 
 * NÃO ALTERE NADA QUE TENHA { } [ ] OU PALAVRAS COMO "downloads:"
 * =================================================================================
 */

// Lista de GApps para o Moto G34
const gappsData = {
  motog34: [
    // MODELO 1 - OpenGapps
    {
      name: "OpenGapps",
      version: "Variável",
      description: "Pacote de Google Apps mais popular para Android",
      size: "Variável",
      date: "2022",
      developer: "MastahF",
      url: "https://opengapps.org/",
      lastUpdate: "2022",
      supportedSystems: ["10", "11"],
      downloads: {
        "10": "https://drive.google.com/drive/folders/1v54xlBwsh-GyK2VmHKh9fIFdfRUR8ZmG?usp=sharing",
        "11": "https://drive.google.com/drive/folders/1v54xlBwsh-GyK2VmHKh9fIFdfRUR8ZmG?usp=sharing"
      },
      details: {
        version: "Variável",
        dev: "MastahF",
        description: "Pacote de Google Apps mais popular para Android",
        changelog: [
          "Versão mais recente estável"
        ],
        knownIssues: [],
        notes: [
          "Diversas variantes disponíveis (pico, nano, micro, mini, stock, full, etc)",
          "Compatível com a maioria das ROMs customizadas"
        ]
      },
      source: "https://opengapps.org/"
    },
    
    // MODELO 2 - NikGApps
    {
      name: "NikGApps",
      version: "Variável",
      description: "Pacote de Google Apps otimizado e customizável",
      size: "Variável",
      date: "15/07/2023",
      developer: "Nikhil Menghan",
      url: "https://nikgapps.com/",
      lastUpdate: "15 de julho",
      supportedSystems: ["12", "13", "14"],
      downloads: {
        "12": "https://drive.google.com/drive/folders/1QEiLW2ZWdFeJtiInr1z3g3Pg3r3dPcXq?usp=sharing",
        "13": "https://drive.google.com/drive/folders/1QEiLW2ZWdFeJtiInr1z3g3Pg3r3dPcXq?usp=sharing",
        "14": "https://drive.google.com/drive/folders/1QEiLW2ZWdFeJtiInr1z3g3Pg3r3dPcXq?usp=sharing"
      },
      details: {
        version: "Variável",
        dev: "Nikhil Menghan",
        description: "Pacote de Google Apps otimizado e customizável",
        changelog: [],
        knownIssues: [],
        notes: [
          "Permite maior personalização dos pacotes",
          "Otimizado para melhor desempenho"
        ]
      },
      source: "https://nikgapps.com/"
    },
    
    // MODELO 3 - LiteGapps
    {
      name: "LiteGapps",
      version: "Variável",
      description: "Pacote de Google Apps leve e minimalista",
      size: "Variável",
      date: "07/07/2023",
      developer: "@wahyu6070",
      url: "https://sourceforge.net/projects/litegapps/files/litegapps/arm64/36/",
      lastUpdate: "7 de Julho",
      supportedSystems: ["12", "13", "14", "15", "16"],
      downloads: {
        "12": "https://drive.google.com/drive/folders/1n1e4apcrt5Oce6_bHPODFSxsSQdm8mU6?usp=sharing",
        "13": "https://drive.google.com/drive/folders/1n1e4apcrt5Oce6_bHPODFSxsSQdm8mU6?usp=sharing",
        "14": "https://drive.google.com/drive/folders/1n1e4apcrt5Oce6_bHPODFSxsSQdm8mU6?usp=sharing",
        "15": "https://drive.google.com/drive/folders/1n1e4apcrt5Oce6_bHPODFSxsSQdm8mU6?usp=sharing",
        "16": "https://drive.google.com/drive/folders/1n1e4apcrt5Oce6_bHPODFSxsSQdm8mU6?usp=sharing"
      },
      details: {
        version: "Variável",
        dev: "@wahyu6070",
        description: "Pacote de Google Apps leve e minimalista",
        changelog: [],
        knownIssues: [],
        notes: [
          "Ideal para dispositivos com pouco espaço de armazenamento",
          "Contém apenas os aplicativos essenciais do Google"
        ]
      },
      source: "https://sourceforge.net/projects/litegapps/files/litegapps/arm64/36/"
    },
    
    // MODELO 4 - MindTheGApps
    {
      name: "MindTheGApps",
      version: "Variável",
      description: "Pacote de Google Apps focado em estabilidade",
      size: "Variável",
      date: "12/08/2023",
      developer: "jrizzoli",
      url: "https://github.com/MindTheGapps",
      lastUpdate: "12 de agosto",
      supportedSystems: ["12.1", "13", "14", "15", "16"],
      downloads: {
        "12.1": "https://drive.google.com/drive/folders/1Js1xxdJxA7kMODA73825pKYcyizQiPVS?usp=sharing",
        "13": "https://drive.google.com/drive/folders/1Js1xxdJxA7kMODA73825pKYcyizQiPVS?usp=sharing",
        "14": "https://drive.google.com/drive/folders/1Js1xxdJxA7kMODA73825pKYcyizQiPVS?usp=sharing",
        "15": "https://drive.google.com/drive/folders/1Js1xxdJxA7kMODA73825pKYcyizQiPVS?usp=sharing",
        "16": "https://drive.google.com/drive/folders/1Js1xxdJxA7kMODA73825pKYcyizQiPVS?usp=sharing"
      },
      details: {
        version: "Variável",
        dev: "jrizzoli",
        description: "Pacote de Google Apps focado em estabilidade",
        changelog: [],
        knownIssues: [],
        notes: [
          "Foco em estabilidade e compatibilidade",
          "Atualizações regulares"
        ]
      },
      source: "https://github.com/MindTheGapps"
    },
    
    // MODELO 5 - Flame GApps
    {
      name: "Flame GApps",
      version: "Variável",
      description: "Pacote de Google Apps com foco em desempenho",
      size: "Variável",
      date: "2022",
      developer: "ZYNTAX",
      url: "https://flamegapps.github.io/download#downloads",
      lastUpdate: "2022",
      supportedSystems: ["12", "12.1"],
      downloads: {
        "12": "https://drive.google.com/drive/folders/1S3IJjCK4LiZezU9uZ7hfifTZoE-DdNfY?usp=sharing",
        "12.1": "https://drive.google.com/drive/folders/1S3IJjCK4LiZezU9uZ7hfifTZoE-DdNfY?usp=sharing"
      },
      details: {
        version: "Variável",
        dev: "ZYNTAX",
        description: "Pacote de Google Apps com foco em desempenho",
        changelog: [],
        knownIssues: [],
        notes: [
          "Otimizado para melhor desempenho",
          "Versões específicas para diferentes versões do Android"
        ]
      },
      source: "https://flamegapps.github.io/download#downloads"
    },
    
    // MODELO 6
    /*
    {
      name: "",
      version: "",
      description: "",
      size: "",
      date: "",
      developer: "",
      url: "",
      lastUpdate: "",
      supportedSystems: [],
      downloads: {},
      details: {
        version: "",
        dev: "",
        description: "",
        changelog: [],
        knownIssues: [],
        notes: []
      },
      source: ""
    },
    */
    
    // MODELO 7
    /*
    {
      name: "",
      version: "",
      description: "",
      size: "",
      date: "",
      developer: "",
      url: "",
      lastUpdate: "",
      supportedSystems: [],
      downloads: {},
      details: {
        version: "",
        dev: "",
        description: "",
        changelog: [],
        knownIssues: [],
        notes: []
      },
      source: ""
    },
    */
    
    // MODELO 8
    /*
    {
      name: "",
      version: "",
      description: "",
      size: "",
      date: "",
      developer: "",
      url: "",
      lastUpdate: "",
      supportedSystems: [],
      downloads: {},
      details: {
        version: "",
        dev: "",
        description: "",
        changelog: [],
        knownIssues: [],
        notes: []
      },
      source: ""
    },
    */
    
    // MODELO 9
    /*
    {
      name: "",
      version: "",
      description: "",
      size: "",
      date: "",
      developer: "",
      url: "",
      lastUpdate: "",
      supportedSystems: [],
      downloads: {},
      details: {
        version: "",
        dev: "",
        description: "",
        changelog: [],
        knownIssues: [],
        notes: []
      },
      source: ""
    },
    */
    
    // MODELO 10
    /*
    {
      name: "",
      version: "",
      description: "",
      size: "",
      date: "",
      developer: "",
      url: "",
      lastUpdate: "",
      supportedSystems: [],
      downloads: {},
      details: {
        version: "",
        dev: "",
        description: "",
        changelog: [],
        knownIssues: [],
        notes: []
      },
      source: ""
    },
    */
    
    // FIM DA LISTA DE GAPPS
  ]
};

// =================================================================================
// FUNÇÕES DO SISTEMA - NÃO ALTERE NADA AQUI
// =================================================================================

function getGappsByDevice(device) {
  return gappsData[device] || [];
}

function getAvailableDevicesForGapps() {
  return Object.keys(gappsData);
}

// =================================================================================
// FIM DO ARQUIVO
// =================================================================================
