import styles from "./Typography.module.scss"

export const TypographyDemo = () => {
  return (
    <article className={styles.container}>
      <h1 className={styles.title}>Война и мир</h1>
      <p className={styles.epigraph}>
        «Если допустить, что жизнь человеческая может управляться разумом, то —
        уничтожится возможность жизни». <br />
        <span className={styles.epigraphAuthor}>Л.Н. Толстой</span>
      </p>

      <section className={styles.section}>
        <h2 className={styles.heading2}>Глава I</h2>
        <p className={styles.paragraph}>
          — Eh bien, mon prince. Gênes et Lucques sont devenues les apannages de
          la famille Buonaparte. Non, je vous préviens que si vous ne me dites
          pas que nous avons la guerre, si vous vous permettez encore de pallier
          toutes les infamies, toutes les atrocités de cet Antechrist (ma
          parole, j’y crois) — je ne vous connais plus, vous n’êtes plus mon
          ami, vous n’êtes plus мой верный раб, как вы говорите.{" "}
          <em className={styles.italic}>Ну, здравствуйте, здравствуйте</em>. Je
          vois que je vous fais peur, садитесь и рассказывайте.
        </p>
        <p className={styles.paragraph}>
          Так говорила в июле 1805 года известная{" "}
          <strong className={styles.strong}>Анна Павловна Шерер</strong>,
          фрейлина и приближенная императрицы Марии Федоровны, встречая важного
          и чиновного князя Василия, первого приехавшего на ее вечер. Анна
          Павловна кашляла несколько дней, у нее был{" "}
          <mark className={styles.mark}>грипп</mark> (как она говорила, слово
          новое, тогда еще не употреблявшееся), и она желала показать свою
          преданность французскому посланнику, бывшему у ней накануне.
        </p>
        <blockquote className={styles.quote}>
          <p>
            — Если вы не имеете лучшего намерения, то я не стану вас слушать, и
            вы не дождетесь от меня признания, как бы вы ни старались.
          </p>
          <footer className={styles.quoteFooter}>
            — Из дневника княжны Марьи
          </footer>
        </blockquote>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading2}>Размышления Пьера</h2>
        <p className={styles.paragraph}>
          <span className={styles.dropcap}>П</span>ьер был неуклюж. Толстый,
          выше обыкновенного роста, широкий, с огромными красными руками, он,
          как говорится, не умел войти в салон и еще менее умел из него выйти.
          Однако именно эта искренность и естественность привлекали к нему
          людей.
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Добродушие, граничащее с наивностью
          </li>
          <li className={styles.listItem}>
            Склонность к философским размышлениям
          </li>
          <li className={styles.listItem}>
            Постоянный поиск смысла жизни
            <ul className={styles.nestedList}>
              <li>Масонство</li>
              <li>Плен и встреча с Платоном Каратаевым</li>
            </ul>
          </li>
        </ul>
        <p className={styles.paragraph}>
          «Надо жить, надо любить, надо верить», — решил для себя Пьер после
          долгих сомнений.{" "}
          <a href='#' className={styles.link}>
            Читать далее об эволюции героя
          </a>
          .
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading2}>Бородинское сражение (фрагмент)</h2>
        <ol className={styles.listOrdered}>
          <li className={styles.listItem}>
            Князь Андрей лежал на батарее Раевского.
          </li>
          <li className={styles.listItem}>
            Наполеон отдавал приказы, но они не исполнялись вовремя.
          </li>
          <li className={styles.listItem}>
            Пьер видел, как «дым застилал поле».
          </li>
        </ol>
        <p className={styles.paragraph}>
          <small className={styles.small}>
            * Примечание: текст приведён с сохранением авторской пунктуации.
          </small>
        </p>
      </section>
    </article>
  )
}
