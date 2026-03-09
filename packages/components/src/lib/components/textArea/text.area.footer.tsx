interface Props {
  footer?: string
  current?: number
  max?: number
}

export const TextAreaFooter = ({ footer, current = 0, max }: Props) => (
  <div className="flex justify-between pt-1 text-sm text-gray-7">
    <span>{footer}</span>
    {max && <span>{`${current} / ${max}`}</span>}
  </div>
)
