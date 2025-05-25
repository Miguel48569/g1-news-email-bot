const { obterNoticias } = require("./scraper/app");
const { enviarEmail } = require("./email/app");

async function main() {
  const noticias = await obterNoticias();
  if (noticias.length > 0) {
    await enviarEmail(noticias);
  } else {
    console.log("Nenhuma notícia foi encontrada.");
  }
}

main();
