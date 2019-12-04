use boatel
db.dropDatabase();

db.bookings.insertMany([
  {
    guest_name: "Popeye",
    guest_email_address: "Popeye@AOL.com",
    checked_in: true
  },
  {
    guest_name: "Micheal Bolton",
    guest_email_address: "mikeyB@icloud.com",
    checked_in: true
  }
]);
