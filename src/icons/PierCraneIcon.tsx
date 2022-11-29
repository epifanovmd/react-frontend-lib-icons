import React, { FC, memo } from 'react';
import PierCraneSvg from '../svg/pier-crane.svg';

export interface IPierCraneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PierCraneIcon: FC<IPierCraneIconProps> = memo(props => {
  return <PierCraneSvg {...props} />;
});
