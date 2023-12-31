import { defineComponent } from "vue";
import { useAppStore } from "~/stores/app.store";
import Task from "../../components/Task";
import ModalNewTask from "~/components/ModalNewTask";
export default defineComponent({
  name: "Tasks",
  setup(props) {

    const appStore = useAppStore();
    const { taskList } = storeToRefs(appStore);
    const open = ref<boolean>(false);

    onMounted(() => {
      appStore.fetchTasks();
    })

    const handleCreateTask = (title: string) => {
      appStore.addTask({
        id: taskList.value.length + 1,
        title: title,
        completed: false
      })
      open.value = false
    }
    const handleRemoveTask = (id: number) => {
      appStore.removeTask(id)
    }

    const handleCompleteTask = (id: number) => {
      appStore.completeTask(id)
    }

    return () => (
      <div>
        <div class="grid grid-cols-12 p-4">
          <div class="col-span-12 flex items-center">
            <button onClick={() => open.value = true}
                    class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full shadow-md">Agregar
              Tarea
            </button>
            <div class="ml-4 h-6 bg-gray-300 w-1"></div>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-4 p-4">
          {taskList.value.map((task) => {
            return h(Task, {
              key: task.id,
              task,
              handleRemove: handleRemoveTask,
              handleComplete: handleCompleteTask
            })
          })}
        </div>
        <ModalNewTask open={open} handleCreateTask={handleCreateTask}/>
      </div>
    )
  },
})
