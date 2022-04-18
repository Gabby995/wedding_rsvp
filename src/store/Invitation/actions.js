import { POSTCallHelper, GETCallHelper } from "../../services.js";

export default {
  // Get ALL Invitations
  async getInvitations(context) {
    const response = await GETCallHelper("/invitations");
    context.commit("setInvitations", response.data);
  },
  // Get SINGLE Invitation
  async getInvitation(context, payload) {
    const response = await POSTCallHelper("/invitation", payload);
    if (response.data.success === false) {
      throw new Error("DetailsIssue");
    }
    context.commit("setInvitation", response.data);
  },
  // Update Invitation
  async updateInvitation(context, payload) {
    const response = await POSTCallHelper("/update", payload);
    if (response.data.success === false) {
      throw new Error("UpdateIssue");
    } else {
      context.commit("setUpdateSuccess", true);
    }
  },
};
