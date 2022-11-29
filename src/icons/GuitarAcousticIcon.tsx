import React, { FC, memo } from 'react';
import GuitarAcousticSvg from '../svg/guitar-acoustic.svg';

export interface IGuitarAcousticIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GuitarAcousticIcon: FC<IGuitarAcousticIconProps> = memo(props => {
  return <GuitarAcousticSvg {...props} />;
});
