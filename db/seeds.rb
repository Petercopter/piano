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
    type: 'natural',
    scales: [
      {
        type: 'major',
        notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']
      }
    ]
  },
  {
    name: 'C♯',
    type: 'sharp'
  },
  {
    name: 'D♭',
    type: 'flat'
  },
  {
    name: 'D',
    type: 'natural'
  },
  {
    name: 'D♯',
    type: 'sharp'
  },
  {
    name: 'E♭',
    type: 'flat'
  },
  {
    name: 'E',
    type: 'natural'
  },
  {
    name: 'F',
    type: 'natural'
  },
  {
    name: 'F♯',
    type: 'sharp'
  },
  {
    name: 'G♭',
    type: 'flat'
  },
  {
    name: 'G',
    type: 'natural'
  },
  {
    name: 'G♯',
    type: 'sharp'
  },
  {
    name: 'A♭',
    type: 'flat'
  },
  {
    name: 'A',
    type: 'natural'
  },
  {
    name: 'A♯',
    type: 'sharp'
  },
  {
    name: 'B♭',
    type: 'flat'
  },
  {
    name: 'B',
    type: 'natural'
  }
]

notes.each do |note|
  Note.create(
    name: note[:name],
    type: note[:type]
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
