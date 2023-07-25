import { useState } from "react";

const members = [
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
    date: "2021-09-01",
    userId: 101,
    cost: 1000,
    description: "Bazar for 1st September",
    isOwnPay: true,
  },
  {
    id: 202,
    date: "2021-09-02",
    userId: 102,
    cost: 1000,
    description: "Bazar for 2nd September",
    isOwnPay: false,
  },
  {
    id: 203,
    date: "2021-09-03",
    userId: 103,
    cost: 1000,
    description: "Bazar for 3rd September",
    isOwnPay: true,
  },
  {
    id: 204,
    date: "2021-09-04",
    userId: 104,
    cost: 1000,
    description: "Bazar for 4th September",
    isOwnPay: false,
  },
  {
    id: 205,
    date: "2021-09-05",
    userId: 105,
    cost: 1000,
    description: "Bazar for 5th September",
    isOwnPay: true,
  },
  {
    id: 206,
    date: "2021-09-06",
    userId: 106,
    cost: 1000,
    description: "Bazar for 6th September",
    isOwnPay: false,
  },
  {
    id: 207,
    date: "2021-09-07",
    userId: 107,
    cost: 1000,
    description: "Bazar for 7th September",
    isOwnPay: true,
  },
  {
    id: 208,
    date: "2021-09-08",
    userId: 108,
    cost: 1000,
    description: "Bazar for 8th September",
    isOwnPay: false,
  },
  {
    id: 209,
    date: "2021-09-09",
    userId: 101,
    cost: 1000,
    description: "Bazar for 9th September",
    isOwnPay: true,
  },
  {
    id: 210,
    date: "2021-09-10",
    userId: 102,
    cost: 1000,
    description: "Bazar for 10th September",
    isOwnPay: false,
  },
  {
    id: 211,
    date: "2021-09-11",
    userId: 103,
    cost: 1000,
    description: "Bazar for 11th September",
    isOwnPay: true,
  },
  {
    id: 212,
    date: "2021-09-12",
    userId: 104,
    cost: 1000,
    description: "Bazar for 12th September",
    isOwnPay: false,
  },
  {
    id: 213,
    date: "2021-09-13",
    userId: 105,
    cost: 1000,
    description: "Bazar for 13th September",
    isOwnPay: true,
  },
  {
    id: 214,
    date: "2021-09-14",
    userId: 106,
    cost: 1000,
    description: "Bazar for 14th September",
    isOwnPay: false,
  },
  {
    id: 215,
    date: "2021-09-15",
    userId: 107,
    cost: 1000,
    description: "Bazar for 15th September",
    isOwnPay: true,
  },
];

