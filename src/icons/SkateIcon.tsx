import React, { FC, memo } from 'react';
import SkateSvg from '../svg/skate.svg';

export interface ISkateIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SkateIcon: FC<ISkateIconProps> = memo(props => {
  return <SkateSvg {...props} />;
});
