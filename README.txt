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
