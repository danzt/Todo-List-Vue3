import Task from "../components/Task";

describe('Task Component', () => {
	it('should render a button to add a new task', () => {
		const wrapper = mount(Task);
		expect(wrapper.find('button').exists()).toBe(true);
	});

	// Displays a list of tasks
	it('should display a list of tasks', () => {
		const wrapper = mount(Task);
		expect(wrapper.find(Task).exists()).toBe(true);
	});

	// Allows user to remove a task
	it('should allow user to remove a task', () => {

		const wrapper = mount(Task);
		expect(wrapper.vm.handleRemoveTask).toBeDefined();
	});

	// Displays an empty list when there are no tasks
	it('should display an empty list when there are no tasks', () => {

		const wrapper = mount(Task);
		expect(wrapper.find(Task).exists()).toBe(false);
	});

	// Handles removing a task that does not exist
	it('should handle removing a task that does not exist', () => {
		const wrapper = mount(Task);
		expect(() => wrapper.vm.handleRemoveTask(999)).not.toThrow();
	});

	// Handles completing a task that does not exist
	it('should handle completing a task that does not exist', () => {
		const wrapper = mount(Task);
		expect(() => wrapper.vm.handleCompleteTask(999)).not.toThrow();
	});

});
