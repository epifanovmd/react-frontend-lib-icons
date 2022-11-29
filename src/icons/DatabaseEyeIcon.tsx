import React, { FC, memo } from 'react';
import DatabaseEyeSvg from '../svg/database-eye.svg';

export interface IDatabaseEyeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseEyeIcon: FC<IDatabaseEyeIconProps> = memo(props => {
  return <DatabaseEyeSvg {...props} />;
});
