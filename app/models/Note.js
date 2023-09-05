import { AppState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class Note {
  constructor(data) {
    this.id = data.id || generateId() || ''
    this.title = data.title
    this.date = data.data ? new Date(data.date) : new Date() || ''
    this.description = data.description
    this.name = data.creator.name
    this.color = data.color
    this.completed = data.completed || false


  }


  get NoteTemplate() {
    return `
        <div class="row d-flex justify-content-center m-2">
    <div class=" col-8 glassCard form-check note  text-center p-1">
      <div class="text-center">
        <h4 class="title text-dark"> <em>${this.name}</em> ToDo's: </h4>
          <input type="checkbox" onchange="app.NoteController.toggleCompleted('${this.id}')"  ${this.completedCheckbox} >
             <p class="fs-5 text-bold text-dark">Completed: <span class = "text-decoration-underline"> ${this.completed} </span>  </p>
            <p class="fs-5 text-dark text-bold">${this.description}</p>
            <button onclick="app.NoteController.removeCompleted('${this.id}')"  
            class="btn btn-warning m-2"><i class="mdi mdi-check-outline"></i></button>
      </div>
    </div>
    </div>   `
  }

  get completedCheckbox() {
    return this.completed ? 'checked' : ''
  }
}