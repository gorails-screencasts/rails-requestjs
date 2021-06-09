import { Controller } from "stimulus"
import { FetchRequest, patch } from '@rails/request.js'

export default class extends Controller {
  static values = { url: String }

  async toggle(event) {
    event.preventDefault()

    const request = new FetchRequest("patch", this.urlValue, {responseKind: "turbo-stream"})
    const response = await request.perform()
    if (response.ok) {
    }
  }
}
