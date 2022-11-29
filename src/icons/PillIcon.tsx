import React, { FC, memo } from 'react';
import PillSvg from '../svg/pill.svg';

export interface IPillIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PillIcon: FC<IPillIconProps> = memo(props => {
  return <PillSvg {...props} />;
});
