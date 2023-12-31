import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { Task } from "~/types";

export default defineComponent({
  name: "Task",
  props: {
    task: { type: Object as PropType<Task> },
    handleRemove: { type: Function },
    handleComplete: { type: Function }
  },

  render(props: any) {
    return (
      <div class="bg-white rounded-md shadow-md overflow-hidden">
        <div class="p-4">
          <div class="font-bold text-center text-xl mb-2">{props.task.title}</div>
          <div class="flex justify-center mb-4">
            {props.task.completed ?
              <span class="inline-flex items-center rounded-md bg-green-500 px-3 py-1 text-xs font-semibold text-white">Completada</span>
              :
              <span class="inline-flex items-center rounded-md bg-purple-500 px-3 py-1 text-xs font-semibold text-white">Pendiente</span>
            }
          </div>
        </div>
        <div class="p-4 flex justify-end px-6 py-4  mt-auto">
          <button onClick={() => props.handleRemove(props.task.id)} class="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mr-2 shadow-md">Eliminar</button>
          {!props.task.completed &&
            <button onClick={() => props.handleComplete(props.task.id)} class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-md">Completar</button>
          }
        </div>
      </div>
    );
  }
})
