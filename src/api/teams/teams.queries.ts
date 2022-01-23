export const TeamQueries = {
  GetTeams: `
  SELECT 
    id,
      name,
      league,
    (case when t.isActive is not null 
      then 'true'
      else 'false'
    end) as 'isActive'
  FROM teams_system.teams as t
  WHERE
      isActive = true
  `,

  GetTeamsById: `
  SELECT 
    id,
      name,
      league,
    (case when t.isActive is not null 
      then 'true'
      else 'false'
    end) as 'isActive'
  FROM teams_system.teams as t
  WHERE
    id = ?
  `,

  AddTeam: `
  INSERT INTO teams_system.teams (name, league, isActive)
    VALUES (?, ?, true);
  `,

  UpdateTeamById: `
  UPDATE teams_system.teams
  SET name = ?,
      league = ?
  WHERE
    id = ?
  `,

  DeleteTeamById: `
  UPDATE teams_system.teams
  SET isActive = false
  WHERE
    id = ?
  `
};