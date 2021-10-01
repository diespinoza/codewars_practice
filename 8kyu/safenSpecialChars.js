//replace the ampersand, then left then right brackets, then quotes
function htmlspecialchars(formData) {
  return formData.replace(/[&]/g , "&amp;").replace(/[<]/g , "&lt;").replace(/[>]/g , "&gt;").replace(/["]/g , "&quot;")
}
