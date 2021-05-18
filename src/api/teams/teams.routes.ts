import { Router, } from 'express';
import * as Controller from './teams.controller';
import * as Auth from './../middlewares/auth.middleware';

const router = Router();

router
  .route('/')
  .get(
    Auth.authorize(['getTeams']),
    Controller.getTeams
  );

router
  .route('/:id')
  .get(
    Auth.authorize(['getTeams']),
    Controller.getTeamById
  );

router
  .route('/')
  .post(
    Auth.authorize(['addTeams']),
    Controller.addTeam
  );

router
  .route('/:id')
  .patch(
    Auth.authorize(['updateTeams']),
    Controller.updateTeamById
  );

router
  .route('/:id')
  .delete(
    Auth.authorize(['deleteTeams']),
    Controller.deleteTeamById
  );

export default router;