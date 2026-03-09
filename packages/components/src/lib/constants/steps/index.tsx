import {
  DeniedIcon,
  HandQrIcon,
  SquaresIcon,
  LoadingIcon,
} from "@/assets/icons"
import type { IStep } from "@/interfaces/steps"

export const stepsTest: IStep[] = [
  {
    key: "handQR",
    description: "Revisa que no esté minimizado en la barra de tareas",
    icon: <HandQrIcon className="text-primary-blue" />,
  },
  {
    key: "Loading",
    description: "No des clic ni cierres el programa",
    icon: <LoadingIcon className="text-primary-blue" />,
  },
  {
    key: "Denied",
    description: "SSS",
    icon: <DeniedIcon className="text-primary-blue" />,
  },
  {
    key: "Squares",
    description: "",
    icon: <SquaresIcon className="text-primary-blue" />,
  },
]
