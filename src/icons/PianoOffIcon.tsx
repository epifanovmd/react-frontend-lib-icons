import React, { FC, memo } from 'react';
import PianoOffSvg from '../svg/piano-off.svg';

export interface IPianoOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PianoOffIcon: FC<IPianoOffIconProps> = memo(props => {
  return <PianoOffSvg {...props} />;
});
