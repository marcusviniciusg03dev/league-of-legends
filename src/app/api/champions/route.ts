export const GET = () => {
    return Response.json({
      data: [
        {
          name: 'Jinx',
          label: 'O gatilho desenfreado',
          type: 'atiradora',
          description: 'Uma criminosa impulsiva e maníaca de Zaun, Jinx vive para disseminar o caos sem se preocupar com as consequências. Com um arsenal de armas mortais, ela detona as explosões mais altas e mais luminosas para deixar um rastro de destruição e pânico por onde passa. Jinx abomina o tédio e deixa alegremente sua marca caótica de pandemônio aonde quer que vá.',
          bgImageSuffix: 'wallpaper',
          heroImage: '/images/jinx.png'
        },
        {
          name: 'Ashe',
          label: 'A arqueira do gelo',
          type: 'atiradora',
          description: 'A mãe de guerra Glacinata da tribo de Avarosa, Ashe comanda a horda mais populosa do norte. Estoica, inteligente e idealista, mesmo que desconfortável com seu papel de liderança, ela canaliza as magias ancestrais de sua linhagem para empunhar um arco de Gelo Verdadeiro. Com a crença de seu povo de que Ashe seria a heroína mítica, Avarosa, reencarnada, ela espera unificar Freljord mais uma vez.',
          bgImageSuffix: 'wallpaper-1',
          heroImage: '/images/ashe.png'
        },
        {
          name: 'Garen',
          label: 'O poder de demacia',
          type: 'lutador',
          description: 'Um guerreiro nobre e orgulhoso, Garen faz parte da Vanguarda Destemida. Popular entre seus companheiros e respeitado o suficiente por seus inimigos, sua reputação é nada mais do que o esperado de um herdeiro da prestigiosa família Stemmaguarda, encarregada de defender Demacia e seus ideais. Vestido com uma armadura resistente à magia e empunhando uma poderosa espada, Garen está sempre pronto para confrontar magos e feiticeiros no campo de batalha.',
          bgImageSuffix: 'wallpaper-2',
          heroImage: '/images/garen.png'
        }
      ]
    });
};
