export function getCurrentTime() {
  var now = new Date();
  const min = String(now.getMinutes()).padStart(2, "0");
  const hrs = String(now.getHours()).padStart(2, "0");
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(now.getDate()).padStart(2, "0");
  const weekday = now.toLocaleDateString("en-US", { weekday: "long" });
  return [`${weekday}`, `${hrs}:${min}`, `${day}/${month}/${year}`];
}
