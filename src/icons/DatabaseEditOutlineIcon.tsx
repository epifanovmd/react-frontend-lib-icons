import React, { FC, memo } from 'react';
import DatabaseEditOutlineSvg from '../svg/database-edit-outline.svg';

export interface IDatabaseEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseEditOutlineIcon: FC<IDatabaseEditOutlineIconProps> = memo(props => {
  return <DatabaseEditOutlineSvg {...props} />;
});
