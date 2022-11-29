import React, { FC, memo } from 'react';
import PianoSvg from '../svg/piano.svg';

export interface IPianoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PianoIcon: FC<IPianoIconProps> = memo(props => {
  return <PianoSvg {...props} />;
});
