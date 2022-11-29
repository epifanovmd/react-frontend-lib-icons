import React, { FC, memo } from 'react';
import SkullSvg from '../svg/skull.svg';

export interface ISkullIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SkullIcon: FC<ISkullIconProps> = memo(props => {
  return <SkullSvg {...props} />;
});
