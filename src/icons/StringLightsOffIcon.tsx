import React, { FC, memo } from 'react';
import StringLightsOffSvg from '../svg/string-lights-off.svg';

export interface IStringLightsOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StringLightsOffIcon: FC<IStringLightsOffIconProps> = memo(props => {
  return <StringLightsOffSvg {...props} />;
});
