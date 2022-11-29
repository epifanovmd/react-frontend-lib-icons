import React, { FC, memo } from 'react';
import RodentSvg from '../svg/rodent.svg';

export interface IRodentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RodentIcon: FC<IRodentIconProps> = memo(props => {
  return <RodentSvg {...props} />;
});
