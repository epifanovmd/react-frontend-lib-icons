import React, { FC, memo } from 'react';
import DatabaseEyeOutlineSvg from '../svg/database-eye-outline.svg';

export interface IDatabaseEyeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseEyeOutlineIcon: FC<IDatabaseEyeOutlineIconProps> = memo(props => {
  return <DatabaseEyeOutlineSvg {...props} />;
});
