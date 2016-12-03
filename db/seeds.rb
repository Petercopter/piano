# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

pitches = [
  {
    name: 'C',
    scales: [
      {
        type: 'major',
        pitches: ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']
      }
    ]
  },
  {
    name: 'C♯'
  },
  {
    name: 'D♭'
  },
  {
    name: 'D'
  },
  {
    name: 'D♯'
  },
  {
    name: 'E♭'
  },
  {
    name: 'E'
  },
  {
    name: 'F'
  },
  {
    name: 'F♯'
  },
  {
    name: 'G♭'
  },
  {
    name: 'G'
  },
  {
    name: 'G♯'
  },
  {
    name: 'A♭'
  },
  {
    name: 'A'
  },
  {
    name: 'A♯'
  },
  {
    name: 'B♭'
  },
  {
    name: 'B'
  }
]

piano_keys = [
  {
    pitch: 'C'
  },
  {
    pitch: 'C♯ D♭'
  },
  {
    pitch: 'D'
  },
  {
    pitch: 'D♯ E♭'
  },
  {
    pitch: 'E'
  },
  {
    pitch: 'F'
  },
  {
    pitch: 'F♯ G♭'
  },
  {
    pitch: 'G'
  },
  {
    pitch: 'G♯ A♭'
  },
  {
    pitch: 'A'
  },
  {
    pitch: 'A♯ B♭'
  },
  {
    pitch: 'B'
  },
  {
    pitch: 'C'
  },
  {
    pitch: 'C♯ D♭'
  },
  {
    pitch: 'D'
  },
  {
    pitch: 'D♯ E♭'
  },
  {
    pitch: 'E'
  },
  {
    pitch: 'F'
  },
  {
    pitch: 'F♯ G♭'
  },
  {
    pitch: 'G'
  },
  {
    pitch: 'G♯ A♭'
  },
  {
    pitch: 'A'
  },
  {
    pitch: 'A♯ B♭'
  },
  {
    pitch: 'B'
  },
  {
    pitch: 'C'
  }
]

pitches.each do |pitch|
  Pitch.create(
    name: pitch[:name]
  )
end

# pitches.each do |pitch|
#   pitch[:scales].to_a.map{ |scale|
#     Scale.create(
#       type: scale[:type],
#       pitch: pitch.find_by(name: pitch[:name]),
#       pitches: scale[:pitches].map{ |pitch|
#         pitch.find_by(name: pitch)
#       }
#     )
#   }
# end

piano_keys.each do |piano_key|
  PianoKey.create(
    pitches: piano_key[:pitch].split(' ').map{ |pitch| Pitch.find_by(name: pitch) }
  )
end