const meal = [
  {
    "id": "2021-09-01",
    "date": "2021-09-01",
    mills: [
      {
        userId: 101,
        meal: 5,
        details: [
          {
            own: {
              breakfast: 1,
              lunch: 1,
              dinner: 1,
            },
            guest: {
              breakfast: 1,
              lunch: 1,
              dinner: 0,
            }
          }
        ],
      },
      {
        userId: 102,
        meal: 4,
        details: [
          {
            own: {
              breakfast: 1,
              lunch: 1,
              dinner: 0,
            },
            guest: {
              breakfast: 0,
              lunch: 1,
              dinner: 1,
            }
          }
        ],
      },
      {
        userId: 103,
        meal: 3,
        details: [
          {
            own: {
              breakfast: 1,
              lunch: 1,
              dinner: 0,
            },
            guest: {
              breakfast: 0,
              lunch: 0,
              dinner: 1,
            }
          }
        ]
      },
      {
        userId: 104,
        meal: 2,
        details: [
          {
            own: {
              breakfast: 1,
              lunch: 0,
              dinner: 0,
            },
            guest: {
              breakfast: 1,
              lunch: 0,
              dinner: 0,
            }
          }
        ]
      },
    ],
  },
  {
    "id": "2021-09-02",
    "date": "2021-09-02",
    mills: [
      {
        userId: 101,
        meal: 5,
        details: [
          {
            own: {
              breakfast: 1,
              lunch: 1,
              dinner: 1,
            },
            guest: {
              breakfast: 1,
              lunch: 1,
              dinner: 0,
            }
          }
        ],
      },
      {
        userId: 102,
        meal: 4,
        details: [
          {
            own: {
              breakfast: 1,
              lunch: 1,
              dinner: 0,
            },
            guest: {
              breakfast: 0,
              lunch: 1,
              dinner: 1,
            }
          }
        ],
      },
      {
        userId: 103,
        meal: 3,
        details: [
          {
            own: {
              breakfast: 1,
              lunch: 1,
              dinner: 0,
            },
            guest: {
              breakfast: 0,
              lunch: 0,
              dinner: 1,
            }
          }
        ]
      },
      {
        userId: 104,
        meal: 2,
        details: [
          {
            own: {
              breakfast: 1,
              lunch: 0,
              dinner: 0,
            },
            guest: {
              breakfast: 1,
              lunch: 0,
              dinner: 0,
            }
          }
        ]
      },
    ],
  },
  {
    "id": "2021-09-03",
    "date": "2021-09-03",
    mills: [
      {
        userId: 101,
        meal: 5,
        details: [
          {
            own: {
              breakfast: 1,
              lunch: 1,
              dinner: 1,
            },
            guest: {
              breakfast: 1,
              lunch: 1,
              dinner: 0,
            }
          }
        ],
      },
      {
        userId: 102,
        meal: 4,
        details: [
          {
            own: {
              breakfast: 1,
              lunch: 1,
              dinner: 0,
            },
            guest: {
              breakfast: 0,
              lunch: 1,
              dinner: 1,
            }
          }
        ],
      },
      {
        userId: 103,
        meal: 3,
        details: [
          {
            own: {
              breakfast: 1,
              lunch: 1,
              dinner: 0,
            },
            guest: {
              breakfast: 0,
              lunch: 0,
              dinner: 1,
            }
          }
        ]
      },
      {
        userId: 104,
        meal: 2,
        details: [
          {
            own: {
              breakfast: 1,
              lunch: 0,
              dinner: 0,
            },
            guest: {
              breakfast: 1,
              lunch: 0,
              dinner: 0,
            }
          }
        ]
      },
    ],
  },
];

const membersInMonth = [101, 102, 103, 104];

