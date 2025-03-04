import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Homepage from './pages/HomePage'
import MainLayout from './layout/Main'
import JobsPage from './pages/Jobs'
import ErrorPage from './pages/ErrorPage'
import Job, { jobLoader } from './pages/Job'
import AddJobs from './pages/AddJobs'
import EditJob from './pages/EditJob'


const App = () => {

  // Add Job

  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
    return;
  };

  // Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  }

  // Updates Job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/add-job" element={<AddJobs addJobSubmit={addJob} />} />
        <Route
          path="/job/:id"
          element={<Job deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="/edit-job/:id" element={<EditJob updateJobSubmit={updateJob} />} loader={jobLoader} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default App