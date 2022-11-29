import React, { FC, memo } from 'react';
import CraneSvg from '../svg/crane.svg';

export interface ICraneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CraneIcon: FC<ICraneIconProps> = memo(props => {
  return <CraneSvg {...props} />;
});
