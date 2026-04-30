// Form.tsx (оптимизированная версия)
import React, { useState, useCallback } from "react"
import { ColorSelect, colors } from "./colorSelect"
import styles from "./Form.module.scss"
import { Input } from "./input"
import { Textarea } from "./textArea"
import { Checkbox } from "./checkbox"
import { FakeRadio } from "./fakeRadio"

interface FormData {
  name: string
  moodColor: string
  comment: string
  radio: boolean
  subscribe: boolean
}

export const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    moodColor: colors[0].value,
    comment: "",
    radio: false,
    subscribe: true,
  })

  const onlyLettersAndSpaces = (value: string): string => {
    return value.replace(/[^A-Za-zА-Яа-яЁё\s]/g, "")
  }

  const handleNameChange = useCallback((value: string) => {
    const filteredValue = onlyLettersAndSpaces(value)
    setFormData((prev) => ({ ...prev, name: filteredValue }))
  }, [])

  const handleColorChange = useCallback((color: string) => {
    setFormData((prev) => ({ ...prev, moodColor: color }))
  }, [])

  const handleCommentChange = useCallback((value: string) => {
    setFormData((prev) => ({ ...prev, comment: value }))
  }, [])

  const handleRadioChange = useCallback((checked: boolean) => {
    setFormData((prev) => ({ ...prev, radio: checked }))
  }, [])

  const handleCheckboxChange = useCallback((checked: boolean) => {
    setFormData((prev) => ({ ...prev, subscribe: checked }))
  }, [])

  const handleSubmit = useCallback(
    (e: React.SubmitEvent) => {
      e.preventDefault()
      alert(`Данные отправлены! ${JSON.stringify(formData)}`)
    },
    [formData]
  )

  return (
    <>
      <h2 className={styles.title}>Заполните форму</h2>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete='off'>
        <div className={styles.defaultBlock}>
          <h3 className={styles.sectionTitle}>Основное</h3>
          <Input
            label='Имя'
            id='name'
            placeholder='по паспорту'
            value={formData.name}
            maxLength={50}
            onChange={handleNameChange}
          />
          <div className={styles.field}>
            <label id='' className={styles.label}>Цвет вашего настроения</label>
            <ColorSelect
              selectedColor={formData.moodColor}
              onColorChange={handleColorChange}
            />
          </div>
        </div>
        {/* Выделенный блок "Дополнительное" с тенью */}
        <div className={styles.additionalBlock}>
          <h3 className={styles.additionalTitle}>Дополнительное</h3>
          <Textarea
            label='Комментарий'
            id='comment'
            placeholder='Напишите хоть что-нибудь.&#10;Если хотите, конечно.'
            value={formData.comment}
            onChange={handleCommentChange}
          />
        </div>

        <div className={styles.defaultBlock}>
          <FakeRadio
            label='Просто радиобатон'
            checked={formData.radio}
            onChange={handleRadioChange}
          />

          <Checkbox
            label={
              <span>
                Соглашаюсь на все, что бы вы ни придумали и осознаю, что это
                может означать <a href='#'>что угодно</a>
              </span>
            }
            checked={formData.subscribe}
            onChange={handleCheckboxChange}
          />

          <button type='submit' className={styles.submitButton}>
            Отправить все мои данные
          </button>
        </div>
      </form>
    </>
  )
}
