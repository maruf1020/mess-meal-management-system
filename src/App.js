import { useEffect, useState } from "react";

const membersData = [
  {
    id: 101,
    fullName: "Maruf Billah",
    name: "Maruf",
    email: "maruf@gmail.com",
    phone: "01700000000",
    address: "Dhaka, Bangladesh",
    image: "https://i.ibb.co/0j3hj0L/maruf.jpg",
  },
  {
    id: 102,
    fullName: "Siam Ahmed",
    name: "Siam",
    email: "siam@gmail.com",
    phone: "01700000000",
    address: "Dhaka, Bangladesh",
    image: "https://i.ibb.co/0j3hj0L/maruf.jpg",
  },
  {
    id: 103,
    fullName: "Miraj Ahmed",
    name: "Miraj",
    email: "miraz@gmail.com",
    phone: "01700000000",
    address: "Dhaka, Bangladesh",
    image: "https://i.ibb.co/0j3hj0L/maruf.jpg",
  },
  {
    id: 104,
    fullName: "Saif Ali Khan",
    name: "Saif",
    email: "saif@gmail.com",
    phone: "01700000000",
    address: "Dhaka, Bangladesh",
    image: "https://i.ibb.co/0j3hj0L/maruf.jpg",
  },
  {
    id: 105,
    fullName: "Rakib Hasan",
    name: "Rakib",
    email: "rakib@gmail.com",
    phone: "01700000000",
    address: "Dhaka, Bangladesh",
    image: "https://i.ibb.co/0j3hj0L/maruf.jpg",
  },
  {
    id: 106,
    fullName: "Rakib Hasan",
    name: "Rakib",
    email: "rakib@gmail.com",
    phone: "01700000000",
    address: "Dhaka, Bangladesh",
    image: "https://i.ibb.co/0j3hj0L/maruf.jpg",
  },
  {
    id: 107,
    fullName: "Sobuj Hasan",
    name: "Sobuj",
    email: "sobuj@gmail.com",
    phone: "01700000000",
    address: "Dhaka, Bangladesh",
    image: "https://i.ibb.co/0j3hj0L/maruf.jpg",
  },
  {
    id: 108,
    fullName: "Hridoy Sarwar",
    name: "Hridoy",
    email: "hridoy@gmail.com",
    phone: "01700000000",
    address: "Dhaka, Bangladesh",
    image: "https://i.ibb.co/0j3hj0L/maruf.jpg",
  },
];

const marketing = [
  {
    id: 201,
    date: "2023-08-01",
    userId: 101,
    cost: 1000,
    description: "Bazar for 1st September",
    isOwnPay: true,
  },
  {
    id: 202,
    date: "2023-08-02",
    userId: 102,
    cost: 1000,
    description: "Bazar for 2nd September",
    isOwnPay: false,
  },
  {
    id: 203,
    date: "2023-08-03",
    userId: 103,
    cost: 1000,
    description: "Bazar for 3rd September",
    isOwnPay: true,
  },
  {
    id: 204,
    date: "2023-08-04",
    userId: 104,
    cost: 1000,
    description: "Bazar for 4th September",
    isOwnPay: false,
  },
  {
    id: 205,
    date: "2023-08-05",
    userId: 105,
    cost: 1000,
    description: "Bazar for 5th September",
    isOwnPay: true,
  },
  {
    id: 206,
    date: "2023-08-06",
    userId: 106,
    cost: 1000,
    description: "Bazar for 6th September",
    isOwnPay: false,
  },
  {
    id: 207,
    date: "2023-08-07",
    userId: 107,
    cost: 1000,
    description: "Bazar for 7th September",
    isOwnPay: true,
  },
  {
    id: 208,
    date: "2023-08-08",
    userId: 108,
    cost: 1000,
    description: "Bazar for 8th September",
    isOwnPay: false,
  },
  {
    id: 209,
    date: "2023-08-09",
    userId: 101,
    cost: 1000,
    description: "Bazar for 9th September",
    isOwnPay: true,
  },
  {
    id: 210,
    date: "2023-08-10",
    userId: 102,
    cost: 1000,
    description: "Bazar for 10th September",
    isOwnPay: false,
  },
  {
    id: 211,
    date: "2023-08-11",
    userId: 103,
    cost: 1000,
    description: "Bazar for 11th September",
    isOwnPay: true,
  },
  {
    id: 212,
    date: "2023-08-12",
    userId: 104,
    cost: 1000,
    description: "Bazar for 12th September",
    isOwnPay: false,
  },
  {
    id: 213,
    date: "2023-08-13",
    userId: 105,
    cost: 1000,
    description: "Bazar for 13th September",
    isOwnPay: true,
  },
  {
    id: 214,
    date: "2023-08-14",
    userId: 106,
    cost: 1000,
    description: "Bazar for 14th September",
    isOwnPay: false,
  },
  {
    id: 215,
    date: "2023-08-15",
    userId: 107,
    cost: 1000,
    description: "Bazar for 15th September",
    isOwnPay: true,
  },
];

