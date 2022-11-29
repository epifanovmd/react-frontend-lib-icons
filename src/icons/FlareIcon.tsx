import React, { FC, memo } from 'react';
import FlareSvg from '../svg/flare.svg';

export interface IFlareIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlareIcon: FC<IFlareIconProps> = memo(props => {
  return <FlareSvg {...props} />;
});
