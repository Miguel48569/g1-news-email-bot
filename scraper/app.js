const axios = require("axios");
const cheerio = require("cheerio");

const URL = "https://g1.globo.com/economia/";

async function obterNoticias() {
  const response = await axios(URL);
  const html = response.data;
  const $ = cheerio.load(html);
  const posts = [];

  $("._evt").each(function () {
    if (posts.length >= 5) return false;

    const link = $(this)
      .find(".feed-post-link.gui-color-primary.gui-color-hover")
      .attr("href");

    const titulo = $(this)
      .find(".feed-post-link.gui-color-primary.gui-color-hover")
      .text()
      .trim();

    if (link && titulo) {
      posts.push({ titulo, link });
    }
  });

  return posts;
}

module.exports = { obterNoticias };
