import React, { FC, memo } from 'react';
import PeaceSvg from '../svg/peace.svg';

export interface IPeaceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PeaceIcon: FC<IPeaceIconProps> = memo(props => {
  return <PeaceSvg {...props} />;
});
