import { AppState } from "../AppState.js";
import { Note } from "../models/Note.js";
import { api } from "./AxiosService.js";



class NoteService {

  async getNoteFromApi() {
    const res = await api.get('api/todos')

    AppState.notes = res.data.map(n => new Note(n))

    console.log(res.data);

  }

  async postNote(formData) {
    const res = await api.post('api/todos', formData)
    const newNote = new Note(res.data)
    AppState.notes.push(newNote)
    AppState.emit('notes')
    console.log('from the service')
  }

  async toggleNote(id) {
    const note = AppState.notes.find(s => s.id == id)
    // NOTE flipping a bool
    note.completed = !note.completed
    const res = await api.put('api/todos/' + id, note)
    console.log('did it work?', res.data)
  }


  async removeCompleted(Id) {
    const res = await api.delete(`api/todos/${Id}`)
    console.log('[REMOVING COMPLETED]', res.data)

    AppState.notes = AppState.notes.filter(n => n.id != Id)
    AppState.emit("notes")
    console.log(AppState.notes)

  }


}
export const noteService = new NoteService