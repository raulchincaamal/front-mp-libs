import type { Meta, StoryObj } from "@storybook/react"
import Row from "./row/row.component"
import Col from "./col/col.component"

/**
 * Stories de Storybook para el sistema de Grid (Row y Col).
 *
 * Demuestra el uso combinado y responsivo de los componentes Row y Col,
 * respetando sus interfaces y mostrando ejemplos prácticos.
 *
 * @module GridStories
 * @see {@link Row} para el componente de fila
 * @see {@link Col} para el componente de columna
 */
const meta: Meta = {
  title: "Layout/Grid",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Sistema de grid responsivo basado en CSS Grid. Usa <Row> para definir filas y <Col> para columnas con control total sobre span, start, end, justificación y alineación.",
      },
    },
  },
}

export default meta

type Story = StoryObj

/**
 * Ejemplo básico de grid con 3 columnas de igual tamaño.
 *
 * @example
 * ```tsx
 * <Row cols={3} gap={4}>
 *   <Col>Col 1</Col>
 *   <Col>Col 2</Col>
 *   <Col>Col 3</Col>
 * </Row>
 * ```
 */
export const Basico: Story = {
  render: () => (
    <Row cols={3} gap={4} className="w-full">
      <Col span={1}>
        <div className="bg-blue-500 text-white h-16 flex items-center justify-center rounded">
          Col 1
        </div>
      </Col>
      <Col span={1}>
        <div className="bg-green-500 text-white h-16 flex items-center justify-center rounded">
          Col 2
        </div>
      </Col>
      <Col span={1}>
        <div className="bg-pink-500 text-white h-16 flex items-center justify-center rounded">
          Col 3
        </div>
      </Col>
    </Row>
  ),
}

/**
 * Ejemplo de grid responsivo usando la prop `span` en Col.
 *
 * @example
 * ```tsx
 * <Row cols={12} gap={2}>
 *   <Col span={[12, { md: 6, lg: 4 }]}>Columna 1</Col>
 *   <Col span={[12, { md: 6, lg: 8 }]}>Columna 2</Col>
 * </Row>
 * ```
 */
export const Responsive: Story = {
  render: () => (
    <Row cols={12} gap={2} className="w-full">
      <Col span={[12, { md: 2, lg: 4 }]}>
        <div className="bg-indigo-500 text-white h-16 flex items-center justify-center rounded">
          Columna 1
        </div>
      </Col>
      <Col span={[12, { md: 2, lg: 8 }]}>
        <div className="bg-yellow-500 text-white h-16 flex items-center justify-center rounded">
          Columna 2
        </div>
      </Col>
    </Row>
  ),
}

/**
 * Ejemplo avanzado con control de start, end, justify y align en columnas.
 *
 * @example
 * ```tsx
 * <Row cols={6} gap={2}>
 *   <Col span={2} start={2} justify="center" align="center">A</Col>
 *   <Col span={3} end={6} justify="end" align="end">B</Col>
 * </Row>
 * ```
 */
export const Avanzado: Story = {
  render: () => (
    <Row cols={6} gap={2} className="w-full max-w-2xl mx-auto">
      <Col
        span={2}
        start={2}
        justify="center"
        align="center"
        className="w-full"
      >
        <div className="bg-purple-500 text-white w-full h-16 flex items-center justify-center rounded">
          A
        </div>
      </Col>
      <Col span={3} end={6} justify="end" align="end" className="w-full">
        <div className="bg-orange-500 text-white w-full h-16 flex items-center justify-center rounded">
          B
        </div>
      </Col>
    </Row>
  ),
}
