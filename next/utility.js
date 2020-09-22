function randomId() {
  return Math.random().toString(36).substr(2, 9)
}
function pctString(vote, totalVote) {
  if (totalVote === 0) {
    return "No votes yet"
  } else if (vote === 0) {
    return "0%"
  } else if (vote === totalVote) {
    return "100%"
  } else {
    const pct = Math.round((vote / totalVote) * 100)
    return !pct ? "<1%" : pct === 100 ? ">99%" : `${pct}%`
  }
}
function voteString(vote) {
  if (vote === 0) {
    return `0 votes`
  } else if (vote === 1) {
    return `1 vote`
  } else {
    return `${vote} votes`
  }
}
const colorClasses = [
  "red accent-3",
  "blue accent-1",
  "green accent-3",
  "yellow accent-3",
  "orange accent-4",
  "purple accent-2",
  "cyan accent-3",
  "teal accent-3",
  "lime accent-3",
  "pink accent-2",
]

function genColorHexes(length) {
  let colorHexes = [
    "#ff1744",
    "#82b1ff",
    "#00e676",
    "#ffea00",
    "#ff6d00",
    "#e040fb",
    "#00e5ff",
    "#1de9b6",
    "#c6ff00",
    "#ff4081",
  ]
  if (length <= colorClasses.length) {
    return colorHexes.slice(0, length)
  } else {
    const multiple = Math.floor(length / colorClasses.length)
    const remainder = length % colorClasses.length
    if (multiple > 1) {
      for (let i = 1; i < multiple; i++) {
        colorHexes.push(...colorHexes)
      }
    }
    if (remainder > 0) {
      colorHexes.push(...colorHexes.slice(0, remainder))
      return colorHexes
    }
  }
}

function relativeDate(isoDateString) {
  const dateTime = require("datetime-difference")
  const d = dateTime(new Date(isoDateString), new Date())

  for (let i = 0; i < 5; i++) {
    let value = d[Object.keys(d)[i]]
    if (!value) {
      continue
    } else {
      return `${value} ${
        value === 1 ? Object.keys(d)[i].slice(0, -1) : Object.keys(d)[i]
      } ago`
    }
  }
  return "Just now"
}

function isEmptyArray(array) {
  return !Array.isArray(array) || array.length === 0
}

function dateTooltipString(isoDateString) {
  const d = new Date(isoDateString)
  const m = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const h = !d.getHours() ? "12" : d.getHours() % 12
  return `${d.getDate()} ${m[d.getMonth()]} ${d.getFullYear()} @ ${h}:${
    d.getMinutes() ? d.getMinutes() : "00"
  }${d.getHours() / 12 >= 1 ? "PM" : "AM"}`
}

const urlConfig =
  process.env.NODE_ENV !== "production"
    ? { protocol: "http", host: "localhost:3000" }
    : { protocol: "https", host: "generic-poll-app.herokuapp.com" }

export {
  randomId,
  pctString,
  voteString,
  colorClasses,
  genColorHexes,
  relativeDate,
  isEmptyArray,
  urlConfig,
  dateTooltipString,
}
