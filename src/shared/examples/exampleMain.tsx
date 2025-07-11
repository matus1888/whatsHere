import './App.css'
export const exampleMain = (
  <>
    <div className="main-banner">
      <div className="banner-content">
        <h1>
          Напишите телефон, чтобы работодатели могли предложить вам работу
        </h1>
        <div className="phone-input">
          <input type="tel" placeholder="79654748370" />
          <button>Продолжить</button>
        </div>
        <p>
          Нажимая «Продолжить», вы подтверждаете, что полностью принимаете
          условия Соглашения об оказании услуг по содействию в трудоустройстве
          (оферта) и ознакомились с Политикой конфиденциальности
        </p>
        <div className="app-buttons">
          <button>Google Play</button>
          <button>AppGallery</button>
        </div>
      </div>
    </div>

    {/* Popular Vacancies */}
    <section className="popular-vacancies">
      <h2>Вакансии ОНА</h2>
      <div className="vacancy-grid">
        {[
          { title: "Работа из дома", count: "69023", salary: "" },
          { title: "Курьер", count: "245", salary: "до 240000 ₽" },
          { title: "Продавец", count: "761", salary: "10000 - 145000 ₽" },
          {
            title: "Администратор",
            count: "497",
            salary: "20000 - 135000 ₽",
          },
          {
            title: "Программист",
            count: "116",
            salary: "20000 - 295000",
          },
          { title: "Подработка", count: "846", salary: "до 235000 ₽" },
          { title: "Водитель", count: "261", salary: "20000 - 715000 ₽" },
          { title: "Кассир", count: "528", salary: "35000 - 110000 ₽" },
          { title: "Оператор", count: "290", salary: "20000 - 140000 ₽" },
          { title: "Менеджер", count: "1185", salary: "15000-500000₽" },
        ].map((vacancy, index) => (
          <div key={index} className="vacancy-card">
            <h3>{vacancy.title}</h3>
            <p>{vacancy.count} вакансий</p>
            {vacancy.salary && <p>{vacancy.salary}</p>}
          </div>
        ))}
      </div>
    </section>

    <section className="companies">
      <h2>Работа в компаниях Сочи</h2>
      <div className="company-list">
        {[
          "Банк НСБ (869)",
          "Яндекс Команда для бизнеса (2452)",
          "МАГНИТ, Розничная сеть (21852)",
          "ИНСИ инжиниринг (28)",
          "ЯНДЕКС-Недвижимость (40)",
          "ФирмаАгроКомплекс им. Ткачева (221)",
        ].map((company, index) => (
          <div key={index} className="company-item">
            {company}
          </div>
        ))}
      </div>
    </section>

    <section className="recent-vacancies">
      <h2>Вакансии дня Сочи</h2>
      <div className="vacancy-list">
        {[
          "Оператор на телефоне от 60000 ₽",
          "Специалист голосовой поддержки от 40000 до 50000 ₽",
          "Менеджер по продажам от 50000 ₽",
          "Автослесарь/Автомеханик на СТО от 150000 до 300000 ₽",
          "Специалист по продажам Pullman & Mercure Sochi Centre",
          "Специалист по рекламе 97500 ₽",
          "Мастер по ремонту бытовой техники 73000 ₽",
        ].map((vacancy, index) => (
          <div key={index} className="vacancy-item">
            {vacancy}
          </div>
        ))}
      </div>
    </section>

    {/* Job Categories */}
    <section className="job-categories">
      <h2>Работа по профессиям в Сочи</h2>
      <div className="categories-grid">
        {[
          "Автомобильный бизнес",
          "Административный персонал",
          "Безопасность",
          "Высший и средний менеджмент",
          "Добыча сырья",
          "Домашний, обслуживающий персонал",
          "Закупки",
          "Информационные технологии",
          "Искусство, развлечения, масс-медиа",
          "Маркетинг, реклама, PR",
          "Медицина, фармацевтика",
          "Наука, образование",
          "Продажи, обслуживание клиентов",
          "Производство, сервисное обслуживание",
          "Рабочий персонал",
          "Розничная торговля",
          "Сельское хозяйство",
          "Спортивные клубы, фитнес, салоны красоты",
          "Стратегия, инвестиции, консалтинг",
          "Страхование",
          "Строительство, недвижимость",
          "Транспорт, логистика, перевозки",
          "Туризм, гостиницы, рестораны",
          "Управление персоналом, тренинги",
          "Финансы, бухгалтерия",
          "Юристы",
          "Другое",
        ].map((category, index) => (
          <div key={index} className="category-item">
            {category}
          </div>
        ))}
      </div>
    </section>

    {/* Footer */}
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-column">
          <h3>HeadHunter</h3>
          <a href="/">Размещение вакансий</a>
          <a href="/">Поиск по резюме</a>
        </div>
        <div className="footer-column">
          <h3>О компании</h3>
          <a href="/">Помощь</a>
          <a href="/">Наши вакансии</a>
          <a href="/">Реклама на сайте</a>
        </div>
        <div className="footer-column">
          <h3>Соискателям</h3>
          <a href="/">Готовое резюме</a>
          <a href="/">Все сервисы</a>
          <a href="/">Профориентация</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-links">
          <a href="/">ВКонтакте</a>
          <a href="/">Telegram</a>
        </div>
        <div className="copyright">© 2025 ООО «ХэдХантер»</div>
      </div>
    </footer>
  </>
);
