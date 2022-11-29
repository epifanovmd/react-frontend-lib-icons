import React, { FC, memo } from 'react';
import DatabaseCogSvg from '../svg/database-cog.svg';

export interface IDatabaseCogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseCogIcon: FC<IDatabaseCogIconProps> = memo(props => {
  return <DatabaseCogSvg {...props} />;
});
