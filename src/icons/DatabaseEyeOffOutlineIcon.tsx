import React, { FC, memo } from 'react';
import DatabaseEyeOffOutlineSvg from '../svg/database-eye-off-outline.svg';

export interface IDatabaseEyeOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseEyeOffOutlineIcon: FC<IDatabaseEyeOffOutlineIconProps> = memo(props => {
  return <DatabaseEyeOffOutlineSvg {...props} />;
});
