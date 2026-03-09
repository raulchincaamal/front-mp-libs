import type { Meta, StoryObj } from "@storybook/react"
import { QRBarcode } from "@/components"

const meta: Meta<typeof QRBarcode> = {
  title: "Components/QRBarcode",
  component: QRBarcode,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "QRBarcode component to display QR codes or barcodes based on the variant prop. Supports multiple barcode formats and customization options.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["qr", "barcode"],
      description: "Type of code to display",
    },
    value: {
      control: "text",
      description: "Value to encode in the code",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
}

export default meta
type Story = StoryObj<typeof QRBarcode>

/**
 * Basic QR code with default settings
 */
export const QRCodeDefault: Story = {
  args: {
    variant: "qr",
    value: "https://macropay.mx",
  },
}

/**
 * QR code with custom size
 */
export const QRCodeLarge: Story = {
  args: {
    variant: "qr",
    value: "https://macropay.mx",
    size: 300,
  },
}

/**
 * QR code with custom colors
 */
export const QRCodeCustomColors: Story = {
  args: {
    variant: "qr",
    value: "https://macropay.mx",
    size: 250,
    bgColor: "#1E40AF",
    fgColor: "#FFFFFF",
  },
}

/**
 * QR code with high error correction
 */
export const QRCodeHighCorrection: Story = {
  args: {
    variant: "qr",
    value: "Important data that needs high error correction",
    size: 250,
    level: "H",
  },
}

/**
 * QR code without margin
 */
export const QRCodeNoMargin: Story = {
  args: {
    variant: "qr",
    value: "https://macropay.mx",
    size: 200,
    marginSize: 0,
    className: "border border-gray-300",
  },
}

/**
 * QR code with custom margin
 */
export const QRCodeCustomMargin: Story = {
  args: {
    variant: "qr",
    value: "https://macropay.mx",
    size: 200,
    marginSize: 8,
  },
}

/**
 * QR code with center image/logo
 */
export const QRCodeWithImage: Story = {
  args: {
    variant: "qr",
    value: "https://macropay.mx",
    size: 300,
    level: "H",
    imageSettings: {
      src: "https://placehold.co/50",
      height: 50,
      width: 50,
      excavate: true,
    },
  },
}

/**
 * QR code with custom styled center logo
 */
export const QRCodeWithLogo: Story = {
  args: {
    variant: "qr",
    value: "https://macropay.mx/payment",
    size: 300,
    bgColor: "#FFFFFF",
    fgColor: "#1E40AF",
    level: "H",
    imageSettings: {
      src: "https://via.placeholder.com/60/1E40AF/FFFFFF?text=MP",
      height: 60,
      width: 60,
      excavate: true,
    },
  },
  decorators: [
    Story => (
      <div className="p-6 bg-gray-50 rounded-lg">
        <Story />
      </div>
    ),
  ],
}

/**
 * QR code with JSON data
 */
export const QRCodeWithJSON: Story = {
  args: {
    variant: "qr",
    value: JSON.stringify({
      name: "Macropay",
      url: "https://macropay.mx",
      type: "payment",
    }),
    size: 280,
  },
}

/**
 * Basic barcode with CODE128 format (default)
 */
export const BarcodeDefault: Story = {
  args: {
    variant: "barcode",
    value: "1234567890",
  },
}

/**
 * Barcode with EAN13 format
 */
export const BarcodeEAN13: Story = {
  args: {
    variant: "barcode",
    value: "5901234123457",
    format: "EAN13",
  },
}

/**
 * Barcode with EAN8 format
 */
export const BarcodeEAN8: Story = {
  args: {
    variant: "barcode",
    value: "96385074",
    format: "EAN8",
  },
}

/**
 * Barcode with CODE39 format
 */
export const BarcodeCODE39: Story = {
  args: {
    variant: "barcode",
    value: "CODE39",
    format: "CODE39",
  },
}

/**
 * Barcode with UPC format
 */
export const BarcodeUPC: Story = {
  args: {
    variant: "barcode",
    value: "123456789999",
    format: "UPC",
  },
}

