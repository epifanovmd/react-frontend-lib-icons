import React, { FC, memo } from 'react';
import HelicopterSvg from '../svg/helicopter.svg';

export interface IHelicopterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HelicopterIcon: FC<IHelicopterIconProps> = memo(props => {
  return <HelicopterSvg {...props} />;
});
