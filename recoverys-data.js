/*
 * =================================================================================
 * ARQUIVO DE DADOS DAS RECOVERYS - MOTO G34
 * =================================================================================
 * 
 * COMO ADICIONAR UMA NOVA RECOVERY:
 * 
 * 1. Escolha um dos modelos abaixo (de 1 a 10)
 * 2. Preenche as informaçoes entre ASPAS, como 'name, version', etc, os que nao tiverem essas info, deixa em branco
 * 3. Apos preencher, remova o '/*' do inicio e final de cada modelo.
 * 4. Pronto!
 * 5. Salve o arquivo e envie para o GitHub
 * 
 * EXEMPLO: name: "COLOQUE O NOME AQUI",
 * 
 * NÃO ALTERE NADA QUE TENHA { } [ ] OU PALAVRAS COMO "changelog:"
 * =================================================================================
 */

// Lista de Recoverys para o Moto G34
const recoverysData = {
  motog34: [
    // MODELO 1 - TWRP
    {
      name: "TWRP",
      version: "3.7.1",
      description: "Versão oficial do TWRP para Moto G34",
      size: "35MB",
      date: "20/09/2023",
      developer: "TeamWin group",
      url: "https://drive.google.com/uc?export=download&id=1mdbi35geNlhi3vB90nHF0HHwQzG0ORHx",
      download: "https://drive.google.com/uc?export=download&id=1mdbi35geNlhi3vB90nHF0HHwQzG0ORHx",
      lastUpdate: "2024", // Adicionando a última atualização
      details: {
        version: "3.7.1",
        dev: "TeamWin group",
        description: "Versão não oficial do TWRP para Moto G34",
        changelog: [
          "Versão mais recente estável"
        ],
        knownIssues: [],
        notes: [
          "Flashear via fastboot"
        ]
      },
      source: "https://dl.twrp.me/fogos/"
    },
    
    // MODELO 2 - OrangeFOX
    {
      name: "OrangeFOX Não Oficial",
      version: "12.1",
      description: "Versão não oficial do OrangeFOX Recovery para Moto G34",
      size: "40MB",
      date: "2024",
      developer: "OrangeFox team",
      url: "https://github.com/PrintHelloPeople/fogos_recovery/releases",
      download: "https://github.com/PrintHelloPeople/fogos_recovery/releases",
      lastUpdate: "2024", // Adicionando a última atualização
      warning: "Cuidado! OrangeFox foi reportado pelo sistema de raspagem do site como: 'NÃO OFICIAL' e 'DESATUALIZADO', é provável que não funcione ou não seja muito compatível, prossiga com cuidado!",
      details: {
        version: "12.1",
        dev: "OrangeFox team",
        description: "Versão não oficial do OrangeFOX Recovery para Moto G34",
        changelog: [],
        knownIssues: [],
        notes: [
          "Baseado no TWRP",
          "Suporte a criptografia"
        ]
      },
      source: "https://github.com/PrintHelloPeople/fogos_recovery/releases"
    },
    
    // MODELO 3 - PitchBlack
    {
      name: "PitchBlack",
      version: "2.9.0",
      description: "Pitch Black Recovery Project",
      size: "38MB",
      date: "20/07/2023",
      developer: "Pitch Black team",
      unavailable: true,
      message: "Opa! Parece que nosso script não encontrou uma versão dele para o G34 :( mas você pode acompanhar pela Fonte!",
      lastUpdate: "5 de maio", // Adicionando a última atualização
      details: {
        version: "2.9.0",
        dev: "Pitch Black team",
        description: "Pitch Black Recovery Project",
        changelog: [],
        knownIssues: [],
        notes: []
      },
      source: "https://github.com/PitchBlackRecoveryDevices"
    },
    
    // MODELO 4 - SkyHawk
    {
      name: "SkyHawk",
      version: "3.2",
      description: "SkyHawk Recovery Project",
      size: "42MB",
      date: "2023",
      developer: "EpicX",
      unavailable: true,
      message: "Opa! Parece que nosso script não encontrou uma versão dele para o G34 :( mas você pode acompanhar pela Fonte!",
      lastUpdate: "2023", // Adicionando a última atualização
      details: {
        version: "3.2",
        dev: "EpicX",
        description: "SkyHawk Recovery Project",
        changelog: [],
        knownIssues: [],
        notes: []
      },
      source: "https://github.com/SHRP-Reborn"
    },
    
    // MODELO 5
    /*
    {
      name: "",
      version: "",
      description: "",
      size: "",
      date: "",
      developer: "",
      url: "",
      lastUpdate: "", // Adicione aqui a última atualização
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
      lastUpdate: "", // Adicione aqui a última atualização
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
      lastUpdate: "", // Adicione aqui a última atualização
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
      lastUpdate: "", // Adicione aqui a última atualização
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
      lastUpdate: "", // Adicione aqui a última atualização
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
      lastUpdate: "", // Adicione aqui a última atualização
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
    
    // FIM DA LISTA DE RECOVERYS
  ]
};

// =================================================================================
// FUNÇÕES DO SISTEMA - NÃO ALTERE NADA AQUI
// =================================================================================

function getRecoverysByDevice(device) {
  return recoverysData[device] || [];
}

function getAvailableDevicesForRecoverys() {
  return Object.keys(recoverysData);
}

// =================================================================================
// FIM DO ARQUIVO
// =================================================================================