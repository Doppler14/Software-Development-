const { Schema } = mongoose;

const personSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number },
  favoriteFoods: { type: [String] }
});

const Person = mongoose.model('Person', personSchema);

//Part 2
// Create a new person instance and save it to the database
const person = new Person({
  name: 'John Doe',
  age: 30,
  favoriteFoods: ['Pizza', 'Burger']
});

//Part 3
person.save(function(err, data) {
  if (err) return console.error(err);
  console.log('Person saved:', data);
});

const arrayOfPeople = [
  { name: 'Jane Smith', age: 25, favoriteFoods: ['Sushi', 'Pasta'] },
  { name: 'Michael Johnson', age: 40, favoriteFoods: ['Steak', 'Salad'] }
];

Person.create(arrayOfPeople, function(err, people) {
  if (err) return console.error(err);
  console.log('Multiple people saved:', people);
});

//Part 4
// Find all people with a given name
Person.find({ name: 'John Doe' }, function(err, people) {
  if (err) return console.error(err);
  console.log('People found:', people);
});

// Find one person with a specific food in favorites
Person.findOne({ favoriteFoods: 'Pizza' }, function(err, person) {
  if (err) return console.error(err);
  console.log('Person found with favorite food:', person);
});

// Find a person by _id and update favoriteFoods
const personId = 'your_person_id';
Person.findById(personId, function(err, person) {
  if (err) return console.error(err);
  
  // Update favoriteFoods
  person.favoriteFoods.push('Hamburger');
  person.save(function(err, updatedPerson) {
    if (err) return console.error(err);
    console.log('Person updated:', updatedPerson);
  });
});

//Part 5
// Find and update a person by name
const personName = 'Jane Smith';
Person.findOneAndUpdate({ name: personName }, { age: 20 }, { new: true }, function(err, updatedPerson) {
  if (err) return console.error(err);
  console.log('Updated person:', updatedPerson);
});

//Part 6
// Delete a person by _id
const PersonId = 'your_person_id';
Person.findByIdAndRemove(personId, function(err, removedPerson) {
  if (err) return console.error(err);
  console.log('Removed person:', removedPerson);
});

// Delete all people named "Mary"
Person.remove({ name: 'Mary' }, function(err, result) {
  if (err) return console.error(err);
  console.log('Number of people removed:', result.deletedCount);
});

//Part 7
// Find people who like burritos, sort by name, limit to 2, and hide their age
Person.find({ favoriteFoods: 'Burritos' })
  .sort('name')
  .limit(2)
  .select('-age')
  .exec(function(err, people) {
    if (err) return console.error(err);
    console.log('Filtered people:', people);
  });


