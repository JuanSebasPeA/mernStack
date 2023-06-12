import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskProvider";


const TaskForm = () => {  

  const { createTaskContext } = useTasks();

  return (
    <div>
      {/* The component Formik hold the state of form */}
      <Formik
        // The prop initialValues is the initial values of the form
        initialValues={{
          title: "",
          description: "",
        
        }}
        // The function onSubmit is called when the form is submitted
        onSubmit={async (values, actions) => {
          //console.log(values);
          // The function createTaskRequest is called to create a task
          try {
            const response = await createTaskContext(values);
            console.log(response);
            // The function resetForm is called to reset the form
            actions.resetForm();
            //redirecting to root with redirect
            actions.props.history.push("/");
            //redirecting
            //window.location.href = "/";
            
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {/* The component Form is the form  */}
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
            />
            <br /> <br />
            <label>description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="write a description"
              onChange={handleChange}
              value={values.description}
            ></textarea>
            { isSubmitting && <p>Submitting form...</p> }
            <button type="submit" disabled={isSubmitting} >Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskForm;
