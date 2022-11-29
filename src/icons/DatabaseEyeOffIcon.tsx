import React, { FC, memo } from 'react';
import DatabaseEyeOffSvg from '../svg/database-eye-off.svg';

export interface IDatabaseEyeOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseEyeOffIcon: FC<IDatabaseEyeOffIconProps> = memo(props => {
  return <DatabaseEyeOffSvg {...props} />;
});
