"use client"

import { CaretUpSolid } from "@mp-front/icons"
import type { UserProps } from "@/layout/header/header.types"
import { Avatar, Dropdown, Flex, Typography } from "@/components"
import { useBreakpoint } from "@/hooks"
const { Text } = Typography

/**
 * Componente de usuario del header.
 * Muestra información del usuario con avatar, nombre, rol y menú desplegable.
 * Retorna null si no se proporciona nombre o está vacío.
 *
 * @param {UserProps} props - Propiedades del componente
 * @param {string} [props.name] - Nombre del usuario
 * @param {string} [props.role] - Rol o cargo del usuario
 * @param {string} [props.imageUrl] - URL de la imagen de avatar
 * @param {DropdownItem[]} [props.items] - Items del menú desplegable
 * @returns {JSX.Element | null} Información del usuario con dropdown o null
 *
 * @example
 * ```tsx
 * import { User } from '@/layout/header'
 *
 * <User
 *   name="Juan Pérez"
 *   role="Administrador"
 *   imageUrl="/avatar.jpg"
 *   items={[{ label: 'Perfil', id: '1' }]}
 * />
 * ```
 */
export const User = ({ name, role, imageUrl, items = [] }: UserProps) => {
  const { md } = useBreakpoint()

  if (!name || name.trim() === "") {
    return null
  }

  const userComponent = (
    <Flex gap={1} direction="vertical">
      <Text className="text-primary-blue" size="sm" weight="semibold">
        {name}
      </Text>
      <Text className="text-grays-macropay-05" size="sm" weight="semibold">
        {role}
      </Text>
    </Flex>
  )

  return (
    <Flex align="center" gap={2}>
      <Avatar src={imageUrl} alt={name} size="sm" />
      {md && userComponent}
      <Dropdown
        classNames={{
          trigger: "size-6.5 p-0",
          content: "z-10 shadow-sm",
        }}
        trigger={<CaretUpSolid className="rotate-180" />}
        items={
          md
            ? items
            : [
                { label: userComponent, id: "user-name", type: "label" },
                { id: "separator-1", type: "separator" },
                ...items,
              ]
        }
      />
    </Flex>
  )
}
