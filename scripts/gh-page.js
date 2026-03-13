import ghpages from "gh-pages";

ghpages.publish(
  "dist",
  {
    repo: "https://github.com/matus1888/whatsHere.git",
    onPublish: function (...args) {
      console.log("(!) Файлы успешно выгружены на сервер", args);
    },
  },
  function (err, ...args) {
    if (err) {
      console.log("Ошибка при деплое", err);
    }
    console.log(
      "!!!!!!  Деплой завершен без ошибок, но это не значит что он сработал! Вероятно нет изменений в бандлах!!!",
      args
    );
  }
);
