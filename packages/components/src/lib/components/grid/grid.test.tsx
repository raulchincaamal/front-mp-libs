import { render, screen } from "@testing-library/react"
import Row from "./row/row.component"
import Col from "./col/col.component"

/**
 * Pruebas básicas para los componentes Row y Col del sistema de grid.
 */
describe("Grid system (Row/Col)", () => {
  it("renderiza un Row con un Col básico", () => {
    render(
      <Row>
        <Col>Columna 1</Col>
      </Row>
    )
    expect(screen.getByText("Columna 1")).toBeInTheDocument()
  })

  it("renderiza múltiples Col dentro de un Row", () => {
    render(
      <Row>
        <Col>Col 1</Col>
        <Col>Col 2</Col>
      </Row>
    )
    expect(screen.getByText("Col 1")).toBeInTheDocument()
    expect(screen.getByText("Col 2")).toBeInTheDocument()
  })

  it("permite pasar props a Col y Row", () => {
    render(
      <Row data-testid="row-test">
        <Col data-testid="col-test">Contenido</Col>
      </Row>
    )
    expect(screen.getByTestId("row-test")).toBeInTheDocument()
    expect(screen.getByTestId("col-test")).toHaveTextContent("Contenido")
  })
})
