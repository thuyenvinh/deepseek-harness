/** Close-control copy owned by account notifications; notification content is server-localized. */
export const en = { close: 'Close' }
/** Chinese notification controls. */
export const zh = { close: '关闭' }
/** Japanese notification controls. */
export const ja = { close: '閉じる' }
/** Spanish notification controls. */
export const es = { close: 'Cerrar' }
/** French notification controls. */
export const fr = { close: 'Fermer' }
/** German notification controls. */
export const de = { close: 'Schließen' }
/** Russian notification controls. */
export const ru = { close: 'Закрыть' }
/** Portuguese notification controls. */
export const pt = { close: 'Fechar' }

/** Vietnamese copy, checked against the English keys. */
export const vi = {
  'close': 'Đóng',
} satisfies Record<keyof typeof en, string>

/** Localized notification control keys. */
export type NotificationKey = keyof typeof en
