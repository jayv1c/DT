DIÁRIO DO TÉCNICO — VERSÃO PWA

O QUE ESTÁ INCLUÍDO
- index.html: aplicativo original preparado para instalação.
- manifest.json: nome, aparência e ícones de instalação.
- service-worker.js: cache do aplicativo para abertura offline após o primeiro acesso.
- icons/: ícones para Android e outros dispositivos.

IMPORTANTE
Para instalar como PWA no Android, os arquivos precisam estar publicados em um endereço HTTPS.
Abrir o index.html diretamente como arquivo local não habilita a instalação PWA nem o service worker.

PUBLICAÇÃO SIMPLES (GitHub Pages)
1. Entre em https://github.com/ e crie uma conta, se ainda não tiver.
2. Crie um repositório novo, por exemplo: diario-do-tecnico.
3. Envie TODOS os arquivos e pastas deste pacote, mantendo a estrutura.
4. Nas configurações do repositório, abra Pages.
5. Em Build and deployment, selecione Deploy from a branch, escolha main e / (root), e salve.
6. Aguarde a publicação e abra o endereço HTTPS fornecido pelo GitHub Pages no Chrome do Android.
7. No Chrome, abra o menu ⋮ e escolha Instalar app ou Adicionar à tela inicial.

ATUALIZAR O SITE EM VERSÕES FUTURAS

Não crie outro repositório nem configure o Pages novamente. Para publicar uma versão nova:
1. Faça as alterações nesta pasta do projeto e salve os arquivos.
2. Abra no GitHub o mesmo repositório que publica o app.
3. Na página Code, clique em Add file > Upload files.
4. Envie os arquivos que foram alterados, mantendo os mesmos caminhos e pastas. Por exemplo, index.html fica na raiz e service-worker.js também. Se houver novos ícones ou imagens, envie-os dentro das pastas correspondentes.
5. Em Commit changes, escreva uma mensagem como “Atualiza o Diário do Técnico” e confirme o commit na branch main (ou na branch que o Pages já usa).
6. O GitHub Pages publica as mudanças automaticamente a partir da branch e pasta configuradas. Aguarde alguns minutos e abra novamente o mesmo endereço do app.

No celular, feche e abra o app ou atualize a página para carregar a versão nova. Continue usando o mesmo endereço e não desinstale o PWA nem limpe os dados do site durante uma atualização: os registros da carreira ficam no armazenamento local desse navegador/aparelho.

USO OFFLINE
Abra o app online pelo menos uma vez para o navegador armazenar os arquivos. Depois, o app shell poderá abrir sem internet. Recursos externos, como fontes do Google e sincronização em nuvem, podem exigir conexão.

DADOS
O aplicativo original guarda os dados no armazenamento local do navegador (localStorage). Use a função de backup do próprio aplicativo antes de trocar de navegador, limpar dados ou reinstalar. A instalação PWA deve ser aberta sempre pelo mesmo endereço para manter o mesmo armazenamento local.

ESTA ENTREGA
Os arquivos foram preparados e passaram por verificações estáticas de estrutura, JSON e sintaxe JavaScript. A publicação em HTTPS e a instalação no aparelho dependem de uma conta/serviço de hospedagem e de serem realizadas no seu dispositivo; isso não foi executado daqui.

PACOTE VISUAL (ATUALIZAÇÃO)
- assets/clubs/: 32 distintivos PNG originais de identificação visual, com iniciais e paletas aproximadas dos clubes da Premier League 2021/22 e de clubes selecionados da Championship.
- assets/trophies/: 11 ilustrações PNG originais de taças para ligas, copas nacionais e competições continentais.
- As imagens são locais e foram incluídas no cache do service worker para uso offline.

NOTA SOBRE MARCAS
Os distintivos desta atualização são ilustrações estilizadas de identificação (não são reproduções dos escudos oficiais dos clubes). As taças também são ilustrações genéricas, não réplicas oficiais. Para incorporar os escudos oficiais em uma atualização futura, será necessário obter os arquivos de imagem com autorização/condições de uso adequadas.


PERSONALIZAÇÃO DE IMAGENS

Abra Configurações > Bases de dados e skins.
- Em Clubes, use Adicionar ou Trocar para escolher um escudo.
- Em Competições, use Adicionar ou Trocar para escolher uma taça.
- Se o clube ou campeonato não estiver na lista, use Adicionar item à lista.
- Use o X ao lado do item para remover a imagem personalizada e voltar ao padrão.
- As imagens são redimensionadas para no máximo 192 px. Escudos de clubes ficam na base local compartilhada entre carreiras; imagens de competições ficam na carreira correspondente.
- Para levar imagens e dados para outro aparelho no APK ou arquivo local, use o backup completo em Configurações > Backup dos dados. A sincronização automática só funciona quando o app estiver num ambiente com o serviço de nuvem conectado.

FLUXO DE USO

- A tela Resumo mostra um próximo passo sugerido com base no estado da temporada.
- Em Partidas, use “Salvar e registrar outra” para lançar jogos em sequência. A competição do último jogo continua selecionada.
- Estatísticas permite filtrar retrospecto e recordes por temporada, competição e mando. Os rankings individuais usam o total da temporada selecionada.
- Para proteger os dados, baixe um arquivo JSON ou copie o backup. Para restaurar, selecione o arquivo ou cole o texto em Configurações > Backup dos dados.
- A busca da seção Bases de dados e skins foi removida. Os clubes e competições podem ser percorridos pelas listas recolhíveis.
- Imagens personalizadas ficam salvas no aparelho/navegador. Para levá-las entre PC e celular, baixe um backup em Configurações > Backup dos dados e restaure esse arquivo no outro aparelho. No mesmo site, use o mesmo arquivo de backup para incluir temporadas, partidas e imagens; publicar os arquivos no GitHub sozinho não transfere os dados locais.
- A aparência permite escolher uma cor de fundo mais suave para o modo claro. A preferência é salva separadamente em cada aparelho.
- A versão atual é 1.4.1 e aparece em Configurações > Idioma e versão. O idioma da interface pode ser escolhido entre português, espanhol e inglês; nomes próprios e registros da carreira continuam como foram cadastrados.
- Estatísticas incluem um resumo de cada competição em cada temporada, com jogos, vitórias, empates, derrotas, gols e resultado/colocação registrados.
- A aba Elenco permite importar jogadores de temporadas anteriores para a temporada atual, sem duplicar quem já está nela.
- Estatísticas podem ser minimizadas e os campeonatos são organizados por temporada, com opção para escolher uma temporada específica.
- Nas competições europeias em formato antigo, informe a posição no grupo no Resumo para liberar o caminho correspondente. O 3º lugar da Champions habilita o playoff da Europa League; o 3º da Europa habilita o playoff da Conference League. A Champions não ganha uma fase de playoff própria.
- O app bloqueia mais de uma partida na mesma competição e rodada/fase, inclusive ao editar uma partida existente. Em confrontos de ida e volta, cada perna aparece como fase separada.
- A lista de jogadores selecionados em cada partida mostra a nota com a faixa de cor correspondente.
