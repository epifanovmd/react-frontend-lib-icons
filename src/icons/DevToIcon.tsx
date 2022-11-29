import React, { FC, memo } from 'react';
import DevToSvg from '../svg/dev-to.svg';

export interface IDevToIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DevToIcon: FC<IDevToIconProps> = memo(props => {
  return <DevToSvg {...props} />;
});
