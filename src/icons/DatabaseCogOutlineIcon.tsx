import React, { FC, memo } from 'react';
import DatabaseCogOutlineSvg from '../svg/database-cog-outline.svg';

export interface IDatabaseCogOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseCogOutlineIcon: FC<IDatabaseCogOutlineIconProps> = memo(props => {
  return <DatabaseCogOutlineSvg {...props} />;
});
