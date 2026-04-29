import { Button } from "../ui/Button"
import { Arrow } from "../icons"

export const ButtonArrow = ({
  children,
  disabled,
}: {
  disabled?: boolean
  children: React.ReactNode
}) => (
  <Button iconRight={<Arrow />} variant='arrow' color='red' disabled={disabled}>
    {children}
  </Button>
)
