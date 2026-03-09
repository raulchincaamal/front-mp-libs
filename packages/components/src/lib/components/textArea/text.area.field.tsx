import * as Form from "@radix-ui/react-form"

interface Props {
  name: string
  label?: string
  children: React.ReactNode
}

export const TextAreaField = ({ name, label, children }: Props) => (
  <Form.Field name={name}>
    {label && <Form.Label>{label}</Form.Label>}
    {children}
  </Form.Field>
)