const mealsData = [
  {
    "id": "2023-08-01",
    "date": "2023-08-01",
    meals: [
      {
        userId: 101,
        meal: 5,
        details: [
          {
            type: "own",
            breakfast: 1,
            lunch: 1,
            dinner: 1,
          },
          {
            type: "guest",
            name: "Shumon",
            id: 201,
            breakfast: 1,
            lunch: 1,
            dinner: 0,
          },
        ]
        ,
      },
      {
        userId: 102,
        meal: 1,
        details: [
          {
            type: "own",
            breakfast: 1,
            lunch: 0,
            dinner: 0,
          },
        ]
        ,
      },
      {
        userId: 103,
        meal: 2,
        details: [
          {
            type: "own",
            breakfast: 1,
            lunch: 1,
            dinner: 0,
          },
        ]

      },
      {
        userId: 104,
        meal: 0,
        details: [
          {
            type: "own",
            breakfast: 0,
            lunch: 0,
            dinner: 0,
          },
          {
            type: "guest",
            name: "Ripon",
            id: 204,
            breakfast: 0,
            lunch: 0,
            dinner: 0,
          },
        ]

      },
    ],
  },
  {
    "id": "2023-08-02",
    "date": "2023-08-02",
    meals: [
      {
        userId: 101,
        meal: 5,
        details: [
          {
            type: "own",
            breakfast: 1,
            lunch: 1,
            dinner: 1,
          },
          {
            type: "guest",
            name: "Noman",
            id: 205,
            breakfast: 1,
            lunch: 1,
            dinner: 0,
          },
        ]
        ,
      },
      {
        userId: 102,
        meal: 4,
        details: [
          {
            type: "own",
            breakfast: 1,
            lunch: 1,
            dinner: 0,
          },
          {
            type: "guest",
            name: "Hasan",
            id: 206,
            breakfast: 0,
            lunch: 1,
            dinner: 1,
          },
        ]
        ,
      },
      {
        userId: 103,
        meal: 3,
        details: [
          {
            type: "own",
            breakfast: 1,
            lunch: 1,
            dinner: 0,
          },
        ]

      },
      {
        userId: 104,
        meal: 2,
        details: [
          {
            type: "own",
            breakfast: 1,
            lunch: 0,
            dinner: 0,
          },
        ]

      },
    ],
  },
  {
    "id": "2023-08-03",
    "date": "2023-08-03",
    meals: [
      {
        userId: 101,
        meal: 5,
        details: [
          {
            type: "own",
            breakfast: 1,
            lunch: 1,
            dinner: 0,
          },
          {
            type: "guest",
            name: "Shihan",
            id: 20611,
            breakfast: 0,
            lunch: 1,
            dinner: 1,
          },
          {
            type: "guest",
            name: "Habib",
            id: 20622,
            breakfast: 0,
            lunch: 1,
            dinner: 1,
          },
        ]
        ,
      },
      {
        userId: 102,
        meal: 4,
        details: [
          {
            type: "own",
            breakfast: 1,
            lunch: 1,
            dinner: 0,
          },
        ]
        ,
      },
      {
        userId: 103,
        meal: 3,
        details: [
          {
            type: "own",
            breakfast: 1,
            lunch: 1,
            dinner: 0,
          },
        ]

      },
      {
        userId: 104,
        meal: 2,
        details: [
          {
            type: "own",
            breakfast: 1,
            lunch: 0,
            dinner: 0,
          },
        ]

      },
    ],
  },
  {
    "id": "2023-08-08",
    "date": "2023-08-08",
    meals: [
      {
        userId: 101,
        meal: 5,
        details: [
          {
            type: "own",
            breakfast: 0,
            lunch: 1,
            dinner: 1,
          },
        ]
        ,
      },
      {
        userId: 102,
        meal: 4,
        details: [
          {
            type: "own",
            breakfast: 1,
            lunch: 1,
            dinner: 0,
          },
          {
            type: "guest",
            name: "Ripon",
            id: 2055,
            breakfast: 0,
            lunch: 1,
            dinner: 1,
          },
        ]
        ,
      },
      {
        userId: 103,
        meal: 3,
        details: [
          {
            type: "own",
            breakfast: 1,
            lunch: 1,
            dinner: 0,
          },
          {
            type: "guest",
            name: "Hasan",
            id: 2066,
            breakfast: 0,
            lunch: 0,
            dinner: 1,
          },
        ]

      },
      {
        userId: 104,
        meal: 2,
        details: [
          {
            type: "own",
            breakfast: 1,
            lunch: 0,
            dinner: 0,
          }
        ]

      },
    ],
  },
  {
    "id": "2023-07-08",
    "date": "2023-07-08",
    meals: [
      {
        userId: 101,
        meal: 5,
        details: [
          {
            type: "own",
            breakfast: 0,
            lunch: 1,
            dinner: 1,
          },
        ]
        ,
      },
      {
        userId: 104,
        meal: 2,
        details: [
          {
            type: "own",
            breakfast: 1,
            lunch: 0,
            dinner: 0,
          },
          {
            type: "guest",
            name: "Siam",
            id: 2099,
            breakfast: 1,
            lunch: 0,
            dinner: 0,
          },
        ]

      },
    ],
  },
];

