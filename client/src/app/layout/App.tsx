import { useState } from 'react'
import { Box, Container, CssBaseline, Typography } from '@mui/material';
import NavBar from './navbar';
import ActivityDashborad from '../../features/activities/dashborad/ActivityDashborad';
import { useActivities } from '../../lib/hooks/useActivities';


function App() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)
  const [editMode, setEditMode] = useState(false);
  const { activities, isPending } = useActivities();


  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities!.find(x => x.id === id))
  }
  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  }
  const handleOpenForm = (id?: string) => {
    if (id) handleSelectActivity(id);
    else handleCancelSelectActivity();
    setEditMode(true);
  }
  const handleCloseForm = () => {
    setEditMode(false);
  }

  return (
    <Box sx={{ bgcolor: '#eeeeee' }}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth='xl' sx={{ mt: 3 }}>
        {!activities || isPending ?
          (<Typography>...Loading</Typography>) :
          (<ActivityDashborad
          activities={activities}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          selectedActivity={selectedActivity}
          editMode={editMode}
          openForm={handleOpenForm}
          closeForm={handleCloseForm}
          />)}

      </Container>
    </Box>
  )
}

export default App
