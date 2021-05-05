import { Router } from 'express';
import { getTeams } from './teams.controller';

const router = Router();

router.route('/').get(getTeams);

export default router;