const membersMonthWise = [
  {
    id: "2023-06",
    month: "2023-06",
    members: [101, 103]
  },
  {
    id: "2023-07",
    month: "2023-07",
    members: [101, 104]
  },
  {
    id: "2023-08",
    month: "2023-08",
    members: [101, 102, 103, 104]
  }
]

const storeMoney = [
  {
    userId: 101,
    amount: 1000,
    date: "2023-08-01",
  },
  {
    userId: 102,
    amount: 1000,
    date: "2023-08-01",
  },
  {
    userId: 103,
    amount: 1000,
    date: "2023-08-01",
  },
]

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="App-header">
      <h1>Meal Management System</h1>
    </header>
  );
}

function Main() {
  const [meals, setMeals] = useState([]);
  const [members, setMembers] = useState([]);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [membersInMonth, setMembersInMonth] = useState([]);


  useEffect(() => {
    const currentMonth = date.split("-")[0] + "-" + date.split("-")[1];
    setMembersInMonth(membersMonthWise.find(m => m.month === currentMonth)?.members || [])
  }, [date])

  useEffect(() => {
    setMeals(mealsData);
    setMembers(membersData);
  }, [])

  return (
    <main>
      {(members.length > 0 && meals.length > 0 && membersInMonth.length > 0) ?
        <>
          <LabelContainer />
          <MealCalender meals={meals} members={members} />
          <MealAssign setMeals={setMeals} meals={meals} members={members} date={date} setDate={setDate} membersInMonth={membersInMonth} />
          <ShortSummary />
          <MarketingHistory />
          <StoreMoneyHistory />
          <FinalSummary />
        </>
        : <p className="main-loading">Loading...</p>
      }
    </main>)
}

function Footer() {
  return (
    <footer>
      <p>Design and Developed by <a href="https://www.linkedin.com/in/maruf-billah-0699241aa/">Maruf Billah</a>. All rights reserved.</p>
    </footer>
  )
}

function LabelContainer() {
  return (
    <div className="label-container box">
      <button className="button">Add Member</button>
      <button className="button">All Members</button>
      <button className="button">Members in This Month</button>
      <button className="button">Add Bazar</button>
      <button className="button">Add Money</button>
    </div>
  );
}

