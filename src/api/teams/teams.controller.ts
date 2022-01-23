import { Request, RequestHandler, Response } from 'express';
import {
  ITeam,
  IGetTeamReq,
  IAddTeamReq,
  IUpdateTeamReq,
  IDeleteTeamReq
} from './teams.model';
import * as TeamService from './teams.service';

/**
 * Get active team records
 *
 * @param req Express Request
 * @param res Express Response
 */
export const getTeams: RequestHandler = async (req: Request, res: Response) => {
  try {
    const teams = await TeamService.getTeams();

    res.status(200).json({
      teams
    });
  } catch (error) {
    console.error('[teams.controller][getTeams][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
    res.status(500).json({
      message: 'There was an error when fetching teams'
    });
  }
};

/**
 * Get team record based on id provided
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const getTeamById: RequestHandler = async (req: IGetTeamReq, res: Response) => {
  try {
    const team = await TeamService.getTeamById(req.params.id);

    res.status(200).json({
      team
    });
  } catch (error) {
    console.error('[teams.controller][getTeamById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
    res.status(500).json({
      message: 'There was an error when fetching team'
    });
  }
};

/**
 * Inserts a new team record based 
 *
 * @param req Express Request
 * @param res Express Response
 */
export const addTeam: RequestHandler = async (req: IAddTeamReq, res: Response) => {
  try {
    const result = await TeamService.insertTeam(req.body);

    res.status(200).json({
      result
    });
  } catch (error) {
    console.error('[teams.controller][addTeam][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
    res.status(500).json({
      message: 'There was an error when adding new team'
    });
  }
};

/**
 * Updates existing team record
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const updateTeamById: RequestHandler = async (req: IUpdateTeamReq, res: Response) => {
  try {
    const result = await TeamService.updateTeam({ ...req.body, id: req.params.id });

    res.status(200).json({
      result
    });
  } catch (error) {
    console.error('[teams.controller][updateTeamById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
    res.status(500).json({
      message: 'There was an error when updating team'
    });
  }
};

/**
 * deletes a team
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const deleteTeamById: RequestHandler = async (req: IDeleteTeamReq, res: Response) => {
  try {
    const result = await TeamService.deleteTeam(req.params.id);

    res.status(200).json({
      result
    });
  } catch (error) {
    console.error('[teams.controller][deleteTeamById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
    res.status(500).json({
      message: 'There was an error when deleting team'
    });
  }
};