const storeMoney = [
  {
    userId: 101,
    amount: 1000,
    date: "2021-09-01",
  },
  {
    userId: 102,
    amount: 1000,
    date: "2021-09-01",
  },
  {
    userId: 103,
    amount: 1000,
    date: "2021-09-01",
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
  return (
    <main>
      <LabelContainer />
      <MealCalender />
      <MealAssign />
      <ShortSummary />
      <MarketingHistory />
      <StoreMoneyHistory />
      <FinalSummary />
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

function MealCalender() {
  return (
    <div className="meal-calender box">
      <h3>Meal Calender</h3>
      <MonthNavigation />
      <h4>Displayed by All Members</h4>
      <table>

        <tbody>
          <tr>
            <th>Date</th>
            <th>Maruf</th>
            <th>Siam</th>
            <th>Miraj</th>
            <th>Saif</th>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>2</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>5</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>6</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <br />
      <br />
      <br />
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Dinner</th>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <input disabled type="checkbox" />
            </td>
            <td>
              <input disabled type="checkbox" />
            </td>
            <td>
              <input disabled type="checkbox" />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <input disabled type="checkbox" />
            </td>
            <td>
              <input disabled type="checkbox" />
            </td>
            <td>
              <input disabled type="checkbox" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function MealAssign() {
  return (
    <div className="assign-mills box">
      <h3>Assign Meals</h3>
      <DateNavigation />
      <table>
        <tbody>
          <tr>
            <th>Time</th>
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Dinner</th>
          </tr>
          <tr>
            <td>Maruf</td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>

          </tr>
          <tr>
            <td>Miraz</td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
          <tr>
            <td>Siam</td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
          <tr>
            <td>Aman (Siam)</td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
        </tbody>
      </table>
      <button className="add-guest-button button">&#10009; Add Guest</button>
      <form className="add-guest-wrapper">
        <select>
          <option value="0">Guest Owner</option>
          <option value="maruf">Maruf</option>
          <option value="siam">Siam</option>
          <option value="miraj">Miraj</option>
          <option value="saif">Saif</option>
        </select>
        <input type="text" placeholder="Guest Name" />
        <button className="button" type="submit">&#10009; Add</button>
      </form>
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
function MonthNavigation({ onMonthChange }) {
  const [calenderMonth, setCalenderDate] = useState(new Date().toISOString().slice(0, 7));
  const [membersInMonth, setMembersInMonth] = useState([101, 102, 103, 104]);

  function _setCalenderDate(date) {
    setCalenderDate(date)
    // onMonthChange(date)
  }

  function handleMonthIncrease() {
    _setCalenderDate(curr => {
      const [year, month] = curr.split('-')
      const newMonth = parseInt(month) > 11 ? 1 : parseInt(month) + 1
      return `${parseInt(month) > 11 ? parseInt(year) + 1 : year}-${newMonth < 10 ? '0' + newMonth : newMonth}`
    })
  }
  function handleMonthDecrease() {
    _setCalenderDate(curr => {
      const [year, month] = curr.split('-')
      const newMonth = parseInt(month) < 2 ? 12 : parseInt(month) - 1
      return `${parseInt(month) < 2 ? parseInt(year) - 1 : year}-${newMonth < 10 ? '0' + newMonth : newMonth}`
    })
  }

  function currentMonth() {
    _setCalenderDate(new Date().toISOString().slice(0, 7))
  }

  function handleMonthChange(month) {
    month === "" ? currentMonth() : _setCalenderDate(month);
  }

  return (
    <div className="navigation">
      <button className="button" onClick={() => currentMonth()}>This Month</button>
      <MonthPicker onIncrease={handleMonthIncrease} onDecrease={handleMonthDecrease} calenderMonth={calenderMonth} onMonthChange={handleMonthChange} />
      <SelectMembers members={members} onChangeMember={setMembersInMonth} selectedMember={membersInMonth} />
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
function DateNavigation({ onDateChange }) {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))

  function daysInThisMonth(uMonth, uYear) {
    let date = new Date();
    let month = uMonth || date.getMonth();
    let year = uYear || date.getFullYear();
    return new Date(year, month, 0).getDate();
  }

  function _setDate(date) {
    setDate(date)
    // onDateChange(date)
  }

  function handleDateIncrease() {
    _setDate(curr => {
      const [year, month, day] = curr.split('-');
      const monthDays = daysInThisMonth(parseInt(month), parseInt(year));
      const newDay = parseInt(day) >= monthDays ? 1 : parseInt(day) + 1;
      const newMonth = parseInt(day) >= monthDays ? parseInt(month) > 11 ? 1 : parseInt(month) + 1 < 10 ? '0' + (parseInt(month) + 1) : parseInt(month) + 1 : month;
      const newYear = parseInt(day) >= monthDays ? parseInt(month) > 11 ? parseInt(year) + 1 : year : year;
      return `${newYear}-${newMonth < 10 ? newMonth : newMonth}-${newDay < 10 ? '0' + newDay : newDay}`
    })
  }
  function handleDateDecrease() {
    _setDate(curr => {
      const [year, month, day] = curr.split('-');
      const monthDays = daysInThisMonth(day < 2 ? parseInt(month) < 2 ? 12 : parseInt(month) - 1 : parseInt(month), day < 2 ? parseInt(month) < 2 ? parseInt(year) - 1 : year : year);
      const newDay = parseInt(day) < 2 ? monthDays : parseInt(day) - 1;
      const newMonth = parseInt(day) < 2 ? parseInt(month) < 2 ? 12 : parseInt(month) - 1 < 10 ? '0' + (parseInt(month) - 1) : parseInt(month) - 1 : month;
      const newYear = parseInt(day) < 2 ? parseInt(month) < 2 ? parseInt(year) - 1 : year : year;
      return `${newYear}-${newMonth < 10 ? newMonth : newMonth}-${newDay < 10 ? '0' + newDay : newDay}`
    });
  }



  function currentDate() {
    _setDate(new Date().toISOString().slice(0, 10))
  }

  function handleDateChange(date) {
    date === "" ? currentDate() : _setDate(date);
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
    const selectedMember = Array.from(e.target.selectedOptions, option => option.value);
    onChangeMember(selectedMember)
  }

  return (
    <select value={selectedMember.id} onChange={handleMemberChange}>
      {members.map(member => <option key={member.id} value={member.id}>{member.name}</option>)}
    </select>

  )
}
