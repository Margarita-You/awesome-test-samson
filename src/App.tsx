import style from "./App.module.css"
import { BeautifulButton } from "./beautifulButton"
import { ExpandableText } from "./expandableText"
import { Form } from "./form"
import { ButtonArrow, JustButton } from "./justButtons"
import { products, ProductSlider } from "./productSlider"
import { Scheme } from "./scheme/Scheme"
import { TypographyDemo } from "./typography/TypographyDemo"

function App() {
  return (
    <div className={style.app}>
      <ExpandableText text='Текст'>
        <TypographyDemo />
      </ExpandableText>

      <ExpandableText text='Форма'>
        <Form />
      </ExpandableText>

      <ExpandableText text='Много кнопок'>
        <div className={style.justButtons}>
          <JustButton>Просмотреть</JustButton>
          <JustButton color='red' variant='colored'>
            Просмотреть
          </JustButton>
          <JustButton color='red' variant='outline'>
            Просмотреть
          </JustButton>
          <JustButton color='green' variant='colored'>
            Просмотреть
          </JustButton>
          <JustButton color='green' variant='outline'>
            Просмотреть
          </JustButton>
          <JustButton color='red' variant='colored' disabled>
            Просмотреть
          </JustButton>
          <JustButton color='green' variant='outline' disabled>
            Просмотреть
          </JustButton>
          <ButtonArrow>Просмотреть</ButtonArrow>
          <ButtonArrow disabled>Просмотреть</ButtonArrow>
          <JustButton iconLeft={<span>🔍</span>}>Найти</JustButton>
        </div>
      </ExpandableText>

      <ExpandableText text='Схема'>
        <Scheme />
      </ExpandableText>

      <ExpandableText text='Витрина'>
        <ProductSlider products={products} />
      </ExpandableText>

      <a href='/black-page.html' style={{ padding: "20px" }}>
        Черная страница
      </a>

      <ExpandableText text='Красивая кнопка'>
        <div className={style.buttonWrapper}>
          <BeautifulButton>Кнопка</BeautifulButton>
        </div>
      </ExpandableText>
    </div>
  )
}

export default App
