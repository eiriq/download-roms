function getToolsByDevice(device) {
  return [
    {
      name: "MaterialYouGnome",
      developer: "Riq",
      version: "1.0.0",
      description: "Tutorial para colocar customização Material You no GNOME",
      size: "5,9 KB",
      date: "07 de Outubro",
      lastUpdate: "07 de Outubro",
      url: "https://drive.google.com/file/d/1XGCw8g2U6s0RncAoyHouG0vRYqdJj8cb/view?usp=drive_link",
      source: "https://t.me/MotoG34/496793",
      icon: "palette",
      category: "Customização",
      categoryIcon: "palette",
      supportedSystems: ["Ubuntu/Debian", "Arch"],
      unavailable: ["Ubuntu/Debian"],
      downloads: {
        "Arch": "https://drive.google.com/file/d/1XGCw8g2U6s0RncAoyHouG0vRYqdJj8cb/view?usp=drive_link"
      },
      details: {
        description: "Este script permite aplicar a customização Material You no ambiente de desktop GNOME, adaptando as cores do sistema baseado na sua papel de parede.",
        changelog: [
          "Versão inicial lançada",
          "Compatibilidade com Arch Linux",
          "Script de instalação automatizado"
        ],
        knownIssues: [
          "Pode não funcionar corretamente em versões mais antigas do GNOME",
          "Requer reinicialização do sistema após a instalação"
        ],
        notes: [
          "Certifique-se de ter o Python instalado",
          "Faça backup das suas configurações antes de executar",
          "Execute o script com permissões de administrador"
        ]
      },
      tutorial: {
        "Ubuntu/Debian": "# Tutorial para Ubuntu/Debian\n\nEsta versão ainda não está disponível. Aguarde futuras atualizações.",
        "Arch": "# Tutorial para Arch Linux\n\n1. Baixe o script:\n```bash\nwget https://drive.google.com/uc?export=download&id=1XGCw8g2U6s0RncAoyHouG0vRYqdJj8cb -O material-you-gnome.sh\n```\n\n2. Torne o script executável:\n```bash\nchmod +x material-you-gnome.sh\n```\n\n3. Execute o script:\n```bash\n./material-you-gnome.sh\n```\n\n4. Siga as instruções na tela\n\n5. Reinicie o sistema para aplicar as mudanças:\n```bash\nreboot\n```"
      }
    },
    {
      name: "Animações",
      developer: "Riq",
      version: "1.0.0",
      description: "Altere as animações do seu sistema!",
      size: "8,2 KB",
      date: "01 de Outubro",
      lastUpdate: "01 de Outubro",
      url: "https://drive.google.com/drive/folders/1RRbk9mc-5A0-_hSIAGKQQlQ2Hp6L6aWW?usp=sharing",
      source: "https://drive.google.com/drive/folders/1RRbk9mc-5A0-_hSIAGKQQlQ2Hp6L6aWW?usp=sharing",
      icon: "animation",
      category: "Scripts",
      categoryIcon: "code",
      supportedSystems: ["Linux", "Android", "Windows"],
      unavailable: ["Android", "Windows"],
      downloads: {
        "Linux": "https://drive.google.com/drive/folders/1RRbk9mc-5A0-_hSIAGKQQlQ2Hp6L6aWW?usp=sharing"
      },
      details: {
        description: "Script completo para personalizar e modificar as animações do seu sistema, deixando-o mais fluido e personalizado ao seu gosto.",
        changelog: [
          "Versão inicial lançada",
          "Suporte para múltiplos estilos de animação",
          "Configuração simples e intuitiva"
        ],
        knownIssues: [
          "Alguns efeitos podem não funcionar em sistemas mais antigos",
          "Requer reinicialização para aplicar algumas mudanças"
        ],
        notes: [
          "Faça backup das configurações originais",
          "Teste diferentes configurações para encontrar a ideal",
          "Execute com permissões de administrador"
        ]
      },
      tutorial: {
        "Linux": "# Tutorial para Linux\n\n1. Baixe o script do link fornecido\n\n2. Extraia os arquivos:\n```bash\nunzip animacoes.zip\n```\n\n3. Torne o script executável:\n```bash\nchmod +x animacoes.sh\n```\n\n4. Execute o script:\n```bash\nsudo ./animacoes.sh\n```\n\n5. Siga as instruções na tela para personalizar",
        "Android": "# Tutorial para Android\n\nEsta versão ainda não está disponível. Aguarde futuras atualizações.",
        "Windows": "# Tutorial para Windows\n\nEsta versão ainda não está disponível. Aguarde futuras atualizações."
      }
    },
    {
      name: "Bloatwares",
      developer: "Riq",
      version: "1.0.0",
      description: "Remova os bloatwares desnecessários do seu dispositivo!",
      size: "6,4 KB",
      date: "01 de Outubro",
      lastUpdate: "01 de Outubro",
      url: "https://drive.google.com/drive/folders/1RRbk9mc-5A0-_hSIAGKQQlQ2Hp6L6aWW?usp=sharing",
      source: "https://drive.google.com/drive/folders/1RRbk9mc-5A0-_hSIAGKQQlQ2Hp6L6aWW?usp=sharing",
      icon: "delete_sweep",
      category: "Scripts",
      categoryIcon: "code",
      supportedSystems: ["Linux", "Android", "Windows"],
      unavailable: ["Android", "Windows"],
      downloads: {
        "Linux": "https://drive.google.com/drive/folders/1RRbk9mc-5A0-_hSIAGKQQlQ2Hp6L6aWW?usp=sharing"
      },
      details: {
        description: "Ferramenta para remover aplicativos pré-instalados desnecessários (bloatwares) do seu sistema, liberando espaço e melhorando o desempenho.",
        changelog: [
          "Versão inicial lançada",
          "Lista completa de bloatwares comuns",
          "Opção de backup antes da remoção"
        ],
        knownIssues: [
          "Alguns aplicativos do sistema não podem ser removidos",
          "A remoção de certos apps pode afetar funcionalidades"
        ],
        notes: [
          "IMPORTANTE: Faça backup antes de usar",
          "Leia a lista de apps antes de remover",
          "Alguns apps podem ser necessários para o sistema"
        ]
      },
      tutorial: {
        "Linux": "# Tutorial para Linux\n\n1. Baixe o script do link fornecido\n\n2. Torne o script executável:\n```bash\nchmod +x bloatwares.sh\n```\n\n3. Execute o script:\n```bash\nsudo ./bloatwares.sh\n```\n\n4. Revise a lista de aplicativos\n\n5. Confirme a remoção dos apps selecionados",
        "Android": "# Tutorial para Android\n\nEsta versão ainda não está disponível. Aguarde futuras atualizações.",
        "Windows": "# Tutorial para Windows\n\nEsta versão ainda não está disponível. Aguarde futuras atualizações."
      }
    },
    {
      name: "Taxa de Atualização",
      developer: "Riq",
      version: "1.0.0",
      description: "Descubra e alterne entre as taxas de atualização do seu dispositivo!",
      size: "4,8 KB",
      date: "01 de Outubro",
      lastUpdate: "01 de Outubro",
      url: "https://drive.google.com/drive/folders/1RRbk9mc-5A0-_hSIAGKQQlQ2Hp6L6aWW?usp=sharing",
      source: "https://drive.google.com/drive/folders/1RRbk9mc-5A0-_hSIAGKQQlQ2Hp6L6aWW?usp=sharing",
      icon: "refresh",
      category: "Scripts",
      categoryIcon: "code",
      supportedSystems: ["Linux", "Android", "Windows"],
      unavailable: ["Android", "Windows"],
      downloads: {
        "Linux": "https://drive.google.com/drive/folders/1RRbk9mc-5A0-_hSIAGKQQlQ2Hp6L6aWW?usp=sharing"
      },
      details: {
        description: "Script para verificar e modificar a taxa de atualização (refresh rate) da tela do seu dispositivo, permitindo alternar entre diferentes valores para economizar bateria ou melhorar a fluidez.",
        changelog: [
          "Versão inicial lançada",
          "Detecção automática de taxas suportadas",
          "Interface simples de seleção"
        ],
        knownIssues: [
          "Alguns dispositivos podem não suportar todas as taxas",
          "Mudanças podem não persistir após reinicialização"
        ],
        notes: [
          "Verifique as taxas suportadas pelo seu dispositivo",
          "Taxas mais altas consomem mais bateria",
          "Reinicie o sistema se necessário"
        ]
      },
      tutorial: {
        "Linux": "# Tutorial para Linux\n\n1. Baixe o script do link fornecido\n\n2. Torne o script executável:\n```bash\nchmod +x taxa-atualizacao.sh\n```\n\n3. Execute o script:\n```bash\nsudo ./taxa-atualizacao.sh\n```\n\n4. Visualize as taxas disponíveis\n\n5. Selecione a taxa desejada",
        "Android": "# Tutorial para Android\n\nEsta versão ainda não está disponível. Aguarde futuras atualizações.",
        "Windows": "# Tutorial para Windows\n\nEsta versão ainda não está disponível. Aguarde futuras atualizações."
      }
    },
    {
      name: "Saúde da Bateria",
      developer: "Riq",
      version: "1.0.0",
      description: "Descubra a porcentagem da saúde de sua bateria!",
      size: "3,2 KB",
      date: "01 de Outubro",
      lastUpdate: "01 de Outubro",
      url: "https://drive.google.com/drive/folders/1RRbk9mc-5A0-_hSIAGKQQlQ2Hp6L6aWW?usp=sharing",
      source: "https://drive.google.com/drive/folders/1RRbk9mc-5A0-_hSIAGKQQlQ2Hp6L6aWW?usp=sharing",
      icon: "battery_full",
      category: "Scripts",
      categoryIcon: "code",
      supportedSystems: ["Linux", "Android", "Windows"],
      unavailable: ["Android", "Windows"],
      downloads: {
        "Linux": "https://drive.google.com/drive/folders/1RRbk9mc-5A0-_hSIAGKQQlQ2Hp6L6aWW?usp=sharing"
      },
      details: {
        description: "Ferramenta para verificar a saúde atual da bateria do seu dispositivo, mostrando a capacidade real em comparação com a original e outras informações importantes.",
        changelog: [
          "Versão inicial lançada",
          "Informações detalhadas da bateria",
          "Cálculo de degradação"
        ],
        knownIssues: [
          "Alguns dispositivos podem não reportar todos os dados",
          "Precisão pode variar entre dispositivos"
        ],
        notes: [
          "Execute várias vezes para obter média mais precisa",
          "Valores abaixo de 80% indicam degradação significativa",
          "Considere substituir se abaixo de 70%"
        ]
      },
      tutorial: {
        "Linux": "# Tutorial para Linux\n\n1. Baixe o script do link fornecido\n\n2. Torne o script executável:\n```bash\nchmod +x saude-bateria.sh\n```\n\n3. Execute o script:\n```bash\nsudo ./saude-bateria.sh\n```\n\n4. Aguarde a análise completa\n\n5. Visualize as informações da bateria",
        "Android": "# Tutorial para Android\n\nEsta versão ainda não está disponível. Aguarde futuras atualizações.",
        "Windows": "# Tutorial para Windows\n\nEsta versão ainda não está disponível. Aguarde futuras atualizações."
      }
    }
  ];
}

//feito com ♡ por Riq:)
