/* eslint-disable max-lines */
import {
  Accordion,
  Select,
  Tooltip,
  Checkbox,
  RadioGroup,
  Alert,
  Card,
  Switch,
  Tag,
  Drawer,
  Notification,
  Progress,
  QRBarcode,
  Slider,
  Typography,
  Dropdown,
  Pagination,
  Flex,
  List,
  Divider,
  Input,
  Avatar,
  Empty,
  Button,
  Modal,
  TextArea,
} from "@/components"
import { useState } from "react"
import { CloseCircleIcon, SearchIcon } from "@/assets/icons"

const App = () => {
  const [open, setOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [checked, setChecked] = useState(false)
  const [switchValue, setSwitchValue] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [sliderValue, setSliderValue] = useState([50])
  const [currentPage, setCurrentPage] = useState(1)
  const [textAreaValue, setTextAreaValue] = useState("")

  const listItems = [
    {
      id: "1",
      content: "First Item",
    },
    {
      id: "2",
      content: "Second Item",
    },
    {
      id: "3",
      content: "Third Item",
      disabled: true,
    },
  ]

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-900" : "bg-gray-1"}`}
    >
      {/* Header */}
      <header
        className={`transition-colors duration-300 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-3"} border-b px-6 py-4`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <Typography.Title
              size="xl"
              className={`transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-10"}`}
            >
              MP UI Components
            </Typography.Title>
            <Typography.Text
              className={`transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-7"} mt-1`}
            >
              A fast, scalable component library built with Tailwind CSS
            </Typography.Text>
          </div>
          <Button variant="secondary" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️" : "🌙"}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <Typography.Title
            size="xl"
            className={`transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-10"} mb-4`}
          >
            Build faster with components
          </Typography.Title>
          <Typography.Text
            size="xl"
            className={`transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-7"} mb-8`}
          >
            Reusable components tested with Cypress for greater security
          </Typography.Text>
          <div className="flex gap-4 justify-center">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="secondary" size="lg">
              View Components
            </Button>
          </div>
        </section>

        {/* Components Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Input Components */}
          <Card
            className={`p-6 transition-colors duration-300 ${darkMode ? "bg-gray-800 border-gray-700" : ""}`}
          >
            <Typography.Title
              size="lg"
              level={3}
              className={`mb-4 transition-colors duration-300 ${darkMode ? "text-white" : ""}`}
            >
              Input
            </Typography.Title>
            <div className="space-y-4 w-full">
              <Input.Text
                placeholder="Enter text..."
                size="lg"
                icon={<SearchIcon />}
              />
              <Input.Text variant="underline" placeholder="Underline variant" />
              <Input.Number
                mode="currency"
                currency="MXN"
                placeholder="0.00"
                prefix="%"
                suffix="°C"
                minFractionDigits={0}
                min={100}
                max={999}
              />
            </div>
          </Card>

          {/* TextArea Component */}
          <Card
            className={`p-6 transition-colors duration-300 ${darkMode ? "bg-gray-800 border-gray-700" : ""}`}
          >
            <Typography.Title
              size="lg"
              level={3}
              className={`mb-4 transition-colors duration-300 ${darkMode ? "text-white" : ""}`}
            >
              TextArea
            </Typography.Title>
            <TextArea
              name="message"
              placeholder="Enter your message..."
              value={textAreaValue}
              onChange={e => setTextAreaValue(e.target.value)}
              minLength={10}
              maxLength={50}
            />
          </Card>

          {/* Button Components */}
          <Card
            className={`p-6 transition-colors duration-300 ${darkMode ? "bg-gray-800 border-gray-700" : ""}`}
          >
            <Typography.Title
              size="lg"
              level={3}
              className={`mb-4 transition-colors duration-300 ${darkMode ? "text-white" : ""}`}
            >
              Button
            </Typography.Title>
            <div className="space-y-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="text">Text Button</Button>
            </div>
          </Card>

          {/* Form Components */}
          <Card
            className={`p-6 transition-colors duration-300 ${darkMode ? "bg-gray-800 border-gray-700" : ""}`}
          >
            <Typography.Title
              size="lg"
              level={3}
              className={`mb-4 transition-colors duration-300 ${darkMode ? "text-white" : ""}`}
            >
              Form Controls
            </Typography.Title>
            <div className="space-y-4">
              <Checkbox checked={checked} onCheckedChange={setChecked}>
                Checkbox
              </Checkbox>
              <Checkbox
                checked={checked}
                disabled={true}
                onCheckedChange={setChecked}
              >
                Checkbox disabled
              </Checkbox>
              <Switch
                label="Switch"
                checked={switchValue}
                onCheckedChange={setSwitchValue}
              />
              <RadioGroup
                group={[
                  { id: "r1", label: "Option 1", value: "option1" },
                  { id: "r2", label: "Option 2", value: "option2" },
                ]}
                defaultValue="option1"
              />
            </div>
          </Card>

          {/* Select Component */}
          <Card
            className={`p-6 transition-colors duration-300 ${darkMode ? "bg-gray-800 border-gray-700" : ""}`}
          >
            <Typography.Title
              size="lg"
              level={3}
              className={`mb-4 transition-colors duration-300 ${darkMode ? "text-white" : ""}`}
            >
              Select
            </Typography.Title>
            <Select
              items={[
                { value: "option1", children: "Option 1" },
                { value: "option2", children: "Option 2" },
                { value: "option3", children: "Option 3" },
              ]}
              placeholder="Choose an option"
            />
          </Card>

          {/* Alert Component */}
          <Card
            className={`p-6 transition-colors duration-300 ${darkMode ? "bg-gray-800 border-gray-700" : ""}`}
          >
            <Typography.Title
              size="lg"
              level={3}
              className={`mb-4 transition-colors duration-300 ${darkMode ? "text-white" : ""}`}
            >
              Alert
            </Typography.Title>
            <div className="space-y-4">
              <Alert type="success" title="Success">
                Operation completed successfully
              </Alert>
              <Alert type="error" title="Error">
                Something went wrong
              </Alert>
            </div>
          </Card>

          {/* Tag Component */}
          <Card
            className={`p-6 transition-colors duration-300 ${darkMode ? "bg-gray-800 border-gray-700" : ""}`}
          >
            <Typography.Title
              size="lg"
              level={3}
              className={`mb-4 transition-colors duration-300 ${darkMode ? "text-white" : ""}`}
            >
              Tag
            </Typography.Title>
            <div className="flex gap-2 flex-wrap">
              <Tag>Default</Tag>
              <Tag type="success">Success</Tag>
              <Tag type="warning">Warning</Tag>
              <Tag type="error">Error</Tag>
            </div>
          </Card>

          {/* Tooltip Component */}
          <Card
            className={`p-6 transition-colors duration-300 ${darkMode ? "bg-gray-800 border-gray-700" : ""}`}
          >
            <Typography.Title
              size="lg"
              level={3}
              className={`mb-4 transition-colors duration-300 ${darkMode ? "text-white" : ""}`}
            >
              Tooltip
            </Typography.Title>
            <Tooltip content="This is a tooltip">
              <Button variant="secondary">Hover me</Button>
            </Tooltip>
          </Card>

          {/* Accordion Component */}
          <Card
            className={`p-6 transition-colors duration-300 ${darkMode ? "bg-gray-800 border-gray-700" : ""}`}
          >
            <Typography.Title
              size="lg"
              level={3}
              className={`mb-4 transition-colors duration-300 ${darkMode ? "text-white" : ""}`}
            >
              Accordion
            </Typography.Title>
            <Accordion
              items={[
                {
                  id: "1",
                  title: "What is MP UI Components?",
                  content:
                    "A fast, scalable component library built with Tailwind CSS and tested with Cypress.",
                },
                {
                  id: "2",
                  title: "How to get started?",
                  content:
                    "Install the package and start using the components in your React application.",
                },
              ]}
            />
          </Card>

          {/* Dropdown Component */}
          <Card
            className={`p-6 transition-colors duration-300 ${darkMode ? "bg-gray-800 border-gray-700" : ""}`}
          >
            <Typography.Title
              size="lg"
              level={3}
              className={`mb-4 transition-colors duration-300 ${darkMode ? "text-white" : ""}`}
            >
              Dropdown
            </Typography.Title>
            <Dropdown
              items={[
                { id: "item1", label: "Item 1" },
                { id: "item2", label: "Item 2" },
                { id: "item3", label: "Item 3" },
              ]}
              trigger="Select item"
            />
          </Card>

          {/* Slider Component */}
          <Card
            className={`p-6 transition-colors duration-300 ${darkMode ? "bg-gray-800 border-gray-700" : ""}`}
          >
            <Typography.Title
              size="lg"
              level={3}
              className={`mb-4 transition-colors duration-300 ${darkMode ? "text-white" : ""}`}
            >
              Slider
            </Typography.Title>
            <div className="space-y-4">
              <Slider
                value={sliderValue}
                onValueChange={setSliderValue}
                min={0}
                max={100}
              />
              <Typography.Text
                size="sm"
                className={`transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-7"}`}
              >
                Value: {sliderValue}
              </Typography.Text>
            </div>
          </Card>

          {/* Progress Component */}
          <Card
            className={`p-6 transition-colors duration-300 ${darkMode ? "bg-gray-800 border-gray-700" : ""}`}
          >
            <Typography.Title
              size="lg"
              level={3}
              className={`mb-4 transition-colors duration-300 ${darkMode ? "text-white" : ""}`}
            >
              Progress
            </Typography.Title>
            <div className="space-y-4">
              <Progress value={75} />
              <Progress value={45} indicatorColor="info" />
            </div>
          </Card>

          {/* Typography Component */}
          <Card
            className={`p-6 transition-colors duration-300 ${darkMode ? "bg-gray-800 border-gray-700" : ""}`}
          >
            <Typography.Title
              size="lg"
              level={3}
              className={`mb-4 transition-colors duration-300 ${darkMode ? "text-white" : ""}`}
            >
              Typography
            </Typography.Title>
            <div className="space-y-2">
              <Typography.Text size="sm">Heading 1</Typography.Text>
              <Typography.Title size="xl">Heading 2</Typography.Title>
              <Typography.Text size="xs">Body text</Typography.Text>
              <Typography.Title size="lg">Caption text</Typography.Title>
            </div>
          </Card>

          {/* QR Barcode Component */}
          <Card
            className={`p-6 transition-colors duration-300 ${darkMode ? "bg-gray-800 border-gray-700" : ""}`}
          >
            <Typography.Title
              size="lg"
              level={3}
              className={`mb-4 transition-colors duration-300 ${darkMode ? "text-white" : ""}`}
            >
              QR Code
            </Typography.Title>
            <div className="flex justify-center">
              <QRBarcode
                className="w-[300px]"
                variant="barcode"
                value="https://mp-ui-components.com"
              />
            </div>
          </Card>

          {/* Pagination Component */}
          <Card
            className={`p-6 transition-colors duration-300 ${darkMode ? "bg-gray-800 border-gray-700" : ""}`}
          >
            <Typography.Title
              size="lg"
              level={3}
              className={`mb-4 transition-colors duration-300 ${darkMode ? "text-white" : ""}`}
            >
              Pagination
            </Typography.Title>
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              onPageChange={setCurrentPage}
            />
          </Card>

          {/* Notification Component */}
          <Card
            className={`p-6 transition-colors duration-300 ${darkMode ? "bg-gray-800 border-gray-700" : ""}`}
          >
            <Typography.Title
              size="lg"
              level={3}
              className={`mb-4 transition-colors duration-300 ${darkMode ? "text-white" : ""}`}
            >
              Notification
            </Typography.Title>
            <Notification
              type="info"
              title="Information"
              message="This is a notification message"
            />
          </Card>

          {/* Flex Component */}
          <Card
            className={`p-6 transition-colors duration-300 ${darkMode ? "bg-gray-800 border-gray-700" : ""}`}
          >
            <Typography.Title
              size="lg"
              level={3}
              className={`mb-4 transition-colors duration-300 ${darkMode ? "text-white" : ""}`}
            >
              Flex Layout
            </Typography.Title>
            <Flex direction="vertical" gap={4} align="center">
              <Button variant="primary" size="sm">
                Button 1
              </Button>
              <Button variant="secondary" size="sm">
                Button 2
              </Button>
              <Button variant="text" size="sm">
                Button 3
              </Button>
            </Flex>
          </Card>

          {/* Drawer Component */}
          <Card
            className={`p-6 transition-colors duration-300 ${darkMode ? "bg-gray-800 border-gray-700" : ""}`}
          >
            <Typography.Title
              size="lg"
              level={3}
              className={`mb-4 transition-colors duration-300 ${darkMode ? "text-white" : ""}`}
            >
              Drawer
            </Typography.Title>
            <Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
            <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <div className="space-y-4">
                <Typography.Text
                  className={`transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-7"}`}
                >
                  Drawer content goes here.
                </Typography.Text>
                <Button variant="primary" onClick={() => setDrawerOpen(false)}>
                  Close Drawer
                </Button>
              </div>
            </Drawer>
          </Card>
          {/* Modal Component */}
          <Card
            className={`p-6 transition-colors duration-300 ${darkMode ? "bg-gray-800 border-gray-700" : ""}`}
          >
            <Typography.Title
              size="lg"
              level={3}
              className={`mb-4 transition-colors duration-300 ${darkMode ? "text-white" : ""}`}
            >
              Modal
            </Typography.Title>
            <Button onClick={() => setOpen(true)}>Open Modal</Button>
            <Modal isOpen={open} title="Example Modal">
              <div className="space-y-4">
                <Typography.Text
                  className={`transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-7"}`}
                >
                  Modal content goes here. You can add any components or
                  content.
                </Typography.Text>
                <div className="flex gap-2 justify-end">
                  <Button variant="secondary" onClick={() => setOpen(false)}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={() => setOpen(false)}>
                    Confirm
                  </Button>
                </div>
              </div>
            </Modal>
          </Card>

          {/* List Component */}
          <Card
            className={`p-6 transition-colors duration-300 ${darkMode ? "bg-gray-800 border-gray-700" : ""}`}
          >
            <Typography.Title
              size="lg"
              level={3}
              className={`mb-4 transition-colors duration-300 ${darkMode ? "text-white" : ""}`}
            >
              List
            </Typography.Title>
            <List items={listItems} />
          </Card>

          {/* Divider Component */}
          <Card
            className={`p-6 transition-colors duration-300 ${darkMode ? "bg-gray-800 border-gray-700" : ""}`}
          >
            <Typography.Title
              size="lg"
              level={3}
              className={`mb-4 transition-colors duration-300 ${darkMode ? "text-white" : ""}`}
            >
              Divider
            </Typography.Title>
            <div className="space-y-4">
              <div className={`${darkMode ? "text-white" : "text-gray-10"}`}>
                Section 1
              </div>
              <Divider />
              <div className={`${darkMode ? "text-white" : "text-gray-10"}`}>
                Section 2
              </div>
              <Divider type="horizontal" className="h-8 w-full" />
              <div className={`${darkMode ? "text-white" : "text-gray-10"}`}>
                Section 3
              </div>
            </div>
          </Card>

          {/* Divider Component */}
          <Card
            className={`p-6 transition-colors duration-300 ${darkMode ? "bg-gray-800 border-gray-700" : ""}`}
          >
            <Typography.Title
              size="lg"
              level={3}
              className={`mb-4 transition-colors duration-300 ${darkMode ? "text-white" : ""}`}
            >
              Avatar
            </Typography.Title>
            <div className="space-y-4">
              <Avatar size="sm" />
              <Avatar size="md" bgClassName="bg-[#FFADC0]" />
              <Avatar size="lg" colorClassName="text-blue" />
              <Avatar size="xl" />
              <Avatar src="https://i.redd.it/80jykz32log21.png" />
              <Avatar icon={<CloseCircleIcon />} />
            </div>
          </Card>

          {/* Empty Component */}
          <Card
            className={`p-6 transition-colors duration-300 ${darkMode ? "bg-gray-800 border-gray-700" : ""}`}
          >
            <Typography.Title
              size="lg"
              level={3}
              className={`mb-4 transition-colors duration-300 ${darkMode ? "text-white" : ""}`}
            >
              Empty State
            </Typography.Title>
            <Empty />
          </Card>
        </section>

        {/* Features Section */}
        <section className="mt-16 text-center">
          <Typography.Title
            size="xl"
            className={`transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-10"} mb-8`}
          >
            Why MP UI Components?
          </Typography.Title>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-4xl">🚀</div>
              <Typography.Title
                size="lg"
                className={`transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-10"}`}
              >
                Fast
              </Typography.Title>
              <Typography.Text
                className={`transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-7"}`}
              >
                Optimized for performance with minimal bundle size
              </Typography.Text>
            </div>
            <div className="space-y-4">
              <div className="text-4xl">👌</div>
              <Typography.Title
                size="lg"
                className={`transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-10"}`}
              >
                Tested
              </Typography.Title>
              <Typography.Text
                className={`transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-7"}`}
              >
                All components tested with Vitest for reliability
              </Typography.Text>
            </div>
            <div className="space-y-4">
              <div className="text-4xl">😎</div>
              <Typography.Title
                size="lg"
                className={`transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-10"}`}
              >
                Styled
              </Typography.Title>
              <Typography.Text
                className={`transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-7"}`}
              >
                Built with Tailwind CSS for consistent design
              </Typography.Text>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className={`transition-colors duration-300 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-3"} border-t mt-16 px-6 py-8`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <Typography.Text
            className={`transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-7"}`}
          >
            Built with ❤️ using React, TypeScript, and Tailwind CSS
          </Typography.Text>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="#"
              className={`transition-colors duration-300 ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-6 hover:text-gray-10"}`}
            >
              Documentation
            </a>
            <a
              href="#"
              className={`transition-colors duration-300 ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-6 hover:text-gray-10"}`}
            >
              GitHub
            </a>
            <a
              href="#"
              className={`transition-colors duration-300 ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-6 hover:text-gray-10"}`}
            >
              NPM
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
