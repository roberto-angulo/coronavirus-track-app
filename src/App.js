import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchTheData } from './api'

// Main App Component

export default class App extends React.Component {
  state = {
    data: {}
  }

  async componentDidMount() {
    const data = await fetchTheData();

    this.setState ( () => ({
      data
    }) )
  }
  render() {
    const data = this.state;
    return (
      <div className={styles.g_container}>
        <div className={styles.g_row}>
          <div className={`${styles.g_column} ${styles.text_center}`}>
            <Cards data={data} />
          </div>

          <div className={`${styles.g_column} ${styles.text_center}`}>
            <CountryPicker />
          </div>

          <div className={`${styles.g_column} ${styles.text_center}`}>
            <Chart />
          </div>
        </div>
      </div>
    );
  }
}
