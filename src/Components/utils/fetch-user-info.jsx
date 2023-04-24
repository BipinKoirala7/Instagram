import React, { useEffect } from "react";

export function UserInfo() {
      async function getuserinfo() {
        const res = await fetch("https://randomuser.me/api/");
        const result = await res.json();
        let data;
        res.status
          ? data = {
              username: result.results[0].login.username,
              password: result.results[0].login.password,
              email: result.results[0].email,
              gender: result.results[0].gender,
              name: result.results[0].name.join(),
              profile_picture: result.results[0].picture.medium,
            }
          : (data = {
              username: "Bipin koirala",
              password: "bipin123",
              email: "koiralabipen",
              gender: "male",
              name: "Bipin Koirala",
              profile_picture: "../cristiano-ronaldo.jpg",
              })
          console.log(data)
      }
      getuserinfo();
}