function MealCalender({ meals, members }) {

  const [calenderMonth, setCalenderDate] = useState(new Date().toISOString().slice(0, 7));
  const [membersInMonth, setMembersInMonth] = useState([]);
  const [selectedMember, setSelectedMember] = useState("all");

  // this function will return a array with [01, 02 ... last day of month] and take month as argument like (2023-08)
  function getDaysInMonth(month) {
    const date = new Date(month);
    const days = [];
    while (date.getMonth() === new Date(month).getMonth()) {
      days.push(new Date(date).toISOString().slice(0, 10));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }


  let mealsInMonth = getDaysInMonth(calenderMonth).map(day => {
    return [...meals].find(meal => meal.date === day) ? [...meals].find(meal => meal.date === day) : { id: day, date: day, meals: [] }
  });

  const users = [...meals]
    .filter(meal => meal.id.includes(calenderMonth))
    .map(meal => {
      return meal.meals.map(m => m.userId)
    })
    //from array of array to array
    .flat()
    //remove duplicate
    .filter((value, index, self) => self.indexOf(value) === index)
    //sort
    .sort((a, b) => a - b);

  useEffect(() => {
    const all = { id: "all", name: "All" }
    setMembersInMonth([all, ...users.map(userId => {
      return { id: userId, name: members.find(member => member.id === userId).name }
    })])
  }, [calenderMonth])


  return (
    <div className="meal-calender box">
      <h3>Meal Calender</h3>
      <MonthNavigation
        calenderMonth={calenderMonth}
        setCalenderDate={setCalenderDate}
        membersInMonth={membersInMonth}
        selectedMember={selectedMember}
        setSelectedMember={setSelectedMember}
      />
      <h4>Displayed by {selectedMember === "all" ? "all member" : members.find(member => member.id === Number(selectedMember))?.name}</h4>
      {
        users.length <= 0 ? <p className="no-data-found">No meal history found in this month</p> :
          selectedMember === "all" ?
            (<table>
              <tbody>
                <tr>
                  <th>Date</th>
                  {
                    users
                      //map members id to get their name
                      .map(userId => {
                        return members.find(member => member.id === userId).name
                      })
                      //render to jsx
                      .map(userId => <th key={userId}>{userId}</th>)
                  }
                </tr>
                {
                  mealsInMonth
                    .filter(meal => meal.id.includes(calenderMonth))
                    .map(meal => {
                      return (
                        <tr key={meal.id}>
                          <td key={meal.date.split("-")[2]}>{meal.date.split("-")[2]}</td>
                          {
                            users.map(userId => {
                              return (
                                <>
                                  <td key={userId}>
                                    {meal.meals.find(m => m.userId === userId) && meal.meals.find(m => m.userId === userId).details.reduce((acc, cur) => {
                                      return acc + (cur.breakfast ? Number(cur.breakfast) : 0) + (cur.lunch ? Number(cur.lunch) : 0) + (cur.dinner ? Number(cur.dinner) : 0)
                                    }, 0) || 0}
                                  </td>
                                </>
                              )
                            })
                          }
                        </tr>
                      )
                    })
                }
              </tbody>
            </table>) : (<table>
              <tbody>
                <tr>
                  <th>Date</th>
                  <th>Breakfast</th>
                  <th>Lunch</th>
                  <th>Dinner</th>
                </tr>
                {
                  mealsInMonth.map(meal => {
                    let breakfast = meal.meals && meal.meals.find(m => m.userId === Number(selectedMember)) && meal.meals.find(m => m.userId === Number(selectedMember))?.details?.find(food => food.type === "own")?.breakfast === 1 ? "checked" : "";
                    let lunch = meal.meals && meal.meals.find(m => m.userId === Number(selectedMember)) && meal.meals.find(m => m.userId === Number(selectedMember))?.details?.find(food => food.type === "own")?.lunch === 1 ? "checked" : "";
                    let dinner = meal.meals && meal.meals.find(m => m.userId === Number(selectedMember)) && meal.meals.find(m => m.userId === Number(selectedMember))?.details?.find(food => food.type === "own")?.dinner === 1 ? "checked" : "";
                    return (
                      <tr key={meal.id}>
                        <td key={meal.id}>{meal.date.split("-")[2]}</td>
                        <td>
                          <input disabled type="checkbox" checked={breakfast} />
                        </td>
                        <td>
                          <input disabled type="checkbox" checked={lunch} />
                        </td>
                        <td>
                          <input disabled type="checkbox" checked={dinner} />
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>)}
    </div>
  )
}

function Checkbox({ handleMealChange, isChecked, value }) {
  const [checked, setChecked] = useState(isChecked)

  useEffect(() => {
    setChecked(isChecked)
  }, [isChecked])

  return (
    <input type="checkbox" checked={checked} value={value} key={value}
      onChange={e => {
        setChecked(e.target.checked)
        handleMealChange(e.target.value)
      }}
    />
  )
}

function MealAssign({ meals, setMeals, members, date, setDate, membersInMonth }) {

  const [selectedMember, setSelectedMember] = useState({ id: "guest", name: "Guest Owner" });
  const [guestName, setGuestName] = useState("");
  const [guestAddError, setGuestAddError] = useState(false);

  const guest = ({ id: "guest", name: "Guest Owner" })
  const membersData = [guest, ...membersInMonth.map(member => {
    return {
      id: member,
      name: members.find(m => m.id === member).name,
    }
  })]

  function handleMealChange(data) {
    const [userId, isOwn, food, name, guestId] = data.split(",");
    setMeals(prev => {
      //It can create new meal and also it can update the state of the last meal if it exists
      const newMeals = [...prev];
      const mealIndex = newMeals.findIndex(m => m.date === date);
      const meal = newMeals[mealIndex];
      //also check if the user is already in the meal
      console.log(prev)
      if (meal) {
        if (meal.meals.find(m => m.userId === Number(userId))) {

          const mealDetails = meal.meals.find(m => m.userId === Number(userId)).details;
          if (isOwn === "true") {
            if (mealDetails.find(m => m.type === "own")) {
              mealDetails.find(m => m.type === "own")[food] = mealDetails.find(m => m.type === "own")[food] === 1 ? 0 : 1;
            } else {
              mealDetails.push({
                type: "own",
                breakfast: 0,
                lunch: 0,
                dinner: 0,
              })
              mealDetails.find(m => m.type === "own")[food] = mealDetails.find(m => m.type === "own")[food] === 1 ? 0 : 1;
            }
          } else {
            if (mealDetails.find(m => m.type === "guest" && m.id === Number(guestId))) {
              mealDetails.find(m => m.type === "guest" && m.id === Number(guestId))[food] = mealDetails.find(m => m.type === "guest" && m.id === Number(guestId))[food] === 1 ? 0 : 1;
              console.log("mealDetails", mealDetails.find(m => m.type === "guest" && m.id === Number(guestId)))
            } else {
              mealDetails.push({
                type: "guest",
                name: name,
                id: Number(guestId),
                breakfast: 0,
                lunch: 0,
                dinner: 0,
              })
              mealDetails.find(m => m.type === "guest" && m.id === Number(guestId))[food] = mealDetails.find(m => m.type === "guest" && m.id === Number(guestId))[food] === 1 ? 0 : 1;
            }
          }
        } else {
          if (isOwn === "true") {
            let newData = {
              userId: Number(userId),
              meal: 1,
              details: [
                {
                  type: "own",
                  breakfast: 0,
                  lunch: 0,
                  dinner: 0,
                },
              ]
            }
            newData.details[0][food] = newData.details[0][food] === 1 ? 0 : 1;
            meal.meals.push(newData)
          } else {
            let newData = {
              userId: Number(userId),
              meal: 1,
              details: [
                {
                  type: "guest",
                  name: name,
                  id: Number(guestId),
                  breakfast: 0,
                  lunch: 0,
                  dinner: 0,
                },
              ]
            }
            newData.details[0][food] = newData.details[0][food] === 1 ? 0 : 1;
            meal.meals.push(newData)
          }
        }
      } else {
        if (isOwn === "true") {
          let newData = {
            id: date,
            date: date,
            meals: [
              {
                userId: Number(userId),
                meal: 1,
                details: [
                  {
                    type: "own",
                    breakfast: 0,
                    lunch: 0,
                    dinner: 0,
                  },
                ]
              }
            ]
          }
          newData.meals[0]["details"][0][food] = newData.meals[0]["details"][0][food] === 1 ? 0 : 1;
          newMeals.push(newData)
        } else {
          let newData = {
            id: date,
            date: date,
            meals: [
              {
                userId: Number(userId),
                meal: 1,
                details: [
                  {
                    type: "guest",
                    name: name,
                    id: Number(guestId),
                    breakfast: 0,
                    lunch: 0,
                    dinner: 0,
                  },
                ]
              }
            ]
          }
          newData.meals[0]["details"][0][food] = newData.meals[0]["details"][0][food] === 1 ? 0 : 1;
          newMeals.push(newData)
        }
      }
      return newMeals;
    })
  }

  function handleAddGuest(e) {
    e.preventDefault();

    if (selectedMember.id === "guest" || guestName === "") {
      setGuestAddError(true);
      setTimeout(() => {
        setGuestAddError(false);
      }, 3000);
    } else {
      setMeals(prev => {
        let newMeals = [...prev].find(m => m.date === date);

        if ([...prev].find(m => m.date === date) === undefined) {
          newMeals = {
            id: date,
            date: date,
            meals: []
          }
        }

        if (newMeals.meals.find(m => m.userId === Number(selectedMember)) === undefined) {
          newMeals.meals.push({
            userId: Number(selectedMember),
            meal: 1,
            details: []
          })
        }

        const newMealData = {
          breakfast: 0,
          lunch: 0,
          dinner: 0,
          type: "guest",
          name: guestName,
          id: Math.floor(Math.random() * 1000000000000000000),
        }

        newMeals.meals.find(m => m.userId === Number(selectedMember)).details.push(newMealData);

        setGuestName("");
        setSelectedMember({ id: "guest", name: "Guest Owner" });

        return [...prev].filter(m => m.date !== date).concat(newMeals);
      })
    }
  }

  const food = ["breakfast", "lunch", "dinner"]

  return (
    <div className="assign-meals box">
      <h3>Assign Meals</h3>
      <DateNavigation date={date} setDate={setDate} />

      {membersInMonth.length <= 0 ? <p className="no-data-found">No assign Member Member Available</p> :
        (<>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Breakfast</th>
                <th>Lunch</th>
                <th>Dinner</th>
              </tr>
              {

                membersInMonth.map(member => {
                  let memberWithGuest = [...meals].find(m => m.date === date)?.meals?.find(m => m.userId === member)?.details || [];

                  const ownerName = members.find(mbr => mbr.id === member).name;

                  memberWithGuest = memberWithGuest.map(m => {
                    const name = (m.type === "own") ? ownerName : m.name;
                    const id = (m.type === "own") ? member : m.id;
                    const isOwn = m.type === "own";
                    return {
                      name,
                      id,
                      isOwn,
                      food: [
                        {
                          name: "breakfast",
                          isChecked: m.breakfast === 1 ? "checked" : ""
                        },
                        {
                          name: "lunch",
                          isChecked: m.lunch === 1 ? "checked" : ""
                        },
                        {
                          name: "dinner",
                          isChecked: m.dinner === 1 ? "checked" : ""
                        }
                      ]
                    }
                  });

                  memberWithGuest = memberWithGuest.length === 0 ? [{
                    name: ownerName,
                    id: member,
                    isOwn: true,
                    food: [
                      {
                        name: "breakfast",
                        isChecked: 0
                      },
                      {
                        name: "lunch",
                        isChecked: 0
                      },
                      {
                        name: "dinner",
                        isChecked: 0
                      }
                    ]
                  }] : memberWithGuest;

                  memberWithGuest = memberWithGuest.find(m => m.isOwn === true) ? memberWithGuest : memberWithGuest.concat({
                    name: ownerName,
                    id: member,
                    isOwn: true,
                    food: [
                      {
                        name: "breakfast",
                        isChecked: 0
                      },
                      {
                        name: "lunch",
                        isChecked: 0
                      },
                      {
                        name: "dinner",
                        isChecked: 0
                      }
                    ]
                  });

                  memberWithGuest = memberWithGuest.sort((a, b) => {
                    if (a.isOwn) {
                      return -1;
                    } else {
                      return 1;
                    }
                  })

                  return memberWithGuest.map(x => (
                    <tr key={x.id} >
                      <td key={x.id}>{x.isOwn ? x.name : x.name + "(" + ownerName + ")"}</td>
                      {
                        food.map(f => {
                          return (
                            <td key={f}>
                              <Checkbox
                                key={member + "," + x.isOwn + "," + f + "," + x.name + "," + x.id}
                                data={f}
                                type="checkbox"
                                value={member + "," + x.isOwn + "," + f + "," + x.name + "," + x.id}
                                isChecked={x.food.find(fd => fd.name === f).isChecked}
                                handleMealChange={handleMealChange} />
                            </td>
                          )
                        })
                      }
                    </tr>)
                  )
                })
              }
            </tbody>
          </table>
          <h4 className="add-guest-title">Add a Guest</h4>
          <form className="add-guest-wrapper">
            <SelectMembers
              members={membersData}
              onChangeMember={setSelectedMember}
              selectedMember={selectedMember} />
            <input type="text" placeholder="Guest Name" value={guestName} onChange={(e) => setGuestName(e.target.value)} />
            <button className="button" type="submit" onClick={handleAddGuest}>&#10009; Add</button>
          </form>
          {guestAddError && <p className="no-data-found">Please select a member and put a guest name</p>}
        </>)}
    </div>
  )
}

function ShortSummary() {
  return (
    <div className="short-summary box">
      <h3>Short Summary</h3>
      <table>
        <tbody>
          <tr>
            <td>Total Market</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>Total Money</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>Total Meal</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>Meal Rate</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>Money Left</td>
            <td>1000</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function MarketingHistory() {
  return (
    <div className="marketing-history box">
      <h3>Marketing History</h3>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Bazar</th>
            <th>Money</th>
          </tr>
          <tr>
            <td>Maruf</td>
            <td>5</td>
            <td>2500</td>
          </tr>
          <tr>
            <td>Miraz</td>
            <td>5</td>
            <td>3500</td>
          </tr>
          <tr>
            <td>Saif</td>
            <td>5</td>
            <td>5500</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function StoreMoneyHistory() {
  return (
    <div className="money-store box">
      <h3>Money Store History</h3>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Money</th>
          </tr>
          <tr>
            <td>Maruf</td>
            <td>2500</td>
          </tr>
          <tr>
            <td>Miraz</td>
            <td>3500</td>
          </tr>
          <tr>
            <td>Saif</td>
            <td>5500</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function FinalSummary() {
  return (
    <div className="final-summary box">
      <h3>Final Summary</h3>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Marketing</th>
            <th>Store Money</th>
            <th>Meal Count</th>
            <th>Meal Cost</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>Maruf</td>
            <td>2500</td>
            <td>2500</td>
            <td>25</td>
            <td>2500</td>
            <td>2500</td>
          </tr>
          <tr>
            <td>Miraz</td>
            <td>3500</td>
            <td>3500</td>
            <td>35</td>
            <td>3500</td>
            <td>3500</td>
          </tr>
          <tr>
            <td>Saif</td>
            <td>5500</td>
            <td>3500</td>
            <td>35</td>
            <td>3500</td>
            <td>3500</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


// Month Navigation
function MonthNavigation({ calenderMonth, setCalenderDate, membersInMonth, selectedMember, setSelectedMember }) {
  function handleMonthIncrease() {
    setCalenderDate(curr => {
      const [year, month] = curr.split('-')
      const newMonth = parseInt(month) > 11 ? 1 : parseInt(month) + 1
      return `${parseInt(month) > 11 ? parseInt(year) + 1 : year}-${newMonth < 10 ? '0' + newMonth : newMonth}`
    })
  }
  function handleMonthDecrease() {
    setCalenderDate(curr => {
      const [year, month] = curr.split('-')
      const newMonth = parseInt(month) < 2 ? 12 : parseInt(month) - 1
      return `${parseInt(month) < 2 ? parseInt(year) - 1 : year}-${newMonth < 10 ? '0' + newMonth : newMonth}`
    })
  }

  function currentMonth() {
    setCalenderDate(new Date().toISOString().slice(0, 7))
  }

  function handleMonthChange(month) {
    month === "" ? currentMonth() : setCalenderDate(month);
  }

  return (
    <div className="navigation">
      <button className="button"
        onClick={() => currentMonth()}>This Month</button>
      <MonthPicker
        onIncrease={handleMonthIncrease}
        onDecrease={handleMonthDecrease}
        calenderMonth={calenderMonth}
        onMonthChange={handleMonthChange} />
      <SelectMembers
        members={membersInMonth}
        onChangeMember={setSelectedMember}
        selectedMember={selectedMember} />
    </div>
  )
}

// Month Picker
function MonthPicker({ onIncrease, onDecrease, calenderMonth, onMonthChange }) {
  return (
    <div className="date-year picker">
      <button className="button" onClick={onDecrease}>&#10094;</button>
      <MonthInput calenderMonth={calenderMonth} onChange={onMonthChange} />
      <button className="button" onClick={onIncrease}>&#10095;</button>
    </div>
  )
}

// Month Input
function MonthInput({ calenderMonth, onChange }) {
  return <input type="month" value={calenderMonth} onChange={e => onChange(e.target.value)} />
}


// Date Navigation
function DateNavigation({ date, setDate }) {

  function daysInThisMonth(uMonth, uYear) {
    let date = new Date();
    let month = uMonth || date.getMonth();
    let year = uYear || date.getFullYear();
    return new Date(year, month, 0).getDate();
  }

  function handleDateIncrease() {
    setDate(curr => {
      const [year, month, day] = curr.split('-');
      const monthDays = daysInThisMonth(parseInt(month), parseInt(year));
      const newDay = parseInt(day) >= monthDays ? 1 : parseInt(day) + 1;
      const newMonth = parseInt(day) >= monthDays ? parseInt(month) > 11 ? 1 : parseInt(month) + 1 < 10 ? '0' + (parseInt(month) + 1) : parseInt(month) + 1 : month;
      const newYear = parseInt(day) >= monthDays ? parseInt(month) > 11 ? parseInt(year) + 1 : year : year;
      return `${newYear}-${newMonth < 10 ? newMonth : newMonth}-${newDay < 10 ? '0' + newDay : newDay}`
    })
  }
  function handleDateDecrease() {
    setDate(curr => {
      const [year, month, day] = curr.split('-');
      const monthDays = daysInThisMonth(day < 2 ? parseInt(month) < 2 ? 12 : parseInt(month) - 1 : parseInt(month), day < 2 ? parseInt(month) < 2 ? parseInt(year) - 1 : year : year);
      const newDay = parseInt(day) < 2 ? monthDays : parseInt(day) - 1;
      const newMonth = parseInt(day) < 2 ? parseInt(month) < 2 ? 12 : parseInt(month) - 1 < 10 ? '0' + (parseInt(month) - 1) : parseInt(month) - 1 : month;
      const newYear = parseInt(day) < 2 ? parseInt(month) < 2 ? parseInt(year) - 1 : year : year;
      return `${newYear}-${newMonth < 10 ? newMonth : newMonth}-${newDay < 10 ? '0' + newDay : newDay}`
    });
  }



  function currentDate() {
    setDate(new Date().toISOString().slice(0, 10))
  }

  function handleDateChange(date) {
    date === "" ? currentDate() : setDate(date);
  }



  return (
    <div className="navigation">
      <button className="button" onClick={() => currentDate()}>Today</button>
      <DatePicker
        onIncrease={handleDateIncrease}
        onDecrease={handleDateDecrease}
        date={date}
        onDateChange={handleDateChange} />
    </div>
  )
}

// Date Picker
function DatePicker({ onIncrease, onDecrease, date, onDateChange }) {
  return (
    <div className="date-month-year picker">
      <button className="button" onClick={onDecrease}>&#10094;</button>
      <DateInput date={date} onChange={onDateChange} />
      <button className="button" onClick={onIncrease}>&#10095;</button>
    </div>
  )
}

// Date Input
function DateInput({ date, onChange }) {
  return <input type="date" value={date} onChange={e => onChange(e.target.value)} />
}

//Select Members
function SelectMembers({ members, onChangeMember, selectedMember }) {
  function handleMemberChange(e) {
    onChangeMember(e.target.value)
  }

  return (
    <select value={selectedMember.id} onChange={handleMemberChange}>
      {members.map(member => <option key={member.id} value={member.id}>{member.name}</option>)}
    </select>
  )
}
