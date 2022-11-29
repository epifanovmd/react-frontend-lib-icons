import React, { FC, memo } from 'react';
import EjectCircleSvg from '../svg/eject-circle.svg';

export interface IEjectCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EjectCircleIcon: FC<IEjectCircleIconProps> = memo(props => {
  return <EjectCircleSvg {...props} />;
});
