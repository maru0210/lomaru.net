import { load } from "cheerio";
import type { HighlightResult } from "highlight.js";
import hljs from "highlight.js";

export function highlightBody(body: string) {
  const $ = load(body);

  $("div[data-filename]").each((_, elm) => {
    $(elm).prepend(`<span>${$(elm).attr("data-filename")}</span>`);
  });

  $("pre code").each((_, elm) => {
    const language = $(elm).attr("class") || "";
    let result: HighlightResult;

    if (language === "") {
      result = hljs.highlightAuto($(elm).text());
    } else {
      result = hljs.highlight($(elm).text(), {
        language: language.replace("language-", ""),
      });
    }
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });

  return $.html();
}
