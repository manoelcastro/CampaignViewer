function handleOnSubmit() {
  event.preventDefault()
  const form = document.forms["screenShotToolForm"]
  const url = form["urlField"].value
  const id = form["idField"].value
  const format = form["formatField"].value

  const openUrl = `${url}?sds_preview=${id}&format=${format}`
  const newWin = window.open(openUrl, '_blank')
  newWin.focus()
}