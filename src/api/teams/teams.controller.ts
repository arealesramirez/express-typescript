import { Request, RequestHandler, Response } from 'express';
import {
  ITeam,
  IGetTeamReq,
  IAddTeamReq,
  IUpdateTeamReq,
  IDeleteTeamReq
} from './teams.model';

const TEAMS: ITeam[]  = [
  { id: 1, name: 'Real Madrid', league: 'La Liga', isActive: true },
  { id: 2, name: 'Barcelona', league: 'La Liga', isActive: true },
  { id: 3, name: 'Manchester United', league: 'Premier League', isActive: true },
  { id: 4, name: 'Liverpool', league: 'Premier League', isActive: true },
  { id: 5, name: 'Arsenal', league: 'Premier League', isActive: true },
  { id: 6, name: 'Inter', league: 'Serie A', isActive: true },
  { id: 7, name: 'Milan', league: 'Serie A', isActive: true },
  { id: 8, name: 'Juventus', league: 'Serie A', isActive: true },
];

/**
 * Get active team records
 *
 * @param req Express Request
 * @param res Express Response
 */
export const getTeams: RequestHandler = (req: Request, res: Response) => {
  const activeTeams = TEAMS.filter((team) => team.isActive);
  res.send(activeTeams);
};

/**
 * Get team record based on id provided
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const getTeamById: RequestHandler = (req: IGetTeamReq, res: Response) => {
  const team = TEAMS.find((team) => team.id === +req.params.id && team.isActive);
  res.send(team);
};

/**
 * Inserts a new team record based 
 *
 * @param req Express Request
 * @param res Express Response
 */
export const addTeam: RequestHandler = (req: IAddTeamReq, res: Response) => {
  const lastTeamIndex = TEAMS.length - 1;
  const lastId = TEAMS[lastTeamIndex].id;
  const id = lastId + 1;
  const newTeam: ITeam = {
    ...req.body,
    id,
    isActive: true
  };

  TEAMS.push(newTeam);

  res.send(newTeam);
};

/**
 * Updates existing team record
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const updateTeamById: RequestHandler = (req: IUpdateTeamReq, res: Response) => {
  const currentTeam = TEAMS.find((team) => team.id === +req.params.id && team.isActive);
  currentTeam.name = req.body.name || currentTeam.name;
  currentTeam.league = req.body.league || currentTeam.league;

  res.send({ success: true });
};

/**
 * deletes a team
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const deleteTeamById: RequestHandler = (req: IDeleteTeamReq, res: Response) => {
  const teamIndex = TEAMS.findIndex((team) => team.id === +req.params.id && team.isActive);
  TEAMS.splice(teamIndex, 1);
  
  res.send({ success: true });
};