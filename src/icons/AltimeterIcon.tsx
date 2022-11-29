import React, { FC, memo } from 'react';
import AltimeterSvg from '../svg/altimeter.svg';

export interface IAltimeterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AltimeterIcon: FC<IAltimeterIconProps> = memo(props => {
  return <AltimeterSvg {...props} />;
});
