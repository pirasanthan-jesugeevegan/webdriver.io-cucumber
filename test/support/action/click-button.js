/**
 * Perform an click action on the given element
 * @param  {String}   selector Element selector
 */
export default async (selector) => {
  const elem = await $(selector);
  await elem.click();
};
