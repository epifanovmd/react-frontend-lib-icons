import React, { FC, memo } from 'react';
import MicroscopeSvg from '../svg/microscope.svg';

export interface IMicroscopeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicroscopeIcon: FC<IMicroscopeIconProps> = memo(props => {
  return <MicroscopeSvg {...props} />;
});
