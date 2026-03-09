import { loginES_MX } from "../layout"

const es = {
  translation: {
    layout: {
      ...loginES_MX,
      header: {
        store: "Centro",
      },
    },
    header: {
      signOut: "Cerrar Sesión",
      store: "Tienda",
      cashRegister: "Caja",
      roleName: "Vendedor",
      sessionExp: "Tu sesión está por expirar",
      continueSessionPrefix: "La sesión se cerrará automáticamente en",
      continueSessionSuffix: "segundos, confirma para continuar con la sesión",
    },
    common: {
      yes: "Si",
      accept: "Aceptar",
      no: "No",
      cancel: "Cancelar",
      send: "Enviar",
      save: "Guardar",
      name: "Nombre",
      names: "Nombre(s)",
      lastName: "Apellido paterno",
      secondName: "Apellido materno",
      street: "Calle",
      extNumber: "Número exterior",
      colony: "Colonia",
      CP: "Código postal",
      upload: "Cargar archivo",
      goBack: "Regresar",
      goForward: "Continuar",
      goToLoginButton: "Ir a login",
      search: "Buscar",
      htmlTitle: "Macropay HelpDesk",
      themedark: "Modo Oscuro",
      goToMenu: "Ir a menú",
      closeMenu: "Cerrar",
      step: "Paso {{value}}",
      changeCenter: "Cambiar centro",
      closeSession: "Cerrar sesión",
      yesForward: "Si, continuar",
      blackList: {
        title: "Verifica para continuar",
        message: "¿Estás seguro que deseas continuar?",
      },
      messageChangeCenter:
        "Regresarás al menú principal para cambiar el centro. ¿Estás seguro que deseas realizar esta acción? Perderás el flujo actual.",
      messageCloseSession:
        "¿Estás seguro que deseas cerrar la sesión de tu cuenta?",
    },
  },
}

export default es