/**
 * Barcode without display value
 */
export const BarcodeNoText: Story = {
  args: {
    variant: "barcode",
    value: "MACROPAY2024",
    displayValue: false,
  },
}

/**
 * Barcode with custom dimensions
 */
export const BarcodeCustomSize: Story = {
  args: {
    variant: "barcode",
    value: "CUSTOM-SIZE-BAR",
    width: 3,
    height: 150,
    fontSize: 24,
  },
}

/**
 * Barcode with custom colors
 */
export const BarcodeCustomColors: Story = {
  args: {
    variant: "barcode",
    value: "COLORED-BARCODE",
    background: "#FEF3C7",
    lineColor: "#92400E",
    fontSize: 18,
  },
}

/**
 * Barcode with increased margin
 */
export const BarcodeWithMargin: Story = {
  args: {
    variant: "barcode",
    value: "MARGIN-EXAMPLE",
    margin: 30,
    background: "#F3F4F6",
  },
}

/**
 * Compact barcode for small spaces
 */
export const BarcodeCompact: Story = {
  args: {
    variant: "barcode",
    value: "COMPACT",
    width: 1,
    height: 50,
    fontSize: 14,
    margin: 5,
  },
}

/**
 * Product barcode example
 */
export const ProductBarcode: Story = {
  args: {
    variant: "barcode",
    value: "7501234567890",
    format: "EAN13",
    width: 2,
    height: 80,
    fontSize: 16,
    margin: 10,
  },
  decorators: [
    Story => (
      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Product Name</h3>
          <p className="text-sm text-gray-600">$99.99</p>
        </div>
        <Story />
      </div>
    ),
  ],
}

/**
 * QR code for payment
 */
export const PaymentQRCode: Story = {
  args: {
    variant: "qr",
    value: JSON.stringify({
      type: "payment",
      amount: 1500,
      currency: "MXN",
      merchant: "Macropay",
      reference: "MP-2024-001",
    }),
    size: 300,
    level: "H",
  },
  decorators: [
    Story => (
      <div className="p-8 bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Scan to Pay</h3>
          <p className="text-lg text-gray-700">$1,500.00 MXN</p>
        </div>
        <Story />
        <p className="text-sm text-gray-600 text-center mt-4">
          Reference: MP-2024-001
        </p>
      </div>
    ),
  ],
}

/**
 * Interactive example with all QR code options
 */
export const QRCodePlayground: Story = {
  args: {
    variant: "qr",
    value: "https://macropay.mx",
    size: 200,
    bgColor: "#FFFFFF",
    fgColor: "#000000",
    level: "M",
    marginSize: 4,
  },
  argTypes: {
    size: {
      control: { type: "range", min: 100, max: 500, step: 10 },
    },
    bgColor: {
      control: "color",
    },
    fgColor: {
      control: "color",
    },
    level: {
      control: "select",
      options: ["L", "M", "Q", "H"],
    },
    marginSize: {
      control: { type: "range", min: 0, max: 10, step: 1 },
    },
  },
}

/**
 * Interactive example with all barcode options
 */
export const BarcodePlayground: Story = {
  args: {
    variant: "barcode",
    value: "1234567890",
    format: "CODE128",
    width: 2,
    height: 100,
    displayValue: true,
    fontSize: 20,
    background: "#FFFFFF",
    lineColor: "#000000",
    margin: 10,
  },
  argTypes: {
    format: {
      control: "select",
      options: [
        "CODE128",
        "CODE39",
        "EAN13",
        "EAN8",
        "UPC",
        "ITF14",
        "MSI",
        "pharmacode",
      ],
    },
    width: {
      control: { type: "range", min: 1, max: 5, step: 0.5 },
    },
    height: {
      control: { type: "range", min: 50, max: 200, step: 10 },
    },
    fontSize: {
      control: { type: "range", min: 10, max: 40, step: 2 },
    },
    margin: {
      control: { type: "range", min: 0, max: 50, step: 5 },
    },
    background: {
      control: "color",
    },
    lineColor: {
      control: "color",
    },
  },
}
