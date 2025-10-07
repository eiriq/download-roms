# JavaScript (tools-data.js)

```javascript
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
      url: "https://drive.google.com/uc?export=download&id=1XGCw8g2U6s0RncAoyHouG0vRYqdJj8cb",
      source: "https://t.me/MotoG34/496793",
      icon: "palette",
      category: "Customização",
      categoryIcon: "palette",
      supportedSystems: ["Ubuntu/Debian", "Arch"],
      unavailable: ["Ubuntu/Debian"],
      downloads: {
        "Arch": "https://drive.google.com/uc?export=download&id=1XGCw8g2U6s0RncAoyHouG0vRYqdJj8cb"
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
      name: "Otimizador de Sistema",
      developer: "Riq",
      version: "2.1.0",
      description: "Script para otimizar o desempenho do sistema",
      size: "12,3 KB",
      date: "15 de Outubro",
      lastUpdate: "15 de Outubro",
      url: "https://drive.google.com/uc?export=download&id=abc123def456",
      source: "https://t.me/MotoG34/49680",
      icon: "speed",
      category: "Scripts",
      categoryIcon: "code",
      supportedSystems: ["Ubuntu/Debian", "Arch", "Fedora"],
      downloads: {
        "Ubuntu/Debian": "https://drive.google.com/uc?export=download&id=abc123def456",
        "Arch": "https://drive.google.com/uc?export=download&id=abc123def456",
        "Fedora": "https://drive.google.com/uc?export=download&id=abc123def456"
      },
      details: {
        description: "Script completo para otimizar o desempenho do seu sistema Linux, limpando arquivos temporários, otimizando serviços e melhorando o uso de memória.",
        changelog: [
          "Adicionada otimização para Fedora",
          "Melhorado o algoritmo de limpeza",
          "Corrigidos bugs em sistemas com menos de 4GB de RAM"
        ],
        knownIssues: [
          "Pode conflitar com outros otimizadores de sistema",
          "Em sistemas muito antigos pode não funcionar corretamente"
        ],
        notes: [
          "Execute como root ou com sudo",
          "Faça backup antes de executar",
          "Recomendado executar uma vez por mês"
        ]
      },
      tutorial: {
        "Ubuntu/Debian": "# Tutorial para Ubuntu/Debian\n\n1. Baixe o script:\n```bash\nwget https://drive.google.com/uc?export=download&id=abc123def456 -O otimizador.sh\n```\n\n2. Torne o script executável:\n```bash\nchmod +x otimizador.sh\n```\n\n3. Execute o script:\n```bash\nsudo ./otimizador.sh\n```\n\n4. Siga as instruções na tela",
        "Arch": "# Tutorial para Arch Linux\n\n1. Baixe o script:\n```bash\nwget https://drive.google.com/uc?export=download&id=abc123def456 -O otimizador.sh\n```\n\n2. Torne o script executável:\n```bash\nchmod +x otimizador.sh\n```\n\n3. Execute o script:\n```bash\nsudo ./otimizador.sh\n```\n\n4. Siga as instruções na tela",
        "Fedora": "# Tutorial para Fedora\n\n1. Baixe o script:\n```bash\nwget https://drive.google.com/uc?export=download&id=abc123def456 -O otimizador.sh\n```\n\n2. Torne o script executável:\n```bash\nchmod +x otimizador.sh\n```\n\n3. Execute o script:\n```bash\nsudo ./otimizador.sh\n```\n\n4. Siga as instruções na tela"
      }
    },
    {
      name: "Limpeza de Cache",
      developer: "Riq",
      version: "1.5.2",
      description: "Ferramenta para limpar caches e arquivos temporários",
      size: "8,7 KB",
      date: "10 de Outubro",
      lastUpdate: "10 de Outubro",
      url: "https://drive.google.com/uc?export=download&id=def789ghi012",
      source: "https://t.me/MotoG34/49681",
      icon: "cleaning_services",
      category: "Scripts",
      categoryIcon: "code",
      supportedSystems: ["Ubuntu/Debian", "Arch", "Fedora", "openSUSE"],
      downloads: {
        "Ubuntu/Debian": "https://drive.google.com/uc?export=download&id=def789ghi012",
        "Arch": "https://drive.google.com/uc?export=download&id=def789ghi012",
        "Fedora": "https://drive.google.com/uc?export=download&id=def789ghi012",
        "openSUSE": "https://drive.google.com/uc?export=download&id=def789ghi012"
      },
      details: {
        description: "Script para limpar caches de sistema, navegadores e aplicativos, liberando espaço em disco e melhorando o desempenho geral.",
        changelog: [
          "Adicionado suporte para openSUSE",
          "Melhorada a limpeza de cache do navegador",
          "Corrigido bug na limpeza de logs antigos"
        ],
        knownIssues: [
          "Pode remover senhas salvas em alguns navegadores",
          "Em sistemas com pouco espaço livre pode levar mais tempo"
        ],
        notes: [
          "Execute como root ou com sudo",
          "Feche navegadores antes de executar",
          "O processo pode levar vários minutos"
        ]
      },
      tutorial: {
        "Ubuntu/Debian": "# Tutorial para Ubuntu/Debian\n\n1. Baixe o script:\n```bash\nwget https://drive.google.com/uc?export=download&id=def789ghi012 -O limpeza.sh\n```\n\n2. Torne o script executável:\n```bash\nchmod +x limpeza.sh\n```\n\n3. Execute o script:\n```bash\nsudo ./limpeza.sh\n```\n\n4. Siga as instruções na tela",
        "Arch": "# Tutorial para Arch Linux\n\n1. Baixe o script:\n```bash\nwget https://drive.google.com/uc?export=download&id=def789ghi012 -O limpeza.sh\n```\n\n2. Torne o script executável:\n```bash\nchmod +x limpeza.sh\n```\n\n3. Execute o script:\n```bash\nsudo ./limpeza.sh\n```\n\n4. Siga as instruções na tela",
        "Fedora": "# Tutorial para Fedora\n\n1. Baixe o script:\n```bash\nwget https://drive.google.com/uc?export=download&id=def789ghi012 -O limpeza.sh\n```\n\n2. Torne o script executável:\n```bash\nchmod +x limpeza.sh\n```\n\n3. Execute o script:\n```bash\nsudo ./limpeza.sh\n```\n\n4. Siga as instruções na tela",
        "openSUSE": "# Tutorial para openSUSE\n\n1. Baixe o script:\n```bash\nwget https://drive.google.com/uc?export=download&id=def789ghi012 -O limpeza.sh\n```\n\n2. Torne o script executável:\n```bash\nchmod +x limpeza.sh\n```\n\n3. Execute o script:\n```bash\nsudo ./limpeza.sh\n```\n\n4. Siga as instruções na tela"
      }
    }
  ];
}

//feito com ♡ por Riq:)


