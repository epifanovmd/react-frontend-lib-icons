import React, { FC, memo } from 'react';
import ForkliftSvg from '../svg/forklift.svg';

export interface IForkliftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ForkliftIcon: FC<IForkliftIconProps> = memo(props => {
  return <ForkliftSvg {...props} />;
});
