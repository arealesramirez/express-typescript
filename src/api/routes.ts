import { Router } from 'express';
import TeamRoutes from './teams/teams.routes';
import * as Auth from './middlewares/auth.middleware';

const router = Router();

router.use('/teams', Auth.authorize(['ttte']), TeamRoutes);

export default router;