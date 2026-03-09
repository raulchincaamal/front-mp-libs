import { Accordion as AccordionPrimitive } from "radix-ui"
import AccordionItem from "./accordion.item"
import AccordionTrigger from "./accordion.trigger"
import AccordionContent from "./accordion.content"
import { classNames as cn } from "@/utils"
import type { AccordionProps } from "./accordion.types"

/**
 * Componente Accordion que permite mostrar contenido colapsable de forma organizada.
 *
 * Utiliza Radix UI como base para proporcionar una implementación accesible y robusta
 * de un acordeón. Soporta múltiples items, cada uno con su propio título y contenido,
 * permitiendo solo un item expandido a la vez (tipo "single").
 *
 * Características principales:
 * - Colapsable: Solo un item puede estar abierto a la vez
 * - Personalizable: Soporta clases CSS personalizadas para cada parte del componente
 * - Iconos personalizados: Permite agregar iconos personalizados en los triggers
 * - Divisores opcionales: Posibilidad de mostrar divisores entre el título y contenido
 * - Valor por defecto: Permite especificar qué item debe estar abierto inicialmente
 *
 **/
const Accordion = ({
  items,
  classNames,
  showDivider,
  defaultValue,
}: AccordionProps) => (
  <AccordionPrimitive.Root
    className={cn("flex flex-col space-y-4", classNames?.container)}
    type="single"
    defaultValue={defaultValue}
    collapsible
  >
    {items?.map(item => (
      <AccordionItem className={classNames?.item} value={item.id} key={item.id}>
        <AccordionTrigger
          className={classNames?.trigger}
          triggerIcon={item?.triggerIcon}
        >
          {item.title}
        </AccordionTrigger>
        <AccordionContent
          showDivider={showDivider}
          dividerClassName={classNames?.divider}
          className={classNames?.content}
        >
          {item.content}
        </AccordionContent>
      </AccordionItem>
    ))}
  </AccordionPrimitive.Root>
)

export default Accordion
