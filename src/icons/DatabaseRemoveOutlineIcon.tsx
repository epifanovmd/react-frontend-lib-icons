import React, { FC, memo } from 'react';
import DatabaseRemoveOutlineSvg from '../svg/database-remove-outline.svg';

export interface IDatabaseRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseRemoveOutlineIcon: FC<IDatabaseRemoveOutlineIconProps> = memo(props => {
  return <DatabaseRemoveOutlineSvg {...props} />;
});
