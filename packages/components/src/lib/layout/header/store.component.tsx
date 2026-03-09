"use client"

import { StoreRegular } from "@mp-front/icons"
import { useTranslation } from "react-i18next"
import type { StoreProps } from "@/layout/header/header.types"
import { Flex, Typography } from "@/components"

const { Text } = Typography

/**
 * Componente de tienda del header.
 * Muestra el nombre de la tienda actual con un icono.
 * Retorna null si no se proporciona nombre o está vacío.
 *
 * @param {StoreProps} props - Propiedades del componente
 * @param {string} [props.className] - Clases CSS adicionales
 * @param {string} [props.children] - Nombre de la tienda
 * @returns {JSX.Element | null} Información de la tienda o null
 *
 * @example
 * ```tsx
 * import { Store } from '@/layout/header'
 *
 * <Store>Tienda Central 001</Store>
 * ```
 */
export const Store = ({ className, children }: StoreProps) => {
  const { t } = useTranslation()

  if (!children || children.trim() === "") {
    return null
  }

  return (
    <Flex className={className} align="center" gap={2}>
      <Flex align="center" gap={1}>
        <StoreRegular className="text-primary-blue size-6" />
        <Text className="text-primary-blue" size="sm" weight="semibold">
          {t("layout.header.store")}
        </Text>
      </Flex>
      <Text className="text-grays-macropay-05" size="sm" weight="semibold">
        {children}
      </Text>
    </Flex>
  )
}
