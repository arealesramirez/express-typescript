import { Router } from 'express';
import TeamRoutes from './teams/teams.routes';

const router = Router();

router.use('/teams', TeamRoutes);

export default router;