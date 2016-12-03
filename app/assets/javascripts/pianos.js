$(document).ready(function() {
  $(document).on('change', '.dependent-piano-key-select', function(event) {
    var pitchSelect = $('.dependent-pitch-select', $(event.target).parents('.nested-fields'))
    $.getJSON(`/piano_keys/${event.target.value}`, function(pianoKey) {
      pitchSelect.empty()
      $.each(pianoKey.pitches, function(index, pitch) {
        pitchSelect.append($('<option>').text(pitch.name).attr('value', pitch.id));
      })
    })
  })
})
