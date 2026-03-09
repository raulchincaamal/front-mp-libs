const transform = {
  enter: "transform transition ease-in-out duration-500 sm:duration-700",
  leave: "transform transition ease-in-out duration-500 sm:duration-700",
}

const left = {
  ...transform,
  enterFrom: "-translate-x-full",
  enterTo: "translate-x-0",
  leaveFrom: "translate-x-0",
  leaveTo: "-translate-x-full",
}
const right = {
  ...transform,
  enterFrom: "translate-x-full",
  enterTo: "translate-x-0",
  leaveFrom: "translate-x-0",
  leaveTo: "translate-x-full",
}
const bottom = {
  ...transform,
  enterFrom: "translate-y-full",
  enterTo: "translate-y-0",
  leaveFrom: "translate-y-0",
  leaveTo: "translate-y-full",
}
const top = {
  ...transform,
  enterFrom: "-translate-y-full",
  enterTo: "translate-y-0",
  leaveFrom: "translate-y-0",
  leaveTo: "-translate-y-full",
}

export const positionDrawer = {
  top,
  left,
  bottom,
  right,
}
