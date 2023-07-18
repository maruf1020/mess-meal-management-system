export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meal Management System</h1>
      </header>
      <main>
        <div className="mill-calender box">
          <h3>Mill Calender</h3>
          <div className="navigation">
            <button className="button">This Month</button>
            <div className="month-year picker">
              <button className="button">&#10094;</button>
              <input type="month" />
              <button className="button">&#10095;</button>
            </div>
            <select>
              <option value="all">All Members</option>
              <option value="maruf">Maruf</option>
              <option value="siam">Siam</option>
              <option value="miraj">Miraj</option>
              <option value="saif">Saif</option>
            </select>
          </div>
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
            </tbody>
          </table>
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
                  <input disabled type="checkbox" checked />
                </td>
                <td>
                  <input disabled type="checkbox" checked />
                </td>
                <td>
                  <input disabled type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <input disabled type="checkbox" checked />
                </td>
                <td>
                  <input disabled type="checkbox" />
                </td>
                <td>
                  <input disabled type="checkbox" checked />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="assign-mills box">
          <h3>Assign Mills</h3>
          <div className="navigation">
            <button className="button">Today</button>
            <div className="date-month-year picker">
              <button className="button">&#10094;</button>
              <input type="date" />
              <button className="button">&#10095;</button>
            </div>
          </div>
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
                  <input type="checkbox" checked />
                </td>
                <td>
                  <input type="checkbox" checked />
                </td>
                <td>
                  <input type="checkbox" />
                </td>

              </tr>
              <tr>
                <td>Miraz</td>
                <td>
                  <input type="checkbox" checked />
                </td>
                <td>
                  <input type="checkbox" checked />
                </td>
                <td>
                  <input type="checkbox" checked />
                </td>
              </tr>
              <tr>
                <td>Siam</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" checked />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="Short-summary box">
          <h3>Short Summary</h3>
          <div className="total-market">
            <span>Total Market: </span>
            <span>1000</span>
          </div>
          <div className="total-money">
            <span>Total Money: </span>
            <span>1000</span>
          </div>
          <div className="total-meal">
            <span>Total Meal: </span>
            <span>1000</span>
          </div>
          <div className="meal-rate">
            <span>Meal Rate: </span>
            <span>1000</span>
          </div>
          <div className="money-left">
            <span>Money Left: </span>
            <span>1000</span>
          </div>
        </div>
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
        <div className="money-store box">
          <h3>Money Store</h3>
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
        <div className="final-summary box">
          <h3>Final Summary</h3>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Marketing</th>
                <th>Store Money</th>
                <th>Meal</th>
                <th>Money</th>
              </tr>
              <tr>
                <td>Maruf</td>
                <td>2500</td>
                <td>2500</td>
                <td>2500</td>
                <td>2500</td>
              </tr>
              <tr>
                <td>Miraz</td>
                <td>3500</td>
                <td>3500</td>
                <td>3500</td>
                <td>3500</td>
              </tr>
              <tr>
                <td>Saif</td>
                <td>5500</td>
                <td>3500</td>
                <td>3500</td>
                <td>3500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <footer>
        <p>Developed by <a href="https://www.linkedin.com/in/maruf-billah-0699241aa/">Maruf Billah</a>. All rights reserved.</p>
      </footer>
    </div>
  );
}

