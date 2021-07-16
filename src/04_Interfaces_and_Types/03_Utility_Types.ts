/** Pick<Type, Keys> */

declare module Pick {
    interface Todo {
        title: string;
        description: string;
        completed: boolean;
    }

    type TodoPreview = Pick<Todo, "title" | "completed">;
}

const todoPick: Pick.TodoPreview = {
    title: "Clean room",
    completed: false
};

/** Omit<Type, Keys> */
declare module Omit {
    interface Todo {
        title: string;
        description: string;
        completed: boolean;
        createdAt: number;
    }

    type TodoPreview = Omit<Todo, "description">;
}


const todoOmit: Omit.TodoPreview = {
    title: "Clean room",
    completed: false,
    createdAt: 1615544252770,
};

type TodoInfo = Omit<Omit.Todo, "completed" | "createdAt">;

const todoInfo: TodoInfo = {
    title: "Pick up kids",
    description: "Kindergarten closes at 5pm",
};
