import React, { FC, memo } from 'react';
import BeakerCheckSvg from '../svg/beaker-check.svg';

export interface IBeakerCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BeakerCheckIcon: FC<IBeakerCheckIconProps> = memo(props => {
  return <BeakerCheckSvg {...props} />;
});
