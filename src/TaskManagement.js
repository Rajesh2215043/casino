// import { Link } from "react-router-dom";
import "./TaskManagement.css";

function TaskManagement() {
  return (
    <div className="app-container">
      <header className="header">
        <nav className="nav">
          <img className="logo" src="Hamburger2.png" alt="" />
        </nav>
      </header>

      <section className="search-section">
        <section className="search-box">
          <h1 className="title">Task Management</h1>
          {/* <div className="input-container">
            <input
              className="input-field"
              placeholder="Enter the recharge details you are looking for"
              type="text"
            />
            <button className="search-button">Search</button>
          </div> */}
        </section>
      </section>
      <section className="form-section">
        <div className="form-content">
          <lable>ID</lable>
          <br />
          <br />
          <input
            className="input-field"
            placeholder="Enter the Task ID"
            type="text"
          />
          <br />
          <br />
          <lable className="lable-name">Heading</lable>
          <br />
          <br />
          <input
            className="input-field"
            placeholder="Enter the Heading"
            type="text"
          />
          <br />
          <br />
          <lable>Min Bet Amount</lable>
          <br />
          <br />
          <input
            className="input-field"
            placeholder="Enter the Min Bet Amount"
            type="text"
          />
          <br />
          <br />
          <lable>Min Deposite Amount</lable>
          <br />
          <br />
          <input
            className="input-field"
            placeholder="Enter the Min Deposite Amount"
            type="text"
          />
          <br />
          <br />
          <lable>Reward</lable>
          <br />
          <br />
          <input
            className="input-field"
            placeholder="Enter the Reward"
            type="text"
          />
          <br />
          <br />
          <lable>Reward Heading</lable>
          <br />
          <br />
          <input
            className="input-field"
            placeholder="Enter the Reward Heading"
            type="text"
          />
          <br />
          <br />
          <lable>Reward Type</lable>
          <br />
          <br />
          <select className="input-field-select">
            <option value="Thing Given">Thing Given</option>
            <option value="Money Given">Money Given</option>
          </select>
          <br />
          <br />
          <lable>Task Type</lable>
          <br />
          <br />
          <select className="input-field-select">
            <option value="DepositAmount">Deposit Amount</option>
            <option value="BetAmount">Bet Amount</option>
          </select>
          <br />
          <br />
          <lable>Status</lable>
          <br />
          <br />
          <select className="input-field-select">
            <option value="Live">Live</option>
            <option value="Finished">Finished</option>
          </select>
        </div>
        <br />
        <br />
        <div className="button-container">
          <button className="submit-button">Submit</button>
        </div>
      </section>
      <section className="table-section">
        <div className="table-header">
          <div className="header-content">
            <h1 className="header-title">TASK MANAGEMENT</h1>
          </div>
        </div>

        <div className="table-container">
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Heading</th>
                  <th>Min Bet Amount</th>
                  <th>Min Deposite Amount</th>
                  <th>Reward</th>
                  <th>Reward Heading</th>
                  <th>Reward Type</th>
                  <th>Task Type</th>
                  <th>Status</th>
                  <th>Change Status</th>
                </tr>
              </thead>

              <tbody>
                {[...Array(10)].map((_, index) => (
                  <tr key={index} className="table-row">
                    <td>123</td>
                    <td className="heading">Bet Now win a Car</td>
                    <td>1000</td>
                    <td>0</td>
                    <td>300</td>
                    <td>Win car or Bike</td>
                    <td>0 (Other Thing Given)</td>
                    <td>0 (Using DepositAmount)</td>
                    <td>0 (Live)</td>
                    <td>123</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TaskManagement;
