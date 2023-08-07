import {createStore, StoreActions} from "@/shared/lib/zustand-class";

class InitialState {}

class Actions extends StoreActions<InitialState>{}

export const useActionStore = createStore({
  initialState: new InitialState(),
  actionsClass: Actions,
});