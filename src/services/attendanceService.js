import api from "./api";

export const getAttendanceRecords =
  () =>
    api.get(
      "/attendance/records/"
    );

export const getAttendanceSummary =
  () =>
    api.get(
      "/attendance/summary/"
    );

export const getTodayAttendance =
  () =>
    api.get(
      "/attendance/my-today/"
    );

export const checkIn = () =>
  api.post(
    "/attendance/check-in/"
  );

export const checkOut = () =>
  api.post(
    "/attendance/check-out/"
  );