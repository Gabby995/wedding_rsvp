import { POSTCallHelper, GETCallHelper } from "../../services.js";
export default {
  // Get ALL Invitations
  async getInvitations(context) {
    const response = await GETCallHelper("/invitations");
    console.log("InvitationS: ", response.data);
    context.commit("setInvitations", response.data);
  },
  // Get SINGLE Invitation
  async getInvitation(context, payload) {
    const response = await POSTCallHelper("/invitation", payload);
    console.log("InvitatioN: ", response.data);
    if (response.data.success === false) {
      throw new Error("DetailsIssue");
    }
    context.commit("setInvitation", response.data);
  },
  // Update Invitation
  async updateInvitaion(context, payload) {
    console.log("PAYLOD: ", payload);
    const response = await POSTCallHelper("/update", payload);
    console.log("UpdateInvitation: ", response.data);
    // context.commit("setInvitation", response.data);
  },
};
