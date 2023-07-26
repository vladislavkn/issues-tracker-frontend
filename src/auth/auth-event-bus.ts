import EventBus from "js-event-bus";

export const authEventBus = new EventBus();

export enum authEvent {
  LOGOUT = "LOGOUT",
  LOGIN = "LOGIN",
}
