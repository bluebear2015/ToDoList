import { AppState } from "../AppState.js";
import { noteService } from "../services/NoteService.js";
import { Pop } from "../utils/Pop.js";
import { getFormData } from "../utils/FormHandler.js"
import { setHTML } from "../utils/Writer.js";
import { logger } from "../utils/Logger.js";


function _drawButton() {
  if (AppState.account) {
    setHTML('SaveButton', ' <button type="submit" class="btn glassCard text-danger">➕ ToDo</button> ')
  }
  else {
    Pop.error("login")
  }
}
function _drawNotes() {
  let template = ''
  let count = AppState.notes.length;

  AppState.notes.forEach(n => template += n.NoteTemplate)

  setHTML('SavedNote', template)
  setHTML('NoteCount', `Total Unfinished: ${count}`)
}


export class NoteController {
  constructor() {
    // debugger

    AppState.on('account', _drawButton)
    AppState.on('account', this.getNoteFromApi)
    AppState.on('notes', _drawNotes)





    console.log("note controller");
  }
  async getNoteFromApi() {
    try {
      await noteService.getNoteFromApi()
    } catch (error) {
      Pop.error(error)
    }


  }
  async postNote() {
    try {

      window.event?.preventDefault()

      const form = window.event?.target

      const formData = getFormData(form)

      console.log('form data', formData)

      await noteService.postNote(formData)

      form.reset()

    } catch (error) {
      Pop.error(error)
    }
  }
  async toggleCompleted(id) {
    try {
      await noteService.toggleNote(id)
    } catch (error) {
      Pop.error(error)
    }
    AppState.emit('notes', this.toggleCompleted)
  }


  async removeCompleted(Id) {
    try {
      const yes = await Pop.confirm('👏 ya sure its really done?👏')
      if (!yes) {
        return
      }
      await noteService.removeCompleted(Id)
    } catch (error) {
      Pop.error(error)
    }
    AppState.emit('notes', this.removeCompleted)
  }


}
