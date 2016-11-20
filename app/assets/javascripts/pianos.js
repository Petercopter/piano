$(document).ready(function() {
  $(document).on('change', '.dependent-key-select', function(event) {
    var noteSelect = $('.dependent-note-select', $(event.target).parents('.nested-fields'))
    $.getJSON(`/keys/${event.target.value}`, function(pianoKey) {
      noteSelect.empty()
      $.each(pianoKey.notes, function(index, note) {
        noteSelect.append($('<option>').text(note.name).attr('value', note.id));
      })
    })
  })
})
