# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

notes = [
  {
    name: 'C',
    scales: [
      {
        type: 'major',
        notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']
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

notes.each do |note|
  Note.create(
    name: note[:name]
  )
end

notes.each do |note|
  note[:scales].to_a.map{ |scale|
    Scale.create(
      type: scale[:type],
      note: Note.find_by(name: note[:name]),
      notes: scale[:notes].map{ |note|
        Note.find_by(name: note)
      }
    )
  }
end
