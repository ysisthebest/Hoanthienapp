import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 1️⃣ Khi mở app → lấy dữ liệu từ AsyncStorage
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("isLoggedIn");

        if (value !== null) {
          setIsLoggedIn(JSON.parse(value));
        }
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  // 2️⃣ Khi isLoggedIn thay đổi → lưu lại
  useEffect(() => {
    const saveData = async () => {
      try {
        await AsyncStorage.setItem(
          "isLoggedIn",
          JSON.stringify(isLoggedIn)
        );
      } catch (error) {
        console.log(error);
      }
    };

    saveData();
  }, [isLoggedIn]);

  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};