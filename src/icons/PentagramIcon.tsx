import React, { FC, memo } from 'react';
import PentagramSvg from '../svg/pentagram.svg';

export interface IPentagramIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PentagramIcon: FC<IPentagramIconProps> = memo(props => {
  return <PentagramSvg {...props} />;
});
