import { render } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { QRBarcode } from "@/components"

describe("QRBarcode Component", () => {
  const testValue = "TEST123456"

  describe("QR Code Variant", () => {
    it("renders QR code with default props", () => {
      const { container } = render(<QRBarcode variant="qr" value={testValue} />)

      expect(container.querySelector("svg")).toBeInTheDocument()
    })

    it("renders QR code with custom size", () => {
      const { container } = render(
        <QRBarcode variant="qr" value={testValue} size={300} />
      )

      const svg = container.querySelector("svg")
      expect(svg).toHaveAttribute("width", "300")
      expect(svg).toHaveAttribute("height", "300")
    })

    it("applies custom className to QR code", () => {
      const { container } = render(
        <QRBarcode variant="qr" value={testValue} className="custom-qr-class" />
      )

      const wrapper = container.firstChild as HTMLElement
      expect(wrapper).toHaveClass("custom-qr-class")
    })

    it("renders QR code with custom colors", () => {
      const { container } = render(
        <QRBarcode
          variant="qr"
          value={testValue}
          bgColor="#FF0000"
          fgColor="#0000FF"
        />
      )

      const svg = container.querySelector("svg")
      expect(svg).toBeInTheDocument()
    })
  })

  describe("Barcode Variant", () => {
    it("renders barcode with default props", () => {
      const { container } = render(
        <QRBarcode variant="barcode" value={testValue} />
      )

      expect(container.querySelector("svg")).toBeInTheDocument()
    })

    it("renders barcode with EAN13 format", () => {
      const { container } = render(
        <QRBarcode variant="barcode" value="5901234123457" format="EAN13" />
      )

      expect(container.querySelector("svg")).toBeInTheDocument()
    })

    it("applies custom className to barcode", () => {
      const { container } = render(
        <QRBarcode
          variant="barcode"
          value={testValue}
          className="custom-barcode-class"
        />
      )

      const wrapper = container.firstChild as HTMLElement
      expect(wrapper).toHaveClass("custom-barcode-class")
    })

    it("renders barcode without display value", () => {
      const { container } = render(
        <QRBarcode variant="barcode" value={testValue} displayValue={false} />
      )

      expect(container.querySelector("svg")).toBeInTheDocument()
    })
  })
})
