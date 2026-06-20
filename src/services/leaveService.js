import api from "./api";

export const applyLeave = (
  data
) =>
  api.post(
    "/leave/apply/",
    data
  );

export const getMyLeaves =
  () =>
    api.get(
      "/leave/my/"
    );

export const getLeaveBalance =
  () =>
    api.get(
      "/leave/balance/"
    );

export const getPendingLeaves =
  () =>
    api.get(
      "/leave/pending/"
    );

export const approveLeave =
  (id) =>
    api.post(
      `/leave/${id}/approve/`
    );

export const rejectLeave =
  (id) =>
    api.post(
      `/leave/${id}/reject/`
    );