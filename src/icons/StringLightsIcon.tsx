import React, { FC, memo } from 'react';
import StringLightsSvg from '../svg/string-lights.svg';

export interface IStringLightsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StringLightsIcon: FC<IStringLightsIconProps> = memo(props => {
  return <StringLightsSvg {...props} />;
});
