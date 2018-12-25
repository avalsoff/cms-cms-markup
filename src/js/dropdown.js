import u from 'umbrellajs'

export default function (name) {
  const buttons = u(`.${name}__toggler`)

  buttons.on('click', e => {
    const dropdown = u(e.target).closest(`.${name}`)
    dropdown.toggleClass(`${name}--opened`)
  })
}