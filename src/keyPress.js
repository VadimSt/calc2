import { keys } from 'keycodes-map'

const alterKeys = {
  backspace: 8,
}

const genKeyEventParams = (keyCode, modifiers, preventDefault) => ({
  keyCode,
  modifiers,
  preventDefault,
})

export const multipleKeys = [
  genKeyEventParams(keys.num0, [], true),
  genKeyEventParams(keys.num1, [], true),
  genKeyEventParams(keys.num2, [], true),
  genKeyEventParams(keys.num3, [], true),
  genKeyEventParams(keys.num4, [], true),
  genKeyEventParams(keys.num5, [], true),
  genKeyEventParams(keys.num6, [], true),
  genKeyEventParams(keys.num7, [], true),
  genKeyEventParams(keys.num8, [], true),
  genKeyEventParams(keys.num9, [], true),
  genKeyEventParams(keys.numpad0, [], true),
  genKeyEventParams(keys.numpad1, [], true),
  genKeyEventParams(keys.numpad2, [], true),
  genKeyEventParams(keys.numpad3, [], true),
  genKeyEventParams(keys.numpad4, [], true),
  genKeyEventParams(keys.numpad5, [], true),
  genKeyEventParams(keys.numpad6, [], true),
  genKeyEventParams(keys.numpad7, [], true),
  genKeyEventParams(keys.numpad8, [], true),
  genKeyEventParams(keys.numpad9, [], true),
  genKeyEventParams(keys.numpadEqual, [], true),
  genKeyEventParams(keys.numpadMultiply, [], true),
  genKeyEventParams(keys.numpadSubtract, [], true),
  genKeyEventParams(keys.numpadDivide, [], true),
  genKeyEventParams(keys.numpadAdd, [], true),
  genKeyEventParams(keys.delete, [], true),
  genKeyEventParams(keys.num8, ['shiftKey'], true),
  genKeyEventParams(keys.minus, [], true),
  genKeyEventParams(keys.equal, ['shiftKey'], true),
  genKeyEventParams(keys.equal, [], true),
  genKeyEventParams(keys.enter, [], true),
  genKeyEventParams(keys.escape, [], true),
  genKeyEventParams(alterKeys.backspace, [], true),
]
