import TypographyComponent from "./typography.component"
import Text from "./typography.text"
import Title from "./typography.title"

export type TypographyProps = typeof TypographyComponent & {
  Text: typeof Text
  Title: typeof Title
}

const Typography = TypographyComponent as TypographyProps

Typography.Text = Text
Typography.Title = Title

export default Typography
