/*
 * =================================================================================
 * ARQUIVO DE DADOS DAS FERRAMENTAS - MOTO G34
 * =================================================================================
 * 
 * COMO ADICIONAR UMA NOVA FERRAMENTA:
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

// Lista de Ferramentas para o Moto G34
const toolsData = {
  motog34: [
    // MODELO 1 - Alterar Animações
    {
      name: "Alterar Animações",
      version: "1.0.0",
      description: "Modifique as animações do seu sistema e deixe seu sistema mais rápido ou mais lento!",
      size: "2.1 MB",
      date: "26/09/2023",
      developer: "DevTools",
      url: "#",
      lastUpdate: "26 de setembro",
      supportedSystems: ["Linux", "Windows", "Android"],
      downloads: {
        "Linux": "https://drive.google.com/drive/folders/1ABC123DEF456GHI789JKL012MNO345PQR?usp=sharing",
        "Windows": "https://drive.google.com/drive/folders/1ABC123DEF456GHI789JKL012MNO345PQR?usp=sharing",
        "Android": "https://drive.google.com/drive/folders/1ABC123DEF456GHI789JKL012MNO345PQR?usp=sharing"
      },
      details: {
        version: "1.0.0",
        dev: "DevTools",
        description: "Modifique as animações do seu sistema e deixe seu sistema mais rápido ou mais lento!",
        changelog: [
          "Versão inicial lançada",
          "Suporte para múltiplas plataformas",
          "Interface intuitiva para ajustes"
        ],
        knownIssues: [
          "Em alguns dispositivos, pode ser necessário reiniciar para aplicar as alterações"
        ],
        notes: [
          "Valores mais baixos = animações mais rápidas",
          "Valores mais altos = animações mais lentas",
          "Recomendado: 0.5x para melhor performance"
        ]
      },
      source: "https://github.com/devtools/animation-changer",
      category: "Scripts",
      categoryIcon: "animation",
      tutorial: {
        "Linux": "Para executar este script no Linux:\n1. Abra o terminal\n2. Navegue até a pasta onde salvou o arquivo\n3. Dê permissão de execução: chmod +x animation-changer.sh\n4. Execute o script: ./animation-changer.sh\n5. Siga as instruções na tela",
        "Windows": "Este script ainda não tem uma versão para Windows! :( Se quiser, solicite uma versão aqui embaixo!",
        "Android": "Este script ainda não tem uma versão para Android! :( Se quiser, solicite uma versão aqui embaixo!"
      },
      unavailable: ["Windows", "Android"]
    },
    
    // MODELO 2 - Alterar Taxa de Atualização
    {
      name: "Alterar Taxa de Atualização",
      version: "1.2.0",
      description: "Descubra as taxas que seu display suporta e modifique-as facilmente!",
      size: "1.8 MB",
      date: "15/09/2023",
      developer: "DisplayTools",
      url: "#",
      lastUpdate: "15 de setembro",
      supportedSystems: ["Linux"],
      downloads: {
        "Linux": "https://drive.google.com/drive/folders/1DEF456GHI789JKL012MNO345PQR678STU?usp=sharing"
      },
      details: {
        version: "1.2.0",
        dev: "DisplayTools",
        description: "Descubra as taxas que seu display suporta e modifique-as facilmente!",
        changelog: [
          "Adicionado suporte para mais modelos de tela",
          "Melhorias na detecção automática",
          "Correção de bugs em monitores específicos"
        ],
        knownIssues: [
          "Alguns monitores podem não reportar corretamente as taxas suportadas"
        ],
        notes: [
          "Taxas mais altas consomem mais bateria",
          "Nem todos os aplicativos se beneficiam de taxas altas",
          "Recomendado: 60Hz para equilíbrio entre performance e consumo"
        ]
      },
      source: "https://github.com/displaytools/refresh-rate-changer",
      category: "Scripts",
      categoryIcon: "screen_rotation",
      tutorial: {
        "Linux": "Para executar este script no Linux:\n1. Abra o terminal\n2. Navegue até a pasta onde salvou o arquivo\n3. Dê permissão de execução: chmod +x refresh-rate-changer.sh\n4. Execute o script: ./refresh-rate-changer.sh\n5. Siga as instruções na tela para selecionar a taxa desejada"
      },
      unavailable: []
    },
    
    // MODELO 3 - Saúde da Bateria
    {
      name: "Saúde da Bateria",
      version: "2.0.1",
      description: "Cheque a saúde da bateria, a capacidade total e quanto ela ainda tem!",
      size: "3.5 MB",
      date: "20/09/2023",
      developer: "BatteryTools",
      url: "#",
      lastUpdate: "20 de setembro",
      supportedSystems: ["Linux"],
      downloads: {
        "Linux": "https://drive.google.com/drive/folders/1GHI789JKL012MNO345PQR678STU901VWX?usp=sharing"
      },
      details: {
        version: "2.0.1",
        dev: "BatteryTools",
        description: "Cheque a saúde da bateria, a capacidade total e quanto ela ainda tem!",
        changelog: [
          "Interface redesenhada para melhor visualização",
          "Adicionado gráficos de degradação ao longo do tempo",
          "Correção de leitura em alguns modelos de bateria"
        ],
        knownIssues: [
          "Em notebooks, pode mostrar informações incorretas quando múltiplas baterias estão presentes"
        ],
        notes: [
          "Baterias abaixo de 80% da capacidade original podem precisar de substituição",
          "Calibrações periódicas ajudam a manter leituras precisas",
          "Evite descarregar completamente a bateria regularmente"
        ]
      },
      source: "https://github.com/batterytools/battery-health",
      category: "Scripts",
      categoryIcon: "battery_charging_full",
      tutorial: {
        "Linux": "Para executar este script no Linux:\n1. Abra o terminal\n2. Navegue até a pasta onde salvou o arquivo\n3. Dê permissão de execução: chmod +x battery-health.sh\n4. Execute o script: ./battery-health.sh\n5. Aguarde a análise completa da bateria"
      },
      unavailable: []
    },
    
    // MODELO 4 - Debloater
    {
      name: "Debloater",
      version: "1.5.2",
      description: "Desinstale facilmente bloatwares (aplicativos desnecessários) do seu Android!",
      size: "4.2 MB",
      date: "10/09/2023",
      developer: "AndroidTools",
      url: "#",
      lastUpdate: "10 de setembro",
      supportedSystems: ["Linux"],
      downloads: {
        "Linux": "https://drive.google.com/drive/folders/1JKL012MNO345PQR678STU901VWX234YZA?usp=sharing"
      },
      details: {
        version: "1.5.2",
        dev: "AndroidTools",
        description: "Desinstale facilmente bloatwares (aplicativos desnecessários) do seu Android!",
        changelog: [
          "Lista expandida de bloatwares conhecidos",
          "Melhorias na interface de seleção",
          "Adicionada função de backup antes da remoção"
        ],
        knownIssues: [
          "Alguns aplicativos do sistema podem ser reinstalados após atualizações OTA"
        ],
        notes: [
          "Sempre faça backup antes de remover aplicativos",
          "Cuidado ao remover aplicativos que possam ser necessários para o funcionamento do sistema",
          "Alguns aplicativos podem precisar de root para serem removidos"
        ]
      },
      source: "https://github.com/androidtools/debloater",
      category: "Scripts",
      categoryIcon: "delete_sweep",
      tutorial: {
        "Linux": "Para executar este script no Linux:\n1. Conecte seu dispositivo Android via USB com depuração USB ativada\n2. Abra o terminal\n3. Navegue até a pasta onde salvou o arquivo\n4. Dê permissão de execução: chmod +x debloater.sh\n5. Execute o script: ./debloater.sh\n6. Siga as instruções para selecionar os aplicativos a serem removidos"
      },
      unavailable: []
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
      source: "",
      category: "",
      categoryIcon: "",
      tutorial: {},
      unavailable: []
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
      source: "",
      category: "",
      categoryIcon: "",
      tutorial: {},
      unavailable: []
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
      source: "",
      category: "",
      categoryIcon: "",
      tutorial: {},
      unavailable: []
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
      source: "",
      category: "",
      categoryIcon: "",
      tutorial: {},
      unavailable: []
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
      source: "",
      category: "",
      categoryIcon: "",
      tutorial: {},
      unavailable: []
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
      source: "",
      category: "",
      categoryIcon: "",
      tutorial: {},
      unavailable: []
    },
    */
    
    // FIM DA LISTA DE FERRAMENTAS
  ]
};

// =================================================================================
// FUNÇÕES DO SISTEMA - NÃO ALTERE NADA AQUI
// =================================================================================

function getToolsByDevice(device) {
  return toolsData[device] || [];
}

function getAvailableDevicesForTools() {
  return Object.keys(toolsData);
}

// =================================================================================
// FIM DO ARQUIVO
// =================================================================================