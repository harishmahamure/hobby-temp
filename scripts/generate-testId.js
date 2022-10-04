export const parser = 'tsx'
const path = require('path')

module.exports = (file, { jscodeshift: j }, options) => {
  const source = j(file.source)
  const scriptName = path.basename(__filename)

  source.find(j.JSXElement).forEach((element, index) => {
    const name = scriptName + element?.value?.openingElement?.name?.name?.toString() + '-' + index
    const containsID = element.value.openingElement.attributes.filter(ele =>
      ele.name.name === 'data-testID'
    ).length >= 1
    if (!containsID) {
      const newComponent = j.jsxElement(
        j.jsxOpeningElement(element.node.openingElement.name, [
          ...element.node.openingElement.attributes,
          j.jsxAttribute(j.jsxIdentifier('data-testID'), j.stringLiteral(name))
        ]),
        element.node.closingElement,
        element.node.children
      )

      j(element).replaceWith(newComponent)
    }
  })

  return source.toSource()
}
