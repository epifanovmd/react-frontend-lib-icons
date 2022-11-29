import React, { FC, memo } from 'react';
import HandSawSvg from '../svg/hand-saw.svg';

export interface IHandSawIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandSawIcon: FC<IHandSawIconProps> = memo(props => {
  return <HandSawSvg {...props} />;
});
