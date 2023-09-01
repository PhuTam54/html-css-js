class FillInBlank extends Question {
  constructor(questionType, id, content, answers) {
    super(questionType, id, content, answers);
  }

  render(index) {
    return `
        <div>
          <p class="lead font-italic" style="font-size: 30px;">
            Câu ${index}: ${this.content}
          </p>
         <input id="answers-${this.id}" type="text" class="form-control w-50" />
        </div>
        `;
  }

  checkExact() {
    let value = document.getElementById(`answers-${this.id}`).value;
    value.toLowerCase();
    if (value === this.answers[0].content.toLowerCase()) {
      return true;
    }
    return false;
  }
}
