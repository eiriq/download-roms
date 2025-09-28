/*
 * =================================================================================
 * ARQUIVO DE DADOS DOS ROOTS - MOTO G34
 * =================================================================================
 * 
 * COMO ADICIONAR UM NOVO ROOT:
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

// Lista de Roots para o Moto G34
const rootsData = {
  motog34: [
    // MODELO 1 - Magisk
    {
      name: "Magisk",
      version: "30.2",
      description: "Magisk - A solução de root mais popular para Android",
      size: "8MB",
      date: "14/05/2023",
      developer: "John Wu",
      url: "https://drive.usercontent.google.com/download?id=1sWWukgBjxgpENLEfUPnAUSmyTjzdOB0M&export=download&authuser=0",
      download: "https://drive.usercontent.google.com/download?id=1sWWukgBjxgpENLEfUPnAUSmyTjzdOB0M&export=download&authuser=0",
      lastUpdate: "6 de Agosto", // Adicionando a última atualização
      details: {
        version: "30.2",
        dev: "John Wu",
        description: "Magisk - A solução de root mais popular para Android",
        changelog: [
          "Versão mais recente estável"
        ],
        knownIssues: [],
        notes: [
          "Instale via TWRP ou aplicativo"
        ]
      },
      source: "https://github.com/topjohnwu/magisk/releases"
    },
    
    // MODELO 2 - Apatch
    {
      name: "Apatch",
      version: "11.10.7",
      description: "Apatch - Alternativa ao Magisk com foco em segurança",
      size: "6MB",
      date: "07/07/2023",
      developer: "bmax121",
      url: "https://drive.usercontent.google.com/download?id=1gVJUngV6FDYgR372bPGKR4Co-Z9LAV29&export=download&authuser=0",
      download: "https://drive.usercontent.google.com/download?id=1gVJUngV6FDYgR372bPGKR4Co-Z9LAV29&export=download&authuser=0",
      lastUpdate: "7 de Julho", // Adicionando a última atualização
      details: {
        version: "11.10.7",
        dev: "bmax121",
        description: "Apatch - Alternativa ao Magisk com foco em segurança",
        changelog: [],
        knownIssues: [],
        notes: [
          "Baseado no KernelSU",
          "Não modifica a partição system"
        ]
      },
      source: "https://github.com/bmax121/APatch/releases/tag/11107"
    },
   
    */
    // MODELO 3 - KingRoot
    {
      name: "KingRoot",
      version: "5.3.7",
      description: "KingRoot - Solução de root com um clique",
      size: "10MB",
      date: "2019",
      developer: "KingxTeam",
      url: "https://drive.google.com/file/d/1BXn6DJGAe8Xxls_C3419_cDpQIzBATVy/view?usp=drive_link",
      download: "https://drive.google.com/file/d/1BXn6DJGAe8Xxls_C3419_cDpQIzBATVy/view?usp=drive_link",
      lastUpdate: "2019", // Adicionando a última atualização (apenas o ano)
      details: {
        version: "5.3.7",
        dev: "KingxTeam",
        description: "KingRoot - Solução de root com um clique",
        changelog: [
          "Versão mais recente estável"
        ],
        knownIssues: [],
        notes: [
          "Pode não funcionar em todos os dispositivos",
          "Pode conter anúncios e indicar falso positivo em vírus!"
        ]
      },
      source: "https://kingrootofficial.com/download/kingroot-v5-3-7-20180619/"
    },
    */
    
    // MODELO 4 - KernelSU
    {
      name: "KernelSU",
      version: "1.0.5",
      description: "KernelSU - Solução de root baseada em kernel",
      size: "5MB",
      date: "23/04/2023",
      developer: "Tiann",
      url: "https://github.com/tiann/KernelSU",
      download: "https://github.com/tiann/KernelSU/releases/tag/v1.0.5",
      lastUpdate: "24 de abril", // Adicionando a última atualização
      details: {
        version: "1.0.5",
        dev: "Tiann",
        description: "KernelSU - Solução de root baseada em kernel",
        changelog: [],
        knownIssues: [],
        notes: [
          "Necessita kernel compatível",
          "Mais seguro que soluções tradicionais"
        ]
      },
      source: "https://github.com/tiann/KernelSU"
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
    
    // FIM DA LISTA DE ROOTS
  ]
};

// =================================================================================
// FUNÇÕES DO SISTEMA - NÃO ALTERE NADA AQUI
// =================================================================================

function getRootsByDevice(device) {
  return rootsData[device] || [];
}

function getAvailableDevicesForRoots() {
  return Object.keys(rootsData);
}

// =================================================================================
// FIM DO ARQUIVO

// =================================================================================
