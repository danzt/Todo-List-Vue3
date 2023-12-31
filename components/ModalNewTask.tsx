import { Dialog, TransitionRoot, TransitionChild, DialogPanel, DialogTitle } from '@headlessui/vue'
import { defineProps, ref } from 'vue'

export default {
  props: {
    open: Boolean,
    handleCreateTask: Function
  },

  name: 'ModalNewTask',

  setup(props:any) {

    const open = ref(props.open);
    const title = ref('');

    const handleClose = () => {
      open.value = false
    }

    const handleCreate = () => {
      props.handleCreateTask(title.value)
    }

    return () => (
      <TransitionRoot as="template" show={open.value}>
        <Dialog as="div" class="relative z-10" onClose={handleClose}>
          <TransitionChild as="template" enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </TransitionChild>

          <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <TransitionChild as="template" enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div class="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button type="button" class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={handleClose}>
                      <span class="sr-only">Cancelar</span>
                    </button>
                  </div>
                  <div class="sm:flex sm:items-start">
                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">Agregar Nueva Tarea</DialogTitle>
                      <div class="mt-4 mb-2">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Titulo</label>
                        <div class="relative mt-2 rounded-md shadow-sm">
                          <input type="email" v-model={title.value} class="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button type="button" class="inline-flex w-full justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 sm:ml-3 sm:w-auto" onClick={handleCreate}>Agregar</button>
                    <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={handleClose}>Cancel</button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    )
  }
}

