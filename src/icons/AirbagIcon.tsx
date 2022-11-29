import React, { FC, memo } from 'react';
import AirbagSvg from '../svg/airbag.svg';

export interface IAirbagIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AirbagIcon: FC<IAirbagIconProps> = memo(props => {
  return <AirbagSvg {...props} />;
});
