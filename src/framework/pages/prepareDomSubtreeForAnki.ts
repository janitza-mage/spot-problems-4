import {delay} from "../util/delay.ts";

type StyleSnapshot = [string, string];
type StylesSnapshot = StyleSnapshot[];
type ElementStylesPair = [HTMLElement, StylesSnapshot];

export async function prepareDomSubtreeForAnki(subtreeRootElement: HTMLElement): Promise<void> {
  
  // capture all elements as well as a snapshot of their current styles
  const elementStylesPairs: ElementStylesPair[] = [];
  function collectElementStylesPairs(element: HTMLElement) {
    const styles = window.getComputedStyle(element);
    const stylesSnapshot: StylesSnapshot = [];
    for (const propertyName in styles) {
      
      // ignore some properties
      const numericPropertyName = Number.parseInt(propertyName, 10);
      if (!Number.isNaN(numericPropertyName)) {
        continue;
      }

      stylesSnapshot.push([propertyName, styles.getPropertyValue(propertyName)]);
    }
    elementStylesPairs.push([element, stylesSnapshot]);
    for (const childElement of element.children) {
      collectElementStylesPairs(childElement as HTMLElement);
    }
  }
  collectElementStylesPairs(subtreeRootElement);

  // remove CSS classes
  for (const [element, ] of elementStylesPairs) {
    element.removeAttribute("class");
  }
  
  // allow the browser to update computed styles
  await delay(1000);

  // remove all properties from the snapshot that are the same without CSS classes
  for (const [element, stylesSnapshot] of elementStylesPairs) {
    const computedStyles = window.getComputedStyle(element);
    // console.log("---");
    for (const [propertyName, propertyValue] of stylesSnapshot) {
      if (computedStyles.getPropertyValue(propertyName) !== propertyValue) {
        element.style.setProperty(propertyName, propertyValue)
        // console.log(`${propertyName}: ${propertyValue} / ${computedStyles.getPropertyValue(propertyName)}`);
      }
    }
  }

}
