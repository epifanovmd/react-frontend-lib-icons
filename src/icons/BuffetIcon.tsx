import React, { FC, memo } from 'react';
import BuffetSvg from '../svg/buffet.svg';

export interface IBuffetIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BuffetIcon: FC<IBuffetIconProps> = memo(props => {
  return <BuffetSvg {...props} />;
});
