// roms-data.js
// Dados das ROMs para o Moto G34

const romsData = {
  motog34: [
    {
      name: "LOS OFICIAL",
      version: "Android 15",
      description: "Versão oficial da LineageOS, estável e com suporte contínuo.",
      size: "1.2 GB",
      date: "15/05/2023",
      developer: "LineageOS Team",
      url: "https://drive.google.com/uc?export=download&id=1Y0hCeOZdxHoVgW1IQ3Ds_hzq6V8moIG0",
      details: {
        version: "Android 15",
        dev: "LineageOS Team",
        description: "Versão oficial da LineageOS",
        changelog: [],
        knownIssues: [],
        notes: []
      },
      source: "https://t.me/MotoG34/471177"
    },
    {
      name: "LUNARIS OFICIAL",
      version: "Android 16",
      description: "Versão oficial da ROM Lunaris para a nova versão 16 do Android!",
      size: "1.3 GB",
      date: "22/06/2023",
      developer: "JNW_SG",
      url: "https://drive.google.com/uc?export=download&id=1QNut_vxQVrIHGnT1qrDSHiDtMxhtcOhT",
      details: {
        version: "Android 16",
        dev: "JNW_SG",
        description: "Versão oficial da ROM Lunaris para a nova versão 16 do Android!",
        changelog: [],
        knownIssues: [],
        notes: [
          "Versão somente com GAPPS! (Google Apps)"
        ]
      },
      source: "https://t.me/lunaris_update"
    },
    {
      name: "LOS UNOFFICIAL",
      version: "Android 15",
      description: "Versão não oficial do LineageOS com ajustes e melhorias.",
      size: "1.2 GB",
      date: "10/07/2023",
      developer: "IraWanSalt",
      url: "https://drive.google.com/uc?export=download&id=17lYOIeu77sjOtVwEBqFJgvl-crEqv3OP",
      details: {
        version: "Android 15",
        dev: "IraWanSalt",
        description: "Versão não oficial da ROM LineageOS (LOS), desenvolvida por IraWanSalt",
        changelog: [
          "Corrigido volume ficando no máximo mesmo no nível mais baixo durante chamadas VoIP",
          "Corrigido problema de ausência de som ao mudar para o alto-falante durante chamadas VoIP",
          "Corrigido problema no microfone durante chamadas",
          "Corrigido estalo/ruído em alguns jogos",
          "Corrigido problema de desligamento automático da tela durante sessões de jogos ou em altas temperaturas"
        ],
        knownIssues: [
          "O Auto HDR no MotoCamera às vezes causa travamentos; solução alternativa: desativar o HDR"
        ],
        notes: [
          "Baseado em OSS",
          "GApps incluídos",
          "Build assinada e usuário",
          "SELinux: Enforcing (modo restritivo)",
          "Play Integrity: Fail (Leia aqui: link)",
          "Dolby Atmos e MotoCamera incluídos"
        ]
      },
      source: "https://t.me/MotoG34/480142"
    },
    {
      name: "PIXEL OS",
      version: "Android 15",
      description: "Versão não oficial da ROM PixelOS (sistema oficial Google) desenvolvida por akarizao",
      size: "1.1 GB",
      date: "05/08/2023",
      developer: "akarizao",
      url: "https://drive.google.com/uc?export=download&id=1fFdfNz5CL2TbNWfKeaNTiF9xOz0coquE",
      details: {
        version: "Android 15",
        dev: "akarizao",
        description: "Versão não oficial da ROM PixelOS (sistema oficial Google) desenvolvida por akarizao",
        changelog: [
          "patch of the September",
          "fixed not accessing data/obb"
        ],
        knownIssues: [],
        notes: [
          "Moto Camera and GApps Included",
          "Read the XDA Thread for instructions"
        ]
      },
      credits: [
        "@AnandSuresh02 and other motorola sm6375 contributors",
        "Thanks to Ninguém for testing release builds"
      ],
      source: "https://t.me/MotoG34/476163"
    },
    {
      name: "YAAP UNOFFICIAL",
      version: "Android 16",
      description: "Versão não oficial e user da ROM YAAP Voyage, mantida por visual",
      size: "1.4 GB",
      date: "18/08/2023",
      developer: "@XxxVishalxxX",
      url: "https://drive.google.com/uc?export=download&id=1Mwp06uqf_og2NJH7AlqIK-aVb2VkqjC4",
      details: {
        version: "Android 16",
        dev: "@XxxVishalxxX",
        description: "Versão não oficial e user da ROM YAAP Voyage, mantida por visual",
        changelog: [
          "Muitas coisas ;)"
        ],
        knownIssues: [],
        notes: [
          "Agradecimentos aos Devs da Motorola Sedona, testers e todos os autores respectivos."
        ]
      },
      source: "https://t.me/MadLaBDiscussion"
    },
    {
      name: "MyUI 7 Lite",
      version: "Android 15",
      description: "Versão customizada da interface proprietária da Motorola, antiga MyUI.",
      size: "1.8 GB",
      date: "10/09/2023",
      developer: "Motorola Team, AndyLin",
      url: "https://drive.google.com/uc?export=download&id=1RfY3KBwBEvQEPaKFDaLriB429IPdikzS",
      details: {
        version: "Android 15",
        dev: "Motorola Team, AndyLin",
        description: "Trata-se de uma versão customizada da interface proprietária da Motorola, antiga MyUI, possivelmente, é um PORT, tome cuidado!",
        changelog: [
          "Removed all other Chinese junk software, only kept Moto's app for MyUI (Phone, Dolby Atmos, Contacts, Calendar, Calculator, Smart Connect, Messages, Audio Recorder, Clocks, etc.)",
          "Removed the limits of Google Play Service so that you can use Quick Share and Play Store self-update",
          "Updated the launcher to MyUI 8 version",
          "Enabled blur effects by default",
          "Pre-rooted by APatch"
        ],
        knownIssues: [],
        notes: [
          "Flash by TWRP",
          "Enable Play Service & download Play Store & APatch manually",
          "The SuperKey of APatch is 114514Aa, you can change it manually by re-patch the boot img (Use Patch and Install option)"
        ]
      },
      source: "https://t.me/MotoG34/456671"
    },
    {
      name: "MistOS 4.1",
      version: "Android 16",
      description: "Versão oficial da ROM MistOS desenvolvida por JNW",
      size: "1.3 GB",
      date: "15/09/2023",
      developer: "JNW_SG",
      url: "https://drive.google.com/uc?export=download&id=10hmFcHd0OYbAcRi2CXKXBhRKvdrnYZSC",
      details: {
        version: "Android 16",
        dev: "JNW_SG",
        description: "Versão oficial da ROM MistOS desenvolvida por JNW",
        changelog: [],
        knownIssues: [],
        notes: []
      },
      source: "https://t.me/MotoG34/465053"
    },
    {
      name: "AxionOS 2.0",
      version: "Android 16",
      description: "Versão BETA 3 não oficial da ROM AxionOS, desenvolvida por JINWOO",
      size: "1.5 GB",
      date: "20/09/2023",
      developer: "JINWOO",
      url: "https://drive.google.com/uc?export=download&id=1siUx-Fz5lzIwQ2OLQDyE7cGbQPJ0OWzX",
      details: {
        version: "Android 16",
        dev: "JINWOO",
        description: "Versão BETA 3 não oficial da ROM AxionOS, desenvolvida por JINWOO",
        changelog: [],
        knownIssues: [],
        notes: [
          "KSU Next support",
          "For KernelSu Next working flash this KSU-boot.img and install this app: KSU-boot.img , Apk"
        ]
      },
      source: "https://t.me/MotoG34/452049"
    },
    {
      name: "Stock ROM",
      version: "Android 15",
      description: "ROM Stock oficial da Motorola, para o MotoG34. O download deve ser feito pelo RSA para maior garantia",
      size: "1.8 GB",
      date: "01/01/2023",
      developer: "Motorola",
      url: "https://pt-br.support.motorola.com/app/softwarefix",
      easterEgg: true,
      details: {
        version: "Android 15",
        dev: "Motorola",
        description: "ROM Stock oficial da Motorola, para o MotoG34",
        changelog: [],
        knownIssues: [],
        notes: [
          "HelloUI",
          "O download deve ser feito pelo RSA para maior garantia"
        ]
      },
      source: "https://www.stockrom.net/category/motorola/moto-g34-5g"
    }
  ]
};

function getRomsByDevice(device) {
  return romsData[device] || [];
}

function getAvailableDevices() {
  return Object.keys(romsData);

}
